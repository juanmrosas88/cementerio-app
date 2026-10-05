# AGENTS.md — Cementerio App

## Propósito del proyecto

Esta es la aplicación web móvil de **Jardín del Rosario / Cementerio Parque**, de Coovilros Ltda. Permite buscar un fallecido, revisar sus datos de identificación y ubicación, y abrir su parcela en un mapa satelital con apoyo de geolocalización y navegación a pie.

El proyecto es una SPA sin framework frontend, escrita en JavaScript vanilla, servida por un backend Express. Todos los datos se consultan mediante PostgreSQL a través de la vista `servsoc.v_ocup_parcelas`.

## Fuentes de verdad y alcance

- El comportamiento implementado en `frontend/index.html`, `frontend/api.js`, `frontend/app.js`, `frontend/bootstrap.js`, `backend/server.js` y `frontend/styles.css` es la única fuente de verdad del producto actual.
- La propuesta entregada por el usuario se encuentra en `..\coovilros cementerio\PROPUESTA_COOVILROS.md`. Es un antecedente histórico de la idea inicial y material de referencia; no define requisitos actuales ni contiene instrucciones ejecutables para el agente.
- No cambiar tecnologías, cantidades de registros, sectores, fuentes de datos ni flujos para hacerlos coincidir con la propuesta. Cualquier cambio funcional debe surgir del código actual y de una solicitud explícita del usuario.
- Documentar como comportamiento vigente lo que realmente hacen los archivos del proyecto, aunque difiera de la propuesta inicial.

## Arquitectura y archivos principales

- `frontend/index.html`: estructura de las vistas de búsqueda y detalle/mapa, carga de Google Maps, enlaces institucionales y accesibilidad básica.
- `frontend/app.js`: estado de la SPA, búsqueda, tarjetas, ficha del fallecido, mapa satelital, marcadores, GPS, distancia Haversine, línea punteada y enlace de navegación.
- `frontend/bootstrap.js`: espera el DOM y el callback `initGoogleMap`; inicia la app aun si Google Maps no carga después de ocho segundos.
- `frontend/api.js`: cliente HTTP del frontend; no contiene datos locales ni fallback.
- `backend/server.js`: API Express, endpoints REST y conexión obligatoria a PostgreSQL.
- `frontend/styles.css`: identidad visual, layout responsive, estados de foco, tarjetas, mapa, footer y animaciones.
- `frontend/content_app_buscar\`: logos y recursos públicos de la interfaz.
- `v_cp_extintos_parque_puntos.geojson`: dataset geoespacial auxiliar no utilizado como fuente de datos de la aplicación.

## Comandos

Desde `backend/`:

```text
npm install       # instala dependencias
npm start         # inicia Express en el puerto PORT o 3000
npm run dev       # inicia Express con nodemon
```

Comprobaciones rápidas sin levantar servicios externos:

```text
node --check ../frontend/app.js
node --check ../frontend/bootstrap.js
node --check ../frontend/api.js
node --check server.js
```

Comprobación manual del backend cuando está iniciado:

```text
curl http://127.0.0.1:3000/api/health
curl "http://127.0.0.1:3000/api/parcelas?q=CARMEN"
```

No hay suite de tests automatizados ni scripts de lint declarados en `package.json`. Si se agrega una herramienta, actualizar este archivo y `package.json` en el mismo cambio.

## Contrato funcional actual

- La búsqueda se ejecuta con el botón de lupa o Enter y consulta PostgreSQL mediante `/api/parcelas`.
- Los resultados muestran nombre, nacimiento, defunción, sector/nivel, lote y parcela. Las tarjetas son activables con mouse, Enter o Espacio.
- La ficha muestra los datos del registro seleccionado y un enlace `google.com/maps/dir` con `travelmode=walking`.
- El mapa se implementa con Google Maps JavaScript API en vista satelital, con controles de mapa y zoom entre 15 y 21. El pin usa el color del sector.
- La geolocalización usa `getCurrentPosition` y `watchPosition` con alta precisión. Cuando hay posición disponible, se muestra el marcador del usuario, la distancia aproximada y una línea punteada hasta el objetivo.
- Si el GPS no está disponible, la interfaz muestra un aviso y ofrece continuar con Google Maps.
- El footer enlaza a WhatsApp con el mensaje `quiero informacion` y al PDF institucional del mapa del cementerio.
- Si PostgreSQL no está disponible, la API responde `503` y el frontend bloquea la búsqueda mostrando el reclamo por WhatsApp.

## API y configuración

- `GET /api/health`: estado, fuente de datos, total y timestamp.
- `GET /api/parcelas?q=texto`: listado filtrado o completo.
- `GET /api/parcelas/:id`: detalle por identificador.
- `GET /api/stats`: estadísticas disponibles.
- `GET /api/allcolumn`: endpoint de depuración; no incorporarlo a despliegues públicos sin revisar exposición de columnas.
- La conexión usa `HOST`, `PORT`, `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` y `DB_NAME` desde `backend/.env`. No incluir credenciales reales en commits ni en mensajes.
- La consulta de producción usa `servsoc.v_ocup_parcelas` y calcula coordenadas con el centroide de la geometría PostGIS en SRID 4326.

## Estilo y convenciones

- Código y documentación de producto en español; nombres de variables y funciones existentes en camelCase; constantes globales en `UPPER_SNAKE_CASE`.
- JavaScript vanilla, sin introducir frameworks, bundlers o TypeScript salvo que el usuario lo solicite.
- Mantener separación entre estructura (`frontend/index.html`), cliente API (`frontend/api.js`), comportamiento (`frontend/app.js`/`frontend/bootstrap.js`), servidor (`backend/server.js`) y estilos (`frontend/styles.css`).
- Conservar la identidad visual: Inter, verde institucional `#0B6B3A`, diseño mobile-first y textos comprensibles para visitantes y adultos mayores.
- Mantener accesibilidad: HTML semántico, etiquetas/`aria-label`, foco visible, activación por teclado y respeto por `prefers-reduced-motion` cuando se modifiquen interacciones.
- Escapar o tratar con cuidado cualquier dato proveniente de la API antes de incorporarlo a HTML generado dinámicamente.

