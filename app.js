/**
 * app.js — Lógica principal de la SPA
 * Jardín del Rosario - Cementerio Parque — Coovilros Ltda.
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
    let totalRecords = null;

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
        recordLote:     $("#record-lote"),
        recordParcela:  $("#record-parcela"),
        mapCard:         $("#map-card"),
        mapContainer:   $("#map-container"),
        distanceBadge:  $("#distance-badge"),
        distanceValue:  $("#distance-value"),
        gpsWarning:     $("#gps-warning"),
        gpsWarningLink: $("#gps-warning-gmaps-link"),
        recordGoogleMaps: $("#record-google-maps"),
    };

    /** Formatea fecha ISO "YYYY-MM-DD" → "DD/MM/YYYY". */
    function formatDate(isoDate) {
        if (!isoDate) return "—";
        const [y, m, d] = isoDate.split("-").map(Number);
        return `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${y}`;
    }

    /** Redondea metros a entero y formatea con separador de miles. */
    function formatDistance(meters) {
        return Math.round(meters).toLocaleString("es-AR") + " m";
    }

    /** Mapeo de sector a color. */
    function getSectorColor(sector) {
        const colorMap = {
            'AMARILLO': '#FFC200',
            'AZUL':     '#2C3592',
            'NARANJA':  '#F57C17',
            'VERDE':    '#8CBF26',
            'VIOLETA':  '#C2529B',
        };
        return colorMap[sector] || (typeof getColorForSector === 'function' ? getColorForSector(sector) : '#0B6B3A');
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
        return `
            <div style="font-family: Inter, sans-serif; min-width: 180px; padding: 6px 2px;">
                <p style="font-weight:700; color:#0B6B3A; margin:0 0 6px; font-size:15px;">
                    ${record.extinto}
                </p>
                <p style="margin:2px 0; color:#555; font-size:12px;">
                    ${record.nacimiento ? 'Nac. ' + formatDate(record.nacimiento) : ''}
                    ${record.defuncion ? ' · Def. ' + formatDate(record.defuncion) : ''}
                </p>
                <p style="margin:2px 0; color:#555; font-size:12px;">
                    ${record.sector ? 'Sec. ' + record.sector + ' · ' : ''}Lot. ${record.lote || '-'} · Par. ${record.numero_parcela || record.id || '-'}
                </p>
            </div>
        `;
    }

    function goHome() {
        dom.viewSearch.classList.remove("hidden");
        dom.viewMap.classList.add("hidden");
        dom.searchInput.value = "";
        dom.resultsGrid.innerHTML = "";
        dom.emptyState.classList.add("hidden");
        dom.resultsCount.classList.remove("hidden");
        const countValue = document.getElementById("results-count-value");
        if (countValue) {
            countValue.textContent = totalRecords !== null
                ? totalRecords.toLocaleString("es-AR")
                : "0";
        }
        dom.searchInput.focus();
        hideDistanceBadge();
        hideGpsWarning();
        stopDistanceUpdates();
    }

    async function filterRecords(query) {
        // No buscar si el input está vacío
        const trimmed = (query || '').trim();
        if (!trimmed) {
            dom.resultsGrid.innerHTML = "";
            dom.resultsCount.classList.remove("hidden");
            document.getElementById("results-count-value").textContent =
                totalRecords !== null ? totalRecords.toLocaleString('es-AR') : "0";
            dom.emptyState.classList.add("hidden");
            return;
        }

        try {
            const records = await window.fetchParcelas(trimmed);

            if (!records || !Array.isArray(records)) {
                console.error('[App] fetchParcelas devolvió:', records);
                return;
            }

            renderCards(records);

            const count = records.length;
            const countEl = document.getElementById("results-count");
            const countVal = document.getElementById("results-count-value");
            countEl.classList.remove("hidden");
            countVal.textContent = count.toLocaleString('es-AR');
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

        const html = records.map((r, index) => {
            return `
                <article class="result-card"
                         data-id="${r.id}"
                         data-record-index="${index}"
                         role="button"
                         tabindex="0"
                         aria-label="Ver ubicación de ${r.extinto}">
                    <div class="card-name">${r.extinto}</div>
                    <div class="card-data">
                        <div class="data-row">
                            <span class="data-label">Nac.</span>
                            <span>${r.nacimiento ? formatDate(r.nacimiento) : '—'}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Def.</span>
                            <span>${r.defuncion ? formatDate(r.defuncion) : '—'}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Sec.</span>
                            <span>${r.sector || r.nivel || '—'}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Lot.</span>
                            <span>${r.lote || '—'}</span>
                        </div>
                        <div class="data-row">
                            <span class="data-label">Par.</span>
                            <span>${r.numero_parcela || r.nro || r.id || '—'}</span>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        grid.innerHTML = html;

        grid.querySelectorAll("article").forEach((card) => {
            const handleActivate = () => {
                // Usar el objeto exacto de la búsqueda evita colisiones cuando
                // varias filas comparten el mismo número físico de parcela.
                showMapView(records[Number(card.dataset.recordIndex)]);
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

    async function showMapView(recordOrId) {
        const record = typeof recordOrId === "object"
            ? recordOrId
            : await window.fetchParcelaById(recordOrId);
        if (!record) return;

        dom.recordName.textContent     = record.extinto;
        dom.recordBirthTxt.textContent = formatDate(record.nacimiento);
        dom.recordDeathTxt.textContent = formatDate(record.defuncion);
        dom.recordSector.textContent   = record.sector || record.nivel || '—';
        dom.recordLote.textContent     = record.lote || '—';
        dom.recordParcela.textContent  = record.numero_parcela || record.nro || record.id || '—';

        dom.viewSearch.classList.add("hidden");
        dom.viewMap.classList.remove("hidden");

        dom.recordGoogleMaps.href =
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

        // El borde negro queda como fallback visual si el mapa no llega a cargar.
        // Cuando Google Maps termina de dibujar, se elimina para dejar visible
        // únicamente el radio suave del mapa.
        google.maps.event.addListenerOnce(map, "idle", () => {
            dom.mapCard.classList.add("map-loaded");
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
        const color = getSectorColor(record.sector || record.nivel);

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

    /** Dibuja la línea punteada y actualiza el badge de distancia. */
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

        // La vista siempre queda centrada en la parcela destino; no se
        // ajusta el encuadre para incluir la posición del usuario.
        void fitBounds;
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
        dom.gpsWarningLink.href = dom.recordGoogleMaps.href;
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

        // El contador es el total de registros de la base, no la cantidad filtrada.
        window.fetchParcelas('').then((records) => {
            totalRecords = Array.isArray(records) ? records.length : null;
            const countVal = document.getElementById('results-count-value');
            if (countVal && totalRecords !== null) {
                countVal.textContent = totalRecords.toLocaleString('es-AR');
                dom.resultsCount.classList.remove("hidden");
            }
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

// API pública del módulo: bootstrap.js necesita iniciar la aplicación
// después de que el DOM y Google Maps estén listos.
window.app = app;
