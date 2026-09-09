/**
 * app.js — Lógica principal de la SPA
 * Cementerio Parque Memorial — Coovilros Ltda.
 *
 * Responsabilidades:
 *   - Conmutación de vistas (Búsqueda / Ficha+Mapa)
 *   - Renderizado de tarjetas de resultados
 *   - Inicialización y manejo del mapa Google Maps (satelital)
 *   - Geolocalización GPS en tiempo real con watchPosition
 *   - Línea de ruta + badge de distancia dinámico
 *   - Navegación externa a Google Maps
 */

const app = (() => {
    "use strict";

    // Centro del cementerio (fallback si no hay GPS)
    const CEMETERY_CENTER = { lat: -31.567168, lng: -63.515888 };

    const ZOOM_CEMETERY = 21;
    const ZOOM_INITIAL  = 18;
    const ZOOM_TARGET   = 19;

    let map                 = null;
    let userMarker          = null;
    let targetMarker        = null;
    let targetInfoWindow    = null;
    let routeLine           = null;
    let geolocationWatcher  = null;
    let gpsAvailable        = false;
    let currentTargetCoords = null;
    let distanceUpdateTimer = null;

    const $ = (sel) => document.querySelector(sel);

    const dom = {
        viewSearch:     $("#view-search"),
        viewMap:        $("#view-map"),
        searchInput:    $("#search-input"),
        searchBtn:      $("#search-btn"),
        resultsGrid:    $("#results-grid"),
        emptyState:     $("#empty-state"),
        resultsCount:   $("#results-count"),
        btnBack:        $("#btn-back"),
        recordName:     $("#record-name"),
        recordBirthTxt: $("#record-birth-text"),
        recordDeathTxt: $("#record-death-text"),
        recordSector:   $("#record-sector"),
        mapContainer:   $("#map-container"),
        distanceBadge:  $("#distance-badge"),
        distanceValue:  $("#distance-value"),
        gpsWarning:     $("#gps-warning"),
        gpsWarningLink: $("#gps-warning-gmaps-link"),
        btnGoogleMaps:  $("#btn-google-maps"),
    };

    /** Formatea fecha ISO "YYYY-MM-DD" → "DD de MMMM de YYYY". */
    function formatDate(isoDate) {
        if (!isoDate) return "—";
        const [y, m, d] = isoDate.split("-").map(Number);
        const meses = [
            "enero","febrero","marzo","abril","mayo","junio",
            "julio","agosto","septiembre","octubre","noviembre","diciembre"
        ];
        return `${d} de ${meses[m - 1]} de ${y}`;
    }

    /** Redondea metros a entero y formatea con separador de miles. */
    function formatDistance(meters) {
        return Math.round(meters).toLocaleString("es-AR") + " m";
    }

    /** Mapeo de sector a color. */
    function getSectorColor(sector) {
        const colorMap = {
            'AMARILLO': '#FFD700',
            'AZUL':     '#4285F4',
            'NARANJA':  '#FF9800',
            'VERDE':    '#4CAF50',
            'VIOLETA':  '#9C27B0',
        };
        return colorMap[sector] || (typeof getColorForSector === 'function' ? getColorForSector(sector) : '#888888');
    }

    /**
     * Distancia Haversine entre dos puntos en metros.
     */
    function haversineDistance(lat1, lng1, lat2, lng2) {
        const R = 6371000;
        const toRad = (deg) => deg * Math.PI / 180;
        const dLat = toRad(lat2 - lat1);
        const dLng = toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) ** 2 +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLng / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    /** HTML del InfoWindow para un registro. */
    function buildInfoWindowHTML(record) {
        const sectorOrNivel = record.sector || record.nivel || '';
        return `
            <div style="font-family: Inter, sans-serif; min-width: 170px; padding: 4px 0;">
                <p style="font-weight:700; color:#0B6B3A; margin:0 0 4px; font-size:14px;">
                    ${record.extinto}
                </p>
                <p style="margin:2px 0; color:#666666; font-size:12px;">
                    ${record.nacimiento ? formatDate(record.nacimiento) : ''}${record.defuncion ? ' — ' + formatDate(record.defuncion) : ''}
                </p>
                <p style="margin:2px 0; color:#0B6B3A; font-size:12px; font-weight:600;">
                    ${sectorOrNivel}
                </p>
            </div>
        `;
    }

    function goHome() {
        dom.viewSearch.classList.remove("hidden");
        dom.viewMap.classList.add("hidden");
        dom.searchInput.value = "";
        dom.searchInput.focus();
        hideDistanceBadge();
        hideGpsWarning();
        stopDistanceUpdates();
    }

    async function filterRecords(query) {
        try {
            const records = await window.fetchParcelas(query);

            if (!records || !Array.isArray(records)) {
                console.error('[App] fetchParcelas devolvió:', records);
                return;
            }

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
        } catch (err) {
            console.error('[App] Error en filterRecords:', err);
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
            const sectorColor = r.color_sector || getSectorColor(r.sector || r.nivel);
            const sectorName = r.sector || '';
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
                                ${r.nacimiento ? '<span>Nac: ' + formatDate(r.nacimiento) + '</span><span class="text-coovilros-text-secondary/40">·</span>' : ''}
                                ${r.defuncion ? '<span>Def: ' + formatDate(r.defuncion) + '</span>' : ''}
                            </div>
                            <div class="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
                                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold"
                                     style="background: ${sectorColor}18; color: ${sectorColor}; border: 1px solid ${sectorColor}40;">
                                    <span class="w-1.5 h-1.5 rounded-full" style="background: ${sectorColor}"></span>
                                    Sec: ${sectorName}
                                </div>
                                <div class="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">
                                    Lot: ${r.lote || '-'}
                                </div>
                                <div class="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">
                                    Par: ${r.numero_parcela || r.id || '-'}
                                </div>
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

    async function showMapView(recordId) {
        const record = await window.fetchParcelaById(recordId);
        if (!record) return;

        dom.recordName.textContent     = record.extinto;
        dom.recordBirthTxt.textContent = formatDate(record.nacimiento);
        dom.recordDeathTxt.textContent = formatDate(record.defuncion);
        dom.recordSector.textContent   = record.sector || record.nivel || '';

        dom.viewSearch.classList.add("hidden");
        dom.viewMap.classList.remove("hidden");

        dom.btnGoogleMaps.href =
            `https://www.google.com/maps/dir/?api=1&destination=${record.latitud},${record.longitud}&travelmode=walking`;

        if (!map) {
            initMap(record);
        } else {
            updateMapForRecord(record);
        }

        setTimeout(() => {
            if (map) google.maps.event.trigger(map, "resize");
        }, 200);

        setupGeolocation(record.latitud, record.longitud);
    }

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
            styles: [
                { featureType: "poi",     stylers: [{ visibility: "off" }] },
                { featureType: "transit", stylers: [{ visibility: "off" }] }
            ]
        });

        placeTargetMarker(record);
        currentTargetCoords = { lat: record.latitud, lng: record.longitud };

        if (gpsAvailable) {
            drawUserElementsOnMap(currentTargetCoords.lat, currentTargetCoords.lng);
        } else {
            showGpsWarning(record);
        }
    }

    /** Coloca o reemplaza el marcador de la parcela en el mapa. */
    function placeTargetMarker(record) {
        if (targetMarker) targetMarker.setMap(null);
        if (targetInfoWindow) targetInfoWindow.close();

        const position = { lat: record.latitud, lng: record.longitud };
        const color = record.color_sector || getSectorColor(record.sector || record.nivel);

        targetMarker = new google.maps.Marker({
            position,
            map,
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

        targetInfoWindow = new google.maps.InfoWindow({ content: buildInfoWindowHTML(record) });
        targetMarker.addListener("click", () => {
            targetInfoWindow.open(map, targetMarker);
        });
    }

    function updateMapForRecord(record) {
        if (!map) return;

        const newPos = { lat: record.latitud, lng: record.longitud };

        placeTargetMarker(record);
        targetInfoWindow.open({ anchor: targetMarker, map, shouldFocus: false });

        currentTargetCoords = newPos;
        map.panTo(newPos);
        map.setZoom(ZOOM_TARGET);

        if (gpsAvailable && userMarker) {
            const userPos = userMarker.getPosition ? userMarker.getPosition() : (userMarker.position || null);
            if (userPos) {
                updateDistanceAndLine(
                    { lat: userPos.lat(), lng: userPos.lng() },
                    currentTargetCoords.lat,
                    currentTargetCoords.lng
                );
            }
        }

        setTimeout(() => google.maps.event.trigger(map, "resize"), 100);
    }

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
        updateDistanceAndLine({ lat: userLat, lng: userLng }, targetLat, targetLng, false);
    }

    /**
     * Dibuja o actualiza el marcador del usuario en el mapa.
     * Si ya existe, solo mueve la posición.
     */
    function drawUserElementsOnMap(userLat, userLng) {
        if (!map) return;

        const position = { lat: userLat, lng: userLng };

        if (userMarker) {
            userMarker.setPosition(position);
            return;
        }

        userMarker = new google.maps.Marker({
            position,
            map,
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

    /** Actualiza solo el texto del badge de distancia. */
    function updateBadgeOnly(userLatLng, targetLat, targetLng) {
        if (!map) return;

        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        dom.distanceValue.textContent = `Estás a ${formatDistance(distanceMeters)} del objetivo`;
        showDistanceBadge();
    }

    /**
     * Dibuja la línea punteada y actualiza el badge de distancia.
     * @param {boolean} [fitBounds=true] — Ajusta zoom solo en la primera llamada.
     */
    function updateDistanceAndLine(userLatLng, targetLat, targetLng, fitBounds = true) {
        if (!map) return;

        const userPos = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
        const targetPos = new google.maps.LatLng(targetLat, targetLng);

        if (routeLine) routeLine.setMap(null);

        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        dom.distanceValue.textContent = `Estás a ${formatDistance(distanceMeters)} del objetivo`;
        showDistanceBadge();

        routeLine = new google.maps.Polyline({
            path: [userPos, targetPos],
            geodesic: true,
            strokeOpacity: 0,
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
            map
        });

        if (fitBounds) {
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(userPos);
            bounds.extend(targetPos);
            map.fitBounds(bounds, 60);
        }
    }

    function startDistanceUpdates() {
        stopDistanceUpdates();
        distanceUpdateTimer = setInterval(() => {
            if (gpsAvailable && userMarker && currentTargetCoords) {
                const pos = userMarker.getPosition ? userMarker.getPosition() : (userMarker.position || null);
                if (pos) {
                    const userLatLng = typeof pos.lat === "function"
                        ? { lat: pos.lat(), lng: pos.lng() }
                        : { lat: pos.lat, lng: pos.lng };
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

    function initApp() {
        console.log('[App] initApp — DOM:', dom.searchInput ? 'OK' : 'FALTA', '| fetchParcelas:', typeof window.fetchParcelas);

        if (!dom.searchInput || !dom.searchBtn) {
            console.error('[App] Elementos DOM no encontrados. Verificar IDs en index.html');
            return;
        }

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

    return {
        initApp,
        goHome,
        filterRecords,
        renderCards,
        showMapView,
        setupGeolocation
    };
})();