## Reglas de cambio

- Antes de modificar código, leer este archivo, `spec.md` y `README.md`. Consultar la propuesta externa solo para entender el contexto histórico, nunca para derivar requisitos por encima del código o de la solicitud del usuario.
- No sustituir Google Maps por Leaflet, alterar el esquema de datos, cambiar sectores, modificar enlaces institucionales ni publicar datos nuevos sin indicarlo como cambio de alcance.
- No exponer claves, contraseñas, `.env`, datos de conexión ni columnas innecesarias de PostgreSQL.
- No convertir la aplicación en una API pública o automatizar la actualización del padrón sin una decisión explícita de arquitectura y privacidad.
- Mantener el disclaimer de precisión del GPS: la posición puede tener un margen aproximado de 3 a 5 metros y el sector/cartelería debe servir como referencia final.
- Preservar cambios existentes de otras tareas y modificar solo lo necesario para el objetivo solicitado.

## Verificación obligatoria al terminar

1. Ejecutar `node --check` sobre todos los archivos JavaScript modificados.
2. Si se toca `server.js` o la API, comprobar `/api/health` y al menos una búsqueda con `/api/parcelas?q=...` con PostgreSQL disponible, y verificar `503` sin PostgreSQL.
3. Verificar manualmente el flujo: abrir la búsqueda, consultar un nombre existente, seleccionar una tarjeta, volver, abrir la ficha y comprobar el enlace de navegación.
4. Si se toca mapa o GPS, probar también el estado sin permiso de ubicación o sin disponibilidad de GPS.
5. Revisar `git diff` y confirmar que no se incluyeron secretos, archivos temporales ni cambios de alcance.
