/** Cliente HTTP de la aplicación. PostgreSQL es la única fuente de datos. */
(function createApiClient(window) {
    "use strict";

    async function requestJson(url) {
        let response;
        try {
            response = await fetch(url, {
                headers: { Accept: "application/json" },
            });
        } catch (error) {
            throw new Error("No se pudo contactar al servicio de datos");
        }

        let payload;
        try {
            payload = await response.json();
        } catch (error) {
            throw new Error("La respuesta del servicio de datos no es válida");
        }

        if (!response.ok) {
            throw new Error(payload && payload.error
                ? payload.error
                : "El servicio de datos no está disponible");
        }

        return payload;
    }

    window.fetchParcelas = async function fetchParcelas(query) {
        const normalizedQuery = String(query || "").trim();
        const url = normalizedQuery
            ? "/api/parcelas?q=" + encodeURIComponent(normalizedQuery)
            : "/api/parcelas";
        const payload = await requestJson(url);
        if (!payload || !Array.isArray(payload.data)) {
            throw new Error("La respuesta de parcelas no es válida");
        }
        return payload.data;
    };

    window.fetchParcelaById = async function fetchParcelaById(id) {
        const payload = await requestJson("/api/parcelas/" + encodeURIComponent(id));
        if (!payload || !payload.data) {
            throw new Error("La respuesta de la parcela no es válida");
        }
        return payload.data;
    };
})(window);
