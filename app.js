/**
 * app.js — Lógica principal de la SPA
 * Módulo de Geolocalización y Búsqueda de Parcelas
 * Cementerio Parque Memorial — Coovilros Ltda.
 *
 * Versión: Google Maps JavaScript API (reemplaza Leaflet/Esri)
 *
 * Responsabilidades:
 *   - Conmutación de vistas (Búsqueda / Ficha+Mapa)
 *   - Búsqueda en tiempo real sobre MOCK_DATABASE
 *   - Renderizado de tarjetas estilo Coovilros
 *   - Inicialización y manejo del mapa Google Maps (satelital)
 *   - Geolocalización GPS en tiempo real con watchPosition
 *   - Línea de ruta + badge de distancia dinámico
 *   - Botón de navegación externa a Google Maps
 */

const app = (() => {
    "use strict";

    // ------------------------------------------------------------------------
    // Constantes y configuración
    // ------------------------------------------------------------------------

    // Coordenadas centro del cementerio (fallback si no hay GPS)
    const CEMETERY_CENTER = {
        lat: -31.567168,
        lng: -63.515888
    };

    // Niveles de zoom
    const ZOOM_CEMETERY = 21;  // Máximo zoom real de Google Maps satelital
    const ZOOM_INITIAL  = 18;  // Zoom de apertura general del cementerio
    const ZOOM_TARGET   = 19;  // Zoom al seleccionar una parcela

    // Colores Coovilros
    const COLORS = {
        primary:  "#0B6B3A",
        dark:     "#005826",
        action:   "#00A859",
        bg:       "#F4F6F8",
        iconBg:   "#E3F5E9",
        text:     "#222222",
        textSec:  "#666666",
        white:    "#FFFFFF"
    };

    // ------------------------------------------------------------------------
    // Estado interno
    // ------------------------------------------------------------------------

    let map                   = null;   // google.maps.Map instance
    let userMarker            = null;   // Marcador de la posición del usuario
    let targetMarker          = null;   // Marcador de la parcela objetivo
    let targetInfoWindow      = null;   // InfoWindow del marcador objetivo
    let routeLine             = null;   // Polyline usuario → parcela
    let geolocationWatcher    = null;   // ID del watchPosition
    let gpsAvailable          = false;  // ¿El usuario concedió permisos GPS?
    let currentTargetCoords   = null;   // { lat, lng } de la parcela seleccionada
    let distanceUpdateTimer   = null;   // ID del setInterval de refresco del badge (1 s)

    // Referencias DOM
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const dom = {
        viewSearch:     $("#view-search"),
        viewMap:        $("#view-map"),
        searchInput:    $("#search-input"),
        searchBtn:      $("#search-btn"),
        resultsGrid:    $("#results-grid"),
        emptyState:     $("#empty-state"),
        resultsCount:   $("#results-count"),
        resultsCountVal:"#results-count-value",
        btnBack:        $("#btn-back"),
        recordName:     $("#record-name"),
        recordBirth:    $("#record-birth"),
        recordBirthTxt: $("#record-birth-text"),
        recordDeath:    $("#record-death"),
        recordDeathTxt: $("#record-death-text"),
        recordSector:   $("#record-sector"),
        mapContainer:   $("#map-container"),
        distanceBadge:  $("#distance-badge"),
        distanceValue:  $("#distance-value"),
        gpsWarning:     $("#gps-warning"),
        gpsWarningLink: $("#gps-warning-gmaps-link"),
        btnGoogleMaps:  $("#btn-google-maps"),
    };

    // ------------------------------------------------------------------------
    // Utilidades
    // ------------------------------------------------------------------------

    /**
     * Da formato a una fecha ISO "YYYY-MM-DD" → "DD de MMMM de YYYY".
     */
    function formatDate(isoDate) {
        if (!isoDate) return "—";
        const [y, m, d] = isoDate.split("-").map(Number);
        const date = new Date(y, m - 1, d);
        const meses = [
            "enero","febrero","marzo","abril","mayo","junio",
            "julio","agosto","septiembre","octubre","noviembre","diciembre"
        ];
        return `${date.getDate()} de ${meses[date.getMonth()]} de ${y}`;
    }

    /**
     * Redondea metros a entero y formatea con separador de miles.
     */
    function formatDistance(meters) {
        return Math.round(meters).toLocaleString("es-AR") + " m";
    }

    /**
     * Mapeo de sector → color.
     */
    function getSectorColor(sector) {
        const colorMap = {
            "Sector Verde":    "#0B6B3A",
            "Sector Azul":     "#1565C0",
            "Sector Amarillo": "#F9A825",
            "Sector Rojo":     "#C62828",
            "Sector Rosa":     "#AD1457",
            "Sector Naranja":  "#EF6C00"
        };
        return colorMap[sector] || "#0B6B3A";
    }

    /**
     * Fórmula de Haversine para calcular distancia entre dos puntos en metros.
     * (Google Maps no tiene un método directo de distancia en el objeto Map)
     */
    function haversineDistance(lat1, lng1, lat2, lng2) {
        const R = 6371000; // Radio de la Tierra en metros
        const toRad = (deg) => deg * Math.PI / 180;
        const dLat = toRad(lat2 - lat1);
        const dLng = toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) ** 2 +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLng / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    /**
     * Genera el HTML del InfoWindow (popup) para un registro.
     */
    function buildInfoWindowHTML(record) {
        return `
            <div style="font-family: Inter, sans-serif; min-width: 170px; padding: 4px 0;">
                <p style="font-weight:700; color:#0B6B3A; margin:0 0 4px; font-size:14px;">
                    ${record.extinto}
                </p>
                <p style="margin:2px 0; color:#666666; font-size:12px;">
                    ${formatDate(record.nacimiento)} — ${formatDate(record.defuncion)}
                </p>
                <p style="margin:2px 0; color:#0B6B3A; font-size:12px; font-weight:600;">
                    ${record.sector}
                </p>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    //  Navegación entre vistas
    // ------------------------------------------------------------------------

    function goHome() {
        dom.viewSearch.classList.remove("hidden");
        dom.viewMap.classList.add("hidden");
        dom.searchInput.value = "";
        dom.searchInput.focus();
        hideDistanceBadge();
        hideGpsWarning();
        stopDistanceUpdates();
    }

    // ------------------------------------------------------------------------
    //  VISTA A — Búsqueda y resultados
    // ------------------------------------------------------------------------

    function filterRecords(query) {
        const records = window.filterRecords(query);
        renderCards(records);

        const count = records.length;
        const countEl = document.getElementById("results-count");
        const countVal = document.getElementById("results-count-value");
        if (count > 0) {
            countEl.classList.remove("hidden");
            countVal.textContent = count;
        } else {
            countEl.classList.add("hidden");
        }
    }

    function renderCards(records) {
        const grid = dom.resultsGrid;

        if (records.length === 0) {
            grid.innerHTML = "";
            dom.emptyState.classList.remove("hidden");
            return;
        }

        dom.emptyState.classList.add("hidden");

        const html = records.map((r) => {
            const sectorColor = getSectorColor(r.sector);
            return `
                <article class="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-coovilros-primary/8
                                hover:shadow-md hover:border-coovilros-primary/20 transition-all duration-200 cursor-pointer
                                hover:-translate-y-0.5 active:scale-[0.99]"
                         data-id="${r.id}"
                         role="button"
                         tabindex="0"
                         aria-label="Ver ubicación de ${r.extinto}">
                    <div class="flex items-start gap-3.5">
                        <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-coovilros-icon-bg flex items-center justify-center">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-coovilros-primary" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" stroke-width="1.6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                <circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none"/>
                            </svg>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h3 class="font-bold text-coovilros-text text-base sm:text-lg leading-tight truncate">
                                ${r.extinto}
                            </h3>
                            <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-sm text-coovilros-text-secondary">
                                <span>${formatDate(r.nacimiento)}</span>
                                <span class="text-coovilros-text-secondary/40">·</span>
                                <span>${formatDate(r.defuncion)}</span>
                            </div>
                            <div class="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                                 style="background: ${sectorColor}18; color: ${sectorColor}; border: 1px solid ${sectorColor}40;">
                                <span class="w-1.5 h-1.5 rounded-full" style="background: ${sectorColor}"></span>
                                ${r.sector}
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        grid.innerHTML = html;

        grid.querySelectorAll("article").forEach((card) => {
            const handleActivate = () => {
                const id = parseInt(card.dataset.id, 10);
                showMapView(id);
            };
            card.addEventListener("click", handleActivate);
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleActivate();
                }
            });
        });
    }

    // ------------------------------------------------------------------------
    //  VISTA B — Ficha del fallecido + Mapa
    // ------------------------------------------------------------------------

    function showMapView(recordId) {
        const record = window.getRecordById(recordId);
        if (!record) return;

        // 1. Actualizar encabezado de ficha
        dom.recordName.textContent     = record.extinto;
        dom.recordBirthTxt.textContent = formatDate(record.nacimiento);
        dom.recordDeathTxt.textContent = formatDate(record.defuncion);
        dom.recordSector.textContent   = record.sector;

        // 2. Conmutar vistas
        dom.viewSearch.classList.add("hidden");
        dom.viewMap.classList.remove("hidden");

        // 3. Construir URL de Google Maps (navegación externa — NO consume API)
        dom.btnGoogleMaps.href =
            `https://www.google.com/maps/dir/?api=1&destination=${record.latitud},${record.longitud}&travelmode=walking`;

        // 4. Inicializar o actualizar mapa
        if (!map) {
            initMap(record);
        } else {
            updateMapForRecord(record);
        }

        // Forzar recálculo del tamaño del mapa (crucial tras display:none → block)
        setTimeout(() => {
            if (map) google.maps.event.trigger(map, "resize");
        }, 200);

        // 5. Intentar geolocalización
        setupGeolocation(record.latitud, record.longitud);
    }

    // ------------------------------------------------------------------------
    //  Mapa Google Maps
    // ------------------------------------------------------------------------

    function initMap(record) {
        map = new google.maps.Map(dom.mapContainer, {
            center: CEMETERY_CENTER,
            zoom: ZOOM_INITIAL,
            minZoom: 15,
            maxZoom: ZOOM_CEMETERY,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_CENTER,
                mapTypeIds: [
                    google.maps.MapTypeId.SATELLITE,
                    google.maps.MapTypeId.HYBRID,
                    google.maps.MapTypeId.ROADMAP
                ]
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            streetViewControl: false,
            fullscreenControl: false,
            rotateControl: false,
            tilt: 0,
            gestureHandling: "greedy",
            // Desactivar POIs y labels para no distraer
            styles: [
                {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit",
                    stylers: [{ visibility: "off" }]
                }
            ]
        });

        // ---- Marcador objetivo (parcela) ----
        placeTargetMarker(record);

        // ---- Geolocalización ----
        currentTargetCoords = { lat: record.latitud, lng: record.longitud };

        if (gpsAvailable) {
            drawUserElementsOnMap(currentTargetCoords.lat, currentTargetCoords.lng);
        } else {
            showGpsWarning(record);
        }
    }

    /**
     * Coloca (o reemplaza) el marcador de la parcela en el mapa.
     */
    function placeTargetMarker(record) {
        // Remover marcador anterior
        if (targetMarker) targetMarker.setMap(null);
        if (targetInfoWindow) targetInfoWindow.close();

        const position = { lat: record.latitud, lng: record.longitud };
        const color = getSectorColor(record.sector);

        // Marker clásico con icono SVG custom (reemplaza el pin por defecto)
        targetMarker = new google.maps.Marker({
            position: position,
            map: map,
            title: record.extinto,
            icon: {
                url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34">
                        <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" fill="${color}"/>
                        <circle cx="12" cy="11" r="5" fill="white"/>
                        <circle cx="12" cy="11" r="2.5" fill="${color}"/>
                    </svg>`
                ),
                scaledSize: new google.maps.Size(24, 34),
                anchor: new google.maps.Point(12, 34)
            },
            zIndex: 100
        });

        targetInfoWindow = new google.maps.InfoWindow({
            content: buildInfoWindowHTML(record)
        });

        targetMarker.addListener("click", () => {
            targetInfoWindow.open(map, targetMarker);
        });
    }

    /**
     * Actualiza el mapa para un nuevo registro.
     */
    function updateMapForRecord(record) {
        if (!map) return;

        const newPos = { lat: record.latitud, lng: record.longitud };

        // Reemplazar marcador
        placeTargetMarker(record);
        targetInfoWindow.open({
            anchor: targetMarker,
            map: map,
            shouldFocus: false
        });

        currentTargetCoords = newPos;

        // Re-centrar
        map.panTo(newPos);
        map.setZoom(ZOOM_TARGET);

        // Recalcular distancia si hay GPS activo
        if (gpsAvailable && userMarker) {
            const userPos = userMarker.getPosition ? userMarker.getPosition() :
                           (userMarker.position || null);
            if (userPos) {
                updateDistanceAndLine(
                    { lat: userPos.lat(), lng: userPos.lng() },
                    currentTargetCoords.lat,
                    currentTargetCoords.lng
                );
            }
        }

        // Forzar recálculo de tamaño
        setTimeout(() => google.maps.event.trigger(map, "resize"), 100);
    }

    // ------------------------------------------------------------------------
    //  Geolocalización
    // ------------------------------------------------------------------------

    function setupGeolocation(targetLat, targetLng) {
        if (geolocationWatcher !== null) {
            navigator.geolocation.clearWatch(geolocationWatcher);
            geolocationWatcher = null;
        }

        hideGpsWarning();
        startDistanceUpdates();

        if (!navigator.geolocation) {
            showGpsWarning({ latitud: targetLat, longitud: targetLng });
            return;
        }

        // Posición rápida inicial
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                gpsAvailable = true;
                const { latitude: lat, longitude: lng } = pos.coords;
                onGpsPositionAvailable(lat, lng, targetLat, targetLng);
            },
            (err) => {
                console.warn("[GPS] getCurrentPosition falló:", err.message);
                gpsAvailable = false;
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
        );

        // Rastreo continuo
        geolocationWatcher = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;
                gpsAvailable = true;
                hideGpsWarning();
                onGpsPositionAvailable(lat, lng, targetLat, targetLng);
            },
            (err) => {
                console.warn("[GPS] watchPosition error:", err.message);
                gpsAvailable = false;
                showGpsWarning({ latitud: targetLat, longitud: targetLng });
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 15000 }
        );
    }

    function onGpsPositionAvailable(userLat, userLng, targetLat, targetLng) {
        if (!map) return;
        drawUserElementsOnMap(userLat, userLng);
        // Solo actualizar badge y línea, SIN mover el zoom
        updateDistanceAndLine({ lat: userLat, lng: userLng }, targetLat, targetLng, false);
    }

    /**
     * Dibuja o actualiza el marcador del usuario.
     * Solo mueve el marker existente si ya existe; no crea círculo.
     */
    function drawUserElementsOnMap(userLat, userLng) {
        if (!map) return;

        const position = { lat: userLat, lng: userLng };

        // Si ya existe, solo mover (sin recrear)
        if (userMarker) {
            userMarker.setPosition(position);
            return;
        }

        // Primera vez: crear círculo azul
        userMarker = new google.maps.Marker({
            position: position,
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#42A5F5",
                fillOpacity: 1,
                strokeColor: "#FFFFFF",
                strokeWeight: 3,
            },
            zIndex: 200
        });
    }

    /**
     * Actualiza SOLO el badge de distancia y la línea punteada.
     * No toca zoom ni marcadores.
     */
    function updateBadgeOnly(userLatLng, targetLat, targetLng) {
        if (!map) return;

        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        dom.distanceValue.textContent = `Estás a ${formatDistance(distanceMeters)} del objetivo`;
        showDistanceBadge();
    }

    /**
     * Dibuja la línea punteada (solo punteada, sin trazo base) y
     * actualiza el badge de distancia.
     *
     * @param {boolean} [fitBounds=true]  Ajusta zoom solo en la primera llamada.
     */
    function updateDistanceAndLine(userLatLng, targetLat, targetLng, fitBounds = true) {
        if (!map) return;

        const userPos = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
        const targetPos = new google.maps.LatLng(targetLat, targetLng);

        // Remover línea anterior
        if (routeLine) routeLine.setMap(null);

        // Calcular distancia
        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        dom.distanceValue.textContent = `Estás a ${formatDistance(distanceMeters)} del objetivo`;
        showDistanceBadge();

        // Línea punteada (sin stroke base, solo icons)
        routeLine = new google.maps.Polyline({
            path: [userPos, targetPos],
            geodesic: true,
            strokeOpacity: 0,  // Sin trazo base
            icons: [{
                icon: {
                    path: "M 0,-1.5 0,1.5",
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    strokeColor: "#0B6B3A",
                },
                offset: "0",
                repeat: "16px"
            }],
            map: map
        });

        // Ajustar zoom solo cuando se pide explícitamente
        if (fitBounds) {
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(userPos);
            bounds.extend(targetPos);
            map.fitBounds(bounds, 60);
        }
    }

    // ------------------------------------------------------------------------
    //  Refresco periódico del badge de distancia (cada 1 segundo)
    // ------------------------------------------------------------------------

    function startDistanceUpdates() {
        stopDistanceUpdates();
        distanceUpdateTimer = setInterval(() => {
            if (gpsAvailable && userMarker && currentTargetCoords) {
                const pos = userMarker.getPosition ? userMarker.getPosition() :
                           (userMarker.position || null);
                if (pos) {
                    const userLatLng = typeof pos.lat === "function"
                        ? { lat: pos.lat(), lng: pos.lng() }
                        : { lat: pos.lat, lng: pos.lng };
                    // Solo actualizar el texto del badge, sin tocar el mapa
                    updateBadgeOnly(userLatLng, currentTargetCoords.lat, currentTargetCoords.lng);
                }
            }
        }, 1000);
    }

    function stopDistanceUpdates() {
        if (distanceUpdateTimer !== null) {
            clearInterval(distanceUpdateTimer);
            distanceUpdateTimer = null;
        }
    }

    // ------------------------------------------------------------------------
    //  UI helpers
    // ------------------------------------------------------------------------

    function showDistanceBadge() {
        dom.distanceBadge.classList.remove("hidden");
    }

    function hideDistanceBadge() {
        dom.distanceBadge.classList.add("hidden");
    }

    function showGpsWarning(record) {
        dom.gpsWarning.classList.remove("hidden");
        dom.gpsWarningLink.href = dom.btnGoogleMaps.href;
    }

    function hideGpsWarning() {
        dom.gpsWarning.classList.add("hidden");
    }

    // ------------------------------------------------------------------------
    //  Inicialización
    // ------------------------------------------------------------------------

    function initApp() {
        filterRecords("");

        dom.searchInput.addEventListener("input", (e) => {
            filterRecords(e.target.value);
        });

        dom.searchBtn.addEventListener("click", () => {
            filterRecords(dom.searchInput.value);
        });

        dom.searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                filterRecords(dom.searchInput.value);
            }
        });

        dom.btnBack.addEventListener("click", goHome);

        // Refresco del mapa en resize de ventana
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (map && !dom.viewMap.classList.contains("hidden")) {
                    google.maps.event.trigger(map, "resize");
                }
            }, 250);
        });
    }

    // ------------------------------------------------------------------------
    // Público
    // ------------------------------------------------------------------------

    return {
        initApp,
        goHome,
        filterRecords,
        renderCards,
        showMapView,
        setupGeolocation
    };

})();
