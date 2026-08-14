/**
 * app.js — Lógica principal de la SPA
 * Módulo de Geolocalización y Búsqueda de Parcelas
 * Cementerio Parque Memorial — Coovilros Ltda.
 *
 * Responsabilidades:
 *   - Conmutación de vistas (Búsqueda / Ficha+Mapa)
 *   - Búsqueda en tiempo real sobre MOCK_DATABASE
 *   - Renderizado de tarjetas estilo Coovilros
 *   - Inicialización y manejo del mapa Leaflet
 *   - Geolocalización GPS en tiempo real con watchPosition
 *   - Línea de ruta + badge de distancia dinámico
 *   - Botón de navegación externa a Google Maps
 */

const app = (() => {
    "use strict";

    // ------------------------------------------------------------------------
    // Constantes y configuración
    // ------------------------------------------------------------------------

    // Coordenadas centro del cementerio ( fallback si no hay GPS )
    const CEMETERY_CENTER = {
        lat: -31.5667308,
        lng: -63.5166732
    };

    // Niveles de zoom
    // Los tiles satelitales de Esri (World Imagery) en esta zona solo tienen
    // datos reales hasta zoom 18; desde z19 en adelante devuelven el mosaico
    // gris "map data not yet available". Por eso 18 es el límite y el zoom inicial.
    const ZOOM_CEMETERY = 18;  // Máximo zoom con imágenes disponibles (límite Esri)
    const ZOOM_TARGET   = 18;  // Zoom de apertura de la parcela

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

    let map                   = null;
    let userMarker            = null;   // Marcador de la posición del usuario
    let userCircle            = null;   // Círculo azul animado
    let targetMarker          = null;   // Marcador de la parcela objetivo
    let routeLine             = null;   // Polyline_usuario → parcela
    let geolocationWatcher    = null;   // ID del watchPosition
    let gpsAvailable          = false;  // ¿El usuario concedió permisos GPS?
    let currentTargetCoords   = null;   // { lat, lng } de la parcela seleccionada

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
    //Utilidades
    // ------------------------------------------------------------------------

    /**
     * Da formato a una fecha ISO "YYYY-MM-DD" → "DD de MMMM de YYYY".
     * Ej: "1944-03-27" → "27 de marzo de 1944"
     */
    function formatDate(isoDate) {
        if (!isoDate) return "—";
        const [y, m, d] = isoDate.split("-").map(Number);
        const date = new Date(y, m - 1, d);
        const meses = [
            "enero","febrero","marzo","abril","mayo","junio",
            "julio","agosto","septiembre","octubre","noviembre","diciembre"
        ];
        const day = date.getDate();
        const mes = meses[date.getMonth()];
        return `${day} de ${mes} de ${y}`;
    }

    /**
     * Redondea metros a entero y formatea con separador de miles.
     */
    function formatDistance(meters) {
        const rounded = Math.round(meters);
        return rounded.toLocaleString("es-AR") + " m";
    }

    /**
     * Mapeo de sector → color Leaflet correspondiente.
     */
    function getSectorColor(sector) {
        const map = {
            "Sector Verde":   "#0B6B3A",
            "Sector Azul":    "#1565C0",
            "Sector Amarillo":"#F9A825",
            "Sector Rojo":    "#C62828",
            "Sector Rosa":    "#AD1457",
            "Sector Naranja": "#EF6C00"
        };
        return map[sector] || "#0B6B3A";
    }

    /**
     * Crea un ícono personalizado para Leaflet basado en colores Coovilros.
     */
    function createTargetIcon(sector) {
        const color = getSectorColor(sector);
        return L.divIcon({
            className: "custom-target-marker",
            html: `
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
                ">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                         style="transform: rotate(45deg); filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3))">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                              fill="#FFFFFF" stroke="#0B6B3A" stroke-width="1.5"/>
                        <circle cx="12" cy="9" r="3" fill="#0B6B3A"/>
                    </svg>
                </div>
            `,
            iconSize:     [44, 44],
            iconAnchor:   [22, 44],   // Punta de la flecha en el centro
            popupAnchor:  [0, -48]
        });
    }

    /**
     * Crea el marcador circular azul animado para la posición del usuario.
     */
    function createUserIcon() {
        return L.divIcon({
            className: "custom-user-marker",
            html: `
                <div style="
                    width: 28px;
                    height: 28px;
                    background: radial-gradient(circle at 35% 35%, #42A5F5, #1565C0);
                    border: 3px solid #FFFFFF;
                    border-radius: 50%;
                    box-shadow: 0 2px 12px rgba(21,101,192,0.6),
                                0 0 0 6px rgba(21,101,192,0.15);
                    animation: pulse-blue 2s ease-in-out infinite;
                "></div>
                <style>
                    @keyframes pulse-blue {
                        0%, 100% { box-shadow: 0 2px 12px rgba(21,101,192,0.6),
                                                     0 0 0 6px rgba(21,101,192,0.15); }
                        50%      { box-shadow: 0 2px 12px rgba(21,101,192,0.6),
                                                     0 0 0 14px rgba(21,101,192,0.08); }
                    }
                </style>
            `,
            iconSize:   [28, 28],
            iconAnchor: [14, 14]
        });
    }

    // ------------------------------------------------------------------------
    //  Navegación entre vistas
    // ------------------------------------------------------------------------

    /**
     * Muestra la vista de búsqueda y oculta la de mapa.
     * Restaura el foco al campo de búsqueda.
     */
    function goHome() {
        dom.viewSearch.classList.remove("hidden");
        dom.viewMap.classList.add("hidden");
        dom.searchInput.value = "";
        dom.searchInput.focus();

        // Limpiar indicadores de distancia y GPS
        hideDistanceBadge();
        hideGpsWarning();
    }

    // ------------------------------------------------------------------------
    //  VISTA A — Búsqueda y resultados
    // ------------------------------------------------------------------------

    /**
     * Filtra los registros según el query actual y los renderiza.
     * Se dispara cada vez que el usuario escribe (input event).
     */
    function filterRecords(query) {
        const records = window.filterRecords(query);
        renderCards(records);

        // Actualizar contador
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

    /**
     * Genera el HTML de la grilla de resultados y lo inyecta en el DOM.
     * Si no hay resultados, muestra el estado vacío.
     *
     * @param {Array} records  Registros a renderizar.
     */
    function renderCards(records) {
        const grid = dom.resultsGrid;

        if (records.length === 0) {
            grid.innerHTML = "";
            dom.emptyState.classList.remove("hidden");
            return;
        }

        dom.emptyState.classList.add("hidden");

        // Si no hay query (búsqueda vacía), mostrar todos los resultados
        // o un mensaje amable.
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
                        <!-- Ícono circular -->
                        <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-coovilros-icon-bg flex items-center justify-center">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-coovilros-primary" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" stroke-width="1.6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                <circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none"/>
                            </svg>
                        </div>

                        <!-- Contenido -->
                        <div class="min-w-0 flex-1">
                            <h3 class="font-bold text-coovilros-text text-base sm:text-lg leading-tight truncate">
                                ${r.extinto}
                            </h3>

                            <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-sm text-coovilros-text-secondary">
                                <span>${formatDate(r.nacimiento)}</span>
                                <span class="text-coovilros-text-secondary/40">·</span>
                                <span>${formatDate(r.defuncion)}</span>
                            </div>

                            <!-- Badge de sector -->
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

        // ATACHAR EVENTOS CLICK Y KEYDOWN a cada tarjeta
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

    /**
     * Conmuta a la vista de mapa, muestra los datos del fallecido y
     * inicializa el mapa Leaflet si es la primera vez.
     *
     * @param {number} recordId  ID del registro seleccionado.
     */
    function showMapView(recordId) {
        const record = window.getRecordById(recordId);
        if (!record) return;

        // 1. Actualizar encabezado de ficha
        dom.recordName.textContent          = record.extinto;
        dom.recordBirthTxt.textContent      = formatDate(record.nacimiento);
        dom.recordDeathTxt.textContent      = formatDate(record.defuncion);
        dom.recordSector.textContent        = record.sector;

        // 2. Conmutar vistas
        dom.viewSearch.classList.add("hidden");
        dom.viewMap.classList.remove("hidden");

        // 3. Construir URL de Google Maps
        const gmapsUrl =
            `https://www.google.com/maps/dir/?api=1&destination=${record.latitud},${record.longitud}&travelmode=walking`;
        dom.btnGoogleMaps.href = gmapsUrl;

        // 4. Inicializar o actualizar mapa
        if (!map) {
            initMap(record);
        } else {
            updateMapForRecord(record);
        }

        // Forzar recálculo del tamaño del mapa (crucial tras display:none → block)
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 120);

        // 5. Intentar geolocalización
        setupGeolocation(record.latitud, record.longitud);
    }

    // ------------------------------------------------------------------------
    //  Mapa Leaflet
    // ------------------------------------------------------------------------

    /**
     * Crea el mapa Leaflet con la capa satelital de Esri World Imagery,
     * el marcador de la parcela objetivo y (si hay GPS) los elementos de
     * rastreo del usuario.
     *
     * @param {Object} record  Registro del fallecido seleccionado.
     */
    function initMap(record) {
        // ---- Capa base satelital ----
        const esriSatellite = L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
                attribution: "&copy; Esri, Maxar, Earthstar Geographics",
                maxZoom: ZOOM_CEMETERY,
                minZoom: 15
            }
        );

        // ---- Mapa ----
        map = L.map("map-container", {
            center: [record.latitud, record.longitud],
            zoom:   ZOOM_TARGET,
            maxZoom: ZOOM_CEMETERY,   // No permitir acercarse a tiles inexistentes
            zoomControl: true,
            attributionControl: true
        });

        esriSatellite.addTo(map);

        // Zoom control en esquina inferior derecha (más alcanzable en móvil)
        map.zoomControl.setPosition("bottomright");

        // ---- Marcador objetivo (parcela) ----
        targetMarker = L.marker(
            [record.latitud, record.longitud],
            { icon: createTargetIcon(record.sector) }
        ).addTo(map);

        // Popup informativo
        targetMarker.bindPopup(`
            <div style="font-family: Inter, sans-serif; min-width: 170px;">
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
        `, { closeButton: true, className: "custom-popup" });

        // Al hacer clic se abre el popup
        targetMarker.on("click", () => targetMarker.openPopup());

        // ---- Elementos de geolocalización (se agregan en setupGeolocation) ----
        currentTargetCoords = { lat: record.latitud, lng: record.longitud };

        // Si el GPS ya está disponible (ej: permiso otorgado antes), dibujar
        if (gpsAvailable) {
            drawUserElementsOnMap(currentTargetCoords.lat, currentTargetCoords.lng);
        } else {
            // Mostrar advertencia GPS
            showGpsWarning(record);
        }
    }

    /**
     * Actualiza el mapa existente para un nuevo registro (mover marcador,
     * cambiar icono, re-centrar, recalcular distancia).
     */
    function updateMapForRecord(record) {
        if (!map) return;

        // Mover marcador objetivo
        if (targetMarker) map.removeLayer(targetMarker);
        targetMarker = L.marker(
            [record.latitud, record.longitud],
            { icon: createTargetIcon(record.sector) }
        ).addTo(map);

        targetMarker.bindPopup(`
            <div style="font-family: Inter, sans-serif; min-width: 170px;">
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
        `, { closeButton: true, className: "custom-popup" });

        targetMarker.on("click", () => targetMarker.openPopup());
        targetMarker.openPopup();

        currentTargetCoords = { lat: record.latitud, lng: record.longitud };

        // Re-centrar
        map.setView([record.latitud, record.longitud], ZOOM_TARGET, { animate: true });

        // Recalcular distancia si hay GPS activo
        if (gpsAvailable && userMarker) {
            updateDistanceAndLine(userMarker.getLatLng(), currentTargetCoords.lat, currentTargetCoords.lng);
        }

        // Forzar recálculo de tamaño
        setTimeout(() => map.invalidateSize(), 100);
    }

    // ------------------------------------------------------------------------
    //  Geolocalización
    // ------------------------------------------------------------------------

    /**
     * Solicita permisos de GPS y comienza el rastreo en tiempo real.
     * Dibuja el marcador azul, la línea y el badge de distancia.
     *
     * @param {number} targetLat  Latitud de la parcela objetivo.
     * @param {number} targetLng  Longitud de la parcela objetivo.
     */
    function setupGeolocation(targetLat, targetLng) {
        // Limpiar watcher anterior si existe
        if (geolocationWatcher !== null) {
            navigator.geolocation.clearWatch(geolocationWatcher);
            geolocationWatcher = null;
        }

        // Limpiar estados
        hideGpsWarning();

        if (!navigator.geolocation) {
            showGpsWarning({ latitud: targetLat, longitud: targetLng });
            return;
        }

        // También intentar obtener posición actual rápida
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                gpsAvailable = true;
                const { latitude: lat, longitude: lng } = pos.coords;
                onGpsPositionAvailable(lat, lng, targetLat, targetLng);
            },
            (err) => {
                console.warn("[GPS] getCurrentPosition falló:", err.message);
                // No mostramos advertencia aquí; el watchPosition se encargará.
                // Pero sí marcamos como no disponible para que el watchPosition
                // pueda mostrar la advertencia si falla también.
                gpsAvailable = false;
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 30000
            }
        );

        // watchPosition para rastreo continuo
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
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 15000
            }
        );
    }

    /**
     * Callback ejecutado cuando hay una posición GPS disponible.
     * Dibuja / actualiza marcador, círculo, línea y badge de distancia.
     *
     * @param {number} userLat
     * @param {number} userLng
     * @param {number} targetLat
     * @param {number} targetLng
     */
    function onGpsPositionAvailable(userLat, userLng, targetLat, targetLng) {
        if (!map) return;

        // Marcador + círculo usuario
        drawUserElementsOnMap(userLat, userLng);

        // Línea + distancia
        updateDistanceAndLine({ lat: userLat, lng: userLng }, targetLat, targetLng);
    }

    /**
     * Dibuja (o actualiza) el marcador circular azul y el círculo de
     * precisión del usuario sobre el mapa.
     */
    function drawUserElementsOnMap(userLat, userLng) {
        if (!map) return;

        // Remover capas anteriores
        if (userMarker)    map.removeLayer(userMarker);
        if (userCircle)    map.removeLayer(userCircle);

        // Marcador de posición
        userMarker = L.marker([userLat, userLng], {
            icon: createUserIcon(),
            zIndexOffset: 1000
        }).addTo(map);

        // Círculo de precisión (si el GPS lo provee)
        if (navigator.geolocation && "coords" in navigator) {
            // Usamos un radio fijo representativo o el de los coords si está disponible.
            // Como no tenemos referencia directa al último objeto PositionCoords aquí,
            // usamos un radio de 8m como estimación razonable.
            userCircle = L.circle([userLat, userLng], {
                radius: 8,
                color: "#1565C0",
                fillColor: "#42A5F5",
                fillOpacity: 0.18,
                weight: 1.5,
                dashArray: "3 4",
                zIndexOffset: 999
            }).addTo(map);
        }

        // Asegurar que el marcador esté arriba
        userMarker.bringToFront();
    }

    /**
     * Dibuja la línea punteada entre el usuario y el objetivo, y actualiza
     * el badge de distancia en tiempo real.
     */
    function updateDistanceAndLine(userLatLng, targetLat, targetLng) {
        if (!map) return;

        // Remover línea anterior
        if (routeLine) map.removeLayer(routeLine);

        // Calcular distancia
        const distanceMeters = map.distance(userLatLng, [targetLat, targetLng]);
        const displayText = formatDistance(distanceMeters);

        // Actualizar badge
        dom.distanceValue.textContent = `Estás a ${displayText} del objetivo`;
        showDistanceBadge();

        // Dibujar línea punteada
        routeLine = L.polyline([
            [userLatLng.lat, userLatLng.lng],
            [targetLat, targetLng]
        ], {
            color:      "#0B6B3A",
            weight:     3,
            dashArray:  "8 10",
            opacity:    0.85,
            lineCap:    "round",
            lineJoin:   "round"
        }).addTo(map);

        // Adaptar zoom para que quepa la ruta (opcional)
        const bounds = L.latLngBounds(
            [userLatLng.lat, userLatLng.lng],
            [targetLat, targetLng]
        );
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: ZOOM_TARGET, animate: true });
    }

    // ------------------------------------------------------------------------
    //  UI helpers — Badges y advertencias
    // ------------------------------------------------------------------------

    function showDistanceBadge() {
        dom.distanceBadge.classList.remove("hidden");
    }

    function hideDistanceBadge() {
        dom.distanceBadge.classList.add("hidden");
    }

    function showGpsWarning(record) {
        dom.gpsWarning.classList.remove("hidden");
        // Vincular el enlace del warning al botón de Google Maps
        dom.gpsWarningLink.href = dom.btnGoogleMaps.href;
    }

    function hideGpsWarning() {
        dom.gpsWarning.classList.add("hidden");
    }

    // ------------------------------------------------------------------------
    //  Inicialización
    // ------------------------------------------------------------------------

    function initApp() {
        // Renderizar todos los resultados por defecto
        filterRecords("");

        // Evento de input en tiempo real
        dom.searchInput.addEventListener("input", (e) => {
            filterRecords(e.target.value);
        });

        // Botón de búsqueda (Enter del campo también la dispara por ser type=search)
        dom.searchBtn.addEventListener("click", () => {
            filterRecords(dom.searchInput.value);
        });

        // Enter en el campo
        dom.searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                filterRecords(dom.searchInput.value);
            }
        });

        // Botón "Volver a la búsqueda"
        dom.btnBack.addEventListener("click", goHome);

        // Escuchar cambios de tamaño de ventana para recargar tiles si el
        // mapa está visible (ej: orientación del dispositivo).
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (map && !dom.viewMap.classList.contains("hidden")) {
                    map.invalidateSize();
                }
            }, 250);
        });
    }

    // -----------------------------------------------------------------------
    // Público
    // -----------------------------------------------------------------------

    return {
        initApp,
        goHome,
        filterRecords,
        renderCards,
        showMapView,
        setupGeolocation
    };

})();
