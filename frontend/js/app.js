/** Coordinador de estado, búsqueda y vistas de la SPA. */
import { fetchDatabaseHealth, fetchParcelaById, fetchParcelas } from "./api.js";
import { createMapController } from "./map.js";
import { escapeHtml, formatDate } from "./utils.js";

const app = (() => {
    "use strict";
    const $ = (selector) => document.querySelector(selector);
    const dom = {
        viewSearch: $("#view-search"), viewMap: $("#view-map"), searchInput: $("#search-input"), searchBtn: $("#search-btn"),
        resultsGrid: $("#results-grid"), emptyState: $("#empty-state"), resultsCount: $("#results-count"), resultsCountLoading: $("#results-count-loading"),
        databaseError: $("#database-error"), btnBack: $("#btn-back"), recordName: $("#record-name"), recordBirthTxt: $("#record-birth-text"),
        recordDeathTxt: $("#record-death-text"), recordSector: $("#record-sector"), recordLote: $("#record-lote"), recordParcela: $("#record-parcela"),
        mapCard: $("#map-card"), mapContainer: $("#map-container"), distanceBadge: $("#distance-badge"), distanceValue: $("#distance-value"),
        gpsWarning: $("#gps-warning"), gpsWarningLink: $("#gps-warning-gmaps-link"), recordGoogleMaps: $("#record-google-maps"),
    };
    const mapController = createMapController(dom);
    let totalRecords = null;
    let databaseUnavailable = true;

    function setSearchAvailability(enabled) {
        [dom.searchInput, dom.searchBtn].forEach((element) => {
            if (!element) return;
            element.disabled = !enabled;
            element.setAttribute("aria-disabled", String(!enabled));
        });
    }

    function showDatabaseError(error) {
        console.error("[App] Mostrando alerta de indisponibilidad de PostgreSQL:", error || "sin detalle");
        databaseUnavailable = true;
        totalRecords = null;
        setSearchAvailability(false);
        dom.resultsGrid.innerHTML = "";
        dom.emptyState.classList.add("hidden");
        dom.resultsCount.classList.add("hidden");
        dom.databaseError.classList.remove("hidden");
    }

    function hideDatabaseError() {
        console.info("[App] Servicio de datos disponible; habilitando búsqueda");
        databaseUnavailable = false;
        setSearchAvailability(true);
        dom.databaseError.classList.add("hidden");
    }

    function goHome() {
        dom.viewSearch.classList.remove("hidden");
        dom.viewMap.classList.add("hidden");
        dom.searchInput.value = "";
        dom.resultsGrid.innerHTML = "";
        dom.emptyState.classList.add("hidden");
        dom.resultsCount.classList.remove("hidden");
        const countValue = document.getElementById("results-count-value");
        if (countValue) countValue.textContent = totalRecords !== null ? totalRecords.toLocaleString("es-AR") : "0";
        dom.searchInput.focus();
        mapController.hideIndicators();
    }

    async function filterRecords(query) {
        if (databaseUnavailable) return;
        const trimmed = (query || "").trim();
        console.info(`[App] Búsqueda solicitada (${trimmed ? "con texto" : "vacía"})`);
        if (!trimmed) {
            dom.resultsGrid.innerHTML = "";
            dom.resultsCount.classList.remove("hidden");
            document.getElementById("results-count-value").textContent = totalRecords !== null ? totalRecords.toLocaleString("es-AR") : "0";
            dom.emptyState.classList.add("hidden");
            return;
        }
        try {
            const records = await fetchParcelas(trimmed);
            if (!Array.isArray(records)) throw new Error("Respuesta de registros no válida");
            renderCards(records);
            hideDatabaseError();
            document.getElementById("results-count").classList.remove("hidden");
            document.getElementById("results-count-value").textContent = records.length.toLocaleString("es-AR");
        } catch (error) {
            console.error("[App] Error en filterRecords:", error);
            showDatabaseError();
        }
    }

    function renderCards(records) {
        if (records.length === 0) {
            dom.resultsGrid.innerHTML = "";
            dom.emptyState.classList.remove("hidden");
            return;
        }
        dom.emptyState.classList.add("hidden");
        dom.resultsGrid.innerHTML = records.map((record, index) => `
            <article class="result-card" data-id="${escapeHtml(record.id)}" data-record-index="${index}" role="button" tabindex="0" aria-label="Ver ubicación de ${escapeHtml(record.extinto)}">
                <div class="card-name">${escapeHtml(record.extinto)}</div>
                <div class="card-data">
                    <div class="data-row"><span class="data-label">Nac.</span><span>${escapeHtml(record.nacimiento ? formatDate(record.nacimiento) : "—")}</span></div>
                    <div class="data-row"><span class="data-label">Def.</span><span>${escapeHtml(record.defuncion ? formatDate(record.defuncion) : "—")}</span></div>
                    <div class="data-row"><span class="data-label">Sec.</span><span>${escapeHtml(record.sector || record.nivel || "—")}</span></div>
                    <div class="data-row"><span class="data-label">Lot.</span><span>${escapeHtml(record.lote || "—")}</span></div>
                    <div class="data-row"><span class="data-label">Par.</span><span>${escapeHtml(record.numero_parcela || record.nro || record.id || "—")}</span></div>
                </div>
            </article>`).join("");
        dom.resultsGrid.querySelectorAll("article").forEach((card) => {
            const activate = () => showMapView(records[Number(card.dataset.recordIndex)]);
            card.addEventListener("click", activate);
            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    activate();
                }
            });
        });
    }

    async function showMapView(recordOrId) {
        const record = typeof recordOrId === "object" ? recordOrId : await fetchParcelaById(recordOrId);
        if (!record) return;
        dom.recordName.textContent = record.extinto;
        dom.recordBirthTxt.textContent = formatDate(record.nacimiento);
        dom.recordDeathTxt.textContent = formatDate(record.defuncion);
        dom.recordSector.textContent = record.sector || record.nivel || "—";
        dom.recordLote.textContent = record.lote || "—";
        dom.recordParcela.textContent = record.numero_parcela || record.nro || record.id || "—";
        dom.viewSearch.classList.add("hidden");
        dom.viewMap.classList.remove("hidden");
        dom.recordGoogleMaps.href = `https://www.google.com/maps/dir/?api=1&destination=${record.latitud},${record.longitud}&travelmode=walking`;
        mapController.showRecord(record);
        setTimeout(() => mapController.resize(), 200);
        mapController.setupGeolocation(record.latitud, record.longitud);
    }

    function hideRecordsLoading() {
        dom.resultsCountLoading.classList.add("hidden");
    }

    function initApp() {
        console.info("[App] initApp — DOM:", dom.searchInput ? "OK" : "FALTA", "| cliente API:", typeof fetchParcelas);
        if (!dom.searchInput || !dom.searchBtn) {
            console.error("[App] Elementos DOM no encontrados. Verificar IDs en index.html");
            hideRecordsLoading();
            return;
        }
        setSearchAvailability(false);
        console.info("[App] Consultando /api/health para obtener el total real de registros");
        fetchDatabaseHealth()
            .then((health) => {
                totalRecords = Number(health.total_registros);
                hideDatabaseError();
                document.getElementById("results-count-value").textContent = totalRecords.toLocaleString("es-AR");
                dom.resultsCount.classList.remove("hidden");
                console.info(`[App] Total de registros informado por PostgreSQL: ${totalRecords}`);
            })
            .catch((error) => {
                console.error("[App] Error al cargar el total de registros:", error);
                showDatabaseError(error);
            })
            .finally(hideRecordsLoading);
        dom.searchBtn.addEventListener("click", () => filterRecords(dom.searchInput.value));
        dom.searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                filterRecords(dom.searchInput.value);
            }
        });
        dom.btnBack.addEventListener("click", goHome);
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (!dom.viewMap.classList.contains("hidden")) mapController.resize();
            }, 250);
        });
    }

    return { initApp, goHome, filterRecords, renderCards, showMapView, setupGeolocation: mapController.setupGeolocation };
})();

window.app = app;
export { app };
