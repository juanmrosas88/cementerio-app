# Cementerio App · Ubicación de Parcelas

Aplicación web móvil para localizar parcelas del Cementerio Parque Jardín del Rosario, de Coovilros Ltda.

La persona usuaria puede buscar un fallecido por nombre o apellido, seleccionar el registro exacto y visualizar su parcela sobre Google Maps junto con los datos de ubicación.

## Funcionalidades

- Búsqueda parcial por nombre, apellido, sector, lote, parcela o identificador.
- Contador del total de registros disponibles en la base de datos.
- Tarjetas de resultados con nacimiento, defunción, sector, lote y parcela.
- Vista de detalle separada para el registro seleccionado.
- Mapa Google Maps con vista satelital y marcador de la parcela.
- Geolocalización del dispositivo mediante `getCurrentPosition` y `watchPosition`.
- Cálculo de distancia aproximada entre la persona usuaria y la parcela.
- Enlace para abrir indicaciones a pie en Google Maps.
- Acceso directo a WhatsApp con el mensaje `quiero informacion`.
- Enlace al mapa institucional en PDF.
- Fallback local con los registros incluidos en `data.js` cuando la API no está disponible.
- Interfaz responsive orientada principalmente a dispositivos móviles.

## Arquitectura

La aplicación no utiliza un bundler ni un framework frontend. Está compuesta por una SPA de JavaScript vanilla y un servidor Express que sirve los archivos y expone la API de parcelas.

### Flujo de arranque

1. `data.js` define los datos de fallback y las funciones de consulta.
2. `app.js` define la lógica de búsqueda, tarjetas, detalle, mapa y GPS.
3. `bootstrap.js` espera a que estén listos el DOM y Google Maps.
4. Cuando ambas dependencias están listas, `bootstrap.js` ejecuta `window.app.initApp()`.
5. Si Google Maps no carga en ocho segundos, la búsqueda se inicializa igualmente y el mapa queda no disponible hasta que pueda cargarse.

## Estructura del proyecto

```text
.
├── index.html                         # Documento principal y estructura de vistas
├── styles.css                         # Diseño responsive e identidad visual
├── app.js                             # Lógica de búsqueda, detalle, mapa y GPS
├── bootstrap.js                       # Inicialización coordinada de la aplicación
├── data.js                             # Fallback local y funciones de acceso a datos
├── server.js                           # Servidor Express y API REST
├── package.json                        # Scripts y dependencias del backend
├── logoheader.svg                      # Favicon institucional
├── v_cp_extintos_parque_puntos.geojson # Geodatos auxiliares
└── content_app_buscar/
    ├── logo_jdr.png                    # Logo del header
    ├── logo_coovilros.png              # Logo del footer
    ├── cp_parcelas.csv                 # Fuente de datos de fallback
    └── Cementerio_app_ubica_parcela.pdf
```

## Requisitos

- Node.js 18 o superior recomendado.
- npm.
- Navegador moderno con soporte para geolocalización.
- Clave válida de Google Maps JavaScript API configurada en `index.html`.
- PostgreSQL/PostGIS sólo si se desea utilizar la base de datos remota.

