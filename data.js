/**
 * data.js — Módulo de datos y simulación de BD para el Módulo de
 * Geolocalización y Búsqueda de Parcelas del Cementerio Parque Memorial.
 *
 * -------------------------------------------------------------------------
 * CONSULTA SQL NATIVA PARA PRODUCCIÓN (PostgreSQL / PostGIS):
 *
 *   SELECT
 *       id,
 *       extinto,
 *       TO_CHAR(nacimiento, 'YYYY-MM-DD') AS nacimiento,
 *       TO_CHAR(defuncion, 'YYYY-MM-DD')  AS defuncion,
 *     sector,
 *       ST_Y(ST_Centroid(geom)) AS latitud,
 *       ST_X(ST_Centroid(geom)) AS longitud
 *   FROM v_cp_extintos_parque
 *   ORDER BY extinto;
 *
 * Nota: v_cp_extintos_parque es una vista que une la tabla de parcelas con
 *       la tabla de extractos, proyectando el centroide de la geometría
 *       (parcela poligonal) a latitud/longitud WGS84 (EPSG:4326).
 * -------------------------------------------------------------------------
 */

// ---------------------------------------------------------------------------
// Colección de registros (2513 registros reales exportados de la vista v_cp_extintos_parque_puntos)
// ---------------------------------------------------------------------------

const MOCK_DATABASE = [
    {
        id: 1,
        extinto: "OLGA ROSA BASUALDO",
        nacimiento: "1944-03-27",
        defuncion: "2023-08-13",
        sector: "Sector Azul",
        latitud: -31.5667308,
        longitud: -63.5166732
    },
    {
        id: 2,
        extinto: "ALDO ANTONIO TERRENO",
        nacimiento: "1944-06-25",
        defuncion: "2016-11-04",
        sector: "Sector Azul",
        latitud: -31.5667308,
        longitud: -63.5166732
    },
    {
        id: 3,
        extinto: "BARBERO FELIX",
        nacimiento: "1950-07-22",
        defuncion: "2016-04-10",
        sector: "Sector Azul",
        latitud: -31.5667651,
        longitud: -63.5166828
    },
    {
        id: 4,
        extinto: "CARLOS ISAIAS DOMINGUEZ",
        nacimiento: "1933-07-06",
        defuncion: "2018-09-23",
        sector: "Sector Azul",
        latitud: -31.5668660,
        longitud: -63.5163583
    },
    {
        id: 5,
        extinto: "TEUMACO EVARISTO ANGEL",
        nacimiento: "1947-06-08",
        defuncion: "2007-12-21",
        sector: "Sector Azul",
        latitud: -31.5666879,
        longitud: -63.5163236
    },
    {
        id: 6,
        extinto: "SARA DEL VALLE GALLEGOS",
        nacimiento: "1950-02-13",
        defuncion: "2024-03-11",
        sector: "Sector Azul",
        latitud: -31.5666879,
        longitud: -63.5163236
    },
    {
        id: 7,
        extinto: "EDMUNDO ADOLFO VALERIANO  AGERET",
        nacimiento: "1938-12-15",
        defuncion: "2019-07-08",
        sector: "Sector Azul",
        latitud: -31.5669082,
        longitud: -63.5161236
    },
    {
        id: 8,
        extinto: "SARA EUGENIA HEREDIA",
        nacimiento: "1950-01-16",
        defuncion: "2021-02-28",
        sector: "Sector Azul",
        latitud: -31.5669189,
        longitud: -63.5161281
    },
    {
        id: 9,
        extinto: "MARIA ISABEL TEJEDA LUQUE",
        nacimiento: "1952-01-18",
        defuncion: "2021-12-19",
        sector: "Sector Azul",
        latitud: -31.5669301,
        longitud: -63.5161321
    },
    {
        id: 10,
        extinto: "MARINA BELEN MARCHIORI",
        nacimiento: "1992-02-05",
        defuncion: "2008-01-05",
        sector: "Sector Azul",
        latitud: -31.5669415,
        longitud: -63.5161368
    },
    {
        id: 11,
        extinto: "DELIA MARIA BARBIERI",
        nacimiento: "1966-10-14",
        defuncion: "2008-01-05",
        sector: "Sector Azul",
        latitud: -31.5669415,
        longitud: -63.5161368
    },
    {
        id: 12,
        extinto: "ARDOLINO BAUTISTA MARCHIORI",
        nacimiento: "1964-02-20",
        defuncion: "2008-01-26",
        sector: "Sector Azul",
        latitud: -31.5669415,
        longitud: -63.5161368
    },
    {
        id: 13,
        extinto: "ALBERIONE NORDA CATALINA",
        nacimiento: "1938-02-05",
        defuncion: "2013-07-25",
        sector: "Sector Azul",
        latitud: -31.5669526,
        longitud: -63.5161412
    },
    {
        id: 14,
        extinto: "JUAN JOSE POZZI",
        nacimiento: "1936-08-09",
        defuncion: "2019-05-18",
        sector: "Sector Azul",
        latitud: -31.5669526,
        longitud: -63.5161412
    },
    {
        id: 15,
        extinto: "JUAREZ MARCOS",
        nacimiento: "1930-12-10",
        defuncion: "1996-03-23",
        sector: "Sector Azul",
        latitud: -31.5669637,
        longitud: -63.5161456
    },
    {
        id: 16,
        extinto: "EMILSE GEMA ZANELLA",
        nacimiento: "1931-09-11",
        defuncion: "2011-09-04",
        sector: "Sector Azul",
        latitud: -31.5669748,
        longitud: -63.5161500
    },
    {
        id: 17,
        extinto: "FERREYRA ELBA ROSA",
        nacimiento: "1927-04-20",
        defuncion: "2000-01-03",
        sector: "Sector Azul",
        latitud: -31.5669859,
        longitud: -63.5161544
    },
    {
        id: 18,
        extinto: "QUIROGA BENITA",
        nacimiento: "1916-09-25",
        defuncion: "1976-01-25",
        sector: "Sector Azul",
        latitud: -31.5669859,
        longitud: -63.5161544
    },
    {
        id: 19,
        extinto: "FORN LUCIO",
        nacimiento: "1927-04-20",
        defuncion: "1974-12-19",
        sector: "Sector Azul",
        latitud: -31.5669859,
        longitud: -63.5161544
    },
    {
        id: 20,
        extinto: "MIGUEL ANASTACIO OCHOA",
        nacimiento: "1943-07-05",
        defuncion: "2020-07-04",
        sector: "Sector Azul",
        latitud: -31.5669970,
        longitud: -63.5161589
    },
    {
        id: 21,
        extinto: "PEIRONE JOSE MIGUEL",
        nacimiento: "1933-02-09",
        defuncion: "1992-04-09",
        sector: "Sector Azul",
        latitud: -31.5670192,
        longitud: -63.5161677
    },
    {
        id: 22,
        extinto: "PEIRONE GUSTAVO",
        nacimiento: "1959-11-08",
        defuncion: "2001-10-18",
        sector: "Sector Azul",
        latitud: -31.5670192,
        longitud: -63.5161677
    },
    {
        id: 23,
        extinto: "TARDITTI ISOLINA MAGDALENA",
        nacimiento: "1950-05-21",
        defuncion: "2008-05-21",
        sector: "Sector Azul",
        latitud: -31.5670414,
        longitud: -63.5161765
    },
    {
        id: 24,
        extinto: "BRIZIO LUIS AMBROSIO",
        nacimiento: "1920-03-02",
        defuncion: "1979-12-16",
        sector: "Sector Azul",
        latitud: -31.5670414,
        longitud: -63.5161765
    },
    {
        id: 25,
        extinto: "SOLEDAD AGUIRRE",
        nacimiento: "1947-04-29",
        defuncion: "2008-03-05",
        sector: "Sector Azul",
        latitud: -31.5670525,
        longitud: -63.5161809
    },
    {
        id: 26,
        extinto: "BARONE MIRIAM KARINA DEL CARMEN",
        nacimiento: "1974-03-26",
        defuncion: "2022-05-23",
        sector: "Sector Azul",
        latitud: -31.5670525,
        longitud: -63.5161809
    },
    {
        id: 27,
        extinto: "MATEO BARONE",
        nacimiento: "1915-01-01",
        defuncion: "1964-04-11",
        sector: "Sector Azul",
        latitud: -31.5670636,
        longitud: -63.5161853
    },
    {
        id: 28,
        extinto: "MARIA LUISA TOMATTIS",
        nacimiento: "1915-12-15",
        defuncion: "1989-06-12",
        sector: "Sector Azul",
        latitud: -31.5670636,
        longitud: -63.5161853
    },
    {
        id: 29,
        extinto: "NAVARRO VICTOR ANIBAL",
        nacimiento: "1936-10-27",
        defuncion: "2008-04-17",
        sector: "Sector Azul",
        latitud: -31.5670747,
        longitud: -63.5161897
    },
    {
        id: 30,
        extinto: "MUÑOZ  RODOLFO",
        nacimiento: "1940-08-26",
        defuncion: "2007-05-21",
        sector: "Sector Verde",
        latitud: -31.5670858,
        longitud: -63.5161941
    },
    {
        id: 31,
        extinto: "MOLINA NELI ESTER",
        nacimiento: "1946-01-01",
        defuncion: "2012-04-24",
        sector: "Sector Verde",
        latitud: -31.5670967,
        longitud: -63.5161986
    },
    {
        id: 32,
        extinto: "JUAN CANDIDO BORRI",
        nacimiento: "1940-03-10",
        defuncion: "2021-06-11",
        sector: "Sector Verde",
        latitud: -31.5670967,
        longitud: -63.5161986
    },
    {
        id: 33,
        extinto: "BORRI KARINA ALEJANDRA",
        nacimiento: "1972-06-15",
        defuncion: "2008-12-21",
        sector: "Sector Verde",
        latitud: -31.5671078,
        longitud: -63.5162028
    },
    {
        id: 34,
        extinto: "GOMEZ FLORENTINO",
        nacimiento: "1923-09-27",
        defuncion: "2006-06-05",
        sector: "Sector Verde",
        latitud: -31.5671191,
        longitud: -63.5162073
    },
    {
        id: 35,
        extinto: "TABORDA NELIA",
        nacimiento: "1921-01-03",
        defuncion: "2016-03-08",
        sector: "Sector Verde",
        latitud: -31.5671191,
        longitud: -63.5162073
    },
    {
        id: 36,
        extinto: "GIRAUDO OLMAR PEDRO",
        nacimiento: "1942-12-01",
        defuncion: "2010-08-01",
        sector: "Sector Verde",
        latitud: -31.5671302,
        longitud: -63.5162118
    },
    {
        id: 37,
        extinto: "ABBONDIO NICOLAS",
        nacimiento: "2007-08-01",
        defuncion: "2007-08-10",
        sector: "Sector Verde",
        latitud: -31.5671413,
        longitud: -63.5162162
    },
    {
        id: 38,
        extinto: "GRISELDA DEL CARMEN GIRAUDO",
        nacimiento: "1953-09-28",
        defuncion: "2018-08-14",
        sector: "Sector Verde",
        latitud: -31.5671413,
        longitud: -63.5162162
    },
    {
        id: 39,
        extinto: "ALCIRA SERRANO",
        nacimiento: "1938-03-23",
        defuncion: "2009-02-07",
        sector: "Sector Verde",
        latitud: -31.5671524,
        longitud: -63.5162206
    },
    {
        id: 40,
        extinto: "ARGUELLO DANIEL SEBASTIAN",
        nacimiento: "2010-02-08",
        defuncion: "2010-02-08",
        sector: "Sector Verde",
        latitud: -31.5671524,
        longitud: -63.5162206
    },
    {
        id: 41,
        extinto: "ARGUELO DIONISIO",
        nacimiento: "2010-02-08",
        defuncion: "2010-02-08",
        sector: "Sector Verde",
        latitud: -31.5671524,
        longitud: -63.5162206
    },
    {
        id: 42,
        extinto: "GIRAUDO TELMO QUINTO",
        nacimiento: "1926-01-18",
        defuncion: "2005-04-20",
        sector: "Sector Verde",
        latitud: -31.5671635,
        longitud: -63.5162250
    },
    {
        id: 43,
        extinto: "ESPINEL MARCELINA JUANA",
        nacimiento: "1932-06-05",
        defuncion: "2011-05-05",
        sector: "Sector Verde",
        latitud: -31.5671635,
        longitud: -63.5162250
    },
    {
        id: 44,
        extinto: "GIRAUDO CARLOS ALBERTO",
        nacimiento: "2012-01-19",
        defuncion: "2012-01-19",
        sector: "Sector Verde",
        latitud: -31.5671635,
        longitud: -63.5162250
    },
    {
        id: 45,
        extinto: "ZECCHIN NERINA",
        nacimiento: "1926-04-26",
        defuncion: "2009-01-20",
        sector: "Sector Verde",
        latitud: -31.5671746,
        longitud: -63.5162294
    },
    {
        id: 46,
        extinto: "GOTTARDELLO JUAN",
        nacimiento: "1923-07-24",
        defuncion: "2000-07-13",
        sector: "Sector Verde",
        latitud: -31.5671746,
        longitud: -63.5162294
    },
    {
        id: 47,
        extinto: "N/N GOTTARDELLO",
        nacimiento: "2013-11-13",
        defuncion: "2013-11-13",
        sector: "Sector Verde",
        latitud: -31.5671746,
        longitud: -63.5162294
    },
    {
        id: 48,
        extinto: "SANCHEZ RAMON",
        nacimiento: "1915-11-03",
        defuncion: "2006-05-11",
        sector: "Sector Verde",
        latitud: -31.5671857,
        longitud: -63.5162338
    },
    {
        id: 49,
        extinto: "BONIS LUCIA",
        nacimiento: "1923-04-29",
        defuncion: "2013-03-01",
        sector: "Sector Verde",
        latitud: -31.5671857,
        longitud: -63.5162338
    },
    {
        id: 50,
        extinto: "ALDANA  TISSERA",
        nacimiento: "1993-11-29",
        defuncion: "2022-12-25",
        sector: "Sector Azul",
        latitud: -31.5670125,
        longitud: -63.5161906
    },
    {
        id: 51,
        extinto: "MIRETTI  WALTER  RAFAEL",
        nacimiento: "1965-08-21",
        defuncion: "2019-06-19",
        sector: "Sector Azul",
        latitud: -31.5670347,
        longitud: -63.5161994
    },
    {
        id: 52,
        extinto: "FELISA DEL ROSARIO CUELLO",
        nacimiento: "1985-09-15",
        defuncion: "1988-12-22",
        sector: "Sector Azul",
        latitud: -31.5670680,
        longitud: -63.5162126
    },
    {
        id: 53,
        extinto: "ARMENDIA PEDRO LAURIANO",
        nacimiento: "1906-07-13",
        defuncion: "2006-08-22",
        sector: "Sector Azul",
        latitud: -31.5670680,
        longitud: -63.5162126
    },
    {
        id: 54,
        extinto: "CAVALLO HERMINIO EPIFANIO",
        nacimiento: "2012-11-12",
        defuncion: "2012-11-12",
        sector: "Sector Verde",
        latitud: -31.5671124,
        longitud: -63.5162303
    },
    {
        id: 55,
        extinto: "BARMAN ADELINA CELINA",
        nacimiento: "1929-11-08",
        defuncion: "2022-05-19",
        sector: "Sector Verde",
        latitud: -31.5671124,
        longitud: -63.5162303
    },
    {
        id: 56,
        extinto: "LILIAM ALMADA",
        nacimiento: "1930-03-31",
        defuncion: "2018-08-22",
        sector: "Sector Verde",
        latitud: -31.5671235,
        longitud: -63.5162347
    },
    {
        id: 57,
        extinto: "LORENZO ASCUET",
        nacimiento: "1929-01-31",
        defuncion: "1989-03-17",
        sector: "Sector Verde",
        latitud: -31.5671235,
        longitud: -63.5162347
    },
    {
        id: 58,
        extinto: "LUIS HORACIO ASCUET",
        nacimiento: "1958-02-26",
        defuncion: "2021-02-10",
        sector: "Sector Verde",
        latitud: -31.5671235,
        longitud: -63.5162347
    },
    {
        id: 59,
        extinto: "GOTTARDELLO JUAN LEONARDO",
        nacimiento: "1959-10-04",
        defuncion: "2013-09-16",
        sector: "Sector Verde",
        latitud: -31.5671679,
        longitud: -63.5162523
    },
    {
        id: 60,
        extinto: "MARCATO NELLY ANITA",
        nacimiento: "1936-07-26",
        defuncion: "2017-11-27",
        sector: "Sector Azul",
        latitud: -31.5668490,
        longitud: -63.5161568
    },
    {
        id: 61,
        extinto: "ALFREDO ALSIDE MARGARIA",
        nacimiento: "1933-09-12",
        defuncion: "2021-06-11",
        sector: "Sector Azul",
        latitud: -31.5668601,
        longitud: -63.5161612
    },
    {
        id: 62,
        extinto: "VICTOR HUGO ROSSO",
        nacimiento: "1963-07-25",
        defuncion: "2022-02-26",
        sector: "Sector Azul",
        latitud: -31.5668712,
        longitud: -63.5161656
    },
    {
        id: 63,
        extinto: "CARLOS ALBERTO COMBA",
        nacimiento: "1951-05-30",
        defuncion: "2022-12-25",
        sector: "Sector Azul",
        latitud: -31.5668823,
        longitud: -63.5161700
    },
    {
        id: 64,
        extinto: "BRAVI  JUAN BAUTISTA",
        nacimiento: "1928-11-14",
        defuncion: "2011-10-25",
        sector: "Sector Verde",
        latitud: -31.5670932,
        longitud: -63.5162538
    },
    {
        id: 65,
        extinto: "ELSA MARGARITA BUFFA",
        nacimiento: "1931-03-29",
        defuncion: "2018-06-10",
        sector: "Sector Verde",
        latitud: -31.5670932,
        longitud: -63.5162538
    },
    {
        id: 66,
        extinto: "JOSE ALFONSO ROJAS",
        nacimiento: "1946-08-02",
        defuncion: "2019-02-27",
        sector: "Sector Verde",
        latitud: -31.5671709,
        longitud: -63.5162847
    },
    {
        id: 67,
        extinto: "RAUL ANTONIO BUSANO",
        nacimiento: "1954-08-30",
        defuncion: "2015-12-11",
        sector: "Sector Azul",
        latitud: -31.5668423,
        longitud: -63.5161798
    },
    {
        id: 68,
        extinto: "MANUEL EDUARDO CANO",
        nacimiento: "1934-01-30",
        defuncion: "2020-01-29",
        sector: "Sector Azul",
        latitud: -31.5670532,
        longitud: -63.5162635
    },
    {
        id: 69,
        extinto: "ZANELLA LUIS LINDOR",
        nacimiento: "1918-11-07",
        defuncion: "2003-09-19",
        sector: "Sector Verde",
        latitud: -31.5671642,
        longitud: -63.5163076
    },
    {
        id: 70,
        extinto: "PEREZ ROSA ADELINA",
        nacimiento: "1925-12-19",
        defuncion: "2013-01-10",
        sector: "Sector Verde",
        latitud: -31.5671642,
        longitud: -63.5163076
    },
    {
        id: 71,
        extinto: "AMADO JULIO DEL VALLE PEREZ",
        nacimiento: "1944-07-02",
        defuncion: "2014-09-25",
        sector: "Sector Verde",
        latitud: -31.5671508,
        longitud: -63.5163535
    },
    {
        id: 72,
        extinto: "ROSA LIRIA LUDUEÑA",
        nacimiento: "1941-11-27",
        defuncion: "2017-06-30",
        sector: "Sector Verde",
        latitud: -31.5671508,
        longitud: -63.5163535
    },
    {
        id: 73,
        extinto: "ARGUELLO JOSE RAIMUNDO FERNANDO",
        nacimiento: "1941-05-30",
        defuncion: "1999-02-22",
        sector: "Sector Verde",
        latitud: -31.5671427,
        longitud: -63.5163814
    },
    {
        id: 74,
        extinto: "OSCAR ANIBAL FRIZZO",
        nacimiento: "1948-04-15",
        defuncion: "2018-11-24",
        sector: "Sector Verde",
        latitud: -31.5671360,
        longitud: -63.5164043
    },
    {
        id: 75,
        extinto: "ALDO AMADEO LARDELLI",
        nacimiento: "1963-10-14",
        defuncion: "2019-05-06",
        sector: "Sector Verde",
        latitud: -31.5671824,
        longitud: -63.5164496
    },
    {
        id: 76,
        extinto: "ELIDA  CATALINA  MARTINEZ",
        nacimiento: "1942-03-22",
        defuncion: "2023-03-20",
        sector: "Sector Verde",
        latitud: -31.5671757,
        longitud: -63.5164725
    },
    {
        id: 77,
        extinto: "SCARAFFIA EDITH ESTHER",
        nacimiento: "1937-10-25",
        defuncion: "2006-08-17",
        sector: "Sector Verde",
        latitud: -31.5671868,
        longitud: -63.5164770
    },
    {
        id: 78,
        extinto: "GARINO ELPIDIO",
        nacimiento: "1933-01-10",
        defuncion: "2013-02-13",
        sector: "Sector Verde",
        latitud: -31.5671868,
        longitud: -63.5164770
    },
    {
        id: 79,
        extinto: "PAVON ALDO FEDERICO",
        nacimiento: "1937-10-14",
        defuncion: "2015-07-11",
        sector: "Sector Azul",
        latitud: -31.5669012,
        longitud: -63.5163944
    },
    {
        id: 80,
        extinto: "PAVON JUAN ANTONIO",
        nacimiento: "1941-07-12",
        defuncion: "2016-09-14",
        sector: "Sector Azul",
        latitud: -31.5669123,
        longitud: -63.5163988
    },
    {
        id: 81,
        extinto: "ESTHER TECLA CALCATERRA",
        nacimiento: "1929-02-15",
        defuncion: "2019-11-01",
        sector: "Sector Verde",
        latitud: -31.5671453,
        longitud: -63.5164916
    },
    {
        id: 82,
        extinto: "JOSE ANTONIO ALBANO",
        nacimiento: "1931-02-06",
        defuncion: "1971-07-25",
        sector: "Sector Verde",
        latitud: -31.5671453,
        longitud: -63.5164916
    },
    {
        id: 83,
        extinto: "MIGUEL GUERRERO",
        nacimiento: "1949-11-05",
        defuncion: "2020-09-02",
        sector: "Sector Verde",
        latitud: -31.5671675,
        longitud: -63.5165005
    },
    {
        id: 84,
        extinto: "CALCATERRA BEATRIZ",
        nacimiento: "1946-06-21",
        defuncion: "2002-08-04",
        sector: "Sector Verde",
        latitud: -31.5671786,
        longitud: -63.5165049
    },
    {
        id: 85,
        extinto: "RAMON FERNANDO CERDA",
        nacimiento: "1944-02-16",
        defuncion: "2021-03-17",
        sector: "Sector Verde",
        latitud: -31.5671497,
        longitud: -63.5165190
    },
    {
        id: 86,
        extinto: "ALDO ALFREDO ARTUSO",
        nacimiento: "1933-02-13",
        defuncion: "2019-04-30",
        sector: "Sector Verde",
        latitud: -31.5671608,
        longitud: -63.5165234
    },
    {
        id: 87,
        extinto: "CHIAPPERO CESAR DARIO",
        nacimiento: "1978-06-18",
        defuncion: "2016-03-08",
        sector: "Sector Verde",
        latitud: -31.5670995,
        longitud: -63.5165258
    },
    {
        id: 88,
        extinto: "EMA ROSA BOARINO",
        nacimiento: "1934-05-14",
        defuncion: "2016-12-25",
        sector: "Sector Verde",
        latitud: -31.5670995,
        longitud: -63.5165258
    },
    {
        id: 89,
        extinto: "JUAN ANTONIO CHIAPPERO",
        nacimiento: "1948-08-29",
        defuncion: "2009-08-18",
        sector: "Sector Verde",
        latitud: -31.5670995,
        longitud: -63.5165258
    },
    {
        id: 90,
        extinto: "MARIO OSCAR DIAZ",
        nacimiento: "1964-12-14",
        defuncion: "2007-12-15",
        sector: "Sector Verde",
        latitud: -31.5670995,
        longitud: -63.5165258
    },
    {
        id: 91,
        extinto: "PEDRO  GREGORIO DIAZ",
        nacimiento: "1932-05-31",
        defuncion: "2001-08-03",
        sector: "Sector Verde",
        latitud: -31.5670995,
        longitud: -63.5165258
    },
    {
        id: 92,
        extinto: "ELVIO RENEE JULIO OGGIONE",
        nacimiento: "1945-07-09",
        defuncion: "2020-05-28",
        sector: "Sector Verde",
        latitud: -31.5670928,
        longitud: -63.5165487
    },
    {
        id: 93,
        extinto: "MARIA RAQUEL MARTINEZ",
        nacimiento: "1944-06-18",
        defuncion: "2022-04-17",
        sector: "Sector Verde",
        latitud: -31.5670928,
        longitud: -63.5165487
    },
    {
        id: 94,
        extinto: "TORRES ALEJANDRO JOSE",
        nacimiento: "1959-05-24",
        defuncion: "2004-02-11",
        sector: "Sector Verde",
        latitud: -31.5670624,
        longitud: -63.5165677
    },
    {
        id: 95,
        extinto: "PASQUINI ERNESTO",
        nacimiento: "1919-07-01",
        defuncion: "2003-03-25",
        sector: "Sector Verde",
        latitud: -31.5670734,
        longitud: -63.5165722
    },
    {
        id: 96,
        extinto: "PASQUINI NORA CAROLINA",
        nacimiento: "1957-10-10",
        defuncion: "2003-11-09",
        sector: "Sector Verde",
        latitud: -31.5670845,
        longitud: -63.5165766
    },
    {
        id: 97,
        extinto: "CANGA EDELMIRA",
        nacimiento: "1931-03-22",
        defuncion: "2009-09-27",
        sector: "Sector Verde",
        latitud: -31.5670845,
        longitud: -63.5165766
    },
    {
        id: 98,
        extinto: "MORICONI ROBERTO ANTONIO",
        nacimiento: "1945-07-01",
        defuncion: "2008-04-08",
        sector: "Sector Azul",
        latitud: -31.5670114,
        longitud: -63.5165729
    },
    {
        id: 99,
        extinto: "DOMINGO CABALLERO",
        nacimiento: "1932-02-17",
        defuncion: "2008-07-22",
        sector: "Sector Verde",
        latitud: -31.5670778,
        longitud: -63.5165995
    },
    {
        id: 100,
        extinto: "COLAZO LIRIA ORFELIA",
        nacimiento: "1935-07-08",
        defuncion: "2006-02-15",
        sector: "Sector Verde",
        latitud: -31.5670778,
        longitud: -63.5165995
    },
    {
        id: 101,
        extinto: "PATRICIA  ELIZABET  CABALLERO",
        nacimiento: "1966-08-20",
        defuncion: "2023-03-04",
        sector: "Sector Verde",
        latitud: -31.5670778,
        longitud: -63.5165995
    },
    {
        id: 102,
        extinto: "DELLACCECA PABLO MANUEL",
        nacimiento: "1988-07-28",
        defuncion: "2003-07-15",
        sector: "Sector Azul",
        latitud: -31.5669064,
        longitud: -63.5166056
    },
    {
        id: 103,
        extinto: "WILFRIDO MARTIN GOMEZ",
        nacimiento: "1950-05-10",
        defuncion: "2019-02-14",
        sector: "Sector Azul",
        latitud: -31.5669877,
        longitud: -63.5165924
    },
    {
        id: 104,
        extinto: "MOISES DIEGO GOMEZ",
        nacimiento: "1919-02-09",
        defuncion: "1989-09-10",
        sector: "Sector Azul",
        latitud: -31.5669877,
        longitud: -63.5165924
    },
    {
        id: 105,
        extinto: "MARIA IGNACIA TECERA",
        nacimiento: "1927-05-11",
        defuncion: "1988-09-03",
        sector: "Sector Azul",
        latitud: -31.5669877,
        longitud: -63.5165924
    },
    {
        id: 106,
        extinto: "FRUCTUOSO EDUARDO MEYER",
        nacimiento: "1954-04-08",
        defuncion: "2022-06-26",
        sector: "Sector Azul",
        latitud: -31.5669476,
        longitud: -63.5166532
    },
    {
        id: 107,
        extinto: "CHIAPPERO ADOLFO SANTIAGO",
        nacimiento: "1941-12-24",
        defuncion: "2004-06-12",
        sector: "Sector Azul",
        latitud: -31.5669592,
        longitud: -63.5166513
    },
    {
        id: 108,
        extinto: "CORRENTINA PEREYRA",
        nacimiento: "1917-05-13",
        defuncion: "2015-12-13",
        sector: "Sector Azul",
        latitud: -31.5669592,
        longitud: -63.5166513
    },
    {
        id: 109,
        extinto: "MATILDE ERNESTINA HERMANN",
        nacimiento: "1921-05-29",
        defuncion: "2021-10-08",
        sector: "Sector Azul",
        latitud: -31.5669824,
        longitud: -63.5166475
    },
    {
        id: 110,
        extinto: "NILO ADALBERTO BETTEGA",
        nacimiento: "1948-05-27",
        defuncion: "1974-10-25",
        sector: "Sector Azul",
        latitud: -31.5669824,
        longitud: -63.5166475
    },
    {
        id: 111,
        extinto: "NILO BETTEGA",
        nacimiento: "1914-07-17",
        defuncion: "1982-09-29",
        sector: "Sector Azul",
        latitud: -31.5669824,
        longitud: -63.5166475
    },
    {
        id: 112,
        extinto: "VICTORIA ANTONIA MARIA OLIVIERI",
        nacimiento: "1927-03-23",
        defuncion: "1989-10-09",
        sector: "Sector Azul",
        latitud: -31.5668924,
        longitud: -63.5166866
    },
    {
        id: 113,
        extinto: "NESTOR ATILIO GARINO",
        nacimiento: "1928-04-06",
        defuncion: "2022-06-04",
        sector: "Sector Azul",
        latitud: -31.5668924,
        longitud: -63.5166866
    },
    {
        id: 114,
        extinto: "OSCAR ATILIO GARINO",
        nacimiento: "1955-09-21",
        defuncion: "2021-10-04",
        sector: "Sector Azul",
        latitud: -31.5669156,
        longitud: -63.5166828
    },
    {
        id: 115,
        extinto: "ALDO VALENTIN CROTTO",
        nacimiento: "1950-09-29",
        defuncion: "2021-05-03",
        sector: "Sector Azul",
        latitud: -31.5669388,
        longitud: -63.5166790
    },
    {
        id: 116,
        extinto: "ALMA VALENTINA BARRA CROTTO",
        nacimiento: "2004-05-12",
        defuncion: "2020-09-06",
        sector: "Sector Azul",
        latitud: -31.5669504,
        longitud: -63.5166772
    },
    {
        id: 117,
        extinto: "JUAN CARMEN ARGUELLO",
        nacimiento: "1933-07-16",
        defuncion: "2020-05-09",
        sector: "Sector Azul",
        latitud: -31.5669621,
        longitud: -63.5166753
    },
    {
        id: 118,
        extinto: "JESUS MARIA GALBUSERA",
        nacimiento: "1933-06-25",
        defuncion: "2020-07-28",
        sector: "Sector Azul",
        latitud: -31.5669853,
        longitud: -63.5166715
    },
    {
        id: 119,
        extinto: "VILMA ANTONIA BELTRAMO",
        nacimiento: "2000-10-10",
        defuncion: "2001-10-10",
        sector: "Sector Azul",
        latitud: -31.5669969,
        longitud: -63.5166697
    },
    {
        id: 120,
        extinto: "RICARDO HECTOR GIRAUDO",
        nacimiento: "1954-01-25",
        defuncion: "2008-06-03",
        sector: "Sector Azul",
        latitud: -31.5669969,
        longitud: -63.5166697
    },
    {
        id: 121,
        extinto: "VICENTA ANTONIA VERDUNA",
        nacimiento: "1940-06-13",
        defuncion: "2019-12-09",
        sector: "Sector Azul",
        latitud: -31.5664697,
        longitud: -63.5163668
    },
    {
        id: 122,
        extinto: "LELIS DEL CARMEN GIGENA",
        nacimiento: "1943-03-02",
        defuncion: "2019-10-03",
        sector: "Sector Azul",
        latitud: -31.5665132,
        longitud: -63.5163872
    },
    {
        id: 123,
        extinto: "ZANELLA VICTOR",
        nacimiento: "1928-09-18",
        defuncion: "2009-01-31",
        sector: "Sector Azul",
        latitud: -31.5664665,
        longitud: -63.5163392
    },
    {
        id: 124,
        extinto: "GIANOTTI MARIA LIDIA",
        nacimiento: "1932-08-05",
        defuncion: "2016-10-18",
        sector: "Sector Azul",
        latitud: -31.5664665,
        longitud: -63.5163392
    },
    {
        id: 125,
        extinto: "AMELIA ISABEL SALORT",
        nacimiento: "1959-10-25",
        defuncion: "2021-11-06",
        sector: "Sector Azul",
        latitud: -31.5664805,
        longitud: -63.5163719
    },
    {
        id: 126,
        extinto: "ENRIQUE FRANCISCO SCARONI",
        nacimiento: "1949-02-05",
        defuncion: "2020-12-01",
        sector: "Sector Azul",
        latitud: -31.5665023,
        longitud: -63.5163821
    },
    {
        id: 127,
        extinto: "SUTER ELVIO ROBERTO",
        nacimiento: "1924-12-20",
        defuncion: "2002-01-10",
        sector: "Sector Azul",
        latitud: -31.5665209,
        longitud: -63.5163647
    },
    {
        id: 128,
        extinto: "VICTORIA BRACAMONTE",
        nacimiento: "1932-11-25",
        defuncion: "2023-09-05",
        sector: "Sector Azul",
        latitud: -31.5665209,
        longitud: -63.5163647
    },
    {
        id: 129,
        extinto: "LUIS DELMIRO ZANELLA",
        nacimiento: "1944-12-03",
        defuncion: "2018-10-17",
        sector: "Sector Azul",
        latitud: -31.5663667,
        longitud: -63.5162907
    },
    {
        id: 130,
        extinto: "DALMA YAMILE CAVALLI",
        nacimiento: "1995-03-23",
        defuncion: "2021-06-30",
        sector: "Sector Azul",
        latitud: -31.5663776,
        longitud: -63.5162958
    },
    {
        id: 131,
        extinto: "LUIS ENRIQUE VANAY",
        nacimiento: "1936-10-16",
        defuncion: "1999-09-28",
        sector: "Sector Azul",
        latitud: -31.5663994,
        longitud: -63.5163060
    },
    {
        id: 132,
        extinto: "IRMA VALENTINA LUDUEÑA",
        nacimiento: "1939-06-23",
        defuncion: "2002-07-30",
        sector: "Sector Azul",
        latitud: -31.5663994,
        longitud: -63.5163060
    },
    {
        id: 133,
        extinto: "DIEGO FERNANDO ALBERT",
        nacimiento: "1980-05-23",
        defuncion: "2009-08-29",
        sector: "Sector Azul",
        latitud: -31.5663994,
        longitud: -63.5163060
    },
    {
        id: 134,
        extinto: "ELSA OLGA DELGADO",
        nacimiento: "1940-09-20",
        defuncion: "2021-06-23",
        sector: "Sector Azul",
        latitud: -31.5664103,
        longitud: -63.5163110
    },
    {
        id: 135,
        extinto: "MARIA ROSARIO DELGADO",
        nacimiento: "1939-08-20",
        defuncion: "2021-12-01",
        sector: "Sector Azul",
        latitud: -31.5664103,
        longitud: -63.5163110
    },
    {
        id: 136,
        extinto: "VILLARREAL MERCEDEZ",
        nacimiento: "1912-10-10",
        defuncion: "2005-04-26",
        sector: "Sector Azul",
        latitud: -31.5664211,
        longitud: -63.5163161
    },
    {
        id: 137,
        extinto: "LUQUE ANGEL MARIANO",
        nacimiento: "1920-10-10",
        defuncion: "1976-05-12",
        sector: "Sector Azul",
        latitud: -31.5664211,
        longitud: -63.5163161
    },
    {
        id: 138,
        extinto: "LUDUEÑA TEODOLINA",
        nacimiento: "1912-10-10",
        defuncion: "1998-07-03",
        sector: "Sector Azul",
        latitud: -31.5664211,
        longitud: -63.5163161
    },
    {
        id: 139,
        extinto: "LUQUE GRACIELA DEL ROSARIO",
        nacimiento: "1912-10-10",
        defuncion: "2003-01-23",
        sector: "Sector Azul",
        latitud: -31.5664211,
        longitud: -63.5163161
    },
    {
        id: 140,
        extinto: "MIRTA NOEMI DEL VALLE CEAGLIO",
        nacimiento: "1952-10-15",
        defuncion: "2020-11-15",
        sector: "Sector Azul",
        latitud: -31.5664320,
        longitud: -63.5163212
    },
    {
        id: 141,
        extinto: "MIRIAN DEL VALLE SARABIA",
        nacimiento: "1962-09-20",
        defuncion: "2020-08-31",
        sector: "Sector Azul",
        latitud: -31.5664429,
        longitud: -63.5163263
    },
    {
        id: 142,
        extinto: "CAUDANA ELVIO JUAN",
        nacimiento: "1946-08-11",
        defuncion: "2016-08-23",
        sector: "Sector Azul",
        latitud: -31.5664538,
        longitud: -63.5163314
    },
    {
        id: 143,
        extinto: "JORGE NORBERTO BRARDA",
        nacimiento: "1962-05-21",
        defuncion: "2019-02-23",
        sector: "Sector Azul",
        latitud: -31.5663699,
        longitud: -63.5163182
    },
    {
        id: 144,
        extinto: "FERNANDEZ CECILIA",
        nacimiento: "1967-03-09",
        defuncion: "2017-08-06",
        sector: "Sector Azul",
        latitud: -31.5663808,
        longitud: -63.5163233
    },
    {
        id: 145,
        extinto: "JUAN CARLOS FERNANDEZ",
        nacimiento: "1932-05-23",
        defuncion: "2022-10-17",
        sector: "Sector Azul",
        latitud: -31.5663808,
        longitud: -63.5163233
    },
    {
        id: 146,
        extinto: "SILVA MATEO",
        nacimiento: "1914-09-29",
        defuncion: "2002-05-26",
        sector: "Sector Azul",
        latitud: -31.5663916,
        longitud: -63.5163284
    },
    {
        id: 147,
        extinto: "GOMEZ MARIA ELVIRA",
        nacimiento: "1911-05-15",
        defuncion: "2002-11-09",
        sector: "Sector Azul",
        latitud: -31.5663916,
        longitud: -63.5163284
    },
    {
        id: 148,
        extinto: "EMA TABORDA",
        nacimiento: "1932-02-27",
        defuncion: "2020-02-16",
        sector: "Sector Azul",
        latitud: -31.5664025,
        longitud: -63.5163335
    },
    {
        id: 149,
        extinto: "JUAN EDUARDO CASTELLANO",
        nacimiento: "1927-12-08",
        defuncion: "2020-06-23",
        sector: "Sector Azul",
        latitud: -31.5664025,
        longitud: -63.5163335
    },
    {
        id: 150,
        extinto: "TOLOZA HUGO ALFREDO",
        nacimiento: "1945-10-10",
        defuncion: "1993-01-19",
        sector: "Sector Azul",
        latitud: -31.5664134,
        longitud: -63.5163386
    },
    {
        id: 151,
        extinto: "ANGELA ESTER DE SAN ROMAN LUQUE",
        nacimiento: "1948-07-22",
        defuncion: "2024-05-21",
        sector: "Sector Azul",
        latitud: -31.5664134,
        longitud: -63.5163386
    },
    {
        id: 152,
        extinto: "MARIANA ANDREA ROBLEDO",
        nacimiento: "1972-09-13",
        defuncion: "2020-08-03",
        sector: "Sector Azul",
        latitud: -31.5664243,
        longitud: -63.5163437
    },
    {
        id: 153,
        extinto: "LIENDO ABRAHAN LUIS",
        nacimiento: "1918-02-16",
        defuncion: "2002-11-17",
        sector: "Sector Rojo",
        latitud: -31.5668441,
        longitud: -63.5155871
    },
    {
        id: 154,
        extinto: "AGUSTIN PINOS",
        nacimiento: "1927-03-06",
        defuncion: "2015-04-27",
        sector: "Sector Rojo",
        latitud: -31.5668441,
        longitud: -63.5155871
    },
    {
        id: 155,
        extinto: "AURELIA MARIA LAURENTI",
        nacimiento: "1930-11-17",
        defuncion: "2009-04-25",
        sector: "Sector Rojo",
        latitud: -31.5668441,
        longitud: -63.5155871
    },
    {
        id: 156,
        extinto: "LUCCHESI ERNESTO",
        nacimiento: "1913-07-06",
        defuncion: "1988-07-05",
        sector: "Sector Azul",
        latitud: -31.5664197,
        longitud: -63.5162066
    },
    {
        id: 157,
        extinto: "MANZOTTI CELITA LUISA",
        nacimiento: "1926-01-22",
        defuncion: "2016-02-09",
        sector: "Sector Azul",
        latitud: -31.5664197,
        longitud: -63.5162066
    },
    {
        id: 158,
        extinto: "ERNESTO ENRIQUE LUCCHESI",
        nacimiento: "1953-12-01",
        defuncion: "2020-07-31",
        sector: "Sector Azul",
        latitud: -31.5664197,
        longitud: -63.5162066
    },
    {
        id: 159,
        extinto: "MACHADO MARIA TERESA",
        nacimiento: "1938-03-06",
        defuncion: "2012-04-26",
        sector: "Sector Azul",
        latitud: -31.5664507,
        longitud: -63.5162260
    },
    {
        id: 160,
        extinto: "PEDRO JOSE MACHADO",
        nacimiento: "1944-05-12",
        defuncion: "2019-05-02",
        sector: "Sector Azul",
        latitud: -31.5664507,
        longitud: -63.5162260
    },
    {
        id: 161,
        extinto: "MACHADO RAMON ALFREDO",
        nacimiento: "1945-10-10",
        defuncion: "2004-08-05",
        sector: "Sector Azul",
        latitud: -31.5664610,
        longitud: -63.5162325
    },
    {
        id: 162,
        extinto: "HECTOR ALDO QUEVEDO",
        nacimiento: "1949-03-28",
        defuncion: "2017-01-24",
        sector: "Sector Azul",
        latitud: -31.5664713,
        longitud: -63.5162390
    },
    {
        id: 163,
        extinto: "ESCEQUIEL MONCADA",
        nacimiento: "2014-05-08",
        defuncion: "2014-05-08",
        sector: "Sector Azul",
        latitud: -31.5664920,
        longitud: -63.5162520
    },
    {
        id: 164,
        extinto: "JOSE  ANGEL  LUDUEÑA",
        nacimiento: "1955-04-26",
        defuncion: "2024-03-12",
        sector: "Sector Azul",
        latitud: -31.5665023,
        longitud: -63.5162584
    },
    {
        id: 165,
        extinto: "PASCUAL  GERONIMO  BRANDAN",
        nacimiento: "1941-05-17",
        defuncion: "2001-09-03",
        sector: "Sector Azul",
        latitud: -31.5665127,
        longitud: -63.5162649
    },
    {
        id: 166,
        extinto: "QUINTEROS HUGO DANTE",
        nacimiento: "1949-09-24",
        defuncion: "2016-10-30",
        sector: "Sector Azul",
        latitud: -31.5665230,
        longitud: -63.5162714
    },
    {
        id: 167,
        extinto: "FERREYRA CARLOS ELADIO",
        nacimiento: "1915-03-03",
        defuncion: "1978-12-06",
        sector: "Sector Azul",
        latitud: -31.5665333,
        longitud: -63.5162779
    },
    {
        id: 168,
        extinto: "PERALTA AMELIA DEL ROSARIO",
        nacimiento: "1917-12-29",
        defuncion: "1994-06-15",
        sector: "Sector Azul",
        latitud: -31.5665333,
        longitud: -63.5162779
    },
    {
        id: 169,
        extinto: "FERREYRA RAMON ANGEL",
        nacimiento: "1944-04-14",
        defuncion: "1964-06-07",
        sector: "Sector Azul",
        latitud: -31.5665333,
        longitud: -63.5162779
    },
    {
        id: 170,
        extinto: "EDUARDO SEGUNDO ARCE",
        nacimiento: "1939-10-13",
        defuncion: "2009-07-07",
        sector: "Sector Azul",
        latitud: -31.5665540,
        longitud: -63.5162908
    },
    {
        id: 171,
        extinto: "ABILIA REINA VACA",
        nacimiento: "1945-01-06",
        defuncion: "2018-02-24",
        sector: "Sector Azul",
        latitud: -31.5665540,
        longitud: -63.5162908
    },
    {
        id: 172,
        extinto: "ENRIQUE O MANZOTTI",
        nacimiento: "1933-01-02",
        defuncion: "1977-01-07",
        sector: "Sector Azul",
        latitud: -31.5664202,
        longitud: -63.5162344
    },
    {
        id: 173,
        extinto: "MANZOTTI ENRIQUE EDUARDO",
        nacimiento: "1960-01-02",
        defuncion: "2012-12-11",
        sector: "Sector Azul",
        latitud: -31.5664202,
        longitud: -63.5162344
    },
    {
        id: 174,
        extinto: "CUGAT RODOLFO DEL VALLE",
        nacimiento: "1956-02-06",
        defuncion: "1989-06-14",
        sector: "Sector Azul",
        latitud: -31.5664305,
        longitud: -63.5162409
    },
    {
        id: 175,
        extinto: "QUINTEROS HECTOR NICOLAS",
        nacimiento: "1942-01-29",
        defuncion: "2005-01-14",
        sector: "Sector Azul",
        latitud: -31.5664409,
        longitud: -63.5162474
    },
    {
        id: 176,
        extinto: "LUDUEÑA JULIO",
        nacimiento: "1939-07-27",
        defuncion: "2000-04-06",
        sector: "Sector Azul",
        latitud: -31.5664615,
        longitud: -63.5162604
    },
    {
        id: 177,
        extinto: "BERTONI DANTE MARIA",
        nacimiento: "1910-07-29",
        defuncion: "1993-01-02",
        sector: "Sector Azul",
        latitud: -31.5664925,
        longitud: -63.5162798
    },
    {
        id: 178,
        extinto: "CISTERNA BLANCA NIEVE",
        nacimiento: "1922-03-12",
        defuncion: "2010-05-31",
        sector: "Sector Azul",
        latitud: -31.5664925,
        longitud: -63.5162798
    },
    {
        id: 179,
        extinto: "CEPEDA MIGUEL ANGEL",
        nacimiento: "1934-10-09",
        defuncion: "2003-04-18",
        sector: "Sector Azul",
        latitud: -31.5665132,
        longitud: -63.5162927
    },
    {
        id: 180,
        extinto: "LUISA  ZULMA  ANDRES",
        nacimiento: "1945-11-01",
        defuncion: "2024-05-25",
        sector: "Sector Azul",
        latitud: -31.5665132,
        longitud: -63.5162927
    },
    {
        id: 181,
        extinto: "RUBEN FERNANDO ANIBALE",
        nacimiento: "1961-07-09",
        defuncion: "2022-04-24",
        sector: "Sector Azul",
        latitud: -31.5665235,
        longitud: -63.5162992
    },
    {
        id: 182,
        extinto: "ANTONIO FLORENCIO LUQUE",
        nacimiento: "1944-01-07",
        defuncion: "2018-08-14",
        sector: "Sector Azul",
        latitud: -31.5665338,
        longitud: -63.5163057
    },
    {
        id: 183,
        extinto: "CISNEROS MIGUEL ALEJANDRO",
        nacimiento: "1974-11-12",
        defuncion: "2013-12-02",
        sector: "Sector Azul",
        latitud: -31.5665442,
        longitud: -63.5163122
    },
    {
        id: 184,
        extinto: "TERESA MARIA MANZOTTI",
        nacimiento: "1927-08-15",
        defuncion: "2004-03-25",
        sector: "Sector Azul",
        latitud: -31.5664001,
        longitud: -63.5162493
    },
    {
        id: 185,
        extinto: "MANZOTTI ENRIQUE",
        nacimiento: "1900-05-10",
        defuncion: "1940-07-21",
        sector: "Sector Azul",
        latitud: -31.5664001,
        longitud: -63.5162493
    },
    {
        id: 186,
        extinto: "MOMBRINO MANZOTTI",
        nacimiento: "1901-05-05",
        defuncion: "1969-05-28",
        sector: "Sector Azul",
        latitud: -31.5664001,
        longitud: -63.5162493
    },
    {
        id: 187,
        extinto: "ADELA REGNICOLI",
        nacimiento: "1902-10-06",
        defuncion: "1969-10-26",
        sector: "Sector Azul",
        latitud: -31.5664001,
        longitud: -63.5162493
    },
    {
        id: 188,
        extinto: "RAMON PALAZON ESTEVES",
        nacimiento: "1900-01-19",
        defuncion: "1973-11-13",
        sector: "Sector Azul",
        latitud: -31.5664104,
        longitud: -63.5162558
    },
    {
        id: 189,
        extinto: "JOSEFA DELTEL DE PALAZON",
        nacimiento: "1900-01-24",
        defuncion: "1976-07-27",
        sector: "Sector Azul",
        latitud: -31.5664104,
        longitud: -63.5162558
    },
    {
        id: 190,
        extinto: "LUIS PALAZON ESTEVES",
        nacimiento: "1900-11-10",
        defuncion: "1977-07-10",
        sector: "Sector Azul",
        latitud: -31.5664104,
        longitud: -63.5162558
    },
    {
        id: 191,
        extinto: "LIDIA ESTER PALAZON DE FORT",
        nacimiento: "1924-04-25",
        defuncion: "2005-08-18",
        sector: "Sector Azul",
        latitud: -31.5664104,
        longitud: -63.5162558
    },
    {
        id: 192,
        extinto: "CONSUELO PALAZON",
        nacimiento: "1928-09-29",
        defuncion: "2009-10-18",
        sector: "Sector Azul",
        latitud: -31.5664104,
        longitud: -63.5162558
    },
    {
        id: 193,
        extinto: "PALAZON DANIEL FERNANDO",
        nacimiento: "1954-11-05",
        defuncion: "2017-01-31",
        sector: "Sector Azul",
        latitud: -31.5664207,
        longitud: -63.5162623
    },
    {
        id: 194,
        extinto: "RAMON ALFREDO PALAZON",
        nacimiento: "1926-11-10",
        defuncion: "2006-04-06",
        sector: "Sector Azul",
        latitud: -31.5664207,
        longitud: -63.5162623
    },
    {
        id: 195,
        extinto: "NILDE MARIA TERESA RAIMONDETTO",
        nacimiento: "1929-04-30",
        defuncion: "2016-07-26",
        sector: "Sector Azul",
        latitud: -31.5664207,
        longitud: -63.5162623
    },
    {
        id: 196,
        extinto: "CONTI ANGELA FRANCISCA",
        nacimiento: "1932-03-20",
        defuncion: "2016-08-29",
        sector: "Sector Azul",
        latitud: -31.5664311,
        longitud: -63.5162687
    },
    {
        id: 197,
        extinto: "ELPIDIO CISTERNA",
        nacimiento: "1930-03-16",
        defuncion: "2022-10-07",
        sector: "Sector Azul",
        latitud: -31.5664311,
        longitud: -63.5162687
    },
    {
        id: 198,
        extinto: "NAVARRO MARIA ANGELINA",
        nacimiento: "1915-11-26",
        defuncion: "2005-09-04",
        sector: "Sector Azul",
        latitud: -31.5664414,
        longitud: -63.5162752
    },
    {
        id: 199,
        extinto: "LISONI JOSE MIGUEL",
        nacimiento: "1930-02-20",
        defuncion: "2009-11-09",
        sector: "Sector Azul",
        latitud: -31.5664414,
        longitud: -63.5162752
    },
    {
        id: 200,
        extinto: "FRANCISCO JOSE MIGUEZ MARTINEZ",
        nacimiento: "1936-02-13",
        defuncion: "2018-03-06",
        sector: "Sector Azul",
        latitud: -31.5664517,
        longitud: -63.5162817
    },
    {
        id: 201,
        extinto: "EDITH BONGIOVANNI",
        nacimiento: "1933-06-01",
        defuncion: "2024-01-17",
        sector: "Sector Azul",
        latitud: -31.5664517,
        longitud: -63.5162817
    },
    {
        id: 202,
        extinto: "GOMEZ MERCEDES CERERA",
        nacimiento: "1927-11-06",
        defuncion: "2008-09-24",
        sector: "Sector Azul",
        latitud: -31.5664724,
        longitud: -63.5162947
    },
    {
        id: 203,
        extinto: "MILANESSO SALVADOR ADEMAR",
        nacimiento: "1960-12-20",
        defuncion: "2016-01-27",
        sector: "Sector Azul",
        latitud: -31.5664827,
        longitud: -63.5163011
    },
    {
        id: 204,
        extinto: "BUSTAMANTE ERNESTO FRANCISACO",
        nacimiento: "1929-02-20",
        defuncion: "2003-09-12",
        sector: "Sector Azul",
        latitud: -31.5664930,
        longitud: -63.5163076
    },
    {
        id: 205,
        extinto: "ALMADA DIDIMO ALBERTO",
        nacimiento: "1948-11-02",
        defuncion: "2015-04-16",
        sector: "Sector Azul",
        latitud: -31.5665034,
        longitud: -63.5163141
    },
    {
        id: 206,
        extinto: "JORGE ALBERTO MANZOTTI",
        nacimiento: "1947-11-18",
        defuncion: "2011-08-23",
        sector: "Sector Azul",
        latitud: -31.5665137,
        longitud: -63.5163206
    },
    {
        id: 207,
        extinto: "HECTOR HUGO MANZOTTI",
        nacimiento: "1944-12-06",
        defuncion: "2018-04-04",
        sector: "Sector Azul",
        latitud: -31.5665137,
        longitud: -63.5163206
    },
    {
        id: 208,
        extinto: "ARTURO CESAR FERREYRA",
        nacimiento: "1926-07-05",
        defuncion: "2003-10-25",
        sector: "Sector Azul",
        latitud: -31.5665240,
        longitud: -63.5163270
    },
    {
        id: 209,
        extinto: "GRAS RAMONA RITA",
        nacimiento: "1900-05-10",
        defuncion: "2004-06-27",
        sector: "Sector Azul",
        latitud: -31.5665240,
        longitud: -63.5163270
    },
    {
        id: 210,
        extinto: "LASCANO ERNESTINA",
        nacimiento: "1927-07-19",
        defuncion: "2015-12-01",
        sector: "Sector Azul",
        latitud: -31.5665240,
        longitud: -63.5163270
    },
    {
        id: 211,
        extinto: "ALMADA FEDERICO ESTEBAN",
        nacimiento: "1907-08-03",
        defuncion: "2000-08-30",
        sector: "Sector Azul",
        latitud: -31.5665343,
        longitud: -63.5163335
    },
    {
        id: 212,
        extinto: "MONCADA EUSEBIA",
        nacimiento: "1914-08-14",
        defuncion: "2000-08-20",
        sector: "Sector Azul",
        latitud: -31.5665343,
        longitud: -63.5163335
    },
    {
        id: 213,
        extinto: "ALMADA GABRIEL DARIO",
        nacimiento: "1970-09-25",
        defuncion: "1970-09-26",
        sector: "Sector Azul",
        latitud: -31.5665343,
        longitud: -63.5163335
    },
    {
        id: 214,
        extinto: "MARGARITA MAGDALENA BROCELLI",
        nacimiento: "1923-06-11",
        defuncion: "2011-04-03",
        sector: "Sector Azul",
        latitud: -31.5664014,
        longitud: -63.5160823
    },
    {
        id: 215,
        extinto: "PEDRO CACIORGNA",
        nacimiento: "1918-04-25",
        defuncion: "1990-10-15",
        sector: "Sector Azul",
        latitud: -31.5664014,
        longitud: -63.5160823
    },
    {
        id: 216,
        extinto: "ERMETI ARMANDO NOVELLI",
        nacimiento: "1924-05-27",
        defuncion: "2018-06-24",
        sector: "Sector Azul",
        latitud: -31.5663799,
        longitud: -63.5161748
    },
    {
        id: 217,
        extinto: "CARLOS EMILIO LOPEZ",
        nacimiento: "1949-05-25",
        defuncion: "2021-07-26",
        sector: "Sector Azul",
        latitud: -31.5663738,
        longitud: -63.5162013
    },
    {
        id: 218,
        extinto: "JUAN MICAHELA MARGARITA",
        nacimiento: "1925-09-25",
        defuncion: "2012-10-13",
        sector: "Sector Azul",
        latitud: -31.5663707,
        longitud: -63.5162145
    },
    {
        id: 219,
        extinto: "DEIDERI JOSE ISIDORO",
        nacimiento: "1925-05-15",
        defuncion: "1999-06-27",
        sector: "Sector Azul",
        latitud: -31.5663707,
        longitud: -63.5162145
    },
    {
        id: 220,
        extinto: "ROBERTO OMAR SOSA",
        nacimiento: "1945-02-04",
        defuncion: "2018-05-10",
        sector: "Sector Rojo",
        latitud: -31.5664503,
        longitud: -63.5158762
    },
    {
        id: 221,
        extinto: "ANA PANERO DE SOSA",
        nacimiento: "1910-11-11",
        defuncion: "1966-12-30",
        sector: "Sector Rojo",
        latitud: -31.5664472,
        longitud: -63.5158894
    },
    {
        id: 222,
        extinto: "SEVERO SOSA",
        nacimiento: "1903-04-30",
        defuncion: "1976-06-13",
        sector: "Sector Rojo",
        latitud: -31.5664472,
        longitud: -63.5158894
    },
    {
        id: 223,
        extinto: "MAXIMO SOSA",
        nacimiento: "1943-11-20",
        defuncion: "1965-06-22",
        sector: "Sector Rojo",
        latitud: -31.5664472,
        longitud: -63.5158894
    },
    {
        id: 224,
        extinto: "ROBERTO  RUIZ",
        nacimiento: "1957-06-15",
        defuncion: "2023-11-02",
        sector: "Sector Azul",
        latitud: -31.5664515,
        longitud: -63.5159618
    },
    {
        id: 225,
        extinto: "SANTINO BENJAMIN GARCIA",
        nacimiento: "2013-03-23",
        defuncion: "2021-07-15",
        sector: "Sector Azul",
        latitud: -31.5664126,
        longitud: -63.5160345
    },
    {
        id: 226,
        extinto: "MEDINA SANDRA BEATRIZ",
        nacimiento: "1977-11-07",
        defuncion: "2017-01-05",
        sector: "Sector Azul",
        latitud: -31.5664095,
        longitud: -63.5160477
    },
    {
        id: 227,
        extinto: "CARABANTE GLORIA ANA",
        nacimiento: "1941-07-15",
        defuncion: "2013-09-09",
        sector: "Sector Azul",
        latitud: -31.5664063,
        longitud: -63.5160609
    },
    {
        id: 228,
        extinto: "TEJEDA LAURENCIO HECTOR",
        nacimiento: "2016-12-28",
        defuncion: "2016-12-28",
        sector: "Sector Azul",
        latitud: -31.5664063,
        longitud: -63.5160609
    },
    {
        id: 229,
        extinto: "EDUARDO DANIEL CACIORGNA",
        nacimiento: "2017-07-20",
        defuncion: "2017-07-20",
        sector: "Sector Azul",
        latitud: -31.5664263,
        longitud: -63.5160674
    },
    {
        id: 230,
        extinto: "NAVARRO JOSE MARIA",
        nacimiento: "1932-09-28",
        defuncion: "2017-04-16",
        sector: "Sector Rojo",
        latitud: -31.5665060,
        longitud: -63.5157211
    },
    {
        id: 231,
        extinto: "CATALINA  CARMEN  ARNALDI",
        nacimiento: "1936-09-29",
        defuncion: "2024-05-05",
        sector: "Sector Rojo",
        latitud: -31.5665060,
        longitud: -63.5157211
    },
    {
        id: 232,
        extinto: "CARLOS RAMON ROSSI",
        nacimiento: "1955-03-26",
        defuncion: "2020-10-06",
        sector: "Sector Rojo",
        latitud: -31.5664943,
        longitud: -63.5157741
    },
    {
        id: 233,
        extinto: "DE MICHELE GLADYS REMA",
        nacimiento: "1942-11-23",
        defuncion: "1999-06-04",
        sector: "Sector Rojo",
        latitud: -31.5664910,
        longitud: -63.5156732
    },
    {
        id: 234,
        extinto: "MARGARIA OLMAR CLEMENCIO",
        nacimiento: "1943-04-30",
        defuncion: "2011-11-20",
        sector: "Sector Rojo",
        latitud: -31.5664910,
        longitud: -63.5156732
    },
    {
        id: 235,
        extinto: "PABLA  ISABEL  LUDUEÑA",
        nacimiento: "1945-07-15",
        defuncion: "2024-06-04",
        sector: "Sector Rojo",
        latitud: -31.5665269,
        longitud: -63.5153662
    },
    {
        id: 236,
        extinto: "JUSTA CLEMENTINA GARCIA",
        nacimiento: "1924-08-15",
        defuncion: "2009-05-29",
        sector: "Sector Naranja",
        latitud: -31.5665357,
        longitud: -63.5152470
    },
    {
        id: 237,
        extinto: "GRACIELA ALBERT",
        nacimiento: "1952-01-01",
        defuncion: "1952-10-18",
        sector: "Sector Naranja",
        latitud: -31.5665357,
        longitud: -63.5152470
    },
    {
        id: 238,
        extinto: "FRANCISCO JUAN ALBERT",
        nacimiento: "1921-03-24",
        defuncion: "2001-11-06",
        sector: "Sector Naranja",
        latitud: -31.5665357,
        longitud: -63.5152470
    },
    {
        id: 239,
        extinto: "BERTORELLO NIEVE",
        nacimiento: "1925-11-30",
        defuncion: "2006-08-03",
        sector: "Sector Naranja",
        latitud: -31.5668003,
        longitud: -63.5153346
    },
    {
        id: 240,
        extinto: "JOSE VICTORIO CAVALLO",
        nacimiento: "2009-08-24",
        defuncion: "2009-08-24",
        sector: "Sector Naranja",
        latitud: -31.5668003,
        longitud: -63.5153346
    },
    {
        id: 241,
        extinto: "MININ JOSE ANTONIO",
        nacimiento: "1925-12-09",
        defuncion: "2009-11-26",
        sector: "Sector Naranja",
        latitud: -31.5667831,
        longitud: -63.5153862
    },
    {
        id: 242,
        extinto: "MININ LUIS ANTONIO",
        nacimiento: "1954-05-18",
        defuncion: "2006-10-24",
        sector: "Sector Naranja",
        latitud: -31.5667926,
        longitud: -63.5153942
    },
    {
        id: 243,
        extinto: "MININ MANUEL FRANCISCO",
        nacimiento: "1958-03-26",
        defuncion: "2017-09-18",
        sector: "Sector Naranja",
        latitud: -31.5667926,
        longitud: -63.5153942
    },
    {
        id: 244,
        extinto: "MININ IRIS ZULMA",
        nacimiento: "1955-07-18",
        defuncion: "2003-05-22",
        sector: "Sector Naranja",
        latitud: -31.5668021,
        longitud: -63.5154022
    },
    {
        id: 245,
        extinto: "CABRERA ANTONIA VIRGINIA",
        nacimiento: "1925-01-01",
        defuncion: "2008-12-01",
        sector: "Sector Naranja",
        latitud: -31.5668810,
        longitud: -63.5154032
    },
    {
        id: 246,
        extinto: "CABRERA NORMA GRACIELA",
        nacimiento: "1946-01-02",
        defuncion: "2016-06-29",
        sector: "Sector Naranja",
        latitud: -31.5668810,
        longitud: -63.5154032
    },
    {
        id: 247,
        extinto: "MAXIMO JOEL ZANELLA",
        nacimiento: "2009-09-05",
        defuncion: "2009-09-09",
        sector: "Sector Naranja",
        latitud: -31.5668905,
        longitud: -63.5154111
    },
    {
        id: 248,
        extinto: "JORGE  HORACIO  ZANELLA",
        nacimiento: "1954-04-26",
        defuncion: "2023-12-20",
        sector: "Sector Naranja",
        latitud: -31.5668905,
        longitud: -63.5154111
    },
    {
        id: 249,
        extinto: "PADRE RICARDO ABEL PALAMARCZUK",
        nacimiento: "1955-03-29",
        defuncion: "2018-11-20",
        sector: "Sector Naranja",
        latitud: -31.5669000,
        longitud: -63.5154191
    },
    {
        id: 250,
        extinto: "BARBERO MAURO QUINTO",
        nacimiento: "1953-04-04",
        defuncion: "2005-06-22",
        sector: "Sector Naranja",
        latitud: -31.5669096,
        longitud: -63.5154271
    },
    {
        id: 251,
        extinto: "ETELVINA BERTA SALICRU",
        nacimiento: "1931-07-04",
        defuncion: "2008-06-11",
        sector: "Sector Naranja",
        latitud: -31.5669191,
        longitud: -63.5154351
    },
    {
        id: 252,
        extinto: "BARBERO DELIA ANITA",
        nacimiento: "1925-07-24",
        defuncion: "2016-03-21",
        sector: "Sector Naranja",
        latitud: -31.5669287,
        longitud: -63.5154431
    },
    {
        id: 253,
        extinto: "OSCAR PICCINO",
        nacimiento: "1934-10-31",
        defuncion: "2017-01-25",
        sector: "Sector Naranja",
        latitud: -31.5669287,
        longitud: -63.5154431
    },
    {
        id: 254,
        extinto: "MIRTA MARIA ESTHER ORLANDI",
        nacimiento: "1943-11-08",
        defuncion: "2022-08-29",
        sector: "Sector Naranja",
        latitud: -31.5669287,
        longitud: -63.5154431
    },
    {
        id: 255,
        extinto: "LUDUEÑA VIVIANA DEL VALLE",
        nacimiento: "1956-10-18",
        defuncion: "2016-05-22",
        sector: "Sector Naranja",
        latitud: -31.5669382,
        longitud: -63.5154510
    },
    {
        id: 256,
        extinto: "GAVIGLIO CLAUDIA BEATRIZ",
        nacimiento: "1977-04-05",
        defuncion: "2005-06-02",
        sector: "Sector Naranja",
        latitud: -31.5669668,
        longitud: -63.5154749
    },
    {
        id: 257,
        extinto: "VALERIA  ESTER  GAVIGLIO",
        nacimiento: "1982-11-17",
        defuncion: "2024-02-07",
        sector: "Sector Naranja",
        latitud: -31.5669668,
        longitud: -63.5154749
    },
    {
        id: 258,
        extinto: "JOSE ALBERTO PEIRONE",
        nacimiento: "1973-11-24",
        defuncion: "1973-11-24",
        sector: "Sector Naranja",
        latitud: -31.5669858,
        longitud: -63.5154909
    },
    {
        id: 259,
        extinto: "VICTOR HUGO PEIRONE",
        nacimiento: "1941-01-14",
        defuncion: "2018-01-23",
        sector: "Sector Naranja",
        latitud: -31.5669858,
        longitud: -63.5154909
    },
    {
        id: 260,
        extinto: "SUTER DELFO ROBERTO",
        nacimiento: "1916-07-01",
        defuncion: "2000-12-14",
        sector: "Sector Naranja",
        latitud: -31.5669953,
        longitud: -63.5154989
    },
    {
        id: 261,
        extinto: "ADELAIDA MARGARITA BONANCEA",
        nacimiento: "1916-04-24",
        defuncion: "1973-06-08",
        sector: "Sector Naranja",
        latitud: -31.5669953,
        longitud: -63.5154989
    },
    {
        id: 262,
        extinto: "PEREZ RAMON ALBERTO",
        nacimiento: "1950-08-31",
        defuncion: "2011-11-14",
        sector: "Sector Naranja",
        latitud: -31.5668689,
        longitud: -63.5154228
    },
    {
        id: 263,
        extinto: "MIGUEL ANGEL DIAZ",
        nacimiento: "1938-07-06",
        defuncion: "2022-10-23",
        sector: "Sector Naranja",
        latitud: -31.5668784,
        longitud: -63.5154308
    },
    {
        id: 264,
        extinto: "DEBAR CASIMIRO JAIME",
        nacimiento: "1945-05-05",
        defuncion: "2009-05-22",
        sector: "Sector Naranja",
        latitud: -31.5668975,
        longitud: -63.5154468
    },
    {
        id: 265,
        extinto: "MARIA ANGELA CRISTINA ALMADA",
        nacimiento: "1933-12-05",
        defuncion: "2019-09-22",
        sector: "Sector Naranja",
        latitud: -31.5668975,
        longitud: -63.5154468
    },
    {
        id: 266,
        extinto: "ALMADA MIGUEL ANGEL",
        nacimiento: "2007-09-06",
        defuncion: "2007-09-06",
        sector: "Sector Naranja",
        latitud: -31.5669070,
        longitud: -63.5154547
    },
    {
        id: 267,
        extinto: "BARRIONUEVO ROMINA BELEN",
        nacimiento: "1984-09-06",
        defuncion: "2007-07-21",
        sector: "Sector Naranja",
        latitud: -31.5669070,
        longitud: -63.5154547
    },
    {
        id: 268,
        extinto: "BRANDON DIAZ",
        nacimiento: "2014-05-21",
        defuncion: "2014-06-26",
        sector: "Sector Naranja",
        latitud: -31.5669070,
        longitud: -63.5154547
    },
    {
        id: 269,
        extinto: "CALLEJAS HECTOR FABIAN",
        nacimiento: "1967-08-04",
        defuncion: "2008-01-20",
        sector: "Sector Naranja",
        latitud: -31.5669261,
        longitud: -63.5154707
    },
    {
        id: 270,
        extinto: "PICCOLOTTO NILDA",
        nacimiento: "1940-10-02",
        defuncion: "2007-08-08",
        sector: "Sector Naranja",
        latitud: -31.5669356,
        longitud: -63.5154787
    },
    {
        id: 271,
        extinto: "LUDUEÑA-LUQUE ANGEL VALENTIN",
        nacimiento: "2005-09-06",
        defuncion: "2005-09-08",
        sector: "Sector Naranja",
        latitud: -31.5669451,
        longitud: -63.5154867
    },
    {
        id: 272,
        extinto: "ARREDONDO GREGORIO RANULFO",
        nacimiento: "1925-11-17",
        defuncion: "2012-01-31",
        sector: "Sector Naranja",
        latitud: -31.5669547,
        longitud: -63.5154946
    },
    {
        id: 273,
        extinto: "LUISA ABED",
        nacimiento: "1929-01-02",
        defuncion: "2021-07-31",
        sector: "Sector Naranja",
        latitud: -31.5669547,
        longitud: -63.5154946
    },
    {
        id: 274,
        extinto: "BUSTILLO VICTOR HUGO",
        nacimiento: "1949-09-01",
        defuncion: "2004-07-30",
        sector: "Sector Naranja",
        latitud: -31.5669642,
        longitud: -63.5155026
    },
    {
        id: 275,
        extinto: "NN ONTIVERO BUSTILLO",
        nacimiento: "2021-03-30",
        defuncion: "2021-03-30",
        sector: "Sector Naranja",
        latitud: -31.5669642,
        longitud: -63.5155026
    },
    {
        id: 276,
        extinto: "MATIAS LEANDRO MIGUEL",
        nacimiento: "1988-09-06",
        defuncion: "1998-12-12",
        sector: "Sector Naranja",
        latitud: -31.5669737,
        longitud: -63.5155106
    },
    {
        id: 277,
        extinto: "DANTE SEBASTIAN MATIAS",
        nacimiento: "1956-08-29",
        defuncion: "2009-06-02",
        sector: "Sector Naranja",
        latitud: -31.5669737,
        longitud: -63.5155106
    },
    {
        id: 278,
        extinto: "ITALO GERONIMO ORTIZ",
        nacimiento: "1940-11-10",
        defuncion: "2020-09-14",
        sector: "Sector Naranja",
        latitud: -31.5669737,
        longitud: -63.5155106
    },
    {
        id: 279,
        extinto: "CESAR FRANCISCO GIRAUDO",
        nacimiento: "1939-03-26",
        defuncion: "2007-06-27",
        sector: "Sector Naranja",
        latitud: -31.5669832,
        longitud: -63.5155183
    },
    {
        id: 280,
        extinto: "GALLO OSVALDO PEDRO",
        nacimiento: "1942-09-27",
        defuncion: "2002-02-14",
        sector: "Sector Naranja",
        latitud: -31.5668733,
        longitud: -63.5154628
    },
    {
        id: 281,
        extinto: "VIRGINIA  ALICIA  DUBINI",
        nacimiento: "1965-12-20",
        defuncion: "2024-04-20",
        sector: "Sector Naranja",
        latitud: -31.5668828,
        longitud: -63.5154707
    },
    {
        id: 282,
        extinto: "TORAZZA HUGO FRANCISCO",
        nacimiento: "1944-07-15",
        defuncion: "2015-12-30",
        sector: "Sector Naranja",
        latitud: -31.5668923,
        longitud: -63.5154787
    },
    {
        id: 283,
        extinto: "NAVARRO MAXIMA CRUZ",
        nacimiento: "1953-02-18",
        defuncion: "2015-12-10",
        sector: "Sector Naranja",
        latitud: -31.5669114,
        longitud: -63.5154947
    },
    {
        id: 284,
        extinto: "GAVIGLIO ITALO EDELMI",
        nacimiento: "1937-05-31",
        defuncion: "2004-01-05",
        sector: "Sector Naranja",
        latitud: -31.5669114,
        longitud: -63.5154947
    },
    {
        id: 285,
        extinto: "ROBERTO MARCELINO  DUBINI",
        nacimiento: "1929-06-02",
        defuncion: "2007-08-02",
        sector: "Sector Naranja",
        latitud: -31.5669209,
        longitud: -63.5155026
    },
    {
        id: 286,
        extinto: "EGLES MARIA DOMINGA GIACOSSA",
        nacimiento: "1936-03-28",
        defuncion: "2022-03-13",
        sector: "Sector Naranja",
        latitud: -31.5669209,
        longitud: -63.5155026
    },
    {
        id: 287,
        extinto: "BRASSIOLO PABLO ESPIRITU",
        nacimiento: "1931-09-21",
        defuncion: "2015-03-08",
        sector: "Sector Naranja",
        latitud: -31.5669304,
        longitud: -63.5155106
    },
    {
        id: 288,
        extinto: "ALEJO ANTONIO DEGON",
        nacimiento: "1943-12-10",
        defuncion: "1999-12-17",
        sector: "Sector Naranja",
        latitud: -31.5669400,
        longitud: -63.5155186
    },
    {
        id: 289,
        extinto: "NEIRA ELBA ROSA",
        nacimiento: "1938-07-31",
        defuncion: "2015-08-10",
        sector: "Sector Naranja",
        latitud: -31.5669590,
        longitud: -63.5155346
    },
    {
        id: 290,
        extinto: "BOCARDO ADELMO ANTONIO",
        nacimiento: "1916-05-15",
        defuncion: "1989-08-22",
        sector: "Sector Naranja",
        latitud: -31.5669686,
        longitud: -63.5155425
    },
    {
        id: 291,
        extinto: "DUBINI ROSALIA MARIA",
        nacimiento: "1925-06-02",
        defuncion: "2003-09-11",
        sector: "Sector Naranja",
        latitud: -31.5669686,
        longitud: -63.5155425
    },
    {
        id: 292,
        extinto: "RAQUEL DOMINGA RODRIGUEZ",
        nacimiento: "1940-11-02",
        defuncion: "2019-12-23",
        sector: "Sector Naranja",
        latitud: -31.5668612,
        longitud: -63.5154825
    },
    {
        id: 293,
        extinto: "LUIS ANGEL DEFAGOT",
        nacimiento: "1936-05-02",
        defuncion: "2021-04-08",
        sector: "Sector Naranja",
        latitud: -31.5668612,
        longitud: -63.5154825
    },
    {
        id: 294,
        extinto: "DANIELE CATALINA ROSA",
        nacimiento: "1928-12-15",
        defuncion: "2017-04-21",
        sector: "Sector Naranja",
        latitud: -31.5668802,
        longitud: -63.5154984
    },
    {
        id: 295,
        extinto: "CEGLIO ANGEL CRISTOBAL",
        nacimiento: "2017-04-25",
        defuncion: "2017-04-25",
        sector: "Sector Naranja",
        latitud: -31.5668802,
        longitud: -63.5154984
    },
    {
        id: 296,
        extinto: "RAMALLO DANIEL JESUS",
        nacimiento: "1948-03-13",
        defuncion: "2014-12-16",
        sector: "Sector Naranja",
        latitud: -31.5668993,
        longitud: -63.5155144
    },
    {
        id: 297,
        extinto: "RAMALLO FERNANDO ADRIAN",
        nacimiento: "1993-08-10",
        defuncion: "2014-04-25",
        sector: "Sector Naranja",
        latitud: -31.5669088,
        longitud: -63.5155223
    },
    {
        id: 298,
        extinto: "VISTALLI ANGELA DOMINGA",
        nacimiento: "1924-04-10",
        defuncion: "2007-09-02",
        sector: "Sector Naranja",
        latitud: -31.5669184,
        longitud: -63.5155303
    },
    {
        id: 299,
        extinto: "JULIO CESAR RONCATO",
        nacimiento: "1920-01-31",
        defuncion: "1983-02-07",
        sector: "Sector Naranja",
        latitud: -31.5669184,
        longitud: -63.5155303
    },
    {
        id: 300,
        extinto: "GABRIEL RONCATO",
        nacimiento: "1950-10-10",
        defuncion: "1951-10-10",
        sector: "Sector Naranja",
        latitud: -31.5669184,
        longitud: -63.5155303
    },
    {
        id: 301,
        extinto: "VALENTINA DE RONCATO",
        nacimiento: "2007-09-13",
        defuncion: "2007-09-13",
        sector: "Sector Naranja",
        latitud: -31.5669184,
        longitud: -63.5155303
    },
    {
        id: 302,
        extinto: "JUAN BAUTISTA RONCATO",
        nacimiento: "2007-09-13",
        defuncion: "2007-09-13",
        sector: "Sector Naranja",
        latitud: -31.5669184,
        longitud: -63.5155303
    },
    {
        id: 303,
        extinto: "DEGON JUAN PEDRO",
        nacimiento: "1941-08-11",
        defuncion: "1976-11-29",
        sector: "Sector Naranja",
        latitud: -31.5669279,
        longitud: -63.5155383
    },
    {
        id: 304,
        extinto: "DEGON ANTONIO",
        nacimiento: "1904-11-15",
        defuncion: "1982-09-17",
        sector: "Sector Naranja",
        latitud: -31.5669279,
        longitud: -63.5155383
    },
    {
        id: 305,
        extinto: "TORAZZA MAGDALENA",
        nacimiento: "1910-05-26",
        defuncion: "1986-06-15",
        sector: "Sector Naranja",
        latitud: -31.5669279,
        longitud: -63.5155383
    },
    {
        id: 306,
        extinto: "ARREDONDO JOSE GERMAN",
        nacimiento: "1923-10-17",
        defuncion: "1963-08-01",
        sector: "Sector Naranja",
        latitud: -31.5669374,
        longitud: -63.5155463
    },
    {
        id: 307,
        extinto: "JOSEFA ESTER TEJEDA",
        nacimiento: "1937-11-08",
        defuncion: "2022-09-14",
        sector: "Sector Naranja",
        latitud: -31.5669374,
        longitud: -63.5155463
    },
    {
        id: 308,
        extinto: "DEGON LUIS ANTONIO",
        nacimiento: "1966-09-25",
        defuncion: "2003-10-10",
        sector: "Sector Naranja",
        latitud: -31.5669469,
        longitud: -63.5155542
    },
    {
        id: 309,
        extinto: "ALICIA CRISTINA VISCONTI",
        nacimiento: "1956-12-06",
        defuncion: "2020-10-07",
        sector: "Sector Naranja",
        latitud: -31.5669565,
        longitud: -63.5155622
    },
    {
        id: 310,
        extinto: "CARLOS MARTIN BOCCARDO",
        nacimiento: "1989-08-17",
        defuncion: "2022-01-01",
        sector: "Sector Naranja",
        latitud: -31.5669565,
        longitud: -63.5155622
    },
    {
        id: 311,
        extinto: "DIAZ RAMON ANTONIO",
        nacimiento: "1931-08-22",
        defuncion: "2001-07-15",
        sector: "Sector Rojo",
        latitud: -31.5668820,
        longitud: -63.5156418
    },
    {
        id: 312,
        extinto: "PETRONA ESTHER DIAZ",
        nacimiento: "1933-06-29",
        defuncion: "1997-02-13",
        sector: "Sector Rojo",
        latitud: -31.5668820,
        longitud: -63.5156418
    },
    {
        id: 313,
        extinto: "JOSE ROLANDO ALGARBE",
        nacimiento: "1941-04-28",
        defuncion: "2021-08-23",
        sector: "Sector Rojo",
        latitud: -31.5668820,
        longitud: -63.5156418
    },
    {
        id: 314,
        extinto: "PACHO JOSE",
        nacimiento: "1922-03-18",
        defuncion: "2004-06-15",
        sector: "Sector Rojo",
        latitud: -31.5669008,
        longitud: -63.5156522
    },
    {
        id: 315,
        extinto: "ALFREDO ZALAZAR",
        nacimiento: "1950-10-24",
        defuncion: "2007-12-30",
        sector: "Sector Rojo",
        latitud: -31.5668770,
        longitud: -63.5156542
    },
    {
        id: 316,
        extinto: "ZALAZAR ADOLFO ELOI",
        nacimiento: "1948-11-09",
        defuncion: "2016-06-07",
        sector: "Sector Rojo",
        latitud: -31.5668770,
        longitud: -63.5156542
    },
    {
        id: 317,
        extinto: "ELVA ROSA GOMEZ",
        nacimiento: "2018-03-19",
        defuncion: "2018-03-19",
        sector: "Sector Rojo",
        latitud: -31.5668770,
        longitud: -63.5156542
    },
    {
        id: 318,
        extinto: "GUELLO FRARIEL",
        nacimiento: "2003-06-21",
        defuncion: "2003-06-21",
        sector: "Sector Rojo",
        latitud: -31.5668907,
        longitud: -63.5156770
    },
    {
        id: 319,
        extinto: "MARTINA DE LOURDES ARGUELLO",
        nacimiento: "2006-10-13",
        defuncion: "2006-10-13",
        sector: "Sector Rojo",
        latitud: -31.5668907,
        longitud: -63.5156770
    },
    {
        id: 320,
        extinto: "GARCIA PEDRO",
        nacimiento: "2012-11-16",
        defuncion: "2012-11-16",
        sector: "Sector Rojo",
        latitud: -31.5668670,
        longitud: -63.5156790
    },
    {
        id: 321,
        extinto: "GARCIA RODOLFO PEDRO",
        nacimiento: "1955-03-04",
        defuncion: "2016-10-02",
        sector: "Sector Rojo",
        latitud: -31.5668670,
        longitud: -63.5156790
    },
    {
        id: 322,
        extinto: "ZUNILDA BRACAMONTE",
        nacimiento: "1937-11-17",
        defuncion: "2007-07-14",
        sector: "Sector Rojo",
        latitud: -31.5668619,
        longitud: -63.5156913
    },
    {
        id: 323,
        extinto: "PALAZON JUAN JOSE",
        nacimiento: "1930-07-03",
        defuncion: "2014-12-10",
        sector: "Sector Rojo",
        latitud: -31.5668619,
        longitud: -63.5156913
    },
    {
        id: 324,
        extinto: "HONG OSCAR E",
        nacimiento: "1937-10-10",
        defuncion: "1991-11-14",
        sector: "Sector Rojo",
        latitud: -31.5668569,
        longitud: -63.5157037
    },
    {
        id: 325,
        extinto: "GUSTAVO EDELMI HOMGN",
        nacimiento: "2012-05-23",
        defuncion: "2012-05-23",
        sector: "Sector Rojo",
        latitud: -31.5668569,
        longitud: -63.5157037
    },
    {
        id: 326,
        extinto: "SOSA VICENTE MARIA",
        nacimiento: "1929-04-05",
        defuncion: "2003-10-09",
        sector: "Sector Rojo",
        latitud: -31.5668757,
        longitud: -63.5157141
    },
    {
        id: 327,
        extinto: "ISELA MARINA TROC",
        nacimiento: "1935-08-05",
        defuncion: "2022-06-10",
        sector: "Sector Rojo",
        latitud: -31.5668757,
        longitud: -63.5157141
    },
    {
        id: 328,
        extinto: "YOLANDA ROSA RODRIGUEZ",
        nacimiento: "1953-01-19",
        defuncion: "2009-04-13",
        sector: "Sector Rojo",
        latitud: -31.5668519,
        longitud: -63.5157161
    },
    {
        id: 329,
        extinto: "JESUS BENJAMIN RODRIGUEZ",
        nacimiento: "1920-04-21",
        defuncion: "1998-02-23",
        sector: "Sector Rojo",
        latitud: -31.5668519,
        longitud: -63.5157161
    },
    {
        id: 330,
        extinto: "EMILIA YOLANDA AREVALO",
        nacimiento: "1932-04-28",
        defuncion: "2020-03-10",
        sector: "Sector Rojo",
        latitud: -31.5668519,
        longitud: -63.5157161
    },
    {
        id: 331,
        extinto: "LOPEZ VILMA GLADIS",
        nacimiento: "1955-02-18",
        defuncion: "1999-12-17",
        sector: "Sector Rojo",
        latitud: -31.5668707,
        longitud: -63.5157265
    },
    {
        id: 332,
        extinto: "CISTERNA CAYETANO ALFREDO",
        nacimiento: "1926-08-07",
        defuncion: "1999-11-05",
        sector: "Sector Rojo",
        latitud: -31.5668469,
        longitud: -63.5157285
    },
    {
        id: 333,
        extinto: "SOSA TRANSITO MIGUELINA",
        nacimiento: "1932-08-14",
        defuncion: "2015-08-03",
        sector: "Sector Rojo",
        latitud: -31.5668469,
        longitud: -63.5157285
    },
    {
        id: 334,
        extinto: "GONGORA JORGE GONZALO",
        nacimiento: "1987-12-02",
        defuncion: "2001-04-29",
        sector: "Sector Rojo",
        latitud: -31.5668419,
        longitud: -63.5157409
    },
    {
        id: 335,
        extinto: "LUIS ALBERTO RAMELLO",
        nacimiento: "1948-06-11",
        defuncion: "2020-06-25",
        sector: "Sector Rojo",
        latitud: -31.5668606,
        longitud: -63.5157512
    },
    {
        id: 336,
        extinto: "FERNANDO BERTOLEZ",
        nacimiento: "1971-05-12",
        defuncion: "2021-09-06",
        sector: "Sector Rojo",
        latitud: -31.5668606,
        longitud: -63.5157512
    },
    {
        id: 337,
        extinto: "RAMON JERONIMO BERTOLEZ",
        nacimiento: "1911-09-30",
        defuncion: "2018-11-11",
        sector: "Sector Rojo",
        latitud: -31.5668369,
        longitud: -63.5157532
    },
    {
        id: 338,
        extinto: "BENDINELLI IDA",
        nacimiento: "1915-03-03",
        defuncion: "2003-08-21",
        sector: "Sector Rojo",
        latitud: -31.5668556,
        longitud: -63.5157636
    },
    {
        id: 339,
        extinto: "DEL PINO SIMEON",
        nacimiento: "1911-08-09",
        defuncion: "1995-02-28",
        sector: "Sector Rojo",
        latitud: -31.5668556,
        longitud: -63.5157636
    },
    {
        id: 340,
        extinto: "DEL PINO JOSE JAVIER",
        nacimiento: "1947-12-11",
        defuncion: "1947-12-11",
        sector: "Sector Rojo",
        latitud: -31.5668556,
        longitud: -63.5157636
    },
    {
        id: 341,
        extinto: "BENDINELLI LEONE",
        nacimiento: "1937-08-24",
        defuncion: "1937-08-24",
        sector: "Sector Rojo",
        latitud: -31.5668556,
        longitud: -63.5157636
    },
    {
        id: 342,
        extinto: "MARIA PAGANI DE BENDINELLI",
        nacimiento: "1950-08-22",
        defuncion: "1955-07-31",
        sector: "Sector Rojo",
        latitud: -31.5668556,
        longitud: -63.5157636
    },
    {
        id: 343,
        extinto: "BENDINELLI INES",
        nacimiento: "1900-08-22",
        defuncion: "1919-10-19",
        sector: "Sector Rojo",
        latitud: -31.5668556,
        longitud: -63.5157636
    },
    {
        id: 344,
        extinto: "NOBREGA EDUARDO SILVERIO",
        nacimiento: "1959-02-28",
        defuncion: "2002-09-15",
        sector: "Sector Rojo",
        latitud: -31.5668318,
        longitud: -63.5157656
    },
    {
        id: 345,
        extinto: "TERESA AURORA ROLLE",
        nacimiento: "1940-10-16",
        defuncion: "2024-06-28",
        sector: "Sector Rojo",
        latitud: -31.5668318,
        longitud: -63.5157656
    },
    {
        id: 346,
        extinto: "DEL PINO ANGEL SIMEON",
        nacimiento: "2009-12-23",
        defuncion: "2009-12-23",
        sector: "Sector Rojo",
        latitud: -31.5668506,
        longitud: -63.5157760
    },
    {
        id: 347,
        extinto: "DEL PINO MARIA LETICIA",
        nacimiento: "1981-04-11",
        defuncion: "1981-12-11",
        sector: "Sector Rojo",
        latitud: -31.5668506,
        longitud: -63.5157760
    },
    {
        id: 348,
        extinto: "STRA GRACIELA",
        nacimiento: "1952-04-03",
        defuncion: "1994-05-13",
        sector: "Sector Rojo",
        latitud: -31.5668506,
        longitud: -63.5157760
    },
    {
        id: 349,
        extinto: "PAZ SILVIO ENRIQUE",
        nacimiento: "1930-07-14",
        defuncion: "2010-03-21",
        sector: "Sector Rojo",
        latitud: -31.5668268,
        longitud: -63.5157780
    },
    {
        id: 350,
        extinto: "VALLEJO ELSA EMILIA",
        nacimiento: "1927-02-13",
        defuncion: "2015-06-24",
        sector: "Sector Rojo",
        latitud: -31.5668268,
        longitud: -63.5157780
    },
    {
        id: 351,
        extinto: "MARQUEZ MERCEDES CAYETANA",
        nacimiento: "1924-05-05",
        defuncion: "2008-05-22",
        sector: "Sector Rojo",
        latitud: -31.5668456,
        longitud: -63.5157883
    },
    {
        id: 352,
        extinto: "RENNA SEGUNDO",
        nacimiento: "1915-04-23",
        defuncion: "1990-06-25",
        sector: "Sector Rojo",
        latitud: -31.5668456,
        longitud: -63.5157883
    },
    {
        id: 353,
        extinto: "AURORA RENNA",
        nacimiento: "1909-03-20",
        defuncion: "1983-11-07",
        sector: "Sector Rojo",
        latitud: -31.5668456,
        longitud: -63.5157883
    },
    {
        id: 354,
        extinto: "MARIANA BESSONE",
        nacimiento: "1900-09-08",
        defuncion: "1968-08-10",
        sector: "Sector Rojo",
        latitud: -31.5668456,
        longitud: -63.5157883
    },
    {
        id: 355,
        extinto: "RODRIGUEZ MELITON",
        nacimiento: "1926-03-11",
        defuncion: "1984-11-13",
        sector: "Sector Rojo",
        latitud: -31.5668195,
        longitud: -63.5158070
    },
    {
        id: 356,
        extinto: "MARTINEZ CARMEN DE MARIOTTA",
        nacimiento: "1910-12-07",
        defuncion: "1913-04-14",
        sector: "Sector Rojo",
        latitud: -31.5668195,
        longitud: -63.5158070
    },
    {
        id: 357,
        extinto: "RODRIGUEZ MONICA SILVIA",
        nacimiento: "1955-08-04",
        defuncion: "1989-08-27",
        sector: "Sector Rojo",
        latitud: -31.5668195,
        longitud: -63.5158070
    },
    {
        id: 358,
        extinto: "DOMINGA BEDOGNI DE BELTRAMO",
        nacimiento: "2006-10-12",
        defuncion: "2006-10-12",
        sector: "Sector Rojo",
        latitud: -31.5668370,
        longitud: -63.5158200
    },
    {
        id: 359,
        extinto: "ROSA BEDOGNI",
        nacimiento: "2006-10-12",
        defuncion: "2006-10-12",
        sector: "Sector Rojo",
        latitud: -31.5668370,
        longitud: -63.5158200
    },
    {
        id: 360,
        extinto: "PRIMO BELTRAMO",
        nacimiento: "2006-10-12",
        defuncion: "2006-10-12",
        sector: "Sector Rojo",
        latitud: -31.5668370,
        longitud: -63.5158200
    },
    {
        id: 361,
        extinto: "LEDESMA MARIA ELIDA",
        nacimiento: "1931-06-23",
        defuncion: "2007-06-05",
        sector: "Sector Rojo",
        latitud: -31.5668132,
        longitud: -63.5158185
    },
    {
        id: 362,
        extinto: "JUAN R ALEJOS",
        nacimiento: "1960-05-22",
        defuncion: "1968-06-27",
        sector: "Sector Rojo",
        latitud: -31.5668132,
        longitud: -63.5158185
    },
    {
        id: 363,
        extinto: "ALVAREZ HUGO DANIEL",
        nacimiento: "1937-07-20",
        defuncion: "2003-12-18",
        sector: "Sector Rojo",
        latitud: -31.5668306,
        longitud: -63.5158315
    },
    {
        id: 364,
        extinto: "JOSE ANTONIO CARRERAS",
        nacimiento: "1944-11-01",
        defuncion: "2018-08-24",
        sector: "Sector Rojo",
        latitud: -31.5668306,
        longitud: -63.5158315
    },
    {
        id: 365,
        extinto: "LORENA ISABEL LUNA",
        nacimiento: "2006-11-10",
        defuncion: "2006-11-10",
        sector: "Sector Rojo",
        latitud: -31.5668519,
        longitud: -63.5158474
    },
    {
        id: 366,
        extinto: "CASIMIRO SANTOS LUNA",
        nacimiento: "1946-11-03",
        defuncion: "2020-10-17",
        sector: "Sector Rojo",
        latitud: -31.5668519,
        longitud: -63.5158474
    },
    {
        id: 367,
        extinto: "ARIEL RODOLFO BIANCO",
        nacimiento: "1973-07-25",
        defuncion: "2022-09-07",
        sector: "Sector Rojo",
        latitud: -31.5668519,
        longitud: -63.5158474
    },
    {
        id: 368,
        extinto: "FEDERICO HECTOR  MARCATO",
        nacimiento: "1938-08-06",
        defuncion: "2023-12-07",
        sector: "Sector Rojo",
        latitud: -31.5668068,
        longitud: -63.5158300
    },
    {
        id: 369,
        extinto: "AGUIRRE CLAUDIO PETRONILO",
        nacimiento: "1975-11-16",
        defuncion: "2004-11-15",
        sector: "Sector Rojo",
        latitud: -31.5668005,
        longitud: -63.5158416
    },
    {
        id: 370,
        extinto: "BEDOGNI JUAN JOSE",
        nacimiento: "1935-04-18",
        defuncion: "2006-05-04",
        sector: "Sector Rojo",
        latitud: -31.5668180,
        longitud: -63.5158546
    },
    {
        id: 371,
        extinto: "JOSE BEDOGNI",
        nacimiento: "2006-10-11",
        defuncion: "2006-10-11",
        sector: "Sector Rojo",
        latitud: -31.5668180,
        longitud: -63.5158546
    },
    {
        id: 372,
        extinto: "FERREYRA CARLOS BONIFACIO",
        nacimiento: "1939-10-20",
        defuncion: "2003-06-05",
        sector: "Sector Rojo",
        latitud: -31.5667942,
        longitud: -63.5158531
    },
    {
        id: 373,
        extinto: "BARIZONE ESTEBAN ANGEL",
        nacimiento: "1913-06-14",
        defuncion: "1992-10-01",
        sector: "Sector Rojo",
        latitud: -31.5668117,
        longitud: -63.5158661
    },
    {
        id: 374,
        extinto: "AGUSTINA LUDUEÑA",
        nacimiento: "1938-01-13",
        defuncion: "2022-05-30",
        sector: "Sector Rojo",
        latitud: -31.5668117,
        longitud: -63.5158661
    },
    {
        id: 375,
        extinto: "HERRERA JUAN CARLOS",
        nacimiento: "1923-01-15",
        defuncion: "1979-06-01",
        sector: "Sector Rojo",
        latitud: -31.5668330,
        longitud: -63.5158820
    },
    {
        id: 376,
        extinto: "ORTIZ CEFERINA ANTONIA",
        nacimiento: "1928-08-26",
        defuncion: "2017-07-03",
        sector: "Sector Rojo",
        latitud: -31.5668330,
        longitud: -63.5158820
    },
    {
        id: 377,
        extinto: "ANTONIO BEDOGNI",
        nacimiento: "1930-04-30",
        defuncion: "2006-07-20",
        sector: "Sector Rojo",
        latitud: -31.5667879,
        longitud: -63.5158646
    },
    {
        id: 378,
        extinto: "CECILIA RANZIERI",
        nacimiento: "2006-10-11",
        defuncion: "2006-10-11",
        sector: "Sector Rojo",
        latitud: -31.5667879,
        longitud: -63.5158646
    },
    {
        id: 379,
        extinto: "JAVIER BELTRAMO",
        nacimiento: "2006-10-11",
        defuncion: "2006-10-11",
        sector: "Sector Rojo",
        latitud: -31.5667879,
        longitud: -63.5158646
    },
    {
        id: 380,
        extinto: "N/N BEDOGNI",
        nacimiento: "2006-10-11",
        defuncion: "2006-10-11",
        sector: "Sector Rojo",
        latitud: -31.5667879,
        longitud: -63.5158646
    },
    {
        id: 381,
        extinto: "TORAZZA ELIAS OSCAR",
        nacimiento: "1988-10-10",
        defuncion: "2003-11-16",
        sector: "Sector Rojo",
        latitud: -31.5668054,
        longitud: -63.5158777
    },
    {
        id: 382,
        extinto: "ILDA ROSA CHIALVA",
        nacimiento: "1927-09-07",
        defuncion: "2012-05-16",
        sector: "Sector Rojo",
        latitud: -31.5668267,
        longitud: -63.5158936
    },
    {
        id: 383,
        extinto: "BERGESIO JUAN CARLOS",
        nacimiento: "2015-02-23",
        defuncion: "2015-02-23",
        sector: "Sector Rojo",
        latitud: -31.5668267,
        longitud: -63.5158936
    },
    {
        id: 384,
        extinto: "BEDOGNI RENATO GUILLERMO",
        nacimiento: "1938-05-16",
        defuncion: "2002-09-29",
        sector: "Sector Rojo",
        latitud: -31.5667816,
        longitud: -63.5158762
    },
    {
        id: 385,
        extinto: "DEIDAMIA ANGELICA PAZ",
        nacimiento: "1942-08-12",
        defuncion: "2022-01-27",
        sector: "Sector Rojo",
        latitud: -31.5667816,
        longitud: -63.5158762
    },
    {
        id: 386,
        extinto: "NN - ORONADO DELGADO ORIANA AYLEN",
        nacimiento: "2004-08-24",
        defuncion: "2004-08-24",
        sector: "Sector Rojo",
        latitud: -31.5667753,
        longitud: -63.5158877
    },
    {
        id: 387,
        extinto: "LIDIA  ROSA  AGUIRRE",
        nacimiento: "1943-04-15",
        defuncion: "2024-03-30",
        sector: "Sector Rojo",
        latitud: -31.5667753,
        longitud: -63.5158877
    },
    {
        id: 388,
        extinto: "FRANCISCO ROLDAN",
        nacimiento: "1916-10-04",
        defuncion: "2003-04-11",
        sector: "Sector Rojo",
        latitud: -31.5667928,
        longitud: -63.5159008
    },
    {
        id: 389,
        extinto: "BRAULIA ALMADA",
        nacimiento: "1923-04-26",
        defuncion: "2020-09-24",
        sector: "Sector Rojo",
        latitud: -31.5667928,
        longitud: -63.5159008
    },
    {
        id: 390,
        extinto: "FERRERO JUAN BAUTISTA",
        nacimiento: "1916-03-02",
        defuncion: "1956-09-08",
        sector: "Sector Rojo",
        latitud: -31.5667690,
        longitud: -63.5158993
    },
    {
        id: 391,
        extinto: "LUDUEÑA ROSA LIDIA",
        nacimiento: "1927-12-23",
        defuncion: "2014-05-06",
        sector: "Sector Rojo",
        latitud: -31.5667690,
        longitud: -63.5158993
    },
    {
        id: 392,
        extinto: "VILCHI TEOTIMO",
        nacimiento: "1919-12-26",
        defuncion: "2000-11-01",
        sector: "Sector Rojo",
        latitud: -31.5668077,
        longitud: -63.5159282
    },
    {
        id: 393,
        extinto: "ALMADA MARIA ESTHER",
        nacimiento: "1925-10-13",
        defuncion: "2014-08-15",
        sector: "Sector Rojo",
        latitud: -31.5668077,
        longitud: -63.5159282
    },
    {
        id: 394,
        extinto: "GIOVINE YOLANDA ,MARIA",
        nacimiento: "1932-02-29",
        defuncion: "2003-06-19",
        sector: "Sector Azul",
        latitud: -31.5667186,
        longitud: -63.5159912
    },
    {
        id: 395,
        extinto: "JOSE MARIA MARTINEZ",
        nacimiento: "1927-09-03",
        defuncion: "2019-01-15",
        sector: "Sector Azul",
        latitud: -31.5667186,
        longitud: -63.5159912
    },
    {
        id: 396,
        extinto: "CARLOS HUGO AGUERO",
        nacimiento: "1950-08-06",
        defuncion: "2008-11-27",
        sector: "Sector Azul",
        latitud: -31.5667600,
        longitud: -63.5160145
    },
    {
        id: 397,
        extinto: "ATILIO JOSE ASSOLINI",
        nacimiento: "1953-06-01",
        defuncion: "2017-10-30",
        sector: "Sector Azul",
        latitud: -31.5667135,
        longitud: -63.5160035
    },
    {
        id: 398,
        extinto: "ARREGUI ARTURO ADALBERTO",
        nacimiento: "1945-09-30",
        defuncion: "2009-01-27",
        sector: "Sector Azul",
        latitud: -31.5667322,
        longitud: -63.5160140
    },
    {
        id: 399,
        extinto: "CEAGLIO JUAN JOAQUIN",
        nacimiento: "1907-08-21",
        defuncion: "1977-10-07",
        sector: "Sector Azul",
        latitud: -31.5667549,
        longitud: -63.5160268
    },
    {
        id: 400,
        extinto: "CEAGLIO JOSEFA",
        nacimiento: "1926-04-14",
        defuncion: "2000-11-27",
        sector: "Sector Azul",
        latitud: -31.5667549,
        longitud: -63.5160268
    },
    {
        id: 401,
        extinto: "MARGARITA CIAGLIO",
        nacimiento: "1920-11-09",
        defuncion: "2006-09-25",
        sector: "Sector Azul",
        latitud: -31.5667549,
        longitud: -63.5160268
    },
    {
        id: 402,
        extinto: "BRASSIOLO HECTOR LUIS",
        nacimiento: "1935-07-21",
        defuncion: "2010-09-05",
        sector: "Sector Azul",
        latitud: -31.5667498,
        longitud: -63.5160392
    },
    {
        id: 403,
        extinto: "SOSA ANGELINA",
        nacimiento: "1946-01-25",
        defuncion: "2010-12-14",
        sector: "Sector Azul",
        latitud: -31.5667498,
        longitud: -63.5160392
    },
    {
        id: 404,
        extinto: "SERRANO PEDROP B",
        nacimiento: "1960-01-01",
        defuncion: "1962-06-28",
        sector: "Sector Azul",
        latitud: -31.5667033,
        longitud: -63.5160282
    },
    {
        id: 405,
        extinto: "FONSECA PETRONILA",
        nacimiento: "1959-04-26",
        defuncion: "1969-02-02",
        sector: "Sector Azul",
        latitud: -31.5667033,
        longitud: -63.5160282
    },
    {
        id: 406,
        extinto: "MENICHETTI LIDIA",
        nacimiento: "1926-02-13",
        defuncion: "1963-08-09",
        sector: "Sector Azul",
        latitud: -31.5667033,
        longitud: -63.5160282
    },
    {
        id: 407,
        extinto: "CAFFARENA ROSA ESTER",
        nacimiento: "1945-04-30",
        defuncion: "2010-10-27",
        sector: "Sector Azul",
        latitud: -31.5667220,
        longitud: -63.5160387
    },
    {
        id: 408,
        extinto: "CACERES RICARDO RAUL",
        nacimiento: "1965-11-10",
        defuncion: "2015-02-17",
        sector: "Sector Azul",
        latitud: -31.5667220,
        longitud: -63.5160387
    },
    {
        id: 409,
        extinto: "GOMEZ BENANCIO ARMANDO",
        nacimiento: "1950-03-24",
        defuncion: "2012-11-16",
        sector: "Sector Azul",
        latitud: -31.5667447,
        longitud: -63.5160515
    },
    {
        id: 410,
        extinto: "BUDASSI VICTORIO",
        nacimiento: "1920-08-17",
        defuncion: "2004-10-06",
        sector: "Sector Azul",
        latitud: -31.5666982,
        longitud: -63.5160405
    },
    {
        id: 411,
        extinto: "PETRONILA DORA SERRANO",
        nacimiento: "1930-10-23",
        defuncion: "2022-08-06",
        sector: "Sector Azul",
        latitud: -31.5666982,
        longitud: -63.5160405
    },
    {
        id: 412,
        extinto: "ALBA BEATRIZ TABORDA",
        nacimiento: "1940-08-13",
        defuncion: "2003-05-27",
        sector: "Sector Azul",
        latitud: -31.5667169,
        longitud: -63.5160510
    },
    {
        id: 413,
        extinto: "SERRANO RAMON ROGELIO",
        nacimiento: "1969-03-17",
        defuncion: "2018-07-21",
        sector: "Sector Azul",
        latitud: -31.5667169,
        longitud: -63.5160510
    },
    {
        id: 414,
        extinto: "NOVELLI RODOLFO",
        nacimiento: "1921-05-05",
        defuncion: "2001-11-22",
        sector: "Sector Azul",
        latitud: -31.5667396,
        longitud: -63.5160638
    },
    {
        id: 415,
        extinto: "ALVAREZ MAGDALENA DE JESUS",
        nacimiento: "1927-12-25",
        defuncion: "2003-07-29",
        sector: "Sector Azul",
        latitud: -31.5667396,
        longitud: -63.5160638
    },
    {
        id: 416,
        extinto: "JULIO VICTORIO DAPRA",
        nacimiento: "1928-01-02",
        defuncion: "1997-01-15",
        sector: "Sector Azul",
        latitud: -31.5666931,
        longitud: -63.5160528
    },
    {
        id: 417,
        extinto: "NORIS DEL CARMEN DAPRA",
        nacimiento: "1953-12-31",
        defuncion: "2015-10-16",
        sector: "Sector Azul",
        latitud: -31.5666931,
        longitud: -63.5160528
    },
    {
        id: 418,
        extinto: "MARIS IRIS DAPRA",
        nacimiento: "1964-02-14",
        defuncion: "2016-03-14",
        sector: "Sector Azul",
        latitud: -31.5666931,
        longitud: -63.5160528
    },
    {
        id: 419,
        extinto: "FERREYRA SEGUNDO",
        nacimiento: "1929-06-14",
        defuncion: "2015-07-04",
        sector: "Sector Azul",
        latitud: -31.5667118,
        longitud: -63.5160634
    },
    {
        id: 420,
        extinto: "SUSANA DEL VALLE SERRANO",
        nacimiento: "1932-09-29",
        defuncion: "2019-03-04",
        sector: "Sector Azul",
        latitud: -31.5667118,
        longitud: -63.5160634
    },
    {
        id: 421,
        extinto: "MURUA AMADEO RUBEN",
        nacimiento: "1948-12-19",
        defuncion: "2002-10-12",
        sector: "Sector Azul",
        latitud: -31.5666880,
        longitud: -63.5160652
    },
    {
        id: 422,
        extinto: "GERBAUDO RICARDO",
        nacimiento: "1955-03-27",
        defuncion: "2006-05-23",
        sector: "Sector Azul",
        latitud: -31.5667067,
        longitud: -63.5160757
    },
    {
        id: 423,
        extinto: "MARIA ANGELICA BUSTO",
        nacimiento: "1923-03-09",
        defuncion: "2018-05-08",
        sector: "Sector Azul",
        latitud: -31.5667067,
        longitud: -63.5160757
    },
    {
        id: 424,
        extinto: "GERBAUDO RAUL",
        nacimiento: "1948-08-15",
        defuncion: "2001-01-20",
        sector: "Sector Azul",
        latitud: -31.5667295,
        longitud: -63.5160885
    },
    {
        id: 425,
        extinto: "SARA FELIPE JUSTO",
        nacimiento: "1928-02-29",
        defuncion: "2003-01-29",
        sector: "Sector Azul",
        latitud: -31.5666829,
        longitud: -63.5160775
    },
    {
        id: 426,
        extinto: "BELTRAMO URSULA MARIA",
        nacimiento: "1926-01-10",
        defuncion: "2016-03-25",
        sector: "Sector Azul",
        latitud: -31.5666829,
        longitud: -63.5160775
    },
    {
        id: 427,
        extinto: "LAURENTI LEONARDO BARTOLOME",
        nacimiento: "1943-10-25",
        defuncion: "2017-11-21",
        sector: "Sector Azul",
        latitud: -31.5667016,
        longitud: -63.5160880
    },
    {
        id: 428,
        extinto: "FELIZ LUIS SUTER",
        nacimiento: "1919-06-16",
        defuncion: "2010-07-02",
        sector: "Sector Azul",
        latitud: -31.5667244,
        longitud: -63.5161008
    },
    {
        id: 429,
        extinto: "DAVITE BLANCA ANGELA",
        nacimiento: "1930-11-29",
        defuncion: "2015-11-30",
        sector: "Sector Azul",
        latitud: -31.5667244,
        longitud: -63.5161008
    },
    {
        id: 430,
        extinto: "MOLINA MERCEDES RAMONA",
        nacimiento: "1931-02-08",
        defuncion: "2001-07-17",
        sector: "Sector Azul",
        latitud: -31.5666778,
        longitud: -63.5160898
    },
    {
        id: 431,
        extinto: "ARNEUDO ANDRES",
        nacimiento: "1928-12-01",
        defuncion: "2006-01-17",
        sector: "Sector Azul",
        latitud: -31.5666778,
        longitud: -63.5160898
    },
    {
        id: 432,
        extinto: "FRANCISCO ANDRES SOSA",
        nacimiento: "1999-01-11",
        defuncion: "2023-09-06",
        sector: "Sector Azul",
        latitud: -31.5666778,
        longitud: -63.5160898
    },
    {
        id: 433,
        extinto: "PERALTA EDGARDO RENE",
        nacimiento: "1926-05-13",
        defuncion: "2005-06-30",
        sector: "Sector Azul",
        latitud: -31.5666965,
        longitud: -63.5161004
    },
    {
        id: 434,
        extinto: "PERALTA ERNESTO",
        nacimiento: "1924-12-17",
        defuncion: "2001-09-09",
        sector: "Sector Azul",
        latitud: -31.5667193,
        longitud: -63.5161132
    },
    {
        id: 435,
        extinto: "MATILDE ESTHER DEL VALLE SERRANO",
        nacimiento: "1927-05-15",
        defuncion: "2014-02-01",
        sector: "Sector Azul",
        latitud: -31.5667193,
        longitud: -63.5161132
    },
    {
        id: 436,
        extinto: "RODRIGUEZ JOSE LUIS",
        nacimiento: "1934-09-24",
        defuncion: "2003-07-11",
        sector: "Sector Azul",
        latitud: -31.5666677,
        longitud: -63.5161145
    },
    {
        id: 437,
        extinto: "RODRIGUEZ MONICA PATRICIA",
        nacimiento: "1962-01-07",
        defuncion: "2016-01-08",
        sector: "Sector Azul",
        latitud: -31.5666677,
        longitud: -63.5161145
    },
    {
        id: 438,
        extinto: "MANSILLA CONSOLACION",
        nacimiento: "1923-12-21",
        defuncion: "2016-06-01",
        sector: "Sector Azul",
        latitud: -31.5666863,
        longitud: -63.5161250
    },
    {
        id: 439,
        extinto: "JOSE AMADO MANSILLA",
        nacimiento: "1943-05-19",
        defuncion: "2018-05-27",
        sector: "Sector Azul",
        latitud: -31.5666863,
        longitud: -63.5161250
    },
    {
        id: 440,
        extinto: "GARELLI MAGDALENA LUCIA",
        nacimiento: "1924-02-06",
        defuncion: "2007-08-27",
        sector: "Sector Azul",
        latitud: -31.5667091,
        longitud: -63.5161378
    },
    {
        id: 441,
        extinto: "ACOSTA INES MERCEDEZ",
        nacimiento: "1963-09-04",
        defuncion: "2016-08-29",
        sector: "Sector Azul",
        latitud: -31.5667091,
        longitud: -63.5161378
    },
    {
        id: 442,
        extinto: "PERALTA JULIO OCTAVIO",
        nacimiento: "2013-06-19",
        defuncion: "2013-06-19",
        sector: "Sector Azul",
        latitud: -31.5666575,
        longitud: -63.5161392
    },
    {
        id: 443,
        extinto: "ANA MARIA PERALTA",
        nacimiento: "1949-08-08",
        defuncion: "2018-05-08",
        sector: "Sector Azul",
        latitud: -31.5666762,
        longitud: -63.5161497
    },
    {
        id: 444,
        extinto: "NEIRA ENRIQUE DANIEL",
        nacimiento: "1943-02-19",
        defuncion: "2013-03-20",
        sector: "Sector Azul",
        latitud: -31.5666989,
        longitud: -63.5161625
    },
    {
        id: 445,
        extinto: "SORIA RAMON E",
        nacimiento: "1919-07-16",
        defuncion: "2001-09-22",
        sector: "Sector Azul",
        latitud: -31.5666524,
        longitud: -63.5161515
    },
    {
        id: 446,
        extinto: "QUINTANILLA ROBERTO MANUEL",
        nacimiento: "1953-02-22",
        defuncion: "2006-06-15",
        sector: "Sector Azul",
        latitud: -31.5666524,
        longitud: -63.5161515
    },
    {
        id: 447,
        extinto: "ARCE SEGUNDO SEVERO",
        nacimiento: "1915-03-12",
        defuncion: "1988-01-28",
        sector: "Sector Azul",
        latitud: -31.5666711,
        longitud: -63.5161620
    },
    {
        id: 448,
        extinto: "PURA GOMEZ",
        nacimiento: "1923-04-03",
        defuncion: "2014-07-22",
        sector: "Sector Azul",
        latitud: -31.5666711,
        longitud: -63.5161620
    },
    {
        id: 449,
        extinto: "TABORDA JUAN LEON",
        nacimiento: "1937-07-07",
        defuncion: "2007-04-02",
        sector: "Sector Azul",
        latitud: -31.5666938,
        longitud: -63.5161748
    },
    {
        id: 450,
        extinto: "JUAN CARLOS TABORDA",
        nacimiento: "1966-03-18",
        defuncion: "2022-12-30",
        sector: "Sector Azul",
        latitud: -31.5666938,
        longitud: -63.5161748
    },
    {
        id: 451,
        extinto: "NEIRA MARIA BEATRIZ",
        nacimiento: "1919-04-30",
        defuncion: "2016-08-09",
        sector: "Sector Azul",
        latitud: -31.5666473,
        longitud: -63.5161639
    },
    {
        id: 452,
        extinto: "LUDUEÑA POLONIA ARSENIA",
        nacimiento: "1912-05-17",
        defuncion: "2010-08-23",
        sector: "Sector Azul",
        latitud: -31.5666660,
        longitud: -63.5161744
    },
    {
        id: 453,
        extinto: "MARIA TERESA CAVAGNA",
        nacimiento: "1942-05-05",
        defuncion: "2018-05-02",
        sector: "Sector Azul",
        latitud: -31.5666660,
        longitud: -63.5161744
    },
    {
        id: 454,
        extinto: "HECTOR EPIFANIO ZAMORA",
        nacimiento: "1941-05-27",
        defuncion: "2024-07-07",
        sector: "Sector Azul",
        latitud: -31.5666660,
        longitud: -63.5161744
    },
    {
        id: 455,
        extinto: "ZANONI CARLOS ALFREDO",
        nacimiento: "1938-10-22",
        defuncion: "2002-09-19",
        sector: "Sector Azul",
        latitud: -31.5666887,
        longitud: -63.5161872
    },
    {
        id: 456,
        extinto: "OLIVA JELMA DEL ROSARIO",
        nacimiento: "1938-10-22",
        defuncion: "2016-12-10",
        sector: "Sector Azul",
        latitud: -31.5666887,
        longitud: -63.5161872
    },
    {
        id: 457,
        extinto: "PEREZ LUIS DALMACIO",
        nacimiento: "2010-10-18",
        defuncion: "2010-10-18",
        sector: "Sector Azul",
        latitud: -31.5666422,
        longitud: -63.5161762
    },
    {
        id: 458,
        extinto: "TERESA MININ",
        nacimiento: "2010-10-18",
        defuncion: "2010-10-18",
        sector: "Sector Azul",
        latitud: -31.5666422,
        longitud: -63.5161762
    },
    {
        id: 459,
        extinto: "DERRA ATILIO",
        nacimiento: "2012-05-08",
        defuncion: "2012-05-08",
        sector: "Sector Azul",
        latitud: -31.5666609,
        longitud: -63.5161867
    },
    {
        id: 460,
        extinto: "LUDUEÑA MARIA FRANCISCA",
        nacimiento: "2012-05-08",
        defuncion: "2012-05-08",
        sector: "Sector Azul",
        latitud: -31.5666609,
        longitud: -63.5161867
    },
    {
        id: 461,
        extinto: "DERRA JORGE",
        nacimiento: "2012-05-08",
        defuncion: "2012-05-08",
        sector: "Sector Azul",
        latitud: -31.5666609,
        longitud: -63.5161867
    },
    {
        id: 462,
        extinto: "ROSSI ADELINA ANA",
        nacimiento: "1935-08-09",
        defuncion: "2005-05-10",
        sector: "Sector Azul",
        latitud: -31.5666836,
        longitud: -63.5161995
    },
    {
        id: 463,
        extinto: "VIRONI ROBERTO",
        nacimiento: "1932-11-25",
        defuncion: "2007-07-23",
        sector: "Sector Azul",
        latitud: -31.5666836,
        longitud: -63.5161995
    },
    {
        id: 464,
        extinto: "PERALTA SECILIA ANITA",
        nacimiento: "1937-04-15",
        defuncion: "2011-08-04",
        sector: "Sector Azul",
        latitud: -31.5666371,
        longitud: -63.5161885
    },
    {
        id: 465,
        extinto: "DERRA   GAUDENCIO",
        nacimiento: "1932-05-29",
        defuncion: "1998-05-28",
        sector: "Sector Azul",
        latitud: -31.5666371,
        longitud: -63.5161885
    },
    {
        id: 466,
        extinto: "WALTER GAUDENCIO DERRA",
        nacimiento: "1962-01-09",
        defuncion: "2022-02-15",
        sector: "Sector Azul",
        latitud: -31.5666371,
        longitud: -63.5161885
    },
    {
        id: 467,
        extinto: "WISMATH JUAN CARLOS",
        nacimiento: "1938-03-24",
        defuncion: "2011-12-05",
        sector: "Sector Azul",
        latitud: -31.5666558,
        longitud: -63.5161990
    },
    {
        id: 468,
        extinto: "FANANI SARA ESTHER",
        nacimiento: "1939-12-23",
        defuncion: "2008-08-24",
        sector: "Sector Azul",
        latitud: -31.5666785,
        longitud: -63.5162118
    },
    {
        id: 469,
        extinto: "FABIO ARMANDO VELEZ",
        nacimiento: "1941-11-30",
        defuncion: "2023-12-28",
        sector: "Sector Azul",
        latitud: -31.5666507,
        longitud: -63.5162114
    },
    {
        id: 470,
        extinto: "SANDRI ONOFRIO",
        nacimiento: "1900-12-23",
        defuncion: "1969-05-20",
        sector: "Sector Azul",
        latitud: -31.5666734,
        longitud: -63.5162242
    },
    {
        id: 471,
        extinto: "FARCCARO AUGUSTA",
        nacimiento: "1900-12-10",
        defuncion: "1976-04-11",
        sector: "Sector Azul",
        latitud: -31.5666734,
        longitud: -63.5162242
    },
    {
        id: 472,
        extinto: "SANDRI ESTHER MAGDALENA",
        nacimiento: "1923-09-13",
        defuncion: "1972-09-30",
        sector: "Sector Azul",
        latitud: -31.5666734,
        longitud: -63.5162242
    },
    {
        id: 473,
        extinto: "N/N  RIVERA/ NAVARRO",
        nacimiento: "2011-06-23",
        defuncion: "2011-06-23",
        sector: "Sector Azul",
        latitud: -31.5665883,
        longitud: -63.5163038
    },
    {
        id: 474,
        extinto: "DUILIO CRISTOBAL CARRIZO",
        nacimiento: "1934-11-26",
        defuncion: "2023-01-25",
        sector: "Sector Azul",
        latitud: -31.5665883,
        longitud: -63.5163038
    },
    {
        id: 475,
        extinto: "VERCELLONE ENRIQUE",
        nacimiento: "1916-07-10",
        defuncion: "1980-02-22",
        sector: "Sector Azul",
        latitud: -31.5666039,
        longitud: -63.5163197
    },
    {
        id: 476,
        extinto: "MARGARITA DOMINGA GRASSO",
        nacimiento: "1917-05-12",
        defuncion: "2009-09-08",
        sector: "Sector Azul",
        latitud: -31.5666039,
        longitud: -63.5163197
    },
    {
        id: 477,
        extinto: "BLANCA VERCELLONE",
        nacimiento: "1948-09-18",
        defuncion: "1953-08-21",
        sector: "Sector Azul",
        latitud: -31.5666039,
        longitud: -63.5163197
    },
    {
        id: 478,
        extinto: "COLAZO CHELA DEL CARMEN",
        nacimiento: "1916-08-28",
        defuncion: "2003-06-27",
        sector: "Sector Azul",
        latitud: -31.5665885,
        longitud: -63.5163404
    },
    {
        id: 479,
        extinto: "COLAZO OLGA AIDA",
        nacimiento: "1919-04-06",
        defuncion: "2007-03-05",
        sector: "Sector Azul",
        latitud: -31.5665885,
        longitud: -63.5163404
    },
    {
        id: 480,
        extinto: "LEAL MARCHENA MARIA SOLEDAD",
        nacimiento: "1978-09-04",
        defuncion: "1981-08-27",
        sector: "Sector Azul",
        latitud: -31.5665730,
        longitud: -63.5163244
    },
    {
        id: 481,
        extinto: "COLAZO GUSTAVO OSCAR",
        nacimiento: "1914-03-08",
        defuncion: "1978-08-05",
        sector: "Sector Azul",
        latitud: -31.5665962,
        longitud: -63.5163300
    },
    {
        id: 482,
        extinto: "YORIO BLANCA ANA",
        nacimiento: "1928-01-01",
        defuncion: "2011-11-21",
        sector: "Sector Azul",
        latitud: -31.5665962,
        longitud: -63.5163300
    },
    {
        id: 483,
        extinto: "IVAN ELOY WABISZCZEWICZ",
        nacimiento: "1986-08-02",
        defuncion: "2019-04-12",
        sector: "Sector Azul",
        latitud: -31.5665962,
        longitud: -63.5163300
    },
    {
        id: 484,
        extinto: "LOYOLA JOSE ERNESTO",
        nacimiento: "1957-08-01",
        defuncion: "2000-08-26",
        sector: "Sector Azul",
        latitud: -31.5665652,
        longitud: -63.5163348
    },
    {
        id: 485,
        extinto: "LOYOLA HECTOR JESUS",
        nacimiento: "1927-09-20",
        defuncion: "2005-12-25",
        sector: "Sector Azul",
        latitud: -31.5665652,
        longitud: -63.5163348
    },
    {
        id: 486,
        extinto: "ISABEL DEL CARMEN LOYOLA",
        nacimiento: "1948-02-21",
        defuncion: "2011-09-08",
        sector: "Sector Azul",
        latitud: -31.5665652,
        longitud: -63.5163348
    },
    {
        id: 487,
        extinto: "LEAL MARCHENA JOSE MARIA",
        nacimiento: "1922-05-31",
        defuncion: "2007-08-02",
        sector: "Sector Azul",
        latitud: -31.5665808,
        longitud: -63.5163507
    },
    {
        id: 488,
        extinto: "MARIA ESTHER CHALLIER",
        nacimiento: "1927-09-08",
        defuncion: "2019-08-13",
        sector: "Sector Azul",
        latitud: -31.5665808,
        longitud: -63.5163507
    },
    {
        id: 489,
        extinto: "VILMA DOMINGA GARDA",
        nacimiento: "1941-10-05",
        defuncion: "2012-05-13",
        sector: "Sector Azul",
        latitud: -31.5665575,
        longitud: -63.5163451
    },
    {
        id: 490,
        extinto: "JULIO ARGENTINO FRONTERA",
        nacimiento: "1941-07-09",
        defuncion: "2019-04-28",
        sector: "Sector Azul",
        latitud: -31.5665731,
        longitud: -63.5163610
    },
    {
        id: 491,
        extinto: "IRMA MARIA GIRAUDO",
        nacimiento: "1936-11-22",
        defuncion: "2019-08-05",
        sector: "Sector Azul",
        latitud: -31.5665731,
        longitud: -63.5163610
    },
    {
        id: 492,
        extinto: "VAZQUEZ JOSE CIPRIANO",
        nacimiento: "1914-09-23",
        defuncion: "1982-07-08",
        sector: "Sector Azul",
        latitud: -31.5665498,
        longitud: -63.5163554
    },
    {
        id: 493,
        extinto: "PERONA VITALINA",
        nacimiento: "1923-08-19",
        defuncion: "2010-11-14",
        sector: "Sector Azul",
        latitud: -31.5665498,
        longitud: -63.5163554
    },
    {
        id: 494,
        extinto: "MARIANI RICARDO ANTONIO",
        nacimiento: "1915-07-31",
        defuncion: "1974-05-23",
        sector: "Sector Azul",
        latitud: -31.5665654,
        longitud: -63.5163713
    },
    {
        id: 495,
        extinto: "EMELINA RODRIGUEZ",
        nacimiento: "1922-05-15",
        defuncion: "2017-07-25",
        sector: "Sector Azul",
        latitud: -31.5665654,
        longitud: -63.5163713
    },
    {
        id: 496,
        extinto: "ALVAREZ MARIA LOLA",
        nacimiento: "1907-08-11",
        defuncion: "2001-02-03",
        sector: "Sector Rojo",
        latitud: -31.5665539,
        longitud: -63.5157048
    },
    {
        id: 497,
        extinto: "GIACAGLIA HECTOR FEDERICO",
        nacimiento: "1934-01-31",
        defuncion: "2011-04-02",
        sector: "Sector Rojo",
        latitud: -31.5665539,
        longitud: -63.5157048
    },
    {
        id: 498,
        extinto: "FRANCISCO CACIORGNA",
        nacimiento: "2015-05-13",
        defuncion: "2015-05-13",
        sector: "Sector Rojo",
        latitud: -31.5666183,
        longitud: -63.5157254
    },
    {
        id: 499,
        extinto: "RAMONA CATALINA LOZA",
        nacimiento: "1914-08-09",
        defuncion: "2009-08-14",
        sector: "Sector Rojo",
        latitud: -31.5666427,
        longitud: -63.5157331
    },
    {
        id: 500,
        extinto: "CEBALLOS JOSE ALBERTO",
        nacimiento: "1953-02-22",
        defuncion: "2015-11-07",
        sector: "Sector Rojo",
        latitud: -31.5665508,
        longitud: -63.5157180
    },
    {
        id: 501,
        extinto: "ALEJOS HECTOR DIONISIO",
        nacimiento: "1943-01-26",
        defuncion: "2015-09-01",
        sector: "Sector Rojo",
        latitud: -31.5665708,
        longitud: -63.5157244
    },
    {
        id: 502,
        extinto: "ALEJOS JUAN",
        nacimiento: "1921-09-18",
        defuncion: "1968-07-14",
        sector: "Sector Rojo",
        latitud: -31.5665708,
        longitud: -63.5157244
    },
    {
        id: 503,
        extinto: "PEREZ HECTOR DOMINGO",
        nacimiento: "1932-01-10",
        defuncion: "2003-08-21",
        sector: "Sector Rojo",
        latitud: -31.5665952,
        longitud: -63.5157322
    },
    {
        id: 504,
        extinto: "BALICKI RODOLFO ABEL",
        nacimiento: "1941-12-02",
        defuncion: "2012-05-10",
        sector: "Sector Rojo",
        latitud: -31.5666152,
        longitud: -63.5157386
    },
    {
        id: 505,
        extinto: "GONZALEZ MAIA MARIA SELENE",
        nacimiento: "2006-11-02",
        defuncion: "2006-11-15",
        sector: "Sector Rojo",
        latitud: -31.5666396,
        longitud: -63.5157463
    },
    {
        id: 506,
        extinto: "BUSTOS LAZARO",
        nacimiento: "1922-12-17",
        defuncion: "1985-06-17",
        sector: "Sector Rojo",
        latitud: -31.5666596,
        longitud: -63.5157527
    },
    {
        id: 507,
        extinto: "PERALTA BLANCA DORA",
        nacimiento: "1925-06-24",
        defuncion: "1991-11-20",
        sector: "Sector Rojo",
        latitud: -31.5666596,
        longitud: -63.5157527
    },
    {
        id: 508,
        extinto: "BUSTOS ABEL ANGEL",
        nacimiento: "1949-03-12",
        defuncion: "1950-01-24",
        sector: "Sector Rojo",
        latitud: -31.5666596,
        longitud: -63.5157527
    },
    {
        id: 509,
        extinto: "MARIA SUSANA CALLEJAS",
        nacimiento: "1959-12-29",
        defuncion: "2021-08-11",
        sector: "Sector Rojo",
        latitud: -31.5665477,
        longitud: -63.5157312
    },
    {
        id: 510,
        extinto: "LUCERO NORBERTO",
        nacimiento: "1971-01-07",
        defuncion: "2015-12-04",
        sector: "Sector Rojo",
        latitud: -31.5665678,
        longitud: -63.5157376
    },
    {
        id: 511,
        extinto: "GIACCAGLIA TERESITA",
        nacimiento: "1948-10-16",
        defuncion: "2016-03-21",
        sector: "Sector Rojo",
        latitud: -31.5665921,
        longitud: -63.5157454
    },
    {
        id: 512,
        extinto: "DORA TERESA GOMEZ",
        nacimiento: "1935-02-03",
        defuncion: "2021-05-11",
        sector: "Sector Rojo",
        latitud: -31.5666121,
        longitud: -63.5157518
    },
    {
        id: 513,
        extinto: "ALFREDO LUCIO PEREZ",
        nacimiento: "1959-07-13",
        defuncion: "2022-03-26",
        sector: "Sector Rojo",
        latitud: -31.5666121,
        longitud: -63.5157518
    },
    {
        id: 514,
        extinto: "RAMON ALFREDO PEREZ",
        nacimiento: "1934-10-12",
        defuncion: "1976-04-14",
        sector: "Sector Rojo",
        latitud: -31.5666121,
        longitud: -63.5157518
    },
    {
        id: 515,
        extinto: "PEREZ MARCELO SILVESTRE",
        nacimiento: "1975-11-19",
        defuncion: "2010-06-27",
        sector: "Sector Rojo",
        latitud: -31.5666365,
        longitud: -63.5157596
    },
    {
        id: 516,
        extinto: "MORAL IDA ANTONIA",
        nacimiento: "1934-05-25",
        defuncion: "2007-07-27",
        sector: "Sector Rojo",
        latitud: -31.5666565,
        longitud: -63.5157659
    },
    {
        id: 517,
        extinto: "MARCELA BEATRIZ QUINTERO",
        nacimiento: "1970-12-07",
        defuncion: "2022-03-20",
        sector: "Sector Rojo",
        latitud: -31.5666565,
        longitud: -63.5157659
    },
    {
        id: 518,
        extinto: "JOSE ANTONIO LOPEZ",
        nacimiento: "1958-09-13",
        defuncion: "2024-07-17",
        sector: "Sector Rojo",
        latitud: -31.5666565,
        longitud: -63.5157659
    },
    {
        id: 519,
        extinto: "RAUL IGNACIO PALACIOS",
        nacimiento: "1951-11-05",
        defuncion: "2021-02-19",
        sector: "Sector Rojo",
        latitud: -31.5665447,
        longitud: -63.5157444
    },
    {
        id: 520,
        extinto: "BRASSIOLO NANCY EDITH",
        nacimiento: "1979-05-25",
        defuncion: "2015-08-09",
        sector: "Sector Rojo",
        latitud: -31.5666334,
        longitud: -63.5157728
    },
    {
        id: 521,
        extinto: "ROBERTO ANGEL BRASSIOLO",
        nacimiento: "1949-01-24",
        defuncion: "2021-04-09",
        sector: "Sector Rojo",
        latitud: -31.5666334,
        longitud: -63.5157728
    },
    {
        id: 522,
        extinto: "NORMA CAROLINA RIVARA",
        nacimiento: "1950-12-03",
        defuncion: "2022-01-22",
        sector: "Sector Rojo",
        latitud: -31.5666334,
        longitud: -63.5157728
    },
    {
        id: 523,
        extinto: "PERALTA MANUEL",
        nacimiento: "1932-06-10",
        defuncion: "2015-07-03",
        sector: "Sector Rojo",
        latitud: -31.5666534,
        longitud: -63.5157791
    },
    {
        id: 524,
        extinto: "GIGENA FRANCISCO JAVIER",
        nacimiento: "2017-05-04",
        defuncion: "2017-05-04",
        sector: "Sector Rojo",
        latitud: -31.5666059,
        longitud: -63.5157782
    },
    {
        id: 525,
        extinto: "DEIDERI GUILLERMO ANTONIO",
        nacimiento: "1916-04-29",
        defuncion: "2003-01-17",
        sector: "Sector Rojo",
        latitud: -31.5666059,
        longitud: -63.5157782
    },
    {
        id: 526,
        extinto: "GIGENA DE DEIDERI MARIA ROSA",
        nacimiento: "1924-03-27",
        defuncion: "1985-04-12",
        sector: "Sector Rojo",
        latitud: -31.5666059,
        longitud: -63.5157782
    },
    {
        id: 527,
        extinto: "RAMELLO HUGO ALEJANDRO",
        nacimiento: "1946-10-29",
        defuncion: "2017-01-03",
        sector: "Sector Rojo",
        latitud: -31.5666503,
        longitud: -63.5157924
    },
    {
        id: 528,
        extinto: "ALMADA JOSE ARTEMIO",
        nacimiento: "1944-07-01",
        defuncion: "2009-05-04",
        sector: "Sector Rojo",
        latitud: -31.5665385,
        longitud: -63.5157709
    },
    {
        id: 529,
        extinto: "MAZZA CHAPARRO MARCELO",
        nacimiento: "2014-09-18",
        defuncion: "2014-09-18",
        sector: "Sector Rojo",
        latitud: -31.5666029,
        longitud: -63.5157914
    },
    {
        id: 530,
        extinto: "MAZZA VEGA RAMON",
        nacimiento: "1954-11-18",
        defuncion: "2014-09-12",
        sector: "Sector Rojo",
        latitud: -31.5666029,
        longitud: -63.5157914
    },
    {
        id: 531,
        extinto: "JULIO RENE PAVON",
        nacimiento: "1948-07-18",
        defuncion: "2021-12-18",
        sector: "Sector Rojo",
        latitud: -31.5666272,
        longitud: -63.5157992
    },
    {
        id: 532,
        extinto: "MARIA  ELOISA  SORIA",
        nacimiento: "1917-12-05",
        defuncion: "1987-04-11",
        sector: "Sector Rojo",
        latitud: -31.5666272,
        longitud: -63.5157992
    },
    {
        id: 533,
        extinto: "RAMON  ANTONIO  QUINTEROS",
        nacimiento: "1908-09-12",
        defuncion: "1982-10-12",
        sector: "Sector Rojo",
        latitud: -31.5666272,
        longitud: -63.5157992
    },
    {
        id: 534,
        extinto: "FRANCISCO ALBERTO BUSTILLO",
        nacimiento: "1966-12-28",
        defuncion: "2018-06-05",
        sector: "Sector Rojo",
        latitud: -31.5665554,
        longitud: -63.5157905
    },
    {
        id: 535,
        extinto: "CHIAPPERO ANA ISABEL",
        nacimiento: "1918-10-19",
        defuncion: "2003-09-04",
        sector: "Sector Rojo",
        latitud: -31.5665998,
        longitud: -63.5158046
    },
    {
        id: 536,
        extinto: "MAMERTO ERNESTO FERNANDEZ",
        nacimiento: "1913-03-11",
        defuncion: "1986-12-14",
        sector: "Sector Rojo",
        latitud: -31.5665998,
        longitud: -63.5158046
    },
    {
        id: 537,
        extinto: "MARTINA BELEN DAVICINO",
        nacimiento: "2017-08-15",
        defuncion: "2017-08-15",
        sector: "Sector Rojo",
        latitud: -31.5666241,
        longitud: -63.5158124
    },
    {
        id: 538,
        extinto: "BEDOGNI ADA ZONIA DEL VALLE",
        nacimiento: "1965-09-15",
        defuncion: "2017-01-08",
        sector: "Sector Rojo",
        latitud: -31.5666441,
        longitud: -63.5158188
    },
    {
        id: 539,
        extinto: "GIANOTTI TERESA LUCIA",
        nacimiento: "1924-01-01",
        defuncion: "2004-07-14",
        sector: "Sector Rojo",
        latitud: -31.5665523,
        longitud: -63.5158037
    },
    {
        id: 540,
        extinto: "ANDRADES DONACIANO COSME",
        nacimiento: "1929-05-25",
        defuncion: "2007-01-16",
        sector: "Sector Rojo",
        latitud: -31.5665523,
        longitud: -63.5158037
    },
    {
        id: 541,
        extinto: "MARIANI ALFREDO RITO",
        nacimiento: "1914-05-23",
        defuncion: "2002-03-28",
        sector: "Sector Rojo",
        latitud: -31.5666380,
        longitud: -63.5158452
    },
    {
        id: 542,
        extinto: "SARMINTO ADA FIDELMINA",
        nacimiento: "1936-09-11",
        defuncion: "2010-03-28",
        sector: "Sector Rojo",
        latitud: -31.5666380,
        longitud: -63.5158452
    },
    {
        id: 543,
        extinto: "TAMAGNINI VICTOR HUGO",
        nacimiento: "1954-04-20",
        defuncion: "2017-06-03",
        sector: "Sector Rojo",
        latitud: -31.5665261,
        longitud: -63.5158237
    },
    {
        id: 544,
        extinto: "OSCAR RAMON ROMERO",
        nacimiento: "1961-10-02",
        defuncion: "2018-06-08",
        sector: "Sector Rojo",
        latitud: -31.5665705,
        longitud: -63.5158379
    },
    {
        id: 545,
        extinto: "MARIANA DEL VALLE QUINTEROS",
        nacimiento: "1982-05-29",
        defuncion: "2021-08-27",
        sector: "Sector Rojo",
        latitud: -31.5666349,
        longitud: -63.5158584
    },
    {
        id: 546,
        extinto: "FONTANA VICENTE SANTIAGO",
        nacimiento: "1940-04-19",
        defuncion: "2015-04-03",
        sector: "Sector Rojo",
        latitud: -31.5665674,
        longitud: -63.5158511
    },
    {
        id: 547,
        extinto: "TABORDA ANA LILIAN",
        nacimiento: "1945-06-24",
        defuncion: "2010-09-03",
        sector: "Sector Rojo",
        latitud: -31.5666118,
        longitud: -63.5158652
    },
    {
        id: 548,
        extinto: "GONZALEZ ENRIQUE",
        nacimiento: "1922-07-15",
        defuncion: "1995-07-27",
        sector: "Sector Rojo",
        latitud: -31.5665199,
        longitud: -63.5158501
    },
    {
        id: 549,
        extinto: "SOSA MARIA BERNARDINA",
        nacimiento: "1931-05-20",
        defuncion: "1992-12-15",
        sector: "Sector Rojo",
        latitud: -31.5665199,
        longitud: -63.5158501
    },
    {
        id: 550,
        extinto: "VICTOR  HUGO  GONZALEZ",
        nacimiento: "1957-03-24",
        defuncion: "2023-04-08",
        sector: "Sector Rojo",
        latitud: -31.5665199,
        longitud: -63.5158501
    },
    {
        id: 551,
        extinto: "PAULINA MARGARITA ONTIVERO",
        nacimiento: "1942-04-30",
        defuncion: "2020-07-15",
        sector: "Sector Rojo",
        latitud: -31.5665399,
        longitud: -63.5158565
    },
    {
        id: 552,
        extinto: "JOSE ALBERTO GERBINO",
        nacimiento: "1942-06-10",
        defuncion: "2021-05-17",
        sector: "Sector Rojo",
        latitud: -31.5665399,
        longitud: -63.5158565
    },
    {
        id: 553,
        extinto: "PABLO RICARDO NEIRA",
        nacimiento: "1962-10-26",
        defuncion: "1994-05-03",
        sector: "Sector Rojo",
        latitud: -31.5665643,
        longitud: -63.5158643
    },
    {
        id: 554,
        extinto: "RLPIDIO FRONTERA",
        nacimiento: "1933-03-23",
        defuncion: "2016-05-20",
        sector: "Sector Rojo",
        latitud: -31.5665843,
        longitud: -63.5158707
    },
    {
        id: 555,
        extinto: "FRONTERA RAMON VICTOR",
        nacimiento: "1967-07-14",
        defuncion: "2012-12-25",
        sector: "Sector Rojo",
        latitud: -31.5666087,
        longitud: -63.5158784
    },
    {
        id: 556,
        extinto: "CASTILLO MARIA LUISA",
        nacimiento: "1949-06-11",
        defuncion: "2007-12-04",
        sector: "Sector Rojo",
        latitud: -31.5666287,
        longitud: -63.5158848
    },
    {
        id: 557,
        extinto: "VILMA  EDITH  MANDILE",
        nacimiento: "1973-04-09",
        defuncion: "2023-10-23",
        sector: "Sector Rojo",
        latitud: -31.5665168,
        longitud: -63.5158633
    },
    {
        id: 558,
        extinto: "MARTA JOSEFINA NAVARRO",
        nacimiento: "2018-07-02",
        defuncion: "2018-07-02",
        sector: "Sector Rojo",
        latitud: -31.5665612,
        longitud: -63.5158775
    },
    {
        id: 559,
        extinto: "TOMAS ALEJANDRO JUNCOS",
        nacimiento: "1950-03-07",
        defuncion: "2020-01-18",
        sector: "Sector Rojo",
        latitud: -31.5665612,
        longitud: -63.5158775
    },
    {
        id: 560,
        extinto: "TORRES FAUSTINA",
        nacimiento: "1940-09-05",
        defuncion: "2012-05-01",
        sector: "Sector Rojo",
        latitud: -31.5665812,
        longitud: -63.5158839
    },
    {
        id: 561,
        extinto: "ANGEL FERNANDO RAMIREZ",
        nacimiento: "1933-07-09",
        defuncion: "2008-08-31",
        sector: "Sector Rojo",
        latitud: -31.5665812,
        longitud: -63.5158839
    },
    {
        id: 562,
        extinto: "JUSTO ISOLINO ALGARBE",
        nacimiento: "1929-07-28",
        defuncion: "2001-08-28",
        sector: "Sector Rojo",
        latitud: -31.5665812,
        longitud: -63.5158839
    },
    {
        id: 563,
        extinto: "GOMEZ RAMON O",
        nacimiento: "1957-09-12",
        defuncion: "2001-10-16",
        sector: "Sector Rojo",
        latitud: -31.5666256,
        longitud: -63.5158980
    },
    {
        id: 564,
        extinto: "GOMEZ ELEUTERIO OSCAR",
        nacimiento: "1932-11-26",
        defuncion: "1990-12-04",
        sector: "Sector Rojo",
        latitud: -31.5666256,
        longitud: -63.5158980
    },
    {
        id: 565,
        extinto: "MARIA ROSA CASTILLO",
        nacimiento: "1935-10-20",
        defuncion: "2010-06-12",
        sector: "Sector Rojo",
        latitud: -31.5666256,
        longitud: -63.5158980
    },
    {
        id: 566,
        extinto: "CABRERA LUISA ARMINDA",
        nacimiento: "1938-05-30",
        defuncion: "2001-05-27",
        sector: "Sector Rojo",
        latitud: -31.5665138,
        longitud: -63.5158765
    },
    {
        id: 567,
        extinto: "LIENDO EFRAIN ALBERTO",
        nacimiento: "2012-11-27",
        defuncion: "2012-11-27",
        sector: "Sector Rojo",
        latitud: -31.5665581,
        longitud: -63.5158907
    },
    {
        id: 568,
        extinto: "MARIA  ESTER  MOLINA",
        nacimiento: "1936-01-16",
        defuncion: "2024-06-14",
        sector: "Sector Rojo",
        latitud: -31.5666225,
        longitud: -63.5159112
    },
    {
        id: 569,
        extinto: "ARMONICO MARIANA",
        nacimiento: "1949-06-13",
        defuncion: "2014-03-23",
        sector: "Sector Rojo",
        latitud: -31.5665994,
        longitud: -63.5159181
    },
    {
        id: 570,
        extinto: "BOSSIO PABLO MIGUEL MAURICIO",
        nacimiento: "1929-09-09",
        defuncion: "2007-06-05",
        sector: "Sector Rojo",
        latitud: -31.5666194,
        longitud: -63.5159244
    },
    {
        id: 571,
        extinto: "PRESOTTI ELSA EMILIA",
        nacimiento: "1934-01-06",
        defuncion: "2017-06-04",
        sector: "Sector Rojo",
        latitud: -31.5666194,
        longitud: -63.5159244
    },
    {
        id: 572,
        extinto: "NORMA ROSA PERALTA",
        nacimiento: "1945-02-05",
        defuncion: "2010-04-28",
        sector: "Sector Rojo",
        latitud: -31.5666163,
        longitud: -63.5159377
    },
    {
        id: 573,
        extinto: "ALGARBE RAUL EDUARDO",
        nacimiento: "1956-08-11",
        defuncion: "2008-06-03",
        sector: "Sector Rojo",
        latitud: -31.5665245,
        longitud: -63.5159225
    },
    {
        id: 574,
        extinto: "FARIAS BERNABELA ROSA",
        nacimiento: "1935-06-11",
        defuncion: "2008-09-08",
        sector: "Sector Rojo",
        latitud: -31.5665458,
        longitud: -63.5159435
    },
    {
        id: 575,
        extinto: "ALGARBE JOSE JESUS",
        nacimiento: "1912-03-10",
        defuncion: "1998-01-17",
        sector: "Sector Rojo",
        latitud: -31.5665458,
        longitud: -63.5159435
    },
    {
        id: 576,
        extinto: "CEAGLIO NATALIO",
        nacimiento: "1905-12-25",
        defuncion: "2001-07-18",
        sector: "Sector Azul",
        latitud: -31.5666101,
        longitud: -63.5159641
    },
    {
        id: 577,
        extinto: "HONG MARGARITA",
        nacimiento: "1910-09-25",
        defuncion: "1991-08-27",
        sector: "Sector Azul",
        latitud: -31.5666101,
        longitud: -63.5159641
    },
    {
        id: 578,
        extinto: "CEAGLIO ITALO ARMANDO",
        nacimiento: "1939-10-06",
        defuncion: "2013-12-12",
        sector: "Sector Azul",
        latitud: -31.5666101,
        longitud: -63.5159641
    },
    {
        id: 579,
        extinto: "BARATELLI CELESTINO",
        nacimiento: "1903-09-22",
        defuncion: "1971-04-07",
        sector: "Sector Azul",
        latitud: -31.5666070,
        longitud: -63.5159773
    },
    {
        id: 580,
        extinto: "CUQUEJO MARIA ISABEL",
        nacimiento: "1904-10-26",
        defuncion: "2003-12-23",
        sector: "Sector Azul",
        latitud: -31.5666070,
        longitud: -63.5159773
    },
    {
        id: 581,
        extinto: "BARATELLI JUANITA ROSA",
        nacimiento: "1941-06-24",
        defuncion: "2015-11-09",
        sector: "Sector Azul",
        latitud: -31.5666070,
        longitud: -63.5159773
    },
    {
        id: 582,
        extinto: "QRISOTOMO LEIRIA",
        nacimiento: "2014-08-10",
        defuncion: "2014-08-11",
        sector: "Sector Azul",
        latitud: -31.5665596,
        longitud: -63.5159763
    },
    {
        id: 583,
        extinto: "MAREIA ANTONIA FERREYRA DE LEIRIA",
        nacimiento: "1911-06-13",
        defuncion: "1966-07-20",
        sector: "Sector Azul",
        latitud: -31.5665596,
        longitud: -63.5159763
    },
    {
        id: 584,
        extinto: "TOMASA FUENTE DE LEIRIA",
        nacimiento: "2014-08-11",
        defuncion: "2014-08-11",
        sector: "Sector Azul",
        latitud: -31.5665596,
        longitud: -63.5159763
    },
    {
        id: 585,
        extinto: "YRINEO LEIRIA",
        nacimiento: "1908-02-03",
        defuncion: "1982-10-10",
        sector: "Sector Azul",
        latitud: -31.5665596,
        longitud: -63.5159763
    },
    {
        id: 586,
        extinto: "IRIS LUCIA TARQUINO",
        nacimiento: "1935-04-18",
        defuncion: "2022-03-22",
        sector: "Sector Azul",
        latitud: -31.5666040,
        longitud: -63.5159905
    },
    {
        id: 587,
        extinto: "PABLO  SEBASTIAN  BATTAINO",
        nacimiento: "1978-04-10",
        defuncion: "2020-03-02",
        sector: "Sector Azul",
        latitud: -31.5666040,
        longitud: -63.5159905
    },
    {
        id: 588,
        extinto: "PRADO ANTONIO",
        nacimiento: "1929-05-24",
        defuncion: "2003-11-21",
        sector: "Sector Azul",
        latitud: -31.5665565,
        longitud: -63.5159895
    },
    {
        id: 589,
        extinto: "FERREYRA JUAN LISANDRO",
        nacimiento: "1933-03-24",
        defuncion: "2005-01-01",
        sector: "Sector Azul",
        latitud: -31.5665565,
        longitud: -63.5159895
    },
    {
        id: 590,
        extinto: "RITO SOLIS",
        nacimiento: "2016-12-21",
        defuncion: "2016-12-21",
        sector: "Sector Azul",
        latitud: -31.5664890,
        longitud: -63.5159822
    },
    {
        id: 591,
        extinto: "EMILIO NAJLE",
        nacimiento: "2016-12-21",
        defuncion: "2016-12-21",
        sector: "Sector Azul",
        latitud: -31.5664890,
        longitud: -63.5159822
    },
    {
        id: 592,
        extinto: "MARIA MAGDALENA PEREYRA",
        nacimiento: "2016-12-21",
        defuncion: "2016-12-21",
        sector: "Sector Azul",
        latitud: -31.5664890,
        longitud: -63.5159822
    },
    {
        id: 593,
        extinto: "SOLIS AZUCENA DEL CARMEN",
        nacimiento: "1925-03-20",
        defuncion: "2016-12-15",
        sector: "Sector Azul",
        latitud: -31.5664890,
        longitud: -63.5159822
    },
    {
        id: 594,
        extinto: "SANCHEZ AZUCENA",
        nacimiento: "1932-06-22",
        defuncion: "2016-12-01",
        sector: "Sector Azul",
        latitud: -31.5665334,
        longitud: -63.5159964
    },
    {
        id: 595,
        extinto: "DIAZ MARIA LUISA",
        nacimiento: "1937-06-20",
        defuncion: "2002-09-19",
        sector: "Sector Azul",
        latitud: -31.5665978,
        longitud: -63.5160169
    },
    {
        id: 596,
        extinto: "RANULFO CELSO GOMEZ",
        nacimiento: "1939-03-01",
        defuncion: "2019-04-30",
        sector: "Sector Azul",
        latitud: -31.5664859,
        longitud: -63.5159954
    },
    {
        id: 597,
        extinto: "JOSE ANTONIO DALTO",
        nacimiento: "2012-05-23",
        defuncion: "2012-05-23",
        sector: "Sector Azul",
        latitud: -31.5665303,
        longitud: -63.5160096
    },
    {
        id: 598,
        extinto: "PALLOTTO ELMA NOEMI",
        nacimiento: "1942-02-28",
        defuncion: "2012-12-23",
        sector: "Sector Azul",
        latitud: -31.5665303,
        longitud: -63.5160096
    },
    {
        id: 599,
        extinto: "AUDISIO NESTOR",
        nacimiento: "1931-10-09",
        defuncion: "2014-08-27",
        sector: "Sector Azul",
        latitud: -31.5665503,
        longitud: -63.5160160
    },
    {
        id: 600,
        extinto: "LUIS MIGUEL AUDISIO",
        nacimiento: "1901-09-17",
        defuncion: "1962-12-06",
        sector: "Sector Azul",
        latitud: -31.5665503,
        longitud: -63.5160160
    },
    {
        id: 601,
        extinto: "JUANA BASILE",
        nacimiento: "1907-04-15",
        defuncion: "1972-06-03",
        sector: "Sector Azul",
        latitud: -31.5665503,
        longitud: -63.5160160
    },
    {
        id: 602,
        extinto: "GARINO TERESITA DEL VALLE",
        nacimiento: "1960-09-27",
        defuncion: "2013-08-04",
        sector: "Sector Azul",
        latitud: -31.5665747,
        longitud: -63.5160237
    },
    {
        id: 603,
        extinto: "IRMA ELIVE ABBA DE GARINO",
        nacimiento: "1932-05-18",
        defuncion: "2008-08-21",
        sector: "Sector Azul",
        latitud: -31.5665947,
        longitud: -63.5160301
    },
    {
        id: 604,
        extinto: "GARINO NELSOR",
        nacimiento: "1929-12-15",
        defuncion: "2017-04-15",
        sector: "Sector Azul",
        latitud: -31.5665947,
        longitud: -63.5160301
    },
    {
        id: 605,
        extinto: "LUCARELLI MARIA LUISA",
        nacimiento: "1935-10-10",
        defuncion: "1981-06-15",
        sector: "Sector Azul",
        latitud: -31.5665716,
        longitud: -63.5160369
    },
    {
        id: 606,
        extinto: "CASTELLANO ALBERTO",
        nacimiento: "1940-10-10",
        defuncion: "1964-06-02",
        sector: "Sector Azul",
        latitud: -31.5665716,
        longitud: -63.5160369
    },
    {
        id: 607,
        extinto: "PERALTA ADELINA ROSA",
        nacimiento: "1933-02-26",
        defuncion: "2007-07-08",
        sector: "Sector Azul",
        latitud: -31.5665916,
        longitud: -63.5160433
    },
    {
        id: 608,
        extinto: "JUAN ANTONIO COLAZO",
        nacimiento: "1953-09-07",
        defuncion: "2022-08-28",
        sector: "Sector Azul",
        latitud: -31.5665916,
        longitud: -63.5160433
    },
    {
        id: 609,
        extinto: "MACHADO EMETERIO SAMUEL",
        nacimiento: "1930-03-03",
        defuncion: "2004-07-31",
        sector: "Sector Azul",
        latitud: -31.5665885,
        longitud: -63.5160565
    },
    {
        id: 610,
        extinto: "GLADYS MARGARITA MAPELLI",
        nacimiento: "1949-07-17",
        defuncion: "2015-12-06",
        sector: "Sector Azul",
        latitud: -31.5665654,
        longitud: -63.5160634
    },
    {
        id: 611,
        extinto: "VICTOR HUGO MAPELLI",
        nacimiento: "1949-07-17",
        defuncion: "2022-06-01",
        sector: "Sector Azul",
        latitud: -31.5665654,
        longitud: -63.5160634
    },
    {
        id: 612,
        extinto: "MARGONARI MIRIAN ANTONIA",
        nacimiento: "1931-01-17",
        defuncion: "2003-08-25",
        sector: "Sector Azul",
        latitud: -31.5665854,
        longitud: -63.5160697
    },
    {
        id: 613,
        extinto: "CASTELLANO ANGEL ALBERTO",
        nacimiento: "1929-09-25",
        defuncion: "2004-06-02",
        sector: "Sector Azul",
        latitud: -31.5665854,
        longitud: -63.5160697
    },
    {
        id: 614,
        extinto: "RENE OSCAR FERRERO",
        nacimiento: "1959-07-31",
        defuncion: "2014-08-30",
        sector: "Sector Azul",
        latitud: -31.5665854,
        longitud: -63.5160697
    },
    {
        id: 615,
        extinto: "CRAVERO DELFO ANTONIO",
        nacimiento: "1928-10-20",
        defuncion: "1999-10-10",
        sector: "Sector Azul",
        latitud: -31.5664936,
        longitud: -63.5160546
    },
    {
        id: 616,
        extinto: "GALLO MARIO DEL VALLE",
        nacimiento: "1959-05-07",
        defuncion: "2016-06-10",
        sector: "Sector Azul",
        latitud: -31.5665380,
        longitud: -63.5160688
    },
    {
        id: 617,
        extinto: "OSCAR ANDRES ARNEUDO",
        nacimiento: "1967-11-29",
        defuncion: "2018-03-31",
        sector: "Sector Azul",
        latitud: -31.5665823,
        longitud: -63.5160830
    },
    {
        id: 618,
        extinto: "LEDESMA MARIA SUSANA",
        nacimiento: "1927-02-04",
        defuncion: "1971-08-03",
        sector: "Sector Azul",
        latitud: -31.5665792,
        longitud: -63.5160962
    },
    {
        id: 619,
        extinto: "ALEJOSHUGO ALBERTO",
        nacimiento: "1951-11-27",
        defuncion: "2006-09-08",
        sector: "Sector Azul",
        latitud: -31.5665792,
        longitud: -63.5160962
    },
    {
        id: 620,
        extinto: "TISERA MIGUEL ANGEL",
        nacimiento: "1985-12-15",
        defuncion: "2007-09-08",
        sector: "Sector Azul",
        latitud: -31.5665318,
        longitud: -63.5160952
    },
    {
        id: 621,
        extinto: "VILLARRUEL ALEJANDRA",
        nacimiento: "1949-05-03",
        defuncion: "2015-07-23",
        sector: "Sector Azul",
        latitud: -31.5665318,
        longitud: -63.5160952
    },
    {
        id: 622,
        extinto: "GABRIELCO ALDO ERNESTO",
        nacimiento: "1949-08-02",
        defuncion: "2015-01-28",
        sector: "Sector Azul",
        latitud: -31.5665761,
        longitud: -63.5161094
    },
    {
        id: 623,
        extinto: "RECH-RIOS ISABELLA",
        nacimiento: "2017-06-15",
        defuncion: "2017-06-18",
        sector: "Sector Azul",
        latitud: -31.5664843,
        longitud: -63.5160943
    },
    {
        id: 624,
        extinto: "NEGRO PEDRO",
        nacimiento: "1956-11-21",
        defuncion: "1982-01-01",
        sector: "Sector Azul",
        latitud: -31.5665087,
        longitud: -63.5161020
    },
    {
        id: 625,
        extinto: "NEGRO GUILLERMO",
        nacimiento: "1906-07-08",
        defuncion: "1977-01-09",
        sector: "Sector Azul",
        latitud: -31.5665087,
        longitud: -63.5161020
    },
    {
        id: 626,
        extinto: "MININ JUSTINA",
        nacimiento: "1905-07-17",
        defuncion: "1992-09-29",
        sector: "Sector Azul",
        latitud: -31.5665087,
        longitud: -63.5161020
    },
    {
        id: 627,
        extinto: "MORANDO DE NEGRO",
        nacimiento: "2003-08-20",
        defuncion: "2003-08-20",
        sector: "Sector Azul",
        latitud: -31.5665087,
        longitud: -63.5161020
    },
    {
        id: 628,
        extinto: "NEGRO ALDO GUILLERMO",
        nacimiento: "1936-04-20",
        defuncion: "2015-05-03",
        sector: "Sector Azul",
        latitud: -31.5665087,
        longitud: -63.5161020
    },
    {
        id: 629,
        extinto: "ROGGERO SUSANA",
        nacimiento: "1934-04-08",
        defuncion: "2013-07-04",
        sector: "Sector Azul",
        latitud: -31.5665731,
        longitud: -63.5161226
    },
    {
        id: 630,
        extinto: "SASIA CARLOS ANTONIO",
        nacimiento: "1958-05-08",
        defuncion: "2015-08-29",
        sector: "Sector Azul",
        latitud: -31.5664612,
        longitud: -63.5161011
    },
    {
        id: 631,
        extinto: "RAMON LEONARDO ARRIETA",
        nacimiento: "1946-11-05",
        defuncion: "2015-07-23",
        sector: "Sector Azul",
        latitud: -31.5665256,
        longitud: -63.5161216
    },
    {
        id: 632,
        extinto: "GONZALEZ JUANA COSMA",
        nacimiento: "1927-09-27",
        defuncion: "2002-09-15",
        sector: "Sector Azul",
        latitud: -31.5665700,
        longitud: -63.5161358
    },
    {
        id: 633,
        extinto: "RAMON HUGO FERREYRA",
        nacimiento: "1945-08-25",
        defuncion: "2022-03-27",
        sector: "Sector Azul",
        latitud: -31.5665700,
        longitud: -63.5161358
    },
    {
        id: 634,
        extinto: "ANA ESTER GOMEZ",
        nacimiento: "1963-12-01",
        defuncion: "2022-05-28",
        sector: "Sector Azul",
        latitud: -31.5664781,
        longitud: -63.5161207
    },
    {
        id: 635,
        extinto: "ALBERTO RAMON CONTRINI",
        nacimiento: "1941-07-08",
        defuncion: "1993-11-10",
        sector: "Sector Azul",
        latitud: -31.5665469,
        longitud: -63.5161426
    },
    {
        id: 636,
        extinto: "MARIA ESTHER PERALTA",
        nacimiento: "1946-01-30",
        defuncion: "1995-02-24",
        sector: "Sector Azul",
        latitud: -31.5665469,
        longitud: -63.5161426
    },
    {
        id: 637,
        extinto: "GERARDO DANIEL CONTRINI",
        nacimiento: "1968-07-15",
        defuncion: "2019-04-29",
        sector: "Sector Azul",
        latitud: -31.5665469,
        longitud: -63.5161426
    },
    {
        id: 638,
        extinto: "GOMEZ ANA ROSA",
        nacimiento: "1934-10-11",
        defuncion: "2008-07-21",
        sector: "Sector Azul",
        latitud: -31.5664994,
        longitud: -63.5161417
    },
    {
        id: 639,
        extinto: "GOMEZ CARLOS HORACIO",
        nacimiento: "1916-08-25",
        defuncion: "2003-11-09",
        sector: "Sector Azul",
        latitud: -31.5665194,
        longitud: -63.5161480
    },
    {
        id: 640,
        extinto: "GOMEZ JOSE MARIA",
        nacimiento: "1921-11-23",
        defuncion: "2013-12-09",
        sector: "Sector Azul",
        latitud: -31.5665194,
        longitud: -63.5161480
    },
    {
        id: 641,
        extinto: "ROSA  PAULA  CARANDINO",
        nacimiento: "1924-01-15",
        defuncion: "2023-11-20",
        sector: "Sector Azul",
        latitud: -31.5665194,
        longitud: -63.5161480
    },
    {
        id: 642,
        extinto: "DELIA DORA CORDOBA",
        nacimiento: "1941-11-10",
        defuncion: "2021-01-16",
        sector: "Sector Azul",
        latitud: -31.5664720,
        longitud: -63.5161471
    },
    {
        id: 643,
        extinto: "BUSANO - MONTENEGRO GABRIEL ALEJANDRO",
        nacimiento: "2007-03-01",
        defuncion: "2007-03-01",
        sector: "Sector Azul",
        latitud: -31.5665407,
        longitud: -63.5161690
    },
    {
        id: 644,
        extinto: "FRASSA MARIA ANGELA",
        nacimiento: "1922-08-01",
        defuncion: "2003-01-12",
        sector: "Sector Azul",
        latitud: -31.5665607,
        longitud: -63.5161754
    },
    {
        id: 645,
        extinto: "MARSILI JUAN PABLO",
        nacimiento: "1900-04-03",
        defuncion: "1945-09-23",
        sector: "Sector Azul",
        latitud: -31.5665607,
        longitud: -63.5161754
    },
    {
        id: 646,
        extinto: "MARSILI JUAN CARLOS",
        nacimiento: "1952-02-26",
        defuncion: "2006-08-13",
        sector: "Sector Azul",
        latitud: -31.5665607,
        longitud: -63.5161754
    },
    {
        id: 647,
        extinto: "ENCARNACION ABAD",
        nacimiento: "1906-07-03",
        defuncion: "1981-01-13",
        sector: "Sector Azul",
        latitud: -31.5664489,
        longitud: -63.5161539
    },
    {
        id: 648,
        extinto: "PEDRO TUSELL",
        nacimiento: "1900-07-25",
        defuncion: "1979-08-10",
        sector: "Sector Azul",
        latitud: -31.5664489,
        longitud: -63.5161539
    },
    {
        id: 649,
        extinto: "RAMON GUILLERMO HERRERA",
        nacimiento: "1940-07-03",
        defuncion: "2015-06-06",
        sector: "Sector Azul",
        latitud: -31.5664689,
        longitud: -63.5161603
    },
    {
        id: 650,
        extinto: "VELI LINO SANDRI",
        nacimiento: "1930-11-08",
        defuncion: "2018-02-05",
        sector: "Sector Azul",
        latitud: -31.5664932,
        longitud: -63.5161681
    },
    {
        id: 651,
        extinto: "OLGA OFELIA ABUD",
        nacimiento: "1938-11-22",
        defuncion: "2022-12-17",
        sector: "Sector Azul",
        latitud: -31.5664932,
        longitud: -63.5161681
    },
    {
        id: 652,
        extinto: "GALLARDO JOSEFA",
        nacimiento: "1914-03-20",
        defuncion: "2005-01-04",
        sector: "Sector Azul",
        latitud: -31.5665132,
        longitud: -63.5161745
    },
    {
        id: 653,
        extinto: "ILDA MARIA BERTOTTI",
        nacimiento: "1934-03-10",
        defuncion: "2010-06-11",
        sector: "Sector Azul",
        latitud: -31.5665376,
        longitud: -63.5161822
    },
    {
        id: 654,
        extinto: "SASIA ANGEL VICTORIO",
        nacimiento: "1932-10-01",
        defuncion: "2013-06-24",
        sector: "Sector Azul",
        latitud: -31.5665376,
        longitud: -63.5161822
    },
    {
        id: 655,
        extinto: "SAAVEDRA LUIS ELSO",
        nacimiento: "2003-04-17",
        defuncion: "2003-04-17",
        sector: "Sector Azul",
        latitud: -31.5664458,
        longitud: -63.5161671
    },
    {
        id: 656,
        extinto: "SAAVEDRA AGUSTIN NICOLAS",
        nacimiento: "2004-09-07",
        defuncion: "2004-09-12",
        sector: "Sector Azul",
        latitud: -31.5664658,
        longitud: -63.5161735
    },
    {
        id: 657,
        extinto: "GIGENA DANTE JESUS",
        nacimiento: "1987-07-03",
        defuncion: "2007-07-21",
        sector: "Sector Azul",
        latitud: -31.5665345,
        longitud: -63.5161954
    },
    {
        id: 658,
        extinto: "ONTIVERO RAMON REVELINDO",
        nacimiento: "1962-12-05",
        defuncion: "2004-11-07",
        sector: "Sector Azul",
        latitud: -31.5665545,
        longitud: -63.5162018
    },
    {
        id: 659,
        extinto: "PEREZ HECTOR ROQUE",
        nacimiento: "1940-02-05",
        defuncion: "2017-01-12",
        sector: "Sector Rojo",
        latitud: -31.5665856,
        longitud: -63.5155423
    },
    {
        id: 660,
        extinto: "ROQUE CLAUDIO PEREZ",
        nacimiento: "1967-12-29",
        defuncion: "2019-11-23",
        sector: "Sector Rojo",
        latitud: -31.5665856,
        longitud: -63.5155423
    },
    {
        id: 661,
        extinto: "ELDA LUQUE",
        nacimiento: "1944-05-10",
        defuncion: "2022-04-30",
        sector: "Sector Rojo",
        latitud: -31.5665856,
        longitud: -63.5155423
    },
    {
        id: 662,
        extinto: "PISTAN ELVIRA",
        nacimiento: "1935-01-28",
        defuncion: "2009-04-30",
        sector: "Sector Rojo",
        latitud: -31.5666752,
        longitud: -63.5155667
    },
    {
        id: 663,
        extinto: "RODRIGUEZ DOMINGO RAMON",
        nacimiento: "1957-08-12",
        defuncion: "2009-10-16",
        sector: "Sector Rojo",
        latitud: -31.5666752,
        longitud: -63.5155667
    },
    {
        id: 664,
        extinto: "RODRIGUEZ MARIA DEL VALLE",
        nacimiento: "1960-02-23",
        defuncion: "2009-10-10",
        sector: "Sector Rojo",
        latitud: -31.5666954,
        longitud: -63.5155723
    },
    {
        id: 665,
        extinto: "NIEVA PAOLA VERONICA",
        nacimiento: "1981-07-10",
        defuncion: "2012-08-29",
        sector: "Sector Rojo",
        latitud: -31.5666954,
        longitud: -63.5155723
    },
    {
        id: 666,
        extinto: "ALDANA DE LOS MILAGROS GONZALEZ",
        nacimiento: "1999-07-13",
        defuncion: "2023-11-01",
        sector: "Sector Rojo",
        latitud: -31.5666954,
        longitud: -63.5155723
    },
    {
        id: 667,
        extinto: "CHINCHO MARTA SILVIA",
        nacimiento: "1923-09-06",
        defuncion: "2012-01-13",
        sector: "Sector Rojo",
        latitud: -31.5667156,
        longitud: -63.5155778
    },
    {
        id: 668,
        extinto: "CORIA HORACIO",
        nacimiento: "1946-10-30",
        defuncion: "2013-06-14",
        sector: "Sector Rojo",
        latitud: -31.5667156,
        longitud: -63.5155778
    },
    {
        id: 669,
        extinto: "ANGELA DEL ROSARIO HEREDIA",
        nacimiento: "1947-11-11",
        defuncion: "2021-01-03",
        sector: "Sector Rojo",
        latitud: -31.5667156,
        longitud: -63.5155778
    },
    {
        id: 670,
        extinto: "CARLOS  ERNESTO  CAPELLO",
        nacimiento: "1951-06-12",
        defuncion: "2023-10-27",
        sector: "Sector Rojo",
        latitud: -31.5666725,
        longitud: -63.5155801
    },
    {
        id: 671,
        extinto: "SORIA JULIO HECTOR",
        nacimiento: "1941-12-09",
        defuncion: "2012-01-22",
        sector: "Sector Rojo",
        latitud: -31.5667129,
        longitud: -63.5155911
    },
    {
        id: 672,
        extinto: "SARMIENTO MARIA ESPERANZA",
        nacimiento: "1942-11-17",
        defuncion: "2010-02-16",
        sector: "Sector Rojo",
        latitud: -31.5666698,
        longitud: -63.5155934
    },
    {
        id: 673,
        extinto: "HERNAN DAVID BERTOLINI",
        nacimiento: "1986-12-28",
        defuncion: "2019-02-08",
        sector: "Sector Rojo",
        latitud: -31.5666698,
        longitud: -63.5155934
    },
    {
        id: 674,
        extinto: "SORIA OSVALDO ALFREDO",
        nacimiento: "1964-07-19",
        defuncion: "2016-07-07",
        sector: "Sector Rojo",
        latitud: -31.5666224,
        longitud: -63.5155945
    },
    {
        id: 675,
        extinto: "EVA ROSA VALLEJO",
        nacimiento: "1924-09-16",
        defuncion: "2021-05-31",
        sector: "Sector Rojo",
        latitud: -31.5666426,
        longitud: -63.5156000
    },
    {
        id: 676,
        extinto: "ALICIA CRISTINA VILLAFAÑE",
        nacimiento: "1967-10-13",
        defuncion: "1989-01-18",
        sector: "Sector Rojo",
        latitud: -31.5666426,
        longitud: -63.5156000
    },
    {
        id: 677,
        extinto: "ROSARIO DAMIAN VILLAFAÑE",
        nacimiento: "1921-02-12",
        defuncion: "1994-07-08",
        sector: "Sector Rojo",
        latitud: -31.5666426,
        longitud: -63.5156000
    },
    {
        id: 678,
        extinto: "LUDUEÑA JOSE LUIS",
        nacimiento: "1960-09-29",
        defuncion: "2019-01-12",
        sector: "Sector Rojo",
        latitud: -31.5666671,
        longitud: -63.5156067
    },
    {
        id: 679,
        extinto: "DELFIN AMADO BONGIOVANNI",
        nacimiento: "2018-01-19",
        defuncion: "2018-01-19",
        sector: "Sector Rojo",
        latitud: -31.5666873,
        longitud: -63.5156123
    },
    {
        id: 680,
        extinto: "ELMA YLDA BERNARDI",
        nacimiento: "1931-01-03",
        defuncion: "2021-04-05",
        sector: "Sector Rojo",
        latitud: -31.5666873,
        longitud: -63.5156123
    },
    {
        id: 681,
        extinto: "MARIA ISABEL MORAL",
        nacimiento: "1953-05-01",
        defuncion: "2019-01-06",
        sector: "Sector Rojo",
        latitud: -31.5667075,
        longitud: -63.5156178
    },
    {
        id: 682,
        extinto: "FEDERICO  NICOLAS  NAVARRO",
        nacimiento: "1993-05-07",
        defuncion: "2023-04-28",
        sector: "Sector Rojo",
        latitud: -31.5665749,
        longitud: -63.5155956
    },
    {
        id: 683,
        extinto: "PEDRO  ALBERTO  NAVARRO",
        nacimiento: "1950-08-23",
        defuncion: "2023-06-08",
        sector: "Sector Rojo",
        latitud: -31.5665749,
        longitud: -63.5155956
    },
    {
        id: 684,
        extinto: "GLADY NOEMI MARIN",
        nacimiento: "1955-07-14",
        defuncion: "2023-11-03",
        sector: "Sector Rojo",
        latitud: -31.5665749,
        longitud: -63.5155956
    },
    {
        id: 685,
        extinto: "HECTOR MIGUEL SARMIENTO",
        nacimiento: "1937-03-13",
        defuncion: "2018-03-07",
        sector: "Sector Rojo",
        latitud: -31.5665951,
        longitud: -63.5156011
    },
    {
        id: 686,
        extinto: "PEDRO CORZO",
        nacimiento: "1930-03-02",
        defuncion: "2018-04-18",
        sector: "Sector Rojo",
        latitud: -31.5666399,
        longitud: -63.5156134
    },
    {
        id: 687,
        extinto: "MARIA ROSA LUQUE",
        nacimiento: "1935-02-16",
        defuncion: "2018-11-11",
        sector: "Sector Rojo",
        latitud: -31.5666399,
        longitud: -63.5156134
    },
    {
        id: 688,
        extinto: "AVERSA ROBERTO",
        nacimiento: "1923-08-18",
        defuncion: "1967-01-25",
        sector: "Sector Rojo",
        latitud: -31.5666847,
        longitud: -63.5156256
    },
    {
        id: 689,
        extinto: "ABUD DIBE",
        nacimiento: "1924-09-12",
        defuncion: "2016-06-09",
        sector: "Sector Rojo",
        latitud: -31.5666847,
        longitud: -63.5156256
    },
    {
        id: 690,
        extinto: "CACERES ALINDA URELIA",
        nacimiento: "1934-09-25",
        defuncion: "2017-06-29",
        sector: "Sector Rojo",
        latitud: -31.5666170,
        longitud: -63.5156212
    },
    {
        id: 691,
        extinto: "FARIAS RAMON",
        nacimiento: "1944-08-08",
        defuncion: "2013-05-31",
        sector: "Sector Rojo",
        latitud: -31.5666618,
        longitud: -63.5156334
    },
    {
        id: 692,
        extinto: "JUAN FEDERICO WERNER ALMADA",
        nacimiento: "2014-07-02",
        defuncion: "2015-01-12",
        sector: "Sector Rojo",
        latitud: -31.5666820,
        longitud: -63.5156389
    },
    {
        id: 693,
        extinto: "ALVAREZ MARIA ALCIRA",
        nacimiento: "1937-11-05",
        defuncion: "2011-04-17",
        sector: "Sector Rojo",
        latitud: -31.5667022,
        longitud: -63.5156445
    },
    {
        id: 694,
        extinto: "MORAL AMERICO ANTONIO",
        nacimiento: "1955-05-04",
        defuncion: "2016-05-12",
        sector: "Sector Rojo",
        latitud: -31.5667022,
        longitud: -63.5156445
    },
    {
        id: 695,
        extinto: "ROMILDA DELFINA CAMUSSO",
        nacimiento: "1935-05-18",
        defuncion: "2002-07-02",
        sector: "Sector Rojo",
        latitud: -31.5665898,
        longitud: -63.5156278
    },
    {
        id: 696,
        extinto: "PERALTA TERESA NOEMI",
        nacimiento: "1937-05-12",
        defuncion: "2015-12-12",
        sector: "Sector Rojo",
        latitud: -31.5666143,
        longitud: -63.5156345
    },
    {
        id: 697,
        extinto: "URAN JUAN PABLO",
        nacimiento: "2013-08-10",
        defuncion: "2013-08-13",
        sector: "Sector Rojo",
        latitud: -31.5666345,
        longitud: -63.5156400
    },
    {
        id: 698,
        extinto: "IRCANO RAMON SERVETTO",
        nacimiento: "1931-05-06",
        defuncion: "2020-03-31",
        sector: "Sector Rojo",
        latitud: -31.5666591,
        longitud: -63.5156467
    },
    {
        id: 699,
        extinto: "MARTA  INES  VIGNOLI",
        nacimiento: "1935-08-01",
        defuncion: "2024-05-14",
        sector: "Sector Rojo",
        latitud: -31.5666591,
        longitud: -63.5156467
    },
    {
        id: 700,
        extinto: "PONCE DENIZ RAMON",
        nacimiento: "1939-01-10",
        defuncion: "2010-05-22",
        sector: "Sector Rojo",
        latitud: -31.5666793,
        longitud: -63.5156523
    },
    {
        id: 701,
        extinto: "PONCE SARA TRINIDAD",
        nacimiento: "1936-06-12",
        defuncion: "2010-10-22",
        sector: "Sector Rojo",
        latitud: -31.5666793,
        longitud: -63.5156523
    },
    {
        id: 702,
        extinto: "SORIA LUIS ENRIQUE",
        nacimiento: "1939-06-21",
        defuncion: "2010-01-06",
        sector: "Sector Rojo",
        latitud: -31.5666995,
        longitud: -63.5156578
    },
    {
        id: 703,
        extinto: "FERNANDEZ LIDIA ELSA",
        nacimiento: "1930-03-25",
        defuncion: "2016-06-14",
        sector: "Sector Rojo",
        latitud: -31.5665871,
        longitud: -63.5156411
    },
    {
        id: 704,
        extinto: "JUAN LORENZO",
        nacimiento: "2018-07-24",
        defuncion: "2018-07-24",
        sector: "Sector Rojo",
        latitud: -31.5665871,
        longitud: -63.5156411
    },
    {
        id: 705,
        extinto: "PUSIOL VICTORIO M",
        nacimiento: "1918-08-24",
        defuncion: "2017-09-09",
        sector: "Sector Rojo",
        latitud: -31.5666117,
        longitud: -63.5156478
    },
    {
        id: 706,
        extinto: "CATALINA BATTAGLINO",
        nacimiento: "1929-11-10",
        defuncion: "2018-10-20",
        sector: "Sector Rojo",
        latitud: -31.5666117,
        longitud: -63.5156478
    },
    {
        id: 707,
        extinto: "CRISTIAN JAVIER PEREZ",
        nacimiento: "2013-10-28",
        defuncion: "2013-10-28",
        sector: "Sector Rojo",
        latitud: -31.5666319,
        longitud: -63.5156534
    },
    {
        id: 708,
        extinto: "JUAN DOMINGO RAMIREZ",
        nacimiento: "2005-05-23",
        defuncion: "2005-05-23",
        sector: "Sector Rojo",
        latitud: -31.5666319,
        longitud: -63.5156534
    },
    {
        id: 709,
        extinto: "ALBARRACIN MARCELO GASPARIN",
        nacimiento: "1934-02-26",
        defuncion: "2012-03-26",
        sector: "Sector Rojo",
        latitud: -31.5666565,
        longitud: -63.5156601
    },
    {
        id: 710,
        extinto: "CACERES MARIA AIDA",
        nacimiento: "1936-10-19",
        defuncion: "2009-07-31",
        sector: "Sector Rojo",
        latitud: -31.5666767,
        longitud: -63.5156656
    },
    {
        id: 711,
        extinto: "RAMOS JUAN CARLOS",
        nacimiento: "1934-04-29",
        defuncion: "2015-10-21",
        sector: "Sector Rojo",
        latitud: -31.5666767,
        longitud: -63.5156656
    },
    {
        id: 712,
        extinto: "MOYANO HECTOR CALIXTO",
        nacimiento: "1949-08-18",
        defuncion: "2009-02-10",
        sector: "Sector Rojo",
        latitud: -31.5666969,
        longitud: -63.5156711
    },
    {
        id: 713,
        extinto: "ANTONIA EDITH LUCERO",
        nacimiento: "1943-02-02",
        defuncion: "1979-03-18",
        sector: "Sector Rojo",
        latitud: -31.5666969,
        longitud: -63.5156711
    },
    {
        id: 714,
        extinto: "MORAL RAUL RICARDO",
        nacimiento: "1957-07-17",
        defuncion: "2016-01-01",
        sector: "Sector Rojo",
        latitud: -31.5666969,
        longitud: -63.5156711
    },
    {
        id: 715,
        extinto: "CIVARELLO ADELA YOLANDA",
        nacimiento: "1923-06-23",
        defuncion: "2017-05-10",
        sector: "Sector Rojo",
        latitud: -31.5665642,
        longitud: -63.5156489
    },
    {
        id: 716,
        extinto: "JOSE PALACIUK",
        nacimiento: "1916-10-06",
        defuncion: "1994-01-25",
        sector: "Sector Rojo",
        latitud: -31.5665642,
        longitud: -63.5156489
    },
    {
        id: 717,
        extinto: "SANCHEZ BRISA ANAHI",
        nacimiento: "2005-03-15",
        defuncion: "2009-11-06",
        sector: "Sector Rojo",
        latitud: -31.5665844,
        longitud: -63.5156545
    },
    {
        id: 718,
        extinto: "HEREDIA  MARCIAL  EXEQUIEL",
        nacimiento: "1947-04-20",
        defuncion: "2013-10-22",
        sector: "Sector Rojo",
        latitud: -31.5665844,
        longitud: -63.5156545
    },
    {
        id: 719,
        extinto: "MORAL RAMON AUGUSTO",
        nacimiento: "1929-08-31",
        defuncion: "2002-12-26",
        sector: "Sector Rojo",
        latitud: -31.5666538,
        longitud: -63.5156734
    },
    {
        id: 720,
        extinto: "MARIA SUSANA MORAL",
        nacimiento: "1953-05-16",
        defuncion: "2022-06-06",
        sector: "Sector Rojo",
        latitud: -31.5666740,
        longitud: -63.5156789
    },
    {
        id: 721,
        extinto: "LUCERO MARIA ESPERANZA",
        nacimiento: "1923-01-05",
        defuncion: "1993-03-06",
        sector: "Sector Rojo",
        latitud: -31.5666942,
        longitud: -63.5156845
    },
    {
        id: 722,
        extinto: "LUCERO JUAN PABLO",
        nacimiento: "1939-05-02",
        defuncion: "1966-01-24",
        sector: "Sector Rojo",
        latitud: -31.5666942,
        longitud: -63.5156845
    },
    {
        id: 723,
        extinto: "MORAL RODRIGO JAVIER",
        nacimiento: "1978-09-14",
        defuncion: "1978-10-02",
        sector: "Sector Rojo",
        latitud: -31.5666942,
        longitud: -63.5156845
    },
    {
        id: 724,
        extinto: "MORAL ANTONIO",
        nacimiento: "1905-07-06",
        defuncion: "1946-08-09",
        sector: "Sector Rojo",
        latitud: -31.5666942,
        longitud: -63.5156845
    },
    {
        id: 725,
        extinto: "MACHADO MARIA LUISA",
        nacimiento: "1905-11-09",
        defuncion: "1972-09-11",
        sector: "Sector Rojo",
        latitud: -31.5666942,
        longitud: -63.5156845
    },
    {
        id: 726,
        extinto: "MORAL AMERICO",
        nacimiento: "1931-11-15",
        defuncion: "2002-12-19",
        sector: "Sector Rojo",
        latitud: -31.5666942,
        longitud: -63.5156845
    },
    {
        id: 727,
        extinto: "MIGUEL ANGEL ABBA",
        nacimiento: "1949-06-27",
        defuncion: "2015-09-16",
        sector: "Sector Rojo",
        latitud: -31.5665615,
        longitud: -63.5156623
    },
    {
        id: 728,
        extinto: "CAROLINA TESTA DE BERTOLEZ",
        nacimiento: "1922-09-23",
        defuncion: "1994-12-18",
        sector: "Sector Rojo",
        latitud: -31.5665817,
        longitud: -63.5156678
    },
    {
        id: 729,
        extinto: "DOMINGO BERTOLEZ",
        nacimiento: "1946-04-28",
        defuncion: "1992-12-28",
        sector: "Sector Rojo",
        latitud: -31.5665817,
        longitud: -63.5156678
    },
    {
        id: 730,
        extinto: "EDUARDO BERTOLEZ",
        nacimiento: "1916-10-13",
        defuncion: "1984-05-06",
        sector: "Sector Rojo",
        latitud: -31.5665817,
        longitud: -63.5156678
    },
    {
        id: 731,
        extinto: "CARABANTE HECTOR ANTONIO",
        nacimiento: "1933-08-05",
        defuncion: "2004-01-06",
        sector: "Sector Rojo",
        latitud: -31.5666063,
        longitud: -63.5156745
    },
    {
        id: 732,
        extinto: "MARIA ERNESTA ROSAS",
        nacimiento: "1935-07-25",
        defuncion: "2021-04-14",
        sector: "Sector Rojo",
        latitud: -31.5666063,
        longitud: -63.5156745
    },
    {
        id: 733,
        extinto: "ROSAS LIDIA NATIVIDAD",
        nacimiento: "2012-02-17",
        defuncion: "2012-02-17",
        sector: "Sector Rojo",
        latitud: -31.5666265,
        longitud: -63.5156800
    },
    {
        id: 734,
        extinto: "NIVIO DOMINGO LEGUIZAMON",
        nacimiento: "1935-12-27",
        defuncion: "2018-01-28",
        sector: "Sector Rojo",
        latitud: -31.5666265,
        longitud: -63.5156800
    },
    {
        id: 735,
        extinto: "MEDRAN FELIZ JOSE RAMON",
        nacimiento: "1922-07-17",
        defuncion: "2013-07-06",
        sector: "Sector Rojo",
        latitud: -31.5666511,
        longitud: -63.5156867
    },
    {
        id: 736,
        extinto: "BIANCIOTTI NATALIA MAGDALENA",
        nacimiento: "1924-12-25",
        defuncion: "2015-10-21",
        sector: "Sector Rojo",
        latitud: -31.5666511,
        longitud: -63.5156867
    },
    {
        id: 737,
        extinto: "MARIA CRISTINA MEDRAN",
        nacimiento: "1950-03-04",
        defuncion: "2024-07-16",
        sector: "Sector Rojo",
        latitud: -31.5666511,
        longitud: -63.5156867
    },
    {
        id: 738,
        extinto: "ELISA MARIELA CAMPODONICO",
        nacimiento: "1973-09-10",
        defuncion: "2018-09-21",
        sector: "Sector Rojo",
        latitud: -31.5666713,
        longitud: -63.5156923
    },
    {
        id: 739,
        extinto: "GUZMAN MARCELA ALEJANDRA",
        nacimiento: "1985-01-21",
        defuncion: "2001-08-20",
        sector: "Sector Rojo",
        latitud: -31.5666915,
        longitud: -63.5156978
    },
    {
        id: 740,
        extinto: "MARINA MARISEL GUZMAN",
        nacimiento: "1981-02-06",
        defuncion: "2007-02-17",
        sector: "Sector Rojo",
        latitud: -31.5666915,
        longitud: -63.5156978
    },
    {
        id: 741,
        extinto: "BERTOLEZ EDUARDO ANGEL",
        nacimiento: "1960-09-15",
        defuncion: "2017-01-26",
        sector: "Sector Rojo",
        latitud: -31.5665791,
        longitud: -63.5156811
    },
    {
        id: 742,
        extinto: "DIAZ CRISTIAN JONATAN",
        nacimiento: "1997-06-06",
        defuncion: "2017-01-21",
        sector: "Sector Rojo",
        latitud: -31.5666037,
        longitud: -63.5156878
    },
    {
        id: 743,
        extinto: "GUZMAN RITA RAQUEL",
        nacimiento: "1973-12-26",
        defuncion: "1995-05-31",
        sector: "Sector Rojo",
        latitud: -31.5666484,
        longitud: -63.5157001
    },
    {
        id: 744,
        extinto: "LUDUEÑA ELVIO ARGENTINO",
        nacimiento: "1940-07-16",
        defuncion: "2015-02-21",
        sector: "Sector Rojo",
        latitud: -31.5666686,
        longitud: -63.5157056
    },
    {
        id: 745,
        extinto: "PERALTA MARIA EDIT",
        nacimiento: "2015-12-09",
        defuncion: "2015-12-09",
        sector: "Sector Rojo",
        latitud: -31.5665562,
        longitud: -63.5156889
    },
    {
        id: 746,
        extinto: "PEREZ PETRONA SARA",
        nacimiento: "1933-12-04",
        defuncion: "2016-03-03",
        sector: "Sector Rojo",
        latitud: -31.5665562,
        longitud: -63.5156889
    },
    {
        id: 747,
        extinto: "JOSE ANGEL RAMALLO",
        nacimiento: "1921-03-21",
        defuncion: "1995-06-15",
        sector: "Sector Rojo",
        latitud: -31.5665764,
        longitud: -63.5156944
    },
    {
        id: 748,
        extinto: "MARTA PLEITAVINO DE RAMALLO",
        nacimiento: "1912-03-21",
        defuncion: "1993-08-17",
        sector: "Sector Rojo",
        latitud: -31.5665764,
        longitud: -63.5156944
    },
    {
        id: 749,
        extinto: "LUDEUÑA CANDIDO ERNESTO",
        nacimiento: "1921-05-01",
        defuncion: "1976-08-06",
        sector: "Sector Rojo",
        latitud: -31.5666212,
        longitud: -63.5157067
    },
    {
        id: 750,
        extinto: "BERTORELLO TERESA",
        nacimiento: "2017-09-14",
        defuncion: "2017-09-14",
        sector: "Sector Rojo",
        latitud: -31.5666212,
        longitud: -63.5157067
    },
    {
        id: 751,
        extinto: "LUDUEÑA CANDIDO",
        nacimiento: "1940-04-25",
        defuncion: "1980-06-21",
        sector: "Sector Rojo",
        latitud: -31.5666458,
        longitud: -63.5157134
    },
    {
        id: 752,
        extinto: "ARGUELLO DE LUDUEÑA ROSARIO",
        nacimiento: "1940-04-25",
        defuncion: "1982-06-24",
        sector: "Sector Rojo",
        latitud: -31.5666458,
        longitud: -63.5157134
    },
    {
        id: 753,
        extinto: "LUDUEÑA RAMON AMERICO",
        nacimiento: "1940-04-25",
        defuncion: "1978-07-21",
        sector: "Sector Rojo",
        latitud: -31.5666458,
        longitud: -63.5157134
    },
    {
        id: 754,
        extinto: "LUDUEÑA JUSTO GERMAN",
        nacimiento: "1940-04-25",
        defuncion: "1978-07-21",
        sector: "Sector Rojo",
        latitud: -31.5666458,
        longitud: -63.5157134
    },
    {
        id: 755,
        extinto: "LUDUEÑA GERMAN",
        nacimiento: "1940-04-25",
        defuncion: "1980-12-15",
        sector: "Sector Rojo",
        latitud: -31.5666458,
        longitud: -63.5157134
    },
    {
        id: 756,
        extinto: "DAVICINO ORLANDO NICANOR",
        nacimiento: "1925-09-03",
        defuncion: "1996-09-24",
        sector: "Sector Rojo",
        latitud: -31.5666862,
        longitud: -63.5157245
    },
    {
        id: 757,
        extinto: "LUCIA SILVIA MARENGO",
        nacimiento: "1931-02-06",
        defuncion: "2021-01-20",
        sector: "Sector Rojo",
        latitud: -31.5666862,
        longitud: -63.5157245
    },
    {
        id: 758,
        extinto: "COMPANY JOSE LUIS",
        nacimiento: "1959-08-06",
        defuncion: "2014-02-22",
        sector: "Sector Rojo",
        latitud: -31.5665713,
        longitud: -63.5153538
    },
    {
        id: 759,
        extinto: "PEDRO BESSONE",
        nacimiento: "1939-07-04",
        defuncion: "2020-10-27",
        sector: "Sector Naranja",
        latitud: -31.5666774,
        longitud: -63.5153823
    },
    {
        id: 760,
        extinto: "MARIA ELVA MARIOTTA",
        nacimiento: "1935-04-02",
        defuncion: "2019-12-21",
        sector: "Sector Rojo",
        latitud: -31.5666705,
        longitud: -63.5154503
    },
    {
        id: 761,
        extinto: "MIGUEL GUALDA",
        nacimiento: "1929-11-14",
        defuncion: "1984-01-29",
        sector: "Sector Rojo",
        latitud: -31.5668289,
        longitud: -63.5155056
    },
    {
        id: 762,
        extinto: "JUANA GALERA",
        nacimiento: "1931-02-25",
        defuncion: "2009-03-04",
        sector: "Sector Rojo",
        latitud: -31.5668289,
        longitud: -63.5155056
    },
    {
        id: 763,
        extinto: "JOSE ANTONIO FUNES",
        nacimiento: "1942-03-18",
        defuncion: "2009-06-22",
        sector: "Sector Rojo",
        latitud: -31.5668625,
        longitud: -63.5155177
    },
    {
        id: 764,
        extinto: "RAQUEL HERRERA",
        nacimiento: "1947-02-09",
        defuncion: "2024-03-17",
        sector: "Sector Rojo",
        latitud: -31.5668625,
        longitud: -63.5155177
    },
    {
        id: 765,
        extinto: "ALVAREZ LORENZO NICOLAS",
        nacimiento: "1999-12-10",
        defuncion: "2012-07-07",
        sector: "Sector Rojo",
        latitud: -31.5667107,
        longitud: -63.5154883
    },
    {
        id: 766,
        extinto: "RAUL ANDRES ALVAREZ",
        nacimiento: "1945-02-04",
        defuncion: "2018-01-17",
        sector: "Sector Rojo",
        latitud: -31.5667220,
        longitud: -63.5154923
    },
    {
        id: 767,
        extinto: "LUDUEÑA DANIEL FLORENCIO",
        nacimiento: "1937-10-27",
        defuncion: "2004-04-17",
        sector: "Sector Rojo",
        latitud: -31.5667892,
        longitud: -63.5155166
    },
    {
        id: 768,
        extinto: "NILDA ROSA LUQUE",
        nacimiento: "1938-11-09",
        defuncion: "2015-05-17",
        sector: "Sector Rojo",
        latitud: -31.5667892,
        longitud: -63.5155166
    },
    {
        id: 769,
        extinto: "LUDUEÑA JORGE ALBERTO",
        nacimiento: "1960-10-16",
        defuncion: "2008-06-14",
        sector: "Sector Rojo",
        latitud: -31.5668004,
        longitud: -63.5155206
    },
    {
        id: 770,
        extinto: "ROSA BEATRIZ CLAVERO",
        nacimiento: "1969-08-17",
        defuncion: "2021-11-24",
        sector: "Sector Rojo",
        latitud: -31.5668116,
        longitud: -63.5155247
    },
    {
        id: 771,
        extinto: "RAMOS ELVA ADELA",
        nacimiento: "1943-11-25",
        defuncion: "2011-01-18",
        sector: "Sector Rojo",
        latitud: -31.5668340,
        longitud: -63.5155328
    },
    {
        id: 772,
        extinto: "ABEL  OSACAR  BIANCO",
        nacimiento: "1940-10-02",
        defuncion: "2001-06-23",
        sector: "Sector Rojo",
        latitud: -31.5668340,
        longitud: -63.5155328
    },
    {
        id: 773,
        extinto: "GARCIA RAMON BAUSTISTA",
        nacimiento: "1939-08-29",
        defuncion: "2008-09-24",
        sector: "Sector Rojo",
        latitud: -31.5668452,
        longitud: -63.5155368
    },
    {
        id: 774,
        extinto: "DORA EDIT PERALTA",
        nacimiento: "1944-03-16",
        defuncion: "2010-12-06",
        sector: "Sector Rojo",
        latitud: -31.5668452,
        longitud: -63.5155368
    },
    {
        id: 775,
        extinto: "MAÑAY JUSTO ELIAS",
        nacimiento: "1932-02-04",
        defuncion: "2014-04-03",
        sector: "Sector Rojo",
        latitud: -31.5668564,
        longitud: -63.5155408
    },
    {
        id: 776,
        extinto: "MAÑAY MIRIAM ELENA",
        nacimiento: "1933-09-29",
        defuncion: "2017-07-31",
        sector: "Sector Rojo",
        latitud: -31.5668564,
        longitud: -63.5155408
    },
    {
        id: 777,
        extinto: "LUDUEÑA JOSE RAMON",
        nacimiento: "1950-09-26",
        defuncion: "2012-06-24",
        sector: "Sector Rojo",
        latitud: -31.5667718,
        longitud: -63.5155357
    },
    {
        id: 778,
        extinto: "BELTRAMO AVELINO JOSE",
        nacimiento: "1935-10-10",
        defuncion: "2009-11-07",
        sector: "Sector Rojo",
        latitud: -31.5667830,
        longitud: -63.5155397
    },
    {
        id: 779,
        extinto: "LUDUEÑA ROGELIO",
        nacimiento: "2009-07-28",
        defuncion: "2009-07-28",
        sector: "Sector Rojo",
        latitud: -31.5667942,
        longitud: -63.5155438
    },
    {
        id: 780,
        extinto: "GERBINO MERCEDEZ",
        nacimiento: "2009-07-28",
        defuncion: "2009-07-28",
        sector: "Sector Rojo",
        latitud: -31.5667942,
        longitud: -63.5155438
    },
    {
        id: 781,
        extinto: "RAMON ANTONIO CLAVERO",
        nacimiento: "1931-01-14",
        defuncion: "2009-03-21",
        sector: "Sector Rojo",
        latitud: -31.5667942,
        longitud: -63.5155438
    },
    {
        id: 782,
        extinto: "RAMONA QUINTINA LUDUEÑA",
        nacimiento: "1925-10-31",
        defuncion: "2008-10-30",
        sector: "Sector Rojo",
        latitud: -31.5667942,
        longitud: -63.5155438
    },
    {
        id: 783,
        extinto: "JOSE NESTOR LUQUE",
        nacimiento: "1938-02-27",
        defuncion: "1999-12-22",
        sector: "Sector Rojo",
        latitud: -31.5668166,
        longitud: -63.5155519
    },
    {
        id: 784,
        extinto: "LIA ESTER PERALTA",
        nacimiento: "1942-02-06",
        defuncion: "2022-09-23",
        sector: "Sector Rojo",
        latitud: -31.5668166,
        longitud: -63.5155519
    },
    {
        id: 785,
        extinto: "GIRAUDO ALFREDO JORGE",
        nacimiento: "1951-08-06",
        defuncion: "1998-08-26",
        sector: "Sector Rojo",
        latitud: -31.5668278,
        longitud: -63.5155559
    },
    {
        id: 786,
        extinto: "PETTINARI RAYMUNDO",
        nacimiento: "1925-02-18",
        defuncion: "1998-02-08",
        sector: "Sector Rojo",
        latitud: -31.5668390,
        longitud: -63.5155599
    },
    {
        id: 787,
        extinto: "JORGE RAUL ORELLANO",
        nacimiento: "1959-04-07",
        defuncion: "2006-04-20",
        sector: "Sector Rojo",
        latitud: -31.5668502,
        longitud: -63.5155640
    },
    {
        id: 788,
        extinto: "OLDEVINA MARRONE",
        nacimiento: "1931-03-12",
        defuncion: "2015-07-04",
        sector: "Sector Rojo",
        latitud: -31.5667321,
        longitud: -63.5155467
    },
    {
        id: 789,
        extinto: "RAFAEL ALBERTO JUAREZ",
        nacimiento: "1932-10-24",
        defuncion: "2015-12-28",
        sector: "Sector Rojo",
        latitud: -31.5667321,
        longitud: -63.5155467
    },
    {
        id: 790,
        extinto: "CASAS ERNESTO BACILIO",
        nacimiento: "1933-09-12",
        defuncion: "2013-05-03",
        sector: "Sector Rojo",
        latitud: -31.5667433,
        longitud: -63.5155507
    },
    {
        id: 791,
        extinto: "JUAN ELIO RIVATA",
        nacimiento: "1948-08-30",
        defuncion: "2022-02-04",
        sector: "Sector Rojo",
        latitud: -31.5667657,
        longitud: -63.5155588
    },
    {
        id: 792,
        extinto: "ARTURO TELMO TISERA",
        nacimiento: "1903-07-28",
        defuncion: "1966-11-19",
        sector: "Sector Rojo",
        latitud: -31.5667657,
        longitud: -63.5155588
    },
    {
        id: 793,
        extinto: "JUANA DOLORES TISSERA",
        nacimiento: "1924-04-24",
        defuncion: "2014-12-20",
        sector: "Sector Rojo",
        latitud: -31.5667657,
        longitud: -63.5155588
    },
    {
        id: 794,
        extinto: "MARIA FRANCISCA RODRIGUEZ",
        nacimiento: "1900-03-08",
        defuncion: "1980-06-09",
        sector: "Sector Rojo",
        latitud: -31.5667657,
        longitud: -63.5155588
    },
    {
        id: 795,
        extinto: "VICTORIO SILVESTRE CIVALLERO",
        nacimiento: "1918-12-31",
        defuncion: "1978-08-28",
        sector: "Sector Rojo",
        latitud: -31.5667657,
        longitud: -63.5155588
    },
    {
        id: 796,
        extinto: "JUNCOS ESTHER RAMONA",
        nacimiento: "1943-03-16",
        defuncion: "2011-04-26",
        sector: "Sector Rojo",
        latitud: -31.5667769,
        longitud: -63.5155629
    },
    {
        id: 797,
        extinto: "JUNCOS JUAN DOMINGO",
        nacimiento: "1951-02-25",
        defuncion: "2013-05-19",
        sector: "Sector Rojo",
        latitud: -31.5667769,
        longitud: -63.5155629
    },
    {
        id: 798,
        extinto: "VAZQUEZ MARIA INES",
        nacimiento: "1912-04-28",
        defuncion: "2003-10-02",
        sector: "Sector Rojo",
        latitud: -31.5667881,
        longitud: -63.5155669
    },
    {
        id: 799,
        extinto: "RIVERO NELSON JOSE",
        nacimiento: "1933-09-04",
        defuncion: "2010-09-08",
        sector: "Sector Rojo",
        latitud: -31.5667993,
        longitud: -63.5155710
    },
    {
        id: 800,
        extinto: "RIVERO WALTER NELSON",
        nacimiento: "1962-08-24",
        defuncion: "2016-04-07",
        sector: "Sector Rojo",
        latitud: -31.5667993,
        longitud: -63.5155710
    },
    {
        id: 801,
        extinto: "JOSE HIPOLITO VEGA",
        nacimiento: "1919-12-18",
        defuncion: "2007-09-24",
        sector: "Sector Rojo",
        latitud: -31.5668105,
        longitud: -63.5155750
    },
    {
        id: 802,
        extinto: "BUSTOS BLANCA SUSANA",
        nacimiento: "1922-01-22",
        defuncion: "2012-06-20",
        sector: "Sector Rojo",
        latitud: -31.5668105,
        longitud: -63.5155750
    },
    {
        id: 803,
        extinto: "GUILLERMO TEJEDA",
        nacimiento: "1945-11-19",
        defuncion: "2007-03-23",
        sector: "Sector Rojo",
        latitud: -31.5668217,
        longitud: -63.5155790
    },
    {
        id: 804,
        extinto: "MARIA DE LOS ANGELES HERRERA",
        nacimiento: "1990-01-11",
        defuncion: "2020-10-08",
        sector: "Sector Naranja",
        latitud: -31.5668686,
        longitud: -63.5148886
    },
    {
        id: 805,
        extinto: "RAMON ERNESTO HERRERA",
        nacimiento: "1968-08-31",
        defuncion: "2023-08-27",
        sector: "Sector Naranja",
        latitud: -31.5668686,
        longitud: -63.5148886
    },
    {
        id: 806,
        extinto: "BEATRIZ VIRGINIA RODRIGUEZ",
        nacimiento: "1954-07-12",
        defuncion: "2021-06-26",
        sector: "Sector Naranja",
        latitud: -31.5668799,
        longitud: -63.5148924
    },
    {
        id: 807,
        extinto: "EDUARDO NICOLAS GAMARRA",
        nacimiento: "1933-11-08",
        defuncion: "2021-07-15",
        sector: "Sector Naranja",
        latitud: -31.5668911,
        longitud: -63.5148963
    },
    {
        id: 808,
        extinto: "FLORENCIA BAZAN",
        nacimiento: "1926-04-05",
        defuncion: "2021-07-18",
        sector: "Sector Naranja",
        latitud: -31.5668911,
        longitud: -63.5148963
    },
    {
        id: 809,
        extinto: "ENZO OSCAR TABORDA",
        nacimiento: "1997-09-02",
        defuncion: "2022-07-15",
        sector: "Sector Naranja",
        latitud: -31.5669248,
        longitud: -63.5149080
    },
    {
        id: 810,
        extinto: "ISIDORO  ALBERTO  COMBA",
        nacimiento: "1945-03-08",
        defuncion: "2023-05-17",
        sector: "Sector Naranja",
        latitud: -31.5669586,
        longitud: -63.5149196
    },
    {
        id: 811,
        extinto: "NORMA  GRACIELA  PEREZ",
        nacimiento: "1960-10-21",
        defuncion: "2023-03-23",
        sector: "Sector Naranja",
        latitud: -31.5669698,
        longitud: -63.5149235
    },
    {
        id: 812,
        extinto: "JORGE  OMAR  GALINDEZ",
        nacimiento: "1948-12-02",
        defuncion: "2023-05-09",
        sector: "Sector Naranja",
        latitud: -31.5668627,
        longitud: -63.5149118
    },
    {
        id: 813,
        extinto: "FRANCO RAUL ZABALA",
        nacimiento: "1995-04-29",
        defuncion: "2022-12-12",
        sector: "Sector Naranja",
        latitud: -31.5668367,
        longitud: -63.5150148
    },
    {
        id: 814,
        extinto: "ANTONIA BARBARITA  COTTURA",
        nacimiento: "1947-09-15",
        defuncion: "2024-03-31",
        sector: "Sector Naranja",
        latitud: -31.5668479,
        longitud: -63.5150187
    },
    {
        id: 815,
        extinto: "ILDEBRANDRO  RAMON  NAVARRO",
        nacimiento: "1936-05-15",
        defuncion: "2024-06-04",
        sector: "Sector Naranja",
        latitud: -31.5668817,
        longitud: -63.5150303
    },
    {
        id: 816,
        extinto: "JUAN CARLOS SANCHEZ",
        nacimiento: "1958-10-29",
        defuncion: "2020-10-11",
        sector: "Sector Naranja",
        latitud: -31.5668295,
        longitud: -63.5150431
    },
    {
        id: 817,
        extinto: "KEILA  ALDANA  BUSTAMANTE",
        nacimiento: "2023-02-24",
        defuncion: "2023-02-24",
        sector: "Sector Naranja",
        latitud: -31.5669307,
        longitud: -63.5150780
    },
    {
        id: 818,
        extinto: "MIGUEL  SIGIFREDO  GIORDANO",
        nacimiento: "1948-07-05",
        defuncion: "2023-02-25",
        sector: "Sector Naranja",
        latitud: -31.5668574,
        longitud: -63.5150780
    },
    {
        id: 819,
        extinto: "FRANCHESCO  MARTIN  NAVARRO",
        nacimiento: "2023-02-12",
        defuncion: "2023-02-12",
        sector: "Sector Naranja",
        latitud: -31.5668799,
        longitud: -63.5150857
    },
    {
        id: 820,
        extinto: "NAILA MELODY CAMPO",
        nacimiento: "2023-01-03",
        defuncion: "2023-01-03",
        sector: "Sector Naranja",
        latitud: -31.5669023,
        longitud: -63.5150935
    },
    {
        id: 821,
        extinto: "ARMANDO  EDELVE  SANTIAGO  BRUCELLI",
        nacimiento: "1943-07-24",
        defuncion: "2024-02-29",
        sector: "Sector Naranja",
        latitud: -31.5670422,
        longitud: -63.5149466
    },
    {
        id: 822,
        extinto: "RAMON SEBASTIAN GALIAN",
        nacimiento: "1952-01-20",
        defuncion: "2021-08-17",
        sector: "Sector Naranja",
        latitud: -31.5670535,
        longitud: -63.5149500
    },
    {
        id: 823,
        extinto: "LUIS EDUARDO LEGUIZAMON",
        nacimiento: "1990-11-06",
        defuncion: "2022-09-01",
        sector: "Sector Naranja",
        latitud: -31.5672239,
        longitud: -63.5150009
    },
    {
        id: 824,
        extinto: "OMAR FELICIANO CORREA",
        nacimiento: "1974-12-30",
        defuncion: "2022-09-10",
        sector: "Sector Naranja",
        latitud: -31.5671506,
        longitud: -63.5150040
    },
    {
        id: 825,
        extinto: "JOSE OMAR LEGUIZAMON",
        nacimiento: "1968-10-13",
        defuncion: "2021-09-06",
        sector: "Sector Naranja",
        latitud: -31.5672125,
        longitud: -63.5150529
    },
    {
        id: 826,
        extinto: "JUAN BAUTISTA SANCHEZ",
        nacimiento: "1941-12-21",
        defuncion: "2021-06-06",
        sector: "Sector Naranja",
        latitud: -31.5672073,
        longitud: -63.5150764
    },
    {
        id: 827,
        extinto: "ARDILES FAUSTINO MARIO",
        nacimiento: "1989-01-17",
        defuncion: "2005-02-18",
        sector: "Sector Naranja",
        latitud: -31.5671959,
        longitud: -63.5151839
    },
    {
        id: 828,
        extinto: "ARDILES MARCOS MANUEL",
        nacimiento: "2013-04-18",
        defuncion: "2013-04-18",
        sector: "Sector Naranja",
        latitud: -31.5671959,
        longitud: -63.5151839
    },
    {
        id: 829,
        extinto: "MONTAÑA FAUSTINO",
        nacimiento: "1949-01-18",
        defuncion: "2017-09-20",
        sector: "Sector Naranja",
        latitud: -31.5671959,
        longitud: -63.5151839
    },
    {
        id: 830,
        extinto: "LUQUE NORMA EDIT",
        nacimiento: "1953-09-26",
        defuncion: "2000-02-11",
        sector: "Sector Naranja",
        latitud: -31.5672502,
        longitud: -63.5150117
    },
    {
        id: 831,
        extinto: "BALDASA ANGELA MARI",
        nacimiento: "1910-01-02",
        defuncion: "1989-04-13",
        sector: "Sector Naranja",
        latitud: -31.5672502,
        longitud: -63.5150117
    },
    {
        id: 832,
        extinto: "CAON ALDO ALBINO",
        nacimiento: "1945-06-16",
        defuncion: "1946-06-16",
        sector: "Sector Naranja",
        latitud: -31.5672502,
        longitud: -63.5150117
    },
    {
        id: 833,
        extinto: "CAON HECTOR OSCAR",
        nacimiento: "1947-07-29",
        defuncion: "2013-06-22",
        sector: "Sector Naranja",
        latitud: -31.5672616,
        longitud: -63.5150146
    },
    {
        id: 834,
        extinto: "FABIAN  OSCAR CAON",
        nacimiento: "1977-08-31",
        defuncion: "2024-06-13",
        sector: "Sector Naranja",
        latitud: -31.5672616,
        longitud: -63.5150146
    },
    {
        id: 835,
        extinto: "LUCIANA FIDELMINA PERALTA",
        nacimiento: "1917-06-20",
        defuncion: "1984-05-28",
        sector: "Sector Naranja",
        latitud: -31.5673074,
        longitud: -63.5150264
    },
    {
        id: 836,
        extinto: "PEDRO ELOI GALINDES",
        nacimiento: "1914-12-04",
        defuncion: "1985-07-19",
        sector: "Sector Naranja",
        latitud: -31.5673074,
        longitud: -63.5150264
    },
    {
        id: 837,
        extinto: "HUMBERTO DEL VALLE VICENTE",
        nacimiento: "1958-09-24",
        defuncion: "2024-01-08",
        sector: "Sector Naranja",
        latitud: -31.5673189,
        longitud: -63.5150293
    },
    {
        id: 838,
        extinto: "CEBALLOS ERNESTO FERNANDO",
        nacimiento: "1950-10-20",
        defuncion: "2008-05-04",
        sector: "Sector Rosa",
        latitud: -31.5674579,
        longitud: -63.5151200
    },
    {
        id: 839,
        extinto: "GASPARINI ANGEL AMADO",
        nacimiento: "1918-02-24",
        defuncion: "1979-11-09",
        sector: "Sector Naranja",
        latitud: -31.5672349,
        longitud: -63.5151893
    },
    {
        id: 840,
        extinto: "GASPARINI BEATRIZ MARIA",
        nacimiento: "1946-03-13",
        defuncion: "2014-05-13",
        sector: "Sector Naranja",
        latitud: -31.5672349,
        longitud: -63.5151893
    },
    {
        id: 841,
        extinto: "CARFAGNA IDA ROSA",
        nacimiento: "1917-01-12",
        defuncion: "2016-09-16",
        sector: "Sector Naranja",
        latitud: -31.5672349,
        longitud: -63.5151893
    },
    {
        id: 842,
        extinto: "DARIO JOSE ABEL GASPARINI",
        nacimiento: "1950-07-27",
        defuncion: "2020-04-28",
        sector: "Sector Naranja",
        latitud: -31.5672465,
        longitud: -63.5151916
    },
    {
        id: 843,
        extinto: "MARIA INES CORDOBA",
        nacimiento: "1960-01-30",
        defuncion: "2023-02-08",
        sector: "Sector Naranja",
        latitud: -31.5672581,
        longitud: -63.5151939
    },
    {
        id: 844,
        extinto: "LUIS BATAGLIA",
        nacimiento: "1948-03-25",
        defuncion: "2024-01-06",
        sector: "Sector Naranja",
        latitud: -31.5672581,
        longitud: -63.5151939
    },
    {
        id: 845,
        extinto: "DIEGO NORBERTO VELZI",
        nacimiento: "1946-10-26",
        defuncion: "2022-01-05",
        sector: "Sector Naranja",
        latitud: -31.5672696,
        longitud: -63.5151962
    },
    {
        id: 846,
        extinto: "TABORDA JOSE RAMON",
        nacimiento: "1921-10-24",
        defuncion: "1978-06-01",
        sector: "Sector Naranja",
        latitud: -31.5673043,
        longitud: -63.5152031
    },
    {
        id: 847,
        extinto: "GOMEZ MARIA DE LAS MERCEDEZ",
        nacimiento: "1924-09-18",
        defuncion: "1999-04-26",
        sector: "Sector Naranja",
        latitud: -31.5673043,
        longitud: -63.5152031
    },
    {
        id: 848,
        extinto: "GRACIELA ALICIA TABORDA GOMEZ",
        nacimiento: "1952-11-01",
        defuncion: "2006-06-17",
        sector: "Sector Naranja",
        latitud: -31.5673043,
        longitud: -63.5152031
    },
    {
        id: 849,
        extinto: "TABORDA GOMEZ SILVIA DEL VALLE",
        nacimiento: "1948-05-07",
        defuncion: "2011-08-02",
        sector: "Sector Naranja",
        latitud: -31.5673043,
        longitud: -63.5152031
    },
    {
        id: 850,
        extinto: "MARIA JUANA DEL TRANSITO GALLARDO",
        nacimiento: "1943-07-14",
        defuncion: "2020-10-08",
        sector: "Sector Naranja",
        latitud: -31.5673158,
        longitud: -63.5152054
    },
    {
        id: 851,
        extinto: "VALENTIN  JUAN  LENCINAS",
        nacimiento: "1930-07-20",
        defuncion: "1990-01-09",
        sector: "Sector Naranja",
        latitud: -31.5673158,
        longitud: -63.5152054
    },
    {
        id: 852,
        extinto: "LUDUEÑA ROBERTA EMILIA",
        nacimiento: "1904-09-22",
        defuncion: "1990-02-19",
        sector: "Sector Rosa",
        latitud: -31.5673274,
        longitud: -63.5152077
    },
    {
        id: 853,
        extinto: "BELASQUE RAMON IRINEO",
        nacimiento: "1946-11-03",
        defuncion: "2017-05-07",
        sector: "Sector Rosa",
        latitud: -31.5673274,
        longitud: -63.5152077
    },
    {
        id: 854,
        extinto: "NELIDA BEATRIZ CARRERA",
        nacimiento: "1957-03-09",
        defuncion: "2019-07-02",
        sector: "Sector Rosa",
        latitud: -31.5673390,
        longitud: -63.5152100
    },
    {
        id: 855,
        extinto: "VELAZQUEZ CORNELIO EDUARDO",
        nacimiento: "1928-09-16",
        defuncion: "1979-09-15",
        sector: "Sector Rosa",
        latitud: -31.5673505,
        longitud: -63.5152123
    },
    {
        id: 856,
        extinto: "JUANA ERNESTINA VELAZQUEZ",
        nacimiento: "1923-03-16",
        defuncion: "2009-04-18",
        sector: "Sector Rosa",
        latitud: -31.5673505,
        longitud: -63.5152123
    },
    {
        id: 857,
        extinto: "JUAN CARLOS VELAZQUEZ",
        nacimiento: "1949-12-06",
        defuncion: "2022-01-27",
        sector: "Sector Rosa",
        latitud: -31.5673505,
        longitud: -63.5152123
    },
    {
        id: 858,
        extinto: "VELAZQUEZ IRINEO LEON",
        nacimiento: "1890-08-20",
        defuncion: "1922-02-15",
        sector: "Sector Rosa",
        latitud: -31.5673736,
        longitud: -63.5152170
    },
    {
        id: 859,
        extinto: "LUQUE JUAN CARLOS",
        nacimiento: "1955-04-29",
        defuncion: "2001-05-05",
        sector: "Sector Rosa",
        latitud: -31.5673967,
        longitud: -63.5152216
    },
    {
        id: 860,
        extinto: "LUQUE JUAN",
        nacimiento: "1931-05-18",
        defuncion: "2006-07-22",
        sector: "Sector Rosa",
        latitud: -31.5673967,
        longitud: -63.5152216
    },
    {
        id: 861,
        extinto: "VELAZQUEZ HAYDEE PETRONA",
        nacimiento: "1932-06-29",
        defuncion: "2013-08-07",
        sector: "Sector Rosa",
        latitud: -31.5673967,
        longitud: -63.5152216
    },
    {
        id: 862,
        extinto: "VILLARROEL VERONICA",
        nacimiento: "1972-01-28",
        defuncion: "2013-08-26",
        sector: "Sector Rosa",
        latitud: -31.5674083,
        longitud: -63.5152239
    },
    {
        id: 863,
        extinto: "VILLARROEL ROSARIO VERNABE",
        nacimiento: "1937-04-22",
        defuncion: "2014-10-11",
        sector: "Sector Rosa",
        latitud: -31.5674198,
        longitud: -63.5152262
    },
    {
        id: 864,
        extinto: "RAMON ALBANO GOMEZ",
        nacimiento: "1952-10-30",
        defuncion: "2021-08-09",
        sector: "Sector Rosa",
        latitud: -31.5674430,
        longitud: -63.5152308
    },
    {
        id: 865,
        extinto: "ANGELA DOMINGA GUARDATTI",
        nacimiento: "1944-09-21",
        defuncion: "2021-08-08",
        sector: "Sector Rosa",
        latitud: -31.5676931,
        longitud: -63.5151183
    },
    {
        id: 866,
        extinto: "ISABEL PETRONA GIANOTTI",
        nacimiento: "1937-02-02",
        defuncion: "2015-08-24",
        sector: "Sector Rosa",
        latitud: -31.5674607,
        longitud: -63.5152326
    },
    {
        id: 867,
        extinto: "DOMINGO LUIS LUDUEÑA",
        nacimiento: "1953-05-19",
        defuncion: "2022-01-15",
        sector: "Sector Rosa",
        latitud: -31.5676453,
        longitud: -63.5152719
    },
    {
        id: 868,
        extinto: "TERESA INES PEREYRA",
        nacimiento: "1955-04-28",
        defuncion: "2016-02-01",
        sector: "Sector Rosa",
        latitud: -31.5676453,
        longitud: -63.5152719
    },
    {
        id: 869,
        extinto: "ALDO ANTONIO GIACOSSA",
        nacimiento: "1940-03-22",
        defuncion: "2021-11-25",
        sector: "Sector Rosa",
        latitud: -31.5676568,
        longitud: -63.5152743
    },
    {
        id: 870,
        extinto: "AMALIA DOMINGA MASSIMINO",
        nacimiento: "1923-11-25",
        defuncion: "2020-10-14",
        sector: "Sector Rosa",
        latitud: -31.5676682,
        longitud: -63.5152767
    },
    {
        id: 871,
        extinto: "PEDRO PABLO GASPAROTTO",
        nacimiento: "1946-06-29",
        defuncion: "1946-06-29",
        sector: "Sector Rosa",
        latitud: -31.5676682,
        longitud: -63.5152767
    },
    {
        id: 872,
        extinto: "ANGEL CLEMENTE GASPAROTTO",
        nacimiento: "1922-02-14",
        defuncion: "1963-09-16",
        sector: "Sector Rosa",
        latitud: -31.5676682,
        longitud: -63.5152767
    },
    {
        id: 873,
        extinto: "NAVARRO RAMON ELOY",
        nacimiento: "1918-04-04",
        defuncion: "2001-01-21",
        sector: "Sector Naranja",
        latitud: -31.5668270,
        longitud: -63.5150956
    },
    {
        id: 874,
        extinto: "NAVARRO MARIA CRISTINA",
        nacimiento: "1951-02-22",
        defuncion: "2008-02-23",
        sector: "Sector Naranja",
        latitud: -31.5668270,
        longitud: -63.5150956
    },
    {
        id: 875,
        extinto: "GIACOMINO OFELIA ORFINA",
        nacimiento: "1930-09-22",
        defuncion: "2014-07-30",
        sector: "Sector Naranja",
        latitud: -31.5668270,
        longitud: -63.5150956
    },
    {
        id: 876,
        extinto: "MARIA ADA BUSTAMANTE",
        nacimiento: "1943-04-24",
        defuncion: "2019-09-05",
        sector: "Sector Naranja",
        latitud: -31.5668494,
        longitud: -63.5151036
    },
    {
        id: 877,
        extinto: "CATALINA EUGENIA YANEZ",
        nacimiento: "1939-07-13",
        defuncion: "2021-06-07",
        sector: "Sector Naranja",
        latitud: -31.5668719,
        longitud: -63.5151116
    },
    {
        id: 878,
        extinto: "HUGO PEDRO TAMAGNINI",
        nacimiento: "1945-01-17",
        defuncion: "2021-09-11",
        sector: "Sector Naranja",
        latitud: -31.5668719,
        longitud: -63.5151116
    },
    {
        id: 879,
        extinto: "MARIA DEL CARMEN MUCHELLI",
        nacimiento: "1958-04-03",
        defuncion: "2024-07-17",
        sector: "Sector Naranja",
        latitud: -31.5670737,
        longitud: -63.5151838
    },
    {
        id: 880,
        extinto: "DONALISIO ILDELFONSO JOSE",
        nacimiento: "1920-01-23",
        defuncion: "2006-11-10",
        sector: "Sector Naranja",
        latitud: -31.5671297,
        longitud: -63.5152038
    },
    {
        id: 881,
        extinto: "EMMA MOSETTO",
        nacimiento: "1933-01-29",
        defuncion: "2019-12-14",
        sector: "Sector Naranja",
        latitud: -31.5668434,
        longitud: -63.5151267
    },
    {
        id: 882,
        extinto: "MONICA BEATRIZ LOPEZ",
        nacimiento: "1979-01-12",
        defuncion: "2020-06-12",
        sector: "Sector Naranja",
        latitud: -31.5668434,
        longitud: -63.5151267
    },
    {
        id: 883,
        extinto: "CESAR EDUARDO DURAN",
        nacimiento: "1967-01-12",
        defuncion: "2022-06-29",
        sector: "Sector Naranja",
        latitud: -31.5669555,
        longitud: -63.5151668
    },
    {
        id: 884,
        extinto: "GRACIELA GENOVEVA GONZALEZ",
        nacimiento: "1961-02-27",
        defuncion: "2021-06-15",
        sector: "Sector Naranja",
        latitud: -31.5669667,
        longitud: -63.5151708
    },
    {
        id: 885,
        extinto: "RAMON  ALBERTO  VELEZ",
        nacimiento: "1946-06-10",
        defuncion: "2023-03-22",
        sector: "Sector Naranja",
        latitud: -31.5672133,
        longitud: -63.5152591
    },
    {
        id: 886,
        extinto: "BIANCIOTTO ORESTE SALVINO",
        nacimiento: "1912-04-02",
        defuncion: "2003-08-12",
        sector: "Sector Naranja",
        latitud: -31.5672357,
        longitud: -63.5152671
    },
    {
        id: 887,
        extinto: "PEDRO NILO MANDILE",
        nacimiento: "1945-11-09",
        defuncion: "2020-12-24",
        sector: "Sector Naranja",
        latitud: -31.5668248,
        longitud: -63.5151509
    },
    {
        id: 888,
        extinto: "ANITA VIOLETA VERDUNA",
        nacimiento: "1932-01-10",
        defuncion: "2021-05-08",
        sector: "Sector Naranja",
        latitud: -31.5668920,
        longitud: -63.5151750
    },
    {
        id: 889,
        extinto: "NORA  ESTELA  RUIZ",
        nacimiento: "1959-04-28",
        defuncion: "2024-06-21",
        sector: "Sector Naranja",
        latitud: -31.5668920,
        longitud: -63.5151750
    },
    {
        id: 890,
        extinto: "GOMEZ GRISELDA DEL ROSARIO",
        nacimiento: "1967-08-24",
        defuncion: "2001-04-03",
        sector: "Sector Naranja",
        latitud: -31.5669705,
        longitud: -63.5152031
    },
    {
        id: 891,
        extinto: "MARTA ELENA CEBALLOS",
        nacimiento: "1956-07-29",
        defuncion: "2021-04-02",
        sector: "Sector Naranja",
        latitud: -31.5670041,
        longitud: -63.5152151
    },
    {
        id: 892,
        extinto: "GOMEZ GUILLERMO",
        nacimiento: "1930-07-22",
        defuncion: "2002-08-24",
        sector: "Sector Naranja",
        latitud: -31.5670378,
        longitud: -63.5152271
    },
    {
        id: 893,
        extinto: "NORMA FORTUNATA REGIS",
        nacimiento: "1937-01-15",
        defuncion: "2018-04-20",
        sector: "Sector Naranja",
        latitud: -31.5670378,
        longitud: -63.5152271
    },
    {
        id: 894,
        extinto: "NELSO VILIANO MARGARIA",
        nacimiento: "1935-12-15",
        defuncion: "1969-10-15",
        sector: "Sector Naranja",
        latitud: -31.5670378,
        longitud: -63.5152271
    },
    {
        id: 895,
        extinto: "JUANA ARMINDA MAZZA",
        nacimiento: "1931-11-21",
        defuncion: "2007-04-23",
        sector: "Sector Naranja",
        latitud: -31.5670938,
        longitud: -63.5152472
    },
    {
        id: 896,
        extinto: "PEREZ JOSE ERIO",
        nacimiento: "1932-09-08",
        defuncion: "2001-09-07",
        sector: "Sector Naranja",
        latitud: -31.5671611,
        longitud: -63.5152712
    },
    {
        id: 897,
        extinto: "RODRIGUEZ LUISA OFELIA",
        nacimiento: "1935-06-21",
        defuncion: "1979-07-23",
        sector: "Sector Naranja",
        latitud: -31.5671611,
        longitud: -63.5152712
    },
    {
        id: 898,
        extinto: "JOSE DANIEL PEREZ",
        nacimiento: "1961-01-25",
        defuncion: "2022-08-11",
        sector: "Sector Naranja",
        latitud: -31.5671611,
        longitud: -63.5152712
    },
    {
        id: 899,
        extinto: "HECTOR  JUAN  NANZER",
        nacimiento: "1942-09-12",
        defuncion: "1978-05-16",
        sector: "Sector Naranja",
        latitud: -31.5671947,
        longitud: -63.5152832
    },
    {
        id: 900,
        extinto: "JOSE NERIS ALTAMIRANO",
        nacimiento: "1939-03-08",
        defuncion: "2020-01-20",
        sector: "Sector Naranja",
        latitud: -31.5672059,
        longitud: -63.5152873
    },
    {
        id: 901,
        extinto: "FERNANDO ALBERTO ALTAMIRANO",
        nacimiento: "1975-02-02",
        defuncion: "2001-06-15",
        sector: "Sector Naranja",
        latitud: -31.5672059,
        longitud: -63.5152873
    },
    {
        id: 902,
        extinto: "SUSANA EDIT LUQUE",
        nacimiento: "1947-01-06",
        defuncion: "2021-08-08",
        sector: "Sector Naranja",
        latitud: -31.5672171,
        longitud: -63.5152913
    },
    {
        id: 903,
        extinto: "JUAN SECUNDINO SOSA",
        nacimiento: "1943-05-21",
        defuncion: "1973-03-01",
        sector: "Sector Naranja",
        latitud: -31.5672171,
        longitud: -63.5152913
    },
    {
        id: 904,
        extinto: "GAITE ROSA AMALIA",
        nacimiento: "1919-05-25",
        defuncion: "2005-12-08",
        sector: "Sector Naranja",
        latitud: -31.5672283,
        longitud: -63.5152953
    },
    {
        id: 905,
        extinto: "MARCELO ROBERTO ALVAREZ",
        nacimiento: "1963-12-05",
        defuncion: "2021-12-19",
        sector: "Sector Naranja",
        latitud: -31.5668075,
        longitud: -63.5151701
    },
    {
        id: 906,
        extinto: "LITA  NORMA  FERREYRA",
        nacimiento: "1933-11-17",
        defuncion: "2024-05-28",
        sector: "Sector Naranja",
        latitud: -31.5668075,
        longitud: -63.5151701
    },
    {
        id: 907,
        extinto: "MIGUEL ANGEL LUDUEÑA",
        nacimiento: "1941-11-15",
        defuncion: "2021-07-10",
        sector: "Sector Naranja",
        latitud: -31.5668187,
        longitud: -63.5151741
    },
    {
        id: 908,
        extinto: "DOMINGA CRISTINA BOLLATI",
        nacimiento: "1958-06-14",
        defuncion: "2022-04-10",
        sector: "Sector Naranja",
        latitud: -31.5668411,
        longitud: -63.5151821
    },
    {
        id: 909,
        extinto: "CHRISTIAN DANIEL GRIBAUDO",
        nacimiento: "1975-08-04",
        defuncion: "2022-10-31",
        sector: "Sector Naranja",
        latitud: -31.5668523,
        longitud: -63.5151861
    },
    {
        id: 910,
        extinto: "SANTIAGO  LUIS  HEREDIA",
        nacimiento: "1949-02-27",
        defuncion: "2024-06-25",
        sector: "Sector Naranja",
        latitud: -31.5668635,
        longitud: -63.5151901
    },
    {
        id: 911,
        extinto: "DALMA  ARESE",
        nacimiento: "1928-08-14",
        defuncion: "2024-06-11",
        sector: "Sector Naranja",
        latitud: -31.5671662,
        longitud: -63.5152984
    },
    {
        id: 912,
        extinto: "JUAN  RAMON  LUQUE",
        nacimiento: "1934-10-27",
        defuncion: "2008-06-05",
        sector: "Sector Naranja",
        latitud: -31.5671662,
        longitud: -63.5152984
    },
    {
        id: 913,
        extinto: "NELSO FELIX VIVA",
        nacimiento: "1949-12-07",
        defuncion: "2022-11-09",
        sector: "Sector Naranja",
        latitud: -31.5671774,
        longitud: -63.5153024
    },
    {
        id: 914,
        extinto: "LORENZO SERRANO",
        nacimiento: "1930-12-08",
        defuncion: "2021-08-03",
        sector: "Sector Naranja",
        latitud: -31.5671998,
        longitud: -63.5153104
    },
    {
        id: 915,
        extinto: "PORCEL DE PERALTA ANGEL INDALI",
        nacimiento: "1924-04-30",
        defuncion: "1996-09-19",
        sector: "Sector Naranja",
        latitud: -31.5669376,
        longitud: -63.5152500
    },
    {
        id: 916,
        extinto: "PERALTA VIRGINIA ROSA",
        nacimiento: "1917-11-12",
        defuncion: "1982-07-01",
        sector: "Sector Naranja",
        latitud: -31.5669376,
        longitud: -63.5152500
    },
    {
        id: 917,
        extinto: "FELISA DEL PINO",
        nacimiento: "1919-08-04",
        defuncion: "2009-06-08",
        sector: "Sector Naranja",
        latitud: -31.5669376,
        longitud: -63.5152500
    },
    {
        id: 918,
        extinto: "LETICIA HAYDEE PAGANO",
        nacimiento: "1959-07-07",
        defuncion: "2018-07-21",
        sector: "Sector Naranja",
        latitud: -31.5669488,
        longitud: -63.5152540
    },
    {
        id: 919,
        extinto: "AMANDA TERESA GALLARDO",
        nacimiento: "1945-01-02",
        defuncion: "2022-03-08",
        sector: "Sector Naranja",
        latitud: -31.5669600,
        longitud: -63.5152580
    },
    {
        id: 920,
        extinto: "AQUILES JOSE VARAS",
        nacimiento: "1990-09-12",
        defuncion: "2022-08-04",
        sector: "Sector Naranja",
        latitud: -31.5669712,
        longitud: -63.5152619
    },
    {
        id: 921,
        extinto: "CESAR DEL VALLE LUCARELLI",
        nacimiento: "1952-08-02",
        defuncion: "2022-08-06",
        sector: "Sector Naranja",
        latitud: -31.5670049,
        longitud: -63.5152738
    },
    {
        id: 922,
        extinto: "FEDERICO ZAGAGLIA",
        nacimiento: "1945-07-25",
        defuncion: "2023-11-08",
        sector: "Sector Naranja",
        latitud: -31.5670385,
        longitud: -63.5152857
    },
    {
        id: 923,
        extinto: "HECTOR  MARTIN  TAMAIN",
        nacimiento: "1969-11-01",
        defuncion: "2023-10-05",
        sector: "Sector Naranja",
        latitud: -31.5671283,
        longitud: -63.5153175
    },
    {
        id: 924,
        extinto: "JOSE  EDMUNDO  PAVON",
        nacimiento: "1939-03-15",
        defuncion: "2024-04-05",
        sector: "Sector Naranja",
        latitud: -31.5671395,
        longitud: -63.5153214
    },
    {
        id: 925,
        extinto: "JUAN RANULFO SOSA",
        nacimiento: "1952-02-22",
        defuncion: "2017-08-18",
        sector: "Sector Naranja",
        latitud: -31.5671732,
        longitud: -63.5153333
    },
    {
        id: 926,
        extinto: "RAMONA ETELVINA LUQUE",
        nacimiento: "1949-03-09",
        defuncion: "2022-04-19",
        sector: "Sector Naranja",
        latitud: -31.5671732,
        longitud: -63.5153333
    },
    {
        id: 927,
        extinto: "ANA  LEONOR  PIVATTO",
        nacimiento: "1946-06-28",
        defuncion: "2023-04-29",
        sector: "Sector Naranja",
        latitud: -31.5671844,
        longitud: -63.5153373
    },
    {
        id: 928,
        extinto: "LIRIA  FUNES DE GAITE",
        nacimiento: "1933-10-18",
        defuncion: "2016-04-22",
        sector: "Sector Naranja",
        latitud: -31.5671956,
        longitud: -63.5153413
    },
    {
        id: 929,
        extinto: "JOSE LUIS MARIA GAITE",
        nacimiento: "1917-01-06",
        defuncion: "2000-07-11",
        sector: "Sector Naranja",
        latitud: -31.5671956,
        longitud: -63.5153413
    },
    {
        id: 930,
        extinto: "JORGE  OMAR  VILLAFAÑE",
        nacimiento: "1958-06-16",
        defuncion: "2023-04-08",
        sector: "Sector Naranja",
        latitud: -31.5672069,
        longitud: -63.5153452
    },
    {
        id: 931,
        extinto: "GOTTARDELLO ALFREDO RAFAEL",
        nacimiento: "1944-09-10",
        defuncion: "2015-08-28",
        sector: "Sector Naranja",
        latitud: -31.5672181,
        longitud: -63.5153492
    },
    {
        id: 932,
        extinto: "HONG ELSA YOLANDA",
        nacimiento: "1930-01-25",
        defuncion: "2002-09-12",
        sector: "Sector Naranja",
        latitud: -31.5672293,
        longitud: -63.5153532
    },
    {
        id: 933,
        extinto: "HONG ILDA DORA",
        nacimiento: "2006-02-27",
        defuncion: "2006-02-27",
        sector: "Sector Naranja",
        latitud: -31.5672293,
        longitud: -63.5153532
    },
    {
        id: 934,
        extinto: "GOTTARDELLO EUGENIO PEDRO",
        nacimiento: "2006-02-27",
        defuncion: "2006-02-27",
        sector: "Sector Naranja",
        latitud: -31.5672293,
        longitud: -63.5153532
    },
    {
        id: 935,
        extinto: "VIRGOLINI LUIS ARTURO",
        nacimiento: "1944-05-28",
        defuncion: "2004-05-30",
        sector: "Sector Naranja",
        latitud: -31.5672630,
        longitud: -63.5153651
    },
    {
        id: 936,
        extinto: "PERALTA LAZARO OSCAR",
        nacimiento: "1912-12-17",
        defuncion: "2000-12-30",
        sector: "Sector Naranja",
        latitud: -31.5669315,
        longitud: -63.5152732
    },
    {
        id: 937,
        extinto: "VALENZUELA JUSTINA",
        nacimiento: "1937-11-30",
        defuncion: "2004-10-15",
        sector: "Sector Naranja",
        latitud: -31.5669315,
        longitud: -63.5152732
    },
    {
        id: 938,
        extinto: "MARIANO HERNAN GUARASCIO",
        nacimiento: "1984-08-30",
        defuncion: "2010-02-06",
        sector: "Sector Naranja",
        latitud: -31.5669428,
        longitud: -63.5152772
    },
    {
        id: 939,
        extinto: "GUARASCIO LUIS",
        nacimiento: "1957-03-12",
        defuncion: "2012-12-04",
        sector: "Sector Naranja",
        latitud: -31.5669428,
        longitud: -63.5152772
    },
    {
        id: 940,
        extinto: "ORBEGOSO ALBERTO VICTORIO",
        nacimiento: "1917-06-10",
        defuncion: "1978-08-02",
        sector: "Sector Naranja",
        latitud: -31.5669652,
        longitud: -63.5152851
    },
    {
        id: 941,
        extinto: "PEREZ CARMEN",
        nacimiento: "1923-01-05",
        defuncion: "1971-04-09",
        sector: "Sector Naranja",
        latitud: -31.5669652,
        longitud: -63.5152851
    },
    {
        id: 942,
        extinto: "IRMA LIRA ARGUELLO",
        nacimiento: "1928-12-04",
        defuncion: "2022-12-31",
        sector: "Sector Naranja",
        latitud: -31.5669764,
        longitud: -63.5152891
    },
    {
        id: 943,
        extinto: "RAMON LUIS AGUIRRE",
        nacimiento: "1927-12-20",
        defuncion: "2007-10-01",
        sector: "Sector Naranja",
        latitud: -31.5669764,
        longitud: -63.5152891
    },
    {
        id: 944,
        extinto: "JOSE URIBURU PASETTO",
        nacimiento: "1931-09-06",
        defuncion: "2021-05-29",
        sector: "Sector Naranja",
        latitud: -31.5669876,
        longitud: -63.5152931
    },
    {
        id: 945,
        extinto: "VICTORIO GOTTARDELLO",
        nacimiento: "2015-12-01",
        defuncion: "2015-12-01",
        sector: "Sector Naranja",
        latitud: -31.5669989,
        longitud: -63.5152970
    },
    {
        id: 946,
        extinto: "ROMANA ZORDAN",
        nacimiento: "2015-12-01",
        defuncion: "2015-12-01",
        sector: "Sector Naranja",
        latitud: -31.5669989,
        longitud: -63.5152970
    },
    {
        id: 947,
        extinto: "LUCARELLI CARLOS ALBERTO",
        nacimiento: "1920-01-20",
        defuncion: "1979-06-02",
        sector: "Sector Naranja",
        latitud: -31.5670101,
        longitud: -63.5153010
    },
    {
        id: 948,
        extinto: "ACOSTA FLORENCIA CATALINA",
        nacimiento: "1924-04-30",
        defuncion: "2014-01-24",
        sector: "Sector Naranja",
        latitud: -31.5670101,
        longitud: -63.5153010
    },
    {
        id: 949,
        extinto: "DURAN GERMAN ALEJANDRO",
        nacimiento: "1980-04-26",
        defuncion: "2012-08-19",
        sector: "Sector Naranja",
        latitud: -31.5670213,
        longitud: -63.5153050
    },
    {
        id: 950,
        extinto: "VICTORIA CATALINA LUCARELLI",
        nacimiento: "1955-01-08",
        defuncion: "2019-06-30",
        sector: "Sector Naranja",
        latitud: -31.5670213,
        longitud: -63.5153050
    },
    {
        id: 951,
        extinto: "LUCIANO JUAN VACA",
        nacimiento: "1936-11-02",
        defuncion: "2004-12-23",
        sector: "Sector Naranja",
        latitud: -31.5670550,
        longitud: -63.5153169
    },
    {
        id: 952,
        extinto: "ALBERTO VICENTE BERTOSSI",
        nacimiento: "1944-11-25",
        defuncion: "2022-04-15",
        sector: "Sector Naranja",
        latitud: -31.5670662,
        longitud: -63.5153208
    },
    {
        id: 953,
        extinto: "HUMBERTO JUAN VENCHIARUTTI",
        nacimiento: "1930-01-24",
        defuncion: "2021-09-14",
        sector: "Sector Naranja",
        latitud: -31.5670774,
        longitud: -63.5153248
    },
    {
        id: 954,
        extinto: "ELDA  INES  GIACOSSA",
        nacimiento: "1931-01-24",
        defuncion: "2024-05-03",
        sector: "Sector Naranja",
        latitud: -31.5670774,
        longitud: -63.5153248
    },
    {
        id: 955,
        extinto: "PAVON FELIX ERCOLINO",
        nacimiento: "1933-06-01",
        defuncion: "2000-03-09",
        sector: "Sector Naranja",
        latitud: -31.5670886,
        longitud: -63.5153288
    },
    {
        id: 956,
        extinto: "IRMA YOLANDA TAMAIN",
        nacimiento: "1937-05-23",
        defuncion: "2006-11-16",
        sector: "Sector Naranja",
        latitud: -31.5670999,
        longitud: -63.5153327
    },
    {
        id: 957,
        extinto: "INDALECIO FERNANDEZ",
        nacimiento: "1934-05-15",
        defuncion: "1997-06-05",
        sector: "Sector Naranja",
        latitud: -31.5670999,
        longitud: -63.5153327
    },
    {
        id: 958,
        extinto: "AGOSTINA DE LA CRUZ GAVIGLIO",
        nacimiento: "2021-08-13",
        defuncion: "2021-08-13",
        sector: "Sector Naranja",
        latitud: -31.5671223,
        longitud: -63.5153407
    },
    {
        id: 959,
        extinto: "MAXIMA DE LA CRUZ GAVIGLIO",
        nacimiento: "2021-08-13",
        defuncion: "2021-08-13",
        sector: "Sector Naranja",
        latitud: -31.5671223,
        longitud: -63.5153407
    },
    {
        id: 960,
        extinto: "RAMONA ILDA GALLARDO",
        nacimiento: "1932-01-20",
        defuncion: "2020-10-11",
        sector: "Sector Naranja",
        latitud: -31.5671335,
        longitud: -63.5153446
    },
    {
        id: 961,
        extinto: "JUAN PROSPERO CHARRAS",
        nacimiento: "1934-02-11",
        defuncion: "1975-12-15",
        sector: "Sector Naranja",
        latitud: -31.5671447,
        longitud: -63.5153486
    },
    {
        id: 962,
        extinto: "JUAN LUIS GUDIÑO",
        nacimiento: "1950-06-18",
        defuncion: "2020-09-20",
        sector: "Sector Naranja",
        latitud: -31.5671560,
        longitud: -63.5153526
    },
    {
        id: 963,
        extinto: "BUSTAMANTE MERCEDES DEL VALLE",
        nacimiento: "1951-06-08",
        defuncion: "2002-11-18",
        sector: "Sector Naranja",
        latitud: -31.5671672,
        longitud: -63.5153565
    },
    {
        id: 964,
        extinto: "HERMENEGILDO ANTONIO RODRIGUEZ",
        nacimiento: "1936-03-04",
        defuncion: "2020-01-01",
        sector: "Sector Naranja",
        latitud: -31.5671896,
        longitud: -63.5153645
    },
    {
        id: 965,
        extinto: "GAITE JORGE",
        nacimiento: "1923-03-18",
        defuncion: "1993-01-15",
        sector: "Sector Naranja",
        latitud: -31.5672009,
        longitud: -63.5153684
    },
    {
        id: 966,
        extinto: "GAITE FELIPE PEDRO",
        nacimiento: "1893-02-20",
        defuncion: "1966-09-16",
        sector: "Sector Naranja",
        latitud: -31.5672009,
        longitud: -63.5153684
    },
    {
        id: 967,
        extinto: "VICENTA GONZALEZ DE GAITE",
        nacimiento: "1885-01-01",
        defuncion: "1960-07-05",
        sector: "Sector Naranja",
        latitud: -31.5672009,
        longitud: -63.5153684
    },
    {
        id: 968,
        extinto: "GONZALEZ NORMA DEL ROSARIO",
        nacimiento: "1935-10-05",
        defuncion: "2013-07-30",
        sector: "Sector Naranja",
        latitud: -31.5672009,
        longitud: -63.5153684
    },
    {
        id: 969,
        extinto: "LUQUE HORACIO HECTOR",
        nacimiento: "1937-09-02",
        defuncion: "2011-01-15",
        sector: "Sector Naranja",
        latitud: -31.5672121,
        longitud: -63.5153724
    },
    {
        id: 970,
        extinto: "LORENZO RODOLFO ARGUELLO",
        nacimiento: "1940-03-07",
        defuncion: "2022-06-24",
        sector: "Sector Naranja",
        latitud: -31.5672233,
        longitud: -63.5153764
    },
    {
        id: 971,
        extinto: "DOLORES BENITO BRANDAN",
        nacimiento: "1922-04-10",
        defuncion: "1986-06-20",
        sector: "Sector Naranja",
        latitud: -31.5667910,
        longitud: -63.5152072
    },
    {
        id: 972,
        extinto: "LUISA JOSEFINA SORIA",
        nacimiento: "1928-06-21",
        defuncion: "2018-02-23",
        sector: "Sector Naranja",
        latitud: -31.5667910,
        longitud: -63.5152072
    },
    {
        id: 973,
        extinto: "NELIDA BEATRIZ BRANDAN",
        nacimiento: "2020-08-19",
        defuncion: "2020-08-19",
        sector: "Sector Naranja",
        latitud: -31.5667910,
        longitud: -63.5152072
    },
    {
        id: 974,
        extinto: "ROSA ELSA MENDOZA",
        nacimiento: "1986-11-04",
        defuncion: "2021-06-02",
        sector: "Sector Naranja",
        latitud: -31.5668195,
        longitud: -63.5152313
    },
    {
        id: 975,
        extinto: "GLADYS BEATRIZ ACUÑA",
        nacimiento: "1940-02-14",
        defuncion: "2021-07-04",
        sector: "Sector Naranja",
        latitud: -31.5668290,
        longitud: -63.5152394
    },
    {
        id: 976,
        extinto: "ALEJANDRO JOSE TISSERA",
        nacimiento: "1976-02-20",
        defuncion: "2021-07-05",
        sector: "Sector Naranja",
        latitud: -31.5668385,
        longitud: -63.5152474
    },
    {
        id: 977,
        extinto: "ORLANDO EXEQUIEL TISSERA",
        nacimiento: "1952-04-10",
        defuncion: "2000-05-10",
        sector: "Sector Naranja",
        latitud: -31.5668385,
        longitud: -63.5152474
    },
    {
        id: 978,
        extinto: "PERALTA JOSE ALBERTO",
        nacimiento: "1929-07-29",
        defuncion: "2011-11-07",
        sector: "Sector Naranja",
        latitud: -31.5668575,
        longitud: -63.5152634
    },
    {
        id: 979,
        extinto: "JUAN JOSE VELARDEZ",
        nacimiento: "1962-05-03",
        defuncion: "2020-01-24",
        sector: "Sector Naranja",
        latitud: -31.5668575,
        longitud: -63.5152634
    },
    {
        id: 980,
        extinto: "JUAN MANUEL VELARDEZ",
        nacimiento: "1988-02-07",
        defuncion: "1996-08-01",
        sector: "Sector Naranja",
        latitud: -31.5668575,
        longitud: -63.5152634
    },
    {
        id: 981,
        extinto: "JOSE ROBERTO FUENTES",
        nacimiento: "1955-05-13",
        defuncion: "2021-05-28",
        sector: "Sector Naranja",
        latitud: -31.5668670,
        longitud: -63.5152715
    },
    {
        id: 982,
        extinto: "EDIT DEL VALLE MUÑOZ",
        nacimiento: "2020-01-29",
        defuncion: "2020-01-29",
        sector: "Sector Naranja",
        latitud: -31.5668765,
        longitud: -63.5152795
    },
    {
        id: 983,
        extinto: "MILAGROS SUAREZ",
        nacimiento: "2008-11-26",
        defuncion: "2021-04-22",
        sector: "Sector Naranja",
        latitud: -31.5668860,
        longitud: -63.5152875
    },
    {
        id: 984,
        extinto: "PABLO LASTENIO ALGARBE",
        nacimiento: "1950-11-03",
        defuncion: "2021-06-16",
        sector: "Sector Naranja",
        latitud: -31.5668955,
        longitud: -63.5152956
    },
    {
        id: 985,
        extinto: "ANA MARIA CAPDEVILA",
        nacimiento: "1940-06-20",
        defuncion: "2021-06-18",
        sector: "Sector Naranja",
        latitud: -31.5669050,
        longitud: -63.5153036
    },
    {
        id: 986,
        extinto: "JUAN CARLOS BERTORELLO",
        nacimiento: "1952-06-30",
        defuncion: "2020-09-20",
        sector: "Sector Naranja",
        latitud: -31.5669430,
        longitud: -63.5153357
    },
    {
        id: 987,
        extinto: "ELVA TERESITA FONSECA",
        nacimiento: "1934-11-04",
        defuncion: "2021-03-30",
        sector: "Sector Naranja",
        latitud: -31.5669525,
        longitud: -63.5153438
    },
    {
        id: 988,
        extinto: "ALEJANDRO CARLOS ZOPPETTI",
        nacimiento: "1944-03-17",
        defuncion: "2020-12-12",
        sector: "Sector Naranja",
        latitud: -31.5669620,
        longitud: -63.5153518
    },
    {
        id: 989,
        extinto: "TELMO ELSO TEJEDA",
        nacimiento: "1938-03-24",
        defuncion: "2019-12-11",
        sector: "Sector Naranja",
        latitud: -31.5669715,
        longitud: -63.5153598
    },
    {
        id: 990,
        extinto: "PEDRO DANIEL PERALTA",
        nacimiento: "1958-03-24",
        defuncion: "2020-11-22",
        sector: "Sector Naranja",
        latitud: -31.5669810,
        longitud: -63.5153679
    },
    {
        id: 991,
        extinto: "PEDRO SIMON GOMEZ",
        nacimiento: "1933-08-06",
        defuncion: "2020-11-07",
        sector: "Sector Naranja",
        latitud: -31.5669904,
        longitud: -63.5153759
    },
    {
        id: 992,
        extinto: "MARIA VIRGINIA CASTILLO",
        nacimiento: "1933-01-01",
        defuncion: "2021-12-05",
        sector: "Sector Naranja",
        latitud: -31.5669904,
        longitud: -63.5153759
    },
    {
        id: 993,
        extinto: "SERGIO FABIAN MANSILLA",
        nacimiento: "1966-02-27",
        defuncion: "2020-11-29",
        sector: "Sector Naranja",
        latitud: -31.5669999,
        longitud: -63.5153839
    },
    {
        id: 994,
        extinto: "OMAR DIONISIO ALVAREZ",
        nacimiento: "1953-04-08",
        defuncion: "2020-07-10",
        sector: "Sector Naranja",
        latitud: -31.5667884,
        longitud: -63.5152349
    },
    {
        id: 995,
        extinto: "CLAUDIA ROSA TISSERA",
        nacimiento: "1919-10-30",
        defuncion: "2020-08-05",
        sector: "Sector Naranja",
        latitud: -31.5667884,
        longitud: -63.5152349
    },
    {
        id: 996,
        extinto: "JOSE IGNACIO ALVAREZ",
        nacimiento: "1912-07-12",
        defuncion: "1960-07-09",
        sector: "Sector Naranja",
        latitud: -31.5667884,
        longitud: -63.5152349
    },
    {
        id: 997,
        extinto: "CIRILO ANTONIO SOSA",
        nacimiento: "1929-03-19",
        defuncion: "2020-08-17",
        sector: "Sector Naranja",
        latitud: -31.5667884,
        longitud: -63.5152349
    },
    {
        id: 998,
        extinto: "PEDRO ALEJANDRO TAMAGNINI",
        nacimiento: "1947-06-30",
        defuncion: "2020-05-22",
        sector: "Sector Naranja",
        latitud: -31.5667979,
        longitud: -63.5152429
    },
    {
        id: 999,
        extinto: "ROSA ANTONIA NISTAL",
        nacimiento: "1966-12-17",
        defuncion: "2020-02-05",
        sector: "Sector Naranja",
        latitud: -31.5668074,
        longitud: -63.5152509
    },
    {
        id: 1000,
        extinto: "RAUL EDUARDO SARMIENTO",
        nacimiento: "1968-01-18",
        defuncion: "2021-05-16",
        sector: "Sector Naranja",
        latitud: -31.5668074,
        longitud: -63.5152509
    },
    {
        id: 1001,
        extinto: "ROSA  ALINDA TABORDA",
        nacimiento: "1949-11-02",
        defuncion: "2019-04-21",
        sector: "Sector Naranja",
        latitud: -31.5668264,
        longitud: -63.5152670
    },
    {
        id: 1002,
        extinto: "DANIEL ROBERTO RE",
        nacimiento: "1961-09-17",
        defuncion: "2020-03-29",
        sector: "Sector Naranja",
        latitud: -31.5668358,
        longitud: -63.5152750
    },
    {
        id: 1003,
        extinto: "ROBERTO ROSADO",
        nacimiento: "1950-05-25",
        defuncion: "2020-01-16",
        sector: "Sector Naranja",
        latitud: -31.5668548,
        longitud: -63.5152911
    },
    {
        id: 1004,
        extinto: "ROSA LIDIA HERRERA",
        nacimiento: "1925-03-31",
        defuncion: "2018-05-17",
        sector: "Sector Naranja",
        latitud: -31.5668643,
        longitud: -63.5152991
    },
    {
        id: 1005,
        extinto: "RAMON ENRIQUE GONZALEZ",
        nacimiento: "1966-11-04",
        defuncion: "2018-05-05",
        sector: "Sector Naranja",
        latitud: -31.5668738,
        longitud: -63.5153072
    },
    {
        id: 1006,
        extinto: "LAURA  TERESITA  GAZZERA",
        nacimiento: "1965-01-23",
        defuncion: "2023-12-21",
        sector: "Sector Naranja",
        latitud: -31.5668833,
        longitud: -63.5153152
    },
    {
        id: 1007,
        extinto: "MONICA BETRIZ COLAZO",
        nacimiento: "1965-11-30",
        defuncion: "2018-08-21",
        sector: "Sector Naranja",
        latitud: -31.5668928,
        longitud: -63.5153232
    },
    {
        id: 1008,
        extinto: "CLAUDIA JOSEFINA TABORDA",
        nacimiento: "1991-05-01",
        defuncion: "2021-07-05",
        sector: "Sector Naranja",
        latitud: -31.5669023,
        longitud: -63.5153313
    },
    {
        id: 1009,
        extinto: "ELSA JOSEFINA SMIT",
        nacimiento: "1955-03-17",
        defuncion: "2023-09-07",
        sector: "Sector Naranja",
        latitud: -31.5669023,
        longitud: -63.5153313
    },
    {
        id: 1010,
        extinto: "PEDRO VALLS",
        nacimiento: "1900-01-19",
        defuncion: "1980-09-12",
        sector: "Sector Naranja",
        latitud: -31.5669118,
        longitud: -63.5153393
    },
    {
        id: 1011,
        extinto: "ROSA CUGAT DE BALLS",
        nacimiento: "1900-05-03",
        defuncion: "1963-05-18",
        sector: "Sector Naranja",
        latitud: -31.5669118,
        longitud: -63.5153393
    },
    {
        id: 1012,
        extinto: "ANGELA BALLS",
        nacimiento: "1921-04-30",
        defuncion: "2002-07-28",
        sector: "Sector Naranja",
        latitud: -31.5669118,
        longitud: -63.5153393
    },
    {
        id: 1013,
        extinto: "HIPOLITO BALLS",
        nacimiento: "1929-03-12",
        defuncion: "1994-03-11",
        sector: "Sector Naranja",
        latitud: -31.5669118,
        longitud: -63.5153393
    },
    {
        id: 1014,
        extinto: "ETTLIN ERNESTO JUAN",
        nacimiento: "1934-12-13",
        defuncion: "2017-08-13",
        sector: "Sector Naranja",
        latitud: -31.5669213,
        longitud: -63.5153473
    },
    {
        id: 1015,
        extinto: "ANGELICA ALICIA TAMBORINI",
        nacimiento: "1940-04-06",
        defuncion: "2012-05-15",
        sector: "Sector Naranja",
        latitud: -31.5669308,
        longitud: -63.5153554
    },
    {
        id: 1016,
        extinto: "OLGA TERESA SAVINI",
        nacimiento: "1939-03-03",
        defuncion: "2018-04-04",
        sector: "Sector Naranja",
        latitud: -31.5669403,
        longitud: -63.5153634
    },
    {
        id: 1017,
        extinto: "TRINIDAD ORBEZ",
        nacimiento: "1937-04-15",
        defuncion: "2019-07-05",
        sector: "Sector Naranja",
        latitud: -31.5669498,
        longitud: -63.5153714
    },
    {
        id: 1018,
        extinto: "JOSE OSVALDO MONTE",
        nacimiento: "1954-01-10",
        defuncion: "2018-03-19",
        sector: "Sector Naranja",
        latitud: -31.5669593,
        longitud: -63.5153794
    },
    {
        id: 1019,
        extinto: "CARANDINO ELVIO FELIZ",
        nacimiento: "1947-05-25",
        defuncion: "2013-10-19",
        sector: "Sector Naranja",
        latitud: -31.5669688,
        longitud: -63.5153875
    },
    {
        id: 1020,
        extinto: "CARANDINI VICTOR BARTOLO",
        nacimiento: "1953-06-20",
        defuncion: "2012-09-27",
        sector: "Sector Naranja",
        latitud: -31.5669688,
        longitud: -63.5153875
    },
    {
        id: 1021,
        extinto: "AGUIAR CLARA GUILLERMINA",
        nacimiento: "1919-07-22",
        defuncion: "2009-06-15",
        sector: "Sector Naranja",
        latitud: -31.5669878,
        longitud: -63.5154035
    },
    {
        id: 1022,
        extinto: "PEREZ NELIDA CARMINDA",
        nacimiento: "1940-12-21",
        defuncion: "2002-12-17",
        sector: "Sector Naranja",
        latitud: -31.5670155,
        longitud: -63.5153983
    },
    {
        id: 1023,
        extinto: "RAUL OSVALDO TAMAIN",
        nacimiento: "1910-05-19",
        defuncion: "1970-02-02",
        sector: "Sector Naranja",
        latitud: -31.5670250,
        longitud: -63.5154063
    },
    {
        id: 1024,
        extinto: "SILVANA TRANSITO ALGARBE",
        nacimiento: "1916-09-04",
        defuncion: "1972-06-22",
        sector: "Sector Naranja",
        latitud: -31.5670250,
        longitud: -63.5154063
    },
    {
        id: 1025,
        extinto: "TAMAIN JUAN HECTOR",
        nacimiento: "1947-07-03",
        defuncion: "2015-06-13",
        sector: "Sector Naranja",
        latitud: -31.5670344,
        longitud: -63.5154144
    },
    {
        id: 1026,
        extinto: "MARTIN ERNESTO AGUIRRE",
        nacimiento: "1913-11-11",
        defuncion: "1989-03-13",
        sector: "Sector Naranja",
        latitud: -31.5670344,
        longitud: -63.5154144
    },
    {
        id: 1027,
        extinto: "CONTRERAS FACUNDO",
        nacimiento: "2004-03-31",
        defuncion: "2004-04-01",
        sector: "Sector Naranja",
        latitud: -31.5670439,
        longitud: -63.5154224
    },
    {
        id: 1028,
        extinto: "CONTRERAS FRANCISCO",
        nacimiento: "2004-03-31",
        defuncion: "2004-03-31",
        sector: "Sector Naranja",
        latitud: -31.5670439,
        longitud: -63.5154224
    },
    {
        id: 1029,
        extinto: "CANCIANI EDEL",
        nacimiento: "1925-12-07",
        defuncion: "2015-08-22",
        sector: "Sector Naranja",
        latitud: -31.5670534,
        longitud: -63.5154305
    },
    {
        id: 1030,
        extinto: "ANA MARIA TAURIAN",
        nacimiento: "1946-12-18",
        defuncion: "2022-12-30",
        sector: "Sector Naranja",
        latitud: -31.5670534,
        longitud: -63.5154305
    },
    {
        id: 1031,
        extinto: "MOLINA CALIXTO CARLOS",
        nacimiento: "1924-10-14",
        defuncion: "2013-10-08",
        sector: "Sector Naranja",
        latitud: -31.5670629,
        longitud: -63.5154385
    },
    {
        id: 1032,
        extinto: "SANCHEZ MARIA LUISA",
        nacimiento: "1926-10-11",
        defuncion: "1999-12-03",
        sector: "Sector Naranja",
        latitud: -31.5670629,
        longitud: -63.5154385
    },
    {
        id: 1033,
        extinto: "ROUCO ESTELA SUSANA",
        nacimiento: "1955-11-18",
        defuncion: "2004-08-26",
        sector: "Sector Naranja",
        latitud: -31.5670724,
        longitud: -63.5154466
    },
    {
        id: 1034,
        extinto: "GAMERO MARIA ISABEL",
        nacimiento: "1924-09-16",
        defuncion: "2004-11-13",
        sector: "Sector Naranja",
        latitud: -31.5670724,
        longitud: -63.5154466
    },
    {
        id: 1035,
        extinto: "NORA ISABEL ROUCO",
        nacimiento: "1950-10-07",
        defuncion: "2019-03-24",
        sector: "Sector Naranja",
        latitud: -31.5670724,
        longitud: -63.5154466
    },
    {
        id: 1036,
        extinto: "PICCA JOSE RAMON",
        nacimiento: "1940-09-26",
        defuncion: "2016-01-26",
        sector: "Sector Naranja",
        latitud: -31.5670818,
        longitud: -63.5154547
    },
    {
        id: 1037,
        extinto: "MARTA DELIA ALBERICHI",
        nacimiento: "1944-01-07",
        defuncion: "2020-02-28",
        sector: "Sector Naranja",
        latitud: -31.5670818,
        longitud: -63.5154547
    },
    {
        id: 1038,
        extinto: "VAZQUEZ JOSE SAUL",
        nacimiento: "1940-09-19",
        defuncion: "2002-09-02",
        sector: "Sector Naranja",
        latitud: -31.5670913,
        longitud: -63.5154627
    },
    {
        id: 1039,
        extinto: "GONZALO NICOLAS VAZQUEZ",
        nacimiento: "1997-07-25",
        defuncion: "2017-03-01",
        sector: "Sector Naranja",
        latitud: -31.5670913,
        longitud: -63.5154627
    },
    {
        id: 1040,
        extinto: "BERRONE LORENZO ABEL",
        nacimiento: "1921-12-17",
        defuncion: "2001-02-08",
        sector: "Sector Naranja",
        latitud: -31.5670033,
        longitud: -63.5154179
    },
    {
        id: 1041,
        extinto: "BRUN JOSEFA MAGDALENA",
        nacimiento: "1925-11-27",
        defuncion: "2012-03-20",
        sector: "Sector Naranja",
        latitud: -31.5670033,
        longitud: -63.5154179
    },
    {
        id: 1042,
        extinto: "MARTA  HERMILDA  BERRONE",
        nacimiento: "1946-04-13",
        defuncion: "2023-03-25",
        sector: "Sector Naranja",
        latitud: -31.5670033,
        longitud: -63.5154179
    },
    {
        id: 1043,
        extinto: "ALVAREZ GERMAN ALBERTO",
        nacimiento: "1983-07-18",
        defuncion: "2009-10-03",
        sector: "Sector Naranja",
        latitud: -31.5670128,
        longitud: -63.5154259
    },
    {
        id: 1044,
        extinto: "CELESTINA NISTAL",
        nacimiento: "1933-01-20",
        defuncion: "2019-03-23",
        sector: "Sector Naranja",
        latitud: -31.5670128,
        longitud: -63.5154259
    },
    {
        id: 1045,
        extinto: "CARLOS ALBERTO ALVAREZ",
        nacimiento: "1959-02-10",
        defuncion: "2022-09-08",
        sector: "Sector Naranja",
        latitud: -31.5670128,
        longitud: -63.5154259
    },
    {
        id: 1046,
        extinto: "MACARIO ROMAN ALVAREZ",
        nacimiento: "1925-02-28",
        defuncion: "1998-09-25",
        sector: "Sector Naranja",
        latitud: -31.5670222,
        longitud: -63.5154340
    },
    {
        id: 1047,
        extinto: "ELBA ROSA FERREYRA",
        nacimiento: "1928-07-25",
        defuncion: "2014-07-09",
        sector: "Sector Naranja",
        latitud: -31.5670222,
        longitud: -63.5154340
    },
    {
        id: 1048,
        extinto: "BAILI ANDREA VERONICA",
        nacimiento: "1973-11-04",
        defuncion: "2014-08-17",
        sector: "Sector Naranja",
        latitud: -31.5670317,
        longitud: -63.5154420
    },
    {
        id: 1049,
        extinto: "VILLAFAÑE RUBEN ABELARDO",
        nacimiento: "1949-03-01",
        defuncion: "2002-08-10",
        sector: "Sector Naranja",
        latitud: -31.5670507,
        longitud: -63.5154581
    },
    {
        id: 1050,
        extinto: "VILLAFAÑE PABLA TERESA DE",
        nacimiento: "1906-07-07",
        defuncion: "2004-08-28",
        sector: "Sector Naranja",
        latitud: -31.5670507,
        longitud: -63.5154581
    },
    {
        id: 1051,
        extinto: "VILLAFAÑE MIGUEL ANGEL",
        nacimiento: "1933-09-29",
        defuncion: "2014-09-12",
        sector: "Sector Naranja",
        latitud: -31.5670507,
        longitud: -63.5154581
    },
    {
        id: 1052,
        extinto: "MOLINA ADOLFO LEONARDO",
        nacimiento: "1926-07-03",
        defuncion: "2000-08-16",
        sector: "Sector Naranja",
        latitud: -31.5670602,
        longitud: -63.5154662
    },
    {
        id: 1053,
        extinto: "DONDO DELQUI JOSE",
        nacimiento: "1960-07-31",
        defuncion: "2006-03-11",
        sector: "Sector Naranja",
        latitud: -31.5670696,
        longitud: -63.5154742
    },
    {
        id: 1054,
        extinto: "IRENE ROSA CRETTINO",
        nacimiento: "1928-11-15",
        defuncion: "2007-10-04",
        sector: "Sector Naranja",
        latitud: -31.5670696,
        longitud: -63.5154742
    },
    {
        id: 1055,
        extinto: "CILDO BENITO DONDO",
        nacimiento: "1928-02-01",
        defuncion: "2011-08-30",
        sector: "Sector Naranja",
        latitud: -31.5670696,
        longitud: -63.5154742
    },
    {
        id: 1056,
        extinto: "ABATI DAVID",
        nacimiento: "1935-10-10",
        defuncion: "1975-06-08",
        sector: "Sector Naranja",
        latitud: -31.5670791,
        longitud: -63.5154823
    },
    {
        id: 1057,
        extinto: "SANTOS JORGE ALBERTO",
        nacimiento: "1923-02-14",
        defuncion: "2001-08-28",
        sector: "Sector Rosa",
        latitud: -31.5672973,
        longitud: -63.5153603
    },
    {
        id: 1058,
        extinto: "CLARA TERESA BERGES",
        nacimiento: "1927-06-07",
        defuncion: "2010-07-18",
        sector: "Sector Rosa",
        latitud: -31.5672973,
        longitud: -63.5153603
    },
    {
        id: 1059,
        extinto: "SOSA ROBERTO JOSE",
        nacimiento: "1957-03-23",
        defuncion: "2015-03-09",
        sector: "Sector Rosa",
        latitud: -31.5673167,
        longitud: -63.5153689
    },
    {
        id: 1060,
        extinto: "LUDUEÑA ALBERTO JOES",
        nacimiento: "1934-11-28",
        defuncion: "2015-03-12",
        sector: "Sector Rosa",
        latitud: -31.5672932,
        longitud: -63.5153731
    },
    {
        id: 1061,
        extinto: "MERCEDES SEGOVIA",
        nacimiento: "1944-09-11",
        defuncion: "2022-10-10",
        sector: "Sector Rosa",
        latitud: -31.5672932,
        longitud: -63.5153731
    },
    {
        id: 1062,
        extinto: "SOSA MANUEL GREGORIO",
        nacimiento: "1936-05-23",
        defuncion: "2013-08-10",
        sector: "Sector Rosa",
        latitud: -31.5673126,
        longitud: -63.5153817
    },
    {
        id: 1063,
        extinto: "IRMA MICAELA CHIABRANDO",
        nacimiento: "1927-07-14",
        defuncion: "2010-05-21",
        sector: "Sector Rosa",
        latitud: -31.5672890,
        longitud: -63.5153859
    },
    {
        id: 1064,
        extinto: "DEL PINO ESTEBAN JAVIER",
        nacimiento: "1919-08-03",
        defuncion: "1995-12-22",
        sector: "Sector Rosa",
        latitud: -31.5673084,
        longitud: -63.5153945
    },
    {
        id: 1065,
        extinto: "DEL PINO CARLOS ALBERTO",
        nacimiento: "1956-05-19",
        defuncion: "2016-01-27",
        sector: "Sector Rosa",
        latitud: -31.5673084,
        longitud: -63.5153945
    },
    {
        id: 1066,
        extinto: "ALVAREZ SERAFIN TIMOTEO",
        nacimiento: "1914-08-22",
        defuncion: "1976-03-25",
        sector: "Sector Rosa",
        latitud: -31.5672848,
        longitud: -63.5153987
    },
    {
        id: 1067,
        extinto: "MONCADA ELSA JOSEFINA",
        nacimiento: "1924-05-19",
        defuncion: "1991-10-08",
        sector: "Sector Rosa",
        latitud: -31.5672848,
        longitud: -63.5153987
    },
    {
        id: 1068,
        extinto: "PINOTTI MIGUEL JOAQUIN",
        nacimiento: "1917-08-19",
        defuncion: "2006-06-24",
        sector: "Sector Rosa",
        latitud: -31.5673042,
        longitud: -63.5154073
    },
    {
        id: 1069,
        extinto: "BERRONE FLORINDA MARIA",
        nacimiento: "1929-12-14",
        defuncion: "2017-05-05",
        sector: "Sector Rosa",
        latitud: -31.5673042,
        longitud: -63.5154073
    },
    {
        id: 1070,
        extinto: "CHIABRANDO ALIDA M.",
        nacimiento: "1933-09-14",
        defuncion: "2007-09-20",
        sector: "Sector Rosa",
        latitud: -31.5672807,
        longitud: -63.5154115
    },
    {
        id: 1071,
        extinto: "VALIENTE NEMESIO FRANCISCO",
        nacimiento: "1928-03-17",
        defuncion: "2012-08-29",
        sector: "Sector Rosa",
        latitud: -31.5672807,
        longitud: -63.5154115
    },
    {
        id: 1072,
        extinto: "PEREZ JUAN BONIFACIO",
        nacimiento: "1944-05-08",
        defuncion: "2014-06-23",
        sector: "Sector Rosa",
        latitud: -31.5672765,
        longitud: -63.5154243
    },
    {
        id: 1073,
        extinto: "DEFAGOT JUAN CARLOS",
        nacimiento: "1948-08-31",
        defuncion: "2000-07-10",
        sector: "Sector Rosa",
        latitud: -31.5672959,
        longitud: -63.5154329
    },
    {
        id: 1074,
        extinto: "DEL PINO JOSE LUIS",
        nacimiento: "1962-12-03",
        defuncion: "2006-07-03",
        sector: "Sector Rosa",
        latitud: -31.5672724,
        longitud: -63.5154371
    },
    {
        id: 1075,
        extinto: "RAUL MARTIN ADOLFO CARRANZA",
        nacimiento: "1962-10-13",
        defuncion: "2009-02-18",
        sector: "Sector Rosa",
        latitud: -31.5672917,
        longitud: -63.5154457
    },
    {
        id: 1076,
        extinto: "ROBERTO LORENZO GIULIANI",
        nacimiento: "1940-01-14",
        defuncion: "2011-02-13",
        sector: "Sector Rosa",
        latitud: -31.5673751,
        longitud: -63.5153380
    },
    {
        id: 1077,
        extinto: "LOPEZ DE GIULIANI MARIA ELENA",
        nacimiento: "1909-04-02",
        defuncion: "1999-09-11",
        sector: "Sector Rosa",
        latitud: -31.5674027,
        longitud: -63.5153509
    },
    {
        id: 1078,
        extinto: "GIULIANI LORENZO",
        nacimiento: "1913-08-10",
        defuncion: "1980-09-18",
        sector: "Sector Rosa",
        latitud: -31.5674027,
        longitud: -63.5153509
    },
    {
        id: 1079,
        extinto: "LEIVA JULIO ERNESTO",
        nacimiento: "1946-06-11",
        defuncion: "2013-08-29",
        sector: "Sector Rosa",
        latitud: -31.5674220,
        longitud: -63.5153600
    },
    {
        id: 1080,
        extinto: "SCARABOTTI LUIS GERARDO",
        nacimiento: "1965-03-01",
        defuncion: "2002-01-18",
        sector: "Sector Rosa",
        latitud: -31.5673516,
        longitud: -63.5153422
    },
    {
        id: 1081,
        extinto: "JUAN ROMULO VELAZQUEZ",
        nacimiento: "1943-07-10",
        defuncion: "2019-08-18",
        sector: "Sector Rosa",
        latitud: -31.5673709,
        longitud: -63.5153508
    },
    {
        id: 1082,
        extinto: "RODRIGUEZ EDUARDO EDUBILLO",
        nacimiento: "1938-10-13",
        defuncion: "2003-02-03",
        sector: "Sector Rosa",
        latitud: -31.5674176,
        longitud: -63.5153727
    },
    {
        id: 1083,
        extinto: "NORMA VIVIANA LOZA",
        nacimiento: "1941-09-01",
        defuncion: "2021-07-26",
        sector: "Sector Rosa",
        latitud: -31.5674176,
        longitud: -63.5153727
    },
    {
        id: 1084,
        extinto: "GRASSO FRANCISCO BLAS",
        nacimiento: "1919-02-03",
        defuncion: "2016-07-10",
        sector: "Sector Rosa",
        latitud: -31.5674468,
        longitud: -63.5153728
    },
    {
        id: 1085,
        extinto: "GRASSO MARTIN EMETERIO",
        nacimiento: "1923-03-03",
        defuncion: "2001-12-03",
        sector: "Sector Rosa",
        latitud: -31.5673474,
        longitud: -63.5153550
    },
    {
        id: 1086,
        extinto: "MARIA ROMELIA FRIAS",
        nacimiento: "1931-07-06",
        defuncion: "2020-12-01",
        sector: "Sector Rosa",
        latitud: -31.5673474,
        longitud: -63.5153550
    },
    {
        id: 1087,
        extinto: "PEREZ NICOLAS HUGO",
        nacimiento: "2013-04-18",
        defuncion: "2013-04-18",
        sector: "Sector Rosa",
        latitud: -31.5673668,
        longitud: -63.5153636
    },
    {
        id: 1088,
        extinto: "ELVA YOLANDA SISTERNA",
        nacimiento: "1945-06-11",
        defuncion: "2021-06-21",
        sector: "Sector Rosa",
        latitud: -31.5673939,
        longitud: -63.5153765
    },
    {
        id: 1089,
        extinto: "LUIS RAMON MANICERO",
        nacimiento: "1934-05-09",
        defuncion: "2012-12-03",
        sector: "Sector Rosa",
        latitud: -31.5673939,
        longitud: -63.5153765
    },
    {
        id: 1090,
        extinto: "CRISTIAN OSCAR BUSTILLO",
        nacimiento: "1973-10-04",
        defuncion: "2021-08-01",
        sector: "Sector Rosa",
        latitud: -31.5674133,
        longitud: -63.5153854
    },
    {
        id: 1091,
        extinto: "JUAREZ DARIO SEBASTIAN",
        nacimiento: "1983-08-08",
        defuncion: "2006-06-24",
        sector: "Sector Rosa",
        latitud: -31.5674377,
        longitud: -63.5153980
    },
    {
        id: 1092,
        extinto: "GALLIANO ADELMA",
        nacimiento: "1937-08-22",
        defuncion: "2016-11-12",
        sector: "Sector Rosa",
        latitud: -31.5673626,
        longitud: -63.5153764
    },
    {
        id: 1093,
        extinto: "HUGO OSCAR PEREZ",
        nacimiento: "1943-11-09",
        defuncion: "2019-09-11",
        sector: "Sector Rosa",
        latitud: -31.5673626,
        longitud: -63.5153764
    },
    {
        id: 1094,
        extinto: "IRALDO DAVID ORTIZ",
        nacimiento: "1947-02-15",
        defuncion: "2016-08-30",
        sector: "Sector Rosa",
        latitud: -31.5673897,
        longitud: -63.5153893
    },
    {
        id: 1095,
        extinto: "JOSE PINOS CUGAT",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674331,
        longitud: -63.5154106
    },
    {
        id: 1096,
        extinto: "NIEVE PINOS CUGAT",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674331,
        longitud: -63.5154106
    },
    {
        id: 1097,
        extinto: "JOSE PINOS",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674331,
        longitud: -63.5154106
    },
    {
        id: 1098,
        extinto: "JUAN PINOS",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674331,
        longitud: -63.5154106
    },
    {
        id: 1099,
        extinto: "VICTORIA CUGAT",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674331,
        longitud: -63.5154106
    },
    {
        id: 1100,
        extinto: "PINOTTI NATALIA SOLEDAD",
        nacimiento: "1993-10-16",
        defuncion: "1993-10-16",
        sector: "Sector Rosa",
        latitud: -31.5673390,
        longitud: -63.5153806
    },
    {
        id: 1101,
        extinto: "ANA MARIA LITVACK",
        nacimiento: "1956-08-13",
        defuncion: "2018-10-11",
        sector: "Sector Rosa",
        latitud: -31.5673584,
        longitud: -63.5153892
    },
    {
        id: 1102,
        extinto: "BESSONE SARA",
        nacimiento: "1929-09-02",
        defuncion: "2014-10-17",
        sector: "Sector Rosa",
        latitud: -31.5673853,
        longitud: -63.5154018
    },
    {
        id: 1103,
        extinto: "BEATRIZ NOEMI SARMIENTO",
        nacimiento: "1950-12-31",
        defuncion: "2022-02-20",
        sector: "Sector Rosa",
        latitud: -31.5674045,
        longitud: -63.5154108
    },
    {
        id: 1104,
        extinto: "TERESA CUGAT DE PINOS",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674285,
        longitud: -63.5154233
    },
    {
        id: 1105,
        extinto: "PABLO PINOS",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674285,
        longitud: -63.5154233
    },
    {
        id: 1106,
        extinto: "JAIME PINOS",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674285,
        longitud: -63.5154233
    },
    {
        id: 1107,
        extinto: "TERESA PINOS",
        nacimiento: "2007-05-07",
        defuncion: "2007-05-07",
        sector: "Sector Rosa",
        latitud: -31.5674285,
        longitud: -63.5154233
    },
    {
        id: 1108,
        extinto: "PIRCHI JORGE DANIEL",
        nacimiento: "1985-04-19",
        defuncion: "2003-11-29",
        sector: "Sector Rosa",
        latitud: -31.5673349,
        longitud: -63.5153933
    },
    {
        id: 1109,
        extinto: "GRACIELA DEL VALLE VILLAFAÑE",
        nacimiento: "1960-06-20",
        defuncion: "2021-08-14",
        sector: "Sector Rosa",
        latitud: -31.5673349,
        longitud: -63.5153933
    },
    {
        id: 1110,
        extinto: "ILDA CAROLINA CARANDINO",
        nacimiento: "1939-08-17",
        defuncion: "2020-07-13",
        sector: "Sector Rosa",
        latitud: -31.5673543,
        longitud: -63.5154020
    },
    {
        id: 1111,
        extinto: "JUAN LUIS F , VAZQUEZ",
        nacimiento: "1941-02-20",
        defuncion: "1992-01-04",
        sector: "Sector Rosa",
        latitud: -31.5673809,
        longitud: -63.5154145
    },
    {
        id: 1112,
        extinto: "ELVIRA MARTINA SALGADO",
        nacimiento: "1953-01-25",
        defuncion: "2022-10-28",
        sector: "Sector Rosa",
        latitud: -31.5674002,
        longitud: -63.5154235
    },
    {
        id: 1113,
        extinto: "PEREZ NESTOR RUBEN",
        nacimiento: "1928-02-12",
        defuncion: "2004-06-19",
        sector: "Sector Rosa",
        latitud: -31.5674239,
        longitud: -63.5154359
    },
    {
        id: 1114,
        extinto: "NILDA  ROSA  PEREZ",
        nacimiento: "1931-09-18",
        defuncion: "2023-06-16",
        sector: "Sector Rosa",
        latitud: -31.5674239,
        longitud: -63.5154359
    },
    {
        id: 1115,
        extinto: "ELSA JOSEFINA PEREZ",
        nacimiento: "1935-01-07",
        defuncion: "2023-11-06",
        sector: "Sector Rosa",
        latitud: -31.5674239,
        longitud: -63.5154359
    },
    {
        id: 1116,
        extinto: "BERNARDO ABEL DELFINO",
        nacimiento: "1935-08-11",
        defuncion: "2013-06-19",
        sector: "Sector Rosa",
        latitud: -31.5673307,
        longitud: -63.5154061
    },
    {
        id: 1117,
        extinto: "HERMANN JUAN ALBERTO",
        nacimiento: "1940-04-28",
        defuncion: "2012-01-05",
        sector: "Sector Rosa",
        latitud: -31.5673501,
        longitud: -63.5154148
    },
    {
        id: 1118,
        extinto: "AGUERO ELIDA RAQUEL",
        nacimiento: "1941-01-08",
        defuncion: "2001-06-06",
        sector: "Sector Rosa",
        latitud: -31.5674194,
        longitud: -63.5154485
    },
    {
        id: 1119,
        extinto: "MOREYRA RENE FRANCISCO",
        nacimiento: "1959-06-05",
        defuncion: "2016-11-20",
        sector: "Sector Rosa",
        latitud: -31.5674194,
        longitud: -63.5154485
    },
    {
        id: 1120,
        extinto: "VILLAFAÑE OSCAR",
        nacimiento: "1956-05-04",
        defuncion: "2005-07-21",
        sector: "Sector Rosa",
        latitud: -31.5673265,
        longitud: -63.5154190
    },
    {
        id: 1121,
        extinto: "VILLAFAÑE PIO OSCAR",
        nacimiento: "1926-05-05",
        defuncion: "2014-09-18",
        sector: "Sector Rosa",
        latitud: -31.5673265,
        longitud: -63.5154190
    },
    {
        id: 1122,
        extinto: "ZULEMA  RAMONA  AIDA  LIENDO",
        nacimiento: "1932-03-12",
        defuncion: "2023-06-29",
        sector: "Sector Rosa",
        latitud: -31.5673265,
        longitud: -63.5154190
    },
    {
        id: 1123,
        extinto: "ELIAS NOE ALVAREZ",
        nacimiento: "1995-09-13",
        defuncion: "2021-05-14",
        sector: "Sector Rosa",
        latitud: -31.5673459,
        longitud: -63.5154276
    },
    {
        id: 1124,
        extinto: "FRANCIS EZEQUIEL ALVAREZ",
        nacimiento: "1993-12-14",
        defuncion: "1994-07-17",
        sector: "Sector Rosa",
        latitud: -31.5673459,
        longitud: -63.5154276
    },
    {
        id: 1125,
        extinto: "AGUEDA GALLO",
        nacimiento: "1924-02-06",
        defuncion: "2007-10-23",
        sector: "Sector Rosa",
        latitud: -31.5673914,
        longitud: -63.5154489
    },
    {
        id: 1126,
        extinto: "RODRIGUEZ ANDRES MARTIN",
        nacimiento: "1922-03-11",
        defuncion: "1999-03-07",
        sector: "Sector Rosa",
        latitud: -31.5673914,
        longitud: -63.5154489
    },
    {
        id: 1127,
        extinto: "ZULMA T SABADILLA",
        nacimiento: "1955-10-20",
        defuncion: "1987-03-28",
        sector: "Sector Rosa",
        latitud: -31.5674148,
        longitud: -63.5154611
    },
    {
        id: 1128,
        extinto: "SERGIO ALEJANDRO MATOS",
        nacimiento: "1978-05-25",
        defuncion: "1999-03-07",
        sector: "Sector Rosa",
        latitud: -31.5674148,
        longitud: -63.5154611
    },
    {
        id: 1129,
        extinto: "CASANOVES JOSE",
        nacimiento: "2009-09-24",
        defuncion: "2009-09-24",
        sector: "Sector Rosa",
        latitud: -31.5673223,
        longitud: -63.5154317
    },
    {
        id: 1130,
        extinto: "MARIA T GARU CAVALLERO",
        nacimiento: "2009-09-24",
        defuncion: "2009-09-24",
        sector: "Sector Rosa",
        latitud: -31.5673223,
        longitud: -63.5154317
    },
    {
        id: 1131,
        extinto: "PEREZ JUSTO ANTONIO",
        nacimiento: "1933-12-27",
        defuncion: "1992-07-10",
        sector: "Sector Rosa",
        latitud: -31.5673223,
        longitud: -63.5154317
    },
    {
        id: 1132,
        extinto: "CASANIVES CARIDAD",
        nacimiento: "1930-08-14",
        defuncion: "2013-03-26",
        sector: "Sector Rosa",
        latitud: -31.5673223,
        longitud: -63.5154317
    },
    {
        id: 1133,
        extinto: "CASANOVES AURELIO",
        nacimiento: "1918-12-20",
        defuncion: "2006-03-25",
        sector: "Sector Rosa",
        latitud: -31.5673417,
        longitud: -63.5154404
    },
    {
        id: 1134,
        extinto: "GRACIETTI MARIA ELENA",
        nacimiento: "1912-10-19",
        defuncion: "2001-06-06",
        sector: "Sector Rosa",
        latitud: -31.5673871,
        longitud: -63.5154616
    },
    {
        id: 1135,
        extinto: "ANTONIO NORBERTO ROMERO",
        nacimiento: "1951-12-05",
        defuncion: "2019-07-26",
        sector: "Sector Rosa",
        latitud: -31.5674102,
        longitud: -63.5154737
    },
    {
        id: 1136,
        extinto: "CASANOVEZ CARMEN",
        nacimiento: "1922-10-27",
        defuncion: "2011-04-20",
        sector: "Sector Rosa",
        latitud: -31.5673375,
        longitud: -63.5154532
    },
    {
        id: 1137,
        extinto: "PINOTTI LUIS",
        nacimiento: "1913-08-06",
        defuncion: "2008-01-17",
        sector: "Sector Rosa",
        latitud: -31.5673634,
        longitud: -63.5154653
    },
    {
        id: 1138,
        extinto: "GALLARDO DELICIA GRACIELA",
        nacimiento: "1936-05-09",
        defuncion: "2016-04-14",
        sector: "Sector Rosa",
        latitud: -31.5673634,
        longitud: -63.5154653
    },
    {
        id: 1139,
        extinto: "PINOTTI NORMA MABEL",
        nacimiento: "2016-04-14",
        defuncion: "2016-04-14",
        sector: "Sector Rosa",
        latitud: -31.5673634,
        longitud: -63.5154653
    },
    {
        id: 1140,
        extinto: "CAVAGNA JOSE",
        nacimiento: "1931-06-05",
        defuncion: "2011-08-04",
        sector: "Sector Rosa",
        latitud: -31.5673827,
        longitud: -63.5154743
    },
    {
        id: 1141,
        extinto: "COLAZO MIGUEL DALMACIO",
        nacimiento: "1936-08-03",
        defuncion: "1982-12-14",
        sector: "Sector Rosa",
        latitud: -31.5675211,
        longitud: -63.5152721
    },
    {
        id: 1142,
        extinto: "COLAZO JOSE EUSEBIO",
        nacimiento: "1961-03-19",
        defuncion: "1961-04-07",
        sector: "Sector Rosa",
        latitud: -31.5675211,
        longitud: -63.5152721
    },
    {
        id: 1143,
        extinto: "RODRIGUEZ ALDO RUBEN",
        nacimiento: "1944-11-27",
        defuncion: "2013-04-08",
        sector: "Sector Rosa",
        latitud: -31.5675399,
        longitud: -63.5152823
    },
    {
        id: 1144,
        extinto: "MARIA MIGUELINA ALGARBE",
        nacimiento: "1942-09-29",
        defuncion: "2022-07-08",
        sector: "Sector Rosa",
        latitud: -31.5675399,
        longitud: -63.5152823
    },
    {
        id: 1145,
        extinto: "VENENCIA MARIA DEL CARMEN",
        nacimiento: "1922-08-06",
        defuncion: "2001-03-02",
        sector: "Sector Rosa",
        latitud: -31.5675643,
        longitud: -63.5152962
    },
    {
        id: 1146,
        extinto: "ALGARBE PATRICIO",
        nacimiento: "1908-03-17",
        defuncion: "1977-03-12",
        sector: "Sector Rosa",
        latitud: -31.5675643,
        longitud: -63.5152962
    },
    {
        id: 1147,
        extinto: "ALGARBE RAMON AMADO",
        nacimiento: "1955-06-27",
        defuncion: "2017-09-15",
        sector: "Sector Rosa",
        latitud: -31.5675643,
        longitud: -63.5152962
    },
    {
        id: 1148,
        extinto: "LUIS ANGEL MIGUEL DEFRANCISI",
        nacimiento: "2018-01-22",
        defuncion: "2018-01-22",
        sector: "Sector Rosa",
        latitud: -31.5676048,
        longitud: -63.5153178
    },
    {
        id: 1149,
        extinto: "OSVALDO OMAR HERRERA",
        nacimiento: "1954-09-27",
        defuncion: "2019-07-30",
        sector: "Sector Rosa",
        latitud: -31.5676237,
        longitud: -63.5153278
    },
    {
        id: 1150,
        extinto: "HECTOR ARMANDO HERRERA",
        nacimiento: "1948-11-25",
        defuncion: "2021-12-26",
        sector: "Sector Rosa",
        latitud: -31.5676237,
        longitud: -63.5153278
    },
    {
        id: 1151,
        extinto: "LUIS ALBERTO BASUALDO",
        nacimiento: "1951-03-21",
        defuncion: "2022-04-20",
        sector: "Sector Rosa",
        latitud: -31.5676467,
        longitud: -63.5153399
    },
    {
        id: 1152,
        extinto: "COLAZO IVANNA ALEJANDRA",
        nacimiento: "1985-08-31",
        defuncion: "2004-02-20",
        sector: "Sector Rosa",
        latitud: -31.5675161,
        longitud: -63.5152845
    },
    {
        id: 1153,
        extinto: "RICARDO ALGARBE",
        nacimiento: "1958-02-26",
        defuncion: "2020-09-10",
        sector: "Sector Rosa",
        latitud: -31.5675593,
        longitud: -63.5153086
    },
    {
        id: 1154,
        extinto: "SORIA MARY ESTELA",
        nacimiento: "1950-10-11",
        defuncion: "2008-04-13",
        sector: "Sector Rosa",
        latitud: -31.5675781,
        longitud: -63.5153189
    },
    {
        id: 1155,
        extinto: "ALDO ADOLFO CARNERO",
        nacimiento: "1940-11-08",
        defuncion: "2024-05-20",
        sector: "Sector Rosa",
        latitud: -31.5675999,
        longitud: -63.5153303
    },
    {
        id: 1156,
        extinto: "MIGUEL ANGEL FRANCESCHI",
        nacimiento: "1948-08-09",
        defuncion: "2019-12-29",
        sector: "Sector Rosa",
        latitud: -31.5676418,
        longitud: -63.5153524
    },
    {
        id: 1157,
        extinto: "ROSA ZITA FRANCESCHI",
        nacimiento: "1938-07-19",
        defuncion: "2022-09-01",
        sector: "Sector Rosa",
        latitud: -31.5676418,
        longitud: -63.5153524
    },
    {
        id: 1158,
        extinto: "GONZALEZ OLADIO JOSE",
        nacimiento: "1935-12-19",
        defuncion: "2011-12-25",
        sector: "Sector Rosa",
        latitud: -31.5675111,
        longitud: -63.5152968
    },
    {
        id: 1159,
        extinto: "PATRICIO MARTIN ALGARBE",
        nacimiento: "1985-11-14",
        defuncion: "2007-08-05",
        sector: "Sector Rosa",
        latitud: -31.5675299,
        longitud: -63.5153071
    },
    {
        id: 1160,
        extinto: "PATRICIO  ALFREDO  ALGARBE",
        nacimiento: "1951-07-08",
        defuncion: "2017-11-11",
        sector: "Sector Rosa",
        latitud: -31.5675299,
        longitud: -63.5153071
    },
    {
        id: 1161,
        extinto: "ALGARBE PATRICIO MARTIN",
        nacimiento: "1985-11-14",
        defuncion: "2007-08-05",
        sector: "Sector Rosa",
        latitud: -31.5675543,
        longitud: -63.5153210
    },
    {
        id: 1162,
        extinto: "ELEONORA MARIA LUCIA LOPEZ",
        nacimiento: "1953-01-14",
        defuncion: "2020-12-26",
        sector: "Sector Rosa",
        latitud: -31.5675731,
        longitud: -63.5153313
    },
    {
        id: 1163,
        extinto: "RAMON VIRGILIO JULIO BUSTO",
        nacimiento: "1926-08-21",
        defuncion: "2022-11-18",
        sector: "Sector Rosa",
        latitud: -31.5676370,
        longitud: -63.5153649
    },
    {
        id: 1164,
        extinto: "OLGA  MARIA  CATALINA  MARCHISSONE",
        nacimiento: "1934-06-19",
        defuncion: "2024-06-08",
        sector: "Sector Rosa",
        latitud: -31.5676370,
        longitud: -63.5153649
    },
    {
        id: 1165,
        extinto: "MARIA LUISA RACCA",
        nacimiento: "1949-12-19",
        defuncion: "2021-11-25",
        sector: "Sector Rosa",
        latitud: -31.5676322,
        longitud: -63.5153773
    },
    {
        id: 1166,
        extinto: "TABORDA OSFALDO",
        nacimiento: "1938-04-27",
        defuncion: "1986-05-30",
        sector: "Sector Rosa",
        latitud: -31.5675012,
        longitud: -63.5153216
    },
    {
        id: 1167,
        extinto: "TISSERA PEDRO BALBINO",
        nacimiento: "1935-11-22",
        defuncion: "2001-02-18",
        sector: "Sector Rosa",
        latitud: -31.5676273,
        longitud: -63.5153898
    },
    {
        id: 1168,
        extinto: "TISSERA DONATILIA",
        nacimiento: "1932-08-01",
        defuncion: "2002-06-19",
        sector: "Sector Rosa",
        latitud: -31.5676273,
        longitud: -63.5153898
    },
    {
        id: 1169,
        extinto: "ZABALA NESTOR GASPAR",
        nacimiento: "1934-07-04",
        defuncion: "2017-01-19",
        sector: "Sector Rosa",
        latitud: -31.5675150,
        longitud: -63.5153443
    },
    {
        id: 1170,
        extinto: "BAROTTO JUAN CARLOS",
        nacimiento: "1943-09-01",
        defuncion: "2000-05-16",
        sector: "Sector Rosa",
        latitud: -31.5674862,
        longitud: -63.5153588
    },
    {
        id: 1171,
        extinto: "GOTTARDELLO ANTONIO ERMELINDO",
        nacimiento: "1938-03-28",
        defuncion: "2017-03-10",
        sector: "Sector Rosa",
        latitud: -31.5674862,
        longitud: -63.5153588
    },
    {
        id: 1172,
        extinto: "RUBIOLO DELIA",
        nacimiento: "1927-01-27",
        defuncion: "2009-08-15",
        sector: "Sector Rosa",
        latitud: -31.5675050,
        longitud: -63.5153691
    },
    {
        id: 1173,
        extinto: "HUGO FERNANDEZ",
        nacimiento: "2017-04-17",
        defuncion: "2017-04-17",
        sector: "Sector Rosa",
        latitud: -31.5675050,
        longitud: -63.5153691
    },
    {
        id: 1174,
        extinto: "CESAR HUGO FERNANDEZ",
        nacimiento: "1952-11-27",
        defuncion: "2020-10-08",
        sector: "Sector Rosa",
        latitud: -31.5675050,
        longitud: -63.5153691
    },
    {
        id: 1175,
        extinto: "LIENDO JUAN AGUSTIN",
        nacimiento: "1913-02-13",
        defuncion: "1990-08-19",
        sector: "Sector Rosa",
        latitud: -31.5675295,
        longitud: -63.5153830
    },
    {
        id: 1176,
        extinto: "FERNANDEZ MARIA ALICIA",
        nacimiento: "1921-03-23",
        defuncion: "2006-04-21",
        sector: "Sector Rosa",
        latitud: -31.5675295,
        longitud: -63.5153830
    },
    {
        id: 1177,
        extinto: "VICTOR HUGO ARMANINI",
        nacimiento: "1960-11-13",
        defuncion: "2006-07-03",
        sector: "Sector Rosa",
        latitud: -31.5675245,
        longitud: -63.5153954
    },
    {
        id: 1178,
        extinto: "ARGENTE ESMERALDA ELENA",
        nacimiento: "1936-12-09",
        defuncion: "2002-04-14",
        sector: "Sector Rosa",
        latitud: -31.5675195,
        longitud: -63.5154078
    },
    {
        id: 1179,
        extinto: "LUIS ALBERTO ARMANINI",
        nacimiento: "1962-08-18",
        defuncion: "2006-12-08",
        sector: "Sector Rosa",
        latitud: -31.5675195,
        longitud: -63.5154078
    },
    {
        id: 1180,
        extinto: "HUGO NELSO ARMANINI",
        nacimiento: "2016-08-09",
        defuncion: "2016-08-09",
        sector: "Sector Rosa",
        latitud: -31.5675195,
        longitud: -63.5154078
    },
    {
        id: 1181,
        extinto: "BARRA NELIDA SONIA",
        nacimiento: "1973-08-28",
        defuncion: "1975-01-27",
        sector: "Sector Rosa",
        latitud: -31.5676032,
        longitud: -63.5154522
    },
    {
        id: 1182,
        extinto: "RAUL ERNESTO BARRA",
        nacimiento: "1944-11-08",
        defuncion: "2012-09-28",
        sector: "Sector Rosa",
        latitud: -31.5676032,
        longitud: -63.5154522
    },
    {
        id: 1183,
        extinto: "JOSEFA NELIDA MACHADO",
        nacimiento: "1943-07-25",
        defuncion: "2024-06-29",
        sector: "Sector Rosa",
        latitud: -31.5676032,
        longitud: -63.5154522
    },
    {
        id: 1184,
        extinto: "GARCIA TOMASA H",
        nacimiento: "1916-12-25",
        defuncion: "2001-08-29",
        sector: "Sector Rosa",
        latitud: -31.5675333,
        longitud: -63.5154305
    },
    {
        id: 1185,
        extinto: "OSLER RAMON AMADO",
        nacimiento: "1939-07-03",
        defuncion: "1985-11-02",
        sector: "Sector Rosa",
        latitud: -31.5675333,
        longitud: -63.5154305
    },
    {
        id: 1186,
        extinto: "NORMA ADELA LIENDO",
        nacimiento: "1945-04-26",
        defuncion: "2022-02-04",
        sector: "Sector Rosa",
        latitud: -31.5675333,
        longitud: -63.5154305
    },
    {
        id: 1187,
        extinto: "GIULIANI ROBERTO ANGEL",
        nacimiento: "1945-09-03",
        defuncion: "2012-01-15",
        sector: "Sector Rosa",
        latitud: -31.5675565,
        longitud: -63.5154426
    },
    {
        id: 1188,
        extinto: "RAMON ANTONIO PERALTA",
        nacimiento: "1944-03-16",
        defuncion: "2019-09-30",
        sector: "Sector Rosa",
        latitud: -31.5675984,
        longitud: -63.5154647
    },
    {
        id: 1189,
        extinto: "LUJAN MARIA DEL CARMEN",
        nacimiento: "1947-06-23",
        defuncion: "2017-06-09",
        sector: "Sector Rosa",
        latitud: -31.5674851,
        longitud: -63.5154187
    },
    {
        id: 1190,
        extinto: "ANGELICA ROBERTINA ALARCON",
        nacimiento: "1950-11-19",
        defuncion: "2020-11-09",
        sector: "Sector Rosa",
        latitud: -31.5675705,
        longitud: -63.5154650
    },
    {
        id: 1191,
        extinto: "RAUL ESTEBAN CELIZ",
        nacimiento: "1945-09-18",
        defuncion: "2020-10-18",
        sector: "Sector Rosa",
        latitud: -31.5675935,
        longitud: -63.5154772
    },
    {
        id: 1192,
        extinto: "BONALDI ISIDRO SANTIAGO",
        nacimiento: "1921-04-12",
        defuncion: "2002-12-26",
        sector: "Sector Rosa",
        latitud: -31.5675046,
        longitud: -63.5154450
    },
    {
        id: 1193,
        extinto: "LUDUEÑA MARIA JULIANA",
        nacimiento: "1921-01-24",
        defuncion: "2002-05-21",
        sector: "Sector Rosa",
        latitud: -31.5675046,
        longitud: -63.5154450
    },
    {
        id: 1194,
        extinto: "VILMA  GLADIS  ARGUELLO",
        nacimiento: "1948-05-30",
        defuncion: "2002-08-19",
        sector: "Sector Rosa",
        latitud: -31.5675657,
        longitud: -63.5154775
    },
    {
        id: 1195,
        extinto: "ATANACIO  MAXIMO  LUDUEÑA",
        nacimiento: "1942-05-02",
        defuncion: "2018-04-12",
        sector: "Sector Rosa",
        latitud: -31.5675657,
        longitud: -63.5154775
    },
    {
        id: 1196,
        extinto: "VICTOR  SARGIO  LUDUEÑA",
        nacimiento: "1967-11-04",
        defuncion: "2017-01-17",
        sector: "Sector Rosa",
        latitud: -31.5675657,
        longitud: -63.5154775
    },
    {
        id: 1197,
        extinto: "VERONICA OLGA DIAZ",
        nacimiento: "1938-01-28",
        defuncion: "2014-10-30",
        sector: "Sector Rosa",
        latitud: -31.5675887,
        longitud: -63.5154896
    },
    {
        id: 1198,
        extinto: "RAMONA ESTHER NAVARRO",
        nacimiento: "1932-12-28",
        defuncion: "2023-09-11",
        sector: "Sector Rosa",
        latitud: -31.5674564,
        longitud: -63.5154332
    },
    {
        id: 1199,
        extinto: "JUAN PABLO LUQUE",
        nacimiento: "1935-07-10",
        defuncion: "2022-09-27",
        sector: "Sector Rosa",
        latitud: -31.5675184,
        longitud: -63.5154677
    },
    {
        id: 1200,
        extinto: "LAORES FELIX OSCAR",
        nacimiento: "1935-09-03",
        defuncion: "2019-05-13",
        sector: "Sector Rosa",
        latitud: -31.5675839,
        longitud: -63.5155021
    },
    {
        id: 1201,
        extinto: "PALACIO LILIANA BEATRIZ",
        nacimiento: "1962-12-24",
        defuncion: "2014-04-02",
        sector: "Sector Rosa",
        latitud: -31.5674702,
        longitud: -63.5154559
    },
    {
        id: 1202,
        extinto: "INES DEL VALLE ZABALA",
        nacimiento: "1951-04-26",
        defuncion: "2018-04-15",
        sector: "Sector Rosa",
        latitud: -31.5675371,
        longitud: -63.5154925
    },
    {
        id: 1203,
        extinto: "IGNACIO INOCENCIO SERRANO",
        nacimiento: "1945-12-27",
        defuncion: "2024-07-08",
        sector: "Sector Rosa",
        latitud: -31.5675371,
        longitud: -63.5154925
    },
    {
        id: 1204,
        extinto: "MIRTA ANTONIA GASPARETTI",
        nacimiento: "1957-03-22",
        defuncion: "2008-05-05",
        sector: "Sector Rosa",
        latitud: -31.5675560,
        longitud: -63.5155025
    },
    {
        id: 1205,
        extinto: "GASPARETTI ELVIO JUAN",
        nacimiento: "1931-06-24",
        defuncion: "1998-07-24",
        sector: "Sector Rosa",
        latitud: -31.5675791,
        longitud: -63.5155146
    },
    {
        id: 1206,
        extinto: "BARRERA CLEMIRA JUANA",
        nacimiento: "1933-09-10",
        defuncion: "2008-04-05",
        sector: "Sector Rosa",
        latitud: -31.5675791,
        longitud: -63.5155146
    },
    {
        id: 1207,
        extinto: "ALVINA JOSEFINA ACEVEDO",
        nacimiento: "1929-03-19",
        defuncion: "2020-07-13",
        sector: "Sector Rosa",
        latitud: -31.5674464,
        longitud: -63.5154580
    },
    {
        id: 1208,
        extinto: "VACA MARCELINO RAMON",
        nacimiento: "1943-03-28",
        defuncion: "2008-05-21",
        sector: "Sector Rosa",
        latitud: -31.5674897,
        longitud: -63.5154822
    },
    {
        id: 1209,
        extinto: "MIRIAM HAYDEE TORRESI",
        nacimiento: "1948-07-27",
        defuncion: "2021-04-20",
        sector: "Sector Rosa",
        latitud: -31.5674897,
        longitud: -63.5154822
    },
    {
        id: 1210,
        extinto: "LUDUEÑA ANGEL HECTOR",
        nacimiento: "1943-03-07",
        defuncion: "2008-05-02",
        sector: "Sector Rosa",
        latitud: -31.5675085,
        longitud: -63.5154925
    },
    {
        id: 1211,
        extinto: "MARCELO JAVIER LUDUEÑA",
        nacimiento: "1973-12-14",
        defuncion: "2021-08-10",
        sector: "Sector Rosa",
        latitud: -31.5675512,
        longitud: -63.5155149
    },
    {
        id: 1212,
        extinto: "FERREYRA CRESCENCIO ADOLFO",
        nacimiento: "1924-06-06",
        defuncion: "2006-08-06",
        sector: "Sector Rosa",
        latitud: -31.5675742,
        longitud: -63.5155271
    },
    {
        id: 1213,
        extinto: "CEBALLOS NORMA",
        nacimiento: "1931-09-01",
        defuncion: "2014-07-10",
        sector: "Sector Rosa",
        latitud: -31.5675742,
        longitud: -63.5155271
    },
    {
        id: 1214,
        extinto: "HUGO LUIS ORTS",
        nacimiento: "1952-07-09",
        defuncion: "2020-03-12",
        sector: "Sector Rosa",
        latitud: -31.5674414,
        longitud: -63.5154704
    },
    {
        id: 1215,
        extinto: "SOFIA LIDIA VILCHEZ",
        nacimiento: "1938-10-19",
        defuncion: "2019-07-08",
        sector: "Sector Rosa",
        latitud: -31.5674602,
        longitud: -63.5154807
    },
    {
        id: 1216,
        extinto: "ROBLEDO PABLO OSCAR",
        nacimiento: "1936-06-19",
        defuncion: "2012-08-23",
        sector: "Sector Rosa",
        latitud: -31.5674847,
        longitud: -63.5154947
    },
    {
        id: 1217,
        extinto: "MARIA CELINA FERNANDEZ",
        nacimiento: "1949-09-22",
        defuncion: "2014-12-05",
        sector: "Sector Rosa",
        latitud: -31.5674847,
        longitud: -63.5154947
    },
    {
        id: 1218,
        extinto: "RUBEN ANGEL GONZALEZ",
        nacimiento: "1953-05-12",
        defuncion: "2020-10-19",
        sector: "Sector Rosa",
        latitud: -31.5675035,
        longitud: -63.5155049
    },
    {
        id: 1219,
        extinto: "JOAQUIN TEJEDA",
        nacimiento: "1922-05-13",
        defuncion: "1999-07-25",
        sector: "Sector Rosa",
        latitud: -31.5675275,
        longitud: -63.5155174
    },
    {
        id: 1220,
        extinto: "MONCADA ELVA ISABEL",
        nacimiento: "1927-11-26",
        defuncion: "2008-11-14",
        sector: "Sector Rosa",
        latitud: -31.5675275,
        longitud: -63.5155174
    },
    {
        id: 1221,
        extinto: "RAMON AGUSTIN TEJEDA",
        nacimiento: "1951-04-17",
        defuncion: "2015-06-07",
        sector: "Sector Rosa",
        latitud: -31.5675275,
        longitud: -63.5155174
    },
    {
        id: 1222,
        extinto: "ELVA ROSA TEJEDA",
        nacimiento: "1949-08-04",
        defuncion: "2022-05-11",
        sector: "Sector Rosa",
        latitud: -31.5675464,
        longitud: -63.5155274
    },
    {
        id: 1223,
        extinto: "NEMESI JULIO NEMESIO",
        nacimiento: "1939-05-22",
        defuncion: "2014-07-12",
        sector: "Sector Rosa",
        latitud: -31.5674364,
        longitud: -63.5154828
    },
    {
        id: 1224,
        extinto: "ALDO CARMEN NEMESI",
        nacimiento: "1941-01-31",
        defuncion: "2019-08-05",
        sector: "Sector Rosa",
        latitud: -31.5674364,
        longitud: -63.5154828
    },
    {
        id: 1225,
        extinto: "JUAREZ JOSEFA",
        nacimiento: "2007-02-26",
        defuncion: "2007-02-26",
        sector: "Sector Rosa",
        latitud: -31.5674552,
        longitud: -63.5154931
    },
    {
        id: 1226,
        extinto: "GUEVARA DERMIDIO",
        nacimiento: "2007-02-26",
        defuncion: "2007-02-26",
        sector: "Sector Rosa",
        latitud: -31.5674552,
        longitud: -63.5154931
    },
    {
        id: 1227,
        extinto: "GUEVRA IRMA EDELMIRA",
        nacimiento: "2007-02-26",
        defuncion: "2007-02-26",
        sector: "Sector Rosa",
        latitud: -31.5674552,
        longitud: -63.5154931
    },
    {
        id: 1228,
        extinto: "GUEVARA MARIA SERAFINA",
        nacimiento: "1926-11-16",
        defuncion: "2017-11-17",
        sector: "Sector Rosa",
        latitud: -31.5674552,
        longitud: -63.5154931
    },
    {
        id: 1229,
        extinto: "CUELLO JOSE CRISOLOGO",
        nacimiento: "1964-09-14",
        defuncion: "2014-09-13",
        sector: "Sector Rosa",
        latitud: -31.5674797,
        longitud: -63.5155071
    },
    {
        id: 1230,
        extinto: "PRESSON EDUARDO",
        nacimiento: "1956-05-05",
        defuncion: "2008-10-13",
        sector: "Sector Rosa",
        latitud: -31.5674985,
        longitud: -63.5155173
    },
    {
        id: 1231,
        extinto: "GUEVARA JOSE DERMIDIO",
        nacimiento: "1923-04-22",
        defuncion: "2013-12-22",
        sector: "Sector Rosa",
        latitud: -31.5675646,
        longitud: -63.5155520
    },
    {
        id: 1232,
        extinto: "UTRERA PURA ROSA",
        nacimiento: "1927-11-28",
        defuncion: "2017-08-29",
        sector: "Sector Rosa",
        latitud: -31.5675646,
        longitud: -63.5155520
    },
    {
        id: 1233,
        extinto: "BIANCO DOMINGO LUIS",
        nacimiento: "1941-06-01",
        defuncion: "2009-07-15",
        sector: "Sector Rosa",
        latitud: -31.5674315,
        longitud: -63.5154952
    },
    {
        id: 1234,
        extinto: "GUEVARA JOSE FELIX",
        nacimiento: "1955-02-04",
        defuncion: "2010-09-03",
        sector: "Sector Rosa",
        latitud: -31.5674502,
        longitud: -63.5155055
    },
    {
        id: 1235,
        extinto: "CUELLO ANIBAL HENOCH",
        nacimiento: "1923-02-09",
        defuncion: "2005-07-05",
        sector: "Sector Rosa",
        latitud: -31.5674748,
        longitud: -63.5155195
    },
    {
        id: 1236,
        extinto: "HUZULIAK SIMON SEBASTIAN",
        nacimiento: "1980-07-19",
        defuncion: "2004-10-29",
        sector: "Sector Rosa",
        latitud: -31.5674935,
        longitud: -63.5155297
    },
    {
        id: 1237,
        extinto: "GODOY GABINA",
        nacimiento: "1925-02-18",
        defuncion: "2011-03-12",
        sector: "Sector Rosa",
        latitud: -31.5675178,
        longitud: -63.5155424
    },
    {
        id: 1238,
        extinto: "ALBERTO  ENRIQUE  ROBLEDO",
        nacimiento: "1946-09-27",
        defuncion: "2023-02-18",
        sector: "Sector Rosa",
        latitud: -31.5675178,
        longitud: -63.5155424
    },
    {
        id: 1239,
        extinto: "ADOLFO ESTEBAN GALLARDO",
        nacimiento: "1938-05-22",
        defuncion: "2011-07-14",
        sector: "Sector Rosa",
        latitud: -31.5675597,
        longitud: -63.5155645
    },
    {
        id: 1240,
        extinto: "GUEVARA ROQUE MARCELO",
        nacimiento: "1919-04-26",
        defuncion: "1990-12-29",
        sector: "Sector Rosa",
        latitud: -31.5674265,
        longitud: -63.5155076
    },
    {
        id: 1241,
        extinto: "SAN RAMON JOSEFA AIDA DE",
        nacimiento: "1919-04-14",
        defuncion: "1991-08-02",
        sector: "Sector Rosa",
        latitud: -31.5674265,
        longitud: -63.5155076
    },
    {
        id: 1242,
        extinto: "GALLARDO LIDIA GRACIELA",
        nacimiento: "1964-03-27",
        defuncion: "2010-12-14",
        sector: "Sector Rosa",
        latitud: -31.5674453,
        longitud: -63.5155179
    },
    {
        id: 1243,
        extinto: "CELI DELFINA",
        nacimiento: "2012-10-07",
        defuncion: "2012-10-07",
        sector: "Sector Rosa",
        latitud: -31.5674453,
        longitud: -63.5155179
    },
    {
        id: 1244,
        extinto: "CELI CATALINA",
        nacimiento: "2012-10-07",
        defuncion: "2012-10-07",
        sector: "Sector Rosa",
        latitud: -31.5674453,
        longitud: -63.5155179
    },
    {
        id: 1245,
        extinto: "LAURA ALDANA LAORES",
        nacimiento: "1994-04-26",
        defuncion: "2022-07-04",
        sector: "Sector Rosa",
        latitud: -31.5674453,
        longitud: -63.5155179
    },
    {
        id: 1246,
        extinto: "CABALLERA MARGARITA ,MARIA",
        nacimiento: "1909-04-13",
        defuncion: "1963-04-02",
        sector: "Sector Rosa",
        latitud: -31.5674698,
        longitud: -63.5155319
    },
    {
        id: 1247,
        extinto: "NEMESI LUIS PEDRO",
        nacimiento: "1908-06-29",
        defuncion: "1975-08-29",
        sector: "Sector Rosa",
        latitud: -31.5674698,
        longitud: -63.5155319
    },
    {
        id: 1248,
        extinto: "NEMESI AMERICO PEDRO",
        nacimiento: "1944-06-29",
        defuncion: "1983-07-15",
        sector: "Sector Rosa",
        latitud: -31.5674698,
        longitud: -63.5155319
    },
    {
        id: 1249,
        extinto: "NEMESI LIDICO JUAN",
        nacimiento: "1935-12-17",
        defuncion: "1997-09-29",
        sector: "Sector Rosa",
        latitud: -31.5674698,
        longitud: -63.5155319
    },
    {
        id: 1250,
        extinto: "HUZULIAK SIMON V.",
        nacimiento: "1928-03-28",
        defuncion: "2002-10-07",
        sector: "Sector Rosa",
        latitud: -31.5674886,
        longitud: -63.5155421
    },
    {
        id: 1251,
        extinto: "TORRESI ELBA",
        nacimiento: "1934-10-08",
        defuncion: "2002-10-20",
        sector: "Sector Rosa",
        latitud: -31.5674886,
        longitud: -63.5155421
    },
    {
        id: 1252,
        extinto: "SALGUERO BENEDICTO NERI",
        nacimiento: "1936-05-07",
        defuncion: "1969-10-11",
        sector: "Sector Rosa",
        latitud: -31.5675549,
        longitud: -63.5155770
    },
    {
        id: 1253,
        extinto: "CALLEJO ANDRES NICOLAS",
        nacimiento: "1945-02-19",
        defuncion: "2013-08-09",
        sector: "Sector Rosa",
        latitud: -31.5675549,
        longitud: -63.5155770
    },
    {
        id: 1254,
        extinto: "TISRA JOSE HUGO",
        nacimiento: "1952-01-26",
        defuncion: "2007-10-13",
        sector: "Sector Rosa",
        latitud: -31.5676604,
        longitud: -63.5153756
    },
    {
        id: 1255,
        extinto: "TISERA JUSTINA RAMONA",
        nacimiento: "1919-09-05",
        defuncion: "2010-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676604,
        longitud: -63.5153756
    },
    {
        id: 1256,
        extinto: "AMELIA SEGUNDA SUELDO",
        nacimiento: "1922-05-18",
        defuncion: "2019-05-28",
        sector: "Sector Rosa",
        latitud: -31.5676794,
        longitud: -63.5153852
    },
    {
        id: 1257,
        extinto: "FABRICIO ESPOSITO LUBATTI N.N",
        nacimiento: "1996-09-30",
        defuncion: "1996-09-30",
        sector: "Sector Rosa",
        latitud: -31.5676748,
        longitud: -63.5153978
    },
    {
        id: 1258,
        extinto: "NORIS ADRIANA LUBATTI",
        nacimiento: "1959-05-25",
        defuncion: "2017-09-18",
        sector: "Sector Rosa",
        latitud: -31.5676748,
        longitud: -63.5153978
    },
    {
        id: 1259,
        extinto: "JOSE FABIO GIGENA",
        nacimiento: "1949-08-29",
        defuncion: "1999-05-04",
        sector: "Sector Rosa",
        latitud: -31.5676511,
        longitud: -63.5154008
    },
    {
        id: 1260,
        extinto: "ALEJANDRA BELEN GIGENA",
        nacimiento: "1993-01-31",
        defuncion: "2022-03-20",
        sector: "Sector Rosa",
        latitud: -31.5676511,
        longitud: -63.5154008
    },
    {
        id: 1261,
        extinto: "PEREYRA JOSE ALBERTO",
        nacimiento: "1959-09-01",
        defuncion: "2016-04-06",
        sector: "Sector Rosa",
        latitud: -31.5676655,
        longitud: -63.5154229
    },
    {
        id: 1262,
        extinto: "ELENA ISABEL ABREGO",
        nacimiento: "1964-07-14",
        defuncion: "2016-02-22",
        sector: "Sector Rosa",
        latitud: -31.5676655,
        longitud: -63.5154229
    },
    {
        id: 1263,
        extinto: "ELIA CATALINA CARABANTE",
        nacimiento: "1935-07-13",
        defuncion: "2018-08-05",
        sector: "Sector Rosa",
        latitud: -31.5676609,
        longitud: -63.5154355
    },
    {
        id: 1264,
        extinto: "OLGA RODRIGUEZ",
        nacimiento: "1928-01-15",
        defuncion: "2013-06-06",
        sector: "Sector Rosa",
        latitud: -31.5676372,
        longitud: -63.5154385
    },
    {
        id: 1265,
        extinto: "RODRIGUEZ TERESA JORGELINA",
        nacimiento: "1930-06-15",
        defuncion: "2006-06-07",
        sector: "Sector Rosa",
        latitud: -31.5676563,
        longitud: -63.5154481
    },
    {
        id: 1266,
        extinto: "URSULA BELTRAMO",
        nacimiento: "1911-08-22",
        defuncion: "1990-06-04",
        sector: "Sector Rosa",
        latitud: -31.5676326,
        longitud: -63.5154511
    },
    {
        id: 1267,
        extinto: "GRASSO FRANCISCO",
        nacimiento: "1911-04-14",
        defuncion: "1989-05-14",
        sector: "Sector Rosa",
        latitud: -31.5676326,
        longitud: -63.5154511
    },
    {
        id: 1268,
        extinto: "BLANCA MODESTA MANSILLA",
        nacimiento: "1928-02-23",
        defuncion: "2008-06-27",
        sector: "Sector Rosa",
        latitud: -31.5676516,
        longitud: -63.5154607
    },
    {
        id: 1269,
        extinto: "MIGUEL ANGEL RODRIGUEZ",
        nacimiento: "1926-03-01",
        defuncion: "1994-06-03",
        sector: "Sector Rosa",
        latitud: -31.5676516,
        longitud: -63.5154607
    },
    {
        id: 1270,
        extinto: "GRASSO ADELMO FRANCISCO",
        nacimiento: "1940-02-29",
        defuncion: "2013-01-17",
        sector: "Sector Rosa",
        latitud: -31.5676280,
        longitud: -63.5154637
    },
    {
        id: 1271,
        extinto: "GARINO ESTELA CATALINA",
        nacimiento: "1950-09-08",
        defuncion: "2015-01-27",
        sector: "Sector Rosa",
        latitud: -31.5676280,
        longitud: -63.5154637
    },
    {
        id: 1272,
        extinto: "SIGALI ANTONIA",
        nacimiento: "1924-06-21",
        defuncion: "2012-12-14",
        sector: "Sector Rosa",
        latitud: -31.5676470,
        longitud: -63.5154733
    },
    {
        id: 1273,
        extinto: "MIRTA GRACIELA MORENO",
        nacimiento: "1948-06-20",
        defuncion: "2021-12-30",
        sector: "Sector Rosa",
        latitud: -31.5676470,
        longitud: -63.5154733
    },
    {
        id: 1274,
        extinto: "MARGARITA ELSA RUFINATTI",
        nacimiento: "1929-01-09",
        defuncion: "2003-12-23",
        sector: "Sector Rosa",
        latitud: -31.5676233,
        longitud: -63.5154763
    },
    {
        id: 1275,
        extinto: "DOMINGI VICENTE GARINO",
        nacimiento: "1926-03-10",
        defuncion: "1992-06-19",
        sector: "Sector Rosa",
        latitud: -31.5676233,
        longitud: -63.5154763
    },
    {
        id: 1276,
        extinto: "ARGUELLO DAVID",
        nacimiento: "1947-07-17",
        defuncion: "2012-06-16",
        sector: "Sector Rosa",
        latitud: -31.5676187,
        longitud: -63.5154888
    },
    {
        id: 1277,
        extinto: "NELI DEL VALLE ROCCO",
        nacimiento: "1953-04-18",
        defuncion: "2022-04-17",
        sector: "Sector Rosa",
        latitud: -31.5676187,
        longitud: -63.5154888
    },
    {
        id: 1278,
        extinto: "PAOLA CECILIA ARGUELLO",
        nacimiento: "1984-09-27",
        defuncion: "2024-07-16",
        sector: "Sector Rosa",
        latitud: -31.5676187,
        longitud: -63.5154888
    },
    {
        id: 1279,
        extinto: "ROCCO DIEGO NELSON",
        nacimiento: "1947-12-19",
        defuncion: "2010-12-19",
        sector: "Sector Rosa",
        latitud: -31.5676378,
        longitud: -63.5154984
    },
    {
        id: 1280,
        extinto: "SILVERIO ADAN LEZANA",
        nacimiento: "1935-06-20",
        defuncion: "1998-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676331,
        longitud: -63.5155110
    },
    {
        id: 1281,
        extinto: "ARGUELLO RAUL ERNESTO",
        nacimiento: "1936-04-30",
        defuncion: "2001-09-10",
        sector: "Sector Rosa",
        latitud: -31.5676231,
        longitud: -63.5155356
    },
    {
        id: 1282,
        extinto: "JUAREZ ELVIRA NELLY",
        nacimiento: "1941-11-11",
        defuncion: "2009-10-29",
        sector: "Sector Rosa",
        latitud: -31.5676231,
        longitud: -63.5155356
    },
    {
        id: 1283,
        extinto: "CARANDINO VICTORIA DOMINGA",
        nacimiento: "1913-11-17",
        defuncion: "2005-10-21",
        sector: "Sector Rosa",
        latitud: -31.5675938,
        longitud: -63.5155483
    },
    {
        id: 1284,
        extinto: "BELTRAMO FRANCISCO",
        nacimiento: "1905-03-10",
        defuncion: "1987-02-24",
        sector: "Sector Rosa",
        latitud: -31.5675938,
        longitud: -63.5155483
    },
    {
        id: 1285,
        extinto: "BELTRAMO FELIX DOMINGO",
        nacimiento: "1935-03-03",
        defuncion: "2009-05-11",
        sector: "Sector Rosa",
        latitud: -31.5675938,
        longitud: -63.5155483
    },
    {
        id: 1286,
        extinto: "FORCLAZ CARLOS ALBERTO",
        nacimiento: "1958-04-11",
        defuncion: "2010-10-19",
        sector: "Sector Rosa",
        latitud: -31.5676066,
        longitud: -63.5155718
    },
    {
        id: 1287,
        extinto: "FRANCISCO AMARANTO FORCLAZ",
        nacimiento: "1913-03-12",
        defuncion: "1991-05-23",
        sector: "Sector Rosa",
        latitud: -31.5676066,
        longitud: -63.5155718
    },
    {
        id: 1288,
        extinto: "RODRIGUEZ FLORENTINA",
        nacimiento: "1932-10-18",
        defuncion: "2016-08-11",
        sector: "Sector Rosa",
        latitud: -31.5676066,
        longitud: -63.5155718
    },
    {
        id: 1289,
        extinto: "BASSI RAUL IRINEO",
        nacimiento: "1928-08-20",
        defuncion: "2006-08-06",
        sector: "Sector Rosa",
        latitud: -31.5675828,
        longitud: -63.5155725
    },
    {
        id: 1290,
        extinto: "GASPARETTI EMA NELLY",
        nacimiento: "1929-06-26",
        defuncion: "2008-10-03",
        sector: "Sector Rosa",
        latitud: -31.5675828,
        longitud: -63.5155725
    },
    {
        id: 1291,
        extinto: "BASSI ANGEL CERAFIN",
        nacimiento: "2003-04-17",
        defuncion: "2003-04-17",
        sector: "Sector Rosa",
        latitud: -31.5676011,
        longitud: -63.5155839
    },
    {
        id: 1292,
        extinto: "SOSA GUZMAN BRAIAN RUBEN",
        nacimiento: "1992-04-29",
        defuncion: "2011-11-20",
        sector: "Sector Rosa",
        latitud: -31.5676011,
        longitud: -63.5155839
    },
    {
        id: 1293,
        extinto: "MARIA ROSA GUZMAN",
        nacimiento: "1937-03-15",
        defuncion: "2022-07-21",
        sector: "Sector Rosa",
        latitud: -31.5676011,
        longitud: -63.5155839
    },
    {
        id: 1294,
        extinto: "CARANDINO REMO",
        nacimiento: "1920-06-10",
        defuncion: "2003-09-06",
        sector: "Sector Rosa",
        latitud: -31.5675956,
        longitud: -63.5155960
    },
    {
        id: 1295,
        extinto: "RIVARA  IDA ROSA",
        nacimiento: "1924-03-22",
        defuncion: "2005-01-26",
        sector: "Sector Rosa",
        latitud: -31.5675956,
        longitud: -63.5155960
    },
    {
        id: 1296,
        extinto: "N/N  SANCHEZ.-CISTERNA",
        nacimiento: "2011-10-12",
        defuncion: "2011-10-12",
        sector: "Sector Rosa",
        latitud: -31.5675956,
        longitud: -63.5155960
    },
    {
        id: 1297,
        extinto: "CARANDINO REMO JOSE",
        nacimiento: "1965-05-17",
        defuncion: "2001-11-09",
        sector: "Sector Rosa",
        latitud: -31.5675901,
        longitud: -63.5156081
    },
    {
        id: 1298,
        extinto: "ROLDAN MARIA RAMONA",
        nacimiento: "1917-05-12",
        defuncion: "2009-09-09",
        sector: "Sector Rosa",
        latitud: -31.5675662,
        longitud: -63.5156088
    },
    {
        id: 1299,
        extinto: "ERNESTO  ALVAREZ",
        nacimiento: "1940-04-19",
        defuncion: "2023-12-18",
        sector: "Sector Rosa",
        latitud: -31.5675662,
        longitud: -63.5156088
    },
    {
        id: 1300,
        extinto: "DERRA ASENCION",
        nacimiento: "1930-06-19",
        defuncion: "2001-07-15",
        sector: "Sector Rosa",
        latitud: -31.5675790,
        longitud: -63.5156322
    },
    {
        id: 1301,
        extinto: "TELESFORO ELCLEORINDO CISTERNA",
        nacimiento: "1928-09-29",
        defuncion: "2022-06-07",
        sector: "Sector Rosa",
        latitud: -31.5675790,
        longitud: -63.5156322
    },
    {
        id: 1302,
        extinto: "MANUEL ARMANDO GARCIA",
        nacimiento: "1937-04-26",
        defuncion: "2018-04-30",
        sector: "Sector Verde",
        latitud: -31.5676574,
        longitud: -63.5163593
    },
    {
        id: 1303,
        extinto: "ROQUE  ARMANDO  GARCIA",
        nacimiento: "1968-12-28",
        defuncion: "2024-05-06",
        sector: "Sector Verde",
        latitud: -31.5676574,
        longitud: -63.5163593
    },
    {
        id: 1304,
        extinto: "SALAS DE FONTANA MARIA PURA",
        nacimiento: "1903-12-08",
        defuncion: "1974-04-02",
        sector: "Sector Verde",
        latitud: -31.5676753,
        longitud: -63.5163769
    },
    {
        id: 1305,
        extinto: "GERMAN FONTANA",
        nacimiento: "1903-12-03",
        defuncion: "1992-04-21",
        sector: "Sector Verde",
        latitud: -31.5676753,
        longitud: -63.5163769
    },
    {
        id: 1306,
        extinto: "MARIA DEL VALLE BANEGAS",
        nacimiento: "1912-03-11",
        defuncion: "1992-03-11",
        sector: "Sector Verde",
        latitud: -31.5677022,
        longitud: -63.5164034
    },
    {
        id: 1307,
        extinto: "LOPEZ ALCIRA",
        nacimiento: "1931-01-24",
        defuncion: "2015-07-18",
        sector: "Sector Verde",
        latitud: -31.5677022,
        longitud: -63.5164034
    },
    {
        id: 1308,
        extinto: "NESTOR GERARDO MICHELI",
        nacimiento: "1970-09-24",
        defuncion: "2022-01-23",
        sector: "Sector Verde",
        latitud: -31.5677201,
        longitud: -63.5164211
    },
    {
        id: 1309,
        extinto: "CARNIEL NORMA TERESA",
        nacimiento: "1948-06-22",
        defuncion: "2010-07-18",
        sector: "Sector Verde",
        latitud: -31.5676709,
        longitud: -63.5164043
    },
    {
        id: 1310,
        extinto: "PEDRO JOSE CAVAGNA",
        nacimiento: "1939-08-28",
        defuncion: "2019-04-08",
        sector: "Sector Verde",
        latitud: -31.5676709,
        longitud: -63.5164043
    },
    {
        id: 1311,
        extinto: "MANDRINO LUISA TERESA",
        nacimiento: "1937-10-06",
        defuncion: "2003-09-02",
        sector: "Sector Verde",
        latitud: -31.5676978,
        longitud: -63.5164308
    },
    {
        id: 1312,
        extinto: "CAROLINA BONALDI",
        nacimiento: "1935-07-21",
        defuncion: "2022-10-29",
        sector: "Sector Verde",
        latitud: -31.5677157,
        longitud: -63.5164484
    },
    {
        id: 1313,
        extinto: "SEIMANDI OSCAR",
        nacimiento: "1944-10-10",
        defuncion: "2001-10-20",
        sector: "Sector Verde",
        latitud: -31.5677246,
        longitud: -63.5164573
    },
    {
        id: 1314,
        extinto: "NIEVE ARCENIO FERREYRA",
        nacimiento: "1933-08-05",
        defuncion: "1997-10-06",
        sector: "Sector Verde",
        latitud: -31.5676367,
        longitud: -63.5164091
    },
    {
        id: 1315,
        extinto: "MARIA CANDELARIA JUAREZ",
        nacimiento: "1936-08-09",
        defuncion: "2021-12-01",
        sector: "Sector Verde",
        latitud: -31.5676367,
        longitud: -63.5164091
    },
    {
        id: 1316,
        extinto: "CHIAPPO CLAUDIA",
        nacimiento: "1966-11-20",
        defuncion: "2001-11-14",
        sector: "Sector Verde",
        latitud: -31.5676456,
        longitud: -63.5164180
    },
    {
        id: 1317,
        extinto: "LUISA PORCEL DE PERALTA",
        nacimiento: "2009-09-24",
        defuncion: "2009-09-24",
        sector: "Sector Verde",
        latitud: -31.5676546,
        longitud: -63.5164268
    },
    {
        id: 1318,
        extinto: "AGUSTIN ACEVEDO",
        nacimiento: "2009-09-24",
        defuncion: "2009-09-24",
        sector: "Sector Verde",
        latitud: -31.5676546,
        longitud: -63.5164268
    },
    {
        id: 1319,
        extinto: "EMILIO RITO ACEVEDO",
        nacimiento: "2009-09-24",
        defuncion: "2009-09-24",
        sector: "Sector Verde",
        latitud: -31.5676546,
        longitud: -63.5164268
    },
    {
        id: 1320,
        extinto: "MARIA TERESA ALVAREZ",
        nacimiento: "2009-09-24",
        defuncion: "2009-09-24",
        sector: "Sector Verde",
        latitud: -31.5676546,
        longitud: -63.5164268
    },
    {
        id: 1321,
        extinto: "AUDISIO RICARDO LUIS",
        nacimiento: "1945-04-01",
        defuncion: "2014-11-02",
        sector: "Sector Verde",
        latitud: -31.5676815,
        longitud: -63.5164533
    },
    {
        id: 1322,
        extinto: "MOISES EMILIO LUQUE",
        nacimiento: "1937-07-26",
        defuncion: "2020-02-02",
        sector: "Sector Verde",
        latitud: -31.5676904,
        longitud: -63.5164621
    },
    {
        id: 1323,
        extinto: "RAMON EDUARDO BERTOLEZ",
        nacimiento: "1938-06-26",
        defuncion: "2011-01-29",
        sector: "Sector Verde",
        latitud: -31.5676904,
        longitud: -63.5164621
    },
    {
        id: 1324,
        extinto: "PERALTA CESAR JOSE",
        nacimiento: "2003-05-13",
        defuncion: "2003-05-13",
        sector: "Sector Verde",
        latitud: -31.5676994,
        longitud: -63.5164710
    },
    {
        id: 1325,
        extinto: "BENZAQUEN PAULA PERALTA",
        nacimiento: "1995-11-24",
        defuncion: "1996-01-02",
        sector: "Sector Verde",
        latitud: -31.5676994,
        longitud: -63.5164710
    },
    {
        id: 1326,
        extinto: "ORLANDI ALICIA YOLANDA",
        nacimiento: "1943-04-30",
        defuncion: "2006-08-07",
        sector: "Sector Verde",
        latitud: -31.5677083,
        longitud: -63.5164798
    },
    {
        id: 1327,
        extinto: "NOEMI ROSA ORLANDI",
        nacimiento: "1931-04-22",
        defuncion: "2017-12-18",
        sector: "Sector Verde",
        latitud: -31.5677083,
        longitud: -63.5164798
    },
    {
        id: 1328,
        extinto: "ZULEMA GLADYS ORLANDIS",
        nacimiento: "1936-09-10",
        defuncion: "2022-06-09",
        sector: "Sector Verde",
        latitud: -31.5677083,
        longitud: -63.5164798
    },
    {
        id: 1329,
        extinto: "ROCHA MARIA ADOLFINA",
        nacimiento: "1925-06-13",
        defuncion: "2001-03-25",
        sector: "Sector Verde",
        latitud: -31.5676143,
        longitud: -63.5164188
    },
    {
        id: 1330,
        extinto: "ACUÑA VICENTE",
        nacimiento: "1918-01-30",
        defuncion: "2014-03-31",
        sector: "Sector Verde",
        latitud: -31.5676143,
        longitud: -63.5164188
    },
    {
        id: 1331,
        extinto: "CHIAPPO LUIS SILVESTRE",
        nacimiento: "1935-04-08",
        defuncion: "2005-02-15",
        sector: "Sector Verde",
        latitud: -31.5676322,
        longitud: -63.5164365
    },
    {
        id: 1332,
        extinto: "BLANCA SUSANA ACEVEDO",
        nacimiento: "1939-05-13",
        defuncion: "2023-09-05",
        sector: "Sector Verde",
        latitud: -31.5676322,
        longitud: -63.5164365
    },
    {
        id: 1333,
        extinto: "ALMADA ANTONIA",
        nacimiento: "1939-01-17",
        defuncion: "2001-07-20",
        sector: "Sector Verde",
        latitud: -31.5676412,
        longitud: -63.5164453
    },
    {
        id: 1334,
        extinto: "CHIAPPO PEDRO",
        nacimiento: "1900-10-10",
        defuncion: "1943-03-05",
        sector: "Sector Verde",
        latitud: -31.5676502,
        longitud: -63.5164542
    },
    {
        id: 1335,
        extinto: "MAGDALENA BONETTO DE CHIAPPO",
        nacimiento: "1900-10-10",
        defuncion: "1976-07-15",
        sector: "Sector Verde",
        latitud: -31.5676502,
        longitud: -63.5164542
    },
    {
        id: 1336,
        extinto: "CHIAPPO ANTONIO",
        nacimiento: "1900-10-10",
        defuncion: "1973-08-03",
        sector: "Sector Verde",
        latitud: -31.5676502,
        longitud: -63.5164542
    },
    {
        id: 1337,
        extinto: "CHIAPPO HECTOR",
        nacimiento: "1938-02-22",
        defuncion: "2003-09-25",
        sector: "Sector Verde",
        latitud: -31.5676502,
        longitud: -63.5164542
    },
    {
        id: 1338,
        extinto: "GARDA GLADIS ESTHER",
        nacimiento: "1953-08-03",
        defuncion: "2013-10-12",
        sector: "Sector Verde",
        latitud: -31.5676502,
        longitud: -63.5164542
    },
    {
        id: 1339,
        extinto: "GARDA MIGUEL",
        nacimiento: "1925-03-17",
        defuncion: "1997-09-27",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1340,
        extinto: "BONETO MARIA TERESA",
        nacimiento: "1916-06-26",
        defuncion: "2003-01-21",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1341,
        extinto: "GLADEZ JUAN CARLOS",
        nacimiento: "1943-10-26",
        defuncion: "2000-04-06",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1342,
        extinto: "BONETO ANTONIO",
        nacimiento: "1940-10-10",
        defuncion: "1949-11-21",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1343,
        extinto: "BONETO LUIS ANGEL",
        nacimiento: "1940-04-10",
        defuncion: "1965-11-30",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1344,
        extinto: "BONETTO SILVESTRE",
        nacimiento: "1900-04-01",
        defuncion: "1938-03-01",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1345,
        extinto: "BONETTO MIGUEL",
        nacimiento: "1940-04-01",
        defuncion: "1978-07-29",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1346,
        extinto: "TERESA B DE BONETTO",
        nacimiento: "1940-04-01",
        defuncion: "1970-09-22",
        sector: "Sector Verde",
        latitud: -31.5676591,
        longitud: -63.5164630
    },
    {
        id: 1347,
        extinto: "BONETTO ALDO JUAN",
        nacimiento: "1931-04-01",
        defuncion: "2011-01-18",
        sector: "Sector Verde",
        latitud: -31.5676681,
        longitud: -63.5164718
    },
    {
        id: 1348,
        extinto: "BONETTO ANGEL",
        nacimiento: "1948-01-01",
        defuncion: "2002-05-16",
        sector: "Sector Verde",
        latitud: -31.5676681,
        longitud: -63.5164718
    },
    {
        id: 1349,
        extinto: "MARIA C DE BONETTO",
        nacimiento: "1914-04-01",
        defuncion: "1992-05-12",
        sector: "Sector Verde",
        latitud: -31.5676681,
        longitud: -63.5164718
    },
    {
        id: 1350,
        extinto: "ROMANO CARLOS LIRIO",
        nacimiento: "1930-01-02",
        defuncion: "2008-07-25",
        sector: "Sector Verde",
        latitud: -31.5676770,
        longitud: -63.5164807
    },
    {
        id: 1351,
        extinto: "VIRGOLINI ELVA ANTONIA",
        nacimiento: "1931-03-08",
        defuncion: "2014-08-21",
        sector: "Sector Verde",
        latitud: -31.5676770,
        longitud: -63.5164807
    },
    {
        id: 1352,
        extinto: "PERALTA CESAR HORACIO",
        nacimiento: "2003-05-13",
        defuncion: "2003-05-13",
        sector: "Sector Verde",
        latitud: -31.5676950,
        longitud: -63.5164983
    },
    {
        id: 1353,
        extinto: "ROBERTO PEDRO PAVIATTO",
        nacimiento: "1972-03-23",
        defuncion: "2022-08-30",
        sector: "Sector Verde",
        latitud: -31.5676950,
        longitud: -63.5164983
    },
    {
        id: 1354,
        extinto: "ALVAREZ JESUS LIDO",
        nacimiento: "1919-07-05",
        defuncion: "1999-09-03",
        sector: "Sector Verde",
        latitud: -31.5675391,
        longitud: -63.5162812
    },
    {
        id: 1355,
        extinto: "BAICOCHEA JUANA R",
        nacimiento: "1926-08-04",
        defuncion: "1977-06-29",
        sector: "Sector Verde",
        latitud: -31.5675391,
        longitud: -63.5162812
    },
    {
        id: 1356,
        extinto: "AIDA DEL VALLE ACOSTA",
        nacimiento: "1952-04-10",
        defuncion: "2022-07-16",
        sector: "Sector Verde",
        latitud: -31.5675391,
        longitud: -63.5162812
    },
    {
        id: 1357,
        extinto: "TISSERA JUAN CARLOS",
        nacimiento: "1951-11-02",
        defuncion: "2013-07-22",
        sector: "Sector Verde",
        latitud: -31.5675495,
        longitud: -63.5162876
    },
    {
        id: 1358,
        extinto: "ALVAREZ MIRTA IRIS",
        nacimiento: "1950-02-02",
        defuncion: "2015-09-16",
        sector: "Sector Verde",
        latitud: -31.5675495,
        longitud: -63.5162876
    },
    {
        id: 1359,
        extinto: "JULIO ARGENTINO RODRIGUEZ",
        nacimiento: "2010-03-17",
        defuncion: "2010-03-17",
        sector: "Sector Verde",
        latitud: -31.5675598,
        longitud: -63.5162940
    },
    {
        id: 1360,
        extinto: "MONCADA FRANCISCA LIVIA",
        nacimiento: "1930-04-12",
        defuncion: "2010-03-16",
        sector: "Sector Verde",
        latitud: -31.5675598,
        longitud: -63.5162940
    },
    {
        id: 1361,
        extinto: "RODRIGUEZ PEDRO TRISTAN",
        nacimiento: "1924-04-14",
        defuncion: "2000-09-24",
        sector: "Sector Verde",
        latitud: -31.5675598,
        longitud: -63.5162940
    },
    {
        id: 1362,
        extinto: "RODRIGUEZ MARIA LUZ",
        nacimiento: "1998-07-01",
        defuncion: "2003-02-17",
        sector: "Sector Verde",
        latitud: -31.5675702,
        longitud: -63.5163004
    },
    {
        id: 1363,
        extinto: "RODRIGUEZ LUIS DE GONZALO",
        nacimiento: "1931-05-13",
        defuncion: "2003-02-23",
        sector: "Sector Verde",
        latitud: -31.5675805,
        longitud: -63.5163069
    },
    {
        id: 1364,
        extinto: "MARIA ANGELICA GONZALEZ",
        nacimiento: "1924-10-14",
        defuncion: "2006-07-16",
        sector: "Sector Verde",
        latitud: -31.5675805,
        longitud: -63.5163069
    },
    {
        id: 1365,
        extinto: "DAMIAN ALBERTO LUCARELLI",
        nacimiento: "1982-07-31",
        defuncion: "2016-07-14",
        sector: "Sector Verde",
        latitud: -31.5675909,
        longitud: -63.5163133
    },
    {
        id: 1366,
        extinto: "RAMON  ALBERTO  LUCARELLI",
        nacimiento: "1950-09-29",
        defuncion: "2024-06-23",
        sector: "Sector Verde",
        latitud: -31.5675909,
        longitud: -63.5163133
    },
    {
        id: 1367,
        extinto: "MARIA ISABEL CORSETTI",
        nacimiento: "1938-12-31",
        defuncion: "2023-06-11",
        sector: "Sector Verde",
        latitud: -31.5676012,
        longitud: -63.5163197
    },
    {
        id: 1368,
        extinto: "VIJANDE NILDA",
        nacimiento: "1934-08-10",
        defuncion: "2002-06-04",
        sector: "Sector Verde",
        latitud: -31.5676116,
        longitud: -63.5163261
    },
    {
        id: 1369,
        extinto: "PATRIA DANTE AGUSTIN",
        nacimiento: "1958-06-27",
        defuncion: "1961-09-20",
        sector: "Sector Verde",
        latitud: -31.5676116,
        longitud: -63.5163261
    },
    {
        id: 1370,
        extinto: "PATRIA ALDO EMILIO",
        nacimiento: "1929-02-22",
        defuncion: "2015-07-13",
        sector: "Sector Verde",
        latitud: -31.5676116,
        longitud: -63.5163261
    },
    {
        id: 1371,
        extinto: "SCABON DOMINGO",
        nacimiento: "1951-01-15",
        defuncion: "2012-12-16",
        sector: "Sector Verde",
        latitud: -31.5676323,
        longitud: -63.5163390
    },
    {
        id: 1372,
        extinto: "LUIS ALFONSO CORSETTI",
        nacimiento: "1942-09-26",
        defuncion: "2010-04-03",
        sector: "Sector Verde",
        latitud: -31.5675294,
        longitud: -63.5163025
    },
    {
        id: 1373,
        extinto: "ARMANINI ELISA ANTONIA",
        nacimiento: "1945-01-15",
        defuncion: "2014-06-23",
        sector: "Sector Verde",
        latitud: -31.5675294,
        longitud: -63.5163025
    },
    {
        id: 1374,
        extinto: "CAVALLERA NALDO FEDERICO CARLOS",
        nacimiento: "1937-09-11",
        defuncion: "2017-11-02",
        sector: "Sector Verde",
        latitud: -31.5675397,
        longitud: -63.5163090
    },
    {
        id: 1375,
        extinto: "FAJARDO ALFREDO GENARO",
        nacimiento: "1940-01-20",
        defuncion: "1996-11-13",
        sector: "Sector Verde",
        latitud: -31.5675501,
        longitud: -63.5163154
    },
    {
        id: 1376,
        extinto: "PEDRAZA ERNESTO ISMAEL",
        nacimiento: "1937-01-04",
        defuncion: "2002-02-09",
        sector: "Sector Verde",
        latitud: -31.5675604,
        longitud: -63.5163218
    },
    {
        id: 1377,
        extinto: "RAMON FAUSTINO LOPEZ",
        nacimiento: "1943-02-15",
        defuncion: "2011-07-13",
        sector: "Sector Verde",
        latitud: -31.5675708,
        longitud: -63.5163283
    },
    {
        id: 1378,
        extinto: "JUAN AMADEO LOPEZ",
        nacimiento: "1947-04-18",
        defuncion: "2023-01-17",
        sector: "Sector Verde",
        latitud: -31.5675708,
        longitud: -63.5163283
    },
    {
        id: 1379,
        extinto: "PATRIA BLANCA",
        nacimiento: "1924-04-24",
        defuncion: "2002-06-01",
        sector: "Sector Verde",
        latitud: -31.5675811,
        longitud: -63.5163347
    },
    {
        id: 1380,
        extinto: "RODRIGUEZ FELIZ JACINTO",
        nacimiento: "1922-03-25",
        defuncion: "2011-06-23",
        sector: "Sector Verde",
        latitud: -31.5675811,
        longitud: -63.5163347
    },
    {
        id: 1381,
        extinto: "RODRIGUEZ COLAZO FELIZ",
        nacimiento: "1900-11-20",
        defuncion: "1977-07-26",
        sector: "Sector Verde",
        latitud: -31.5675811,
        longitud: -63.5163347
    },
    {
        id: 1382,
        extinto: "LUQUE AZUCENA",
        nacimiento: "1900-07-19",
        defuncion: "1979-09-30",
        sector: "Sector Verde",
        latitud: -31.5675811,
        longitud: -63.5163347
    },
    {
        id: 1383,
        extinto: "RODRIGUEZ MARIA ISABEL",
        nacimiento: "1900-10-10",
        defuncion: "1944-06-26",
        sector: "Sector Verde",
        latitud: -31.5675811,
        longitud: -63.5163347
    },
    {
        id: 1384,
        extinto: "GAMITO MATILDE SOLEDAD",
        nacimiento: "1913-05-12",
        defuncion: "2005-10-06",
        sector: "Sector Verde",
        latitud: -31.5675915,
        longitud: -63.5163411
    },
    {
        id: 1385,
        extinto: "LUQUE VICTOR ALFONSO",
        nacimiento: "1904-03-26",
        defuncion: "1993-03-24",
        sector: "Sector Verde",
        latitud: -31.5675915,
        longitud: -63.5163411
    },
    {
        id: 1386,
        extinto: "MATILDE BEATRIZ LUQUE",
        nacimiento: "1938-08-05",
        defuncion: "2014-11-11",
        sector: "Sector Verde",
        latitud: -31.5675915,
        longitud: -63.5163411
    },
    {
        id: 1387,
        extinto: "ROLANDO MARTHA SUSANA",
        nacimiento: "1945-09-04",
        defuncion: "2007-11-22",
        sector: "Sector Verde",
        latitud: -31.5676018,
        longitud: -63.5163475
    },
    {
        id: 1388,
        extinto: "LORENZO OMAR CARBALLO",
        nacimiento: "1947-10-03",
        defuncion: "1990-01-10",
        sector: "Sector Verde",
        latitud: -31.5676122,
        longitud: -63.5163540
    },
    {
        id: 1389,
        extinto: "MOLINARI JOSE",
        nacimiento: "1905-06-22",
        defuncion: "1991-06-27",
        sector: "Sector Verde",
        latitud: -31.5676226,
        longitud: -63.5163604
    },
    {
        id: 1390,
        extinto: "OTTONELLI DOMINGA",
        nacimiento: "1904-02-01",
        defuncion: "1997-07-24",
        sector: "Sector Verde",
        latitud: -31.5676226,
        longitud: -63.5163604
    },
    {
        id: 1391,
        extinto: "LUQUE RAMON CARMEN",
        nacimiento: "1911-09-21",
        defuncion: "2004-06-18",
        sector: "Sector Verde",
        latitud: -31.5675175,
        longitud: -63.5163286
    },
    {
        id: 1392,
        extinto: "ANDRADA MARIA ORTENCIA",
        nacimiento: "1914-09-20",
        defuncion: "2005-04-16",
        sector: "Sector Verde",
        latitud: -31.5675175,
        longitud: -63.5163286
    },
    {
        id: 1393,
        extinto: "BENEDICTO MUÑOZ",
        nacimiento: "1913-04-28",
        defuncion: "1977-12-20",
        sector: "Sector Verde",
        latitud: -31.5675382,
        longitud: -63.5163414
    },
    {
        id: 1394,
        extinto: "TERESA DEIDERI DE MUÑOZ",
        nacimiento: "1918-03-20",
        defuncion: "2000-12-03",
        sector: "Sector Verde",
        latitud: -31.5675382,
        longitud: -63.5163414
    },
    {
        id: 1395,
        extinto: "MANUEL MUÑOZ",
        nacimiento: "1902-01-01",
        defuncion: "1988-07-14",
        sector: "Sector Verde",
        latitud: -31.5675382,
        longitud: -63.5163414
    },
    {
        id: 1396,
        extinto: "PEDRO ALBERTO CORREA",
        nacimiento: "1948-03-28",
        defuncion: "2022-10-20",
        sector: "Sector Verde",
        latitud: -31.5675486,
        longitud: -63.5163479
    },
    {
        id: 1397,
        extinto: "VICTORIO RIOCIOTTI LUCARELLI",
        nacimiento: "1924-07-21",
        defuncion: "1984-05-01",
        sector: "Sector Verde",
        latitud: -31.5675589,
        longitud: -63.5163543
    },
    {
        id: 1398,
        extinto: "UTRERA JUANA SARA",
        nacimiento: "1926-02-15",
        defuncion: "2007-10-19",
        sector: "Sector Verde",
        latitud: -31.5675589,
        longitud: -63.5163543
    },
    {
        id: 1399,
        extinto: "NORMA AZUCENA CARBALLO",
        nacimiento: "1949-11-23",
        defuncion: "1997-05-21",
        sector: "Sector Verde",
        latitud: -31.5675796,
        longitud: -63.5163671
    },
    {
        id: 1400,
        extinto: "HECTOR LUIS CEAGLIO",
        nacimiento: "1940-11-30",
        defuncion: "2019-05-30",
        sector: "Sector Verde",
        latitud: -31.5675900,
        longitud: -63.5163736
    },
    {
        id: 1401,
        extinto: "ELIA  AMANDA FERREYRA",
        nacimiento: "1935-08-15",
        defuncion: "2024-06-14",
        sector: "Sector Verde",
        latitud: -31.5675900,
        longitud: -63.5163736
    },
    {
        id: 1402,
        extinto: "ESTHER MARGARITA MARENGO",
        nacimiento: "1944-02-03",
        defuncion: "2001-02-17",
        sector: "Sector Verde",
        latitud: -31.5676107,
        longitud: -63.5163864
    },
    {
        id: 1403,
        extinto: "JOSE ANGEL RUMACHELLA",
        nacimiento: "1936-07-09",
        defuncion: "2006-12-10",
        sector: "Sector Verde",
        latitud: -31.5676107,
        longitud: -63.5163864
    },
    {
        id: 1404,
        extinto: "FACUNDO RUMACHELLA",
        nacimiento: "1996-01-14",
        defuncion: "1996-05-06",
        sector: "Sector Verde",
        latitud: -31.5676107,
        longitud: -63.5163864
    },
    {
        id: 1405,
        extinto: "TESTA JOSE ANTONIO",
        nacimiento: "1918-01-17",
        defuncion: "1992-03-19",
        sector: "Sector Verde",
        latitud: -31.5675078,
        longitud: -63.5163500
    },
    {
        id: 1406,
        extinto: "PLEYTAVINO NELIDA",
        nacimiento: "1923-09-29",
        defuncion: "2000-12-10",
        sector: "Sector Verde",
        latitud: -31.5675078,
        longitud: -63.5163500
    },
    {
        id: 1407,
        extinto: "TESTA LUIS ANGEL",
        nacimiento: "1952-03-11",
        defuncion: "2011-01-07",
        sector: "Sector Verde",
        latitud: -31.5675078,
        longitud: -63.5163500
    },
    {
        id: 1408,
        extinto: "JULIA ARGENTINA ZANELLA",
        nacimiento: "1952-07-09",
        defuncion: "2023-08-29",
        sector: "Sector Verde",
        latitud: -31.5675181,
        longitud: -63.5163564
    },
    {
        id: 1409,
        extinto: "JORDAN FERREYRA",
        nacimiento: "1935-10-05",
        defuncion: "2007-01-15",
        sector: "Sector Verde",
        latitud: -31.5675285,
        longitud: -63.5163628
    },
    {
        id: 1410,
        extinto: "TERESA LEONTINA LUDUEÑA",
        nacimiento: "1937-08-11",
        defuncion: "2019-10-22",
        sector: "Sector Verde",
        latitud: -31.5675285,
        longitud: -63.5163628
    },
    {
        id: 1411,
        extinto: "NILDA ESTER LEGUIZAMON",
        nacimiento: "1947-08-28",
        defuncion: "2022-11-10",
        sector: "Sector Verde",
        latitud: -31.5675389,
        longitud: -63.5163693
    },
    {
        id: 1412,
        extinto: "CROIS BLANCA ELVIRA",
        nacimiento: "1932-11-03",
        defuncion: "2001-07-03",
        sector: "Sector Verde",
        latitud: -31.5675492,
        longitud: -63.5163757
    },
    {
        id: 1413,
        extinto: "HECTOR GIANINI",
        nacimiento: "1937-10-17",
        defuncion: "1997-10-29",
        sector: "Sector Verde",
        latitud: -31.5675492,
        longitud: -63.5163757
    },
    {
        id: 1414,
        extinto: "GIANINI JULIO H",
        nacimiento: "1986-06-07",
        defuncion: "1997-06-07",
        sector: "Sector Verde",
        latitud: -31.5675492,
        longitud: -63.5163757
    },
    {
        id: 1415,
        extinto: "ELIDA DOMINGA PESCE",
        nacimiento: "1942-08-20",
        defuncion: "2019-06-28",
        sector: "Sector Verde",
        latitud: -31.5675596,
        longitud: -63.5163821
    },
    {
        id: 1416,
        extinto: "PERALTA ELDO GODOFREDO",
        nacimiento: "1944-10-17",
        defuncion: "2005-05-16",
        sector: "Sector Verde",
        latitud: -31.5675906,
        longitud: -63.5164014
    },
    {
        id: 1417,
        extinto: "BUSSANO MATEO JOSE",
        nacimiento: "1950-02-04",
        defuncion: "2001-08-17",
        sector: "Sector Verde",
        latitud: -31.5676010,
        longitud: -63.5164078
    },
    {
        id: 1418,
        extinto: "PERALTA RAMON ERASMO",
        nacimiento: "1936-05-16",
        defuncion: "2003-08-01",
        sector: "Sector Verde",
        latitud: -31.5674207,
        longitud: -63.5162218
    },
    {
        id: 1419,
        extinto: "CAGNASSO ESTHER",
        nacimiento: "1937-02-02",
        defuncion: "1989-05-20",
        sector: "Sector Verde",
        latitud: -31.5674207,
        longitud: -63.5162218
    },
    {
        id: 1420,
        extinto: "MARTY LEON ELIAS",
        nacimiento: "1907-06-29",
        defuncion: "1967-04-30",
        sector: "Sector Verde",
        latitud: -31.5674314,
        longitud: -63.5162272
    },
    {
        id: 1421,
        extinto: "MARTY EMMA DE BONALDI",
        nacimiento: "1910-10-28",
        defuncion: "1984-08-09",
        sector: "Sector Verde",
        latitud: -31.5674314,
        longitud: -63.5162272
    },
    {
        id: 1422,
        extinto: "LAURA ELENA DEL C. DE J.",
        nacimiento: "1972-10-30",
        defuncion: "1973-06-30",
        sector: "Sector Verde",
        latitud: -31.5674314,
        longitud: -63.5162272
    },
    {
        id: 1423,
        extinto: "RAMUNDA ROBERTO SEGUNDO",
        nacimiento: "1939-07-01",
        defuncion: "2009-12-07",
        sector: "Sector Verde",
        latitud: -31.5674422,
        longitud: -63.5162325
    },
    {
        id: 1424,
        extinto: "NORMA DEL VALLE CHIALVA",
        nacimiento: "1958-01-13",
        defuncion: "1989-10-14",
        sector: "Sector Verde",
        latitud: -31.5674530,
        longitud: -63.5162378
    },
    {
        id: 1425,
        extinto: "PEREZ MARIA",
        nacimiento: "1915-10-04",
        defuncion: "2001-08-06",
        sector: "Sector Verde",
        latitud: -31.5674638,
        longitud: -63.5162432
    },
    {
        id: 1426,
        extinto: "CARLOS ALBERTO AUDISIO",
        nacimiento: "1940-05-16",
        defuncion: "2008-04-15",
        sector: "Sector Verde",
        latitud: -31.5674746,
        longitud: -63.5162485
    },
    {
        id: 1427,
        extinto: "MARIA TEOFILA ORTEGA",
        nacimiento: "1950-05-24",
        defuncion: "2019-07-12",
        sector: "Sector Verde",
        latitud: -31.5674746,
        longitud: -63.5162485
    },
    {
        id: 1428,
        extinto: "ACOSTA ELVIO TEOFILIO",
        nacimiento: "1930-02-19",
        defuncion: "1988-03-16",
        sector: "Sector Verde",
        latitud: -31.5674854,
        longitud: -63.5162539
    },
    {
        id: 1429,
        extinto: "ANA MARIA ACOSTA",
        nacimiento: "1934-06-10",
        defuncion: "2021-08-22",
        sector: "Sector Verde",
        latitud: -31.5674854,
        longitud: -63.5162539
    },
    {
        id: 1430,
        extinto: "LUDUEÑA ELVIO OSCAR",
        nacimiento: "1936-01-03",
        defuncion: "2013-09-01",
        sector: "Sector Verde",
        latitud: -31.5674962,
        longitud: -63.5162592
    },
    {
        id: 1431,
        extinto: "OSFALDO MARCOS PAVON",
        nacimiento: "1954-08-08",
        defuncion: "2019-12-28",
        sector: "Sector Verde",
        latitud: -31.5674962,
        longitud: -63.5162592
    },
    {
        id: 1432,
        extinto: "SANCHEZ ALEJANDRO MATIAS",
        nacimiento: "2000-05-02",
        defuncion: "2000-05-02",
        sector: "Sector Verde",
        latitud: -31.5675178,
        longitud: -63.5162699
    },
    {
        id: 1433,
        extinto: "JORGE OSCAR ALVAREZ",
        nacimiento: "1954-12-04",
        defuncion: "2023-02-08",
        sector: "Sector Verde",
        latitud: -31.5675178,
        longitud: -63.5162699
    },
    {
        id: 1434,
        extinto: "CELSO PORCEL DE PERALTA",
        nacimiento: "1936-04-06",
        defuncion: "2010-12-03",
        sector: "Sector Verde",
        latitud: -31.5674126,
        longitud: -63.5162441
    },
    {
        id: 1435,
        extinto: "PORCEL DE PERALTA ANA MARIA",
        nacimiento: "1982-03-12",
        defuncion: "1997-01-15",
        sector: "Sector Verde",
        latitud: -31.5674126,
        longitud: -63.5162441
    },
    {
        id: 1436,
        extinto: "GOMEZ NELIDA ROSA",
        nacimiento: "1938-11-30",
        defuncion: "2016-06-04",
        sector: "Sector Verde",
        latitud: -31.5674126,
        longitud: -63.5162441
    },
    {
        id: 1437,
        extinto: "FERREYRA CAROLINA JOSEFA",
        nacimiento: "1924-03-19",
        defuncion: "2017-02-11",
        sector: "Sector Verde",
        latitud: -31.5674234,
        longitud: -63.5162495
    },
    {
        id: 1438,
        extinto: "BERTETTO JULIO DOMINGO",
        nacimiento: "1934-07-01",
        defuncion: "1995-06-06",
        sector: "Sector Verde",
        latitud: -31.5674342,
        longitud: -63.5162548
    },
    {
        id: 1439,
        extinto: "LENCINAS ELDA",
        nacimiento: "1932-03-03",
        defuncion: "2017-01-07",
        sector: "Sector Verde",
        latitud: -31.5674342,
        longitud: -63.5162548
    },
    {
        id: 1440,
        extinto: "BONALDI JOSE LORENZO",
        nacimiento: "1938-08-10",
        defuncion: "2007-06-01",
        sector: "Sector Verde",
        latitud: -31.5674450,
        longitud: -63.5162601
    },
    {
        id: 1441,
        extinto: "SILVIA ELENA BONALDI",
        nacimiento: "1964-03-24",
        defuncion: "1964-03-24",
        sector: "Sector Verde",
        latitud: -31.5674450,
        longitud: -63.5162601
    },
    {
        id: 1442,
        extinto: "LORENZO ELIAS BONALDI",
        nacimiento: "1967-10-22",
        defuncion: "1968-01-07",
        sector: "Sector Verde",
        latitud: -31.5674450,
        longitud: -63.5162601
    },
    {
        id: 1443,
        extinto: "PATRICIA BONALDI",
        nacimiento: "1974-10-24",
        defuncion: "1974-10-24",
        sector: "Sector Verde",
        latitud: -31.5674450,
        longitud: -63.5162601
    },
    {
        id: 1444,
        extinto: "MARIA AMERICA BONALDI",
        nacimiento: "1908-10-26",
        defuncion: "1957-01-17",
        sector: "Sector Verde",
        latitud: -31.5674558,
        longitud: -63.5162655
    },
    {
        id: 1445,
        extinto: "CARLOS BONALDI",
        nacimiento: "1900-12-15",
        defuncion: "1961-06-27",
        sector: "Sector Verde",
        latitud: -31.5674558,
        longitud: -63.5162655
    },
    {
        id: 1446,
        extinto: "ANGELINA CARRARA DE BONALDI",
        nacimiento: "1900-07-29",
        defuncion: "1957-06-28",
        sector: "Sector Verde",
        latitud: -31.5674558,
        longitud: -63.5162655
    },
    {
        id: 1447,
        extinto: "ESPINDOLA ROSA LETICIA",
        nacimiento: "1930-10-28",
        defuncion: "2002-07-05",
        sector: "Sector Verde",
        latitud: -31.5674774,
        longitud: -63.5162762
    },
    {
        id: 1448,
        extinto: "FUENTES BIENVENIDO SIXTO",
        nacimiento: "1920-08-06",
        defuncion: "2003-03-13",
        sector: "Sector Verde",
        latitud: -31.5674774,
        longitud: -63.5162762
    },
    {
        id: 1449,
        extinto: "NIEVA RICARDO DE LAS MERCEDES",
        nacimiento: "1936-01-15",
        defuncion: "2010-01-24",
        sector: "Sector Verde",
        latitud: -31.5674891,
        longitud: -63.5163140
    },
    {
        id: 1450,
        extinto: "NILDA DOLORES GONZALEZ",
        nacimiento: "1926-01-06",
        defuncion: "1999-08-29",
        sector: "Sector Verde",
        latitud: -31.5674891,
        longitud: -63.5163140
    },
    {
        id: 1451,
        extinto: "OSVALDO CESAR VICENTE",
        nacimiento: "1961-11-26",
        defuncion: "2021-12-31",
        sector: "Sector Verde",
        latitud: -31.5674891,
        longitud: -63.5163140
    },
    {
        id: 1452,
        extinto: "NANI ROALD LUIS",
        nacimiento: "1928-12-24",
        defuncion: "2012-02-26",
        sector: "Sector Verde",
        latitud: -31.5674999,
        longitud: -63.5163193
    },
    {
        id: 1453,
        extinto: "AGUIRRE ROBERTO ANIBAL",
        nacimiento: "1938-02-13",
        defuncion: "2017-02-24",
        sector: "Sector Verde",
        latitud: -31.5674027,
        longitud: -63.5162713
    },
    {
        id: 1454,
        extinto: "SANTIAGO BONALDI",
        nacimiento: "1904-08-15",
        defuncion: "1975-10-28",
        sector: "Sector Verde",
        latitud: -31.5674135,
        longitud: -63.5162766
    },
    {
        id: 1455,
        extinto: "TERESA CARRARA DE BONALDI",
        nacimiento: "1905-03-31",
        defuncion: "1993-03-26",
        sector: "Sector Verde",
        latitud: -31.5674135,
        longitud: -63.5162766
    },
    {
        id: 1456,
        extinto: "FARRONI ADELINA SANTA",
        nacimiento: "1911-08-07",
        defuncion: "1986-04-02",
        sector: "Sector Verde",
        latitud: -31.5674243,
        longitud: -63.5162820
    },
    {
        id: 1457,
        extinto: "GAZZONI JOSE",
        nacimiento: "1908-07-15",
        defuncion: "1976-03-10",
        sector: "Sector Verde",
        latitud: -31.5674243,
        longitud: -63.5162820
    },
    {
        id: 1458,
        extinto: "GAZZONI HECTOR RUBEN",
        nacimiento: "1953-04-29",
        defuncion: "2015-08-02",
        sector: "Sector Verde",
        latitud: -31.5674243,
        longitud: -63.5162820
    },
    {
        id: 1459,
        extinto: "DOMINGO SANTIAGO FRASSA",
        nacimiento: "1947-11-25",
        defuncion: "2011-08-29",
        sector: "Sector Verde",
        latitud: -31.5674351,
        longitud: -63.5162873
    },
    {
        id: 1460,
        extinto: "VALIENTE ANDRES",
        nacimiento: "1900-08-01",
        defuncion: "1945-09-20",
        sector: "Sector Verde",
        latitud: -31.5674459,
        longitud: -63.5162926
    },
    {
        id: 1461,
        extinto: "MARCHISONE ISABEL",
        nacimiento: "1900-08-01",
        defuncion: "1959-09-29",
        sector: "Sector Verde",
        latitud: -31.5674459,
        longitud: -63.5162926
    },
    {
        id: 1462,
        extinto: "VALIENTE JUAN BAUTISTA",
        nacimiento: "1900-08-01",
        defuncion: "1961-10-28",
        sector: "Sector Verde",
        latitud: -31.5674459,
        longitud: -63.5162926
    },
    {
        id: 1463,
        extinto: "MULLER MARIA DEL CARMEN",
        nacimiento: "1900-08-01",
        defuncion: "1988-03-03",
        sector: "Sector Verde",
        latitud: -31.5674459,
        longitud: -63.5162926
    },
    {
        id: 1464,
        extinto: "VALIENTE ANTONIO",
        nacimiento: "1900-08-01",
        defuncion: "1967-12-22",
        sector: "Sector Verde",
        latitud: -31.5674459,
        longitud: -63.5162926
    },
    {
        id: 1465,
        extinto: "VALIENTE VICTORIO",
        nacimiento: "1900-08-01",
        defuncion: "1961-10-28",
        sector: "Sector Verde",
        latitud: -31.5674459,
        longitud: -63.5162926
    },
    {
        id: 1466,
        extinto: "MODESTO FRASSA",
        nacimiento: "1925-03-26",
        defuncion: "1975-05-05",
        sector: "Sector Verde",
        latitud: -31.5674675,
        longitud: -63.5163033
    },
    {
        id: 1467,
        extinto: "MARIA MARGARITA SASIA",
        nacimiento: "1925-09-02",
        defuncion: "2018-03-11",
        sector: "Sector Verde",
        latitud: -31.5674675,
        longitud: -63.5163033
    },
    {
        id: 1468,
        extinto: "CORSETTI ALBERTO PASCUAL",
        nacimiento: "1941-09-04",
        defuncion: "2005-04-04",
        sector: "Sector Verde",
        latitud: -31.5674783,
        longitud: -63.5163087
    },
    {
        id: 1469,
        extinto: "TABORDA MARIA ANGELICA",
        nacimiento: "1942-07-28",
        defuncion: "2015-09-24",
        sector: "Sector Verde",
        latitud: -31.5674783,
        longitud: -63.5163087
    },
    {
        id: 1470,
        extinto: "MOYANO DONACIANO N",
        nacimiento: "1936-10-13",
        defuncion: "2000-09-10",
        sector: "Sector Verde",
        latitud: -31.5675097,
        longitud: -63.5162922
    },
    {
        id: 1471,
        extinto: "MOYANO MARIA LIDIA",
        nacimiento: "1932-09-10",
        defuncion: "2008-10-10",
        sector: "Sector Verde",
        latitud: -31.5675097,
        longitud: -63.5162922
    },
    {
        id: 1472,
        extinto: "BERTETTO ADOLFO LUIS",
        nacimiento: "1937-09-30",
        defuncion: "2004-04-10",
        sector: "Sector Verde",
        latitud: -31.5674989,
        longitud: -63.5162868
    },
    {
        id: 1473,
        extinto: "AUDICIO JUAN BAUTISTA",
        nacimiento: "1912-12-12",
        defuncion: "1990-05-27",
        sector: "Sector Verde",
        latitud: -31.5673946,
        longitud: -63.5162936
    },
    {
        id: 1474,
        extinto: "BENJAMINA RAMONA SERRADEL",
        nacimiento: "1923-04-02",
        defuncion: "2009-02-09",
        sector: "Sector Verde",
        latitud: -31.5673946,
        longitud: -63.5162936
    },
    {
        id: 1475,
        extinto: "OMAR ALBERTO FRASSA",
        nacimiento: "1951-01-09",
        defuncion: "2006-01-20",
        sector: "Sector Verde",
        latitud: -31.5674054,
        longitud: -63.5162989
    },
    {
        id: 1476,
        extinto: "MARIA CRISTINA BARRIONUEVO",
        nacimiento: "1954-09-09",
        defuncion: "2021-11-28",
        sector: "Sector Verde",
        latitud: -31.5674054,
        longitud: -63.5162989
    },
    {
        id: 1477,
        extinto: "AGUIRRE JUAN ANTONIO",
        nacimiento: "1930-06-13",
        defuncion: "2003-02-16",
        sector: "Sector Verde",
        latitud: -31.5674162,
        longitud: -63.5163043
    },
    {
        id: 1478,
        extinto: "AGUIRRE-RE IGNACIO",
        nacimiento: "1996-11-12",
        defuncion: "2006-04-07",
        sector: "Sector Verde",
        latitud: -31.5674162,
        longitud: -63.5163043
    },
    {
        id: 1479,
        extinto: "AUDISIO JUAN ALBERTO",
        nacimiento: "1946-06-22",
        defuncion: "2004-07-10",
        sector: "Sector Verde",
        latitud: -31.5674270,
        longitud: -63.5163096
    },
    {
        id: 1480,
        extinto: "TELMO TORAZZA",
        nacimiento: "1935-04-25",
        defuncion: "2008-09-28",
        sector: "Sector Verde",
        latitud: -31.5674378,
        longitud: -63.5163150
    },
    {
        id: 1481,
        extinto: "CELESTINA  ANGELA  CERONI",
        nacimiento: "1937-10-02",
        defuncion: "2023-09-16",
        sector: "Sector Verde",
        latitud: -31.5674378,
        longitud: -63.5163150
    },
    {
        id: 1482,
        extinto: "ELVIRA CORSETTI",
        nacimiento: "1915-10-21",
        defuncion: "2003-07-01",
        sector: "Sector Verde",
        latitud: -31.5674486,
        longitud: -63.5163203
    },
    {
        id: 1483,
        extinto: "RIGAZIO VICTORIO MARIA",
        nacimiento: "1946-05-27",
        defuncion: "1959-09-10",
        sector: "Sector Verde",
        latitud: -31.5674486,
        longitud: -63.5163203
    },
    {
        id: 1484,
        extinto: "MEDINA VIRGINIA",
        nacimiento: "1919-02-18",
        defuncion: "2006-09-14",
        sector: "Sector Verde",
        latitud: -31.5674702,
        longitud: -63.5163310
    },
    {
        id: 1485,
        extinto: "LUDUEÑA ALEJANDRO",
        nacimiento: "1900-01-01",
        defuncion: "1987-05-20",
        sector: "Sector Verde",
        latitud: -31.5674702,
        longitud: -63.5163310
    },
    {
        id: 1486,
        extinto: "LUDUEÑA JULIO ALEJANDRO",
        nacimiento: "1945-01-01",
        defuncion: "1996-06-05",
        sector: "Sector Verde",
        latitud: -31.5674702,
        longitud: -63.5163310
    },
    {
        id: 1487,
        extinto: "GAITE ERNESTO ABEL",
        nacimiento: "1940-09-11",
        defuncion: "1970-06-29",
        sector: "Sector Verde",
        latitud: -31.5674567,
        longitud: -63.5161172
    },
    {
        id: 1488,
        extinto: "ARREGUI TERESA",
        nacimiento: "1919-10-12",
        defuncion: "1972-11-17",
        sector: "Sector Verde",
        latitud: -31.5674567,
        longitud: -63.5161172
    },
    {
        id: 1489,
        extinto: "GAITE FLORIANA",
        nacimiento: "2003-04-22",
        defuncion: "2003-04-22",
        sector: "Sector Verde",
        latitud: -31.5674567,
        longitud: -63.5161172
    },
    {
        id: 1490,
        extinto: "MOCHI MIGUEL ANGEL",
        nacimiento: "1957-10-08",
        defuncion: "2014-03-18",
        sector: "Sector Verde",
        latitud: -31.5674672,
        longitud: -63.5161233
    },
    {
        id: 1491,
        extinto: "AMBROSIO RIOS",
        nacimiento: "1930-12-07",
        defuncion: "2000-09-10",
        sector: "Sector Verde",
        latitud: -31.5674777,
        longitud: -63.5161295
    },
    {
        id: 1492,
        extinto: "ROLANDO ELVA MAGDALENA",
        nacimiento: "1928-09-20",
        defuncion: "2014-08-15",
        sector: "Sector Verde",
        latitud: -31.5674777,
        longitud: -63.5161295
    },
    {
        id: 1493,
        extinto: "ALGARRA JUAN",
        nacimiento: "1930-10-10",
        defuncion: "1960-01-01",
        sector: "Sector Verde",
        latitud: -31.5675196,
        longitud: -63.5161540
    },
    {
        id: 1494,
        extinto: "PRESOTTI SANTOS",
        nacimiento: "1920-10-10",
        defuncion: "2005-05-10",
        sector: "Sector Verde",
        latitud: -31.5675196,
        longitud: -63.5161540
    },
    {
        id: 1495,
        extinto: "PRESOTTI MARIA ANGELA",
        nacimiento: "1915-10-10",
        defuncion: "2005-05-10",
        sector: "Sector Verde",
        latitud: -31.5675196,
        longitud: -63.5161540
    },
    {
        id: 1496,
        extinto: "PRESOTTI ANA",
        nacimiento: "1900-10-10",
        defuncion: "1960-01-01",
        sector: "Sector Verde",
        latitud: -31.5675196,
        longitud: -63.5161540
    },
    {
        id: 1497,
        extinto: "ANZUINELLI AVELINO",
        nacimiento: "2007-09-06",
        defuncion: "2007-09-06",
        sector: "Sector Verde",
        latitud: -31.5675405,
        longitud: -63.5161663
    },
    {
        id: 1498,
        extinto: "ANZUINELLI JORGE OSVALDO",
        nacimiento: "2007-09-06",
        defuncion: "2007-09-06",
        sector: "Sector Verde",
        latitud: -31.5675405,
        longitud: -63.5161663
    },
    {
        id: 1499,
        extinto: "CUELLO OLGA ROSA",
        nacimiento: "2007-09-06",
        defuncion: "2007-09-06",
        sector: "Sector Verde",
        latitud: -31.5675405,
        longitud: -63.5161663
    },
    {
        id: 1500,
        extinto: "CAMPANA ROXANA",
        nacimiento: "2007-09-06",
        defuncion: "2007-09-06",
        sector: "Sector Verde",
        latitud: -31.5675405,
        longitud: -63.5161663
    },
    {
        id: 1501,
        extinto: "ILDA AYDEE FORMENTELLI",
        nacimiento: "1936-10-05",
        defuncion: "2009-04-28",
        sector: "Sector Verde",
        latitud: -31.5675510,
        longitud: -63.5161725
    },
    {
        id: 1502,
        extinto: "FORMENTELLI MARIA INES",
        nacimiento: "1926-08-08",
        defuncion: "2010-03-08",
        sector: "Sector Verde",
        latitud: -31.5675615,
        longitud: -63.5161786
    },
    {
        id: 1503,
        extinto: "MARCELA ALMADA",
        nacimiento: "1994-12-14",
        defuncion: "1994-12-14",
        sector: "Sector Verde",
        latitud: -31.5675615,
        longitud: -63.5161786
    },
    {
        id: 1504,
        extinto: "INES ALMADA",
        nacimiento: "1999-12-29",
        defuncion: "1999-12-29",
        sector: "Sector Verde",
        latitud: -31.5675615,
        longitud: -63.5161786
    },
    {
        id: 1505,
        extinto: "RAMON ANGEL ALMADA",
        nacimiento: "1929-11-20",
        defuncion: "2010-07-26",
        sector: "Sector Verde",
        latitud: -31.5675615,
        longitud: -63.5161786
    },
    {
        id: 1506,
        extinto: "CEBALLOS GLADYS",
        nacimiento: "1947-12-11",
        defuncion: "1994-02-05",
        sector: "Sector Verde",
        latitud: -31.5675824,
        longitud: -63.5161909
    },
    {
        id: 1507,
        extinto: "JUAN CARLOS CAMUSSO",
        nacimiento: "1941-12-20",
        defuncion: "2007-11-26",
        sector: "Sector Verde",
        latitud: -31.5675824,
        longitud: -63.5161909
    },
    {
        id: 1508,
        extinto: "CAMUSSO JAVIER GUSTAVO",
        nacimiento: "1971-08-23",
        defuncion: "2008-03-20",
        sector: "Sector Verde",
        latitud: -31.5675824,
        longitud: -63.5161909
    },
    {
        id: 1509,
        extinto: "ADRIANA DEL VALLE SACILOTTO",
        nacimiento: "1962-10-20",
        defuncion: "2015-03-05",
        sector: "Sector Verde",
        latitud: -31.5675929,
        longitud: -63.5161970
    },
    {
        id: 1510,
        extinto: "PASTORE ESTHER C",
        nacimiento: "1924-04-10",
        defuncion: "2001-11-04",
        sector: "Sector Verde",
        latitud: -31.5676034,
        longitud: -63.5162032
    },
    {
        id: 1511,
        extinto: "CEBALLOS ABEL",
        nacimiento: "1920-08-11",
        defuncion: "2013-02-10",
        sector: "Sector Verde",
        latitud: -31.5676034,
        longitud: -63.5162032
    },
    {
        id: 1512,
        extinto: "RAFAELA AGUSTINA CORSETTI",
        nacimiento: "1940-06-27",
        defuncion: "2021-09-04",
        sector: "Sector Verde",
        latitud: -31.5676139,
        longitud: -63.5162093
    },
    {
        id: 1513,
        extinto: "HUMBERTO ELEAZAR TABORDA",
        nacimiento: "1933-02-02",
        defuncion: "2005-07-09",
        sector: "Sector Verde",
        latitud: -31.5676139,
        longitud: -63.5162093
    },
    {
        id: 1514,
        extinto: "QUINTEROS MIGUEL ANTONIO",
        nacimiento: "1945-04-10",
        defuncion: "2007-01-03",
        sector: "Sector Verde",
        latitud: -31.5676348,
        longitud: -63.5162216
    },
    {
        id: 1515,
        extinto: "MARIA ISABEL LUDUEÑA",
        nacimiento: "1952-12-12",
        defuncion: "2022-04-29",
        sector: "Sector Verde",
        latitud: -31.5676348,
        longitud: -63.5162216
    },
    {
        id: 1516,
        extinto: "ZABALA FROYLAN",
        nacimiento: "1932-03-10",
        defuncion: "2012-06-03",
        sector: "Sector Verde",
        latitud: -31.5676558,
        longitud: -63.5162339
    },
    {
        id: 1517,
        extinto: "ROCA ANTONIA DEL VALLE",
        nacimiento: "1918-03-17",
        defuncion: "1976-07-16",
        sector: "Sector Verde",
        latitud: -31.5674474,
        longitud: -63.5161388
    },
    {
        id: 1518,
        extinto: "LOZA MARIA ELSA",
        nacimiento: "1952-05-26",
        defuncion: "2001-04-09",
        sector: "Sector Verde",
        latitud: -31.5674474,
        longitud: -63.5161388
    },
    {
        id: 1519,
        extinto: "GUILLERMINA LUISA LOZA",
        nacimiento: "1950-12-18",
        defuncion: "2006-05-26",
        sector: "Sector Verde",
        latitud: -31.5674474,
        longitud: -63.5161388
    },
    {
        id: 1520,
        extinto: "LOZA JOSE LUIS",
        nacimiento: "1954-08-25",
        defuncion: "2013-01-24",
        sector: "Sector Verde",
        latitud: -31.5674474,
        longitud: -63.5161388
    },
    {
        id: 1521,
        extinto: "GARCIA ALGARRA  VALENTIN",
        nacimiento: "2011-05-31",
        defuncion: "2011-12-18",
        sector: "Sector Verde",
        latitud: -31.5674579,
        longitud: -63.5161450
    },
    {
        id: 1522,
        extinto: "VALIENTE ALFREDO",
        nacimiento: "2003-05-15",
        defuncion: "2003-05-15",
        sector: "Sector Verde",
        latitud: -31.5674893,
        longitud: -63.5161634
    },
    {
        id: 1523,
        extinto: "VALIENTE JOSE MARIA",
        nacimiento: "1978-01-09",
        defuncion: "2015-05-13",
        sector: "Sector Verde",
        latitud: -31.5674998,
        longitud: -63.5161695
    },
    {
        id: 1524,
        extinto: "RUBIOLO CELSO PEDRO",
        nacimiento: "1936-02-26",
        defuncion: "2006-05-07",
        sector: "Sector Verde",
        latitud: -31.5675103,
        longitud: -63.5161757
    },
    {
        id: 1525,
        extinto: "VALIENTE IRES BLANCA",
        nacimiento: "1935-04-06",
        defuncion: "1989-08-28",
        sector: "Sector Verde",
        latitud: -31.5675103,
        longitud: -63.5161757
    },
    {
        id: 1526,
        extinto: "UTRERA RAMON EDUARDO",
        nacimiento: "1947-10-13",
        defuncion: "2006-07-29",
        sector: "Sector Verde",
        latitud: -31.5675207,
        longitud: -63.5161818
    },
    {
        id: 1527,
        extinto: "DONDO ANA MARIA",
        nacimiento: "1979-07-20",
        defuncion: "2006-08-08",
        sector: "Sector Verde",
        latitud: -31.5675417,
        longitud: -63.5161941
    },
    {
        id: 1528,
        extinto: "JUAN CARLOS ARMANINI",
        nacimiento: "1948-03-23",
        defuncion: "2020-10-13",
        sector: "Sector Verde",
        latitud: -31.5675627,
        longitud: -63.5162064
    },
    {
        id: 1529,
        extinto: "ROMEO ARMANINI",
        nacimiento: "2014-09-18",
        defuncion: "2014-09-18",
        sector: "Sector Verde",
        latitud: -31.5675731,
        longitud: -63.5162125
    },
    {
        id: 1530,
        extinto: "ELISA ARMANINI",
        nacimiento: "2014-09-18",
        defuncion: "2014-09-18",
        sector: "Sector Verde",
        latitud: -31.5675731,
        longitud: -63.5162125
    },
    {
        id: 1531,
        extinto: "GOMEZ MARIA ANTONIA",
        nacimiento: "1922-09-30",
        defuncion: "2014-09-15",
        sector: "Sector Verde",
        latitud: -31.5675731,
        longitud: -63.5162125
    },
    {
        id: 1532,
        extinto: "ALBINA ROSA TEJEDA",
        nacimiento: "1936-06-14",
        defuncion: "2017-06-11",
        sector: "Sector Verde",
        latitud: -31.5675836,
        longitud: -63.5162187
    },
    {
        id: 1533,
        extinto: "RAMON NESTOR ARGUELLO",
        nacimiento: "1933-02-11",
        defuncion: "2013-04-13",
        sector: "Sector Verde",
        latitud: -31.5675836,
        longitud: -63.5162187
    },
    {
        id: 1534,
        extinto: "VIRGIÑO ALBERTO CACIORGNA",
        nacimiento: "1948-04-15",
        defuncion: "2021-04-07",
        sector: "Sector Verde",
        latitud: -31.5676151,
        longitud: -63.5162371
    },
    {
        id: 1535,
        extinto: "MARIA GABRIELA ARENILLAS",
        nacimiento: "1965-05-03",
        defuncion: "2021-06-10",
        sector: "Sector Verde",
        latitud: -31.5676360,
        longitud: -63.5162494
    },
    {
        id: 1536,
        extinto: "NELSON LUIS VIGNOLO",
        nacimiento: "1962-05-25",
        defuncion: "2020-10-02",
        sector: "Sector Verde",
        latitud: -31.5676465,
        longitud: -63.5162555
    },
    {
        id: 1537,
        extinto: "ALGARRA FRANCISCO SANTOS",
        nacimiento: "1924-07-03",
        defuncion: "2000-06-28",
        sector: "Sector Verde",
        latitud: -31.5674361,
        longitud: -63.5161652
    },
    {
        id: 1538,
        extinto: "NORMA IBI CATTANEO",
        nacimiento: "1931-02-05",
        defuncion: "2022-01-17",
        sector: "Sector Verde",
        latitud: -31.5674361,
        longitud: -63.5161652
    },
    {
        id: 1539,
        extinto: "ANA  MARIA  ALGARRA",
        nacimiento: "1954-02-12",
        defuncion: "2024-06-21",
        sector: "Sector Verde",
        latitud: -31.5674361,
        longitud: -63.5161652
    },
    {
        id: 1540,
        extinto: "MARTINEZ JOSE TEOFILO",
        nacimiento: "1933-11-03",
        defuncion: "1990-02-04",
        sector: "Sector Verde",
        latitud: -31.5674465,
        longitud: -63.5161713
    },
    {
        id: 1541,
        extinto: "MARTINEZ TERESITA DE JESUS",
        nacimiento: "1961-07-24",
        defuncion: "1961-07-28",
        sector: "Sector Verde",
        latitud: -31.5674465,
        longitud: -63.5161713
    },
    {
        id: 1542,
        extinto: "MARIANI ELDA ANGELICA",
        nacimiento: "1934-07-29",
        defuncion: "2017-01-22",
        sector: "Sector Verde",
        latitud: -31.5674465,
        longitud: -63.5161713
    },
    {
        id: 1543,
        extinto: "SUAREZ SANTINA",
        nacimiento: "1935-08-12",
        defuncion: "2003-03-23",
        sector: "Sector Verde",
        latitud: -31.5674675,
        longitud: -63.5161836
    },
    {
        id: 1544,
        extinto: "RAMON HUGO RODRIGUEZ",
        nacimiento: "1931-10-24",
        defuncion: "2010-07-22",
        sector: "Sector Verde",
        latitud: -31.5674675,
        longitud: -63.5161836
    },
    {
        id: 1545,
        extinto: "DECCICO ANGEL ANTONIO",
        nacimiento: "1935-07-09",
        defuncion: "2002-07-07",
        sector: "Sector Verde",
        latitud: -31.5674885,
        longitud: -63.5161959
    },
    {
        id: 1546,
        extinto: "ARIAS BLANCA ELENA",
        nacimiento: "1928-10-06",
        defuncion: "2011-07-17",
        sector: "Sector Verde",
        latitud: -31.5674989,
        longitud: -63.5162020
    },
    {
        id: 1547,
        extinto: "DARIOZZI MARIANO",
        nacimiento: "1907-07-08",
        defuncion: "1998-10-28",
        sector: "Sector Verde",
        latitud: -31.5675094,
        longitud: -63.5162082
    },
    {
        id: 1548,
        extinto: "FANANI MARIA MARGARITA",
        nacimiento: "1911-10-26",
        defuncion: "2002-06-27",
        sector: "Sector Verde",
        latitud: -31.5675094,
        longitud: -63.5162082
    },
    {
        id: 1549,
        extinto: "CATALANO VALENTIN LIBERATO",
        nacimiento: "1937-05-15",
        defuncion: "2015-07-17",
        sector: "Sector Verde",
        latitud: -31.5675094,
        longitud: -63.5162082
    },
    {
        id: 1550,
        extinto: "BERRONE MARIA MARGARITA",
        nacimiento: "1910-09-24",
        defuncion: "1991-09-11",
        sector: "Sector Verde",
        latitud: -31.5675199,
        longitud: -63.5162143
    },
    {
        id: 1551,
        extinto: "GONZALEZ JUAN HECTOR",
        nacimiento: "1936-02-08",
        defuncion: "1990-04-27",
        sector: "Sector Verde",
        latitud: -31.5675199,
        longitud: -63.5162143
    },
    {
        id: 1552,
        extinto: "BASSI LUCIA",
        nacimiento: "2012-02-29",
        defuncion: "2012-02-29",
        sector: "Sector Verde",
        latitud: -31.5675199,
        longitud: -63.5162143
    },
    {
        id: 1553,
        extinto: "GONZALEZ RAUL BONIFACIO",
        nacimiento: "1959-04-03",
        defuncion: "2004-06-29",
        sector: "Sector Verde",
        latitud: -31.5675304,
        longitud: -63.5162205
    },
    {
        id: 1554,
        extinto: "RIVIERE JULIO",
        nacimiento: "1925-12-10",
        defuncion: "2003-09-16",
        sector: "Sector Verde",
        latitud: -31.5675409,
        longitud: -63.5162266
    },
    {
        id: 1555,
        extinto: "JULIO E RIVIÈRE",
        nacimiento: "1944-02-04",
        defuncion: "1944-02-04",
        sector: "Sector Verde",
        latitud: -31.5675409,
        longitud: -63.5162266
    },
    {
        id: 1556,
        extinto: "FLORENTINA VDA. DE RIVIÈRE",
        nacimiento: "1968-06-09",
        defuncion: "1968-06-09",
        sector: "Sector Verde",
        latitud: -31.5675409,
        longitud: -63.5162266
    },
    {
        id: 1557,
        extinto: "MARIA MAGDALENA SOSA",
        nacimiento: "1931-08-06",
        defuncion: "2019-09-05",
        sector: "Sector Verde",
        latitud: -31.5675409,
        longitud: -63.5162266
    },
    {
        id: 1558,
        extinto: "ETHEHUALDO CASORRAN",
        nacimiento: "1933-08-26",
        defuncion: "2015-06-28",
        sector: "Sector Verde",
        latitud: -31.5675618,
        longitud: -63.5162389
    },
    {
        id: 1559,
        extinto: "MANGIERI MARIA DEL CARMEN",
        nacimiento: "1955-07-31",
        defuncion: "2016-07-13",
        sector: "Sector Verde",
        latitud: -31.5675723,
        longitud: -63.5162450
    },
    {
        id: 1560,
        extinto: "GIACOSSA NATALIO CELSO",
        nacimiento: "1939-07-09",
        defuncion: "2016-08-07",
        sector: "Sector Verde",
        latitud: -31.5675828,
        longitud: -63.5162512
    },
    {
        id: 1561,
        extinto: "BUFFA VICENTE BARTOLO",
        nacimiento: "1942-07-28",
        defuncion: "2016-12-21",
        sector: "Sector Verde",
        latitud: -31.5676037,
        longitud: -63.5162635
    },
    {
        id: 1562,
        extinto: "MAIDANA SEGUNDO RAMON",
        nacimiento: "1941-10-02",
        defuncion: "2013-12-11",
        sector: "Sector Verde",
        latitud: -31.5676247,
        longitud: -63.5162758
    },
    {
        id: 1563,
        extinto: "GUEVARA MARIA TERESA",
        nacimiento: "1947-05-13",
        defuncion: "2015-09-28",
        sector: "Sector Verde",
        latitud: -31.5676247,
        longitud: -63.5162758
    },
    {
        id: 1564,
        extinto: "GONZALEZ SHEIRLEY TIZIANA",
        nacimiento: "2002-07-21",
        defuncion: "2002-10-17",
        sector: "Sector Verde",
        latitud: -31.5676352,
        longitud: -63.5162819
    },
    {
        id: 1565,
        extinto: "GAITE FELIZ RAMON",
        nacimiento: "1919-07-21",
        defuncion: "2007-08-29",
        sector: "Sector Verde",
        latitud: -31.5674268,
        longitud: -63.5161868
    },
    {
        id: 1566,
        extinto: "VACA RAMONA MAGDALENA",
        nacimiento: "1932-04-25",
        defuncion: "2013-04-18",
        sector: "Sector Verde",
        latitud: -31.5674268,
        longitud: -63.5161868
    },
    {
        id: 1567,
        extinto: "GUEVARA ROBERTO",
        nacimiento: "1917-06-07",
        defuncion: "1995-08-09",
        sector: "Sector Verde",
        latitud: -31.5674268,
        longitud: -63.5161868
    },
    {
        id: 1568,
        extinto: "MARIANI ATILIO SEGUNDO",
        nacimiento: "1905-08-27",
        defuncion: "1981-07-05",
        sector: "Sector Verde",
        latitud: -31.5674372,
        longitud: -63.5161930
    },
    {
        id: 1569,
        extinto: "GUMERSINDA RUIZ DE MARIANI",
        nacimiento: "1910-10-28",
        defuncion: "2007-01-02",
        sector: "Sector Verde",
        latitud: -31.5674372,
        longitud: -63.5161930
    },
    {
        id: 1570,
        extinto: "AUDISIO HILDA AIDE",
        nacimiento: "1922-05-28",
        defuncion: "2005-05-29",
        sector: "Sector Verde",
        latitud: -31.5674477,
        longitud: -63.5161991
    },
    {
        id: 1571,
        extinto: "MERLO CARLOS ROBERTO",
        nacimiento: "1918-08-04",
        defuncion: "2007-03-12",
        sector: "Sector Verde",
        latitud: -31.5674477,
        longitud: -63.5161991
    },
    {
        id: 1572,
        extinto: "MANTESE PEDRO",
        nacimiento: "1883-08-01",
        defuncion: "1957-08-21",
        sector: "Sector Verde",
        latitud: -31.5674582,
        longitud: -63.5162053
    },
    {
        id: 1573,
        extinto: "MANTESE PEDRO (HIJO)",
        nacimiento: "1913-04-02",
        defuncion: "1960-11-18",
        sector: "Sector Verde",
        latitud: -31.5674582,
        longitud: -63.5162053
    },
    {
        id: 1574,
        extinto: "MARIA OLIVA DE MANTESE",
        nacimiento: "1900-08-18",
        defuncion: "1968-01-22",
        sector: "Sector Verde",
        latitud: -31.5674582,
        longitud: -63.5162053
    },
    {
        id: 1575,
        extinto: "BELTRAMO ANDRES DOMINGO",
        nacimiento: "1929-08-26",
        defuncion: "1992-06-18",
        sector: "Sector Verde",
        latitud: -31.5674582,
        longitud: -63.5162053
    },
    {
        id: 1576,
        extinto: "FRANCISCO ANDRES BELTRAMO",
        nacimiento: "1928-06-20",
        defuncion: "2009-07-26",
        sector: "Sector Verde",
        latitud: -31.5674687,
        longitud: -63.5162114
    },
    {
        id: 1577,
        extinto: "ERNESTO JAVIER GARCIA",
        nacimiento: "1939-11-15",
        defuncion: "2021-10-22",
        sector: "Sector Verde",
        latitud: -31.5674687,
        longitud: -63.5162114
    },
    {
        id: 1578,
        extinto: "WALTER GERMAN FERREYRA",
        nacimiento: "1968-03-05",
        defuncion: "2020-01-20",
        sector: "Sector Verde",
        latitud: -31.5674792,
        longitud: -63.5162176
    },
    {
        id: 1579,
        extinto: "RAMON AMADO FERREYRA",
        nacimiento: "1939-05-04",
        defuncion: "2022-06-29",
        sector: "Sector Verde",
        latitud: -31.5674792,
        longitud: -63.5162176
    },
    {
        id: 1580,
        extinto: "GIACOSSA NORBERTO CARLOS",
        nacimiento: "1900-12-12",
        defuncion: "1900-12-12",
        sector: "Sector Verde",
        latitud: -31.5674896,
        longitud: -63.5162237
    },
    {
        id: 1581,
        extinto: "GIACOSSA DOMINGO",
        nacimiento: "1900-11-11",
        defuncion: "1900-11-11",
        sector: "Sector Verde",
        latitud: -31.5674896,
        longitud: -63.5162237
    },
    {
        id: 1582,
        extinto: "FANTONE MARGARITA",
        nacimiento: "1916-03-01",
        defuncion: "2006-07-06",
        sector: "Sector Verde",
        latitud: -31.5674896,
        longitud: -63.5162237
    },
    {
        id: 1583,
        extinto: "AIMAR HUGO JUAN",
        nacimiento: "1936-12-04",
        defuncion: "2009-08-26",
        sector: "Sector Verde",
        latitud: -31.5675001,
        longitud: -63.5162298
    },
    {
        id: 1584,
        extinto: "RIOS NIZ ARNALDO",
        nacimiento: "1900-05-31",
        defuncion: "1980-02-26",
        sector: "Sector Verde",
        latitud: -31.5675001,
        longitud: -63.5162298
    },
    {
        id: 1585,
        extinto: "PLEITAVINO RENE ANSELMO",
        nacimiento: "1942-07-05",
        defuncion: "2010-05-24",
        sector: "Sector Verde",
        latitud: -31.5675211,
        longitud: -63.5162421
    },
    {
        id: 1586,
        extinto: "LUDUEÑAMARIA ROSA",
        nacimiento: "1923-06-15",
        defuncion: "2006-12-16",
        sector: "Sector Verde",
        latitud: -31.5675315,
        longitud: -63.5162483
    },
    {
        id: 1587,
        extinto: "PAVON CARDELIO",
        nacimiento: "1940-10-10",
        defuncion: "1992-04-10",
        sector: "Sector Verde",
        latitud: -31.5675315,
        longitud: -63.5162483
    },
    {
        id: 1588,
        extinto: "CEJAS RAMONA DEL ROSARIO",
        nacimiento: "2006-12-19",
        defuncion: "2006-12-19",
        sector: "Sector Verde",
        latitud: -31.5675315,
        longitud: -63.5162483
    },
    {
        id: 1589,
        extinto: "ROBLEDO DE FUNES DIONISIA",
        nacimiento: "2006-12-19",
        defuncion: "2006-12-19",
        sector: "Sector Verde",
        latitud: -31.5675315,
        longitud: -63.5162483
    },
    {
        id: 1590,
        extinto: "PAVON MARTA",
        nacimiento: "2006-12-19",
        defuncion: "2006-12-19",
        sector: "Sector Verde",
        latitud: -31.5675315,
        longitud: -63.5162483
    },
    {
        id: 1591,
        extinto: "PAVON CARLITOS",
        nacimiento: "2006-12-19",
        defuncion: "2006-12-19",
        sector: "Sector Verde",
        latitud: -31.5675315,
        longitud: -63.5162483
    },
    {
        id: 1592,
        extinto: "PAVON FAUSTO ROSARIO",
        nacimiento: "1940-09-06",
        defuncion: "1986-02-03",
        sector: "Sector Verde",
        latitud: -31.5675420,
        longitud: -63.5162544
    },
    {
        id: 1593,
        extinto: "GUGLIELMONE ALBERTO JUAN",
        nacimiento: "1948-08-14",
        defuncion: "2007-01-03",
        sector: "Sector Verde",
        latitud: -31.5675525,
        longitud: -63.5162606
    },
    {
        id: 1594,
        extinto: "ALVAREZ JOSE VALENTIN",
        nacimiento: "1912-10-29",
        defuncion: "1994-12-31",
        sector: "Sector Verde",
        latitud: -31.5675630,
        longitud: -63.5162667
    },
    {
        id: 1595,
        extinto: "PALACIOS JUSTA FLORINDA",
        nacimiento: "1920-02-29",
        defuncion: "2011-06-02",
        sector: "Sector Verde",
        latitud: -31.5675630,
        longitud: -63.5162667
    },
    {
        id: 1596,
        extinto: "PALACIOS JOSEFINA TRINIDAD",
        nacimiento: "2011-06-08",
        defuncion: "2011-06-08",
        sector: "Sector Verde",
        latitud: -31.5675630,
        longitud: -63.5162667
    },
    {
        id: 1597,
        extinto: "PALACIOS RAMON",
        nacimiento: "2011-06-08",
        defuncion: "2011-06-08",
        sector: "Sector Verde",
        latitud: -31.5675630,
        longitud: -63.5162667
    },
    {
        id: 1598,
        extinto: "CASAS JOSEFA MARGARITA",
        nacimiento: "2011-06-08",
        defuncion: "2011-06-08",
        sector: "Sector Verde",
        latitud: -31.5675630,
        longitud: -63.5162667
    },
    {
        id: 1599,
        extinto: "MONTENEGRO ESTANISLAO",
        nacimiento: "1933-09-08",
        defuncion: "2015-03-05",
        sector: "Sector Verde",
        latitud: -31.5675735,
        longitud: -63.5162728
    },
    {
        id: 1600,
        extinto: "CARLOS IVO VARAS",
        nacimiento: "1939-03-21",
        defuncion: "2009-07-18",
        sector: "Sector Verde",
        latitud: -31.5675839,
        longitud: -63.5162790
    },
    {
        id: 1601,
        extinto: "BUSTAMANTE UBAL LUCINDO",
        nacimiento: "2012-11-12",
        defuncion: "2012-11-12",
        sector: "Sector Verde",
        latitud: -31.5675839,
        longitud: -63.5162790
    },
    {
        id: 1602,
        extinto: "RODRIGUEZ GRACIELA AIDA",
        nacimiento: "1964-05-13",
        defuncion: "2015-05-04",
        sector: "Sector Verde",
        latitud: -31.5675944,
        longitud: -63.5162851
    },
    {
        id: 1603,
        extinto: "ANTONIO CAVALLERA",
        nacimiento: "2015-05-14",
        defuncion: "2015-05-14",
        sector: "Sector Verde",
        latitud: -31.5676049,
        longitud: -63.5162913
    },
    {
        id: 1604,
        extinto: "MARGARITA ABRATTE",
        nacimiento: "2015-05-14",
        defuncion: "2015-05-14",
        sector: "Sector Verde",
        latitud: -31.5676049,
        longitud: -63.5162913
    },
    {
        id: 1605,
        extinto: "ELENA CAVALLERA",
        nacimiento: "2015-05-14",
        defuncion: "2015-05-14",
        sector: "Sector Verde",
        latitud: -31.5676049,
        longitud: -63.5162913
    },
    {
        id: 1606,
        extinto: "ELIDA CAVALLERA",
        nacimiento: "2015-05-14",
        defuncion: "2015-05-14",
        sector: "Sector Verde",
        latitud: -31.5676049,
        longitud: -63.5162913
    },
    {
        id: 1607,
        extinto: "ATILIO CAVALLERA",
        nacimiento: "2015-05-14",
        defuncion: "2015-05-14",
        sector: "Sector Verde",
        latitud: -31.5676049,
        longitud: -63.5162913
    },
    {
        id: 1608,
        extinto: "NESTOR CAVALLERA",
        nacimiento: "2015-05-14",
        defuncion: "2015-05-14",
        sector: "Sector Verde",
        latitud: -31.5676049,
        longitud: -63.5162913
    },
    {
        id: 1609,
        extinto: "FUENTES EVELIO ITALO",
        nacimiento: "1942-07-04",
        defuncion: "2012-10-29",
        sector: "Sector Verde",
        latitud: -31.5676154,
        longitud: -63.5162974
    },
    {
        id: 1610,
        extinto: "GÜIZZO TOMAS",
        nacimiento: "1929-01-10",
        defuncion: "2001-07-07",
        sector: "Sector Amarillo",
        latitud: -31.5674780,
        longitud: -63.5160706
    },
    {
        id: 1611,
        extinto: "PEDANO VIRGINIA ANGELICA",
        nacimiento: "1984-03-20",
        defuncion: "2009-12-29",
        sector: "Sector Amarillo",
        latitud: -31.5674884,
        longitud: -63.5160768
    },
    {
        id: 1612,
        extinto: "JESUS  ESTEBAN  PEDANO",
        nacimiento: "1939-12-31",
        defuncion: "2023-03-17",
        sector: "Sector Amarillo",
        latitud: -31.5674884,
        longitud: -63.5160768
    },
    {
        id: 1613,
        extinto: "CEJAS ALFREDO",
        nacimiento: "1932-07-02",
        defuncion: "2004-07-05",
        sector: "Sector Amarillo",
        latitud: -31.5674989,
        longitud: -63.5160830
    },
    {
        id: 1614,
        extinto: "NOELIA SOLEDAD FERREYRA",
        nacimiento: "1987-05-14",
        defuncion: "2007-02-11",
        sector: "Sector Amarillo",
        latitud: -31.5675093,
        longitud: -63.5160892
    },
    {
        id: 1615,
        extinto: "PERALTA VICTOR HUGO",
        nacimiento: "1945-06-24",
        defuncion: "2009-05-05",
        sector: "Sector Amarillo",
        latitud: -31.5675302,
        longitud: -63.5161016
    },
    {
        id: 1616,
        extinto: "PABLO ALBERTO CARNIEL",
        nacimiento: "1954-07-07",
        defuncion: "2022-05-28",
        sector: "Sector Amarillo",
        latitud: -31.5675407,
        longitud: -63.5161078
    },
    {
        id: 1617,
        extinto: "RAMELLO ELENA DE",
        nacimiento: "1921-09-16",
        defuncion: "2001-01-23",
        sector: "Sector Amarillo",
        latitud: -31.5675512,
        longitud: -63.5161140
    },
    {
        id: 1618,
        extinto: "SORQUETTI MAFALDA R. DE",
        nacimiento: "1923-12-01",
        defuncion: "2008-07-04",
        sector: "Sector Amarillo",
        latitud: -31.5675616,
        longitud: -63.5161202
    },
    {
        id: 1619,
        extinto: "SORQUETTI MIGUEL",
        nacimiento: "1918-06-05",
        defuncion: "1974-07-23",
        sector: "Sector Amarillo",
        latitud: -31.5675616,
        longitud: -63.5161202
    },
    {
        id: 1620,
        extinto: "FERNANDEZ MIGUEL ALBERTO",
        nacimiento: "1946-11-15",
        defuncion: "2016-08-19",
        sector: "Sector Amarillo",
        latitud: -31.5675721,
        longitud: -63.5161264
    },
    {
        id: 1621,
        extinto: "SARMIENTO ISABEL ESTANISLADA",
        nacimiento: "1935-03-06",
        defuncion: "2016-08-10",
        sector: "Sector Amarillo",
        latitud: -31.5675825,
        longitud: -63.5161326
    },
    {
        id: 1622,
        extinto: "CARABANTE JERONIMO",
        nacimiento: "2011-12-05",
        defuncion: "2017-11-28",
        sector: "Sector Amarillo",
        latitud: -31.5675930,
        longitud: -63.5161388
    },
    {
        id: 1623,
        extinto: "LEGUIZAMON RAGIEL JACINTO",
        nacimiento: "1922-09-16",
        defuncion: "2002-11-17",
        sector: "Sector Amarillo",
        latitud: -31.5676139,
        longitud: -63.5161512
    },
    {
        id: 1624,
        extinto: "LEGUIZAMON MARTHA ISABEL",
        nacimiento: "1929-10-27",
        defuncion: "2005-10-20",
        sector: "Sector Amarillo",
        latitud: -31.5676139,
        longitud: -63.5161512
    },
    {
        id: 1625,
        extinto: "LEGUISAMON  ESTER",
        nacimiento: "1925-07-09",
        defuncion: "2006-10-17",
        sector: "Sector Amarillo",
        latitud: -31.5676139,
        longitud: -63.5161512
    },
    {
        id: 1626,
        extinto: "NN IGNACIO CARRANZA-ASTRADA",
        nacimiento: "2022-11-26",
        defuncion: "2022-11-26",
        sector: "Sector Amarillo",
        latitud: -31.5676243,
        longitud: -63.5161574
    },
    {
        id: 1627,
        extinto: "OSCAR  ANTONIO  CARANDINO",
        nacimiento: "1958-10-24",
        defuncion: "2024-06-24",
        sector: "Sector Amarillo",
        latitud: -31.5676452,
        longitud: -63.5161698
    },
    {
        id: 1628,
        extinto: "AYALA JUAN GABRIEL",
        nacimiento: "2001-07-16",
        defuncion: "2002-11-22",
        sector: "Sector Amarillo",
        latitud: -31.5676557,
        longitud: -63.5161760
    },
    {
        id: 1629,
        extinto: "RAUL HECTOR ROSAS",
        nacimiento: "1936-10-08",
        defuncion: "2020-09-01",
        sector: "Sector Amarillo",
        latitud: -31.5676557,
        longitud: -63.5161760
    },
    {
        id: 1630,
        extinto: "SERRANO PEDRO",
        nacimiento: "1926-01-01",
        defuncion: "2006-12-11",
        sector: "Sector Verde",
        latitud: -31.5674686,
        longitud: -63.5160922
    },
    {
        id: 1631,
        extinto: "MARIA AGUSTINA ZARZENON",
        nacimiento: "1918-08-15",
        defuncion: "2008-10-25",
        sector: "Sector Verde",
        latitud: -31.5674686,
        longitud: -63.5160922
    },
    {
        id: 1632,
        extinto: "JUANA ELENA TEJEDA",
        nacimiento: "2009-02-03",
        defuncion: "2009-02-03",
        sector: "Sector Verde",
        latitud: -31.5674790,
        longitud: -63.5160984
    },
    {
        id: 1633,
        extinto: "GAITE EMILIA FATIMA",
        nacimiento: "1951-12-27",
        defuncion: "2014-12-16",
        sector: "Sector Verde",
        latitud: -31.5674790,
        longitud: -63.5160984
    },
    {
        id: 1634,
        extinto: "ALBACHIARO JUAN",
        nacimiento: "1932-06-25",
        defuncion: "1992-09-21",
        sector: "Sector Verde",
        latitud: -31.5675104,
        longitud: -63.5161170
    },
    {
        id: 1635,
        extinto: "MEIRONE ROSA MARIA",
        nacimiento: "1909-01-07",
        defuncion: "1991-03-21",
        sector: "Sector Verde",
        latitud: -31.5675104,
        longitud: -63.5161170
    },
    {
        id: 1636,
        extinto: "GIRAUDO CARLOS JORGE",
        nacimiento: "1901-09-20",
        defuncion: "1954-12-26",
        sector: "Sector Verde",
        latitud: -31.5675104,
        longitud: -63.5161170
    },
    {
        id: 1637,
        extinto: "GIRAUDO ELSA JUANA",
        nacimiento: "1938-09-19",
        defuncion: "2015-08-03",
        sector: "Sector Verde",
        latitud: -31.5675104,
        longitud: -63.5161170
    },
    {
        id: 1638,
        extinto: "ALBACHIARO JULIO CESAR",
        nacimiento: "1970-04-21",
        defuncion: "2013-09-03",
        sector: "Sector Verde",
        latitud: -31.5675209,
        longitud: -63.5161232
    },
    {
        id: 1639,
        extinto: "TEJEDA CRESENCIO DIEGO",
        nacimiento: "2012-10-05",
        defuncion: "2012-10-05",
        sector: "Sector Verde",
        latitud: -31.5675313,
        longitud: -63.5161294
    },
    {
        id: 1640,
        extinto: "CORZO JOSEFA",
        nacimiento: "2012-10-05",
        defuncion: "2012-10-05",
        sector: "Sector Verde",
        latitud: -31.5675313,
        longitud: -63.5161294
    },
    {
        id: 1641,
        extinto: "AMAYA JOSE RAMON",
        nacimiento: "2012-10-05",
        defuncion: "2012-10-05",
        sector: "Sector Verde",
        latitud: -31.5675313,
        longitud: -63.5161294
    },
    {
        id: 1642,
        extinto: "BAZAN HECTOR RAMON",
        nacimiento: "1944-04-17",
        defuncion: "2015-08-26",
        sector: "Sector Verde",
        latitud: -31.5675313,
        longitud: -63.5161294
    },
    {
        id: 1643,
        extinto: "LERDA GABRIEL",
        nacimiento: "1987-06-18",
        defuncion: "1987-06-18",
        sector: "Sector Verde",
        latitud: -31.5675418,
        longitud: -63.5161356
    },
    {
        id: 1644,
        extinto: "LERDA MARA EMILSE",
        nacimiento: "1989-04-13",
        defuncion: "1989-04-26",
        sector: "Sector Verde",
        latitud: -31.5675418,
        longitud: -63.5161356
    },
    {
        id: 1645,
        extinto: "LERDA FLORENTINO",
        nacimiento: "1916-05-26",
        defuncion: "1994-07-23",
        sector: "Sector Verde",
        latitud: -31.5675418,
        longitud: -63.5161356
    },
    {
        id: 1646,
        extinto: "LUDUEÑA SARA FELISA",
        nacimiento: "1922-08-06",
        defuncion: "1998-01-16",
        sector: "Sector Verde",
        latitud: -31.5675418,
        longitud: -63.5161356
    },
    {
        id: 1647,
        extinto: "NELSO ENRIQUE SASIA",
        nacimiento: "1934-07-30",
        defuncion: "2003-08-25",
        sector: "Sector Verde",
        latitud: -31.5675836,
        longitud: -63.5161604
    },
    {
        id: 1648,
        extinto: "ANITA GUMERSINDA MANDRILE",
        nacimiento: "1939-02-17",
        defuncion: "2021-07-02",
        sector: "Sector Verde",
        latitud: -31.5675836,
        longitud: -63.5161604
    },
    {
        id: 1649,
        extinto: "NN CAMUSSO",
        nacimiento: "1993-03-23",
        defuncion: "1993-03-23",
        sector: "Sector Verde",
        latitud: -31.5675940,
        longitud: -63.5161666
    },
    {
        id: 1650,
        extinto: "VICTOR LUIS GIODA",
        nacimiento: "1946-07-02",
        defuncion: "2022-12-29",
        sector: "Sector Verde",
        latitud: -31.5676254,
        longitud: -63.5161852
    },
    {
        id: 1651,
        extinto: "PEREYRA OSCAR",
        nacimiento: "1924-12-19",
        defuncion: "2006-10-04",
        sector: "Sector Amarillo",
        latitud: -31.5675145,
        longitud: -63.5160196
    },
    {
        id: 1652,
        extinto: "ILDA NOEMI AMIONE",
        nacimiento: "2018-07-30",
        defuncion: "2018-07-30",
        sector: "Sector Amarillo",
        latitud: -31.5675145,
        longitud: -63.5160196
    },
    {
        id: 1653,
        extinto: "ROJAS RUBEN ADOLFO",
        nacimiento: "2015-06-09",
        defuncion: "2015-06-09",
        sector: "Sector Amarillo",
        latitud: -31.5675352,
        longitud: -63.5160324
    },
    {
        id: 1654,
        extinto: "RODOLFO JUAN DENTI",
        nacimiento: "1948-08-13",
        defuncion: "2024-03-15",
        sector: "Sector Amarillo",
        latitud: -31.5675352,
        longitud: -63.5160324
    },
    {
        id: 1655,
        extinto: "BRIA ROGELIO",
        nacimiento: "1930-07-14",
        defuncion: "1999-09-14",
        sector: "Sector Amarillo",
        latitud: -31.5675456,
        longitud: -63.5160388
    },
    {
        id: 1656,
        extinto: "PONS MARIA",
        nacimiento: "1910-08-24",
        defuncion: "1989-11-01",
        sector: "Sector Amarillo",
        latitud: -31.5675456,
        longitud: -63.5160388
    },
    {
        id: 1657,
        extinto: "NOEMI  CAROLE  CATTANEO",
        nacimiento: "1935-02-03",
        defuncion: "2024-06-17",
        sector: "Sector Amarillo",
        latitud: -31.5675456,
        longitud: -63.5160388
    },
    {
        id: 1658,
        extinto: "JUNCOS BASTIAN",
        nacimiento: "2017-01-25",
        defuncion: "2017-01-27",
        sector: "Sector Amarillo",
        latitud: -31.5675663,
        longitud: -63.5160517
    },
    {
        id: 1659,
        extinto: "JUNCOS LOGAN",
        nacimiento: "2017-01-25",
        defuncion: "2017-01-29",
        sector: "Sector Amarillo",
        latitud: -31.5675663,
        longitud: -63.5160517
    },
    {
        id: 1660,
        extinto: "TABORDA JUANA NELIDA",
        nacimiento: "1915-08-04",
        defuncion: "2002-11-11",
        sector: "Sector Amarillo",
        latitud: -31.5675767,
        longitud: -63.5160581
    },
    {
        id: 1661,
        extinto: "JUNCOS TOMAS AGUSTIN",
        nacimiento: "2008-02-05",
        defuncion: "2008-02-07",
        sector: "Sector Amarillo",
        latitud: -31.5675767,
        longitud: -63.5160581
    },
    {
        id: 1662,
        extinto: "LUQUE JOSE MARTIN",
        nacimiento: "1931-06-27",
        defuncion: "2013-01-07",
        sector: "Sector Amarillo",
        latitud: -31.5675767,
        longitud: -63.5160581
    },
    {
        id: 1663,
        extinto: "SERGIO GUSTAVO BRIA",
        nacimiento: "1960-11-12",
        defuncion: "2019-08-11",
        sector: "Sector Amarillo",
        latitud: -31.5675974,
        longitud: -63.5160709
    },
    {
        id: 1664,
        extinto: "AMADA GENOVEVA LUDUEÑA",
        nacimiento: "1915-12-31",
        defuncion: "2007-06-21",
        sector: "Sector Amarillo",
        latitud: -31.5676077,
        longitud: -63.5160773
    },
    {
        id: 1665,
        extinto: "BRUNO FEDERICO",
        nacimiento: "1915-11-10",
        defuncion: "1990-07-21",
        sector: "Sector Amarillo",
        latitud: -31.5676388,
        longitud: -63.5160966
    },
    {
        id: 1666,
        extinto: "MIGLIETTA VICENTA RAFAELA",
        nacimiento: "1916-10-24",
        defuncion: "1971-06-24",
        sector: "Sector Amarillo",
        latitud: -31.5676388,
        longitud: -63.5160966
    },
    {
        id: 1667,
        extinto: "GOMEZ VICTOR HUGO",
        nacimiento: "1971-05-26",
        defuncion: "1993-12-15",
        sector: "Sector Amarillo",
        latitud: -31.5675048,
        longitud: -63.5160410
    },
    {
        id: 1668,
        extinto: "CRISTIAN GABRIEL TABORDA",
        nacimiento: "1994-05-13",
        defuncion: "2001-08-08",
        sector: "Sector Amarillo",
        latitud: -31.5675152,
        longitud: -63.5160474
    },
    {
        id: 1669,
        extinto: "RIVATA MIGUEL ALDO",
        nacimiento: "1941-04-10",
        defuncion: "2011-05-21",
        sector: "Sector Amarillo",
        latitud: -31.5675255,
        longitud: -63.5160538
    },
    {
        id: 1670,
        extinto: "GOMEZ LAURA ROSA",
        nacimiento: "1922-10-21",
        defuncion: "2003-05-09",
        sector: "Sector Amarillo",
        latitud: -31.5675359,
        longitud: -63.5160603
    },
    {
        id: 1671,
        extinto: "FIGUEREDO ROBERTO FRANCISCO",
        nacimiento: "1935-07-09",
        defuncion: "2007-02-12",
        sector: "Sector Amarillo",
        latitud: -31.5675359,
        longitud: -63.5160603
    },
    {
        id: 1672,
        extinto: "ALBANO JUANA ANITA",
        nacimiento: "1917-09-19",
        defuncion: "2012-11-19",
        sector: "Sector Amarillo",
        latitud: -31.5675462,
        longitud: -63.5160667
    },
    {
        id: 1673,
        extinto: "LASTRA MOISES",
        nacimiento: "2012-11-23",
        defuncion: "2012-11-23",
        sector: "Sector Amarillo",
        latitud: -31.5675462,
        longitud: -63.5160667
    },
    {
        id: 1674,
        extinto: "MARTINEZ MARIA ETELVINA",
        nacimiento: "2012-11-23",
        defuncion: "2012-11-23",
        sector: "Sector Amarillo",
        latitud: -31.5675462,
        longitud: -63.5160667
    },
    {
        id: 1675,
        extinto: "HERRERA JUSTO PASTOR",
        nacimiento: "1916-05-12",
        defuncion: "2011-08-01",
        sector: "Sector Amarillo",
        latitud: -31.5675566,
        longitud: -63.5160731
    },
    {
        id: 1676,
        extinto: "FELISA ROSA NORIEGA DE HERRERA",
        nacimiento: "1904-07-24",
        defuncion: "1992-03-09",
        sector: "Sector Amarillo",
        latitud: -31.5675669,
        longitud: -63.5160795
    },
    {
        id: 1677,
        extinto: "ANGEL ALFONSO HERRERA",
        nacimiento: "1978-10-27",
        defuncion: "1978-10-27",
        sector: "Sector Amarillo",
        latitud: -31.5675669,
        longitud: -63.5160795
    },
    {
        id: 1678,
        extinto: "LUIS ALFREDO HERRERA",
        nacimiento: "1927-11-28",
        defuncion: "1949-04-20",
        sector: "Sector Amarillo",
        latitud: -31.5675669,
        longitud: -63.5160795
    },
    {
        id: 1679,
        extinto: "VIOLETA DEL VALLE HERRERA",
        nacimiento: "1936-07-15",
        defuncion: "2017-07-19",
        sector: "Sector Amarillo",
        latitud: -31.5675669,
        longitud: -63.5160795
    },
    {
        id: 1680,
        extinto: "ROBERTO RAMON DANIELE",
        nacimiento: "1948-09-17",
        defuncion: "2022-07-05",
        sector: "Sector Amarillo",
        latitud: -31.5675773,
        longitud: -63.5160859
    },
    {
        id: 1681,
        extinto: "ANA  TEOFILA  MARTINI",
        nacimiento: "1944-03-15",
        defuncion: "2024-05-27",
        sector: "Sector Amarillo",
        latitud: -31.5676084,
        longitud: -63.5161051
    },
    {
        id: 1682,
        extinto: "ALARCON JULIO ROBERTO",
        nacimiento: "1926-01-09",
        defuncion: "2001-02-17",
        sector: "Sector Amarillo",
        latitud: -31.5675466,
        longitud: -63.5159484
    },
    {
        id: 1683,
        extinto: "ALARCON ISIDRO",
        nacimiento: "2013-06-27",
        defuncion: "2013-06-27",
        sector: "Sector Amarillo",
        latitud: -31.5675466,
        longitud: -63.5159484
    },
    {
        id: 1684,
        extinto: "PEREZ MARIA JOSEFA",
        nacimiento: "2013-06-27",
        defuncion: "2013-06-27",
        sector: "Sector Amarillo",
        latitud: -31.5675466,
        longitud: -63.5159484
    },
    {
        id: 1685,
        extinto: "BRANDAN JUAN ANGEL",
        nacimiento: "2006-10-12",
        defuncion: "2006-10-12",
        sector: "Sector Amarillo",
        latitud: -31.5675570,
        longitud: -63.5159547
    },
    {
        id: 1686,
        extinto: "ROLANDO FRANCISCO V.",
        nacimiento: "1927-08-01",
        defuncion: "2010-08-08",
        sector: "Sector Amarillo",
        latitud: -31.5675674,
        longitud: -63.5159611
    },
    {
        id: 1687,
        extinto: "ISABEL JOSEFA CALCATERRA",
        nacimiento: "1931-10-02",
        defuncion: "2019-02-11",
        sector: "Sector Amarillo",
        latitud: -31.5675674,
        longitud: -63.5159611
    },
    {
        id: 1688,
        extinto: "SOLA STELLA MARIS",
        nacimiento: "1957-05-08",
        defuncion: "2005-08-17",
        sector: "Sector Amarillo",
        latitud: -31.5675778,
        longitud: -63.5159674
    },
    {
        id: 1689,
        extinto: "TAPIA RAMON SECUNDINO",
        nacimiento: "1922-07-05",
        defuncion: "1995-03-17",
        sector: "Sector Amarillo",
        latitud: -31.5676090,
        longitud: -63.5159865
    },
    {
        id: 1690,
        extinto: "JUNCOS CANDIDA ROSA",
        nacimiento: "1929-01-26",
        defuncion: "2000-01-25",
        sector: "Sector Amarillo",
        latitud: -31.5676090,
        longitud: -63.5159865
    },
    {
        id: 1691,
        extinto: "TAPIA TERESA SUSANA",
        nacimiento: "1994-02-03",
        defuncion: "2000-09-27",
        sector: "Sector Amarillo",
        latitud: -31.5676090,
        longitud: -63.5159865
    },
    {
        id: 1692,
        extinto: "GUIZZO MARIA ESTHER",
        nacimiento: "1930-10-31",
        defuncion: "2007-08-15",
        sector: "Sector Amarillo",
        latitud: -31.5676297,
        longitud: -63.5159992
    },
    {
        id: 1693,
        extinto: "ALEJANDRA ABACA",
        nacimiento: "1904-09-09",
        defuncion: "1964-06-17",
        sector: "Sector Amarillo",
        latitud: -31.5676401,
        longitud: -63.5160055
    },
    {
        id: 1694,
        extinto: "VICENTE ALBACHIARO",
        nacimiento: "1908-01-04",
        defuncion: "1981-04-25",
        sector: "Sector Amarillo",
        latitud: -31.5676401,
        longitud: -63.5160055
    },
    {
        id: 1695,
        extinto: "SOSA DAMIAN",
        nacimiento: "1929-08-04",
        defuncion: "2013-09-27",
        sector: "Sector Amarillo",
        latitud: -31.5676401,
        longitud: -63.5160055
    },
    {
        id: 1696,
        extinto: "ALBACHIARO ALBA",
        nacimiento: "1934-01-10",
        defuncion: "2015-04-11",
        sector: "Sector Amarillo",
        latitud: -31.5676401,
        longitud: -63.5160055
    },
    {
        id: 1697,
        extinto: "JAIME MIGUEL CERDA",
        nacimiento: "1926-12-12",
        defuncion: "2006-08-24",
        sector: "Sector Amarillo",
        latitud: -31.5676505,
        longitud: -63.5160119
    },
    {
        id: 1698,
        extinto: "DOMINGA FRONTERA DE ZALAZAR",
        nacimiento: "1933-02-05",
        defuncion: "2008-07-05",
        sector: "Sector Amarillo",
        latitud: -31.5676609,
        longitud: -63.5160182
    },
    {
        id: 1699,
        extinto: "ZALAZAR ANASTACIO OMAR",
        nacimiento: "1934-09-05",
        defuncion: "1999-03-15",
        sector: "Sector Amarillo",
        latitud: -31.5676609,
        longitud: -63.5160182
    },
    {
        id: 1700,
        extinto: "GERMAN MOYANO",
        nacimiento: "1903-08-07",
        defuncion: "1941-03-03",
        sector: "Sector Amarillo",
        latitud: -31.5676713,
        longitud: -63.5160246
    },
    {
        id: 1701,
        extinto: "EINAUDI PEDRO",
        nacimiento: "1903-02-01",
        defuncion: "1995-02-05",
        sector: "Sector Amarillo",
        latitud: -31.5676713,
        longitud: -63.5160246
    },
    {
        id: 1702,
        extinto: "HECTOR ANTONIO ISUARDI",
        nacimiento: "1946-05-20",
        defuncion: "1991-04-02",
        sector: "Sector Amarillo",
        latitud: -31.5675370,
        longitud: -63.5159699
    },
    {
        id: 1703,
        extinto: "GALFRE ROMULO",
        nacimiento: "1918-06-07",
        defuncion: "2005-11-07",
        sector: "Sector Amarillo",
        latitud: -31.5675474,
        longitud: -63.5159762
    },
    {
        id: 1704,
        extinto: "ANGELA VICTORIA DAGATTI",
        nacimiento: "1926-04-06",
        defuncion: "2017-06-28",
        sector: "Sector Amarillo",
        latitud: -31.5675474,
        longitud: -63.5159762
    },
    {
        id: 1705,
        extinto: "TABORDA RAUL EDUARDO",
        nacimiento: "1931-07-11",
        defuncion: "2004-07-30",
        sector: "Sector Amarillo",
        latitud: -31.5675578,
        longitud: -63.5159826
    },
    {
        id: 1706,
        extinto: "GREGORIA DIAZ DE RIOS",
        nacimiento: "1912-05-09",
        defuncion: "2005-10-09",
        sector: "Sector Amarillo",
        latitud: -31.5675786,
        longitud: -63.5159952
    },
    {
        id: 1707,
        extinto: "MALIZIA AGUSTIN ANGEL",
        nacimiento: "1998-05-19",
        defuncion: "2008-06-17",
        sector: "Sector Amarillo",
        latitud: -31.5675890,
        longitud: -63.5160016
    },
    {
        id: 1708,
        extinto: "QUAINO HUMBERTO",
        nacimiento: "1900-03-15",
        defuncion: "1971-01-09",
        sector: "Sector Amarillo",
        latitud: -31.5675993,
        longitud: -63.5160079
    },
    {
        id: 1709,
        extinto: "BALBI MARIA FRANCISCA",
        nacimiento: "1900-03-12",
        defuncion: "1970-06-11",
        sector: "Sector Amarillo",
        latitud: -31.5675993,
        longitud: -63.5160079
    },
    {
        id: 1710,
        extinto: "UNIA PIERINO",
        nacimiento: "1921-01-26",
        defuncion: "2014-01-03",
        sector: "Sector Amarillo",
        latitud: -31.5675993,
        longitud: -63.5160079
    },
    {
        id: 1711,
        extinto: "QUAINO ELMA",
        nacimiento: "1925-09-20",
        defuncion: "2014-04-06",
        sector: "Sector Amarillo",
        latitud: -31.5675993,
        longitud: -63.5160079
    },
    {
        id: 1712,
        extinto: "ESTHER CORDELIA PASETTO",
        nacimiento: "1973-12-02",
        defuncion: "2017-05-19",
        sector: "Sector Amarillo",
        latitud: -31.5676097,
        longitud: -63.5160143
    },
    {
        id: 1713,
        extinto: "FRANCISCO OSCAR RODRIGUEZ",
        nacimiento: "1935-02-14",
        defuncion: "2022-06-08",
        sector: "Sector Amarillo",
        latitud: -31.5676097,
        longitud: -63.5160143
    },
    {
        id: 1714,
        extinto: "QUINTEROS LUCIA ALBERTA",
        nacimiento: "1927-09-13",
        defuncion: "2006-05-06",
        sector: "Sector Amarillo",
        latitud: -31.5676201,
        longitud: -63.5160206
    },
    {
        id: 1715,
        extinto: "MARTA GRISELDA VACA",
        nacimiento: "1949-12-21",
        defuncion: "2011-01-19",
        sector: "Sector Amarillo",
        latitud: -31.5676201,
        longitud: -63.5160206
    },
    {
        id: 1716,
        extinto: "VACA MARTIN MARCELO",
        nacimiento: "1974-02-26",
        defuncion: "2017-01-12",
        sector: "Sector Amarillo",
        latitud: -31.5676201,
        longitud: -63.5160206
    },
    {
        id: 1717,
        extinto: "PABLO UZIEL CUEVAS",
        nacimiento: "1993-09-11",
        defuncion: "2006-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5676305,
        longitud: -63.5160270
    },
    {
        id: 1718,
        extinto: "MONICA BEATRIZ CABRAL",
        nacimiento: "1971-01-12",
        defuncion: "2017-10-21",
        sector: "Sector Amarillo",
        latitud: -31.5676305,
        longitud: -63.5160270
    },
    {
        id: 1719,
        extinto: "GUIZZO YOLANDA",
        nacimiento: "1926-06-30",
        defuncion: "2009-05-11",
        sector: "Sector Amarillo",
        latitud: -31.5676409,
        longitud: -63.5160333
    },
    {
        id: 1720,
        extinto: "HECTOR JOSE NEGRO",
        nacimiento: "1948-06-11",
        defuncion: "2014-09-28",
        sector: "Sector Amarillo",
        latitud: -31.5676409,
        longitud: -63.5160333
    },
    {
        id: 1721,
        extinto: "TERRANOVA MARIANA",
        nacimiento: "1915-12-05",
        defuncion: "2003-03-06",
        sector: "Sector Amarillo",
        latitud: -31.5676513,
        longitud: -63.5160397
    },
    {
        id: 1722,
        extinto: "NEGRO CARLOS PEDRO",
        nacimiento: "1926-12-07",
        defuncion: "2006-04-02",
        sector: "Sector Amarillo",
        latitud: -31.5676513,
        longitud: -63.5160397
    },
    {
        id: 1723,
        extinto: "GUIZZO ALBINA",
        nacimiento: "1933-03-02",
        defuncion: "2007-11-08",
        sector: "Sector Amarillo",
        latitud: -31.5676513,
        longitud: -63.5160397
    },
    {
        id: 1724,
        extinto: "YOMAHA DORAID MOHAMED",
        nacimiento: "1937-08-18",
        defuncion: "2006-03-20",
        sector: "Sector Amarillo",
        latitud: -31.5676617,
        longitud: -63.5160460
    },
    {
        id: 1725,
        extinto: "GONZALEZ RICARDO RUBEN",
        nacimiento: "1947-01-18",
        defuncion: "2006-03-20",
        sector: "Sector Amarillo",
        latitud: -31.5675378,
        longitud: -63.5159977
    },
    {
        id: 1726,
        extinto: "GAIDO MARIO PEDRO",
        nacimiento: "1937-06-20",
        defuncion: "2005-03-29",
        sector: "Sector Amarillo",
        latitud: -31.5675482,
        longitud: -63.5160040
    },
    {
        id: 1727,
        extinto: "CACERES CARMEN ROSA",
        nacimiento: "1932-01-18",
        defuncion: "2006-04-13",
        sector: "Sector Amarillo",
        latitud: -31.5675586,
        longitud: -63.5160104
    },
    {
        id: 1728,
        extinto: "CAUDANA NELSO RAMON",
        nacimiento: "1938-03-14",
        defuncion: "1993-01-02",
        sector: "Sector Amarillo",
        latitud: -31.5675586,
        longitud: -63.5160104
    },
    {
        id: 1729,
        extinto: "ACOSTA RAMON JERONIMO",
        nacimiento: "1936-07-27",
        defuncion: "2012-12-21",
        sector: "Sector Amarillo",
        latitud: -31.5675793,
        longitud: -63.5160231
    },
    {
        id: 1730,
        extinto: "MARIA ZULMA PEREZ",
        nacimiento: "1935-04-22",
        defuncion: "2022-01-14",
        sector: "Sector Amarillo",
        latitud: -31.5675793,
        longitud: -63.5160231
    },
    {
        id: 1731,
        extinto: "ISIDORO ANTONIO HONGN",
        nacimiento: "1904-05-20",
        defuncion: "1973-03-10",
        sector: "Sector Amarillo",
        latitud: -31.5675897,
        longitud: -63.5160294
    },
    {
        id: 1732,
        extinto: "TERESA M. CEAGLIO DE HONGN",
        nacimiento: "1906-04-17",
        defuncion: "1998-02-06",
        sector: "Sector Amarillo",
        latitud: -31.5675897,
        longitud: -63.5160294
    },
    {
        id: 1733,
        extinto: "MARIO A. HONGN",
        nacimiento: "1957-11-10",
        defuncion: "1963-06-10",
        sector: "Sector Amarillo",
        latitud: -31.5675897,
        longitud: -63.5160294
    },
    {
        id: 1734,
        extinto: "HONGN EDELVE HAYDE",
        nacimiento: "1930-07-11",
        defuncion: "2017-06-17",
        sector: "Sector Amarillo",
        latitud: -31.5676001,
        longitud: -63.5160358
    },
    {
        id: 1735,
        extinto: "MONICA BEATRIZ MANSILLA",
        nacimiento: "1974-04-01",
        defuncion: "2012-05-23",
        sector: "Sector Amarillo",
        latitud: -31.5676105,
        longitud: -63.5160421
    },
    {
        id: 1736,
        extinto: "TULIAN RINA",
        nacimiento: "1947-07-23",
        defuncion: "2010-02-26",
        sector: "Sector Amarillo",
        latitud: -31.5676209,
        longitud: -63.5160484
    },
    {
        id: 1737,
        extinto: "HUGO ALFREDO CARRERA",
        nacimiento: "1943-10-11",
        defuncion: "2021-06-23",
        sector: "Sector Amarillo",
        latitud: -31.5676209,
        longitud: -63.5160484
    },
    {
        id: 1738,
        extinto: "PALACIOS ERNESTO JUAN",
        nacimiento: "1916-10-17",
        defuncion: "1998-05-31",
        sector: "Sector Amarillo",
        latitud: -31.5675722,
        longitud: -63.5157557
    },
    {
        id: 1739,
        extinto: "PALACIOS JUAN DE LA CRUZ",
        nacimiento: "1945-06-23",
        defuncion: "2009-10-29",
        sector: "Sector Amarillo",
        latitud: -31.5675722,
        longitud: -63.5157557
    },
    {
        id: 1740,
        extinto: "MARGARITA JUANA MARGARIA",
        nacimiento: "1928-05-19",
        defuncion: "2019-01-17",
        sector: "Sector Amarillo",
        latitud: -31.5675905,
        longitud: -63.5157673
    },
    {
        id: 1741,
        extinto: "SANTIAGO ISIDRO SACILOTTO",
        nacimiento: "1924-04-04",
        defuncion: "2001-03-27",
        sector: "Sector Amarillo",
        latitud: -31.5676126,
        longitud: -63.5157815
    },
    {
        id: 1742,
        extinto: "ERNESTO BALTAZAR PALACIOS",
        nacimiento: "1949-01-05",
        defuncion: "2020-07-29",
        sector: "Sector Amarillo",
        latitud: -31.5675666,
        longitud: -63.5157677
    },
    {
        id: 1743,
        extinto: "ALARCON ISIDRO ROBERTO",
        nacimiento: "1954-07-16",
        defuncion: "2013-06-25",
        sector: "Sector Amarillo",
        latitud: -31.5675848,
        longitud: -63.5157793
    },
    {
        id: 1744,
        extinto: "ALARCON NORMA DEL VALLE",
        nacimiento: "2016-07-11",
        defuncion: "2016-07-11",
        sector: "Sector Amarillo",
        latitud: -31.5675848,
        longitud: -63.5157793
    },
    {
        id: 1745,
        extinto: "GOMEZ LUIS EDUARDO",
        nacimiento: "1950-05-06",
        defuncion: "1983-08-06",
        sector: "Sector Amarillo",
        latitud: -31.5676070,
        longitud: -63.5157935
    },
    {
        id: 1746,
        extinto: "MARIANI FELIPE",
        nacimiento: "1900-12-17",
        defuncion: "1985-04-09",
        sector: "Sector Amarillo",
        latitud: -31.5676070,
        longitud: -63.5157935
    },
    {
        id: 1747,
        extinto: "IRENE GIULIANI DE MARIANI",
        nacimiento: "1921-09-20",
        defuncion: "2008-09-27",
        sector: "Sector Amarillo",
        latitud: -31.5676070,
        longitud: -63.5157935
    },
    {
        id: 1748,
        extinto: "RAUL ARTURO PEREZ",
        nacimiento: "1929-12-08",
        defuncion: "2016-07-27",
        sector: "Sector Amarillo",
        latitud: -31.5675736,
        longitud: -63.5158034
    },
    {
        id: 1749,
        extinto: "FERREYRA MARIA ALICIA",
        nacimiento: "1916-02-12",
        defuncion: "2011-04-04",
        sector: "Sector Amarillo",
        latitud: -31.5675958,
        longitud: -63.5158175
    },
    {
        id: 1750,
        extinto: "GOMEZ CARLOS ROBERTO",
        nacimiento: "1953-08-27",
        defuncion: "2012-04-12",
        sector: "Sector Amarillo",
        latitud: -31.5675958,
        longitud: -63.5158175
    },
    {
        id: 1751,
        extinto: "GOMEZ ANDRES",
        nacimiento: "1900-12-05",
        defuncion: "1981-03-02",
        sector: "Sector Amarillo",
        latitud: -31.5675498,
        longitud: -63.5158038
    },
    {
        id: 1752,
        extinto: "PEREYRA CELIA",
        nacimiento: "1900-10-30",
        defuncion: "1992-02-19",
        sector: "Sector Amarillo",
        latitud: -31.5675498,
        longitud: -63.5158038
    },
    {
        id: 1753,
        extinto: "GOMEZ OMAR ALBERTO",
        nacimiento: "1935-02-17",
        defuncion: "2013-04-30",
        sector: "Sector Amarillo",
        latitud: -31.5675680,
        longitud: -63.5158154
    },
    {
        id: 1754,
        extinto: "GOMEZ AURELIA F. GOMEZ DE",
        nacimiento: "1905-03-12",
        defuncion: "1992-05-03",
        sector: "Sector Amarillo",
        latitud: -31.5675901,
        longitud: -63.5158295
    },
    {
        id: 1755,
        extinto: "GOMEZ MATILDE",
        nacimiento: "1930-02-12",
        defuncion: "1992-02-18",
        sector: "Sector Amarillo",
        latitud: -31.5675901,
        longitud: -63.5158295
    },
    {
        id: 1756,
        extinto: "ROSALIA BETTEGA",
        nacimiento: "1928-01-19",
        defuncion: "2006-08-17",
        sector: "Sector Amarillo",
        latitud: -31.5675441,
        longitud: -63.5158158
    },
    {
        id: 1757,
        extinto: "PAPA BLAS",
        nacimiento: "1925-02-02",
        defuncion: "2003-02-26",
        sector: "Sector Amarillo",
        latitud: -31.5675623,
        longitud: -63.5158274
    },
    {
        id: 1758,
        extinto: "PAPA MARIA JOSEFA",
        nacimiento: "1953-08-02",
        defuncion: "2011-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5675623,
        longitud: -63.5158274
    },
    {
        id: 1759,
        extinto: "CONSETA TORRE",
        nacimiento: "1927-11-28",
        defuncion: "2023-08-16",
        sector: "Sector Amarillo",
        latitud: -31.5675623,
        longitud: -63.5158274
    },
    {
        id: 1760,
        extinto: "GALOPPO JOSE",
        nacimiento: "2004-01-27",
        defuncion: "2004-01-27",
        sector: "Sector Rosa",
        latitud: -31.5676253,
        longitud: -63.5156807
    },
    {
        id: 1761,
        extinto: "GOMEZ RITA IRENE",
        nacimiento: "1926-06-07",
        defuncion: "2013-05-20",
        sector: "Sector Rosa",
        latitud: -31.5676253,
        longitud: -63.5156807
    },
    {
        id: 1762,
        extinto: "AMAYA RUFINO HEMENEGILDO",
        nacimiento: "1944-04-12",
        defuncion: "2001-02-19",
        sector: "Sector Amarillo",
        latitud: -31.5676655,
        longitud: -63.5157069
    },
    {
        id: 1763,
        extinto: "SORIA ANGELINA ISABEL",
        nacimiento: "1921-03-01",
        defuncion: "2007-07-05",
        sector: "Sector Amarillo",
        latitud: -31.5676655,
        longitud: -63.5157069
    },
    {
        id: 1764,
        extinto: "DELOGU JUAN",
        nacimiento: "1938-01-01",
        defuncion: "1979-08-02",
        sector: "Sector Rosa",
        latitud: -31.5676196,
        longitud: -63.5156927
    },
    {
        id: 1765,
        extinto: "VICTORIA CISTERNA",
        nacimiento: "1917-05-05",
        defuncion: "2007-08-02",
        sector: "Sector Rosa",
        latitud: -31.5676196,
        longitud: -63.5156927
    },
    {
        id: 1766,
        extinto: "SISTERNA MARIA CELINA",
        nacimiento: "1939-10-17",
        defuncion: "2012-08-30",
        sector: "Sector Rosa",
        latitud: -31.5676377,
        longitud: -63.5157045
    },
    {
        id: 1767,
        extinto: "ARIEL FABIAN JUAREZ",
        nacimiento: "1970-10-04",
        defuncion: "2021-01-26",
        sector: "Sector Rosa",
        latitud: -31.5676377,
        longitud: -63.5157045
    },
    {
        id: 1768,
        extinto: "FRANCISCO AMADEO JUAREZ",
        nacimiento: "1935-10-11",
        defuncion: "2007-10-05",
        sector: "Sector Rosa",
        latitud: -31.5676377,
        longitud: -63.5157045
    },
    {
        id: 1769,
        extinto: "ADRIAN ALBERTO AMAYA",
        nacimiento: "1955-05-15",
        defuncion: "2007-02-01",
        sector: "Sector Amarillo",
        latitud: -31.5676598,
        longitud: -63.5157188
    },
    {
        id: 1770,
        extinto: "HUZULIAK DEMETRIO VICENTE",
        nacimiento: "1922-07-19",
        defuncion: "2004-06-20",
        sector: "Sector Rosa",
        latitud: -31.5676139,
        longitud: -63.5157047
    },
    {
        id: 1771,
        extinto: "MATIAS ELVIO EDUARDO",
        nacimiento: "1962-10-14",
        defuncion: "2010-07-26",
        sector: "Sector Amarillo",
        latitud: -31.5676541,
        longitud: -63.5157308
    },
    {
        id: 1772,
        extinto: "PEDRO DAMIAN MANSILLA",
        nacimiento: "1938-02-23",
        defuncion: "2016-04-19",
        sector: "Sector Rosa",
        latitud: -31.5676082,
        longitud: -63.5157166
    },
    {
        id: 1773,
        extinto: "LUDUEÑA ROBERTO GABRIEL",
        nacimiento: "1963-02-09",
        defuncion: "2015-06-10",
        sector: "Sector Amarillo",
        latitud: -31.5676263,
        longitud: -63.5157284
    },
    {
        id: 1774,
        extinto: "BESSONE CANDIDA ESTHER",
        nacimiento: "1926-02-28",
        defuncion: "2016-01-30",
        sector: "Sector Amarillo",
        latitud: -31.5676263,
        longitud: -63.5157284
    },
    {
        id: 1775,
        extinto: "AUDISIO EUGENIO RAFAEL",
        nacimiento: "1953-05-12",
        defuncion: "2013-04-25",
        sector: "Sector Amarillo",
        latitud: -31.5676484,
        longitud: -63.5157428
    },
    {
        id: 1776,
        extinto: "DIAZ ANTONIO",
        nacimiento: "1928-06-23",
        defuncion: "2010-11-02",
        sector: "Sector Amarillo",
        latitud: -31.5676025,
        longitud: -63.5157286
    },
    {
        id: 1777,
        extinto: "ANA JESUS ZAPPA",
        nacimiento: "2010-11-11",
        defuncion: "2010-11-11",
        sector: "Sector Amarillo",
        latitud: -31.5676025,
        longitud: -63.5157286
    },
    {
        id: 1778,
        extinto: "STROGUSZ ALEJANDRO",
        nacimiento: "1909-01-16",
        defuncion: "1990-02-27",
        sector: "Sector Amarillo",
        latitud: -31.5675968,
        longitud: -63.5157405
    },
    {
        id: 1779,
        extinto: "POSSE JUANA",
        nacimiento: "1924-01-20",
        defuncion: "2003-08-27",
        sector: "Sector Amarillo",
        latitud: -31.5675968,
        longitud: -63.5157405
    },
    {
        id: 1780,
        extinto: "GUZMAN MARIA ADELA",
        nacimiento: "1918-08-26",
        defuncion: "2011-03-25",
        sector: "Sector Amarillo",
        latitud: -31.5676149,
        longitud: -63.5157523
    },
    {
        id: 1781,
        extinto: "MARIA TERESA GUDIÑO",
        nacimiento: "1940-11-13",
        defuncion: "2005-05-03",
        sector: "Sector Rosa",
        latitud: -31.5676897,
        longitud: -63.5155438
    },
    {
        id: 1782,
        extinto: "ELPIDIO LEGUIZAMON",
        nacimiento: "1948-11-20",
        defuncion: "2020-03-04",
        sector: "Sector Rosa",
        latitud: -31.5676897,
        longitud: -63.5155438
    },
    {
        id: 1783,
        extinto: "IDELIO JUAN DANIELE",
        nacimiento: "1940-03-22",
        defuncion: "2006-12-03",
        sector: "Sector Rosa",
        latitud: -31.5677084,
        longitud: -63.5155542
    },
    {
        id: 1784,
        extinto: "REYNA MANUELA AMAYA",
        nacimiento: "1935-04-21",
        defuncion: "2021-05-10",
        sector: "Sector Rosa",
        latitud: -31.5677084,
        longitud: -63.5155542
    },
    {
        id: 1785,
        extinto: "FARIAS ASENCIO REGINALDO",
        nacimiento: "1930-12-20",
        defuncion: "2000-06-06",
        sector: "Sector Rosa",
        latitud: -31.5677312,
        longitud: -63.5155669
    },
    {
        id: 1786,
        extinto: "MOREYRA LIDIA ISABEL",
        nacimiento: "1938-11-05",
        defuncion: "2013-10-05",
        sector: "Sector Rosa",
        latitud: -31.5677312,
        longitud: -63.5155669
    },
    {
        id: 1787,
        extinto: "TOMAS MARTINEZ",
        nacimiento: "1995-09-10",
        defuncion: "2019-01-05",
        sector: "Sector Rosa",
        latitud: -31.5676847,
        longitud: -63.5155562
    },
    {
        id: 1788,
        extinto: "FARIAS VICTOR HUGO",
        nacimiento: "1958-12-16",
        defuncion: "2013-10-07",
        sector: "Sector Rosa",
        latitud: -31.5677262,
        longitud: -63.5155793
    },
    {
        id: 1789,
        extinto: "CISMONDI DAVID ANTONIO",
        nacimiento: "1935-03-07",
        defuncion: "2017-04-24",
        sector: "Sector Rosa",
        latitud: -31.5676796,
        longitud: -63.5155686
    },
    {
        id: 1790,
        extinto: "JUANA CLEMIRA LUDUEÑA",
        nacimiento: "1953-09-29",
        defuncion: "2019-02-18",
        sector: "Sector Rosa",
        latitud: -31.5676984,
        longitud: -63.5155790
    },
    {
        id: 1791,
        extinto: "HECTOR  JULIO  ALARCON",
        nacimiento: "1956-09-27",
        defuncion: "2024-04-22",
        sector: "Sector Rosa",
        latitud: -31.5676984,
        longitud: -63.5155790
    },
    {
        id: 1792,
        extinto: "LUDUEÑA CARMEN MERCEDES",
        nacimiento: "1921-01-02",
        defuncion: "2001-03-24",
        sector: "Sector Rosa",
        latitud: -31.5676746,
        longitud: -63.5155809
    },
    {
        id: 1793,
        extinto: "LUQUE TEODORA CELMIRA",
        nacimiento: "1923-11-11",
        defuncion: "1992-01-07",
        sector: "Sector Rosa",
        latitud: -31.5676746,
        longitud: -63.5155809
    },
    {
        id: 1794,
        extinto: "ALDO ORFELIO DOFFO",
        nacimiento: "1932-10-15",
        defuncion: "2018-06-21",
        sector: "Sector Rosa",
        latitud: -31.5676933,
        longitud: -63.5155913
    },
    {
        id: 1795,
        extinto: "CELINA DOMINGA TARQUINO",
        nacimiento: "1931-05-09",
        defuncion: "2021-03-08",
        sector: "Sector Rosa",
        latitud: -31.5676933,
        longitud: -63.5155913
    },
    {
        id: 1796,
        extinto: "EMILIO MARCOS TRUCCHIA",
        nacimiento: "2018-08-13",
        defuncion: "2018-08-13",
        sector: "Sector Rosa",
        latitud: -31.5676695,
        longitud: -63.5155933
    },
    {
        id: 1797,
        extinto: "RAQUEL  SUSANA  GOMEZ",
        nacimiento: "1945-07-31",
        defuncion: "2023-06-11",
        sector: "Sector Rosa",
        latitud: -31.5676695,
        longitud: -63.5155933
    },
    {
        id: 1798,
        extinto: "MIGUEL  ANGEL  MARCO",
        nacimiento: "1944-04-29",
        defuncion: "2023-12-02",
        sector: "Sector Rosa",
        latitud: -31.5676883,
        longitud: -63.5156037
    },
    {
        id: 1799,
        extinto: "FELIPA JUVENCIA GOMEZ",
        nacimiento: "1907-06-01",
        defuncion: "1972-05-13",
        sector: "Sector Rosa",
        latitud: -31.5677111,
        longitud: -63.5156164
    },
    {
        id: 1800,
        extinto: "EMILIO MARCO",
        nacimiento: "1903-06-16",
        defuncion: "2020-09-12",
        sector: "Sector Rosa",
        latitud: -31.5677111,
        longitud: -63.5156164
    },
    {
        id: 1801,
        extinto: "NORMA ESTHER MARCO",
        nacimiento: "1940-06-03",
        defuncion: "2024-06-26",
        sector: "Sector Rosa",
        latitud: -31.5677111,
        longitud: -63.5156164
    },
    {
        id: 1802,
        extinto: "BAUTISTA CLEMENTE FELIPPA",
        nacimiento: "1934-04-23",
        defuncion: "2016-10-21",
        sector: "Sector Rosa",
        latitud: -31.5676645,
        longitud: -63.5156056
    },
    {
        id: 1803,
        extinto: "ADELAIDA ENRIQUETA SALVUCCI",
        nacimiento: "1931-01-21",
        defuncion: "2022-02-28",
        sector: "Sector Rosa",
        latitud: -31.5676645,
        longitud: -63.5156056
    },
    {
        id: 1804,
        extinto: "RUBEN ALBERTO JUAREZ",
        nacimiento: "1953-09-04",
        defuncion: "2021-05-27",
        sector: "Sector Rosa",
        latitud: -31.5676832,
        longitud: -63.5156161
    },
    {
        id: 1805,
        extinto: "TOMAS SALVADOR MARCO",
        nacimiento: "1939-04-10",
        defuncion: "2017-07-22",
        sector: "Sector Rosa",
        latitud: -31.5677060,
        longitud: -63.5156287
    },
    {
        id: 1806,
        extinto: "NELIDA  HAYDEE  CORTEZ",
        nacimiento: "1940-05-10",
        defuncion: "2023-10-27",
        sector: "Sector Rosa",
        latitud: -31.5677060,
        longitud: -63.5156287
    },
    {
        id: 1807,
        extinto: "CONTRINI ROSA",
        nacimiento: "1913-02-07",
        defuncion: "2003-07-08",
        sector: "Sector Rosa",
        latitud: -31.5676595,
        longitud: -63.5156180
    },
    {
        id: 1808,
        extinto: "MARCO EMILIO ALBERTO",
        nacimiento: "1942-02-06",
        defuncion: "2014-06-14",
        sector: "Sector Rosa",
        latitud: -31.5676782,
        longitud: -63.5156284
    },
    {
        id: 1809,
        extinto: "MARIA  URSULA  DEL VALLE  PIATTI",
        nacimiento: "1942-12-05",
        defuncion: "2023-10-27",
        sector: "Sector Rosa",
        latitud: -31.5676782,
        longitud: -63.5156284
    },
    {
        id: 1810,
        extinto: "FERREYRA BACILIO MAGNO",
        nacimiento: "1927-06-14",
        defuncion: "2014-11-08",
        sector: "Sector Rosa",
        latitud: -31.5676544,
        longitud: -63.5156304
    },
    {
        id: 1811,
        extinto: "LUIS SANTIAGO GIGENA",
        nacimiento: "1951-12-01",
        defuncion: "2021-03-31",
        sector: "Sector Rosa",
        latitud: -31.5676732,
        longitud: -63.5156408
    },
    {
        id: 1812,
        extinto: "GIGENA JUANA ADALIA",
        nacimiento: "1936-09-15",
        defuncion: "2005-07-26",
        sector: "Sector Rosa",
        latitud: -31.5676494,
        longitud: -63.5156427
    },
    {
        id: 1813,
        extinto: "ANDRES JORGE RUBIOLO",
        nacimiento: "1964-03-21",
        defuncion: "2021-06-29",
        sector: "Sector Rosa",
        latitud: -31.5676909,
        longitud: -63.5156658
    },
    {
        id: 1814,
        extinto: "BENJAMIN AMUCHASTEGUI",
        nacimiento: "2010-11-24",
        defuncion: "2010-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676443,
        longitud: -63.5156551
    },
    {
        id: 1815,
        extinto: "ELOISA AMUCHASTEGUI",
        nacimiento: "2010-11-24",
        defuncion: "2010-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676443,
        longitud: -63.5156551
    },
    {
        id: 1816,
        extinto: "JUAN AMUCHASTEGUI",
        nacimiento: "2010-11-24",
        defuncion: "2010-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676443,
        longitud: -63.5156551
    },
    {
        id: 1817,
        extinto: "TRINIDAD AMUCHASTEGUI",
        nacimiento: "2010-11-24",
        defuncion: "2010-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676443,
        longitud: -63.5156551
    },
    {
        id: 1818,
        extinto: "ARMINDA ARRIETA",
        nacimiento: "2010-11-24",
        defuncion: "2010-11-24",
        sector: "Sector Rosa",
        latitud: -31.5676443,
        longitud: -63.5156551
    },
    {
        id: 1819,
        extinto: "FAUSTO AMUCHASTEGUI",
        nacimiento: "1930-03-14",
        defuncion: "2010-07-29",
        sector: "Sector Rosa",
        latitud: -31.5676443,
        longitud: -63.5156551
    },
    {
        id: 1820,
        extinto: "LUJAN RAMON ANASTACIO",
        nacimiento: "1935-04-15",
        defuncion: "2010-06-25",
        sector: "Sector Rosa",
        latitud: -31.5676631,
        longitud: -63.5156655
    },
    {
        id: 1821,
        extinto: "FERRARIS AMERICO MARTIN",
        nacimiento: "1944-05-06",
        defuncion: "2016-06-22",
        sector: "Sector Rosa",
        latitud: -31.5676859,
        longitud: -63.5156782
    },
    {
        id: 1822,
        extinto: "GUGLIELMONE MARIA CACILDA",
        nacimiento: "1939-06-02",
        defuncion: "2001-04-10",
        sector: "Sector Rosa",
        latitud: -31.5676393,
        longitud: -63.5156675
    },
    {
        id: 1823,
        extinto: "ESPAÑOM MIRIAM HORTENCIA",
        nacimiento: "1968-10-05",
        defuncion: "2016-03-21",
        sector: "Sector Rosa",
        latitud: -31.5676393,
        longitud: -63.5156675
    },
    {
        id: 1824,
        extinto: "ACOSTA VIRGINIO",
        nacimiento: "1951-08-25",
        defuncion: "2013-09-23",
        sector: "Sector Rosa",
        latitud: -31.5676580,
        longitud: -63.5156779
    },
    {
        id: 1825,
        extinto: "MUSSO ALICIA",
        nacimiento: "1957-02-28",
        defuncion: "2015-08-11",
        sector: "Sector Rosa",
        latitud: -31.5676808,
        longitud: -63.5156905
    },
    {
        id: 1826,
        extinto: "HERRERA ALBERTO ORLANDO",
        nacimiento: "1975-08-24",
        defuncion: "2001-01-29",
        sector: "Sector Rosa",
        latitud: -31.5677329,
        longitud: -63.5154341
    },
    {
        id: 1827,
        extinto: "N/N BRIA FINE",
        nacimiento: "2011-08-02",
        defuncion: "2011-08-02",
        sector: "Sector Rosa",
        latitud: -31.5677329,
        longitud: -63.5154341
    },
    {
        id: 1828,
        extinto: "CANDIDO JESUS HERRERA",
        nacimiento: "1936-09-20",
        defuncion: "2011-08-18",
        sector: "Sector Rosa",
        latitud: -31.5677329,
        longitud: -63.5154341
    },
    {
        id: 1829,
        extinto: "FERNANDEZ,HECTOR JAIME",
        nacimiento: "1938-03-27",
        defuncion: "2022-11-26",
        sector: "Sector Rosa",
        latitud: -31.5677187,
        longitud: -63.5154717
    },
    {
        id: 1830,
        extinto: "REGE DORA",
        nacimiento: "1932-10-12",
        defuncion: "2007-07-09",
        sector: "Sector Rosa",
        latitud: -31.5677093,
        longitud: -63.5154968
    },
    {
        id: 1831,
        extinto: "ROMERO CIPRIANA RAMONA",
        nacimiento: "1933-09-16",
        defuncion: "2011-03-25",
        sector: "Sector Rosa",
        latitud: -31.5677283,
        longitud: -63.5155065
    },
    {
        id: 1832,
        extinto: "CORNEJO JUAN CARLOS",
        nacimiento: "1965-01-12",
        defuncion: "2013-11-27",
        sector: "Sector Rosa",
        latitud: -31.5677283,
        longitud: -63.5155065
    },
    {
        id: 1833,
        extinto: "CORNEJO ADELMA ANSELMA",
        nacimiento: "1951-05-03",
        defuncion: "2015-09-12",
        sector: "Sector Rosa",
        latitud: -31.5677514,
        longitud: -63.5155184
    },
    {
        id: 1834,
        extinto: "JUAN JOSE RADALJ",
        nacimiento: "1933-06-08",
        defuncion: "1971-11-20",
        sector: "Sector Rosa",
        latitud: -31.5677046,
        longitud: -63.5155093
    },
    {
        id: 1835,
        extinto: "ALBERTO SERVILIANO FERREYRA",
        nacimiento: "1940-10-03",
        defuncion: "1997-01-06",
        sector: "Sector Rosa",
        latitud: -31.5677046,
        longitud: -63.5155093
    },
    {
        id: 1836,
        extinto: "DELGADO ADELA EUSEBIA",
        nacimiento: "1938-08-22",
        defuncion: "1997-09-13",
        sector: "Sector Rosa",
        latitud: -31.5676998,
        longitud: -63.5155218
    },
    {
        id: 1837,
        extinto: "ANGEL RODOLFO MARIN",
        nacimiento: "1929-12-30",
        defuncion: "2009-01-22",
        sector: "Sector Rosa",
        latitud: -31.5680191,
        longitud: -63.5153656
    },
    {
        id: 1838,
        extinto: "MIGUEL ANGEL MARIN",
        nacimiento: "1960-02-25",
        defuncion: "2021-08-11",
        sector: "Sector Rosa",
        latitud: -31.5680191,
        longitud: -63.5153656
    },
    {
        id: 1839,
        extinto: "CLEMENTINO REGINALDO AGUERO",
        nacimiento: "1917-11-28",
        defuncion: "2000-12-07",
        sector: "Sector Rosa",
        latitud: -31.5679923,
        longitud: -63.5155424
    },
    {
        id: 1840,
        extinto: "RIVATA JUAN ALBERTO",
        nacimiento: "1936-04-08",
        defuncion: "2016-02-18",
        sector: "Sector Amarillo",
        latitud: -31.5679640,
        longitud: -63.5158078
    },
    {
        id: 1841,
        extinto: "GARAY FORTUNATO",
        nacimiento: "1914-06-29",
        defuncion: "2003-04-16",
        sector: "Sector Amarillo",
        latitud: -31.5679366,
        longitud: -63.5159199
    },
    {
        id: 1842,
        extinto: "FARIA EUDOSIA DEIDAD",
        nacimiento: "1927-02-23",
        defuncion: "2004-08-28",
        sector: "Sector Amarillo",
        latitud: -31.5679366,
        longitud: -63.5159199
    },
    {
        id: 1843,
        extinto: "VAZQUEZ RAMON ARGENTINO",
        nacimiento: "1946-11-12",
        defuncion: "2007-12-11",
        sector: "Sector Amarillo",
        latitud: -31.5679342,
        longitud: -63.5159333
    },
    {
        id: 1844,
        extinto: "VAZQUEZ VALERIA EDITH",
        nacimiento: "1981-03-16",
        defuncion: "2012-10-11",
        sector: "Sector Amarillo",
        latitud: -31.5679342,
        longitud: -63.5159333
    },
    {
        id: 1845,
        extinto: "LUISA MAXIMINA ZABADILLA",
        nacimiento: "1948-05-17",
        defuncion: "2022-11-03",
        sector: "Sector Amarillo",
        latitud: -31.5679342,
        longitud: -63.5159333
    },
    {
        id: 1846,
        extinto: "CARMEN DOROTEO MAYDANA",
        nacimiento: "1948-07-06",
        defuncion: "2019-09-17",
        sector: "Sector Amarillo",
        latitud: -31.5679318,
        longitud: -63.5159467
    },
    {
        id: 1847,
        extinto: "MARIANI PASCUAL",
        nacimiento: "1921-08-18",
        defuncion: "2003-01-07",
        sector: "Sector Amarillo",
        latitud: -31.5678864,
        longitud: -63.5159636
    },
    {
        id: 1848,
        extinto: "AIDA CERONI",
        nacimiento: "1921-12-21",
        defuncion: "2014-12-14",
        sector: "Sector Amarillo",
        latitud: -31.5678864,
        longitud: -63.5159636
    },
    {
        id: 1849,
        extinto: "SANTIAGO MANUEL LUDUEÑA",
        nacimiento: "1943-07-25",
        defuncion: "2016-04-11",
        sector: "Sector Amarillo",
        latitud: -31.5679246,
        longitud: -63.5159869
    },
    {
        id: 1850,
        extinto: "GASTON  LUDUEÑA  BARADAD",
        nacimiento: "2004-04-08",
        defuncion: "2023-04-21",
        sector: "Sector Amarillo",
        latitud: -31.5679246,
        longitud: -63.5159869
    },
    {
        id: 1851,
        extinto: "RUGGERI SEGUNDO CECAR",
        nacimiento: "1924-06-27",
        defuncion: "2015-10-08",
        sector: "Sector Amarillo",
        latitud: -31.5679019,
        longitud: -63.5159954
    },
    {
        id: 1852,
        extinto: "MARCELO ALEJANDRO MUGAS",
        nacimiento: "1971-03-16",
        defuncion: "2018-06-13",
        sector: "Sector Amarillo",
        latitud: -31.5679222,
        longitud: -63.5160003
    },
    {
        id: 1853,
        extinto: "ROBERTO JULIO MUGAS",
        nacimiento: "1963-08-18",
        defuncion: "2012-12-22",
        sector: "Sector Amarillo",
        latitud: -31.5679222,
        longitud: -63.5160003
    },
    {
        id: 1854,
        extinto: "ANTONIO AMERICO MUGAS",
        nacimiento: "1935-01-17",
        defuncion: "2002-02-09",
        sector: "Sector Amarillo",
        latitud: -31.5679222,
        longitud: -63.5160003
    },
    {
        id: 1855,
        extinto: "VELEZ MIGUEL IGNACIO",
        nacimiento: "1947-07-31",
        defuncion: "2006-08-14",
        sector: "Sector Amarillo",
        latitud: -31.5679198,
        longitud: -63.5160138
    },
    {
        id: 1856,
        extinto: "JOSE MODESTO VELEZ",
        nacimiento: "1938-03-19",
        defuncion: "2020-05-23",
        sector: "Sector Amarillo",
        latitud: -31.5679174,
        longitud: -63.5160272
    },
    {
        id: 1857,
        extinto: "GONZALEZ ISALON",
        nacimiento: "1931-01-17",
        defuncion: "2002-07-11",
        sector: "Sector Amarillo",
        latitud: -31.5678690,
        longitud: -63.5160609
    },
    {
        id: 1858,
        extinto: "GOMEZ MIGUEL ANGEL",
        nacimiento: "1955-07-01",
        defuncion: "2005-06-23",
        sector: "Sector Amarillo",
        latitud: -31.5678690,
        longitud: -63.5160609
    },
    {
        id: 1859,
        extinto: "CIPRIANA REGINALDA ESPINOSA",
        nacimiento: "1937-09-29",
        defuncion: "2020-02-05",
        sector: "Sector Amarillo",
        latitud: -31.5678690,
        longitud: -63.5160609
    },
    {
        id: 1860,
        extinto: "GOMEZ JORGE ENRIQUE",
        nacimiento: "2014-04-24",
        defuncion: "2014-06-27",
        sector: "Sector Amarillo",
        latitud: -31.5679096,
        longitud: -63.5160706
    },
    {
        id: 1861,
        extinto: "GOMEZ JESUS MARIA",
        nacimiento: "1923-01-26",
        defuncion: "1978-03-18",
        sector: "Sector Amarillo",
        latitud: -31.5678666,
        longitud: -63.5160743
    },
    {
        id: 1862,
        extinto: "GOMEZ PEDRO MARIO",
        nacimiento: "1953-12-04",
        defuncion: "1993-06-03",
        sector: "Sector Amarillo",
        latitud: -31.5678666,
        longitud: -63.5160743
    },
    {
        id: 1863,
        extinto: "DIAZ JUANA LIDIA",
        nacimiento: "1923-11-02",
        defuncion: "2009-04-01",
        sector: "Sector Amarillo",
        latitud: -31.5678666,
        longitud: -63.5160743
    },
    {
        id: 1864,
        extinto: "NAVARRO MARIA VICTORIA",
        nacimiento: "1939-12-23",
        defuncion: "2011-03-23",
        sector: "Sector Amarillo",
        latitud: -31.5679073,
        longitud: -63.5160840
    },
    {
        id: 1865,
        extinto: "GOMEZ MARCELO ARIEL",
        nacimiento: "1977-02-03",
        defuncion: "2012-10-17",
        sector: "Sector Amarillo",
        latitud: -31.5678643,
        longitud: -63.5160877
    },
    {
        id: 1866,
        extinto: "JUAREZ ROQUE RAFAEL",
        nacimiento: "1949-03-13",
        defuncion: "2008-09-10",
        sector: "Sector Amarillo",
        latitud: -31.5679049,
        longitud: -63.5160975
    },
    {
        id: 1867,
        extinto: "CASSIANI CLARA",
        nacimiento: "1905-08-12",
        defuncion: "1987-09-02",
        sector: "Sector Amarillo",
        latitud: -31.5678799,
        longitud: -63.5161194
    },
    {
        id: 1868,
        extinto: "COVADIS JUAN",
        nacimiento: "1939-11-20",
        defuncion: "2007-03-26",
        sector: "Sector Amarillo",
        latitud: -31.5678799,
        longitud: -63.5161194
    },
    {
        id: 1869,
        extinto: "NOEMI GONZALEZ",
        nacimiento: "1942-04-25",
        defuncion: "2021-09-23",
        sector: "Sector Amarillo",
        latitud: -31.5678799,
        longitud: -63.5161194
    },
    {
        id: 1870,
        extinto: "NELIDA BEATRIZ VACA",
        nacimiento: "1967-01-28",
        defuncion: "2010-04-30",
        sector: "Sector Amarillo",
        latitud: -31.5679002,
        longitud: -63.5161243
    },
    {
        id: 1871,
        extinto: "HECTOR LUIS VACA",
        nacimiento: "1940-07-01",
        defuncion: "2021-06-24",
        sector: "Sector Amarillo",
        latitud: -31.5678979,
        longitud: -63.5161377
    },
    {
        id: 1872,
        extinto: "NELIDA TERESA JUAREZ",
        nacimiento: "1943-01-20",
        defuncion: "2022-07-04",
        sector: "Sector Amarillo",
        latitud: -31.5678979,
        longitud: -63.5161377
    },
    {
        id: 1873,
        extinto: "NAVARRO MARIA ESTER",
        nacimiento: "1963-11-12",
        defuncion: "2008-05-27",
        sector: "Sector Amarillo",
        latitud: -31.5678752,
        longitud: -63.5161463
    },
    {
        id: 1874,
        extinto: "RODRIGUEZ CECILIA INES",
        nacimiento: "1960-04-09",
        defuncion: "2017-09-27",
        sector: "Sector Amarillo",
        latitud: -31.5678955,
        longitud: -63.5161511
    },
    {
        id: 1875,
        extinto: "DANIEL RAFAEL RODRIGUEZ",
        nacimiento: "1929-05-01",
        defuncion: "2023-11-08",
        sector: "Sector Amarillo",
        latitud: -31.5678955,
        longitud: -63.5161511
    },
    {
        id: 1876,
        extinto: "MIGUEL ANGEL FERNANDEZ",
        nacimiento: "1935-02-28",
        defuncion: "2007-04-30",
        sector: "Sector Amarillo",
        latitud: -31.5678861,
        longitud: -63.5162048
    },
    {
        id: 1877,
        extinto: "MARTINEZ JUAN DE DIOS",
        nacimiento: "1944-12-27",
        defuncion: "2010-10-28",
        sector: "Sector Amarillo",
        latitud: -31.5678413,
        longitud: -63.5162211
    },
    {
        id: 1878,
        extinto: "UTRERA ANITA ELENA",
        nacimiento: "1928-09-20",
        defuncion: "2014-05-19",
        sector: "Sector Amarillo",
        latitud: -31.5678822,
        longitud: -63.5162292
    },
    {
        id: 1879,
        extinto: "DITTOMASSO DOMINGA MARIA",
        nacimiento: "1924-11-18",
        defuncion: "2016-04-07",
        sector: "Sector Amarillo",
        latitud: -31.5678803,
        longitud: -63.5162427
    },
    {
        id: 1880,
        extinto: "JOSE FAUSTINO PERALTA",
        nacimiento: "1920-11-01",
        defuncion: "1994-05-10",
        sector: "Sector Amarillo",
        latitud: -31.5678803,
        longitud: -63.5162427
    },
    {
        id: 1881,
        extinto: "CAMILLO HUGO DANIEL",
        nacimiento: "1974-01-19",
        defuncion: "2017-11-19",
        sector: "Sector Amarillo",
        latitud: -31.5678783,
        longitud: -63.5162562
    },
    {
        id: 1882,
        extinto: "CENONA AMELIA CARNERO",
        nacimiento: "1917-07-09",
        defuncion: "2019-07-11",
        sector: "Sector Amarillo",
        latitud: -31.5678783,
        longitud: -63.5162562
    },
    {
        id: 1883,
        extinto: "TERESITA MILVA PEREZ",
        nacimiento: "1946-04-24",
        defuncion: "2023-01-23",
        sector: "Sector Amarillo",
        latitud: -31.5678783,
        longitud: -63.5162562
    },
    {
        id: 1884,
        extinto: "RAMALLO GERALDO RAFAEL",
        nacimiento: "1956-06-05",
        defuncion: "2017-01-25",
        sector: "Sector Amarillo",
        latitud: -31.5678764,
        longitud: -63.5162697
    },
    {
        id: 1885,
        extinto: "ARNEUDO JUAN BAUTISTA",
        nacimiento: "1922-05-15",
        defuncion: "2006-05-28",
        sector: "Sector Verde",
        latitud: -31.5678296,
        longitud: -63.5163021
    },
    {
        id: 1886,
        extinto: "BRUCELLO MARIA ERNESTA",
        nacimiento: "1920-07-31",
        defuncion: "2013-08-21",
        sector: "Sector Verde",
        latitud: -31.5678296,
        longitud: -63.5163021
    },
    {
        id: 1887,
        extinto: "ARNEUDO JORGE PEDRO",
        nacimiento: "1977-03-24",
        defuncion: "1977-03-25",
        sector: "Sector Verde",
        latitud: -31.5678277,
        longitud: -63.5163156
    },
    {
        id: 1888,
        extinto: "ARNEUDO CARLOS OSCAR",
        nacimiento: "1977-03-24",
        defuncion: "1977-03-25",
        sector: "Sector Verde",
        latitud: -31.5678277,
        longitud: -63.5163156
    },
    {
        id: 1889,
        extinto: "EDE  ANGELA  PORCARI",
        nacimiento: "1940-02-04",
        defuncion: "2024-04-26",
        sector: "Sector Verde",
        latitud: -31.5678686,
        longitud: -63.5163237
    },
    {
        id: 1890,
        extinto: "RICARDO MATA",
        nacimiento: "1937-09-20",
        defuncion: "2014-12-04",
        sector: "Sector Verde",
        latitud: -31.5678647,
        longitud: -63.5163507
    },
    {
        id: 1891,
        extinto: "KURINA MARIA FRANCISCA",
        nacimiento: "1937-04-27",
        defuncion: "2016-08-25",
        sector: "Sector Verde",
        latitud: -31.5678647,
        longitud: -63.5163507
    },
    {
        id: 1892,
        extinto: "PEREZ OSFALDO ERNESTO",
        nacimiento: "1935-01-28",
        defuncion: "2002-01-25",
        sector: "Sector Verde",
        latitud: -31.5678627,
        longitud: -63.5163642
    },
    {
        id: 1893,
        extinto: "FERNANDEZ MIRTA GRACIELA",
        nacimiento: "2003-05-27",
        defuncion: "2003-05-27",
        sector: "Sector Verde",
        latitud: -31.5678102,
        longitud: -63.5163795
    },
    {
        id: 1894,
        extinto: "GABRIELA A ZANONI",
        nacimiento: "1974-10-02",
        defuncion: "1983-06-11",
        sector: "Sector Verde",
        latitud: -31.5678102,
        longitud: -63.5163795
    },
    {
        id: 1895,
        extinto: "ELENA GRASSO",
        nacimiento: "1926-07-11",
        defuncion: "2010-02-09",
        sector: "Sector Verde",
        latitud: -31.5678074,
        longitud: -63.5163928
    },
    {
        id: 1896,
        extinto: "FERNANDEZ ANTONIO",
        nacimiento: "1925-05-24",
        defuncion: "1971-11-29",
        sector: "Sector Verde",
        latitud: -31.5678074,
        longitud: -63.5163928
    },
    {
        id: 1897,
        extinto: "FERNANDEZ SUSANA ELENA",
        nacimiento: "1951-03-05",
        defuncion: "1951-03-08",
        sector: "Sector Verde",
        latitud: -31.5678074,
        longitud: -63.5163928
    },
    {
        id: 1898,
        extinto: "LOPEZ LAURO RAMON",
        nacimiento: "1920-08-18",
        defuncion: "2012-05-30",
        sector: "Sector Verde",
        latitud: -31.5678276,
        longitud: -63.5163986
    },
    {
        id: 1899,
        extinto: "PAVON JENARA",
        nacimiento: "1924-09-19",
        defuncion: "2016-07-26",
        sector: "Sector Verde",
        latitud: -31.5678276,
        longitud: -63.5163986
    },
    {
        id: 1900,
        extinto: "RAUL GERMAN URTEAGA",
        nacimiento: "1929-11-23",
        defuncion: "2016-01-25",
        sector: "Sector Verde",
        latitud: -31.5678477,
        longitud: -63.5164044
    },
    {
        id: 1901,
        extinto: "CRISTINA ROSA GRASSO",
        nacimiento: "1931-08-20",
        defuncion: "2018-04-06",
        sector: "Sector Verde",
        latitud: -31.5678477,
        longitud: -63.5164044
    },
    {
        id: 1902,
        extinto: "ANGEL LEIRIA",
        nacimiento: "2014-04-09",
        defuncion: "2014-04-09",
        sector: "Sector Verde",
        latitud: -31.5678449,
        longitud: -63.5164177
    },
    {
        id: 1903,
        extinto: "FILOMENA CLEMIRA ZABALA",
        nacimiento: "2014-04-09",
        defuncion: "2014-04-09",
        sector: "Sector Verde",
        latitud: -31.5678449,
        longitud: -63.5164177
    },
    {
        id: 1904,
        extinto: "HERMINIA ROSA LEIRIA",
        nacimiento: "1936-05-08",
        defuncion: "2014-12-04",
        sector: "Sector Verde",
        latitud: -31.5678449,
        longitud: -63.5164177
    },
    {
        id: 1905,
        extinto: "ROSSI VIRGILIO SANTOS",
        nacimiento: "1918-11-01",
        defuncion: "2000-05-09",
        sector: "Sector Verde",
        latitud: -31.5678018,
        longitud: -63.5164194
    },
    {
        id: 1906,
        extinto: "ROSSI VICTORIA",
        nacimiento: "1900-01-01",
        defuncion: "1978-02-06",
        sector: "Sector Verde",
        latitud: -31.5678018,
        longitud: -63.5164194
    },
    {
        id: 1907,
        extinto: "ISABEL ROSA PERALTA",
        nacimiento: "1924-09-04",
        defuncion: "2013-06-11",
        sector: "Sector Verde",
        latitud: -31.5678018,
        longitud: -63.5164194
    },
    {
        id: 1908,
        extinto: "CEJAS CARLOS OSVALDO",
        nacimiento: "1941-10-22",
        defuncion: "2006-02-13",
        sector: "Sector Verde",
        latitud: -31.5677962,
        longitud: -63.5164460
    },
    {
        id: 1909,
        extinto: "JORGE RUBEN YERCOVICH",
        nacimiento: "1952-01-01",
        defuncion: "2022-11-20",
        sector: "Sector Verde",
        latitud: -31.5678365,
        longitud: -63.5164576
    },
    {
        id: 1910,
        extinto: "MOLINA LAURA DE",
        nacimiento: "1924-04-30",
        defuncion: "2001-11-19",
        sector: "Sector Verde",
        latitud: -31.5678337,
        longitud: -63.5164709
    },
    {
        id: 1911,
        extinto: "CROSS EDUARDO",
        nacimiento: "1920-01-28",
        defuncion: "1991-10-16",
        sector: "Sector Verde",
        latitud: -31.5678337,
        longitud: -63.5164709
    },
    {
        id: 1912,
        extinto: "CROSS JUAN CARLOS",
        nacimiento: "1951-11-29",
        defuncion: "1989-01-06",
        sector: "Sector Verde",
        latitud: -31.5678337,
        longitud: -63.5164709
    },
    {
        id: 1913,
        extinto: "ROBERTO LUIS FENOGLIO",
        nacimiento: "1931-12-17",
        defuncion: "2019-09-23",
        sector: "Sector Verde",
        latitud: -31.5677906,
        longitud: -63.5164726
    },
    {
        id: 1914,
        extinto: "TERESITA ELVIRA VASALLO",
        nacimiento: "1939-01-25",
        defuncion: "2021-07-28",
        sector: "Sector Verde",
        latitud: -31.5677906,
        longitud: -63.5164726
    },
    {
        id: 1915,
        extinto: "LAURA TERESA CROSS",
        nacimiento: "1946-03-21",
        defuncion: "2017-03-26",
        sector: "Sector Verde",
        latitud: -31.5678107,
        longitud: -63.5164784
    },
    {
        id: 1916,
        extinto: "LUQUE LUIS LINDOR",
        nacimiento: "1909-11-29",
        defuncion: "1997-12-16",
        sector: "Sector Verde",
        latitud: -31.5678309,
        longitud: -63.5164842
    },
    {
        id: 1917,
        extinto: "MARIA MAGDALENA ALVAREZ",
        nacimiento: "1954-05-30",
        defuncion: "2009-04-16",
        sector: "Sector Verde",
        latitud: -31.5678309,
        longitud: -63.5164842
    },
    {
        id: 1918,
        extinto: "AMADO LUNA JUAN CARLOS",
        nacimiento: "2017-03-14",
        defuncion: "2017-03-14",
        sector: "Sector Verde",
        latitud: -31.5678280,
        longitud: -63.5164975
    },
    {
        id: 1919,
        extinto: "BACILE LUDUEÑA EMMA",
        nacimiento: "2017-03-14",
        defuncion: "2017-03-14",
        sector: "Sector Verde",
        latitud: -31.5678280,
        longitud: -63.5164975
    },
    {
        id: 1920,
        extinto: "RAUL EDUARDO LUDUEÑA",
        nacimiento: "1969-12-30",
        defuncion: "2020-11-15",
        sector: "Sector Verde",
        latitud: -31.5678051,
        longitud: -63.5165050
    },
    {
        id: 1921,
        extinto: "ALVAREZ MARIA",
        nacimiento: "1915-06-20",
        defuncion: "2001-10-08",
        sector: "Sector Verde",
        latitud: -31.5678252,
        longitud: -63.5165108
    },
    {
        id: 1922,
        extinto: "HORACIO ESTEBAN CISTERNA",
        nacimiento: "1912-08-03",
        defuncion: "1989-09-23",
        sector: "Sector Verde",
        latitud: -31.5678252,
        longitud: -63.5165108
    },
    {
        id: 1923,
        extinto: "CISTERNA ROBERTO ESTEBAN",
        nacimiento: "1952-10-29",
        defuncion: "2010-07-01",
        sector: "Sector Verde",
        latitud: -31.5678252,
        longitud: -63.5165108
    },
    {
        id: 1924,
        extinto: "PEDERNERA BERNARDA CELIA",
        nacimiento: "1937-06-11",
        defuncion: "2013-06-28",
        sector: "Sector Verde",
        latitud: -31.5678224,
        longitud: -63.5165241
    },
    {
        id: 1925,
        extinto: "RODRIGUEZ CARMEN F",
        nacimiento: "1917-12-08",
        defuncion: "1993-03-06",
        sector: "Sector Verde",
        latitud: -31.5676895,
        longitud: -63.5162076
    },
    {
        id: 1926,
        extinto: "PEREZ MARIA ALCIRA",
        nacimiento: "1924-04-29",
        defuncion: "1969-10-04",
        sector: "Sector Verde",
        latitud: -31.5676895,
        longitud: -63.5162076
    },
    {
        id: 1927,
        extinto: "FLORES MARIA VICTORIA DEL CARMEN",
        nacimiento: "1916-02-25",
        defuncion: "2004-07-12",
        sector: "Sector Amarillo",
        latitud: -31.5677925,
        longitud: -63.5162344
    },
    {
        id: 1928,
        extinto: "FLORES BRUNO EMILIO",
        nacimiento: "1919-10-06",
        defuncion: "2007-01-05",
        sector: "Sector Amarillo",
        latitud: -31.5677925,
        longitud: -63.5162344
    },
    {
        id: 1929,
        extinto: "MENCEGUEZ IRMA BEATRIZ",
        nacimiento: "1971-07-01",
        defuncion: "2008-10-19",
        sector: "Sector Amarillo",
        latitud: -31.5678154,
        longitud: -63.5162403
    },
    {
        id: 1930,
        extinto: "ALANIS ALBERTO NILO",
        nacimiento: "1952-09-26",
        defuncion: "2017-05-13",
        sector: "Sector Amarillo",
        latitud: -31.5678154,
        longitud: -63.5162403
    },
    {
        id: 1931,
        extinto: "ALFARO JORGE ALDO",
        nacimiento: "1957-07-25",
        defuncion: "2006-09-06",
        sector: "Sector Verde",
        latitud: -31.5677193,
        longitud: -63.5162401
    },
    {
        id: 1932,
        extinto: "MOLINA MARIA ESTHER",
        nacimiento: "1932-09-03",
        defuncion: "2016-10-02",
        sector: "Sector Verde",
        latitud: -31.5677193,
        longitud: -63.5162401
    },
    {
        id: 1933,
        extinto: "JUAN  CARLOS  FAILLA",
        nacimiento: "1946-06-12",
        defuncion: "2024-03-30",
        sector: "Sector Verde",
        latitud: -31.5677193,
        longitud: -63.5162401
    },
    {
        id: 1934,
        extinto: "MACHADO OSVALDO PEDRO",
        nacimiento: "1940-01-17",
        defuncion: "2004-07-25",
        sector: "Sector Verde",
        latitud: -31.5677422,
        longitud: -63.5162461
    },
    {
        id: 1935,
        extinto: "FLORENTINO HERNANDEZ",
        nacimiento: "1937-10-30",
        defuncion: "2022-02-02",
        sector: "Sector Verde",
        latitud: -31.5677422,
        longitud: -63.5162461
    },
    {
        id: 1936,
        extinto: "TERESA ALDA CRISTIN",
        nacimiento: "1948-10-23",
        defuncion: "2020-01-25",
        sector: "Sector Verde",
        latitud: -31.5677537,
        longitud: -63.5162491
    },
    {
        id: 1937,
        extinto: "EDMUNDO FRANCISCO CRISTIN",
        nacimiento: "1940-03-09",
        defuncion: "2017-10-23",
        sector: "Sector Verde",
        latitud: -31.5677651,
        longitud: -63.5162520
    },
    {
        id: 1938,
        extinto: "ELVA ROSA RIGAZIO",
        nacimiento: "1942-08-10",
        defuncion: "2022-01-07",
        sector: "Sector Verde",
        latitud: -31.5677651,
        longitud: -63.5162520
    },
    {
        id: 1939,
        extinto: "EMILIO BARBIERI",
        nacimiento: "1942-08-15",
        defuncion: "2018-07-01",
        sector: "Sector Amarillo",
        latitud: -31.5677994,
        longitud: -63.5162610
    },
    {
        id: 1940,
        extinto: "CARLOS BARBIERI",
        nacimiento: "1939-11-11",
        defuncion: "2017-01-10",
        sector: "Sector Amarillo",
        latitud: -31.5678109,
        longitud: -63.5162640
    },
    {
        id: 1941,
        extinto: "PALAZON JOSEFINA SARA",
        nacimiento: "1925-02-26",
        defuncion: "2006-06-06",
        sector: "Sector Verde",
        latitud: -31.5676795,
        longitud: -63.5162600
    },
    {
        id: 1942,
        extinto: "ALFREDO BENJAMIN PALAZON",
        nacimiento: "1932-12-31",
        defuncion: "2019-08-30",
        sector: "Sector Verde",
        latitud: -31.5676795,
        longitud: -63.5162600
    },
    {
        id: 1943,
        extinto: "ALGARBE JUAN CARLOS",
        nacimiento: "1952-12-21",
        defuncion: "1992-06-01",
        sector: "Sector Verde",
        latitud: -31.5676910,
        longitud: -63.5162630
    },
    {
        id: 1944,
        extinto: "LISTELLO CARLOS ERNESTO ENRIQUE",
        nacimiento: "1966-01-12",
        defuncion: "2017-05-27",
        sector: "Sector Verde",
        latitud: -31.5677024,
        longitud: -63.5162660
    },
    {
        id: 1945,
        extinto: "ARNOLETTI FLORENTINO",
        nacimiento: "1938-07-25",
        defuncion: "2013-02-25",
        sector: "Sector Verde",
        latitud: -31.5677139,
        longitud: -63.5162689
    },
    {
        id: 1946,
        extinto: "ESTER LUCINIA GONZALEZ",
        nacimiento: "1946-08-06",
        defuncion: "2019-12-09",
        sector: "Sector Verde",
        latitud: -31.5677139,
        longitud: -63.5162689
    },
    {
        id: 1947,
        extinto: "FLORES JUAN GABRIEL",
        nacimiento: "1922-12-05",
        defuncion: "2004-08-31",
        sector: "Sector Verde",
        latitud: -31.5677253,
        longitud: -63.5162719
    },
    {
        id: 1948,
        extinto: "RAMONA OLGA PEREZ",
        nacimiento: "1930-12-25",
        defuncion: "2011-01-13",
        sector: "Sector Verde",
        latitud: -31.5677253,
        longitud: -63.5162719
    },
    {
        id: 1949,
        extinto: "JUAN HUMBERTO FLORES",
        nacimiento: "1957-03-16",
        defuncion: "1993-05-23",
        sector: "Sector Verde",
        latitud: -31.5677482,
        longitud: -63.5162779
    },
    {
        id: 1950,
        extinto: "MOLINA FREDESVINDA",
        nacimiento: "1916-08-21",
        defuncion: "2003-06-01",
        sector: "Sector Verde",
        latitud: -31.5677711,
        longitud: -63.5162838
    },
    {
        id: 1951,
        extinto: "LUCAS OSCAR BROCHERO",
        nacimiento: "1941-01-14",
        defuncion: "2018-03-30",
        sector: "Sector Verde",
        latitud: -31.5676855,
        longitud: -63.5162918
    },
    {
        id: 1952,
        extinto: "N/N REMENTERIA/JUAREZ",
        nacimiento: "2007-09-01",
        defuncion: "2007-09-01",
        sector: "Sector Verde",
        latitud: -31.5677198,
        longitud: -63.5163007
    },
    {
        id: 1953,
        extinto: "MARGARIA CLIBER HILARIO",
        nacimiento: "1935-10-21",
        defuncion: "2007-02-06",
        sector: "Sector Verde",
        latitud: -31.5677313,
        longitud: -63.5163037
    },
    {
        id: 1954,
        extinto: "MARGARIA LORENZO",
        nacimiento: "1915-10-20",
        defuncion: "1975-09-11",
        sector: "Sector Verde",
        latitud: -31.5677313,
        longitud: -63.5163037
    },
    {
        id: 1955,
        extinto: "CASAS DE MARGARIA VICTORIA",
        nacimiento: "1910-10-10",
        defuncion: "1970-01-12",
        sector: "Sector Verde",
        latitud: -31.5677313,
        longitud: -63.5163037
    },
    {
        id: 1956,
        extinto: "VARAS VICTOR HUGO",
        nacimiento: "1947-12-04",
        defuncion: "2017-09-14",
        sector: "Sector Verde",
        latitud: -31.5677656,
        longitud: -63.5163126
    },
    {
        id: 1957,
        extinto: "RONCATO DOMINGA",
        nacimiento: "1918-09-18",
        defuncion: "1991-09-12",
        sector: "Sector Verde",
        latitud: -31.5676695,
        longitud: -63.5163124
    },
    {
        id: 1958,
        extinto: "NAZETTA ANGEL JOSE",
        nacimiento: "1915-03-16",
        defuncion: "2007-08-02",
        sector: "Sector Verde",
        latitud: -31.5676695,
        longitud: -63.5163124
    },
    {
        id: 1959,
        extinto: "LUIS DOMINGO GOMEZ",
        nacimiento: "1947-08-10",
        defuncion: "2010-02-11",
        sector: "Sector Verde",
        latitud: -31.5676810,
        longitud: -63.5163154
    },
    {
        id: 1960,
        extinto: "LUQUE NANCY",
        nacimiento: "1971-04-12",
        defuncion: "1971-04-16",
        sector: "Sector Verde",
        latitud: -31.5676924,
        longitud: -63.5163184
    },
    {
        id: 1961,
        extinto: "MONGILARDI JUAN JOSE",
        nacimiento: "1980-12-09",
        defuncion: "1980-12-09",
        sector: "Sector Verde",
        latitud: -31.5676924,
        longitud: -63.5163184
    },
    {
        id: 1962,
        extinto: "LUIS  ENRIQUE  LUQUE",
        nacimiento: "1941-05-25",
        defuncion: "2023-08-05",
        sector: "Sector Verde",
        latitud: -31.5676924,
        longitud: -63.5163184
    },
    {
        id: 1963,
        extinto: "HECTOR HUGO GOMEZ",
        nacimiento: "1958-04-23",
        defuncion: "2020-05-23",
        sector: "Sector Verde",
        latitud: -31.5677039,
        longitud: -63.5163214
    },
    {
        id: 1964,
        extinto: "NIS ELENA",
        nacimiento: "1900-10-10",
        defuncion: "1900-10-10",
        sector: "Sector Verde",
        latitud: -31.5677153,
        longitud: -63.5163243
    },
    {
        id: 1965,
        extinto: "LIENDO ESTANISLAO",
        nacimiento: "1900-10-10",
        defuncion: "1900-10-10",
        sector: "Sector Verde",
        latitud: -31.5677153,
        longitud: -63.5163243
    },
    {
        id: 1966,
        extinto: "MORAL MARGARITA",
        nacimiento: "1908-09-07",
        defuncion: "1999-06-19",
        sector: "Sector Verde",
        latitud: -31.5677153,
        longitud: -63.5163243
    },
    {
        id: 1967,
        extinto: "LIENDO NIS MIGUEL ANGEL",
        nacimiento: "1909-12-31",
        defuncion: "1980-04-01",
        sector: "Sector Verde",
        latitud: -31.5677153,
        longitud: -63.5163243
    },
    {
        id: 1968,
        extinto: "N/N PEDRO BENJAMIN MOLINA MARINEZ",
        nacimiento: "2018-10-08",
        defuncion: "2018-10-08",
        sector: "Sector Verde",
        latitud: -31.5677267,
        longitud: -63.5163273
    },
    {
        id: 1969,
        extinto: "BOSSIO TOMAS JUAN VALENTIN",
        nacimiento: "1927-02-14",
        defuncion: "1996-07-09",
        sector: "Sector Verde",
        latitud: -31.5677382,
        longitud: -63.5163303
    },
    {
        id: 1970,
        extinto: "CAMARADA MARIA SOFIA",
        nacimiento: "1938-07-13",
        defuncion: "2013-09-07",
        sector: "Sector Verde",
        latitud: -31.5677382,
        longitud: -63.5163303
    },
    {
        id: 1971,
        extinto: "MICHELLI NESTOR JUAN",
        nacimiento: "1932-02-28",
        defuncion: "2016-01-22",
        sector: "Sector Verde",
        latitud: -31.5677496,
        longitud: -63.5163333
    },
    {
        id: 1972,
        extinto: "SARA MERCEDES GAZZONI",
        nacimiento: "1932-09-25",
        defuncion: "2018-05-13",
        sector: "Sector Verde",
        latitud: -31.5677496,
        longitud: -63.5163333
    },
    {
        id: 1973,
        extinto: "DUGATTO DANILO",
        nacimiento: "1943-01-29",
        defuncion: "1999-03-22",
        sector: "Sector Verde",
        latitud: -31.5677954,
        longitud: -63.5163452
    },
    {
        id: 1974,
        extinto: "DUGATTO MILVA",
        nacimiento: "1991-09-29",
        defuncion: "1991-09-29",
        sector: "Sector Verde",
        latitud: -31.5677954,
        longitud: -63.5163452
    },
    {
        id: 1975,
        extinto: "HERMINIO EMILIO RIVARA",
        nacimiento: "1941-07-09",
        defuncion: "2011-07-10",
        sector: "Sector Amarillo",
        latitud: -31.5677397,
        longitud: -63.5159163
    },
    {
        id: 1976,
        extinto: "RIVARA MIGUEL PEDRO",
        nacimiento: "1912-12-10",
        defuncion: "1957-01-22",
        sector: "Sector Amarillo",
        latitud: -31.5677512,
        longitud: -63.5159189
    },
    {
        id: 1977,
        extinto: "CRISTIN JOSEFA",
        nacimiento: "1914-08-09",
        defuncion: "1970-01-04",
        sector: "Sector Amarillo",
        latitud: -31.5677512,
        longitud: -63.5159189
    },
    {
        id: 1978,
        extinto: "RIVARA VICTORIO H.",
        nacimiento: "1934-04-15",
        defuncion: "2000-06-10",
        sector: "Sector Amarillo",
        latitud: -31.5677512,
        longitud: -63.5159189
    },
    {
        id: 1979,
        extinto: "VERONICA DEL VALLE CEAGLIO",
        nacimiento: "1975-06-14",
        defuncion: "1975-06-15",
        sector: "Sector Amarillo",
        latitud: -31.5677857,
        longitud: -63.5159267
    },
    {
        id: 1980,
        extinto: "ADRIANA RAMONA CEAGLIO",
        nacimiento: "1977-06-19",
        defuncion: "1977-06-20",
        sector: "Sector Amarillo",
        latitud: -31.5677857,
        longitud: -63.5159267
    },
    {
        id: 1981,
        extinto: "DELQUI CEAGLIO",
        nacimiento: "1943-08-04",
        defuncion: "2017-08-10",
        sector: "Sector Amarillo",
        latitud: -31.5677857,
        longitud: -63.5159267
    },
    {
        id: 1982,
        extinto: "MARIA ROSA C",
        nacimiento: "1979-03-03",
        defuncion: "1979-03-03",
        sector: "Sector Amarillo",
        latitud: -31.5678087,
        longitud: -63.5159319
    },
    {
        id: 1983,
        extinto: "EDUARDO OSCAR C",
        nacimiento: "1964-11-12",
        defuncion: "1977-07-25",
        sector: "Sector Amarillo",
        latitud: -31.5678087,
        longitud: -63.5159319
    },
    {
        id: 1984,
        extinto: "ESTAURINO FRANCO",
        nacimiento: "2008-01-11",
        defuncion: "2008-01-11",
        sector: "Sector Amarillo",
        latitud: -31.5678087,
        longitud: -63.5159319
    },
    {
        id: 1985,
        extinto: "MAIDANA MARIA HIPOLITA",
        nacimiento: "1917-08-17",
        defuncion: "2000-11-07",
        sector: "Sector Amarillo",
        latitud: -31.5678663,
        longitud: -63.5159450
    },
    {
        id: 1986,
        extinto: "ALDO  GASPAR  CEAGLIO",
        nacimiento: "1945-03-02",
        defuncion: "1985-12-07",
        sector: "Sector Amarillo",
        latitud: -31.5678663,
        longitud: -63.5159450
    },
    {
        id: 1987,
        extinto: "ELDA ARGUELLO",
        nacimiento: "1950-04-08",
        defuncion: "2009-04-11",
        sector: "Sector Amarillo",
        latitud: -31.5677357,
        longitud: -63.5159401
    },
    {
        id: 1988,
        extinto: "PRADO JAVIER MARTIN",
        nacimiento: "1995-08-05",
        defuncion: "2009-01-16",
        sector: "Sector Amarillo",
        latitud: -31.5677472,
        longitud: -63.5159427
    },
    {
        id: 1989,
        extinto: "RAMALLO ORFILIO",
        nacimiento: "1933-04-11",
        defuncion: "1982-01-10",
        sector: "Sector Amarillo",
        latitud: -31.5677702,
        longitud: -63.5159479
    },
    {
        id: 1990,
        extinto: "ARGUELLO MANUELA GRISELDA",
        nacimiento: "1930-12-03",
        defuncion: "1965-12-03",
        sector: "Sector Amarillo",
        latitud: -31.5677702,
        longitud: -63.5159479
    },
    {
        id: 1991,
        extinto: "PERALTA MARIA CATALINA",
        nacimiento: "1935-04-28",
        defuncion: "2012-12-28",
        sector: "Sector Amarillo",
        latitud: -31.5677702,
        longitud: -63.5159479
    },
    {
        id: 1992,
        extinto: "LARROSA FRANCISCO",
        nacimiento: "1934-06-04",
        defuncion: "1988-02-14",
        sector: "Sector Amarillo",
        latitud: -31.5677818,
        longitud: -63.5159505
    },
    {
        id: 1993,
        extinto: "ROGELIA  ROSA  LARROSA",
        nacimiento: "1935-08-30",
        defuncion: "2023-04-20",
        sector: "Sector Amarillo",
        latitud: -31.5677818,
        longitud: -63.5159505
    },
    {
        id: 1994,
        extinto: "LOYOLA EVELINA DEL VALLE",
        nacimiento: "1960-02-06",
        defuncion: "2017-10-05",
        sector: "Sector Amarillo",
        latitud: -31.5677933,
        longitud: -63.5159531
    },
    {
        id: 1995,
        extinto: "JULIO MODESTO BARBOZA",
        nacimiento: "1936-02-12",
        defuncion: "2015-06-05",
        sector: "Sector Amarillo",
        latitud: -31.5678623,
        longitud: -63.5159687
    },
    {
        id: 1996,
        extinto: "SIMBRON MARIO CESAR",
        nacimiento: "1980-05-31",
        defuncion: "1980-05-31",
        sector: "Sector Amarillo",
        latitud: -31.5677309,
        longitud: -63.5159691
    },
    {
        id: 1997,
        extinto: "VILLABAZA ERMELINDA",
        nacimiento: "1918-11-18",
        defuncion: "1998-12-09",
        sector: "Sector Amarillo",
        latitud: -31.5677309,
        longitud: -63.5159691
    },
    {
        id: 1998,
        extinto: "SIMBRON MIGUEL CIPRIANO",
        nacimiento: "1918-09-26",
        defuncion: "1996-04-29",
        sector: "Sector Amarillo",
        latitud: -31.5677309,
        longitud: -63.5159691
    },
    {
        id: 1999,
        extinto: "LEIVA ANTONIA",
        nacimiento: "1919-01-17",
        defuncion: "2012-06-19",
        sector: "Sector Amarillo",
        latitud: -31.5677539,
        longitud: -63.5159743
    },
    {
        id: 2000,
        extinto: "ALBERT CARLOS",
        nacimiento: "1949-11-04",
        defuncion: "1951-08-26",
        sector: "Sector Amarillo",
        latitud: -31.5677539,
        longitud: -63.5159743
    },
    {
        id: 2001,
        extinto: "ALBERT ALFONSO",
        nacimiento: "1911-10-30",
        defuncion: "1956-12-20",
        sector: "Sector Amarillo",
        latitud: -31.5677539,
        longitud: -63.5159743
    },
    {
        id: 2002,
        extinto: "OEREZ LIDIA ROSA",
        nacimiento: "1942-06-30",
        defuncion: "2013-03-25",
        sector: "Sector Amarillo",
        latitud: -31.5677654,
        longitud: -63.5159769
    },
    {
        id: 2003,
        extinto: "ELEUTERIO  NERIO  PERALTA",
        nacimiento: "1944-06-05",
        defuncion: "2024-02-10",
        sector: "Sector Amarillo",
        latitud: -31.5677654,
        longitud: -63.5159769
    },
    {
        id: 2004,
        extinto: "SIMBRON ERGIDIO YSABELINO",
        nacimiento: "1945-07-01",
        defuncion: "2000-04-19",
        sector: "Sector Amarillo",
        latitud: -31.5677770,
        longitud: -63.5159795
    },
    {
        id: 2005,
        extinto: "DARIO SEBASTIAN SIMBRON",
        nacimiento: "1983-12-25",
        defuncion: "2022-01-08",
        sector: "Sector Amarillo",
        latitud: -31.5677885,
        longitud: -63.5159821
    },
    {
        id: 2006,
        extinto: "MARCELO DALMIRO RAMON ISLA",
        nacimiento: "1967-02-20",
        defuncion: "2021-06-21",
        sector: "Sector Amarillo",
        latitud: -31.5678000,
        longitud: -63.5159847
    },
    {
        id: 2007,
        extinto: "ISABEL BORGIATTINO",
        nacimiento: "1942-11-19",
        defuncion: "2001-01-11",
        sector: "Sector Amarillo",
        latitud: -31.5678230,
        longitud: -63.5159899
    },
    {
        id: 2008,
        extinto: "LUIS FRANCISCO LUQUE",
        nacimiento: "1937-05-14",
        defuncion: "1998-06-07",
        sector: "Sector Amarillo",
        latitud: -31.5678230,
        longitud: -63.5159899
    },
    {
        id: 2009,
        extinto: "LUIS OVIDIO GONZALEZ",
        nacimiento: "2014-09-23",
        defuncion: "2014-09-23",
        sector: "Sector Amarillo",
        latitud: -31.5677385,
        longitud: -63.5159954
    },
    {
        id: 2010,
        extinto: "ELECTRA AURELIA AMEDEI",
        nacimiento: "2014-09-23",
        defuncion: "2014-09-23",
        sector: "Sector Amarillo",
        latitud: -31.5677385,
        longitud: -63.5159954
    },
    {
        id: 2011,
        extinto: "GONZALEZ AMEIDE AIDA AURORA",
        nacimiento: "1934-12-25",
        defuncion: "2017-08-21",
        sector: "Sector Amarillo",
        latitud: -31.5677385,
        longitud: -63.5159954
    },
    {
        id: 2012,
        extinto: "ZABALA MARIA TERESA",
        nacimiento: "1917-10-15",
        defuncion: "2004-01-12",
        sector: "Sector Amarillo",
        latitud: -31.5677500,
        longitud: -63.5159980
    },
    {
        id: 2013,
        extinto: "ANDRES VICENTE BONGIOVANNI",
        nacimiento: "1925-08-25",
        defuncion: "2012-07-10",
        sector: "Sector Amarillo",
        latitud: -31.5677615,
        longitud: -63.5160006
    },
    {
        id: 2014,
        extinto: "SILVIA HAYDEE GOMEZ",
        nacimiento: "1928-08-06",
        defuncion: "2013-04-01",
        sector: "Sector Amarillo",
        latitud: -31.5677615,
        longitud: -63.5160006
    },
    {
        id: 2015,
        extinto: "JAVIER HORACIO ALBERT",
        nacimiento: "1974-08-09",
        defuncion: "1983-02-09",
        sector: "Sector Amarillo",
        latitud: -31.5677615,
        longitud: -63.5160006
    },
    {
        id: 2016,
        extinto: "FARRANDO ANA CECILIA",
        nacimiento: "1975-05-08",
        defuncion: "1983-09-07",
        sector: "Sector Amarillo",
        latitud: -31.5678075,
        longitud: -63.5160111
    },
    {
        id: 2017,
        extinto: "FRANCISCO  JUSTO  AGUIRRE",
        nacimiento: "1944-09-20",
        defuncion: "2023-10-20",
        sector: "Sector Amarillo",
        latitud: -31.5678536,
        longitud: -63.5160215
    },
    {
        id: 2018,
        extinto: "GONZALEZ AMEDEI JUAN",
        nacimiento: "1939-06-18",
        defuncion: "2011-06-06",
        sector: "Sector Amarillo",
        latitud: -31.5677222,
        longitud: -63.5160218
    },
    {
        id: 2019,
        extinto: "MORUÑA JULIETA",
        nacimiento: "1987-05-10",
        defuncion: "2003-12-19",
        sector: "Sector Amarillo",
        latitud: -31.5677337,
        longitud: -63.5160244
    },
    {
        id: 2020,
        extinto: "RICARDO HUGO QUARANTELLI",
        nacimiento: "1960-04-09",
        defuncion: "2009-04-08",
        sector: "Sector Amarillo",
        latitud: -31.5677337,
        longitud: -63.5160244
    },
    {
        id: 2021,
        extinto: "ANTONIO JOSE CORTEZ",
        nacimiento: "1945-04-02",
        defuncion: "2010-09-20",
        sector: "Sector Amarillo",
        latitud: -31.5677452,
        longitud: -63.5160270
    },
    {
        id: 2022,
        extinto: "JOSE CORTEZ",
        nacimiento: "2017-09-13",
        defuncion: "2017-09-13",
        sector: "Sector Amarillo",
        latitud: -31.5677452,
        longitud: -63.5160270
    },
    {
        id: 2023,
        extinto: "JUAN ZABALA",
        nacimiento: "2016-11-22",
        defuncion: "2016-11-22",
        sector: "Sector Amarillo",
        latitud: -31.5677912,
        longitud: -63.5160374
    },
    {
        id: 2024,
        extinto: "PAULINA MAIDANA",
        nacimiento: "2016-11-22",
        defuncion: "2016-11-22",
        sector: "Sector Amarillo",
        latitud: -31.5677912,
        longitud: -63.5160374
    },
    {
        id: 2025,
        extinto: "MARIA AURELIA ZABALA",
        nacimiento: "2016-11-22",
        defuncion: "2016-11-22",
        sector: "Sector Amarillo",
        latitud: -31.5677912,
        longitud: -63.5160374
    },
    {
        id: 2026,
        extinto: "ROBERTO TABORDA",
        nacimiento: "1949-07-09",
        defuncion: "1990-05-15",
        sector: "Sector Amarillo",
        latitud: -31.5677912,
        longitud: -63.5160374
    },
    {
        id: 2027,
        extinto: "GALINDEZ JULIA",
        nacimiento: "1917-08-19",
        defuncion: "2002-01-08",
        sector: "Sector Amarillo",
        latitud: -31.5677182,
        longitud: -63.5160456
    },
    {
        id: 2028,
        extinto: "GALINDEZ MAURICIO",
        nacimiento: "1919-12-03",
        defuncion: "2002-08-12",
        sector: "Sector Amarillo",
        latitud: -31.5677182,
        longitud: -63.5160456
    },
    {
        id: 2029,
        extinto: "AGUIAR BLANCA ARGENTINA",
        nacimiento: "1924-01-04",
        defuncion: "2012-06-16",
        sector: "Sector Amarillo",
        latitud: -31.5677297,
        longitud: -63.5160482
    },
    {
        id: 2030,
        extinto: "JUAREZ DANIEL",
        nacimiento: "1965-12-31",
        defuncion: "2011-10-16",
        sector: "Sector Amarillo",
        latitud: -31.5677412,
        longitud: -63.5160508
    },
    {
        id: 2031,
        extinto: "MARCELO OSCAR BOEHLER",
        nacimiento: "1964-12-27",
        defuncion: "2016-03-07",
        sector: "Sector Amarillo",
        latitud: -31.5677825,
        longitud: -63.5160902
    },
    {
        id: 2032,
        extinto: "BOEHLER MIRTA",
        nacimiento: "1940-03-23",
        defuncion: "2002-12-27",
        sector: "Sector Amarillo",
        latitud: -31.5677940,
        longitud: -63.5160928
    },
    {
        id: 2033,
        extinto: "BOEHLER VICTOR LUIS",
        nacimiento: "1942-02-26",
        defuncion: "2003-12-05",
        sector: "Sector Amarillo",
        latitud: -31.5677940,
        longitud: -63.5160928
    },
    {
        id: 2034,
        extinto: "CAUDANA EDELMO JUAN MANUEL",
        nacimiento: "1937-03-15",
        defuncion: "2015-06-24",
        sector: "Sector Amarillo",
        latitud: -31.5677940,
        longitud: -63.5160928
    },
    {
        id: 2035,
        extinto: "SEBASTIAN CAUDANA",
        nacimiento: "1907-12-27",
        defuncion: "1978-03-30",
        sector: "Sector Amarillo",
        latitud: -31.5678170,
        longitud: -63.5160980
    },
    {
        id: 2036,
        extinto: "CAROLINA CLARA CRAVERO",
        nacimiento: "1995-06-03",
        defuncion: "1999-08-03",
        sector: "Sector Amarillo",
        latitud: -31.5678170,
        longitud: -63.5160980
    },
    {
        id: 2037,
        extinto: "ORELLANA DIONICIA",
        nacimiento: "1940-10-14",
        defuncion: "2013-01-20",
        sector: "Sector Amarillo",
        latitud: -31.5678361,
        longitud: -63.5161270
    },
    {
        id: 2038,
        extinto: "ALBERICI  ROBERTO",
        nacimiento: "1939-07-09",
        defuncion: "2004-03-23",
        sector: "Sector Amarillo",
        latitud: -31.5677047,
        longitud: -63.5161273
    },
    {
        id: 2039,
        extinto: "BRAVO ANGELA INES",
        nacimiento: "1948-11-01",
        defuncion: "2014-07-07",
        sector: "Sector Amarillo",
        latitud: -31.5677047,
        longitud: -63.5161273
    },
    {
        id: 2040,
        extinto: "J.JAVIER VOCOS",
        nacimiento: "2007-12-06",
        defuncion: "2007-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5677622,
        longitud: -63.5161403
    },
    {
        id: 2041,
        extinto: "M.NIGELIA VOCOS",
        nacimiento: "2007-12-06",
        defuncion: "2007-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5677622,
        longitud: -63.5161403
    },
    {
        id: 2042,
        extinto: "J.HERMENGAUDIO VOCOS",
        nacimiento: "2007-12-06",
        defuncion: "2007-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5677622,
        longitud: -63.5161403
    },
    {
        id: 2043,
        extinto: "ESPIRITU VOCOS",
        nacimiento: "2007-12-06",
        defuncion: "2007-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5677737,
        longitud: -63.5161429
    },
    {
        id: 2044,
        extinto: "HERMENGAUDIO VOCOS",
        nacimiento: "2007-12-06",
        defuncion: "2007-12-06",
        sector: "Sector Amarillo",
        latitud: -31.5677737,
        longitud: -63.5161429
    },
    {
        id: 2045,
        extinto: "ARGENTES YOLANDA VIRGINIA",
        nacimiento: "1936-06-15",
        defuncion: "2010-12-29",
        sector: "Sector Amarillo",
        latitud: -31.5677852,
        longitud: -63.5161455
    },
    {
        id: 2046,
        extinto: "ARGENTE ORLANDO ALBERTO",
        nacimiento: "1939-12-20",
        defuncion: "2011-01-24",
        sector: "Sector Amarillo",
        latitud: -31.5677852,
        longitud: -63.5161455
    },
    {
        id: 2047,
        extinto: "ARGENTE JOSE",
        nacimiento: "1912-09-06",
        defuncion: "1997-04-10",
        sector: "Sector Amarillo",
        latitud: -31.5677968,
        longitud: -63.5161481
    },
    {
        id: 2048,
        extinto: "DELFITO JOSEFINA DOROTEA",
        nacimiento: "1914-12-10",
        defuncion: "2003-02-27",
        sector: "Sector Amarillo",
        latitud: -31.5677968,
        longitud: -63.5161481
    },
    {
        id: 2049,
        extinto: "MAURICIO OMAR SAMBRENIL",
        nacimiento: "1938-08-11",
        defuncion: "2018-06-27",
        sector: "Sector Amarillo",
        latitud: -31.5677122,
        longitud: -63.5161537
    },
    {
        id: 2050,
        extinto: "LUIS ARMANDO CONTRERAS",
        nacimiento: "1954-08-05",
        defuncion: "2003-08-22",
        sector: "Sector Amarillo",
        latitud: -31.5677583,
        longitud: -63.5161641
    },
    {
        id: 2051,
        extinto: "QUINTERO LOURDES MARTINA",
        nacimiento: "2010-03-17",
        defuncion: "2010-03-26",
        sector: "Sector Amarillo",
        latitud: -31.5677583,
        longitud: -63.5161641
    },
    {
        id: 2052,
        extinto: "SILVINA   CONTRERAS",
        nacimiento: "1981-01-05",
        defuncion: "1988-12-05",
        sector: "Sector Amarillo",
        latitud: -31.5677698,
        longitud: -63.5161667
    },
    {
        id: 2053,
        extinto: "CHIALVA RAUL EDUARDO",
        nacimiento: "1968-06-05",
        defuncion: "2016-12-31",
        sector: "Sector Amarillo",
        latitud: -31.5676968,
        longitud: -63.5161748
    },
    {
        id: 2054,
        extinto: "MARINA DE LOS ANGELES ATTIS",
        nacimiento: "1978-01-04",
        defuncion: "2021-12-02",
        sector: "Sector Amarillo",
        latitud: -31.5677774,
        longitud: -63.5161931
    },
    {
        id: 2055,
        extinto: "ROSSO CAROLINA",
        nacimiento: "1925-02-15",
        defuncion: "2009-06-22",
        sector: "Sector Amarillo",
        latitud: -31.5678119,
        longitud: -63.5162009
    },
    {
        id: 2056,
        extinto: "OVIDIO RAUL CORDOBA",
        nacimiento: "1955-12-30",
        defuncion: "2021-03-25",
        sector: "Sector Amarillo",
        latitud: -31.5678119,
        longitud: -63.5162009
    },
    {
        id: 2057,
        extinto: "ISLAS JOSE RUPERTO",
        nacimiento: "1927-04-07",
        defuncion: "2002-08-03",
        sector: "Sector Amarillo",
        latitud: -31.5678234,
        longitud: -63.5162035
    },
    {
        id: 2058,
        extinto: "TAMAGNINI RUBEN ORESTE",
        nacimiento: "2009-07-02",
        defuncion: "2009-07-02",
        sector: "Sector Amarillo",
        latitud: -31.5678234,
        longitud: -63.5162035
    },
    {
        id: 2059,
        extinto: "NIETO JUAN IGNACIO",
        nacimiento: "1947-01-27",
        defuncion: "2011-02-28",
        sector: "Sector Amarillo",
        latitud: -31.5676884,
        longitud: -63.5157242
    },
    {
        id: 2060,
        extinto: "MORENO ELENA",
        nacimiento: "1924-01-08",
        defuncion: "2007-09-02",
        sector: "Sector Amarillo",
        latitud: -31.5677082,
        longitud: -63.5157313
    },
    {
        id: 2061,
        extinto: "ZORZENON JUAN MARCELINO",
        nacimiento: "1920-03-01",
        defuncion: "2000-07-19",
        sector: "Sector Amarillo",
        latitud: -31.5677082,
        longitud: -63.5157313
    },
    {
        id: 2062,
        extinto: "ZORZENON  ANTONIO",
        nacimiento: "1900-10-05",
        defuncion: "1983-09-12",
        sector: "Sector Amarillo",
        latitud: -31.5677082,
        longitud: -63.5157313
    },
    {
        id: 2063,
        extinto: "CARLOS OMAR NORIEGA",
        nacimiento: "1931-12-13",
        defuncion: "1976-06-10",
        sector: "Sector Amarillo",
        latitud: -31.5678358,
        longitud: -63.5157771
    },
    {
        id: 2064,
        extinto: "ESTANISLAO OMAR NORIEGA",
        nacimiento: "2009-08-13",
        defuncion: "2009-08-13",
        sector: "Sector Amarillo",
        latitud: -31.5678358,
        longitud: -63.5157771
    },
    {
        id: 2065,
        extinto: "MARIA GILA SORIA",
        nacimiento: "1930-11-22",
        defuncion: "1999-11-26",
        sector: "Sector Amarillo",
        latitud: -31.5678358,
        longitud: -63.5157771
    },
    {
        id: 2066,
        extinto: "ANDRADA RAMON ALBERTO",
        nacimiento: "1942-05-10",
        defuncion: "2013-09-23",
        sector: "Sector Amarillo",
        latitud: -31.5678358,
        longitud: -63.5157771
    },
    {
        id: 2067,
        extinto: "LEANDRO DAVID ROSSI",
        nacimiento: "1979-12-06",
        defuncion: "2022-10-04",
        sector: "Sector Amarillo",
        latitud: -31.5678557,
        longitud: -63.5157842
    },
    {
        id: 2068,
        extinto: "LUPARIA CARLOS ALBERTO",
        nacimiento: "1939-08-01",
        defuncion: "2009-07-27",
        sector: "Sector Amarillo",
        latitud: -31.5678798,
        longitud: -63.5157929
    },
    {
        id: 2069,
        extinto: "CATALINA RE DE VAUDAGNA",
        nacimiento: "2013-12-24",
        defuncion: "2013-12-24",
        sector: "Sector Amarillo",
        latitud: -31.5678798,
        longitud: -63.5157929
    },
    {
        id: 2070,
        extinto: "ANA BELE ROSSI",
        nacimiento: "2013-12-24",
        defuncion: "2013-12-24",
        sector: "Sector Amarillo",
        latitud: -31.5678798,
        longitud: -63.5157929
    },
    {
        id: 2071,
        extinto: "JUAN BAUDAGNA",
        nacimiento: "2013-12-24",
        defuncion: "2013-12-24",
        sector: "Sector Amarillo",
        latitud: -31.5678798,
        longitud: -63.5157929
    },
    {
        id: 2072,
        extinto: "LESBEGURIS MARIA",
        nacimiento: "1945-03-12",
        defuncion: "1948-02-11",
        sector: "Sector Amarillo",
        latitud: -31.5678996,
        longitud: -63.5158000
    },
    {
        id: 2073,
        extinto: "LESBEGUERIS ROSA RAMONA",
        nacimiento: "1919-12-22",
        defuncion: "1920-02-05",
        sector: "Sector Amarillo",
        latitud: -31.5678996,
        longitud: -63.5158000
    },
    {
        id: 2074,
        extinto: "RIOS ROSENDO",
        nacimiento: "1900-12-22",
        defuncion: "1964-02-20",
        sector: "Sector Amarillo",
        latitud: -31.5678996,
        longitud: -63.5158000
    },
    {
        id: 2075,
        extinto: "VAUDAGNA EDGAR BAUTISTA",
        nacimiento: "1933-07-23",
        defuncion: "1994-07-18",
        sector: "Sector Amarillo",
        latitud: -31.5678996,
        longitud: -63.5158000
    },
    {
        id: 2076,
        extinto: "LESBEGUERIS ANA CLEOTILDE",
        nacimiento: "1936-07-26",
        defuncion: "2000-12-20",
        sector: "Sector Amarillo",
        latitud: -31.5678996,
        longitud: -63.5158000
    },
    {
        id: 2077,
        extinto: "CABRERA HORTENCIA",
        nacimiento: "1928-08-15",
        defuncion: "2007-08-04",
        sector: "Sector Amarillo",
        latitud: -31.5676850,
        longitud: -63.5157372
    },
    {
        id: 2078,
        extinto: "BARRERA JOSE ATILIO",
        nacimiento: "1961-07-29",
        defuncion: "2011-11-02",
        sector: "Sector Amarillo",
        latitud: -31.5676850,
        longitud: -63.5157372
    },
    {
        id: 2079,
        extinto: "FORNERO JUAN ERNESTO",
        nacimiento: "1962-06-21",
        defuncion: "2014-12-09",
        sector: "Sector Amarillo",
        latitud: -31.5677048,
        longitud: -63.5157444
    },
    {
        id: 2080,
        extinto: "JUANA AUDELINA CABRERA",
        nacimiento: "1945-05-15",
        defuncion: "2021-01-07",
        sector: "Sector Amarillo",
        latitud: -31.5677048,
        longitud: -63.5157444
    },
    {
        id: 2081,
        extinto: "LUQUE HILDA ESMILDA",
        nacimiento: "1939-12-12",
        defuncion: "2008-05-04",
        sector: "Sector Amarillo",
        latitud: -31.5677246,
        longitud: -63.5157515
    },
    {
        id: 2082,
        extinto: "ELVIO CARMEN BALBO",
        nacimiento: "1938-02-20",
        defuncion: "2019-11-17",
        sector: "Sector Amarillo",
        latitud: -31.5677246,
        longitud: -63.5157515
    },
    {
        id: 2083,
        extinto: "CRETTINO BAUTISTA ERNESTO",
        nacimiento: "1934-03-31",
        defuncion: "2011-04-13",
        sector: "Sector Amarillo",
        latitud: -31.5678324,
        longitud: -63.5157902
    },
    {
        id: 2084,
        extinto: "JUAN CARLOS CRETTINO",
        nacimiento: "1970-07-27",
        defuncion: "2021-09-06",
        sector: "Sector Amarillo",
        latitud: -31.5678324,
        longitud: -63.5157902
    },
    {
        id: 2085,
        extinto: "ACOSTA MIGUELINA DEL VALLE",
        nacimiento: "1946-10-28",
        defuncion: "2005-03-14",
        sector: "Sector Amarillo",
        latitud: -31.5676815,
        longitud: -63.5157503
    },
    {
        id: 2086,
        extinto: "MILAGROS MORELLO- MONCADA",
        nacimiento: "2007-04-16",
        defuncion: "2007-04-16",
        sector: "Sector Amarillo",
        latitud: -31.5677212,
        longitud: -63.5157646
    },
    {
        id: 2087,
        extinto: "DOMINGA ELVIRA BRIA",
        nacimiento: "2018-08-31",
        defuncion: "2018-08-31",
        sector: "Sector Amarillo",
        latitud: -31.5676781,
        longitud: -63.5157634
    },
    {
        id: 2088,
        extinto: "CATALINA BRIA DE FERNANDEZ",
        nacimiento: "2018-08-31",
        defuncion: "2018-08-31",
        sector: "Sector Amarillo",
        latitud: -31.5676781,
        longitud: -63.5157634
    },
    {
        id: 2089,
        extinto: "DOMINGO BRIA",
        nacimiento: "2018-08-31",
        defuncion: "2018-08-31",
        sector: "Sector Amarillo",
        latitud: -31.5676781,
        longitud: -63.5157634
    },
    {
        id: 2090,
        extinto: "DOMINGA DENINOTTI DE BRIA",
        nacimiento: "2018-08-31",
        defuncion: "2018-08-31",
        sector: "Sector Amarillo",
        latitud: -31.5676781,
        longitud: -63.5157634
    },
    {
        id: 2091,
        extinto: "INES RAMONA HUZULIAK",
        nacimiento: "1921-06-30",
        defuncion: "1979-08-18",
        sector: "Sector Amarillo",
        latitud: -31.5676979,
        longitud: -63.5157705
    },
    {
        id: 2092,
        extinto: "JOSE BARTOLO BRIA",
        nacimiento: "1919-06-26",
        defuncion: "1983-02-05",
        sector: "Sector Amarillo",
        latitud: -31.5676979,
        longitud: -63.5157705
    },
    {
        id: 2093,
        extinto: "YOLANDA ESTHER BRIA",
        nacimiento: "1946-06-16",
        defuncion: "1974-10-25",
        sector: "Sector Amarillo",
        latitud: -31.5676979,
        longitud: -63.5157705
    },
    {
        id: 2094,
        extinto: "BERNABE RAUL FARIAS",
        nacimiento: "1945-06-11",
        defuncion: "2009-11-16",
        sector: "Sector Amarillo",
        latitud: -31.5676746,
        longitud: -63.5157765
    },
    {
        id: 2095,
        extinto: "GLADIS MARGARITA PESANDO",
        nacimiento: "1947-03-30",
        defuncion: "2022-12-24",
        sector: "Sector Amarillo",
        latitud: -31.5676746,
        longitud: -63.5157765
    },
    {
        id: 2096,
        extinto: "FALCO MIRTA DEL CARMEN",
        nacimiento: "1963-07-16",
        defuncion: "2017-09-11",
        sector: "Sector Amarillo",
        latitud: -31.5677143,
        longitud: -63.5157908
    },
    {
        id: 2097,
        extinto: "BENZO RUBEN PEDRO",
        nacimiento: "1929-12-08",
        defuncion: "1982-03-25",
        sector: "Sector Amarillo",
        latitud: -31.5676712,
        longitud: -63.5157896
    },
    {
        id: 2098,
        extinto: "FERNANDEZ RUBEN TIMOTEO",
        nacimiento: "1931-05-06",
        defuncion: "2011-11-14",
        sector: "Sector Amarillo",
        latitud: -31.5676910,
        longitud: -63.5157967
    },
    {
        id: 2099,
        extinto: "NEVA MARIA CALVO",
        nacimiento: "1933-08-01",
        defuncion: "2019-08-19",
        sector: "Sector Amarillo",
        latitud: -31.5676910,
        longitud: -63.5157967
    },
    {
        id: 2100,
        extinto: "MARSILI JUANA CARMEN",
        nacimiento: "1945-01-09",
        defuncion: "2007-09-08",
        sector: "Sector Amarillo",
        latitud: -31.5677108,
        longitud: -63.5158038
    },
    {
        id: 2101,
        extinto: "FALCO MAURICIO HECTOR",
        nacimiento: "1943-04-21",
        defuncion: "2010-01-01",
        sector: "Sector Amarillo",
        latitud: -31.5677108,
        longitud: -63.5158038
    },
    {
        id: 2102,
        extinto: "BLANCA MARGARITA TONATTO",
        nacimiento: "1943-01-19",
        defuncion: "2007-09-07",
        sector: "Sector Amarillo",
        latitud: -31.5676678,
        longitud: -63.5158027
    },
    {
        id: 2103,
        extinto: "VICTOR LEOPOLDO PEDRAZA",
        nacimiento: "1939-05-03",
        defuncion: "2020-09-13",
        sector: "Sector Amarillo",
        latitud: -31.5676678,
        longitud: -63.5158027
    },
    {
        id: 2104,
        extinto: "MOSSATTO CANDIDA",
        nacimiento: "1949-09-22",
        defuncion: "2014-08-31",
        sector: "Sector Amarillo",
        latitud: -31.5676876,
        longitud: -63.5158098
    },
    {
        id: 2105,
        extinto: "RAMOS JORGE MACIEL",
        nacimiento: "1992-05-09",
        defuncion: "1992-05-10",
        sector: "Sector Amarillo",
        latitud: -31.5677074,
        longitud: -63.5158169
    },
    {
        id: 2106,
        extinto: "N-N RAMOS GIOVANNI",
        nacimiento: "2019-12-02",
        defuncion: "2019-12-02",
        sector: "Sector Amarillo",
        latitud: -31.5677074,
        longitud: -63.5158169
    },
    {
        id: 2107,
        extinto: "FERNANDO LUIS HERRERA",
        nacimiento: "1957-03-11",
        defuncion: "2017-12-02",
        sector: "Sector Amarillo",
        latitud: -31.5677315,
        longitud: -63.5158256
    },
    {
        id: 2108,
        extinto: "GABRIEL HECTOR VIDELA",
        nacimiento: "1940-05-03",
        defuncion: "1995-09-04",
        sector: "Sector Amarillo",
        latitud: -31.5677514,
        longitud: -63.5158327
    },
    {
        id: 2109,
        extinto: "ESTELA  ROSA  ISAIA",
        nacimiento: "1960-02-02",
        defuncion: "2023-02-19",
        sector: "Sector Amarillo",
        latitud: -31.5677712,
        longitud: -63.5158398
    },
    {
        id: 2110,
        extinto: "PERALTA REYNALDO RAMON",
        nacimiento: "1927-02-11",
        defuncion: "2004-08-02",
        sector: "Sector Amarillo",
        latitud: -31.5678789,
        longitud: -63.5158785
    },
    {
        id: 2111,
        extinto: "JUAREZ ANTONIA CITA",
        nacimiento: "1931-03-11",
        defuncion: "2017-07-14",
        sector: "Sector Amarillo",
        latitud: -31.5678789,
        longitud: -63.5158785
    },
    {
        id: 2112,
        extinto: "NEREO EFRAIN LIENDO",
        nacimiento: "1925-10-09",
        defuncion: "2006-06-02",
        sector: "Sector Amarillo",
        latitud: -31.5676643,
        longitud: -63.5158158
    },
    {
        id: 2113,
        extinto: "CANGA ELMA BEGLIA",
        nacimiento: "1927-11-08",
        defuncion: "2015-04-18",
        sector: "Sector Amarillo",
        latitud: -31.5676643,
        longitud: -63.5158158
    },
    {
        id: 2114,
        extinto: "PINOS JOSE DEMETRIO",
        nacimiento: "1930-10-08",
        defuncion: "2009-10-01",
        sector: "Sector Amarillo",
        latitud: -31.5676841,
        longitud: -63.5158229
    },
    {
        id: 2115,
        extinto: "ANA  HUZULIAK",
        nacimiento: "1935-01-07",
        defuncion: "2023-04-20",
        sector: "Sector Amarillo",
        latitud: -31.5676841,
        longitud: -63.5158229
    },
    {
        id: 2116,
        extinto: "UTRERA TRANSITO ROSA",
        nacimiento: "1924-01-07",
        defuncion: "2007-01-12",
        sector: "Sector Amarillo",
        latitud: -31.5677040,
        longitud: -63.5158300
    },
    {
        id: 2117,
        extinto: "LIENDO JOSE ADELMO",
        nacimiento: "1939-07-28",
        defuncion: "1988-07-28",
        sector: "Sector Amarillo",
        latitud: -31.5677040,
        longitud: -63.5158300
    },
    {
        id: 2118,
        extinto: "ALMADA MARIA JOSEFINA",
        nacimiento: "1941-11-26",
        defuncion: "2007-12-28",
        sector: "Sector Amarillo",
        latitud: -31.5677281,
        longitud: -63.5158387
    },
    {
        id: 2119,
        extinto: "UTRERA MARIA ESTHER",
        nacimiento: "1927-02-13",
        defuncion: "2017-09-16",
        sector: "Sector Amarillo",
        latitud: -31.5677677,
        longitud: -63.5158529
    },
    {
        id: 2120,
        extinto: "ANTONIO DANIEL SOTTOVIA",
        nacimiento: "1920-12-06",
        defuncion: "1999-04-21",
        sector: "Sector Amarillo",
        latitud: -31.5677677,
        longitud: -63.5158529
    },
    {
        id: 2121,
        extinto: "ROSA EUFEMIA SOTTOVIA",
        nacimiento: "1961-07-26",
        defuncion: "1961-11-23",
        sector: "Sector Amarillo",
        latitud: -31.5677677,
        longitud: -63.5158529
    },
    {
        id: 2122,
        extinto: "CRISTINA ADELINA SANCHEZ",
        nacimiento: "1929-07-10",
        defuncion: "2022-04-18",
        sector: "Sector Amarillo",
        latitud: -31.5677919,
        longitud: -63.5158616
    },
    {
        id: 2123,
        extinto: "RAMON EDUARDO ZAPPA",
        nacimiento: "1955-03-15",
        defuncion: "2022-09-18",
        sector: "Sector Amarillo",
        latitud: -31.5678117,
        longitud: -63.5158687
    },
    {
        id: 2124,
        extinto: "HECTOR OSCAR LOPEZ",
        nacimiento: "1956-03-28",
        defuncion: "2021-11-22",
        sector: "Sector Amarillo",
        latitud: -31.5678755,
        longitud: -63.5158916
    },
    {
        id: 2125,
        extinto: "JUAN CARLOS BELTRAMO",
        nacimiento: "1904-05-24",
        defuncion: "1974-09-07",
        sector: "Sector Amarillo",
        latitud: -31.5676609,
        longitud: -63.5158289
    },
    {
        id: 2126,
        extinto: "ABBA ROMILDA ELVIRA",
        nacimiento: "1917-03-03",
        defuncion: "1996-05-30",
        sector: "Sector Amarillo",
        latitud: -31.5676609,
        longitud: -63.5158289
    },
    {
        id: 2127,
        extinto: "ALBERICHI NOELIA KARINA",
        nacimiento: "1988-08-31",
        defuncion: "2007-02-20",
        sector: "Sector Amarillo",
        latitud: -31.5676807,
        longitud: -63.5158360
    },
    {
        id: 2128,
        extinto: "RODRIGUEZ CARLOS ALBERTO",
        nacimiento: "1957-09-14",
        defuncion: "2008-04-19",
        sector: "Sector Amarillo",
        latitud: -31.5677005,
        longitud: -63.5158431
    },
    {
        id: 2129,
        extinto: "ELVIO SEBASTIAN BRUNETTO",
        nacimiento: "1927-08-08",
        defuncion: "2011-12-16",
        sector: "Sector Amarillo",
        latitud: -31.5677247,
        longitud: -63.5158518
    },
    {
        id: 2130,
        extinto: "GENESIO EMILIA VICTORIA",
        nacimiento: "1925-11-23",
        defuncion: "1987-07-31",
        sector: "Sector Amarillo",
        latitud: -31.5677247,
        longitud: -63.5158518
    },
    {
        id: 2131,
        extinto: "SANCHEZ ANASTACIA",
        nacimiento: "1919-05-02",
        defuncion: "2013-04-20",
        sector: "Sector Amarillo",
        latitud: -31.5677445,
        longitud: -63.5158589
    },
    {
        id: 2132,
        extinto: "ZAPPA ESTEBAN JOSE",
        nacimiento: "2014-10-16",
        defuncion: "2014-10-16",
        sector: "Sector Amarillo",
        latitud: -31.5677445,
        longitud: -63.5158589
    },
    {
        id: 2133,
        extinto: "MARIA ISABEL ZAPPA",
        nacimiento: "1946-04-07",
        defuncion: "2021-03-20",
        sector: "Sector Amarillo",
        latitud: -31.5677445,
        longitud: -63.5158589
    },
    {
        id: 2134,
        extinto: "LOZANO RODOLFO",
        nacimiento: "1922-04-22",
        defuncion: "2013-09-26",
        sector: "Sector Amarillo",
        latitud: -31.5677643,
        longitud: -63.5158660
    },
    {
        id: 2135,
        extinto: "FELISA IRENE PALACIO",
        nacimiento: "1927-04-27",
        defuncion: "2019-02-23",
        sector: "Sector Amarillo",
        latitud: -31.5677643,
        longitud: -63.5158660
    },
    {
        id: 2136,
        extinto: "MARCELO  GABRIEL  LUCERO",
        nacimiento: "1968-06-17",
        defuncion: "2023-01-28",
        sector: "Sector Amarillo",
        latitud: -31.5677884,
        longitud: -63.5158747
    },
    {
        id: 2137,
        extinto: "JORGE ALBERICHI",
        nacimiento: "1949-09-12",
        defuncion: "2022-01-12",
        sector: "Sector Amarillo",
        latitud: -31.5678083,
        longitud: -63.5158818
    },
    {
        id: 2138,
        extinto: "ONTIVEROS ARTURO BENJAMIN",
        nacimiento: "1926-04-07",
        defuncion: "1988-10-28",
        sector: "Sector Amarillo",
        latitud: -31.5676574,
        longitud: -63.5158420
    },
    {
        id: 2139,
        extinto: "MARIA ANGELICA CEREZO FERREYROLA",
        nacimiento: "1927-11-07",
        defuncion: "1976-10-03",
        sector: "Sector Amarillo",
        latitud: -31.5676574,
        longitud: -63.5158420
    },
    {
        id: 2140,
        extinto: "MANSANELLI ESTHER DEL CARMEN",
        nacimiento: "1952-03-29",
        defuncion: "2004-11-05",
        sector: "Sector Amarillo",
        latitud: -31.5676772,
        longitud: -63.5158491
    },
    {
        id: 2141,
        extinto: "CUGAT DANIEL RAUL",
        nacimiento: "1952-09-26",
        defuncion: "2006-09-19",
        sector: "Sector Amarillo",
        latitud: -31.5676971,
        longitud: -63.5158562
    },
    {
        id: 2142,
        extinto: "VACA MARIA SUSUNA",
        nacimiento: "1938-03-25",
        defuncion: "2003-02-13",
        sector: "Sector Amarillo",
        latitud: -31.5677212,
        longitud: -63.5158649
    },
    {
        id: 2143,
        extinto: "BENITO MODESTO FIORA",
        nacimiento: "1936-12-19",
        defuncion: "2007-07-03",
        sector: "Sector Amarillo",
        latitud: -31.5677212,
        longitud: -63.5158649
    },
    {
        id: 2144,
        extinto: "CARLOS HUGO FIORA",
        nacimiento: "2018-07-02",
        defuncion: "2018-07-02",
        sector: "Sector Amarillo",
        latitud: -31.5677212,
        longitud: -63.5158649
    },
    {
        id: 2145,
        extinto: "CISTERNA SAN TIAGO EUGENIO",
        nacimiento: "1950-04-15",
        defuncion: "2011-11-27",
        sector: "Sector Amarillo",
        latitud: -31.5677410,
        longitud: -63.5158720
    },
    {
        id: 2146,
        extinto: "ORESTE ACOSTA",
        nacimiento: "1953-11-02",
        defuncion: "2015-12-19",
        sector: "Sector Amarillo",
        latitud: -31.5677410,
        longitud: -63.5158720
    },
    {
        id: 2147,
        extinto: "JUAN FORTUNATO BATALLA",
        nacimiento: "1945-12-08",
        defuncion: "2019-01-30",
        sector: "Sector Amarillo",
        latitud: -31.5677410,
        longitud: -63.5158720
    },
    {
        id: 2148,
        extinto: "VILCHES DIONISIO TOMAS",
        nacimiento: "1932-04-08",
        defuncion: "2007-09-13",
        sector: "Sector Amarillo",
        latitud: -31.5677850,
        longitud: -63.5158878
    },
    {
        id: 2149,
        extinto: "COLOMBO LETICIA",
        nacimiento: "1935-03-26",
        defuncion: "1988-06-13",
        sector: "Sector Amarillo",
        latitud: -31.5677850,
        longitud: -63.5158878
    },
    {
        id: 2150,
        extinto: "BERTOLATTO EVA BETTY",
        nacimiento: "1931-07-13",
        defuncion: "2018-07-20",
        sector: "Sector Amarillo",
        latitud: -31.5677850,
        longitud: -63.5158878
    },
    {
        id: 2151,
        extinto: "ANGRISANI IDA ANTONIA",
        nacimiento: "1924-03-05",
        defuncion: "2016-07-26",
        sector: "Sector Amarillo",
        latitud: -31.5678048,
        longitud: -63.5158949
    },
    {
        id: 2152,
        extinto: "CARLOS DANTE BERTONE",
        nacimiento: "1951-12-06",
        defuncion: "2018-12-28",
        sector: "Sector Amarillo",
        latitud: -31.5678048,
        longitud: -63.5158949
    },
    {
        id: 2153,
        extinto: "QUINTEROS ROSA LUCIA",
        nacimiento: "1939-12-14",
        defuncion: "2003-08-07",
        sector: "Sector Amarillo",
        latitud: -31.5678247,
        longitud: -63.5159020
    },
    {
        id: 2154,
        extinto: "MIRTA VICTORIA DELOGU",
        nacimiento: "2018-02-06",
        defuncion: "2018-02-06",
        sector: "Sector Amarillo",
        latitud: -31.5678488,
        longitud: -63.5159107
    },
    {
        id: 2155,
        extinto: "BENITES LUIS GERONIMO",
        nacimiento: "1948-09-30",
        defuncion: "1984-08-03",
        sector: "Sector Amarillo",
        latitud: -31.5678234,
        longitud: -63.5156632
    },
    {
        id: 2156,
        extinto: "MARTINATTO EMERIO ANTONIO",
        nacimiento: "1928-06-03",
        defuncion: "2013-06-24",
        sector: "Sector Amarillo",
        latitud: -31.5678457,
        longitud: -63.5156716
    },
    {
        id: 2157,
        extinto: "MOYA ROBERTO DANTE",
        nacimiento: "1935-01-15",
        defuncion: "2016-09-13",
        sector: "Sector Amarillo",
        latitud: -31.5678457,
        longitud: -63.5156716
    },
    {
        id: 2158,
        extinto: "AMALIA TERESA MARTINATTO",
        nacimiento: "1941-08-02",
        defuncion: "2021-04-29",
        sector: "Sector Amarillo",
        latitud: -31.5678457,
        longitud: -63.5156716
    },
    {
        id: 2159,
        extinto: "LOPEZ CAYETANA FRANCISCA",
        nacimiento: "1921-08-12",
        defuncion: "2001-02-27",
        sector: "Sector Amarillo",
        latitud: -31.5678031,
        longitud: -63.5157375
    },
    {
        id: 2160,
        extinto: "CRISPIN GERVACIO AGUIRRE",
        nacimiento: "1921-12-03",
        defuncion: "2007-12-11",
        sector: "Sector Amarillo",
        latitud: -31.5678031,
        longitud: -63.5157375
    },
    {
        id: 2161,
        extinto: "FATIMA ANTONELA SINGH",
        nacimiento: "2005-01-13",
        defuncion: "2021-05-07",
        sector: "Sector Amarillo",
        latitud: -31.5678031,
        longitud: -63.5157375
    },
    {
        id: 2162,
        extinto: "ECTOR  ORACIO  ACOSTA",
        nacimiento: "1956-03-02",
        defuncion: "2023-06-16",
        sector: "Sector Amarillo",
        latitud: -31.5678142,
        longitud: -63.5157416
    },
    {
        id: 2163,
        extinto: "DI GARBO MARIA ELENA",
        nacimiento: "1948-02-18",
        defuncion: "2016-07-07",
        sector: "Sector Rosa",
        latitud: -31.5679265,
        longitud: -63.5154601
    },
    {
        id: 2164,
        extinto: "GIGENA CARLOS HERMINIO",
        nacimiento: "1923-01-25",
        defuncion: "2017-08-27",
        sector: "Sector Rosa",
        latitud: -31.5679509,
        longitud: -63.5154678
    },
    {
        id: 2165,
        extinto: "AMERICA TULIA  GIGENA",
        nacimiento: "1931-02-26",
        defuncion: "2022-09-16",
        sector: "Sector Rosa",
        latitud: -31.5679709,
        longitud: -63.5154742
    },
    {
        id: 2166,
        extinto: "ANTONUCCI ANGEL",
        nacimiento: "1909-10-15",
        defuncion: "1994-02-11",
        sector: "Sector Rosa",
        latitud: -31.5678135,
        longitud: -63.5154302
    },
    {
        id: 2167,
        extinto: "DUBINI MARIA ANTONIA",
        nacimiento: "1918-02-28",
        defuncion: "2003-06-15",
        sector: "Sector Rosa",
        latitud: -31.5678135,
        longitud: -63.5154302
    },
    {
        id: 2168,
        extinto: "ANTONUCCILUIS ANGEL",
        nacimiento: "1945-04-03",
        defuncion: "2016-09-22",
        sector: "Sector Rosa",
        latitud: -31.5678324,
        longitud: -63.5154402
    },
    {
        id: 2169,
        extinto: "ARIAS JUAN ANTONIO",
        nacimiento: "1918-10-01",
        defuncion: "2001-07-12",
        sector: "Sector Rosa",
        latitud: -31.5678554,
        longitud: -63.5154524
    },
    {
        id: 2170,
        extinto: "ALSIRA MARIANA GENOLET",
        nacimiento: "2012-04-11",
        defuncion: "2012-04-11",
        sector: "Sector Rosa",
        latitud: -31.5678554,
        longitud: -63.5154524
    },
    {
        id: 2171,
        extinto: "ITALO EUSEBIO BRUCELLI",
        nacimiento: "1945-10-16",
        defuncion: "2018-01-05",
        sector: "Sector Rosa",
        latitud: -31.5678087,
        longitud: -63.5154426
    },
    {
        id: 2172,
        extinto: "MABEL  DEL  VALLE  ARIAS",
        nacimiento: "1949-12-28",
        defuncion: "2023-09-28",
        sector: "Sector Rosa",
        latitud: -31.5678087,
        longitud: -63.5154426
    },
    {
        id: 2173,
        extinto: "ARIAS SCANDAR",
        nacimiento: "1930-11-10",
        defuncion: "1973-04-17",
        sector: "Sector Rosa",
        latitud: -31.5678227,
        longitud: -63.5154651
    },
    {
        id: 2174,
        extinto: "ARIAS ALEJANDRO",
        nacimiento: "1970-10-18",
        defuncion: "1990-10-20",
        sector: "Sector Rosa",
        latitud: -31.5678227,
        longitud: -63.5154651
    },
    {
        id: 2175,
        extinto: "URAN SELVA NORA",
        nacimiento: "1926-04-10",
        defuncion: "2014-09-26",
        sector: "Sector Rosa",
        latitud: -31.5678227,
        longitud: -63.5154651
    },
    {
        id: 2176,
        extinto: "ANTONUCCI ANTONIO",
        nacimiento: "2013-10-29",
        defuncion: "2013-10-29",
        sector: "Sector Rosa",
        latitud: -31.5678646,
        longitud: -63.5154874
    },
    {
        id: 2177,
        extinto: "ANTONUCCIJUAN CARLOS",
        nacimiento: "2013-10-29",
        defuncion: "2013-10-29",
        sector: "Sector Rosa",
        latitud: -31.5678646,
        longitud: -63.5154874
    },
    {
        id: 2178,
        extinto: "ROSA ANGELICA PAOLETTI",
        nacimiento: "1922-12-24",
        defuncion: "2015-10-18",
        sector: "Sector Rosa",
        latitud: -31.5678646,
        longitud: -63.5154874
    },
    {
        id: 2179,
        extinto: "JUANA ROSA PAVON",
        nacimiento: "1942-08-21",
        defuncion: "2008-04-09",
        sector: "Sector Rosa",
        latitud: -31.5678179,
        longitud: -63.5154776
    },
    {
        id: 2180,
        extinto: "ARIAS JULIO ALBERTO",
        nacimiento: "1948-09-23",
        defuncion: "2011-08-08",
        sector: "Sector Rosa",
        latitud: -31.5678179,
        longitud: -63.5154776
    },
    {
        id: 2181,
        extinto: "TABORDA GUIDO BENJAMIN",
        nacimiento: "1938-08-11",
        defuncion: "2011-08-05",
        sector: "Sector Rosa",
        latitud: -31.5677941,
        longitud: -63.5154800
    },
    {
        id: 2182,
        extinto: "BELQUIS HAYDEE MONCADA",
        nacimiento: "1939-05-18",
        defuncion: "2020-10-15",
        sector: "Sector Rosa",
        latitud: -31.5677941,
        longitud: -63.5154800
    },
    {
        id: 2183,
        extinto: "URAN NILDA VIOLETA",
        nacimiento: "1921-02-09",
        defuncion: "2005-07-08",
        sector: "Sector Rosa",
        latitud: -31.5678130,
        longitud: -63.5154901
    },
    {
        id: 2184,
        extinto: "ANDRADA ANDRES LEONARDO",
        nacimiento: "1943-04-28",
        defuncion: "2009-12-19",
        sector: "Sector Rosa",
        latitud: -31.5678360,
        longitud: -63.5155023
    },
    {
        id: 2185,
        extinto: "FILIPPO MANUELA MAGDALENA",
        nacimiento: "1955-07-22",
        defuncion: "2015-05-29",
        sector: "Sector Rosa",
        latitud: -31.5678081,
        longitud: -63.5155025
    },
    {
        id: 2186,
        extinto: "MONCADA DARDO AMADEO",
        nacimiento: "1948-10-10",
        defuncion: "2016-06-03",
        sector: "Sector Rosa",
        latitud: -31.5678081,
        longitud: -63.5155025
    },
    {
        id: 2187,
        extinto: "BUFFA IRMA GLORIA",
        nacimiento: "1962-08-20",
        defuncion: "2012-11-18",
        sector: "Sector Rosa",
        latitud: -31.5677601,
        longitud: -63.5155673
    },
    {
        id: 2188,
        extinto: "DELORTO FRANCISCO",
        nacimiento: "1933-10-06",
        defuncion: "2012-07-25",
        sector: "Sector Rosa",
        latitud: -31.5678160,
        longitud: -63.5156120
    },
    {
        id: 2189,
        extinto: "LUDUEÑA BLANCA ROSA",
        nacimiento: "1951-09-20",
        defuncion: "2016-03-04",
        sector: "Sector Amarillo",
        latitud: -31.5677425,
        longitud: -63.5157037
    },
    {
        id: 2190,
        extinto: "LUDUEÑA HUMBERTO FERNANDO",
        nacimiento: "1978-12-11",
        defuncion: "2012-05-13",
        sector: "Sector Amarillo",
        latitud: -31.5677535,
        longitud: -63.5157084
    },
    {
        id: 2191,
        extinto: "BRANDAN MARISEL DEL MILAGRO",
        nacimiento: "1990-07-08",
        defuncion: "2016-03-21",
        sector: "Sector Verde",
        latitud: -31.5674808,
        longitud: -63.5164106
    },
    {
        id: 2192,
        extinto: "ELSA TERESA ALVAREZ",
        nacimiento: "1934-02-11",
        defuncion: "2017-07-02",
        sector: "Sector Verde",
        latitud: -31.5674981,
        longitud: -63.5164238
    },
    {
        id: 2193,
        extinto: "NADIR BEATRIZ MACAGNO",
        nacimiento: "1949-09-03",
        defuncion: "1977-12-05",
        sector: "Sector Verde",
        latitud: -31.5675192,
        longitud: -63.5164400
    },
    {
        id: 2194,
        extinto: "BARRERA SILVIA ALEJANDRA",
        nacimiento: "1976-08-09",
        defuncion: "2016-02-20",
        sector: "Sector Verde",
        latitud: -31.5674743,
        longitud: -63.5164220
    },
    {
        id: 2195,
        extinto: "BARRERA ROQUE OMAR",
        nacimiento: "1945-11-18",
        defuncion: "2019-01-03",
        sector: "Sector Verde",
        latitud: -31.5674743,
        longitud: -63.5164220
    },
    {
        id: 2196,
        extinto: "MARIANI GUSTAVO LUIS",
        nacimiento: "1959-07-11",
        defuncion: "2015-07-24",
        sector: "Sector Verde",
        latitud: -31.5674679,
        longitud: -63.5164335
    },
    {
        id: 2197,
        extinto: "CARLE MAGDALENA CATALINA",
        nacimiento: "1940-07-31",
        defuncion: "2008-03-31",
        sector: "Sector Verde",
        latitud: -31.5674551,
        longitud: -63.5164564
    },
    {
        id: 2198,
        extinto: "BORGNA VICTOR HUGO",
        nacimiento: "1931-08-04",
        defuncion: "2016-09-01",
        sector: "Sector Verde",
        latitud: -31.5674551,
        longitud: -63.5164564
    },
    {
        id: 2199,
        extinto: "BORGNA DANIEL",
        nacimiento: "1969-06-05",
        defuncion: "1969-10-26",
        sector: "Sector Verde",
        latitud: -31.5674551,
        longitud: -63.5164564
    },
    {
        id: 2200,
        extinto: "CARLE JOSE NAZARENO",
        nacimiento: "1944-08-12",
        defuncion: "2013-12-02",
        sector: "Sector Verde",
        latitud: -31.5674724,
        longitud: -63.5164697
    },
    {
        id: 2201,
        extinto: "EDITH DEL CARMEN LAMBERTI",
        nacimiento: "1949-07-18",
        defuncion: "2018-09-27",
        sector: "Sector Verde",
        latitud: -31.5674229,
        longitud: -63.5165136
    },
    {
        id: 2202,
        extinto: "TERRENO JOSEFA BENITA",
        nacimiento: "1925-01-05",
        defuncion: "1994-08-22",
        sector: "Sector Verde",
        latitud: -31.5674105,
        longitud: -63.5165226
    },
    {
        id: 2203,
        extinto: "VERSELLI SILVIO ALBINO",
        nacimiento: "1924-09-03",
        defuncion: "2002-07-15",
        sector: "Sector Verde",
        latitud: -31.5674105,
        longitud: -63.5165226
    },
    {
        id: 2204,
        extinto: "VERCELLI MARIA CATALINA",
        nacimiento: "1912-09-08",
        defuncion: "2003-07-25",
        sector: "Sector Verde",
        latitud: -31.5674105,
        longitud: -63.5165226
    },
    {
        id: 2205,
        extinto: "BERNARDO RAMON JOSE TOMATTIS",
        nacimiento: "1948-08-20",
        defuncion: "2021-10-31",
        sector: "Sector Verde",
        latitud: -31.5674039,
        longitud: -63.5165339
    },
    {
        id: 2206,
        extinto: "JOSE ANTONIO TOMATTIS",
        nacimiento: "1921-11-19",
        defuncion: "1971-01-14",
        sector: "Sector Verde",
        latitud: -31.5673973,
        longitud: -63.5165452
    },
    {
        id: 2207,
        extinto: "VICTORIA BARONE",
        nacimiento: "1914-11-19",
        defuncion: "2005-11-18",
        sector: "Sector Verde",
        latitud: -31.5673973,
        longitud: -63.5165452
    },
    {
        id: 2208,
        extinto: "CISTERNA ANGELA GRACIELA",
        nacimiento: "1939-07-30",
        defuncion: "2005-09-22",
        sector: "Sector Verde",
        latitud: -31.5673842,
        longitud: -63.5165679
    },
    {
        id: 2209,
        extinto: "JOSE FLORENCIO HERNANDEZ",
        nacimiento: "1935-01-01",
        defuncion: "2024-07-11",
        sector: "Sector Verde",
        latitud: -31.5673842,
        longitud: -63.5165679
    },
    {
        id: 2210,
        extinto: "IDELIO DOMICIANO LAZZARONE",
        nacimiento: "1958-02-24",
        defuncion: "2022-06-16",
        sector: "Sector Verde",
        latitud: -31.5674393,
        longitud: -63.5166117
    },
    {
        id: 2211,
        extinto: "JUAN AVELINO ROLLE",
        nacimiento: "1937-11-10",
        defuncion: "2010-12-24",
        sector: "Sector Verde",
        latitud: -31.5673776,
        longitud: -63.5165792
    },
    {
        id: 2212,
        extinto: "SILEONI ITALO VICTORIO",
        nacimiento: "1939-09-15",
        defuncion: "2016-08-23",
        sector: "Sector Verde",
        latitud: -31.5673710,
        longitud: -63.5165905
    },
    {
        id: 2213,
        extinto: "ANGEL HUMBERTO SILEONI",
        nacimiento: "1941-06-05",
        defuncion: "2022-03-12",
        sector: "Sector Verde",
        latitud: -31.5673644,
        longitud: -63.5166018
    },
    {
        id: 2214,
        extinto: "LEONID GOLUBENKO",
        nacimiento: "1918-09-27",
        defuncion: "1996-08-12",
        sector: "Sector Verde",
        latitud: -31.5672758,
        longitud: -63.5165766
    },
    {
        id: 2215,
        extinto: "NELIDA MARIA FERREYRA",
        nacimiento: "1924-10-24",
        defuncion: "1993-03-02",
        sector: "Sector Verde",
        latitud: -31.5672758,
        longitud: -63.5165766
    },
    {
        id: 2216,
        extinto: "FERREYRA HORACIO",
        nacimiento: "1927-06-28",
        defuncion: "2013-12-12",
        sector: "Sector Verde",
        latitud: -31.5672758,
        longitud: -63.5165766
    },
    {
        id: 2217,
        extinto: "LUIS VICENTE BASSI",
        nacimiento: "1900-08-03",
        defuncion: "1967-09-28",
        sector: "Sector Verde",
        latitud: -31.5672919,
        longitud: -63.5165919
    },
    {
        id: 2218,
        extinto: "IDA ZANELLA DE BASSI",
        nacimiento: "1900-02-21",
        defuncion: "1957-02-24",
        sector: "Sector Verde",
        latitud: -31.5672919,
        longitud: -63.5165919
    },
    {
        id: 2219,
        extinto: "PEREZ VICTORIA",
        nacimiento: "1914-08-02",
        defuncion: "2001-08-01",
        sector: "Sector Verde",
        latitud: -31.5673276,
        longitud: -63.5166258
    },
    {
        id: 2220,
        extinto: "GIGENA JORGE AUGUSTO",
        nacimiento: "1926-11-20",
        defuncion: "2011-11-22",
        sector: "Sector Verde",
        latitud: -31.5673276,
        longitud: -63.5166258
    },
    {
        id: 2221,
        extinto: "FRANCO MARCOS JAVIER",
        nacimiento: "1980-04-01",
        defuncion: "2018-07-20",
        sector: "Sector Verde",
        latitud: -31.5673276,
        longitud: -63.5166258
    },
    {
        id: 2222,
        extinto: "PERALTA JULIO OSCAR",
        nacimiento: "1945-10-12",
        defuncion: "2015-06-18",
        sector: "Sector Verde",
        latitud: -31.5673041,
        longitud: -63.5166211
    },
    {
        id: 2223,
        extinto: "MARIA TERESA BRANDAN",
        nacimiento: "1945-09-22",
        defuncion: "2023-08-28",
        sector: "Sector Verde",
        latitud: -31.5673041,
        longitud: -63.5166211
    },
    {
        id: 2224,
        extinto: "JUAN AGUSTIN PERALTA",
        nacimiento: "1940-08-04",
        defuncion: "2009-05-12",
        sector: "Sector Verde",
        latitud: -31.5673202,
        longitud: -63.5166364
    },
    {
        id: 2225,
        extinto: "GOMEZ PASCUAL ROBERTO",
        nacimiento: "1927-05-17",
        defuncion: "2003-01-17",
        sector: "Sector Verde",
        latitud: -31.5672967,
        longitud: -63.5166318
    },
    {
        id: 2226,
        extinto: "GOMEZ RAMON LEONCIO",
        nacimiento: "1931-09-12",
        defuncion: "2004-02-12",
        sector: "Sector Verde",
        latitud: -31.5672967,
        longitud: -63.5166318
    },
    {
        id: 2227,
        extinto: "ANGEL AMANCIO JUAREZ",
        nacimiento: "1932-08-24",
        defuncion: "2018-03-21",
        sector: "Sector Verde",
        latitud: -31.5673128,
        longitud: -63.5166471
    },
    {
        id: 2228,
        extinto: "GUARDATTI AMELIA CLEMENTINA",
        nacimiento: "1932-06-28",
        defuncion: "2016-03-01",
        sector: "Sector Verde",
        latitud: -31.5672536,
        longitud: -63.5166085
    },
    {
        id: 2229,
        extinto: "JUAREZ JOSE DOMINGO",
        nacimiento: "1948-12-03",
        defuncion: "2011-03-30",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2230,
        extinto: "JUAREZ JUAN FRANCISCO",
        nacimiento: "1930-05-05",
        defuncion: "1987-04-26",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2231,
        extinto: "JUAREZ AMANCIO",
        nacimiento: "1910-10-10",
        defuncion: "1962-09-12",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2232,
        extinto: "FILOMENA PEREZ DE JUAREZ",
        nacimiento: "1900-10-10",
        defuncion: "1949-11-17",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2233,
        extinto: "JUAREZ EDMUNDO DANTE",
        nacimiento: "1900-10-01",
        defuncion: "1969-07-02",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2234,
        extinto: "JUAREZ RUFINO",
        nacimiento: "1900-01-01",
        defuncion: "1954-10-05",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2235,
        extinto: "GOMEZ TELEFORA",
        nacimiento: "1900-01-01",
        defuncion: "1941-05-07",
        sector: "Sector Verde",
        latitud: -31.5673054,
        longitud: -63.5166577
    },
    {
        id: 2236,
        extinto: "GIGENA HELVECIA",
        nacimiento: "1919-08-05",
        defuncion: "2011-05-21",
        sector: "Sector Verde",
        latitud: -31.5672462,
        longitud: -63.5166191
    },
    {
        id: 2237,
        extinto: "DUBINI LUIS ALFREDO",
        nacimiento: "1923-10-23",
        defuncion: "2016-01-17",
        sector: "Sector Verde",
        latitud: -31.5672462,
        longitud: -63.5166191
    },
    {
        id: 2238,
        extinto: "WOLOWICZ",
        nacimiento: "1912-09-24",
        defuncion: "1995-03-03",
        sector: "Sector Verde",
        latitud: -31.5672819,
        longitud: -63.5166530
    },
    {
        id: 2239,
        extinto: "ALBANO DOMINGA",
        nacimiento: "1921-12-18",
        defuncion: "2009-06-06",
        sector: "Sector Verde",
        latitud: -31.5672819,
        longitud: -63.5166530
    },
    {
        id: 2240,
        extinto: "WOLOWICZ DOMINGA GREGORIA",
        nacimiento: "1944-03-04",
        defuncion: "1970-07-26",
        sector: "Sector Verde",
        latitud: -31.5672819,
        longitud: -63.5166530
    },
    {
        id: 2241,
        extinto: "JUAREZ JUAN CARLOS",
        nacimiento: "1981-07-23",
        defuncion: "2003-09-16",
        sector: "Sector Verde",
        latitud: -31.5672980,
        longitud: -63.5166683
    },
    {
        id: 2242,
        extinto: "CALOS ALBERTO JUAREZ",
        nacimiento: "1945-05-15",
        defuncion: "2021-02-28",
        sector: "Sector Verde",
        latitud: -31.5672980,
        longitud: -63.5166683
    },
    {
        id: 2243,
        extinto: "CANAVESIO GLORIA MAFALDA",
        nacimiento: "1946-06-10",
        defuncion: "2016-12-25",
        sector: "Sector Verde",
        latitud: -31.5672388,
        longitud: -63.5166297
    },
    {
        id: 2244,
        extinto: "OLGA ESTELA TISSERA",
        nacimiento: "1935-10-20",
        defuncion: "2019-10-09",
        sector: "Sector Verde",
        latitud: -31.5672549,
        longitud: -63.5166450
    },
    {
        id: 2245,
        extinto: "ALFREDO RODOLFO BUGNONE",
        nacimiento: "1927-12-02",
        defuncion: "2019-11-08",
        sector: "Sector Verde",
        latitud: -31.5672549,
        longitud: -63.5166450
    },
    {
        id: 2246,
        extinto: "SARGIOTTO ANDRES ALBERTO",
        nacimiento: "1928-07-23",
        defuncion: "2005-07-15",
        sector: "Sector Verde",
        latitud: -31.5672314,
        longitud: -63.5166403
    },
    {
        id: 2247,
        extinto: "ELISA ISABEL VALIENTE",
        nacimiento: "1933-01-09",
        defuncion: "2021-02-12",
        sector: "Sector Verde",
        latitud: -31.5672314,
        longitud: -63.5166403
    },
    {
        id: 2248,
        extinto: "LEIVA MARGARITA",
        nacimiento: "1932-11-03",
        defuncion: "2012-12-08",
        sector: "Sector Verde",
        latitud: -31.5672671,
        longitud: -63.5166742
    },
    {
        id: 2249,
        extinto: "BERTETTO JOSE ANTONIO",
        nacimiento: "1931-11-27",
        defuncion: "1981-05-15",
        sector: "Sector Verde",
        latitud: -31.5672671,
        longitud: -63.5166742
    },
    {
        id: 2250,
        extinto: "BECCACECE CAROLINA ANA",
        nacimiento: "1940-12-28",
        defuncion: "2000-07-20",
        sector: "Sector Verde",
        latitud: -31.5672832,
        longitud: -63.5166895
    },
    {
        id: 2251,
        extinto: "PAVON JOSE",
        nacimiento: "1940-05-03",
        defuncion: "2006-12-14",
        sector: "Sector Verde",
        latitud: -31.5672832,
        longitud: -63.5166895
    },
    {
        id: 2252,
        extinto: "GARINO JOSE DOMINGO",
        nacimiento: "1903-10-10",
        defuncion: "1979-06-16",
        sector: "Sector Verde",
        latitud: -31.5672401,
        longitud: -63.5166662
    },
    {
        id: 2253,
        extinto: "DONZINO ABA EMANUEL MARTIN",
        nacimiento: "1981-01-13",
        defuncion: "1981-01-13",
        sector: "Sector Verde",
        latitud: -31.5672401,
        longitud: -63.5166662
    },
    {
        id: 2254,
        extinto: "TORAZZA ANGELA",
        nacimiento: "1909-10-10",
        defuncion: "1976-02-15",
        sector: "Sector Verde",
        latitud: -31.5672401,
        longitud: -63.5166662
    },
    {
        id: 2255,
        extinto: "DONZINO ROLANDO MARTIN",
        nacimiento: "1924-10-10",
        defuncion: "1981-01-13",
        sector: "Sector Verde",
        latitud: -31.5672401,
        longitud: -63.5166662
    },
    {
        id: 2256,
        extinto: "WOLOWICZ LUIS ROSA",
        nacimiento: "1942-08-30",
        defuncion: "2016-11-28",
        sector: "Sector Verde",
        latitud: -31.5672758,
        longitud: -63.5167002
    },
    {
        id: 2257,
        extinto: "MARIA FRANCISCA DESTEFANIS",
        nacimiento: "1942-02-09",
        defuncion: "1970-06-20",
        sector: "Sector Verde",
        latitud: -31.5672758,
        longitud: -63.5167002
    },
    {
        id: 2258,
        extinto: "PRATTO VILMA CATALINA",
        nacimiento: "1940-07-14",
        defuncion: "2011-03-19",
        sector: "Sector Verde",
        latitud: -31.5672166,
        longitud: -63.5166616
    },
    {
        id: 2259,
        extinto: "BIONDINI VICTOR HUGO",
        nacimiento: "1978-07-19",
        defuncion: "1978-08-01",
        sector: "Sector Verde",
        latitud: -31.5672166,
        longitud: -63.5166616
    },
    {
        id: 2260,
        extinto: "BIONDINI TOMAS LUIS",
        nacimiento: "1928-08-06",
        defuncion: "1998-11-30",
        sector: "Sector Verde",
        latitud: -31.5672166,
        longitud: -63.5166616
    },
    {
        id: 2261,
        extinto: "PALACIOS MARIA ANA",
        nacimiento: "1959-08-23",
        defuncion: "2016-01-26",
        sector: "Sector Verde",
        latitud: -31.5672327,
        longitud: -63.5166769
    },
    {
        id: 2262,
        extinto: "MAGDALENA BROCELLI",
        nacimiento: "1921-08-24",
        defuncion: "2014-03-31",
        sector: "Sector Verde",
        latitud: -31.5672523,
        longitud: -63.5166955
    },
    {
        id: 2263,
        extinto: "RICARDO LUIS CEAGLIO",
        nacimiento: "1923-01-14",
        defuncion: "2008-04-24",
        sector: "Sector Verde",
        latitud: -31.5672523,
        longitud: -63.5166955
    },
    {
        id: 2264,
        extinto: "MAGDALENA BARAS DE BRUCELLI",
        nacimiento: "1900-03-10",
        defuncion: "1963-09-09",
        sector: "Sector Verde",
        latitud: -31.5672523,
        longitud: -63.5166955
    },
    {
        id: 2265,
        extinto: "SPIRITU BRUCELLI",
        nacimiento: "1900-03-16",
        defuncion: "1965-08-24",
        sector: "Sector Verde",
        latitud: -31.5672523,
        longitud: -63.5166955
    },
    {
        id: 2266,
        extinto: "LOFFLER GERMAN ADOLFO",
        nacimiento: "1929-03-14",
        defuncion: "2009-04-24",
        sector: "Sector Verde",
        latitud: -31.5672092,
        longitud: -63.5166722
    },
    {
        id: 2267,
        extinto: "ALBA ROSA PALACIOS",
        nacimiento: "1929-05-28",
        defuncion: "2014-01-04",
        sector: "Sector Verde",
        latitud: -31.5672092,
        longitud: -63.5166722
    },
    {
        id: 2268,
        extinto: "CEAGLIO ITALO GASPAR",
        nacimiento: "1949-04-19",
        defuncion: "2017-03-22",
        sector: "Sector Verde",
        latitud: -31.5672253,
        longitud: -63.5166875
    },
    {
        id: 2269,
        extinto: "FONSECA ESTER",
        nacimiento: "1958-01-04",
        defuncion: "2014-07-02",
        sector: "Sector Verde",
        latitud: -31.5672449,
        longitud: -63.5167061
    },
    {
        id: 2270,
        extinto: "FRANCISCO JOSE CARNIEL",
        nacimiento: "1948-06-03",
        defuncion: "2018-06-21",
        sector: "Sector Verde",
        latitud: -31.5672449,
        longitud: -63.5167061
    },
    {
        id: 2271,
        extinto: "JOSE ROBERTO SANCHEZ",
        nacimiento: "1943-03-16",
        defuncion: "2020-10-21",
        sector: "Sector Verde",
        latitud: -31.5673266,
        longitud: -63.5166730
    },
    {
        id: 2272,
        extinto: "JOSE EDUARDO RAMON SILVA",
        nacimiento: "1944-08-31",
        defuncion: "2022-05-02",
        sector: "Sector Verde",
        latitud: -31.5673364,
        longitud: -63.5166804
    },
    {
        id: 2273,
        extinto: "GONZALEZ ADRIAN HORACIO",
        nacimiento: "1975-06-10",
        defuncion: "2016-09-16",
        sector: "Sector Verde",
        latitud: -31.5673647,
        longitud: -63.5167304
    },
    {
        id: 2274,
        extinto: "GONZALEZ JUAN CARLOS",
        nacimiento: "1939-09-10",
        defuncion: "2009-01-07",
        sector: "Sector Verde",
        latitud: -31.5673647,
        longitud: -63.5167304
    },
    {
        id: 2275,
        extinto: "OVIEDO OSVALDO OMAR",
        nacimiento: "1949-01-01",
        defuncion: "2015-03-24",
        sector: "Sector Verde",
        latitud: -31.5673412,
        longitud: -63.5167478
    },
    {
        id: 2276,
        extinto: "RAMONA  GLADIS  TOLEDO",
        nacimiento: "1957-08-10",
        defuncion: "2024-04-16",
        sector: "Sector Verde",
        latitud: -31.5673412,
        longitud: -63.5167478
    },
    {
        id: 2277,
        extinto: "ARGUELLO JUAN",
        nacimiento: "2014-10-30",
        defuncion: "2014-10-30",
        sector: "Sector Verde",
        latitud: -31.5672905,
        longitud: -63.5167386
    },
    {
        id: 2278,
        extinto: "ARGUELLORICARDO",
        nacimiento: "2014-10-30",
        defuncion: "2014-10-30",
        sector: "Sector Verde",
        latitud: -31.5672905,
        longitud: -63.5167386
    },
    {
        id: 2279,
        extinto: "HIRMA ROSA MORALES",
        nacimiento: "1927-09-01",
        defuncion: "2015-10-12",
        sector: "Sector Verde",
        latitud: -31.5672905,
        longitud: -63.5167386
    },
    {
        id: 2280,
        extinto: "SUSANA BEATRIZ GOMEZ",
        nacimiento: "1961-04-07",
        defuncion: "2020-09-22",
        sector: "Sector Verde",
        latitud: -31.5673004,
        longitud: -63.5167460
    },
    {
        id: 2281,
        extinto: "VICTOR HUGO TABORDA",
        nacimiento: "1954-03-03",
        defuncion: "2021-11-04",
        sector: "Sector Verde",
        latitud: -31.5673201,
        longitud: -63.5167608
    },
    {
        id: 2282,
        extinto: "RAUL ANTONIO OTERO",
        nacimiento: "1969-08-25",
        defuncion: "2021-10-07",
        sector: "Sector Verde",
        latitud: -31.5673300,
        longitud: -63.5167682
    },
    {
        id: 2283,
        extinto: "DONDO ELSA LUCIA",
        nacimiento: "1954-08-18",
        defuncion: "2013-10-26",
        sector: "Sector Verde",
        latitud: -31.5674327,
        longitud: -63.5168378
    },
    {
        id: 2284,
        extinto: "RODRIGUEZ ESCAGLIOTTI RUBEN",
        nacimiento: "1950-07-19",
        defuncion: "1996-02-22",
        sector: "Sector Verde",
        latitud: -31.5675646,
        longitud: -63.5166316
    },
    {
        id: 2285,
        extinto: "TRUCCO ESTEBAN CARLOS",
        nacimiento: "1927-02-16",
        defuncion: "2012-07-14",
        sector: "Sector Verde",
        latitud: -31.5675840,
        longitud: -63.5166403
    },
    {
        id: 2286,
        extinto: "EDA VICTORINA CHIAMBRETTO",
        nacimiento: "1931-02-27",
        defuncion: "2021-04-02",
        sector: "Sector Verde",
        latitud: -31.5675840,
        longitud: -63.5166403
    },
    {
        id: 2287,
        extinto: "RODRIGUEZ VARELA ISIDORO",
        nacimiento: "1918-05-15",
        defuncion: "1978-06-29",
        sector: "Sector Verde",
        latitud: -31.5675604,
        longitud: -63.5166444
    },
    {
        id: 2288,
        extinto: "RITA DEL VALLE RODRIGUEZ",
        nacimiento: "1945-10-20",
        defuncion: "1980-05-23",
        sector: "Sector Verde",
        latitud: -31.5675604,
        longitud: -63.5166444
    },
    {
        id: 2289,
        extinto: "IVILMA MARGARITA SCAGLIOTTI",
        nacimiento: "1921-08-08",
        defuncion: "2015-01-27",
        sector: "Sector Verde",
        latitud: -31.5675604,
        longitud: -63.5166444
    },
    {
        id: 2290,
        extinto: "ALBERTO ENRIQUE RODRIGUEZ SCAGLIOTTI",
        nacimiento: "1948-06-23",
        defuncion: "2022-06-17",
        sector: "Sector Verde",
        latitud: -31.5675562,
        longitud: -63.5166571
    },
    {
        id: 2291,
        extinto: "CONTRERAS CIPRIANO",
        nacimiento: "1934-02-10",
        defuncion: "1960-01-01",
        sector: "Sector Amarillo",
        latitud: -31.5679036,
        longitud: -63.5157750
    },
    {
        id: 2292,
        extinto: "TEJEDA LEOPOLDA",
        nacimiento: "1913-08-16",
        defuncion: "2013-07-03",
        sector: "Sector Amarillo",
        latitud: -31.5679036,
        longitud: -63.5157750
    },
    {
        id: 2293,
        extinto: "NICOLAS ANTONIO CONTRERAS",
        nacimiento: "1939-06-19",
        defuncion: "2022-06-12",
        sector: "Sector Amarillo",
        latitud: -31.5679036,
        longitud: -63.5157750
    },
    {
        id: 2294,
        extinto: "NORMA BEATRIZ CONTRERAS",
        nacimiento: "1947-01-16",
        defuncion: "2019-12-21",
        sector: "Sector Amarillo",
        latitud: -31.5679036,
        longitud: -63.5157750
    },
    {
        id: 2295,
        extinto: "JOSE LUIS FORMENTELLI",
        nacimiento: "1958-01-02",
        defuncion: "2021-07-15",
        sector: "Sector Naranja",
        latitud: -31.5672111,
        longitud: -63.5153144
    },
    {
        id: 2296,
        extinto: "ESPERON NELIDA ESTHER",
        nacimiento: "1923-05-10",
        defuncion: "2007-05-09",
        sector: "Sector Naranja",
        latitud: -31.5672223,
        longitud: -63.5153184
    },
    {
        id: 2297,
        extinto: "LUIS ERNESTO ARROÑADES",
        nacimiento: "1956-01-17",
        defuncion: "2010-09-07",
        sector: "Sector Naranja",
        latitud: -31.5672223,
        longitud: -63.5153184
    },
    {
        id: 2298,
        extinto: "ROLANDO ESTER SALVADORA",
        nacimiento: "1926-06-12",
        defuncion: "2016-01-08",
        sector: "Sector Naranja",
        latitud: -31.5672457,
        longitud: -63.5153843
    },
    {
        id: 2299,
        extinto: "EMILIO JOSE PAVIATTO",
        nacimiento: "1935-06-04",
        defuncion: "2001-07-20",
        sector: "Sector Naranja",
        latitud: -31.5672570,
        longitud: -63.5153883
    },
    {
        id: 2300,
        extinto: "CUELLO OSCAR JUSTINIANO",
        nacimiento: "1922-09-26",
        defuncion: "2005-10-24",
        sector: "Sector Rosa",
        latitud: -31.5674057,
        longitud: -63.5154863
    },
    {
        id: 2301,
        extinto: "GUEVEL DORA CECILIA",
        nacimiento: "1928-08-04",
        defuncion: "2012-02-15",
        sector: "Sector Rosa",
        latitud: -31.5674057,
        longitud: -63.5154863
    },
    {
        id: 2302,
        extinto: "RAUL ALBERTO MAZZA",
        nacimiento: "1951-04-22",
        defuncion: "2023-09-29",
        sector: "Sector Rosa",
        latitud: -31.5674057,
        longitud: -63.5154863
    },
    {
        id: 2303,
        extinto: "NICHO ROCIO ORIANA",
        nacimiento: "2001-03-31",
        defuncion: "2001-03-31",
        sector: "Sector Rosa",
        latitud: -31.5673140,
        longitud: -63.5154573
    },
    {
        id: 2304,
        extinto: "JOSEFA PERALTA DE MARTINEZ",
        nacimiento: "1950-10-10",
        defuncion: "1980-05-06",
        sector: "Sector Rosa",
        latitud: -31.5673591,
        longitud: -63.5154780
    },
    {
        id: 2305,
        extinto: "MARIA MARTINEZ DE MEDRANO",
        nacimiento: "1950-10-10",
        defuncion: "1992-05-11",
        sector: "Sector Rosa",
        latitud: -31.5673591,
        longitud: -63.5154780
    },
    {
        id: 2306,
        extinto: "EUGENIO MARTINEZ",
        nacimiento: "1950-10-10",
        defuncion: "1952-05-02",
        sector: "Sector Rosa",
        latitud: -31.5673591,
        longitud: -63.5154780
    },
    {
        id: 2307,
        extinto: "RAFAEL MEDRANO",
        nacimiento: "1950-10-10",
        defuncion: "2008-02-10",
        sector: "Sector Rosa",
        latitud: -31.5673783,
        longitud: -63.5154870
    },
    {
        id: 2308,
        extinto: "ALVAREZ FERNANDO",
        nacimiento: "1920-06-24",
        defuncion: "2003-08-05",
        sector: "Sector Rosa",
        latitud: -31.5674011,
        longitud: -63.5154989
    },
    {
        id: 2309,
        extinto: "CECILIA DEL MILAGRO ALVAREZ GHIBAUDO",
        nacimiento: "1954-04-16",
        defuncion: "2021-05-11",
        sector: "Sector Rosa",
        latitud: -31.5674011,
        longitud: -63.5154989
    },
    {
        id: 2310,
        extinto: "JUAN CARLOS LUQUE",
        nacimiento: "1970-10-10",
        defuncion: "2002-10-14",
        sector: "Sector Amarillo",
        latitud: -31.5676291,
        longitud: -63.5161180
    },
    {
        id: 2311,
        extinto: "LUQUE GRACIELA TERESITA",
        nacimiento: "1956-06-02",
        defuncion: "2005-02-27",
        sector: "Sector Amarillo",
        latitud: -31.5676291,
        longitud: -63.5161180
    },
    {
        id: 2312,
        extinto: "AUDISIO EUGENIO",
        nacimiento: "1900-01-24",
        defuncion: "1961-12-19",
        sector: "Sector Amarillo",
        latitud: -31.5676370,
        longitud: -63.5157667
    },
    {
        id: 2313,
        extinto: "ESTROGUSZ MIGUEL DOMINGO",
        nacimiento: "1948-06-13",
        defuncion: "1981-03-26",
        sector: "Sector Amarillo",
        latitud: -31.5676370,
        longitud: -63.5157667
    },
    {
        id: 2314,
        extinto: "ESTROGUSZ MIGUEL ANGEL",
        nacimiento: "1981-01-03",
        defuncion: "1996-05-02",
        sector: "Sector Amarillo",
        latitud: -31.5676370,
        longitud: -63.5157667
    },
    {
        id: 2315,
        extinto: "PERALTA LILIA",
        nacimiento: "1935-04-23",
        defuncion: "2002-11-15",
        sector: "Sector Amarillo",
        latitud: -31.5678686,
        longitud: -63.5159178
    },
    {
        id: 2316,
        extinto: "ANGEL NARCISO JUAREZ",
        nacimiento: "1932-10-29",
        defuncion: "2014-02-15",
        sector: "Sector Amarillo",
        latitud: -31.5678686,
        longitud: -63.5159178
    },
    {
        id: 2317,
        extinto: "MARIA  DEL VALLE  PERALTA",
        nacimiento: "1944-08-26",
        defuncion: "2024-07-23",
        sector: "Sector Rojo",
        latitud: -31.5665843,
        longitud: -63.5158707
    },
    {
        id: 2318,
        extinto: "ANGELICA  ANTONIA  LENCINA",
        nacimiento: "1936-10-08",
        defuncion: "2024-07-18",
        sector: "Sector Rojo",
        latitud: -31.5665245,
        longitud: -63.5159225
    },
    {
        id: 2319,
        extinto: "SILVIA  NOEMI  RODRIGUEZ",
        nacimiento: "1963-05-11",
        defuncion: "2024-07-19",
        sector: "Sector Naranja",
        latitud: -31.5671896,
        longitud: -63.5153645
    },
    {
        id: 2320,
        extinto: "HECTOR  HUGO  ROSSO",
        nacimiento: "1947-10-14",
        defuncion: "2024-07-18",
        sector: "Sector Rosa",
        latitud: -31.5674751,
        longitud: -63.5154435
    },
    {
        id: 2321,
        extinto: "MARIA  CECILIA  AUDISIO",
        nacimiento: "1972-11-03",
        defuncion: "2024-07-19",
        sector: "Sector Verde",
        latitud: -31.5675070,
        longitud: -63.5162645
    },
    {
        id: 2322,
        extinto: "OTILIA  CARMEN  PALOPITO",
        nacimiento: "1938-10-01",
        defuncion: "2024-07-21",
        sector: "Sector Verde",
        latitud: -31.5675735,
        longitud: -63.5162728
    },
    {
        id: 2323,
        extinto: "JORGE  ANIBAL  ISAIA",
        nacimiento: "1957-05-07",
        defuncion: "2024-08-22",
        sector: "Sector Azul",
        latitud: -31.5668638,
        longitud: -63.5161060
    },
    {
        id: 2324,
        extinto: "RAMON BELARMINO ROLLE",
        nacimiento: "1947-09-30",
        defuncion: "2024-08-25",
        sector: "Sector Azul",
        latitud: -31.5669126,
        longitud: -63.5161509
    },
    {
        id: 2325,
        extinto: "ROSA  RAMONA  OGGIONE",
        nacimiento: "1952-08-29",
        defuncion: "2024-08-19",
        sector: "Sector Rojo",
        latitud: -31.5667942,
        longitud: -63.5158531
    },
    {
        id: 2326,
        extinto: "MIGUEL  OLEGARIO  LUCERO",
        nacimiento: "1946-01-03",
        defuncion: "2024-08-06",
        sector: "Sector Rojo",
        latitud: -31.5665708,
        longitud: -63.5157244
    },
    {
        id: 2327,
        extinto: "DIEGO  LUIS  FERREYRA",
        nacimiento: "1952-10-15",
        defuncion: "2024-08-18",
        sector: "Sector Rojo",
        latitud: -31.5668105,
        longitud: -63.5155750
    },
    {
        id: 2328,
        extinto: "MARIA  JULIETA  CROSS",
        nacimiento: "1973-09-21",
        defuncion: "2024-09-01",
        sector: "Sector Naranja",
        latitud: -31.5670762,
        longitud: -63.5149568
    },
    {
        id: 2329,
        extinto: "BERNARDO MANSILLA",
        nacimiento: "1946-09-19",
        defuncion: "2024-08-26",
        sector: "Sector Naranja",
        latitud: -31.5669600,
        longitud: -63.5152580
    },
    {
        id: 2330,
        extinto: "BENJAMIN  VACA  BONALDI",
        nacimiento: "2007-07-10",
        defuncion: "2024-08-04",
        sector: "Sector Rosa",
        latitud: -31.5675468,
        longitud: -63.5154675
    },
    {
        id: 2331,
        extinto: "RICARDO  CARMEN CARNIEL",
        nacimiento: "1939-10-28",
        defuncion: "2024-08-18",
        sector: "Sector Verde",
        latitud: -31.5677067,
        longitud: -63.5164396
    },
    {
        id: 2332,
        extinto: "TERESA  AMANDA  BONALDI",
        nacimiento: "1944-11-11",
        defuncion: "2024-07-27",
        sector: "Sector Verde",
        latitud: -31.5674135,
        longitud: -63.5162766
    },
    {
        id: 2333,
        extinto: "AMELIA  SUMILDA  MANTESE",
        nacimiento: "1935-07-17",
        defuncion: "2024-09-01",
        sector: "Sector Verde",
        latitud: -31.5674582,
        longitud: -63.5162053
    },
    {
        id: 2334,
        extinto: "ALFREDO  ALBERICI",
        nacimiento: "1938-01-12",
        defuncion: "2024-09-01",
        sector: "Sector Rosa",
        latitud: -31.5677093,
        longitud: -63.5154968
    },
    {
        id: 2335,
        extinto: "GUSTAVO RAMON   BENET",
        nacimiento: "1980-07-29",
        defuncion: "2024-09-01",
        sector: "Sector Amarillo",
        latitud: -31.5677500,
        longitud: -63.5159980
    },
    {
        id: 2336,
        extinto: "BERTA  NOEMI  GIGENA",
        nacimiento: "1956-12-02",
        defuncion: "2024-08-16",
        sector: "Sector Verde",
        latitud: -31.5673115,
        longitud: -63.5166105
    },
    {
        id: 2337,
        extinto: "ESTHER  ROSA  RAMONA  CAVALLERA",
        nacimiento: "1935-12-21",
        defuncion: "2024-08-24",
        sector: "Sector Verde",
        latitud: -31.5676259,
        longitud: -63.5163035
    },
    {
        id: 2338,
        extinto: "ROBERTO  FEDERICO  PATRIA",
        nacimiento: "1930-12-25",
        defuncion: "2000-09-17",
        sector: "Sector Verde",
        latitud: -31.5676259,
        longitud: -63.5163035
    },
    {
        id: 2339,
        extinto: "ANA  MARIA  PATRIA",
        nacimiento: "1962-08-08",
        defuncion: "1975-07-07",
        sector: "Sector Verde",
        latitud: -31.5676259,
        longitud: -63.5163035
    },
    {
        id: 2340,
        extinto: "ROQUE ANGEL PEREYRA",
        nacimiento: "1956-05-12",
        defuncion: "2024-09-12",
        sector: "Sector Verde",
        latitud: -31.5671646,
        longitud: -63.5164681
    },
    {
        id: 2341,
        extinto: "ANA  DOMINGA  SCARAFFIA",
        nacimiento: "1939-08-30",
        defuncion: "2024-09-19",
        sector: "Sector Azul",
        latitud: -31.5669012,
        longitud: -63.5163944
    },
    {
        id: 2342,
        extinto: "DIEGO  ANTONIO  SANCHEZ",
        nacimiento: "1933-06-25",
        defuncion: "2024-09-10",
        sector: "Sector Azul",
        latitud: -31.5669853,
        longitud: -63.5166715
    },
    {
        id: 2343,
        extinto: "IRIS ROMILDA  BOTTA",
        nacimiento: "1950-05-03",
        defuncion: "2024-10-06",
        sector: "Sector Azul",
        latitud: -31.5664538,
        longitud: -63.5163314
    },
    {
        id: 2344,
        extinto: "ANTONIO  RICARDO  ALGARBE",
        nacimiento: "1953-01-23",
        defuncion: "2024-09-16",
        sector: "Sector Azul",
        latitud: -31.5663938,
        longitud: -63.5162076
    },
    {
        id: 2345,
        extinto: "RUBÉN  GERARDO  CACIORGNA",
        nacimiento: "1941-02-10",
        defuncion: "2024-10-10",
        sector: "Sector Naranja",
        latitud: -31.5669343,
        longitud: -63.5149672
    },
    {
        id: 2346,
        extinto: "PEDRO  ANIBAL  LOIS",
        nacimiento: "1937-07-10",
        defuncion: "2024-09-07",
        sector: "Sector Naranja",
        latitud: -31.5673303,
        longitud: -63.5150323
    },
    {
        id: 2347,
        extinto: "MARIA  JULIA  MAIDANA",
        nacimiento: "1933-08-15",
        defuncion: "2024-09-26",
        sector: "Sector Naranja",
        latitud: -31.5671102,
        longitud: -63.5152783
    },
    {
        id: 2348,
        extinto: "N.N  PIRCHI",
        nacimiento: "1983-09-17",
        defuncion: "1983-09-17",
        sector: "Sector Rosa",
        latitud: -31.5673349,
        longitud: -63.5153933
    },
    {
        id: 2349,
        extinto: "ROGER  EUFRACIO  LUQUE",
        nacimiento: "1934-10-27",
        defuncion: "2024-09-09",
        sector: "Sector Verde",
        latitud: -31.5676798,
        longitud: -63.5164131
    },
    {
        id: 2350,
        extinto: "ELENA  VELIA  ANA  CAVALLERA",
        nacimiento: "1931-07-19",
        defuncion: "1995-04-01",
        sector: "Sector Verde",
        latitud: -31.5676798,
        longitud: -63.5164131
    },
    {
        id: 2351,
        extinto: "ELSA  ENRIQUETA  CAVALIERI",
        nacimiento: "1935-12-09",
        defuncion: "2024-09-08",
        sector: "Sector Verde",
        latitud: -31.5674999,
        longitud: -63.5163193
    },
    {
        id: 2352,
        extinto: "HAYDEE  LUISA  RAMONA  MOSSELLO",
        nacimiento: "1938-09-25",
        defuncion: "2024-09-17",
        sector: "Sector Amarillo",
        latitud: -31.5677198,
        longitud: -63.5161801
    },
    {
        id: 2353,
        extinto: "JUAN CARLOS  RE",
        nacimiento: "1953-02-09",
        defuncion: "2024-09-16",
        sector: "Sector Verde",
        latitud: -31.5673398,
        longitud: -63.5167756
    },
    {
        id: 2354,
        extinto: "EDUARDO  MAXIMILIANO  PRESSON",
        nacimiento: "1986-08-05",
        defuncion: "2024-10-11",
        sector: "Sector Rosa",
        latitud: -31.5674985,
        longitud: -63.5155173
    },
    {
        id: 2355,
        extinto: "OSCAR  RAMON  TORAZZA",
        nacimiento: "1950-08-08",
        defuncion: "2024-10-12",
        sector: "Sector Rojo",
        latitud: -31.5668054,
        longitud: -63.5158777
    },
    {
        id: 2356,
        extinto: "MARTA  GRACIELA  FLORES",
        nacimiento: "1944-12-09",
        defuncion: "2024-10-12",
        sector: "Sector Azul",
        latitud: -31.5669123,
        longitud: -63.5163988
    },
    {
        id: 2357,
        extinto: "ALDO  RAMON  JUAREZ",
        nacimiento: "1952-12-25",
        defuncion: "2024-10-09",
        sector: "Sector Rosa",
        latitud: -31.5674377,
        longitud: -63.5153980
    },
    {
        id: 2358,
        extinto: "SHEILA  CARNIEL",
        nacimiento: "2003-01-10",
        defuncion: "2024-10-14",
        sector: "Sector Amarillo",
        latitud: -31.5678908,
        longitud: -63.5161779
    },
    {
        id: 2359,
        extinto: "HERNAN  FACUNDO  BAIGORRIA",
        nacimiento: "1996-01-20",
        defuncion: "2024-10-18",
        sector: "Sector Amarillo",
        latitud: -31.5677850,
        longitud: -63.5157875
    },
    {
        id: 2360,
        extinto: "ANTONIO ALFONSO DONALISIO",
        nacimiento: "1958-06-13",
        defuncion: "2024-10-06",
        sector: "Sector Naranja",
        latitud: -31.5671297,
        longitud: -63.5152038
    },
    {
        id: 2361,
        extinto: "HUGO  MOISES  GOMEZ",
        nacimiento: "1947-08-10",
        defuncion: "2024-10-27",
        sector: "Sector Amarillo",
        latitud: -31.5675048,
        longitud: -63.5160410
    },
    {
        id: 2362,
        extinto: "NELLIDA  JOSEFA  GARINO",
        nacimiento: "1929-06-11",
        defuncion: "2024-10-26",
        sector: "Sector Verde",
        latitud: -31.5672401,
        longitud: -63.5166662
    },
    {
        id: 2363,
        extinto: "NESTOR  JUAN   PERASSI",
        nacimiento: "1931-09-10",
        defuncion: "2024-11-03",
        sector: "Sector Amarillo",
        latitud: -31.5675980,
        longitud: -63.5160987
    },
    {
        id: 2364,
        extinto: "ROSARIO  GOMEZ",
        nacimiento: "1906-06-24",
        defuncion: "1984-02-12",
        sector: "Sector Verde",
        latitud: -31.5674234,
        longitud: -63.5162495
    },
    {
        id: 2365,
        extinto: "MIRTA  ARGENTINA  CEBALLOS",
        nacimiento: "1951-06-20",
        defuncion: "2024-11-14",
        sector: "Sector Naranja",
        latitud: -31.5669190,
        longitud: -63.5149312
    },
    {
        id: 2366,
        extinto: "MIGUEL  ALCIRES TABORDA",
        nacimiento: "1951-02-18",
        defuncion: "2024-11-17",
        sector: "Sector Naranja",
        latitud: -31.5668264,
        longitud: -63.5152670
    },
    {
        id: 2367,
        extinto: "SARA  NIEVE  TEJEDA",
        nacimiento: "1932-09-11",
        defuncion: "2024-11-17",
        sector: "Sector Verde",
        latitud: -31.5674999,
        longitud: -63.5161108
    },
    {
        id: 2368,
        extinto: "ALBA  ROSA  LUDUEÑA",
        nacimiento: "1940-07-16",
        defuncion: "2024-12-01",
        sector: "Sector Rosa",
        latitud: -31.5675111,
        longitud: -63.5152968
    },
    {
        id: 2369,
        extinto: "JOSEFINA  DEL  ROSARIO  FERNANDEZ",
        nacimiento: "1952-10-05",
        defuncion: "2024-12-03",
        sector: "Sector Rosa",
        latitud: -31.5675178,
        longitud: -63.5155424
    },
    {
        id: 2370,
        extinto: "BLANCA  LUCIA RAMIREZ",
        nacimiento: "1957-05-27",
        defuncion: "2024-11-30",
        sector: "Sector Verde",
        latitud: -31.5674989,
        longitud: -63.5162020
    },
    {
        id: 2371,
        extinto: "MARCELA  ALEJANDRA  LAZARTE",
        nacimiento: "1966-09-21",
        defuncion: "2024-12-12",
        sector: "Sector Rosa",
        latitud: -31.5674613,
        longitud: -63.5154208
    },
    {
        id: 2372,
        extinto: "ROSA  BEATRIZ  GONZALEZ",
        nacimiento: "1952-03-14",
        defuncion: "2024-12-22",
        sector: "Sector Rosa",
        latitud: -31.5675493,
        longitud: -63.5153334
    },
    {
        id: 2373,
        extinto: "MONICA DEL LUJAN  NAVARRO",
        nacimiento: "1969-02-12",
        defuncion: "2024-12-26",
        sector: "Sector Amarillo",
        latitud: -31.5675870,
        longitud: -63.5160645
    },
    {
        id: 2374,
        extinto: "ROMELIA  ESTER  JUAREZ",
        nacimiento: "1961-12-23",
        defuncion: "2024-12-22",
        sector: "Sector Amarillo",
        latitud: -31.5678755,
        longitud: -63.5158916
    },
    {
        id: 2375,
        extinto: "ADA CLIDA ARMENDIA",
        nacimiento: "1936-03-18",
        defuncion: "2025-01-03",
        sector: "Sector Azul",
        latitud: -31.5670680,
        longitud: -63.5162126
    },
    {
        id: 2376,
        extinto: "FERNANDO AGUSTIN RAMALLO",
        nacimiento: "1959-02-26",
        defuncion: "2025-01-12",
        sector: "Sector Verde",
        latitud: -31.5674989,
        longitud: -63.5162020
    },
    {
        id: 2377,
        extinto: "MARIA DELIA TISERA",
        nacimiento: "1938-05-28",
        defuncion: "2024-05-20",
        sector: "Sector Naranja",
        latitud: -31.5669082,
        longitud: -63.5150703
    },
    {
        id: 2378,
        extinto: "CARMEN  LOLA  TISSERA",
        nacimiento: "1930-07-18",
        defuncion: "2000-09-18",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2379,
        extinto: "HECTOR  EUSEBIO  TISERA",
        nacimiento: "1933-08-14",
        defuncion: "2000-09-10",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2380,
        extinto: "IMAIS  TISERA",
        nacimiento: "1904-07-20",
        defuncion: "1994-07-08",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2381,
        extinto: "MICAELA  AIDA  FERNANDEZ",
        nacimiento: "1902-09-29",
        defuncion: "1984-12-08",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2382,
        extinto: "ANGELA  ROSARIO  BROCHERO",
        nacimiento: "1900-10-02",
        defuncion: "1978-03-15",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2383,
        extinto: "ALEJO  TISSERA",
        nacimiento: "1900-01-01",
        defuncion: "1952-03-30",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2384,
        extinto: "HONORIO  ELPIDIO  TISERA",
        nacimiento: "1929-12-24",
        defuncion: "2010-03-18",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2385,
        extinto: "FEDERICO  HECTOR  TISERA",
        nacimiento: "1931-10-27",
        defuncion: "1982-05-17",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2386,
        extinto: "CARLOS  NICOLAS  TISSERA",
        nacimiento: "1927-08-06",
        defuncion: "1999-09-26",
        sector: "Sector Naranja",
        latitud: -31.5669195,
        longitud: -63.5150742
    },
    {
        id: 2387,
        extinto: "PIA MERCEDES RAMIRES",
        nacimiento: "1956-03-09",
        defuncion: "2025-01-16",
        sector: "Sector Verde",
        latitud: -31.5675941,
        longitud: -63.5162248
    },
    {
        id: 2388,
        extinto: "VICTOR  JOSE  RIVAROLA",
        nacimiento: "1947-11-03",
        defuncion: "2021-04-28",
        sector: "Sector Naranja",
        latitud: -31.5672962,
        longitud: -63.5151769
    },
    {
        id: 2389,
        extinto: "MARCELO  SEGUNDO  GALLARDO",
        nacimiento: "1947-11-23",
        defuncion: "2025-01-18",
        sector: "Sector Verde",
        latitud: -31.5678666,
        longitud: -63.5163372
    },
    {
        id: 2390,
        extinto: "ALBERTO ADEMAR ALBORNOZ",
        nacimiento: "1975-11-05",
        defuncion: "2025-01-26",
        sector: "Sector Naranja",
        latitud: -31.5669415,
        longitud: -63.5149390
    },
    {
        id: 2391,
        extinto: "RAMONA CLELIA RIOS",
        nacimiento: "1937-03-08",
        defuncion: "2025-01-31",
        sector: "Sector Verde",
        latitud: -31.5675001,
        longitud: -63.5162298
    },
    {
        id: 2392,
        extinto: "ESTEBAN LUIS DELOGU",
        nacimiento: "1955-03-21",
        defuncion: "2025-01-31",
        sector: "Sector Amarillo",
        latitud: -31.5678488,
        longitud: -63.5159107
    },
    {
        id: 2393,
        extinto: "FEDERICO MARCATO",
        nacimiento: "1942-02-27",
        defuncion: "2025-02-06",
        sector: "Sector Azul",
        latitud: -31.5669940,
        longitud: -63.5166457
    },
    {
        id: 2394,
        extinto: "NELIDA ALBINA MARIA MOCHI",
        nacimiento: "1947-01-03",
        defuncion: "2025-02-10",
        sector: "Sector Naranja",
        latitud: -31.5669088,
        longitud: -63.5155223
    },
    {
        id: 2395,
        extinto: "ANTONELLA SOLEDAD ARGUELLO VILLALBA",
        nacimiento: "1990-07-26",
        defuncion: "2025-02-20",
        sector: "Sector Rojo",
        latitud: -31.5666210,
        longitud: -63.5158256
    },
    {
        id: 2396,
        extinto: "MAFALDA  NILDA  DIAZ",
        nacimiento: "1945-09-18",
        defuncion: "2025-02-17",
        sector: "Sector Naranja",
        latitud: -31.5670325,
        longitud: -63.5153089
    },
    {
        id: 2397,
        extinto: "JORGE  MATIAS  BUSSANO",
        nacimiento: "1979-01-30",
        defuncion: "2025-02-26",
        sector: "Sector Verde",
        latitud: -31.5676010,
        longitud: -63.5164078
    },
    {
        id: 2398,
        extinto: "CELIA  DOMINGA  BELLA",
        nacimiento: "1937-05-01",
        defuncion: "2024-02-21",
        sector: "Sector Naranja",
        latitud: -31.5667527,
        longitud: -63.5152947
    },
    {
        id: 2399,
        extinto: "EDUARDO  JOSE  BIAGETTI",
        nacimiento: "1935-05-26",
        defuncion: "2013-07-17",
        sector: "Sector Naranja",
        latitud: -31.5667527,
        longitud: -63.5152947
    },
    {
        id: 2400,
        extinto: "MARIA  RAQUEL  NANI",
        nacimiento: "1946-05-20",
        defuncion: "2025-03-07",
        sector: "Sector Naranja",
        latitud: -31.5669639,
        longitud: -63.5149467
    },
    {
        id: 2401,
        extinto: "STELLA  NORA  CARRIZO",
        nacimiento: "1935-04-11",
        defuncion: "2025-03-04",
        sector: "Sector Naranja",
        latitud: -31.5670876,
        longitud: -63.5149602
    },
    {
        id: 2402,
        extinto: "EUFEMIA NICOLASA  LOPEZ",
        nacimiento: "1941-04-05",
        defuncion: "2025-03-08",
        sector: "Sector Rosa",
        latitud: -31.5675464,
        longitud: -63.5155274
    },
    {
        id: 2403,
        extinto: "MARCELO  GUSTAVO  CARANDINO",
        nacimiento: "1966-11-15",
        defuncion: "2025-02-14",
        sector: "Sector Rosa",
        latitud: -31.5675773,
        longitud: -63.5155846
    },
    {
        id: 2404,
        extinto: "OSCAR  ELADIO  BETTEGA",
        nacimiento: "1945-11-09",
        defuncion: "2025-03-22",
        sector: "Sector Azul",
        latitud: -31.5669708,
        longitud: -63.5166494
    },
    {
        id: 2405,
        extinto: "HECTOR  ARMANDO  VICARIO",
        nacimiento: "1942-06-25",
        defuncion: "2025-03-21",
        sector: "Sector Azul",
        latitud: -31.5665792,
        longitud: -63.5160962
    },
    {
        id: 2406,
        extinto: "ZULEMA  MARGARITA  TEJEDA",
        nacimiento: "1939-11-02",
        defuncion: "2025-03-27",
        sector: "Sector Azul",
        latitud: -31.5663808,
        longitud: -63.5163233
    },
    {
        id: 2407,
        extinto: "GUEVARA ROQUE MARCELINO",
        nacimiento: "1919-04-26",
        defuncion: "1990-12-29",
        sector: "Sector Rosa",
        latitud: -31.5675367,
        longitud: -63.5155524
    },
    {
        id: 2408,
        extinto: "JOSEFA AIDA DE SAN RAMON GUEVARA",
        nacimiento: "1919-04-14",
        defuncion: "1991-08-02",
        sector: "Sector Rosa",
        latitud: -31.5675367,
        longitud: -63.5155524
    },
    {
        id: 2409,
        extinto: "SERGIO  LUIS  ORTEGA",
        nacimiento: "1978-02-26",
        defuncion: "2025-03-17",
        sector: "Sector Verde",
        latitud: -31.5671713,
        longitud: -63.5164452
    },
    {
        id: 2410,
        extinto: "IRIS  ESTER  BRUCELLI",
        nacimiento: "1957-10-19",
        defuncion: "2025-04-05",
        sector: "Sector Naranja",
        latitud: -31.5668548,
        longitud: -63.5152911
    },
    {
        id: 2411,
        extinto: "LUIS  ROQUE  GUEVARA",
        nacimiento: "1949-08-25",
        defuncion: "2025-04-02",
        sector: "Sector Rosa",
        latitud: -31.5675367,
        longitud: -63.5155524
    },
    {
        id: 2412,
        extinto: "ROMULO  PASCUAL  PRATTO",
        nacimiento: "1945-04-01",
        defuncion: "2025-03-12",
        sector: "Sector Verde",
        latitud: -31.5672240,
        longitud: -63.5166509
    },
    {
        id: 2413,
        extinto: "MIRTA  TERESA  HUERTA",
        nacimiento: "1946-09-21",
        defuncion: "2025-04-22",
        sector: "Sector Azul",
        latitud: -31.5668823,
        longitud: -63.5161700
    },
    {
        id: 2414,
        extinto: "DORLIZA  ESTHER  DOMINGUEZ",
        nacimiento: "1955-02-06",
        defuncion: "2025-04-15",
        sector: "Sector Rosa",
        latitud: -31.5675850,
        longitud: -63.5154276
    },
    {
        id: 2415,
        extinto: "ANTONELLA  ANAHI  MOLINARI",
        nacimiento: "1995-07-21",
        defuncion: "2025-04-15",
        sector: "Sector Rosa",
        latitud: -31.5676231,
        longitud: -63.5155356
    },
    {
        id: 2416,
        extinto: "GABRIELA  MARICEL  REYNOSO",
        nacimiento: "1976-11-20",
        defuncion: "2025-04-29",
        sector: "Sector Rosa",
        latitud: -31.5674422,
        longitud: -63.5153854
    },
    {
        id: 2417,
        extinto: "MARTA  FELISA  DARIOSSI",
        nacimiento: "1942-05-30",
        defuncion: "2025-05-11",
        sector: "Sector Verde",
        latitud: -31.5675522,
        longitud: -63.5162003
    },
    {
        id: 2418,
        extinto: "GIORGINA  VANESA  ALANIS",
        nacimiento: "1986-05-05",
        defuncion: "2025-04-25",
        sector: "Sector Amarillo",
        latitud: -31.5678154,
        longitud: -63.5162403
    },
    {
        id: 2419,
        extinto: "MARIA  LUISA  VEGA",
        nacimiento: "1936-07-06",
        defuncion: "2025-05-16",
        sector: "Sector Rojo",
        latitud: -31.5667993,
        longitud: -63.5155710
    },
    {
        id: 2420,
        extinto: "ROSA  ELVIRA  PORPORATO",
        nacimiento: "1945-06-29",
        defuncion: "2025-05-16",
        sector: "Sector Naranja",
        latitud: -31.5670649,
        longitud: -63.5149534
    },
    {
        id: 2421,
        extinto: "LUIS  DAVID  RECH",
        nacimiento: "1946-06-10",
        defuncion: "2025-05-29",
        sector: "Sector Azul",
        latitud: -31.5664843,
        longitud: -63.5160943
    },
    {
        id: 2422,
        extinto: "DESIDERIA OLGA  LUQUE",
        nacimiento: "1932-05-23",
        defuncion: "2025-05-28",
        sector: "Sector Rojo",
        latitud: -31.5668054,
        longitud: -63.5155478
    },
    {
        id: 2423,
        extinto: "OMAR  RITO  LUCARELLI",
        nacimiento: "1958-05-22",
        defuncion: "2025-05-29",
        sector: "Sector Naranja",
        latitud: -31.5670101,
        longitud: -63.5153010
    },
    {
        id: 2424,
        extinto: "FATIMA BUD",
        nacimiento: "1940-09-25",
        defuncion: "2025-03-14",
        sector: "Sector Azul",
        latitud: -31.5666624,
        longitud: -63.5166541
    },
    {
        id: 2425,
        extinto: "MERCEDES  YOLANDA  HERNANDEZ",
        nacimiento: "1952-07-25",
        defuncion: "2025-04-19",
        sector: "Sector Azul",
        latitud: -31.5664214,
        longitud: -63.5160887
    },
    {
        id: 2426,
        extinto: "JOSE  LUIS  FRONTERA",
        nacimiento: "1933-03-16",
        defuncion: "1961-02-21",
        sector: "Sector Azul",
        latitud: -31.5665731,
        longitud: -63.5163610
    },
    {
        id: 2427,
        extinto: "MARIA  ISABEL  MOLINA",
        nacimiento: "1907-01-01",
        defuncion: "1967-11-02",
        sector: "Sector Azul",
        latitud: -31.5665731,
        longitud: -63.5163610
    },
    {
        id: 2428,
        extinto: "RAMON  JUAN  FRONTERA",
        nacimiento: "1901-02-08",
        defuncion: "1974-02-20",
        sector: "Sector Azul",
        latitud: -31.5665731,
        longitud: -63.5163610
    },
    {
        id: 2429,
        extinto: "NORMA  AMIRA  MONTENEGRO",
        nacimiento: "1947-05-05",
        defuncion: "2025-07-02",
        sector: "Sector Rojo",
        latitud: -31.5666152,
        longitud: -63.5157386
    },
    {
        id: 2430,
        extinto: "N.N SANCHEZ-CATALANO",
        nacimiento: "2025-06-21",
        defuncion: "2025-06-21",
        sector: "Sector Naranja",
        latitud: -31.5669059,
        longitud: -63.5149827
    },
    {
        id: 2431,
        extinto: "ANALIA  DANIELA  VIRGOLINI",
        nacimiento: "1973-11-29",
        defuncion: "2025-06-05",
        sector: "Sector Naranja",
        latitud: -31.5672812,
        longitud: -63.5151985
    },
    {
        id: 2432,
        extinto: "MARTHA  BEATRIZ  GIRAUDO",
        nacimiento: "1942-10-28",
        defuncion: "2025-06-21",
        sector: "Sector Rosa",
        latitud: -31.5676129,
        longitud: -63.5154273
    },
    {
        id: 2433,
        extinto: "PEDRO  NEMESIO  RAMALLO",
        nacimiento: "1996-05-28",
        defuncion: "1996-06-08",
        sector: "Sector Rosa",
        latitud: -31.5674652,
        longitud: -63.5154683
    },
    {
        id: 2434,
        extinto: "CESAR  ADRIAN  RAMALLO",
        nacimiento: "2005-01-04",
        defuncion: "2006-11-01",
        sector: "Sector Rosa",
        latitud: -31.5674652,
        longitud: -63.5154683
    },
    {
        id: 2435,
        extinto: "NINFA  NELLI  LOPEZ",
        nacimiento: "1938-05-13",
        defuncion: "2025-07-02",
        sector: "Sector Amarillo",
        latitud: -31.5677385,
        longitud: -63.5159954
    },
    {
        id: 2436,
        extinto: "JULIO  EDUARDO  VOCOS",
        nacimiento: "1942-04-16",
        defuncion: "2025-07-17",
        sector: "Sector Amarillo",
        latitud: -31.5677737,
        longitud: -63.5161429
    },
    {
        id: 2437,
        extinto: "DOMINGO  ANGEL  ZALAZAR",
        nacimiento: "1964-12-09",
        defuncion: "2025-06-21",
        sector: "Sector Amarillo",
        latitud: -31.5677384,
        longitud: -63.5157994
    },
    {
        id: 2438,
        extinto: "EMILIA  FUNES",
        nacimiento: "1943-12-27",
        defuncion: "2025-07-13",
        sector: "Sector Verde",
        latitud: -31.5673004,
        longitud: -63.5167460
    },
    {
        id: 2439,
        extinto: "NILDO  ALBERTO  LEIRIA",
        nacimiento: "1941-08-11",
        defuncion: "2025-08-06",
        sector: "Sector Azul",
        latitud: -31.5665596,
        longitud: -63.5159763
    },
    {
        id: 2440,
        extinto: "JUAN  CAON",
        nacimiento: "1912-05-20",
        defuncion: "1996-06-05",
        sector: "Sector Verde",
        latitud: -31.5672610,
        longitud: -63.5167214
    },
    {
        id: 2441,
        extinto: "PALMIRA  FRANCISCA  MARCATO",
        nacimiento: "1912-03-23",
        defuncion: "2000-11-18",
        sector: "Sector Verde",
        latitud: -31.5672610,
        longitud: -63.5167214
    },
    {
        id: 2442,
        extinto: "AVRIL  RIVARA TORAZZA",
        nacimiento: "2006-11-23",
        defuncion: "2025-07-19",
        sector: "Sector Verde",
        latitud: -31.5676672,
        longitud: -63.5162100
    },
    {
        id: 2443,
        extinto: "YOLANDA  URAN",
        nacimiento: "1940-09-27",
        defuncion: "2025-08-25",
        sector: "Sector Azul",
        latitud: -31.5670747,
        longitud: -63.5161897
    },
    {
        id: 2444,
        extinto: "YOLANDA BEATRIZ RUFINI",
        nacimiento: "1945-11-16",
        defuncion: "2025-10-22",
        sector: "Sector Verde",
        latitud: -31.5671386,
        longitud: -63.5165145
    },
    {
        id: 2445,
        extinto: "JOSE  ALBERTO  CARABANTE",
        nacimiento: "1938-12-07",
        defuncion: "1995-01-27",
        sector: "Sector Azul",
        latitud: -31.5664883,
        longitud: -63.5163494
    },
    {
        id: 2446,
        extinto: "HILDA  LEONOR  PAVON",
        nacimiento: "1942-02-27",
        defuncion: "2023-08-24",
        sector: "Sector Azul",
        latitud: -31.5664883,
        longitud: -63.5163494
    },
    {
        id: 2447,
        extinto: "LILLIANA  DEL  VALLE  SAQUI",
        nacimiento: "1966-02-14",
        defuncion: "2025-09-02",
        sector: "Sector Azul",
        latitud: -31.5667220,
        longitud: -63.5160387
    },
    {
        id: 2448,
        extinto: "IRENE IMELDA BUSTOS",
        nacimiento: "1952-04-22",
        defuncion: "2025-09-19",
        sector: "Sector Rojo",
        latitud: -31.5665447,
        longitud: -63.5157444
    },
    {
        id: 2449,
        extinto: "ANA MARIA PEIRONE",
        nacimiento: "1958-09-05",
        defuncion: "2025-10-17",
        sector: "Sector Rojo",
        latitud: -31.5665705,
        longitud: -63.5158379
    },
    {
        id: 2450,
        extinto: "DIEGO  EZEQUIEL  CELIZ",
        nacimiento: "1996-09-22",
        defuncion: "2025-11-12",
        sector: "Sector Rojo",
        latitud: -31.5666025,
        longitud: -63.5159049
    },
    {
        id: 2451,
        extinto: "KATHERINA MELINE PEREYRA",
        nacimiento: "1994-08-26",
        defuncion: "2025-10-21",
        sector: "Sector Azul",
        latitud: -31.5665472,
        longitud: -63.5160292
    },
    {
        id: 2452,
        extinto: "MARTA  LILIANA  AMBROGIO",
        nacimiento: "1955-08-06",
        defuncion: "2025-09-17",
        sector: "Sector Azul",
        latitud: -31.5664812,
        longitud: -63.5161075
    },
    {
        id: 2453,
        extinto: "NORMA  INES  ABREGO",
        nacimiento: "1950-02-02",
        defuncion: "2025-11-02",
        sector: "Sector Azul",
        latitud: -31.5665256,
        longitud: -63.5161216
    },
    {
        id: 2454,
        extinto: "AIDA  ADHELMA  ARREGUI",
        nacimiento: "1948-07-30",
        defuncion: "2025-09-11",
        sector: "Sector Naranja",
        latitud: -31.5668610,
        longitud: -63.5149672
    },
    {
        id: 2455,
        extinto: "NN ARCE",
        nacimiento: "2025-10-20",
        defuncion: "2025-10-20",
        sector: "Sector Rosa",
        latitud: -31.5674430,
        longitud: -63.5152308
    },
    {
        id: 2456,
        extinto: "ALFREDO  EDGARDO  GIACOSSA",
        nacimiento: "1954-02-12",
        defuncion: "2025-11-02",
        sector: "Sector Rosa",
        latitud: -31.5676568,
        longitud: -63.5152743
    },
    {
        id: 2457,
        extinto: "HECTOR  JOSE  GIACOSSA",
        nacimiento: "1947-12-14",
        defuncion: "2015-07-13",
        sector: "Sector Rosa",
        latitud: -31.5676568,
        longitud: -63.5152743
    },
    {
        id: 2458,
        extinto: "LIDIA  BIENVENIDA  ORELLANO",
        nacimiento: "1938-02-04",
        defuncion: "2025-09-15",
        sector: "Sector Naranja",
        latitud: -31.5668248,
        longitud: -63.5151509
    },
    {
        id: 2459,
        extinto: "JORGE LUIS ESPOSITO",
        nacimiento: "1955-09-25",
        defuncion: "2025-10-05",
        sector: "Sector Naranja",
        latitud: -31.5671550,
        longitud: -63.5152944
    },
    {
        id: 2460,
        extinto: "ALBINA DEL CARMEN MONASTERIO",
        nacimiento: "1935-09-16",
        defuncion: "2025-07-31",
        sector: "Sector Rosa",
        latitud: -31.5676748,
        longitud: -63.5153978
    },
    {
        id: 2461,
        extinto: "ANDREA CECILIA GRASSO",
        nacimiento: "1974-04-08",
        defuncion: "2025-09-21",
        sector: "Sector Rosa",
        latitud: -31.5676280,
        longitud: -63.5154637
    },
    {
        id: 2462,
        extinto: "RAUL OMAR ACEVEDO",
        nacimiento: "1955-11-06",
        defuncion: "2025-11-12",
        sector: "Sector Verde",
        latitud: -31.5676978,
        longitud: -63.5164308
    },
    {
        id: 2463,
        extinto: "DILIMO ALBERTO TABORDA",
        nacimiento: "1940-12-13",
        defuncion: "2025-10-13",
        sector: "Sector Verde",
        latitud: -31.5676012,
        longitud: -63.5163197
    },
    {
        id: 2464,
        extinto: "ROBERTO  EFRAIN  TABORDA",
        nacimiento: "1937-02-04",
        defuncion: "2021-05-04",
        sector: "Sector Verde",
        latitud: -31.5676139,
        longitud: -63.5162093
    },
    {
        id: 2465,
        extinto: "MARTA OFELIA VALE",
        nacimiento: "1944-04-17",
        defuncion: "2025-07-29",
        sector: "Sector Verde",
        latitud: -31.5674687,
        longitud: -63.5162114
    },
    {
        id: 2466,
        extinto: "JOAQUIN ANDRES PAILLER",
        nacimiento: "1950-08-17",
        defuncion: "2025-10-27",
        sector: "Sector Amarillo",
        latitud: -31.5675825,
        longitud: -63.5161326
    },
    {
        id: 2467,
        extinto: "MATEO GALOPPO",
        nacimiento: "2001-10-25",
        defuncion: "2025-10-25",
        sector: "Sector Verde",
        latitud: -31.5675731,
        longitud: -63.5161542
    },
    {
        id: 2468,
        extinto: "DANIEL  ALFREDO CARO",
        nacimiento: "1965-12-10",
        defuncion: "2025-08-19",
        sector: "Sector Verde",
        latitud: -31.5676358,
        longitud: -63.5161914
    },
    {
        id: 2469,
        extinto: "ERMELINDA  LEONOR  LOZANO",
        nacimiento: "1938-08-29",
        defuncion: "2025-08-17",
        sector: "Sector Amarillo",
        latitud: -31.5679174,
        longitud: -63.5160272
    },
    {
        id: 2470,
        extinto: "SEGUNDO JOAQUIN GALLARDO",
        nacimiento: "1913-03-27",
        defuncion: "1987-05-04",
        sector: "Sector Verde",
        latitud: -31.5678666,
        longitud: -63.5163372
    },
    {
        id: 2471,
        extinto: "MARIA DELIA VACA",
        nacimiento: "1913-01-01",
        defuncion: "1959-03-27",
        sector: "Sector Verde",
        latitud: -31.5678666,
        longitud: -63.5163372
    },
    {
        id: 2472,
        extinto: "LAUTARO  ARMANINI",
        nacimiento: "2002-01-15",
        defuncion: "2002-01-15",
        sector: "Sector Verde",
        latitud: -31.5677651,
        longitud: -63.5162520
    },
    {
        id: 2473,
        extinto: "RITA  ELIZABETH  HERRERA",
        nacimiento: "1964-04-27",
        defuncion: "2025-11-22",
        sector: "Sector Verde",
        latitud: -31.5677367,
        longitud: -63.5162749
    },
    {
        id: 2474,
        extinto: "SANTIAGO SILVESTRE GARDA",
        nacimiento: "1947-08-06",
        defuncion: "2025-10-23",
        sector: "Sector Verde",
        latitud: -31.5676740,
        longitud: -63.5162888
    },
    {
        id: 2475,
        extinto: "EDWIN DARIO  BERTONI",
        nacimiento: "1940-01-08",
        defuncion: "2025-09-04",
        sector: "Sector Amarillo",
        latitud: -31.5677134,
        longitud: -63.5160745
    },
    {
        id: 2476,
        extinto: "MARIA INES LOZANO",
        nacimiento: "1951-04-20",
        defuncion: "2025-12-28",
        sector: "Sector Amarillo",
        latitud: -31.5677643,
        longitud: -63.5158660
    },
    {
        id: 2477,
        extinto: "JOSE  ORFEO  GOMEZ",
        nacimiento: "1962-04-14",
        defuncion: "2025-09-13",
        sector: "Sector Verde",
        latitud: -31.5673004,
        longitud: -63.5167460
    },
    {
        id: 2478,
        extinto: "LIDIA ROSA SANTORO",
        nacimiento: "1945-08-10",
        defuncion: "2026-01-02",
        sector: "Sector Naranja",
        latitud: -31.5670989,
        longitud: -63.5149636
    },
    {
        id: 2479,
        extinto: "MARIA  SUNILDA  GIGENA",
        nacimiento: "1943-08-01",
        defuncion: "2026-01-13",
        sector: "Sector Naranja",
        latitud: -31.5670412,
        longitud: -63.5154501
    },
    {
        id: 2480,
        extinto: "SERGIO JAVIER ARRIETA",
        nacimiento: "1975-04-05",
        defuncion: "2025-12-21",
        sector: "Sector Verde",
        latitud: -31.5677427,
        longitud: -63.5163066
    },
    {
        id: 2481,
        extinto: "GLADIS  MARIA  BUTTIGLIERO",
        nacimiento: "1960-07-31",
        defuncion: "2025-12-23",
        sector: "Sector Verde",
        latitud: -31.5673511,
        longitud: -63.5167552
    },
    {
        id: 2482,
        extinto: "JUAN  JOSE  CALDERON",
        nacimiento: "1948-09-07",
        defuncion: "2026-01-26",
        sector: "Sector Naranja",
        latitud: -31.5669154,
        longitud: -63.5150420
    },
    {
        id: 2483,
        extinto: "IRENE  JOSEFA  DANIELE",
        nacimiento: "1941-09-28",
        defuncion: "2026-01-25",
        sector: "Sector Amarillo",
        latitud: -31.5675407,
        longitud: -63.5161078
    },
    {
        id: 2484,
        extinto: "JORGE  RAMON  ESPAÑON",
        nacimiento: "1941-05-29",
        defuncion: "2026-01-22",
        sector: "Sector Rosa",
        latitud: -31.5676393,
        longitud: -63.5156675
    },
    {
        id: 2485,
        extinto: "CARLOS  HORACIO  FERREYRA",
        nacimiento: "1948-07-28",
        defuncion: "2026-02-16",
        sector: "Sector Azul",
        latitud: -31.5665436,
        longitud: -63.5162843
    },
    {
        id: 2486,
        extinto: "OSVALDO  PABLO  CRAVERO",
        nacimiento: "1948-06-26",
        defuncion: "2026-02-22",
        sector: "Sector Naranja",
        latitud: -31.5670947,
        longitud: -63.5153056
    },
    {
        id: 2487,
        extinto: "MARTA  BEATRIZ  NAVARRO",
        nacimiento: "1946-04-08",
        defuncion: "2026-02-23",
        sector: "Sector Rosa",
        latitud: -31.5673897,
        longitud: -63.5153893
    },
    {
        id: 2488,
        extinto: "MARIA  EULALIA  MACHADO",
        nacimiento: "1955-06-08",
        defuncion: "2026-02-17",
        sector: "Sector Amarillo",
        latitud: -31.5678083,
        longitud: -63.5158818
    },
    {
        id: 2489,
        extinto: "VICTOR  JUAN  GOLDI",
        nacimiento: "1956-03-05",
        defuncion: "2026-01-15",
        sector: "Sector Rosa",
        latitud: -31.5676225,
        longitud: -63.5154023
    },
    {
        id: 2490,
        extinto: "GERARDO  RAUL  BETTEGA",
        nacimiento: "1959-12-31",
        defuncion: "2026-03-04",
        sector: "Sector Rosa",
        latitud: -31.5676080,
        longitud: -63.5154397
    },
    {
        id: 2491,
        extinto: "ELSA CONSEPCION  ORELLANO",
        nacimiento: "1939-12-15",
        defuncion: "2026-02-10",
        sector: "Sector Amarillo",
        latitud: -31.5675559,
        longitud: -63.5160453
    },
    {
        id: 2492,
        extinto: "SARA  MARGARITA TISERA",
        nacimiento: "1946-10-14",
        defuncion: "2026-03-02",
        sector: "Sector Rosa",
        latitud: -31.5676544,
        longitud: -63.5156304
    },
    {
        id: 2493,
        extinto: "MARTA JOSEFA TAMAGNINI",
        nacimiento: "1948-10-27",
        defuncion: "2026-02-11",
        sector: "Sector Naranja",
        latitud: -31.5669937,
        longitud: -63.5152699
    },
    {
        id: 2494,
        extinto: "JORGE VICTOR UTRERA",
        nacimiento: "1958-06-26",
        defuncion: "2026-03-15",
        sector: "Sector Verde",
        latitud: -31.5675207,
        longitud: -63.5161818
    },
    {
        id: 2495,
        extinto: "JOSE  LUIS  BUSTOS",
        nacimiento: "1958-09-06",
        defuncion: "2026-03-24",
        sector: "Sector Rojo",
        latitud: -31.5664409,
        longitud: -63.5159158
    },
    {
        id: 2496,
        extinto: "OSVALDO  NEMESIO DEL VALLE SPRING",
        nacimiento: "1956-10-28",
        defuncion: "2026-03-27",
        sector: "Sector Naranja",
        latitud: -31.5669667,
        longitud: -63.5151708
    },
    {
        id: 2497,
        extinto: "DIEGO  NARCISO  GOROSITO",
        nacimiento: "1946-10-30",
        defuncion: "2026-03-20",
        sector: "Sector Rosa",
        latitud: -31.5677140,
        longitud: -63.5154842
    },
    {
        id: 2498,
        extinto: "JUAN  DOMINGO  TISERA",
        nacimiento: "1955-04-06",
        defuncion: "2026-04-26",
        sector: "Sector Azul",
        latitud: -31.5665318,
        longitud: -63.5160952
    },
    {
        id: 2499,
        extinto: "SIMON  ENRIQUE  HUZULIAK",
        nacimiento: "1954-10-24",
        defuncion: "2026-04-02",
        sector: "Sector Rosa",
        latitud: -31.5674935,
        longitud: -63.5155297
    },
    {
        id: 2500,
        extinto: "EDIT  ANGELA DEL ROSARIO  MUSSO",
        nacimiento: "1953-05-14",
        defuncion: "2026-04-02",
        sector: "Sector Rosa",
        latitud: -31.5676859,
        longitud: -63.5156782
    },
    {
        id: 2501,
        extinto: "ROQUE  RAIMUNDO  CARRIZO",
        nacimiento: "1938-01-29",
        defuncion: "2026-05-14",
        sector: "Sector Rosa",
        latitud: -31.5676998,
        longitud: -63.5155218
    },
    {
        id: 2502,
        extinto: "OSMAR BAUTISTA  CRETTINO",
        nacimiento: "1961-05-12",
        defuncion: "2026-06-12",
        sector: "Sector Amarillo",
        latitud: -31.5678126,
        longitud: -63.5157831
    },
    {
        id: 2503,
        extinto: "HUGO  ALBERTO  VAUDAGNA",
        nacimiento: "2026-06-18",
        defuncion: "2026-06-18",
        sector: "Sector Amarillo",
        latitud: -31.5678763,
        longitud: -63.5158060
    },
    {
        id: 2504,
        extinto: "DORA  BEATRIZ  CARMONA",
        nacimiento: "1981-01-29",
        defuncion: "2026-05-30",
        sector: "Sector Azul",
        latitud: -31.5667080,
        longitud: -63.5166669
    },
    {
        id: 2505,
        extinto: "LIDIA  ESTHER  FERREYRA",
        nacimiento: "1913-06-12",
        defuncion: "2026-05-27",
        sector: "Sector Azul",
        latitud: -31.5670192,
        longitud: -63.5161677
    },
    {
        id: 2506,
        extinto: "DOMINGO  VICTOR  ROSSO",
        nacimiento: "1942-09-26",
        defuncion: "2026-06-02",
        sector: "Sector Azul",
        latitud: -31.5668712,
        longitud: -63.5161656
    },
    {
        id: 2507,
        extinto: "MARIA MARGARITA GUZMAN",
        nacimiento: "1944-08-18",
        defuncion: "2026-05-06",
        sector: "Sector Rosa",
        latitud: -31.5675597,
        longitud: -63.5155645
    },
    {
        id: 2508,
        extinto: "PASCUAL RAMON BARONE",
        nacimiento: "1944-04-09",
        defuncion: "2026-07-05",
        sector: "Sector Azul",
        latitud: -31.5670636,
        longitud: -63.5161853
    },
    {
        id: 2509,
        extinto: "ANA MARIA LLAMAS DE MADARIAGA",
        nacimiento: "1956-11-15",
        defuncion: "2026-07-08",
        sector: "Sector Rojo",
        latitud: -31.5665173,
        longitud: -63.5156367
    },
    {
        id: 2510,
        extinto: "ANGELA VALENTINA LUQUE",
        nacimiento: "1937-10-28",
        defuncion: "2026-07-09",
        sector: "Sector Rosa",
        latitud: -31.5674083,
        longitud: -63.5152239
    },
    {
        id: 2511,
        extinto: "JUAN MANUEL SUBIZAR",
        nacimiento: "1957-11-27",
        defuncion: "2026-07-08",
        sector: "Sector Rosa",
        latitud: -31.5674723,
        longitud: -63.5152350
    },
    {
        id: 2512,
        extinto: "CLARINDA ROSA PERALTA",
        nacimiento: "1941-12-19",
        defuncion: "2026-07-22",
        sector: "Sector Naranja",
        latitud: -31.5670273,
        longitud: -63.5152818
    },
    {
        id: 2513,
        extinto: "MARIA ANA CEAGLIO",
        nacimiento: "1938-10-30",
        defuncion: "2026-07-21",
        sector: "Sector Amarillo",
        latitud: -31.5676348,
        longitud: -63.5161636
    }
];

// ---------------------------------------------------------------------------
// Helpers de consulta
// ---------------------------------------------------------------------------

/**
 * Filtra los registros por nombre o apellido (coincidencia parcial,
 * insensible a mayúsculas/minúsculas).
 *
 * @param {string} query  Término de búsqueda ingresado por el usuario.
 * @returns {Array}       Registros coincidentes (Array vacío si no hay matches).
 */
function filterRecords(query) {
    const term = query.trim().toLowerCase();
    if (!term) return MOCK_DATABASE; // si no hay query, devolver TODO (o [] según req)

    return MOCK_DATABASE.filter((r) => {
        const nombreApellido = `${r.extinto}`.toLowerCase();
        return nombreApellido.includes(term);
    });
}

/**
 * Obtiene un registro por su ID único.
 *
 * @param {number} id  Identificador del registro.
 * @returns {Object|undefined}  El registro o undefined si no existe.
 */
function getRecordById(id) {
    return MOCK_DATABASE.find((r) => r.id === id);
}
