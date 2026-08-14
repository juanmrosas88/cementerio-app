<div align="center">

<img src="logoheader.svg" alt="Coovilros — Cooperativa Villa del Rosario" width="420" />

# Ubicación de Parcelas · Cementerio Parque Memorial

**Módulo de Geolocalización y Búsqueda de Parcelas** — Cooperativa Villa del Rosario, Córdoba, Argentina.

Buscá el nombre de un familiar y obtené la ubicación exacta de su parcela en el predio, con ruta guiada por GPS y navegación directa a Google Maps.

</div>

---

## 📖 Descripción

Aplicación web (SPA) estática que permite a los visitantes del **Cementerio Parque Memorial** de Coovilros ubicar la parcela de un fallecido ingresando su nombre o apellido.

Al seleccionar un resultado, la aplicación:

- Muestra la **ficha** del fallecido (nacimiento, defunción y sector).
- Centra un **mapa satelital** en la parcela exacta, con un marcador con el color del sector.
- Si el dispositivo lo permite, activa el **GPS en tiempo real** y dibuja la posición del visitante, un círculo de precisión y una **línea punteada** hacia la parcela, con un badge de **distancia dinámica**.
- Ofrece un botón para abrir **indicaciones de llegada a pie en Google Maps**.

Pensada para uso en **dispositivos móviles dentro del predio** (se accede escaneando un código QR), con soporte completo para escritorio.

---

## ✨ Características

- 🔍 **Búsqueda en tiempo real** por nombre o apellido (coincidencia parcial, insensible a mayúsculas/minúsculas).
- 🗂️ **2.513 registros** reales exportados de la base de producción (vista PostGIS).
- 🗺️ **Mapa satelital** Leaflet con tiles de Esri *World Imagery* (zoom real hasta nivel 18).
- 📍 **GPS en tiempo real** con `watchPosition`: marcador azul animado, círculo de precisión y badge de distancia.
- 🧭 **Línea de ruta** punteada entre el visitante y la parcela, con auto-zoom para que quepan ambos puntos.
- 🎨 **Código de colores por sector** (Verde, Azul, Amarillo, Rojo, Rosa, Naranja) en tarjetas, marcador del mapa y popup.
- 📱 **Diseño responsive** y optimizado para táctil (Tailwind CSS + estilos propios).
- ♿ **Accesible**: navegación por teclado, `aria-label`, foco visible y soporte `prefers-reduced-motion`.
- ⚠️ **Fallback de GPS**: si no hay permiso de ubicación, se muestra una advertencia con enlace directo a Google Maps.

---

## 🧱 Stack tecnológico

| Tecnología | Uso |
|---|---|
| **HTML5 + CSS3** | Estructura y estilos (semántico, sin frameworks de UI) |
| **JavaScript (ES6+, Vanilla)** | Lógica de la SPA, sin dependencias de build |
| **Leaflet 1.9.4** | Mapas interactivos (CDN, con integridad SRI) |
| **Esri World Imagery** | Capa base satelital |
| **Tailwind CSS v3** | Utilidades de diseño (CDN) |
| **Google Fonts — Inter** | Tipografía institucional |
| **PostgreSQL / PostGIS** | Origen de los datos en producción (vista `v_cp_extintos_parque`) |

Sin paso de compilación: la app corre tal cual en cualquier servidor estático.

---

## 📁 Estructura del proyecto

```
.
├── index.html        # Página única (vistas: búsqueda y ficha + mapa)
├── app.js            # Lógica de la SPA: búsqueda, mapa Leaflet y GPS
├── data.js           # Base de datos simulada (2.513 registros) + helpers de consulta
├── styles.css        # Estilos personalizados y variables de diseño Coovilros
├── logoheader.svg    # Logo institucional (favicon y encabezado)
└── v_cp_extintos_parque_puntos.geojson   # GeoData de origen (puntos WGS84)
```

### Orden de carga

Los scripts se cargan de forma secuencial y dependiente:

1. **Leaflet** (CDN) — expone el objeto global `L`.
2. **`data.js`** — define `filterRecords()` y `getRecordById()`.
3. **`app.js`** — expone el objeto global `app` (`initApp`, `showMapView`, etc.).

`app.js` consume los helpers de `data.js` a través de `window` (`window.filterRecords`, `window.getRecordById`).

---

## 🚀 Puesta en marcha

### Requisitos

- Un navegador moderno (Chrome, Edge, Firefox o Safari, recientes).
- **No requiere** instalar dependencias ni compilar.

### Opción A — Directo desde el archivo

