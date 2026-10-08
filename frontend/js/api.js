/** Cliente HTTP de la aplicación.
 * PostgreSQL es la única fuente de datos.
 */

const REQUEST_TIMEOUT_MS = 10000;
const API_BASE = "/Parcelas/api";

function getSafePath(url) {
    try {
        return new URL(url, window.location.origin).pathname;
    } catch (error) {
        return String(url).split("?")[0];
    }
}

async function requestJson(url) {
    const safePath = getSafePath(url);
    const startedAt = performance.now();
    const controller = new AbortController();

    const timeoutId = window.setTimeout(() => {
        controller.abort();
    }, REQUEST_TIMEOUT_MS);

    console.info(`[API] GET ${safePath} — iniciando consulta`);

    let response;

    try {
        response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            signal: controller.signal
        });
    } catch (error) {
        const elapsedMs = Math.round(performance.now() - startedAt);

        const message = error.name === "AbortError"
            ? `La consulta superó el tiempo límite de ${REQUEST_TIMEOUT_MS / 1000} segundos`
            : "No se pudo contactar al servicio de datos";

        console.error(
            `[API] GET ${safePath} — error de red (${elapsedMs} ms):`,
            error
        );

        throw new Error(message);
    } finally {
        window.clearTimeout(timeoutId);
    }

    let payload;

    try {
        payload = await response.json();
    } catch (error) {
        console.error(
            `[API] GET ${safePath} — respuesta no JSON (HTTP ${response.status})`,
            error
        );

        throw new Error("La respuesta del servicio de datos no es válida");
    }

    if (!response.ok) {
        const message = payload && payload.error
            ? payload.error
            : "El servicio de datos no está disponible";

        console.error(
            `[API] GET ${safePath} — HTTP ${response.status}: ${message}`
        );

        throw new Error(message);
    }

    console.info(
        `[API] GET ${safePath} — OK HTTP ${response.status} (${Math.round(performance.now() - startedAt)} ms)`
    );

    return payload;
}

export async function fetchDatabaseHealth() {
    const payload = await requestJson(`${API_BASE}/health`);

    if (
        !payload ||
        payload.status !== "ok" ||
        !Number.isFinite(Number(payload.total_registros))
    ) {
        console.error("[API] health — payload inválido:", payload);
        throw new Error("El estado de la base de datos no es válido");
    }

    return payload;
}

export async function fetchParcelas(query) {
    const normalizedQuery = String(query || "").trim();

    const url = normalizedQuery
        ? `${API_BASE}/parcelas?q=${encodeURIComponent(normalizedQuery)}`
        : `${API_BASE}/parcelas`;

    const payload = await requestJson(url);

    if (!payload || !Array.isArray(payload.data)) {
        throw new Error("La respuesta de parcelas no es válida");
    }

    return payload.data;
}

export async function fetchParcelaById(id) {
    const payload = await requestJson(
        `${API_BASE}/parcelas/${encodeURIComponent(id)}`
    );

    if (!payload || !payload.data) {
        throw new Error("La respuesta de la parcela no es válida");
    }

    return payload.data;
}