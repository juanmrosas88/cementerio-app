/**
 * Cargador de arranque de la SPA.
 * Es un script clásico para registrar initGoogleMap antes del callback asíncrono.
 */
(function bootstrapApplication(window, document) {
    "use strict";
    let domReady = false;
    let mapsReady = false;
    let appStarted = false;

    function showStartupError(error) {
        console.error("[Bootstrap] La aplicación no pudo iniciar:", error);
        const databaseError = document.getElementById("database-error");
        const loading = document.getElementById("results-count-loading");
        const searchInput = document.getElementById("search-input");
        const searchButton = document.getElementById("search-btn");
        if (databaseError) databaseError.classList.remove("hidden");
        if (loading) loading.classList.add("hidden");
        if (searchInput) searchInput.disabled = true;
        if (searchButton) searchButton.disabled = true;
    }

    function startWhenReady() {
        if (appStarted || !domReady || !mapsReady) return;
        console.info(`[Bootstrap] Dependencias listas — DOM: ${domReady}, Google Maps: ${mapsReady}`);
        appStarted = true;
        import("./app.js")
            .then(({ app }) => {
                window.app = app;
                console.log("[App] Iniciando — DOM + Google Maps listos");
                app.initApp();
            })
            .catch((error) => {
                appStarted = false;
                showStartupError(error);
            });
    }

    window.initGoogleMap = function initGoogleMap() {
        console.info("[Bootstrap] Callback initGoogleMap recibido");
        mapsReady = true;
        startWhenReady();
    };

    document.addEventListener("DOMContentLoaded", function handleDomReady() {
        console.info("[Bootstrap] DOMContentLoaded recibido");
        domReady = true;
        startWhenReady();
    }, { once: true });

    window.setTimeout(function handleMapsTimeout() {
        if (mapsReady) return;
        console.warn("[App] Google Maps no cargó. Iniciando sin mapa.");
        mapsReady = true;
        startWhenReady();
    }, 8000);

    window.addEventListener("error", (event) => {
        console.error("[Bootstrap] Error global del frontend:", event.error || event.message);
    });
    window.addEventListener("unhandledrejection", (event) => {
        console.error("[Bootstrap] Promesa rechazada sin manejar:", event.reason);
    });
})(window, document);
