/**
 * bootstrap.js
 * Coordina el arranque de la aplicación con el DOM y Google Maps.
 * Google Maps requiere que initGoogleMap exista en window porque se usa
 * como callback en la URL del script cargado desde index.html.
 */
(function bootstrapApplication(window, document) {
    "use strict";

    let domReady = false;
    let mapsReady = false;
    let appStarted = false;

    function startWhenReady() {
        if (appStarted || !domReady || !mapsReady) return;

        if (!window.app || typeof window.app.initApp !== "function") {
            window.setTimeout(startWhenReady, 0);
            return;
        }

        appStarted = true;
        console.log("[App] Iniciando — DOM + Google Maps listos");
        window.app.initApp();
    }

    // Callback público requerido por Google Maps.
    window.initGoogleMap = function initGoogleMap() {
        mapsReady = true;
        startWhenReady();
    };

    document.addEventListener("DOMContentLoaded", function handleDomReady() {
        domReady = true;
        startWhenReady();
    }, { once: true });

    // La búsqueda debe seguir funcionando aunque Maps no cargue.
    window.setTimeout(function handleMapsTimeout() {
        if (mapsReady) return;

        console.warn("[App] Google Maps no cargó. Iniciando sin mapa.");
        mapsReady = true;
        startWhenReady();
    }, 8000);
})(window, document);
