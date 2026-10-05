/**
 * Backend API para el Cementerio Parque Memorial.
 * Usa PostgreSQL como única fuente de datos.
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = parsePort(process.env.PORT, 3000);
const HOST = process.env.HOST || '127.0.0.1';
const NODE_ENV = process.env.NODE_ENV || 'development';
const MAX_QUERY_LENGTH = 100;
const DEFAULT_PAGE_SIZE = 250;
const MAX_PAGE_SIZE = 1000;
const MAX_TRACKED_IPS = 10_000;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 120;

let pool = null;
let dbAvailable = false;

function parsePort(value, fallback) {
    const port = Number.parseInt(value, 10);
    return Number.isInteger(port) && port > 0 && port <= 65535 ? port : fallback;
}

function parsePageValue(value, fallback, max) {
    const parsed = Number.parseInt(String(value ?? ''), 10);
    return Number.isInteger(parsed) && parsed >= 0 ? Math.min(parsed, max) : fallback;
}

function publicError(res, status, message) {
    return res.status(status).json({ error: message });
}

function logDatabaseError(context, err) {
    const code = err && err.code ? ` code=${err.code}` : '';
    console.error(`[DB] ${context}${code}: ${err && err.message ? err.message : 'error desconocido'}`);
    if (NODE_ENV !== 'production' && err && err.stack) console.error(err.stack);
}

async function initDatabase() {
    if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
        console.warn('PostgreSQL no configurado; la API quedará no disponible.');
        return;
    }
    try {
        const { Pool } = require('pg');
        pool = new Pool({
            host: process.env.DB_HOST,
            port: parsePort(process.env.DB_PORT, 5432),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            max: 10,
            min: 0,
            idleTimeoutMillis: 30_000,
            connectionTimeoutMillis: 3_000,
            statement_timeout: 5_000,
            query_timeout: 6_000,
        });
        pool.on('error', (err) => logDatabaseError('error de conexión idle', err));
        await pool.query('SELECT 1');
        dbAvailable = true;
        console.log('Conectado a PostgreSQL.');
    } catch (err) {
        dbAvailable = false;
        logDatabaseError('PostgreSQL no disponible', err);
        if (pool) {
            await pool.end().catch(() => {});
            pool = null;
        }
    }
}

function escapeLike(value) {
    return value.replace(/[\\%_]/g, (char) => `\\${char}`);
}

function buildParcelasQuery(searchTerm = null, limit = DEFAULT_PAGE_SIZE, offset = 0) {
    let query = `
        SELECT parcela AS id, TRIM(extinto) AS extinto,
               TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
               TO_CHAR(defuncion, 'YYYY-MM-DD') AS defuncion,
               nivel, lote, TRIM(sector) AS sector, numero_parcela,
               ST_Y(ST_Centroid(geom)) AS latitud,
               ST_X(ST_Centroid(geom)) AS longitud
        FROM servsoc.v_ocup_parcelas`;
    const params = [];
    if (searchTerm) {
        params.push(`%${escapeLike(searchTerm.trim().toUpperCase())}%`);
        query += " WHERE UPPER(extinto) LIKE $1 ESCAPE '\\'";
    }
    params.push(limit, offset);
    query += ` ORDER BY extinto LIMIT $${params.length - 1} OFFSET $${params.length}`;
    return { query, params };
}

app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(self)');
    res.setHeader('Content-Security-Policy', "default-src 'self'; base-uri 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self' https://maps.googleapis.com https://maps.gstatic.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com; connect-src 'self' https://*.googleapis.com https://*.gstatic.com");
    next();
});

const corsOrigins = (process.env.CORS_ORIGINS || '').split(',').map((origin) => origin.trim()).filter(Boolean);
if (corsOrigins.length > 0) {
    app.use(cors({
        origin: (origin, callback) => {
            if (!origin || corsOrigins.includes(origin)) return callback(null, true);
            return callback(new Error('Origen CORS no permitido'));
        },
        methods: ['GET', 'OPTIONS'], credentials: false,
    }));
}

app.use(express.json({ limit: '100kb' }));

const rateBuckets = new Map();
app.use('/api', (req, res, next) => {
    const now = Date.now();
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const current = rateBuckets.get(ip);
    if (!current || now - current.startedAt >= RATE_WINDOW_MS) {
        if (!rateBuckets.has(ip) && rateBuckets.size >= MAX_TRACKED_IPS) {
            return publicError(res, 503, 'Servicio temporalmente saturado');
        }
        rateBuckets.set(ip, { startedAt: now, count: 1 });
    } else {
        current.count += 1;
        if (current.count > RATE_MAX_REQUESTS) {
            res.setHeader('Retry-After', '60');
            return publicError(res, 429, 'Demasiadas solicitudes');
        }
    }
    for (const [key, bucket] of rateBuckets) {
        if (now - bucket.startedAt >= RATE_WINDOW_MS * 2) rateBuckets.delete(key);
    }
    next();
});

app.use((req, res, next) => {
    console.log(`[REQ] ${new Date().toISOString()} ${req.method} ${req.path}`);
    next();
});

app.get('/api/health', async (req, res) => {
    if (!dbAvailable) return publicError(res, 503, 'Servicio de datos no disponible');
    try {
        const result = await pool.query('SELECT COUNT(*) AS total FROM servsoc.v_ocup_parcelas');
        return res.json({ status: 'ok', source: 'postgresql', total_registros: Number(result.rows[0].total), timestamp: new Date().toISOString() });
    } catch (err) {
        logDatabaseError('health falló', err);
        dbAvailable = false;
        return publicError(res, 503, 'Servicio de datos no disponible');
    }
});

app.get('/api/allcolumn', async (req, res) => {
    if (process.env.ENABLE_DEBUG_ENDPOINTS !== 'true') return publicError(res, 404, 'Ruta no encontrada');
    if (!dbAvailable) return publicError(res, 503, 'Servicio de datos no disponible');
    try {
        const result = await pool.query(`
            SELECT parcela AS id, TRIM(extinto) AS extinto, nivel, lote,
                   TRIM(sector) AS sector, numero_parcela
            FROM servsoc.v_ocup_parcelas LIMIT 5`);
        return res.json({ data: result.rows, source: 'postgresql' });
    } catch (err) {
        logDatabaseError('allcolumn falló', err);
        dbAvailable = false;
        return publicError(res, 503, 'Servicio de datos no disponible');
    }
});

app.get('/api/parcelas', async (req, res) => {
    const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
    if (q.length > MAX_QUERY_LENGTH) return publicError(res, 400, `El parámetro q no puede superar ${MAX_QUERY_LENGTH} caracteres`);
    const limit = parsePageValue(req.query.limit, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE);
    const offset = parsePageValue(req.query.offset, 0, 100_000);
    if (!dbAvailable) return publicError(res, 503, 'Servicio de datos no disponible');
    try {
        const { query, params } = buildParcelasQuery(q || null, limit, offset);
        const result = await pool.query(query, params);
        return res.json({ data: result.rows, count: result.rows.length, limit, offset, source: 'postgresql' });
    } catch (err) {
        logDatabaseError('búsqueda PostgreSQL falló', err);
        dbAvailable = false;
        return publicError(res, 503, 'Servicio de datos no disponible');
    }
});

app.get('/api/parcelas/:id', async (req, res) => {
    const { id } = req.params;
    if (!/^[0-9]+$/.test(id)) return publicError(res, 400, 'Identificador inválido');
    if (!dbAvailable) return publicError(res, 503, 'Servicio de datos no disponible');
    try {
        const result = await pool.query(`
            SELECT parcela AS id, TRIM(extinto) AS extinto,
                   TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
                   TO_CHAR(defuncion, 'YYYY-MM-DD') AS defuncion,
                   nivel, lote, TRIM(sector) AS sector, numero_parcela,
                   ST_Y(ST_Centroid(geom)) AS latitud,
                   ST_X(ST_Centroid(geom)) AS longitud
            FROM servsoc.v_ocup_parcelas WHERE parcela = $1`, [id]);
        if (result.rows.length > 0) return res.json({ data: result.rows[0] });
    } catch (err) {
        logDatabaseError('detalle PostgreSQL falló', err);
        dbAvailable = false;
        return publicError(res, 503, 'Servicio de datos no disponible');
    }
    return publicError(res, 404, 'Parcela no encontrada');
});

app.get('/api/stats', async (req, res) => {
    if (!dbAvailable) return publicError(res, 503, 'Servicio de datos no disponible');
    try {
        const result = await pool.query(`
            SELECT nivel, COUNT(*) AS cantidad
            FROM servsoc.v_ocup_parcelas GROUP BY nivel ORDER BY nivel`);
        return res.json({ total_parcelas: result.rows.reduce((sum, row) => sum + Number(row.cantidad), 0), niveles: result.rows, source: 'postgresql' });
    } catch (err) {
        logDatabaseError('stats PostgreSQL falló', err);
        dbAvailable = false;
        return publicError(res, 503, 'Servicio de datos no disponible');
    }
});

app.use('/api', (req, res) => publicError(res, 404, 'Ruta API no encontrada'));

app.use((err, req, res, next) => {
    if (err && err.type === 'entity.too.large') return publicError(res, 413, 'Solicitud demasiado grande');
    if (err) {
        console.error(`[HTTP] ${err.message}`);
        return publicError(res, 500, 'Error interno del servidor');
    }
    return next();
});

async function shutdown(signal) {
    console.log(`${signal}: cerrando servidor`);
    if (pool) await pool.end().catch((err) => logDatabaseError('cierre del pool falló', err));
    process.exit(0);
}
process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));

(async () => {
    await initDatabase();
    app.listen(PORT, HOST, () => console.log(`API escuchando en http://${HOST}:${PORT} (${dbAvailable ? 'PostgreSQL' : 'API no disponible'})`));
})();

module.exports = { app, buildParcelasQuery };
