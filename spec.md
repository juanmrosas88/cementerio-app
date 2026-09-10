# Spec 001 — Búsqueda y ubicación de parcelas del Cementerio Parque

## Estado y fuente documental

Esta especificación describe exclusivamente el producto implementado en `cementerio-app`: una herramienta móvil para buscar y ubicar la parcela de un fallecido dentro del Cementerio Parque Jardín del Rosario, de Coovilros Ltda.

La fuente de verdad es el código y los datos presentes en el repositorio. La propuesta `PROPUESTA_COOVILROS.md` se conserva únicamente como antecedente de la idea inicial; no agrega requisitos ni prevalece sobre el comportamiento implementado. La versión actual usa Google Maps JavaScript API, Express/PostgreSQL opcional y un fallback local de 2.538 registros, distribuidos en cinco sectores: `AMARILLO`, `AZUL`, `NARANJA`, `VERDE` y `VIOLETA`.

## Contexto y objetivo

La aplicación implementa una experiencia mobile-first accesible desde un enlace web. Puede publicarse detrás de un QR en la cartelería, pero ese QR pertenece al entorno de despliegue y no forma parte del código. El sistema permite buscar por datos simples, distinguir homónimos con fechas y ubicación, ver el objetivo en un mapa satelital y recibir orientación aproximada desde la posición del dispositivo.

## Usuarios y actores

- **Visitante o familiar:** busca un fallecido y consulta cómo llegar a su parcela desde un teléfono.
- **Coovilros Ltda.:** administra el cementerio, autoriza los datos memoriales y valida la identidad institucional.
- **Operador técnico:** mantiene el código, el fallback local, la configuración de API y la actualización del padrón.
- **Servicios externos:** Google Maps JavaScript API, Google Maps para navegación, navegador/GPS, PostgreSQL/PostGIS opcional, WhatsApp y el PDF institucional del mapa.

## Flujo principal

1. La persona abre la aplicación, potencialmente desde un QR de la cartelería.
2. Ingresa nombre o apellido y ejecuta la búsqueda con el botón o Enter.
3. El sistema muestra el contador y tarjetas con datos suficientes para diferenciar registros.
4. La persona selecciona una tarjeta.
5. El sistema muestra la ficha y centra el mapa satelital en la parcela con un pin coloreado por sector.
6. Si el GPS está disponible, muestra posición, distancia aproximada y línea punteada al objetivo.
7. La persona puede abrir indicaciones a pie en Google Maps, usar WhatsApp o consultar el mapa PDF institucional.

## Historias de usuario

- **H1:** Como visitante, quiero buscar por nombre o apellido para encontrar rápidamente a un fallecido.
- **H2:** Como visitante, quiero ver nacimiento, defunción, sector, lote y parcela para distinguir homónimos y confirmar el registro.
- **H3:** Como visitante, quiero ver la parcela sobre un mapa satelital para reconocer su ubicación dentro del predio.
- **H4:** Como visitante, quiero activar la ubicación del teléfono para conocer la distancia aproximada y orientarme hacia la parcela.
- **H5:** Como visitante, quiero abrir indicaciones a pie en Google Maps cuando el GPS de la aplicación no esté disponible o necesite navegación externa.
- **H6:** Como visitante, quiero acceder al WhatsApp institucional y al mapa PDF para pedir ayuda o consultar una referencia adicional.
- **H7:** Como administrador técnico, quiero que la aplicación funcione con datos locales cuando PostgreSQL no esté disponible para mantener la búsqueda operativa.
- **H8:** Como cooperativa, quiero que la interfaz mantenga la identidad Coovilros y una experiencia clara para público general y adultos mayores.

## Requisitos funcionales — criterios EARS

