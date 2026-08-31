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
        lat: -31.5667308,
        lng: -63.5166732
    };

    // Niveles de zoom — Google Maps soporta hasta 21, mucho más que Esri (18)
    const ZOOM_CEMETERY = 21;  // Máximo zoom real de Google Maps satelital
    const ZOOM_TARGET   = 19;  // Zoom de apertura de la parcela (4 niveles más que Esri)

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
    let userCircle            = null;   // Círculo azul de precisión
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
     * Crea el marcador SVG de color para la parcela (Google Maps AdvancedMarkerElement).
     */
    function createTargetMarkerContent(sector) {
        const color = getSectorColor(sector);
        const pin = document.createElement("div");
        pin.innerHTML = `
            <div style="
                width: 44px;
                height: 44px;
                background: ${color};
                border: 4px solid #FFFFFF;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                box-shadow: 0 3px 10px rgba(0,0,0,0.35);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            ">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                     style="transform: rotate(45deg); filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3))">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          fill="#FFFFFF" stroke="#0B6B3A" stroke-width="1.5"/>
                    <circle cx="12" cy="9" r="3" fill="#0B6B3A"/>
                </svg>
            </div>
        `;
        return pin;
    }

    /**
     * Crea el contenido HTML del marcador de usuario (círculo azul animado).
     */
    function createUserMarkerContent() {
        const el = document.createElement("div");
        el.innerHTML = `
            <div style="
                width: 28px;
                height: 28px;
                background: radial-gradient(circle at 35% 35%, #42A5F5, #1565C0);
                border: 3px solid #FFFFFF;
                border-radius: 50%;
                box-shadow: 0 2px 12px rgba(21,101,192,0.6),
                            0 0 0 6px rgba(21,101,192,0.15);
                animation: pulse-blue-gmaps 2s ease-in-out infinite;
            "></div>
            <style>
                @keyframes pulse-blue-gmaps {
                    0%, 100% { box-shadow: 0 2px 12px rgba(21,101,192,0.6),
                                                     0 0 0 6px rgba(21,101,192,0.15); }
                    50%      { box-shadow: 0 2px 12px rgba(21,101,192,0.6),
                                                     0 0 0 14px rgba(21,101,192,0.08); }
                }
            </style>
        `;
        return el;
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
        const center = { lat: record.latitud, lng: record.longitud };

        map = new google.maps.Map(dom.mapContainer, {
            center: center,
            zoom: ZOOM_TARGET,
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

        // Usar AdvancedMarkerElement si está disponible (nueva API), fallback a Marker
        if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
            targetMarker = new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: position,
                content: createTargetMarkerContent(record.sector),
                title: record.extinto
            });

            targetInfoWindow = new google.maps.InfoWindow({
                content: buildInfoWindowHTML(record)
            });

            targetMarker.addListener("click", () => {
                targetInfoWindow.open({
                    anchor: targetMarker,
                    map: map,
                    shouldFocus: true
                });
            });
        } else {
            // Fallback: Marker clásico
            targetMarker = new google.maps.Marker({
                position: position,
                map: map,
                title: record.extinto,
                icon: {
                    url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                            <circle cx="22" cy="22" r="20" fill="${getSectorColor(record.sector)}" stroke="white" stroke-width="4"/>
                            <circle cx="22" cy="16" r="6" fill="white"/>
                            <path d="M22 6C17 6 13 10 13 15c0 8 9 17 9 17s9-9 9-17c0-5-4-9-9-9z" fill="white" opacity="0.3"/>
                        </svg>`
                    ),
                    scaledSize: new google.maps.Size(44, 44),
                    anchor: new google.maps.Point(22, 44)
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
        updateDistanceAndLine({ lat: userLat, lng: userLng }, targetLat, targetLng);
    }

    /**
     * Dibuja o actualiza el marcador y círculo del usuario.
     */
    function drawUserElementsOnMap(userLat, userLng) {
        if (!map) return;

        const position = { lat: userLat, lng: userLng };

        // Remover elementos anteriores
        if (userMarker) userMarker.setMap(null);
        if (userCircle) userCircle.setMap(null);

        // Marcador de posición del usuario
        if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
            userMarker = new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: position,
                content: createUserMarkerContent(),
                zIndex: 200
            });
        } else {
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

        // Círculo de precisión
        userCircle = new google.maps.Circle({
            map: map,
            center: position,
            radius: 8,
            fillColor: "#42A5F5",
            fillOpacity: 0.18,
            strokeColor: "#1565C0",
            strokeWeight: 1.5,
            strokeOpacity: 0.6,
            strokeDashish: [3, 4],
            zIndex: 199
        });
    }

    /**
     * Dibuja la línea punteada y actualiza el badge de distancia.
     */
    function updateDistanceAndLine(userLatLng, targetLat, targetLng, fitBounds = true) {
        if (!map) return;

        // Remover línea anterior
        if (routeLine) routeLine.setMap(null);

        const userPos = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
        const targetPos = new google.maps.LatLng(targetLat, targetLng);

        // Calcular distancia (Haversine)
        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        const displayText = formatDistance(distanceMeters);

        // Actualizar badge
        dom.distanceValue.textContent = `Estás a ${displayText} del objetivo`;
        showDistanceBadge();

        // Dibujar línea punteada
        routeLine = new google.maps.Polyline({
            path: [userPos, targetPos],
            geodesic: true,
            strokeColor: "#0B6B3A",
            strokeWeight: 3,
            strokeOpacity: 0.85,
            icons: [{
                icon: {
                    path: "M 0,-1 0,1",
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    strokeColor: "#0B6B3A",
                },
                offset: "0",
                repeat: "18px"
            }],
            map: map
        });

        // Ajustar zoom para ver toda la ruta
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
                    updateDistanceAndLine(
                        userLatLng,
                        currentTargetCoords.lat,
                        currentTargetCoords.lng,
                        false
                    );
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
