/**
 * server.js — Backend API para el Cementerio Parque Memorial
 * Conecta a PostgreSQL y sirve los datos de parcelas
 * 
 * Uso: 
 *   npm install
 *   cp .env.example .env  (editar con tus credenciales)
 *   node server.js
 * 
 * Endpoints:
 *   GET /api/parcelas          → Todas las parcelas
 *   GET /api/parcelas?q=texto  → Búsqueda por nombre
 *   GET /api/parcelas/:id      → Parcela por ID
 *   GET /api/health            → Health check
 */

require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------------------------------
// Configuración de PostgreSQL
// ----------------------------------------------------------------------------

const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    max: 10,                       // Máximo de conexiones en el pool
    idleTimeoutMillis: 30000,      // Cerrar conexiones inactivas después de 30s
    connectionTimeoutMillis: 5000, // Timeout de conexión: 5s
    // SSL si el servidor lo requiere (descomentar si es necesario)
    // ssl: { rejectUnauthorized: false }
});

// Log de conexión (sin mostrar la contraseña)
console.log('🔌 Conectando a PostgreSQL:', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

// Verificar conexión al iniciar
pool.query('SELECT NOW()')
    .then(res => console.log('✅ Conectado a PostgreSQL:', res.rows[0].now))
    .catch(err => {
        console.error('❌ Error conectando a PostgreSQL:', err.message);
        process.exit(1);
    });

// ----------------------------------------------------------------------------
// Middleware
// ----------------------------------------------------------------------------

app.use(cors());                          // Permitir requests desde el frontend
app.use(express.json());                  // Parsear JSON bodies
app.use(express.static(path.join(__dirname))); // Servir archivos estáticos (HTML, CSS, JS)

// ----------------------------------------------------------------------------
// Helper: construir query de la vista
// ----------------------------------------------------------------------------

/**
 * Consulta la vista v_ocup_parcelas.
 * Ajustá los nombres de columnas si la vista tiene diferentes campos.
 * 
 * Nota: La vista tiene geometría PostGIS (geom). Usamos ST_Y/ST_X para
 * extraer lat/lng del centroide.
 */
function buildParcelasQuery(searchTerm = null) {
    let query = `
        SELECT 
            id,
            extinto,
            TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
            TO_CHAR(defuncion, 'YYYY-MM-DD')  AS defuncion,
            sector,
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

// ----------------------------------------------------------------------------
// Rutas API
// ----------------------------------------------------------------------------

/**
 * GET /api/health
 * Verifica que el servidor y la BD estén funcionando
 */
app.get('/api/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) AS total FROM servsoc.v_ocup_parcelas');
        res.json({
            status: 'ok',
            database: 'connected',
            total_registros: parseInt(result.rows[0].total),
            timestamp: new Date().toISOString()
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            database: 'disconnected',
            error: err.message
        });
    }
});

/**
 * GET /api/parcelas
 * Retorna todas las parcelas, con búsqueda opcional por nombre
 * Query params: ?q=texto (búsqueda parcial)
 */
app.get('/api/parcelas', async (req, res) => {
    try {
        const { q } = req.query;
        const { query, params } = buildParcelasQuery(q);
        
        const result = await pool.query(query, params);
        
        console.log(`📋 Consulta: ${result.rows.length} registros` + 
            (q ? ` (búsqueda: "${q}")` : ''));
        
        res.json({
            data: result.rows,
            count: result.rows.length
        });
    } catch (err) {
        console.error('❌ Error en /api/parcelas:', err.message);
        res.status(500).json({
            error: 'Error al consultar la base de datos',
            message: err.message
        });
    }
});

/**
 * GET /api/parcelas/:id
 * Retorna una parcela específica por ID
 */
app.get('/api/parcelas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT 
                id,
                extinto,
                TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
                TO_CHAR(defuncion, 'YYYY-MM-DD')  AS defuncion,
                sector,
                ST_Y(ST_Centroid(geom))  AS latitud,
                ST_X(ST_Centroid(geom))  AS longitud
            FROM servsoc.v_ocup_parcelas
            WHERE id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Parcela no encontrada' });
        }

        res.json({ data: result.rows[0] });
    } catch (err) {
        console.error('❌ Error en /api/parcelas/:id:', err.message);
        res.status(500).json({ error: err.message });
    }
});

/**
 * GET /api/stats
 * Estadísticas de uso (para monitoreo)
 */
app.get('/api/stats', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                COUNT(*) AS total_parcelas,
                COUNT(DISTINCT sector) AS total_sectores,
                sector,
                COUNT(*) AS cantidad
            FROM servsoc.v_ocup_parcelas
            GROUP BY sector
            ORDER BY sector
        `);

        res.json({
            sectores: result.rows,
            total_parcelas: result.rows.reduce((sum, r) => sum + parseInt(r.cantidad), 0)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ----------------------------------------------------------------------------
// Servir la SPA (fallback para rutas no encontradas)
// ----------------------------------------------------------------------------

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ----------------------------------------------------------------------------
// Iniciar servidor
// ----------------------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║  🏛️  Cementerio Parque Memorial — API Server               ║
║  Puerto: ${PORT}                                             ║
║  Backend: PostgreSQL (${process.env.DB_HOST || '190.120.96.26'}:${process.env.DB_PORT || '15432'})  ║
║  Vista: servsoc.v_ocup_parcelas                             ║
╚══════════════════════════════════════════════════════════════╝
    `);
});