- **RF-01:** CUANDO se abre la aplicación y están disponibles el DOM y Google Maps, EL SISTEMA inicia la SPA y carga el total de registros.
- **RF-02:** CUANDO el usuario ejecuta una búsqueda con texto, EL SISTEMA consulta `/api/parcelas?q=...` en HTTP/HTTPS o el fallback local en entornos estáticos y muestra las coincidencias.
- **RF-03:** CUANDO el texto de búsqueda está vacío, EL SISTEMA no filtra y muestra el total de registros disponible.
- **RF-04:** CUANDO el origen es el fallback local, EL SISTEMA permite coincidencias parciales e insensibles a mayúsculas/minúsculas sobre nombre, sector, lote, número de parcela o identificador.
- **RF-05:** CUANDO no existen coincidencias, EL SISTEMA vacía la grilla y muestra “No se encontraron resultados” junto con una sugerencia de búsqueda.
- **RF-06:** CUANDO existen coincidencias, EL SISTEMA muestra tarjetas con nombre, nacimiento, defunción, sector/nivel, lote y parcela, además del contador de resultados.
- **RF-07:** CUANDO el usuario selecciona una tarjeta, EL SISTEMA conserva el registro exacto seleccionado, incluso si comparte ubicación o número físico con otro registro, y abre la vista de ficha/mapa.
- **RF-08:** CUANDO se muestra la ficha, EL SISTEMA presenta nombre, fechas formateadas como `DD/MM/YYYY`, sector/nivel, lote y parcela, con valores `—` cuando un dato falta.
- **RF-09:** CUANDO se muestra una parcela, EL SISTEMA renderiza Google Maps en vista satelital, centra el mapa en las coordenadas y coloca un marcador cuyo color corresponde al sector.
- **RF-10:** CUANDO el usuario pulsa el marcador, EL SISTEMA muestra un cuadro con el nombre y los datos disponibles de la persona y de la ubicación.
- **RF-11:** CUANDO el navegador permite geolocalización, EL SISTEMA solicita posición con alta precisión mediante `getCurrentPosition` y mantiene actualizaciones con `watchPosition`.
- **RF-12:** CUANDO se recibe la posición del usuario, EL SISTEMA muestra el marcador del usuario, calcula la distancia Haversine, muestra un badge dinámico y dibuja una línea punteada hasta la parcela.
- **RF-13:** CUANDO cambia la posición o el registro objetivo, EL SISTEMA actualiza distancia, línea y marcador sin mezclar el GPS con datos enviados a un servidor.
- **RF-14:** SI el navegador no soporta geolocalización, el usuario rechaza el permiso o el GPS falla, ENTONCES EL SISTEMA muestra una advertencia y ofrece el enlace de indicaciones de Google Maps.
- **RF-15:** CUANDO se pulsa el enlace de navegación, EL SISTEMA abre una URL de Google Maps con las coordenadas de destino y `travelmode=walking` en una pestaña nueva.
- **RF-16:** CUANDO el usuario pulsa volver, EL SISTEMA regresa a la búsqueda, limpia la selección y detiene las actualizaciones periódicas de distancia.
- **RF-17:** EL SISTEMA ofrece en el footer un enlace de WhatsApp al número institucional configurado con el mensaje `quiero informacion` y un enlace al PDF del mapa del cementerio.
- **RF-18:** CUANDO la API PostgreSQL no está disponible o una respuesta no puede procesarse, EL SISTEMA usa los registros de `data.js` como fallback y mantiene la búsqueda local.
- **RF-19:** CUANDO el servidor inicia, EL SISTEMA intenta conectar a PostgreSQL usando variables de entorno, expone el fallback si falla y sirve los archivos estáticos de la SPA.

## Datos y contrato

### Registro local vigente

Cada registro local contiene, como mínimo:

```text
id, extinto, sector, lote, nro, latitud, longitud, color_sector
```

La API puede usar los nombres equivalentes `numero_parcela`, `nivel`, `nacimiento` y `defuncion` según la fuente. El frontend admite ambas variantes para sector y número de parcela.

### Origen de datos

- Fallback local: `data.js`, generado desde `content_app_buscar/cp_parcelas.csv`; contiene 2.538 registros y coordenadas calculadas para la aplicación.
- Fuente remota opcional: vista PostgreSQL/PostGIS `servsoc.v_ocup_parcelas`; `server.js` calcula el centroide de `geom` y lo expresa en WGS84/EPSG:4326.
- Artefacto auxiliar: `v_cp_extintos_parque_puntos.geojson` está disponible en el proyecto, pero no reemplaza automáticamente ninguno de los dos orígenes anteriores.

## Requisitos no funcionales

