/** Adaptador de Google Maps y geolocalización del navegador. */
import { buildInfoWindowHTML, formatDistance, getSectorColor, haversineDistance } from "./utils.js";

const CEMETERY_CENTER = { lat: -31.567168, lng: -63.515888 };
const ZOOM_CEMETERY = 21;
const ZOOM_INITIAL = 18;
const ZOOM_TARGET = 19;

export function createMapController(dom) {
    let map = null;
    let userMarker = null;
    let targetMarker = null;
    let targetInfoWindow = null;
    let routeLine = null;
    let geolocationWatcher = null;
    let gpsAvailable = false;
    let currentTargetCoords = null;
    let distanceUpdateTimer = null;

    const showDistanceBadge = () => dom.distanceBadge.classList.remove("hidden");
    const hideDistanceBadge = () => dom.distanceBadge.classList.add("hidden");
    const showGpsWarning = () => {
        dom.gpsWarning.classList.remove("hidden");
        dom.gpsWarningLink.href = dom.recordGoogleMaps.href;
    };
    const hideGpsWarning = () => dom.gpsWarning.classList.add("hidden");

    function placeTargetMarker(record) {
        if (targetMarker) targetMarker.setMap(null);
        if (targetInfoWindow) targetInfoWindow.close();
        const position = { lat: record.latitud, lng: record.longitud };
        const color = getSectorColor(record.sector || record.nivel);
        targetMarker = new google.maps.Marker({
            position, map, title: record.extinto,
            icon: {
                url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" fill="${color}"/><circle cx="12" cy="11" r="5" fill="white"/><circle cx="12" cy="11" r="2.5" fill="${color}"/></svg>`),
                scaledSize: new google.maps.Size(24, 34),
                anchor: new google.maps.Point(12, 34),
            },
            zIndex: 100,
        });
        targetInfoWindow = new google.maps.InfoWindow({ content: buildInfoWindowHTML(record) });
        targetMarker.addListener("click", () => targetInfoWindow.open(map, targetMarker));
    }

    function drawUserElementsOnMap(userLat, userLng) {
        if (!map) return;
        const position = { lat: userLat, lng: userLng };
        if (userMarker) {
            userMarker.setPosition(position);
            return;
        }
        userMarker = new google.maps.Marker({
            position, map,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10, fillColor: "#42A5F5", fillOpacity: 1, strokeColor: "#FFFFFF", strokeWeight: 3 },
            zIndex: 200,
        });
    }

    function updateBadgeOnly(userLatLng, targetLat, targetLng) {
        if (!map) return;
        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        dom.distanceValue.textContent = `Estás a ${formatDistance(distanceMeters)} del objetivo`;
        showDistanceBadge();
    }

    function updateDistanceAndLine(userLatLng, targetLat, targetLng) {
        if (!map) return;
        const userPos = new google.maps.LatLng(userLatLng.lat, userLatLng.lng);
        const targetPos = new google.maps.LatLng(targetLat, targetLng);
        if (routeLine) routeLine.setMap(null);
        const distanceMeters = haversineDistance(userLatLng.lat, userLatLng.lng, targetLat, targetLng);
        dom.distanceValue.textContent = `Estás a ${formatDistance(distanceMeters)} del objetivo`;
        showDistanceBadge();
        routeLine = new google.maps.Polyline({
            path: [userPos, targetPos], geodesic: true, strokeOpacity: 0,
            icons: [{ icon: { path: "M 0,-1.5 0,1.5", strokeOpacity: 1, strokeWeight: 3, strokeColor: "#0B6B3A" }, offset: "0", repeat: "16px" }],
            map,
        });
    }

    function stopDistanceUpdates() {
        if (distanceUpdateTimer !== null) {
            clearInterval(distanceUpdateTimer);
            distanceUpdateTimer = null;
        }
    }

    function startDistanceUpdates() {
        stopDistanceUpdates();
        distanceUpdateTimer = setInterval(() => {
            if (!gpsAvailable || !userMarker || !currentTargetCoords) return;
            const position = userMarker.getPosition ? userMarker.getPosition() : userMarker.position;
            if (!position) return;
            const userLatLng = typeof position.lat === "function" ? { lat: position.lat(), lng: position.lng() } : { lat: position.lat, lng: position.lng };
            updateBadgeOnly(userLatLng, currentTargetCoords.lat, currentTargetCoords.lng);
        }, 1000);
    }

    function onGpsPositionAvailable(userLat, userLng, targetLat, targetLng) {
        if (!map) return;
        drawUserElementsOnMap(userLat, userLng);
        updateDistanceAndLine({ lat: userLat, lng: userLng }, targetLat, targetLng);
    }

    function setupGeolocation(targetLat, targetLng) {
        if (geolocationWatcher !== null && navigator.geolocation) {
            navigator.geolocation.clearWatch(geolocationWatcher);
            geolocationWatcher = null;
        }
        hideGpsWarning();
        startDistanceUpdates();
        if (!navigator.geolocation) {
            showGpsWarning();
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                gpsAvailable = true;
                onGpsPositionAvailable(position.coords.latitude, position.coords.longitude, targetLat, targetLng);
            },
            (error) => {
                console.warn("[GPS] getCurrentPosition falló:", error.message);
                gpsAvailable = false;
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
        );
        geolocationWatcher = navigator.geolocation.watchPosition(
            (position) => {
                gpsAvailable = true;
                hideGpsWarning();
                onGpsPositionAvailable(position.coords.latitude, position.coords.longitude, targetLat, targetLng);
            },
            (error) => {
                console.warn("[GPS] watchPosition error:", error.message);
                gpsAvailable = false;
                showGpsWarning();
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 15000 }
        );
    }

    function updateMapForRecord(record) {
        if (!map) return;
        const newPosition = { lat: record.latitud, lng: record.longitud };
        placeTargetMarker(record);
        currentTargetCoords = newPosition;
        map.panTo(newPosition);
        map.setZoom(ZOOM_TARGET);
        if (gpsAvailable && userMarker) {
            const position = userMarker.getPosition ? userMarker.getPosition() : userMarker.position;
            if (position) {
                const userLatLng = typeof position.lat === "function" ? { lat: position.lat(), lng: position.lng() } : { lat: position.lat, lng: position.lng };
                updateDistanceAndLine(userLatLng, newPosition.lat, newPosition.lng);
            }
        }
        setTimeout(() => google.maps.event.trigger(map, "resize"), 100);
    }

    function initMap(record) {
        if (typeof google === "undefined" || !google.maps) {
            showGpsWarning();
            return;
        }
        map = new google.maps.Map(dom.mapContainer, {
            center: CEMETERY_CENTER, zoom: ZOOM_INITIAL, minZoom: 15, maxZoom: ZOOM_CEMETERY,
            mapTypeId: google.maps.MapTypeId.SATELLITE, mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_CENTER,
                mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
            },
            zoomControl: true, zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
            streetViewControl: false, fullscreenControl: false, rotateControl: false, tilt: 0, gestureHandling: "greedy",
            styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }],
        });
        google.maps.event.addListenerOnce(map, "idle", () => dom.mapCard.classList.add("map-loaded"));
        updateMapForRecord(record);
    }

    return {
        showRecord: (record) => { if (!map) initMap(record); else updateMapForRecord(record); },
        setupGeolocation,
        resize: () => { if (map && typeof google !== "undefined" && google.maps) google.maps.event.trigger(map, "resize"); },
        hideIndicators: () => { hideDistanceBadge(); hideGpsWarning(); stopDistanceUpdates(); },
    };
}