## Instalación y ejecución

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm start
```

La aplicación queda disponible en:

```text
http://localhost:3000
```

Durante el desarrollo puede utilizarse:

```bash
npm run dev
```

El script `dev` utiliza `nodemon` para reiniciar el servidor cuando cambian los archivos.

## Configuración de base de datos

Crear un archivo `.env` a partir de `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=base_de_datos
# Orígenes CORS permitidos, separados por coma. Vacío = solo same-origin.
CORS_ORIGINS=
# Solo desarrollo local; mantener desactivado en producción.
ENABLE_DEBUG_ENDPOINTS=false
```

`server.js` intenta conectarse a PostgreSQL al iniciar. Si la conexión falla, carga automáticamente los registros de `data.js` como fallback.

La consulta de producción utiliza la vista:

```text
servsoc.v_ocup_parcelas
```

Los campos esperados incluyen:

- `parcela`
- `extinto`
- `nacimiento`
- `defuncion`
- `nivel`
- `lote`
- `numero_parcela`
- `geom` como geometría PostGIS

Las coordenadas se obtienen calculando el centroide de `geom` con SRID 4326.

## API

### Estado de conexión

```http
GET /api/health
```

Devuelve el estado de la API, el origen de los datos y el total de registros.

### Buscar parcelas

```http
GET /api/parcelas?q=texto
```

Sin `q`, devuelve todos los registros disponibles. Con `q`, filtra por el nombre del fallecido en PostgreSQL o utiliza el buscador local del fallback.

Respuesta esperada:

```json
{
  "data": [
    {
      "id": 1369,
      "extinto": "CORIA HORACIO",
      "nacimiento": "1946-10-30",
      "defuncion": "2013-06-14",
      "nivel": "2",
      "lote": "24",
      "numero_parcela": "7",
      "latitud": -31.5667155,
      "longitud": -63.5155777
    }
  ],
  "count": 1,
  "source": "postgresql"
}
```

### Obtener una parcela por identificador

```http
GET /api/parcelas/:id
```

Devuelve el detalle de una parcela. En la interfaz, los resultados seleccionados se conservan directamente desde la búsqueda para evitar confundir registros cuando varias personas comparten una misma ubicación física.

### Estadísticas

```http
GET /api/stats
```

Devuelve el total de parcelas y el desglose por nivel.

### Sectores

```http
GET /api/sectores
```

Devuelve los colores configurados para los sectores.

## Uso de la interfaz

1. Ingresar el nombre o apellido en el buscador.
2. Presionar el botón de lupa o la tecla Enter.
3. Seleccionar la tarjeta del registro deseado.
4. Revisar los datos de la persona y la parcela.
5. Consultar el marcador en Google Maps.
6. Activar la ubicación del dispositivo para obtener distancia y orientación.
7. Abrir Google Maps para iniciar la navegación si es necesario.

La precisión del GPS puede variar. La aplicación informa un margen estimado de entre 3 y 5 metros.

## Integraciones externas

### Google Maps

El mapa se carga desde Google Maps JavaScript API. La clave se referencia desde `index.html` mediante el callback global `initGoogleMap`.

La aplicación utiliza:

- `google.maps.Map`
- `google.maps.Marker`
- `google.maps.InfoWindow`
- `google.maps.Polyline`
- `google.maps.LatLngBounds`

### WhatsApp

El footer abre el siguiente contacto:

```text
+54 9 3573 44-6630
```

con el mensaje predefinido:

```text
quiero informacion
```

### Mapa institucional

```text
https://www.coovilros.com/descargas/mapajardindelrosario.pdf
```

## Datos locales

`data.js` contiene el fallback de registros y las funciones:

- `buscarParcelas(texto)`
- `fetchParcelas(query)`
- `fetchParcelaById(id)`

Los datos de fallback deben mantenerse en UTF-8 para conservar correctamente caracteres como `Ñ`, `Á`, `É`, `Ü` y otros nombres propios.

## Reglas de seguridad implementadas

`server.js` aplica las siguientes reglas de forma activa:

### Cabeceras de seguridad

- `X-Powered-By` deshabilitado (`app.disable('x-powered-by')`).
- `X-Content-Type-Options: nosniff` — evita la interpretación de tipos MIME incorrectos.
- `X-Frame-Options: DENY` — impide incrustar la app en iframes (anti clickjacking).
- `Referrer-Policy: strict-origin-when-cross-origin` — limita el referente enviado.
- `Permissions-Policy: geolocation=(self)` — solo la app puede usar geolocalización.
- `Content-Security-Policy` restrictiva: `default-src 'self'`, `base-uri 'self'`, `frame-ancestors 'none'`, `object-src 'none'`; `script-src`/`style-src` permiten Google Maps/Fonts e `'unsafe-inline'` (requerido por la SPA vanilla); `img-src` admite `data:`/`blob:` y dominios de Google.

### CORS

- Configurable mediante `CORS_ORIGINS` (lista separada por comas).
- Vacío = solo solicitudes same-origin; un origen no listado recibe un error de CORS.
- Solo métodos `GET` y `OPTIONS`, sin credenciales (`credentials: false`).

### Rate limiting

- 120 solicitudes por minuto por IP en `/api` (`RATE_MAX_REQUESTS` / `RATE_WINDOW_MS`).
- Exceso: `429` con `Retry-After: 60`.
- Máximo 10 000 IPs rastreadas (`MAX_TRACKED_IPS`); al saturarse se responde `503`.
- Los depósitos expirados se limpian automáticamente.

### Validación y límites de entrada

- `q` máximo 100 caracteres (`MAX_QUERY_LENGTH`); exceso → `400`.
- `limit` máximo 1000 (por defecto 250) y `offset` máximo 100 000; valores inválidos caen al valor por defecto.
- `:id` debe ser numérico (`/^[0-9]+$/`); si no → `400`.
- Cuerpo JSON limitado a 100 KB; exceso → `413`.

### Protección de la base de datos

- Solo consultas parametrizadas (`$1`, `$2`, …); nunca interpolación de strings.
- `LIKE` con cláusula `ESCAPE` y `escapeLike()` para neutralizar `%`, `_` y `\` en el término de búsqueda.
- Pool acotado: máximo 10 conexiones, `statement_timeout` 5 s, `query_timeout` 6 s y tiempo de conexión 3 s.
- Los errores se registran en el servidor; el cliente recibe mensajes genéricos. El `stack` solo se imprime fuera de producción.

### Exposición de endpoints y archivos

- `/api/allcolumn` solo responde si `ENABLE_DEBUG_ENDPOINTS=true`; en caso contrario devuelve `404`.
- Archivos estáticos servidos desde una lista explícita (`publicFiles`) más `/content_app_buscar` con `dotfiles: 'deny'`, `index: false` y `redirect: false`.
- El fallback SPA (`app.get('*')`) solo sirve `index.html`, nunca un archivo arbitrario.
- Rutas API desconocidas devuelven `404` JSON.

### Cierre ordenado

- `SIGTERM` y `SIGINT` cierran el pool de PostgreSQL antes de salir.

## Consideraciones de despliegue

- No exponer credenciales PostgreSQL en el repositorio.
- Mantener `.env` fuera del control de versiones (ya está en `.gitignore`).
- Servir la aplicación mediante HTTPS en producción para permitir geolocalización.
- Restringir la clave de Google Maps por dominio y APIs habilitadas.
- Mantener `ENABLE_DEBUG_ENDPOINTS=false` en producción.
- Probar el flujo en dispositivos móviles reales antes de publicar.

## Diagnóstico rápido

Comprobar el backend:

```bash
curl http://localhost:3000/api/health
```

Si la respuesta indica `source: "mock"`, la aplicación está funcionando con `data.js` porque PostgreSQL no está disponible o falló la conexión.

Si la búsqueda no responde:

1. Revisar la consola del navegador.
2. Confirmar que `app.js`, `data.js` y `bootstrap.js` carguen sin errores.
3. Verificar que aparezca el mensaje `[App] Iniciando — DOM + Google Maps listos`.
4. Comprobar que `/api/parcelas?q=...` devuelva JSON válido.

## Licencia

©2026-Coovilros Ltda. — Cooperativa Villa del Rosario, Córdoba, Argentina.

Uso institucional del Cementerio Parque Jardín del Rosario.