- **RNF-01 — Plataforma:** diseño responsive y mobile-first para navegadores modernos de escritorio y móvil.
- **RNF-02 — Rendimiento:** la búsqueda local debe responder en memoria sin esperas perceptibles; la consulta remota debe mostrar el resultado cuando el endpoint responda.
- **RNF-03 — Disponibilidad:** la búsqueda debe conservar un camino de fallback cuando la API o PostgreSQL no estén disponibles. El mapa depende de Google Maps y de conectividad externa.
- **RNF-04 — Geolocalización:** el uso de GPS requiere permisos del navegador y normalmente contexto seguro HTTPS; la aplicación debe explicar cuando no está disponible.
- **RNF-05 — Privacidad:** la posición del usuario se utiliza localmente para el mapa y el cálculo de distancia; no debe persistirse ni enviarse al backend como parte de este alcance.
- **RNF-06 — Seguridad:** las credenciales de PostgreSQL no deben estar en el frontend, en el repositorio ni en logs públicos; la clave de Google Maps debe restringirse por dominio y API.
- **RNF-07 — Datos:** publicar únicamente datos memoriales autorizados por Coovilros y no exponer columnas innecesarias de la vista remota.
- **RNF-08 — Accesibilidad:** controles con nombre accesible, foco visible, activación por teclado y mensajes claros para estados vacío y GPS fallido.
- **RNF-09 — Precisión:** comunicar que la distancia y la posición son aproximadas, con un margen orientativo de 3 a 5 metros, y recomendar la referencia visual del sector/cartelería.
- **RNF-10 — Identidad:** conservar marca, logos, paleta verde institucional, tipografía Inter y textos en español rioplatense comprensibles.
- **RNF-11 — Mantenibilidad:** conservar separación entre datos, lógica de aplicación, bootstrap, servidor y estilos; documentar cambios de esquema o de fuente de datos.

## Casos límite y errores

- Búsqueda vacía: mostrar el total sin filtrar.
- Nombre inexistente: mostrar estado vacío sin romper la vista.
- Registros homónimos o con la misma parcela: conservar y mostrar cada registro por separado.
- Fecha, sector, lote, número o coordenada ausente: mostrar `—` o el fallback disponible; no generar un enlace inválido sin coordenadas válidas.
- Coordenadas inválidas: no centrar ni iniciar GPS contra un destino corrupto; informar el problema.
- API caída, JSON inválido, HTTP 404 o PostgreSQL inaccesible: usar fallback local y registrar el error sin bloquear la UI.
- Google Maps no carga dentro de ocho segundos: iniciar la búsqueda y dejar el mapa no disponible hasta que la dependencia pueda cargarse.
- Permiso de GPS denegado, timeout o error de precisión: ocultar/evitar datos engañosos, mostrar la advertencia y mantener Google Maps como alternativa.
- Cambio de tamaño u orientación: redimensionar el mapa cuando la vista está activa.
- Registro cambiado mientras se consulta: no mezclar los datos de otra persona con la tarjeta seleccionada.

## Fuera de alcance

- Migrar a Leaflet, cambiar Google Maps por otro proveedor o implementar mapas offline.
- Crear una aplicación nativa para Android/iOS.
- Implementar una API nueva, autenticación, panel administrativo o actualización automática del padrón.
- Mantener o modificar la base PostGIS de Coovilros más allá de la consulta ya contemplada.
- Navegación de rutas peatonales calculadas por la app: la línea actual es una orientación directa y Google Maps resuelve la navegación externa.
- Impresión o colocación física de cartelería y QR.
- Integración nativa con COOVILROS APP, facturación u otros sistemas institucionales.
- Publicar o modificar datos memoriales sin autorización de la cooperativa.
- Nuevos requerimientos comerciales, soporte mensual, capacitación o garantía contractual: no forman parte de esta implementación técnica.

## Criterios de aceptación y finalización

- El flujo búsqueda → tarjeta → ficha/mapa → navegación funciona en un navegador moderno.
- La búsqueda local devuelve resultados por nombre, apellido, sector, lote, parcela e identificador, y el fallback opera sin API.
- El detalle distingue registros homónimos y conserva los datos del registro seleccionado.
- El mapa muestra el objetivo y, con permiso de ubicación, distancia y línea de orientación.
- El flujo sin GPS ofrece un mensaje entendible y un enlace válido a Google Maps.
- WhatsApp, mapa PDF, logos y textos institucionales se mantienen funcionales.
- Los archivos JavaScript modificados pasan `node --check` y no se agregan secretos.
- Si se modifican API, datos o mapa, se ejecutan las comprobaciones manuales correspondientes y se revisa `git diff`.

## Dudas abiertas

- [NECESITA DECISIÓN] ¿Debe incorporarse una estrategia de actualización periódica del fallback local y quién autoriza/publica los datos memoriales?
- [NECESITA VALIDACIÓN] ¿La clave de Google Maps debe moverse a configuración de despliegue y restringirse por dominio antes de producción?
