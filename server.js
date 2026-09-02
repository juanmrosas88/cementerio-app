/**
 * server.js — Backend API para el Cementerio Parque Memorial
 * Conecta a PostgreSQL con fallback a datos mock (data.js)
 *
 * Uso:
 *   npm install
 *   cp .env.example .env  (editar con tus credenciales)
 *   node server.js
 */

require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = (process.env.PORT && process.env.PORT !== '0') ? parseInt(process.env.PORT) : 3000;

let pool = null;
let dbAvailable = false;

/**
 * Intenta conectar a PostgreSQL. Si falla, se usa datos mock.
 */
async function initDatabase() {
    try {
        const { Pool } = require('pg');
        pool = new Pool({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '5432'),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            max: 10,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 3000,
        });

        const res = await pool.query('SELECT NOW()');
        console.log('✅ Conectado a PostgreSQL:', res.rows[0].now);

        const cols = await pool.query(`
            SELECT column_name, data_type
            FROM information_schema.columns
            WHERE table_name = 'v_ocup_parcelas'
              AND table_schema = 'servsoc'
            ORDER BY ordinal_position
        `);
        if (cols.rows.length > 0) {
            console.log('📊 Columnas de servsoc.v_ocup_parcelas:');
            cols.rows.forEach(r => console.log(`   ${r.column_name} (${r.data_type})`));
        } else {
            console.log('⚠️  No se encontraron columnas para servsoc.v_ocup_parcelas');
        }

        dbAvailable = true;
    } catch (err) {
        console.error('⚠️  PostgreSQL no disponible, usando datos mock:', err.message);
        dbAvailable = false;
    }
}

let mockData = null;

/**
 * Carga los datos mock desde data.js y calcula estadísticas.
 */
function loadMockData() {
    try {
        const dataPath = path.join(__dirname, 'data.js');
        const content = fs.readFileSync(dataPath, 'utf8');
        const fn = new Function(content + '; return { parcelas, sectorColors, getColorForSector, buscarParcelas };');
        mockData = fn();

        mockData.stats = {
            totalParcelas: mockData.parcelas.length,
            totalHuérfanas: mockData.parcelas.length,
            totalExtintas: 0,
            sectores: Object.keys(mockData.sectorColors).length,
        };
        console.log(`📦 Mock data cargado: ${mockData.parcelas.length} parcelas`);
    } catch (err) {
        console.error('❌ Error cargando data.js:', err.message);
        mockData = { parcelas: [], sectorColors: {}, stats: {} };
    }
}

/**
 * Construye la query SQL para buscar parcelas.
 *
 * Columnas de la vista servsoc.v_ocup_parcelas:
 *   parcela, extinto, nacimiento, defuncion, nivel, geom (PostGIS polygon SRID 4326)
 *
 * @param {string|null} searchTerm — Texto de búsqueda (filtro por nombre del extinto)
 * @returns {{ query: string, params: string[] }}
 */
function buildParcelasQuery(searchTerm = null) {
    let query = `
        SELECT
            parcela          AS id,
            extinto,
            TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
            TO_CHAR(defuncion,  'YYYY-MM-DD') AS defuncion,
            nivel,
            ST_Y(ST_Centroid(geom))  AS latitud,
            ST_X(ST_Centroid(geom))  AS longitud
        FROM servsoc.v_ocup_parcelas
    `;
    const params = [];

    if (searchTerm) {
        params.push(`%${searchTerm.toUpperCase()}%`);
        query += ` WHERE UPPER(extinto) LIKE $1`;
    }

    query += ' ORDER BY extinto';
    return { query, params };
}

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[REQ] ${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname)));

/** GET /api/health — Estado de la API */
app.get('/api/health', async (req, res) => {
    if (dbAvailable) {
        try {
            const result = await pool.query('SELECT COUNT(*) AS total FROM servsoc.v_ocup_parcelas');
            return res.json({
                status: 'ok',
                source: 'postgresql',
                total_registros: parseInt(result.rows[0].total),
                timestamp: new Date().toISOString()
            });
        } catch (err) {
            // Query falló — reportar DB como no disponible
        }
    }

    res.json({
        status: 'ok',
        source: 'mock',
        total_registros: mockData ? mockData.parcelas.length : 0,
        timestamp: new Date().toISOString()
    });
});

