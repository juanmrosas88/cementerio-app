#!/usr/bin/env python3
"""
Parse cp_parcelas.csv, convert WKB geometry to lat/lng centroids,
and generate data.js mock file for the cemetery app.
"""
import csv
import json
from shapely import wkb as shapely_wkb

INPUT_CSV = 'content_app_buscar/cp_parcelas.csv'
OUTPUT_JS = 'data.js'

SECTOR_COLORS = {
    'AMARILLO': '#FFC200',
    'AZUL': '#2C3592',
    'NARANJA': '#F57C17',
    'VERDE': '#8CBF26',
    'VIOLETA': '#C2529B',
}


def parse_wkb_hex(hex_str):
    try:
        hex_str = hex_str.strip()
        if not hex_str or hex_str == '\\N':
            return None, None
        geom = shapely_wkb.loads(bytes.fromhex(hex_str))
        centroid = geom.centroid
        return round(centroid.y, 8), round(centroid.x, 8)
    except Exception as e:
        print(f"  Warning: Could not parse geometry: {e}")
        return None, None


def main():
    parcelas = []
    with open(INPUT_CSV, 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            lat, lng = parse_wkb_hex(row['geom'].strip())
            parcelas.append({
                'id': i + 1,
                'extinto': row['extinto'].strip(),
                'sector': row['sector'].strip(),
                'lote': row['lote'].strip(),
                'numero_parcela': row['nro'].strip(),
                'latitud': lat,
                'longitud': lng,
            })

    parcelas_json = json.dumps(parcelas, ensure_ascii=False, indent=2)

    js = r'''// data.js — Mock data generated from cp_parcelas.csv
// %d parcelas reales del cementerio

// Colores por sector; el color se deriva del sector, no se duplica en cada registro.
const sectorColors = {
    'AMARILLO': '#FFC200',
    'AZUL': '#2C3592',
    'NARANJA': '#F57C17',
    'VERDE': '#8CBF26',
    'VIOLETA': '#C2529B',
};

function getColorForSector(sector) {
    return sectorColors[sector] || '#888888';
}

// Parcelas reales del CSV
const parcelas = %s;

// Busqueda por texto (fallback local)
function buscarParcelas(texto) {
    if (!texto || texto.trim() === '') return parcelas;
    const lower = texto.toLowerCase();
    return parcelas.filter(p =>
        (p.extinto && p.extinto.toLowerCase().includes(lower)) ||
        (p.sector && p.sector.toLowerCase().includes(lower)) ||
        (p.lote && String(p.lote).includes(lower)) ||
        (p.numero_parcela && String(p.numero_parcela).includes(lower)) ||
        (String(p.id).includes(lower))
    );
}

// Fetch parcelas from API, fallback a mock
async function fetchParcelas(query) {
    try {
        const url = query
            ? '/api/parcelas?q=' + encodeURIComponent(query)
            : '/api/parcelas';
        const res = await fetch(url);
        const json = await res.json();
        if (json.data) return json.data;
        return json;
    } catch (err) {
        console.warn('[Mock] fetchParcelas fallback:', err.message);
        return buscarParcelas(query || '');
    }
}

// Fetch parcela by ID from API, fallback a mock
async function fetchParcelaById(id) {
    try {
        const res = await fetch('/api/parcelas/' + id);
        const json = await res.json();
        if (json.data) return json.data;
        return json;
    } catch (err) {
        console.warn('[Mock] fetchParcelaById fallback:', err.message);
        return parcelas.find(p => String(p.id) === String(id)) || null;
    }
}
''' % (len(parcelas), parcelas_json)

    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f"Generated {OUTPUT_JS} with {len(parcelas)} parcelas")


if __name__ == '__main__':
    main()