Abrí `index.html` con doble clic. Funciona, aunque por razones de seguridad algunos navegadores restringen el GPS con `file://`.

### Opción B — Servidor local (recomendado)

Con **Python**:

```bash
# desde la raíz del proyecto
python -m http.server 8080
```

Con **Node.js** (`npx`):

```bash
npx serve .
```

Luego abrí <http://localhost:8080>.

> 💡 **GPS**: para probar la geolocalización en el predio se requiere conexión HTTPS (o `localhost`). En la web pública se accede escaneando el **código QR** dispuesto en el predio.

---

## 🗄️ Modelo de datos

Cada registro tiene la siguiente forma:

```js
{
  id: 2513,                 // Identificador único
  extinto: "MARIA ANA CEAGLIO",
  nacimiento: "1938-10-30", // ISO YYYY-MM-DD
  defuncion: "2026-07-21",
  sector: "Sector Amarillo",
  latitud: -31.5676348,     // WGS84 (EPSG:4326)
  longitud: -63.5161636
}
```

### Consulta SQL de producción

Los datos se exportan de una **vista PostgreSQL/PostGIS** que une la tabla de parcelas con la de extractos, proyectando el **centroide de la geometría** (parcela poligonal) a latitud/longitud:

```sql
SELECT
    id,
    extinto,
    TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
    TO_CHAR(defuncion,  'YYYY-MM-DD') AS defuncion,
    sector,
    ST_Y(ST_Centroid(geom)) AS latitud,
    ST_X(ST_Centroid(geom)) AS longitud
FROM v_cp_extintos_parque
ORDER BY extinto;
```

> Para producción se recomienda reemplazar `MOCK_DATABASE` en `data.js` por una consulta real (por ejemplo, una API que devuelva este mismo JSON).

---

## ⚙️ Detalles técnicos

### Mapa y tiles satelitales

- Los tiles de **Esri World Imagery** en la zona del cementerio tienen datos reales hasta **zoom 18**; desde zoom 19 devuelven mosaico gris. Por eso `ZOOM_CEMETERY` y `ZOOM_TARGET` están fijados en **18**.
- El control de zoom se ubica en la **esquina inferior derecha** (más alcanzable en móvil).
- El mapa recalcula su tamaño (`invalidateSize`) al cambiar de vista y ante rotación/redimensión.

### Colores por sector

| Sector | Color |
|---|---|
| Sector Verde | `#0B6B3A` |
| Sector Azul | `#1565C0` |
| Sector Amarillo | `#F9A825` |
| Sector Rojo | `#C62828` |
| Sector Rosa | `#AD1457` |
| Sector Naranja | `#EF6C00` |

### GPS

- Se usa `getCurrentPosition` para una fijación rápida y `watchPosition` para seguimiento continuo, ambos con `enableHighAccuracy: true`.
- La distancia se calcula con `map.distance()` (fórmula de haversine de Leaflet) y se muestra en metros con formato `es-AR`.
- Si el GPS no está disponible o el usuario deniega el permiso, se oculta la ruta y se muestra un aviso con enlace a Google Maps.

---

## 📱 Cómo se usa

1. **Buscar**: ingresá nombre o apellido en el campo de búsqueda (filtra mientras escribís).
2. **Elegir**: tocá la tarjeta del familiar (muestra fechas y sector).
3. **Ubicar**: el mapa satelital se centra en la parcela; si hay GPS, verás tu posición, la distancia y la línea punteada.
4. **Navegar**: tocá *"Abrir Indicaciones para llegar en Google Maps"* para recibir la ruta a pie.

> ⚠️ El GPS del dispositivo móvil puede presentar un margen de imprecisión de 3 a 5 metros. Utilizá el color del sector y la manzana como referencia final.

---

## 🔮 Roadmap sugerido

- [ ] Reemplazar `MOCK_DATABASE` por una API conectada a PostgreSQL/PostGIS.
- [ ] Dibujar las **parcelas poligonales** (no solo el punto) a partir del GeoJSON.
- [ ] Soporte para búsqueda por **nicho / manzana / número de parcela**.
- [ ] **Navegación paso a paso** dentro del predio (rutas peatonales).
- [ ] Soporte offline con service workers y tiles empaquetados.
- [ ] Panel administrativo para actualizar datos sin recompilar.

---

## 📄 Licencia

© 2025 **Coovilros Ltda.** — Cooperativa Villa del Rosario, Córdoba. Uso interno del predio.

---

<div align="center">
  <sub>Hecho con ❤️ para las familias de Villa del Rosario.</sub>
</div>