/** GET /api/parcelas?q=texto — Búsqueda de parcelas */
app.get('/api/parcelas', async (req, res) => {
    const { q } = req.query;

    if (dbAvailable) {
        try {
            const { query, params } = buildParcelasQuery(q);
            const result = await pool.query(query, params);
            console.log(`[API] PostgreSQL: ${result.rows.length} registros` + (q ? ` (búsqueda: "${q}")` : ''));
            return res.json({ data: result.rows, count: result.rows.length, source: 'postgresql' });
        } catch (err) {
            console.error('[API] Query PostgreSQL falló:', err.message);
            dbAvailable = false;
        }
    }

    if (mockData) {
        const results = q ? mockData.buscarParcelas(q) : mockData.parcelas;
        console.log(`[API] Mock: ${results.length} registros` + (q ? ` (búsqueda: "${q}")` : ''));
        return res.json({ data: results, count: results.length, source: 'mock' });
    }

    res.status(500).json({ error: 'No hay datos disponibles' });
});

/** GET /api/parcelas/:id — Detalle de una parcela por ID */
app.get('/api/parcelas/:id', async (req, res) => {
    const { id } = req.params;

    if (dbAvailable) {
        try {
            const result = await pool.query(
                `SELECT parcela AS id, extinto,
                        TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
                        TO_CHAR(defuncion, 'YYYY-MM-DD') AS defuncion,
                        nivel,
                        ST_Y(ST_Centroid(geom)) AS latitud,
                        ST_X(ST_Centroid(geom)) AS longitud
                 FROM servsoc.v_ocup_parcelas
                 WHERE parcela = $1`,
                [id]
            );
            if (result.rows.length > 0) {
                return res.json({ data: result.rows[0] });
            }
        } catch (err) {
            console.error('[API] Query PostgreSQL falló:', err.message);
            dbAvailable = false;
        }
    }

    if (mockData) {
        const parcela = mockData.parcelas.find(p => String(p.id) === String(id));
        if (parcela) return res.json({ data: parcela });
    }

    res.status(404).json({ error: 'Parcela no encontrada' });
});

/** GET /api/stats — Estadísticas generales */
app.get('/api/stats', async (req, res) => {
    if (dbAvailable) {
        try {
            const result = await pool.query(`
                SELECT
                    COUNT(*) AS total_parcelas,
                    COUNT(DISTINCT nivel) AS total_niveles,
                    nivel,
                    COUNT(*) AS cantidad
                FROM servsoc.v_ocup_parcelas
                GROUP BY nivel
                ORDER BY nivel
            `);

            return res.json({
                total_parcelas: result.rows.reduce((sum, r) => sum + parseInt(r.cantidad), 0),
                niveles: result.rows,
                source: 'postgresql'
            });
        } catch (err) {
            console.error('[API] Stats PostgreSQL falló:', err.message);
            dbAvailable = false;
        }
    }

    if (mockData && mockData.stats) {
        return res.json({ ...mockData.stats, source: 'mock' });
    }

    res.status(500).json({ error: 'No hay datos disponibles' });
});

/** GET /api/sectores — Colores por sector */
app.get('/api/sectores', (req, res) => {
    if (mockData) {
        return res.json(mockData.sectorColors);
    }
    res.json({});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

(async () => {
    loadMockData();
    await initDatabase();

    app.listen(PORT, () => {
        console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
        console.log(`║  🏛️  Cementerio Parque Memorial — API Server               ║`);
        console.log(`║  Puerto: ${String(PORT).padEnd(48)}║`);
        console.log(`║  Fuente: ${(dbAvailable ? 'PostgreSQL' : 'Mock (data.js)').padEnd(49)}║`);
        console.log(`║  Vista: servsoc.v_ocup_parcelas                            ║`);
        console.log(`╚══════════════════════════════════════════════════════════════╝\n`);
    });
})();
