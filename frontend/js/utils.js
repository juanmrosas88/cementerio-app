/** Utilidades puras compartidas por la interfaz y el mapa. */
export function formatDate(isoDate) {
    if (!isoDate) return "—";
    const [y, m, d] = isoDate.split("-").map(Number);
    return `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
}

export function formatDistance(meters) {
    return Math.round(meters).toLocaleString("es-AR") + " m";
}

export function getSectorColor(sector) {
    const colorMap = { AMARILLO: "#FFC200", AZUL: "#2C3592", NARANJA: "#F57C17", VERDE: "#8CBF26", VIOLETA: "#C2529B" };
    return colorMap[sector] || "#0B6B3A";
}

export function haversineDistance(lat1, lng1, lat2, lng2) {
    const earthRadius = 6371000;
    const toRad = (degrees) => degrees * Math.PI / 180;
    const deltaLat = toRad(lat2 - lat1);
    const deltaLng = toRad(lng2 - lng1);
    const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(deltaLng / 2) ** 2;
    return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}

export function buildInfoWindowHTML(record) {
    return `
        <div style="font-family: Inter, sans-serif; min-width: 180px; padding: 6px 2px;">
            <p style="font-weight:700; color:#0B6B3A; margin:0 0 6px; font-size:15px;">${escapeHtml(record.extinto)}</p>
            <p style="margin:2px 0; color:#555; font-size:12px;">
                ${record.nacimiento ? "Nac. " + formatDate(record.nacimiento) : ""}
                ${record.defuncion ? " · Def. " + formatDate(record.defuncion) : ""}
            </p>
            <p style="margin:2px 0; color:#555; font-size:12px;">
                ${record.sector ? "Sec. " + escapeHtml(record.sector) + " · " : ""}Lot. ${escapeHtml(record.lote || "-")} · Par. ${escapeHtml(record.numero_parcela || record.id || "-")}
            </p>
        </div>`;
}
