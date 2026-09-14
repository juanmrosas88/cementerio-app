/** Exporta la vista PostgreSQL al respaldo local con el contrato público del frontend. */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const sectorColors = {
    AMARILLO: '#FFC200',
    AZUL: '#2C3592',
    NARANJA: '#F57C17',
    VERDE: '#8CBF26',
    VIOLETA: '#C2529B',
};

const query = `
    SELECT parcela AS id, TRIM(extinto) AS extinto,
           TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
           TO_CHAR(defuncion, 'YYYY-MM-DD') AS defuncion,
           nivel, lote, TRIM(sector) AS sector, numero_parcela,
           ST_Y(ST_Centroid(geom)) AS latitud,
           ST_X(ST_Centroid(geom)) AS longitud
    FROM servsoc.v_ocup_parcelas
    ORDER BY extinto
`;

function render(parcelas) {
    return `// data.js — respaldo generado desde servsoc.v_ocup_parcelas
// ${parcelas.length} registros reales. No editar manualmente.
const sectorColors = ${JSON.stringify(sectorColors, null, 4)};

function getColorForSector(sector) {
    return sectorColors[String(sector || '').trim().toUpperCase()] || '#888888';
}

const parcelas = ${JSON.stringify(parcelas, null, 4)};

function buscarParcelas(texto) {
    if (!texto || texto.trim() === '') return parcelas;
    const lower = texto.toLowerCase();
    return parcelas.filter(p =>
        (p.extinto && p.extinto.toLowerCase().includes(lower)) ||
        (p.sector && p.sector.toLowerCase().includes(lower)) ||
        (p.lote && String(p.lote).includes(lower)) ||
        (p.numero_parcela && String(p.numero_parcela).includes(lower)) ||
        String(p.id).includes(lower)
    );
}

async function fetchParcelas(query) {
    try {
        const url = query ? '/api/parcelas?q=' + encodeURIComponent(query) : '/api/parcelas';
        const res = await fetch(url);
        const json = await res.json();
        return json.data || json;
    } catch (err) {
        console.warn('[Mock] fetchParcelas fallback:', err.message);
        return buscarParcelas(query || '');
    }
}

async function fetchParcelaById(id) {
    try {
        const res = await fetch('/api/parcelas/' + id);
        const json = await res.json();
        return json.data || json;
    } catch (err) {
        console.warn('[Mock] fetchParcelaById fallback:', err.message);
        return parcelas.find(p => String(p.id) === String(id)) || null;
    }
}
`;
}

async function main() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 5432),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    await client.connect();
    const result = await client.query(query);
    await client.end();
    fs.writeFileSync(path.join(__dirname, '..', 'data.js'), render(result.rows), 'utf8');
    console.log(`Exportados ${result.rows.length} registros a data.js`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
