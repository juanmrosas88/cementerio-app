// data.js — Mock data generated from cp_parcelas.csv
// 2538 parcelas reales del cementerio

// Colores por sector (reales del CSV)
const sectorColors = {
    'AMARILLO': '#FFD700',
    'AZUL': '#4285F4',
    'NARANJA': '#FF9800',
    'VERDE': '#4CAF50',
    'VIOLETA': '#9C27B0',
};

function getColorForSector(sector) {
    return sectorColors[sector] || '#888888';
}

// Parcelas reales del CSV
const parcelas = [
  {
    "id": 1,
    "extinto": "OLGA ROSA BASUALDO",
    "sector": "VIOLETA",
    "lote": "1",
    "nro": "77",
    "latitud": -31.56673085,
    "longitud": -63.51667322,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2,
    "extinto": "ALDO ANTONIO TERRENO",
    "sector": "VIOLETA",
    "lote": "1",
    "nro": "77",
    "latitud": -31.56673085,
    "longitud": -63.51667322,
    "color_sector": "#9C27B0"
  },
  {
    "id": 3,
    "extinto": "BARBERO FELIX",
    "sector": "VIOLETA",
    "lote": "1",
    "nro": "80",
    "latitud": -31.56676505,
    "longitud": -63.51668277,
    "color_sector": "#9C27B0"
  },
  {
    "id": 4,
    "extinto": "CARLOS ISAIAS DOMINGUEZ",
    "sector": "VIOLETA",
    "lote": "2",
    "nro": "8",
    "latitud": -31.56686597,
    "longitud": -63.51635826,
    "color_sector": "#9C27B0"
  },
  {
    "id": 5,
    "extinto": "TEUMACO EVARISTO ANGEL",
    "sector": "VIOLETA",
    "lote": "2",
    "nro": "65",
    "latitud": -31.56668793,
    "longitud": -63.5163236,
    "color_sector": "#9C27B0"
  },
  {
    "id": 6,
    "extinto": "SARA DEL VALLE GALLEGOS",
    "sector": "VIOLETA",
    "lote": "2",
    "nro": "65",
    "latitud": -31.56668793,
    "longitud": -63.5163236,
    "color_sector": "#9C27B0"
  },
  {
    "id": 7,
    "extinto": "EDMUNDO ADOLFO VALERIANO  AGERET",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "5",
    "latitud": -31.56690817,
    "longitud": -63.51612359,
    "color_sector": "#9C27B0"
  },
  {
    "id": 8,
    "extinto": "SARA EUGENIA HEREDIA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "6",
    "latitud": -31.56691895,
    "longitud": -63.51612809,
    "color_sector": "#9C27B0"
  },
  {
    "id": 9,
    "extinto": "MARIA ISABEL TEJEDA LUQUE",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "7",
    "latitud": -31.56693015,
    "longitud": -63.51613212,
    "color_sector": "#9C27B0"
  },
  {
    "id": 10,
    "extinto": "MARINA BELEN MARCHIORI",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "8",
    "latitud": -31.56694147,
    "longitud": -63.51613681,
    "color_sector": "#9C27B0"
  },
  {
    "id": 11,
    "extinto": "DELIA MARIA BARBIERI",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "8",
    "latitud": -31.56694147,
    "longitud": -63.51613681,
    "color_sector": "#9C27B0"
  },
  {
    "id": 12,
    "extinto": "ARDOLINO BAUTISTA MARCHIORI",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "8",
    "latitud": -31.56694147,
    "longitud": -63.51613681,
    "color_sector": "#9C27B0"
  },
  {
    "id": 13,
    "extinto": "ALBERIONE NORDA CATALINA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "9",
    "latitud": -31.56695257,
    "longitud": -63.51614122,
    "color_sector": "#9C27B0"
  },
  {
    "id": 14,
    "extinto": "JUAN JOSE POZZI",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "9",
    "latitud": -31.56695257,
    "longitud": -63.51614122,
    "color_sector": "#9C27B0"
  },
  {
    "id": 15,
    "extinto": "JUAREZ MARCOS",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "10",
    "latitud": -31.56696367,
    "longitud": -63.51614563,
    "color_sector": "#9C27B0"
  },
  {
    "id": 16,
    "extinto": "EMILSE GEMA ZANELLA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "11",
    "latitud": -31.56697477,
    "longitud": -63.51615004,
    "color_sector": "#9C27B0"
  },
  {
    "id": 17,
    "extinto": "FERREYRA ELBA ROSA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "12",
    "latitud": -31.56698587,
    "longitud": -63.51615444,
    "color_sector": "#9C27B0"
  },
  {
    "id": 18,
    "extinto": "QUIROGA BENITA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "12",
    "latitud": -31.56698587,
    "longitud": -63.51615444,
    "color_sector": "#9C27B0"
  },
  {
    "id": 19,
    "extinto": "FORN LUCIO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "12",
    "latitud": -31.56698587,
    "longitud": -63.51615444,
    "color_sector": "#9C27B0"
  },
  {
    "id": 20,
    "extinto": "MIGUEL ANASTACIO OCHOA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "13",
    "latitud": -31.56699697,
    "longitud": -63.51615885,
    "color_sector": "#9C27B0"
  },
  {
    "id": 21,
    "extinto": "PEIRONE JOSE MIGUEL",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "15",
    "latitud": -31.56701917,
    "longitud": -63.51616767,
    "color_sector": "#9C27B0"
  },
  {
    "id": 22,
    "extinto": "PEIRONE GUSTAVO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "15",
    "latitud": -31.56701917,
    "longitud": -63.51616767,
    "color_sector": "#9C27B0"
  },
  {
    "id": 23,
    "extinto": "TARDITTI ISOLINA MAGDALENA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "17",
    "latitud": -31.56704137,
    "longitud": -63.51617649,
    "color_sector": "#9C27B0"
  },
  {
    "id": 24,
    "extinto": "BRIZIO LUIS AMBROSIO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "17",
    "latitud": -31.56704137,
    "longitud": -63.51617649,
    "color_sector": "#9C27B0"
  },
  {
    "id": 25,
    "extinto": "SOLEDAD AGUIRRE",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "18",
    "latitud": -31.56705247,
    "longitud": -63.51618089,
    "color_sector": "#9C27B0"
  },
  {
    "id": 26,
    "extinto": "BARONE MIRIAM KARINA DEL CARMEN",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "18",
    "latitud": -31.56705247,
    "longitud": -63.51618089,
    "color_sector": "#9C27B0"
  },
  {
    "id": 27,
    "extinto": "MATEO BARONE",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "19",
    "latitud": -31.56706357,
    "longitud": -63.5161853,
    "color_sector": "#9C27B0"
  },
  {
    "id": 28,
    "extinto": "MARIA LUISA TOMATTIS",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "19",
    "latitud": -31.56706357,
    "longitud": -63.5161853,
    "color_sector": "#9C27B0"
  },
  {
    "id": 29,
    "extinto": "NAVARRO VICTOR ANIBAL",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "20",
    "latitud": -31.56707467,
    "longitud": -63.51618971,
    "color_sector": "#9C27B0"
  },
  {
    "id": 30,
    "extinto": "MUÑOZ  RODOLFO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "21",
    "latitud": -31.56708577,
    "longitud": -63.51619412,
    "color_sector": "#9C27B0"
  },
  {
    "id": 31,
    "extinto": "MOLINA NELI ESTER",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "22",
    "latitud": -31.56709666,
    "longitud": -63.51619858,
    "color_sector": "#9C27B0"
  },
  {
    "id": 32,
    "extinto": "JUAN CANDIDO BORRI",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "22",
    "latitud": -31.56709666,
    "longitud": -63.51619858,
    "color_sector": "#9C27B0"
  },
  {
    "id": 33,
    "extinto": "BORRI KARINA ALEJANDRA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "23",
    "latitud": -31.56710783,
    "longitud": -63.51620275,
    "color_sector": "#9C27B0"
  },
  {
    "id": 34,
    "extinto": "GOMEZ FLORENTINO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "24",
    "latitud": -31.56711907,
    "longitud": -63.51620734,
    "color_sector": "#9C27B0"
  },
  {
    "id": 35,
    "extinto": "TABORDA NELIA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "24",
    "latitud": -31.56711907,
    "longitud": -63.51620734,
    "color_sector": "#9C27B0"
  },
  {
    "id": 36,
    "extinto": "GIRAUDO OLMAR PEDRO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "25",
    "latitud": -31.56713017,
    "longitud": -63.51621175,
    "color_sector": "#9C27B0"
  },
  {
    "id": 37,
    "extinto": "ABBONDIO NICOLAS",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "26",
    "latitud": -31.56714127,
    "longitud": -63.51621616,
    "color_sector": "#9C27B0"
  },
  {
    "id": 38,
    "extinto": "GRISELDA DEL CARMEN GIRAUDO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "26",
    "latitud": -31.56714127,
    "longitud": -63.51621616,
    "color_sector": "#9C27B0"
  },
  {
    "id": 39,
    "extinto": "ALCIRA SERRANO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "27",
    "latitud": -31.56715237,
    "longitud": -63.51622057,
    "color_sector": "#9C27B0"
  },
  {
    "id": 40,
    "extinto": "ARGUELLO DANIEL SEBASTIAN",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "27",
    "latitud": -31.56715237,
    "longitud": -63.51622057,
    "color_sector": "#9C27B0"
  },
  {
    "id": 41,
    "extinto": "ARGUELO DIONISIO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "27",
    "latitud": -31.56715237,
    "longitud": -63.51622057,
    "color_sector": "#9C27B0"
  },
  {
    "id": 42,
    "extinto": "GIRAUDO TELMO QUINTO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "28",
    "latitud": -31.56716347,
    "longitud": -63.51622498,
    "color_sector": "#9C27B0"
  },
  {
    "id": 43,
    "extinto": "ESPINEL MARCELINA JUANA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "28",
    "latitud": -31.56716347,
    "longitud": -63.51622498,
    "color_sector": "#9C27B0"
  },
  {
    "id": 44,
    "extinto": "GIRAUDO CARLOS ALBERTO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "28",
    "latitud": -31.56716347,
    "longitud": -63.51622498,
    "color_sector": "#9C27B0"
  },
  {
    "id": 45,
    "extinto": "ZECCHIN NERINA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "29",
    "latitud": -31.56717457,
    "longitud": -63.51622939,
    "color_sector": "#9C27B0"
  },
  {
    "id": 46,
    "extinto": "GOTTARDELLO JUAN",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "29",
    "latitud": -31.56717457,
    "longitud": -63.51622939,
    "color_sector": "#9C27B0"
  },
  {
    "id": 47,
    "extinto": "N/N GOTTARDELLO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "29",
    "latitud": -31.56717457,
    "longitud": -63.51622939,
    "color_sector": "#9C27B0"
  },
  {
    "id": 48,
    "extinto": "SANCHEZ RAMON",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "30",
    "latitud": -31.56718567,
    "longitud": -63.51623379,
    "color_sector": "#9C27B0"
  },
  {
    "id": 49,
    "extinto": "BONIS LUCIA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "30",
    "latitud": -31.56718567,
    "longitud": -63.51623379,
    "color_sector": "#9C27B0"
  },
  {
    "id": 50,
    "extinto": "ALDANA  TISSERA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "45",
    "latitud": -31.56701249,
    "longitud": -63.51619061,
    "color_sector": "#9C27B0"
  },
  {
    "id": 51,
    "extinto": "MIRETTI  WALTER  RAFAEL",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "47",
    "latitud": -31.56703469,
    "longitud": -63.51619942,
    "color_sector": "#9C27B0"
  },
  {
    "id": 52,
    "extinto": "FELISA DEL ROSARIO CUELLO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "50",
    "latitud": -31.56706799,
    "longitud": -63.51621265,
    "color_sector": "#9C27B0"
  },
  {
    "id": 53,
    "extinto": "ARMENDIA PEDRO LAURIANO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "50",
    "latitud": -31.56706799,
    "longitud": -63.51621265,
    "color_sector": "#9C27B0"
  },
  {
    "id": 54,
    "extinto": "CAVALLO HERMINIO EPIFANIO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "54",
    "latitud": -31.56711239,
    "longitud": -63.51623028,
    "color_sector": "#9C27B0"
  },
  {
    "id": 55,
    "extinto": "BARMAN ADELINA CELINA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "54",
    "latitud": -31.56711239,
    "longitud": -63.51623028,
    "color_sector": "#9C27B0"
  },
  {
    "id": 56,
    "extinto": "LILIAM ALMADA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "55",
    "latitud": -31.56712349,
    "longitud": -63.51623469,
    "color_sector": "#9C27B0"
  },
  {
    "id": 57,
    "extinto": "LORENZO ASCUET",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "55",
    "latitud": -31.56712349,
    "longitud": -63.51623469,
    "color_sector": "#9C27B0"
  },
  {
    "id": 58,
    "extinto": "LUIS HORACIO ASCUET",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "55",
    "latitud": -31.56712349,
    "longitud": -63.51623469,
    "color_sector": "#9C27B0"
  },
  {
    "id": 59,
    "extinto": "GOTTARDELLO JUAN LEONARDO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "59",
    "latitud": -31.56716789,
    "longitud": -63.51625232,
    "color_sector": "#9C27B0"
  },
  {
    "id": 60,
    "extinto": "MARCATO NELLY ANITA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "61",
    "latitud": -31.56684896,
    "longitud": -63.51615681,
    "color_sector": "#9C27B0"
  },
  {
    "id": 61,
    "extinto": "ALFREDO ALSIDE MARGARIA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "62",
    "latitud": -31.56686006,
    "longitud": -63.51616122,
    "color_sector": "#9C27B0"
  },
  {
    "id": 62,
    "extinto": "VICTOR HUGO ROSSO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "63",
    "latitud": -31.56687116,
    "longitud": -63.51616563,
    "color_sector": "#9C27B0"
  },
  {
    "id": 63,
    "extinto": "CARLOS ALBERTO COMBA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "64",
    "latitud": -31.56688226,
    "longitud": -63.51617004,
    "color_sector": "#9C27B0"
  },
  {
    "id": 64,
    "extinto": "BRAVI  JUAN BAUTISTA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "83",
    "latitud": -31.56709316,
    "longitud": -63.5162538,
    "color_sector": "#9C27B0"
  },
  {
    "id": 65,
    "extinto": "ELSA MARGARITA BUFFA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "83",
    "latitud": -31.56709316,
    "longitud": -63.5162538,
    "color_sector": "#9C27B0"
  },
  {
    "id": 66,
    "extinto": "JOSE ALFONSO ROJAS",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "90",
    "latitud": -31.56717086,
    "longitud": -63.51628465,
    "color_sector": "#9C27B0"
  },
  {
    "id": 67,
    "extinto": "RAUL ANTONIO BUSANO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "91",
    "latitud": -31.56684229,
    "longitud": -63.51617975,
    "color_sector": "#9C27B0"
  },
  {
    "id": 68,
    "extinto": "MANUEL EDUARDO CANO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "110",
    "latitud": -31.56705319,
    "longitud": -63.51626351,
    "color_sector": "#9C27B0"
  },
  {
    "id": 69,
    "extinto": "ZANELLA LUIS LINDOR",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "120",
    "latitud": -31.56716419,
    "longitud": -63.51630759,
    "color_sector": "#9C27B0"
  },
  {
    "id": 70,
    "extinto": "PEREZ ROSA ADELINA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "120",
    "latitud": -31.56716419,
    "longitud": -63.51630759,
    "color_sector": "#9C27B0"
  },
  {
    "id": 71,
    "extinto": "AMADO JULIO DEL VALLE PEREZ",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "180",
    "latitud": -31.56715083,
    "longitud": -63.51635346,
    "color_sector": "#9C27B0"
  },
  {
    "id": 72,
    "extinto": "ROSA LIRIA LUDUEÑA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "180",
    "latitud": -31.56715083,
    "longitud": -63.51635346,
    "color_sector": "#9C27B0"
  },
  {
    "id": 73,
    "extinto": "ARGUELLO JOSE RAIMUNDO FERNANDO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "210",
    "latitud": -31.5671427,
    "longitud": -63.51638139,
    "color_sector": "#9C27B0"
  },
  {
    "id": 74,
    "extinto": "OSCAR ANIBAL FRIZZO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "240",
    "latitud": -31.56713602,
    "longitud": -63.51640432,
    "color_sector": "#9C27B0"
  },
  {
    "id": 75,
    "extinto": "ALDO AMADEO LARDELLI",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "25",
    "latitud": -31.56718237,
    "longitud": -63.51644961,
    "color_sector": "#9C27B0"
  },
  {
    "id": 76,
    "extinto": "ELIDA  CATALINA  MARTINEZ",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "51",
    "latitud": -31.56717568,
    "longitud": -63.51647254,
    "color_sector": "#9C27B0"
  },
  {
    "id": 77,
    "extinto": "SCARAFFIA EDITH ESTHER",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "52",
    "latitud": -31.56718677,
    "longitud": -63.51647696,
    "color_sector": "#9C27B0"
  },
  {
    "id": 78,
    "extinto": "GARINO ELPIDIO",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "52",
    "latitud": -31.56718677,
    "longitud": -63.51647696,
    "color_sector": "#9C27B0"
  },
  {
    "id": 79,
    "extinto": "PAVON ALDO FEDERICO",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "53",
    "latitud": -31.5669012,
    "longitud": -63.5163944,
    "color_sector": "#9C27B0"
  },
  {
    "id": 80,
    "extinto": "PAVON JUAN ANTONIO",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "54",
    "latitud": -31.5669123,
    "longitud": -63.51639882,
    "color_sector": "#9C27B0"
  },
  {
    "id": 81,
    "extinto": "ESTHER TECLA CALCATERRA",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "75",
    "latitud": -31.56714534,
    "longitud": -63.51649162,
    "color_sector": "#9C27B0"
  },
  {
    "id": 82,
    "extinto": "JOSE ANTONIO ALBANO",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "75",
    "latitud": -31.56714534,
    "longitud": -63.51649162,
    "color_sector": "#9C27B0"
  },
  {
    "id": 83,
    "extinto": "MIGUEL GUERRERO",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "77",
    "latitud": -31.56716753,
    "longitud": -63.51650046,
    "color_sector": "#9C27B0"
  },
  {
    "id": 84,
    "extinto": "CALCATERRA BEATRIZ",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "78",
    "latitud": -31.56717863,
    "longitud": -63.51650487,
    "color_sector": "#9C27B0"
  },
  {
    "id": 85,
    "extinto": "RAMON FERNANDO CERDA",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "102",
    "latitud": -31.56714974,
    "longitud": -63.51651897,
    "color_sector": "#9C27B0"
  },
  {
    "id": 86,
    "extinto": "ALDO ALFREDO ARTUSO",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "103",
    "latitud": -31.56716083,
    "longitud": -63.51652339,
    "color_sector": "#9C27B0"
  },
  {
    "id": 87,
    "extinto": "CHIAPPERO CESAR DARIO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "10",
    "latitud": -31.56709952,
    "longitud": -63.51652584,
    "color_sector": "#9C27B0"
  },
  {
    "id": 88,
    "extinto": "EMA ROSA BOARINO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "10",
    "latitud": -31.56709952,
    "longitud": -63.51652584,
    "color_sector": "#9C27B0"
  },
  {
    "id": 89,
    "extinto": "JUAN ANTONIO CHIAPPERO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "10",
    "latitud": -31.56709952,
    "longitud": -63.51652584,
    "color_sector": "#9C27B0"
  },
  {
    "id": 90,
    "extinto": "MARIO OSCAR DIAZ",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "10",
    "latitud": -31.56709952,
    "longitud": -63.51652584,
    "color_sector": "#9C27B0"
  },
  {
    "id": 91,
    "extinto": "PEDRO  GREGORIO DIAZ",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "10",
    "latitud": -31.56709952,
    "longitud": -63.51652584,
    "color_sector": "#9C27B0"
  },
  {
    "id": 92,
    "extinto": "ELVIO RENEE JULIO OGGIONE",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "20",
    "latitud": -31.56709276,
    "longitud": -63.51654874,
    "color_sector": "#9C27B0"
  },
  {
    "id": 93,
    "extinto": "MARIA RAQUEL MARTINEZ",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "20",
    "latitud": -31.56709276,
    "longitud": -63.51654874,
    "color_sector": "#9C27B0"
  },
  {
    "id": 94,
    "extinto": "TORRES ALEJANDRO JOSE",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "28",
    "latitud": -31.56706235,
    "longitud": -63.51656769,
    "color_sector": "#9C27B0"
  },
  {
    "id": 95,
    "extinto": "PASQUINI ERNESTO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "29",
    "latitud": -31.56707343,
    "longitud": -63.51657216,
    "color_sector": "#9C27B0"
  },
  {
    "id": 96,
    "extinto": "PASQUINI NORA CAROLINA",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "30",
    "latitud": -31.56708452,
    "longitud": -63.51657662,
    "color_sector": "#9C27B0"
  },
  {
    "id": 97,
    "extinto": "CANGA EDELMIRA",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "30",
    "latitud": -31.56708452,
    "longitud": -63.51657662,
    "color_sector": "#9C27B0"
  },
  {
    "id": 98,
    "extinto": "MORICONI ROBERTO ANTONIO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "34",
    "latitud": -31.56701136,
    "longitud": -63.51657287,
    "color_sector": "#9C27B0"
  },
  {
    "id": 99,
    "extinto": "DOMINGO CABALLERO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "40",
    "latitud": -31.56707775,
    "longitud": -63.51659952,
    "color_sector": "#9C27B0"
  },
  {
    "id": 100,
    "extinto": "COLAZO LIRIA ORFELIA",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "40",
    "latitud": -31.56707775,
    "longitud": -63.51659952,
    "color_sector": "#9C27B0"
  },
  {
    "id": 101,
    "extinto": "PATRICIA  ELIZABET  CABALLERO",
    "sector": "VIOLETA",
    "lote": "5",
    "nro": "40",
    "latitud": -31.56707775,
    "longitud": -63.51659952,
    "color_sector": "#9C27B0"
  },
  {
    "id": 102,
    "extinto": "DELLACCECA PABLO MANUEL",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "3",
    "latitud": -31.56690645,
    "longitud": -63.5166056,
    "color_sector": "#9C27B0"
  },
  {
    "id": 103,
    "extinto": "WILFRIDO MARTIN GOMEZ",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "10",
    "latitud": -31.56698774,
    "longitud": -63.51659245,
    "color_sector": "#9C27B0"
  },
  {
    "id": 104,
    "extinto": "MOISES DIEGO GOMEZ",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "10",
    "latitud": -31.56698774,
    "longitud": -63.51659245,
    "color_sector": "#9C27B0"
  },
  {
    "id": 105,
    "extinto": "MARIA IGNACIA TECERA",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "10",
    "latitud": -31.56698774,
    "longitud": -63.51659245,
    "color_sector": "#9C27B0"
  },
  {
    "id": 106,
    "extinto": "FRUCTUOSO EDUARDO MEYER",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "26",
    "latitud": -31.5669476,
    "longitud": -63.51665317,
    "color_sector": "#9C27B0"
  },
  {
    "id": 107,
    "extinto": "CHIAPPERO ADOLFO SANTIAGO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "27",
    "latitud": -31.56695921,
    "longitud": -63.51665129,
    "color_sector": "#9C27B0"
  },
  {
    "id": 108,
    "extinto": "CORRENTINA PEREYRA",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "27",
    "latitud": -31.56695921,
    "longitud": -63.51665129,
    "color_sector": "#9C27B0"
  },
  {
    "id": 109,
    "extinto": "MATILDE ERNESTINA HERMANN",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "29",
    "latitud": -31.56698244,
    "longitud": -63.51664754,
    "color_sector": "#9C27B0"
  },
  {
    "id": 110,
    "extinto": "NILO ADALBERTO BETTEGA",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "29",
    "latitud": -31.56698244,
    "longitud": -63.51664754,
    "color_sector": "#9C27B0"
  },
  {
    "id": 111,
    "extinto": "NILO BETTEGA",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "29",
    "latitud": -31.56698244,
    "longitud": -63.51664754,
    "color_sector": "#9C27B0"
  },
  {
    "id": 112,
    "extinto": "VICTORIA ANTONIA MARIA OLIVIERI",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "31",
    "latitud": -31.56689237,
    "longitud": -63.51668656,
    "color_sector": "#9C27B0"
  },
  {
    "id": 113,
    "extinto": "NESTOR ATILIO GARINO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "31",
    "latitud": -31.56689237,
    "longitud": -63.51668656,
    "color_sector": "#9C27B0"
  },
  {
    "id": 114,
    "extinto": "OSCAR ATILIO GARINO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "33",
    "latitud": -31.5669156,
    "longitud": -63.5166828,
    "color_sector": "#9C27B0"
  },
  {
    "id": 115,
    "extinto": "ALDO VALENTIN CROTTO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "35",
    "latitud": -31.56693883,
    "longitud": -63.51667905,
    "color_sector": "#9C27B0"
  },
  {
    "id": 116,
    "extinto": "ALMA VALENTINA BARRA CROTTO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "36",
    "latitud": -31.56695044,
    "longitud": -63.51667717,
    "color_sector": "#9C27B0"
  },
  {
    "id": 117,
    "extinto": "JUAN CARMEN ARGUELLO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "37",
    "latitud": -31.56696205,
    "longitud": -63.51667529,
    "color_sector": "#9C27B0"
  },
  {
    "id": 118,
    "extinto": "JESUS MARIA GALBUSERA",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "39",
    "latitud": -31.56698528,
    "longitud": -63.51667154,
    "color_sector": "#9C27B0"
  },
  {
    "id": 119,
    "extinto": "VILMA ANTONIA BELTRAMO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "40",
    "latitud": -31.56699689,
    "longitud": -63.51666966,
    "color_sector": "#9C27B0"
  },
  {
    "id": 120,
    "extinto": "RICARDO HECTOR GIRAUDO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "40",
    "latitud": -31.56699689,
    "longitud": -63.51666966,
    "color_sector": "#9C27B0"
  },
  {
    "id": 121,
    "extinto": "VICENTA ANTONIA VERDUNA",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "8",
    "latitud": -31.56646967,
    "longitud": -63.51636682,
    "color_sector": "#FF9800"
  },
  {
    "id": 122,
    "extinto": "LELIS DEL CARMEN GIGENA",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "12",
    "latitud": -31.56651319,
    "longitud": -63.51638721,
    "color_sector": "#FF9800"
  },
  {
    "id": 123,
    "extinto": "ZANELLA VICTOR",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "1",
    "latitud": -31.56646651,
    "longitud": -63.51633924,
    "color_sector": "#FF9800"
  },
  {
    "id": 124,
    "extinto": "GIANOTTI MARIA LIDIA",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "1",
    "latitud": -31.56646651,
    "longitud": -63.51633924,
    "color_sector": "#FF9800"
  },
  {
    "id": 125,
    "extinto": "AMELIA ISABEL SALORT",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "9",
    "latitud": -31.56648055,
    "longitud": -63.51637192,
    "color_sector": "#FF9800"
  },
  {
    "id": 126,
    "extinto": "ENRIQUE FRANCISCO SCARONI",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "11",
    "latitud": -31.56650231,
    "longitud": -63.51638211,
    "color_sector": "#FF9800"
  },
  {
    "id": 127,
    "extinto": "SUTER ELVIO ROBERTO",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "6",
    "latitud": -31.56652091,
    "longitud": -63.51636473,
    "color_sector": "#FF9800"
  },
  {
    "id": 128,
    "extinto": "VICTORIA BRACAMONTE",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "6",
    "latitud": -31.56652091,
    "longitud": -63.51636473,
    "color_sector": "#FF9800"
  },
  {
    "id": 129,
    "extinto": "LUIS DELMIRO ZANELLA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "1",
    "latitud": -31.56636672,
    "longitud": -63.51629066,
    "color_sector": "#FF9800"
  },
  {
    "id": 130,
    "extinto": "DALMA YAMILE CAVALLI",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "2",
    "latitud": -31.56637761,
    "longitud": -63.51629576,
    "color_sector": "#FF9800"
  },
  {
    "id": 131,
    "extinto": "LUIS ENRIQUE VANAY",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "4",
    "latitud": -31.56639937,
    "longitud": -63.51630595,
    "color_sector": "#FF9800"
  },
  {
    "id": 132,
    "extinto": "IRMA VALENTINA LUDUEÑA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "4",
    "latitud": -31.56639937,
    "longitud": -63.51630595,
    "color_sector": "#FF9800"
  },
  {
    "id": 133,
    "extinto": "DIEGO FERNANDO ALBERT",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "4",
    "latitud": -31.56639937,
    "longitud": -63.51630595,
    "color_sector": "#FF9800"
  },
  {
    "id": 134,
    "extinto": "ELSA OLGA DELGADO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "5",
    "latitud": -31.56641025,
    "longitud": -63.51631105,
    "color_sector": "#FF9800"
  },
  {
    "id": 135,
    "extinto": "MARIA ROSARIO DELGADO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "5",
    "latitud": -31.56641025,
    "longitud": -63.51631105,
    "color_sector": "#FF9800"
  },
  {
    "id": 136,
    "extinto": "VILLARREAL MERCEDEZ",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "6",
    "latitud": -31.56642113,
    "longitud": -63.51631615,
    "color_sector": "#FF9800"
  },
  {
    "id": 137,
    "extinto": "LUQUE ANGEL MARIANO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "6",
    "latitud": -31.56642113,
    "longitud": -63.51631615,
    "color_sector": "#FF9800"
  },
  {
    "id": 138,
    "extinto": "LUDUEÑA TEODOLINA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "6",
    "latitud": -31.56642113,
    "longitud": -63.51631615,
    "color_sector": "#FF9800"
  },
  {
    "id": 139,
    "extinto": "LUQUE GRACIELA DEL ROSARIO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "6",
    "latitud": -31.56642113,
    "longitud": -63.51631615,
    "color_sector": "#FF9800"
  },
  {
    "id": 140,
    "extinto": "MIRTA NOEMI DEL VALLE CEAGLIO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "7",
    "latitud": -31.56643201,
    "longitud": -63.51632124,
    "color_sector": "#FF9800"
  },
  {
    "id": 141,
    "extinto": "MIRIAN DEL VALLE SARABIA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "8",
    "latitud": -31.56644289,
    "longitud": -63.51632634,
    "color_sector": "#FF9800"
  },
  {
    "id": 142,
    "extinto": "CAUDANA ELVIO JUAN",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "9",
    "latitud": -31.56645378,
    "longitud": -63.51633144,
    "color_sector": "#FF9800"
  },
  {
    "id": 143,
    "extinto": "JORGE NORBERTO BRARDA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "11",
    "latitud": -31.56636988,
    "longitud": -63.51631824,
    "color_sector": "#FF9800"
  },
  {
    "id": 144,
    "extinto": "FERNANDEZ CECILIA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "12",
    "latitud": -31.56638077,
    "longitud": -63.51632334,
    "color_sector": "#FF9800"
  },
  {
    "id": 145,
    "extinto": "JUAN CARLOS FERNANDEZ",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "12",
    "latitud": -31.56638077,
    "longitud": -63.51632334,
    "color_sector": "#FF9800"
  },
  {
    "id": 146,
    "extinto": "SILVA MATEO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "13",
    "latitud": -31.56639165,
    "longitud": -63.51632844,
    "color_sector": "#FF9800"
  },
  {
    "id": 147,
    "extinto": "GOMEZ MARIA ELVIRA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "13",
    "latitud": -31.56639165,
    "longitud": -63.51632844,
    "color_sector": "#FF9800"
  },
  {
    "id": 148,
    "extinto": "EMA TABORDA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "14",
    "latitud": -31.56640253,
    "longitud": -63.51633353,
    "color_sector": "#FF9800"
  },
  {
    "id": 149,
    "extinto": "JUAN EDUARDO CASTELLANO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "14",
    "latitud": -31.56640253,
    "longitud": -63.51633353,
    "color_sector": "#FF9800"
  },
  {
    "id": 150,
    "extinto": "TOLOZA HUGO ALFREDO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "15",
    "latitud": -31.56641341,
    "longitud": -63.51633863,
    "color_sector": "#FF9800"
  },
  {
    "id": 151,
    "extinto": "ANGELA ESTER DE SAN ROMAN LUQUE",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "15",
    "latitud": -31.56641341,
    "longitud": -63.51633863,
    "color_sector": "#FF9800"
  },
  {
    "id": 152,
    "extinto": "MARIANA ANDREA ROBLEDO",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "16",
    "latitud": -31.56642429,
    "longitud": -63.51634373,
    "color_sector": "#FF9800"
  },
  {
    "id": 153,
    "extinto": "LIENDO ABRAHAN LUIS",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "60",
    "latitud": -31.56684411,
    "longitud": -63.51558713,
    "color_sector": "#FF9800"
  },
  {
    "id": 154,
    "extinto": "AGUSTIN PINOS",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "60",
    "latitud": -31.56684411,
    "longitud": -63.51558713,
    "color_sector": "#FF9800"
  },
  {
    "id": 155,
    "extinto": "AURELIA MARIA LAURENTI",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "60",
    "latitud": -31.56684411,
    "longitud": -63.51558713,
    "color_sector": "#FF9800"
  },
  {
    "id": 156,
    "extinto": "LUCCHESI ERNESTO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "1",
    "latitud": -31.56641969,
    "longitud": -63.51620662,
    "color_sector": "#FF9800"
  },
  {
    "id": 157,
    "extinto": "MANZOTTI CELITA LUISA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "1",
    "latitud": -31.56641969,
    "longitud": -63.51620662,
    "color_sector": "#FF9800"
  },
  {
    "id": 158,
    "extinto": "ERNESTO ENRIQUE LUCCHESI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "1",
    "latitud": -31.56641969,
    "longitud": -63.51620662,
    "color_sector": "#FF9800"
  },
  {
    "id": 159,
    "extinto": "MACHADO MARIA TERESA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "4",
    "latitud": -31.56645067,
    "longitud": -63.51622605,
    "color_sector": "#FF9800"
  },
  {
    "id": 160,
    "extinto": "PEDRO JOSE MACHADO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "4",
    "latitud": -31.56645067,
    "longitud": -63.51622605,
    "color_sector": "#FF9800"
  },
  {
    "id": 161,
    "extinto": "MACHADO RAMON ALFREDO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "5",
    "latitud": -31.566461,
    "longitud": -63.51623253,
    "color_sector": "#FF9800"
  },
  {
    "id": 162,
    "extinto": "HECTOR ALDO QUEVEDO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "6",
    "latitud": -31.56647133,
    "longitud": -63.51623901,
    "color_sector": "#FF9800"
  },
  {
    "id": 163,
    "extinto": "ESCEQUIEL MONCADA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "8",
    "latitud": -31.56649199,
    "longitud": -63.51625196,
    "color_sector": "#FF9800"
  },
  {
    "id": 164,
    "extinto": "JOSE  ANGEL  LUDUEÑA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "9",
    "latitud": -31.56650232,
    "longitud": -63.51625844,
    "color_sector": "#FF9800"
  },
  {
    "id": 165,
    "extinto": "PASCUAL  GERONIMO  BRANDAN",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "10",
    "latitud": -31.56651265,
    "longitud": -63.51626491,
    "color_sector": "#FF9800"
  },
  {
    "id": 166,
    "extinto": "QUINTEROS HUGO DANTE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "11",
    "latitud": -31.56652298,
    "longitud": -63.51627139,
    "color_sector": "#FF9800"
  },
  {
    "id": 167,
    "extinto": "FERREYRA CARLOS ELADIO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "12",
    "latitud": -31.56653331,
    "longitud": -63.51627787,
    "color_sector": "#FF9800"
  },
  {
    "id": 168,
    "extinto": "PERALTA AMELIA DEL ROSARIO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "12",
    "latitud": -31.56653331,
    "longitud": -63.51627787,
    "color_sector": "#FF9800"
  },
  {
    "id": 169,
    "extinto": "FERREYRA RAMON ANGEL",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "12",
    "latitud": -31.56653331,
    "longitud": -63.51627787,
    "color_sector": "#FF9800"
  },
  {
    "id": 170,
    "extinto": "EDUARDO SEGUNDO ARCE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "14",
    "latitud": -31.56655397,
    "longitud": -63.51629082,
    "color_sector": "#FF9800"
  },
  {
    "id": 171,
    "extinto": "ABILIA REINA VACA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "14",
    "latitud": -31.56655397,
    "longitud": -63.51629082,
    "color_sector": "#FF9800"
  },
  {
    "id": 172,
    "extinto": "ENRIQUE O MANZOTTI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "16",
    "latitud": -31.5664202,
    "longitud": -63.51623444,
    "color_sector": "#FF9800"
  },
  {
    "id": 173,
    "extinto": "MANZOTTI ENRIQUE EDUARDO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "16",
    "latitud": -31.5664202,
    "longitud": -63.51623444,
    "color_sector": "#FF9800"
  },
  {
    "id": 174,
    "extinto": "CUGAT RODOLFO DEL VALLE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "17",
    "latitud": -31.56643053,
    "longitud": -63.51624092,
    "color_sector": "#FF9800"
  },
  {
    "id": 175,
    "extinto": "QUINTEROS HECTOR NICOLAS",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "18",
    "latitud": -31.56644086,
    "longitud": -63.5162474,
    "color_sector": "#FF9800"
  },
  {
    "id": 176,
    "extinto": "LUDUEÑA JULIO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "20",
    "latitud": -31.56646152,
    "longitud": -63.51626035,
    "color_sector": "#FF9800"
  },
  {
    "id": 177,
    "extinto": "BERTONI DANTE MARIA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "23",
    "latitud": -31.56649251,
    "longitud": -63.51627978,
    "color_sector": "#FF9800"
  },
  {
    "id": 178,
    "extinto": "CISTERNA BLANCA NIEVE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "23",
    "latitud": -31.56649251,
    "longitud": -63.51627978,
    "color_sector": "#FF9800"
  },
  {
    "id": 179,
    "extinto": "CEPEDA MIGUEL ANGEL",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "25",
    "latitud": -31.56651317,
    "longitud": -63.51629274,
    "color_sector": "#FF9800"
  },
  {
    "id": 180,
    "extinto": "LUISA  ZULMA  ANDRES",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "25",
    "latitud": -31.56651317,
    "longitud": -63.51629274,
    "color_sector": "#FF9800"
  },
  {
    "id": 181,
    "extinto": "RUBEN FERNANDO ANIBALE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "26",
    "latitud": -31.5665235,
    "longitud": -63.51629921,
    "color_sector": "#FF9800"
  },
  {
    "id": 182,
    "extinto": "ANTONIO FLORENCIO LUQUE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "27",
    "latitud": -31.56653383,
    "longitud": -63.51630569,
    "color_sector": "#FF9800"
  },
  {
    "id": 183,
    "extinto": "CISNEROS MIGUEL ALEJANDRO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "28",
    "latitud": -31.56654416,
    "longitud": -63.51631217,
    "color_sector": "#FF9800"
  },
  {
    "id": 184,
    "extinto": "TERESA MARIA MANZOTTI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "29",
    "latitud": -31.56640006,
    "longitud": -63.51624931,
    "color_sector": "#FF9800"
  },
  {
    "id": 185,
    "extinto": "MANZOTTI ENRIQUE",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "29",
    "latitud": -31.56640006,
    "longitud": -63.51624931,
    "color_sector": "#FF9800"
  },
  {
    "id": 186,
    "extinto": "MOMBRINO MANZOTTI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "29",
    "latitud": -31.56640006,
    "longitud": -63.51624931,
    "color_sector": "#FF9800"
  },
  {
    "id": 187,
    "extinto": "ADELA REGNICOLI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "29",
    "latitud": -31.56640006,
    "longitud": -63.51624931,
    "color_sector": "#FF9800"
  },
  {
    "id": 188,
    "extinto": "RAMON PALAZON ESTEVES",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "30",
    "latitud": -31.56641039,
    "longitud": -63.51625579,
    "color_sector": "#FF9800"
  },
  {
    "id": 189,
    "extinto": "JOSEFA DELTEL DE PALAZON",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "30",
    "latitud": -31.56641039,
    "longitud": -63.51625579,
    "color_sector": "#FF9800"
  },
  {
    "id": 190,
    "extinto": "LUIS PALAZON ESTEVES",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "30",
    "latitud": -31.56641039,
    "longitud": -63.51625579,
    "color_sector": "#FF9800"
  },
  {
    "id": 191,
    "extinto": "LIDIA ESTER PALAZON DE FORT",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "30",
    "latitud": -31.56641039,
    "longitud": -63.51625579,
    "color_sector": "#FF9800"
  },
  {
    "id": 192,
    "extinto": "CONSUELO PALAZON",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "30",
    "latitud": -31.56641039,
    "longitud": -63.51625579,
    "color_sector": "#FF9800"
  },
  {
    "id": 193,
    "extinto": "PALAZON DANIEL FERNANDO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "31",
    "latitud": -31.56642072,
    "longitud": -63.51626226,
    "color_sector": "#FF9800"
  },
  {
    "id": 194,
    "extinto": "RAMON ALFREDO PALAZON",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "31",
    "latitud": -31.56642072,
    "longitud": -63.51626226,
    "color_sector": "#FF9800"
  },
  {
    "id": 195,
    "extinto": "NILDE MARIA TERESA RAIMONDETTO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "31",
    "latitud": -31.56642072,
    "longitud": -63.51626226,
    "color_sector": "#FF9800"
  },
  {
    "id": 196,
    "extinto": "CONTI ANGELA FRANCISCA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "32",
    "latitud": -31.56643105,
    "longitud": -63.51626874,
    "color_sector": "#FF9800"
  },
  {
    "id": 197,
    "extinto": "ELPIDIO CISTERNA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "32",
    "latitud": -31.56643105,
    "longitud": -63.51626874,
    "color_sector": "#FF9800"
  },
  {
    "id": 198,
    "extinto": "NAVARRO MARIA ANGELINA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "33",
    "latitud": -31.56644138,
    "longitud": -63.51627522,
    "color_sector": "#FF9800"
  },
  {
    "id": 199,
    "extinto": "LISONI JOSE MIGUEL",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "33",
    "latitud": -31.56644138,
    "longitud": -63.51627522,
    "color_sector": "#FF9800"
  },
  {
    "id": 200,
    "extinto": "FRANCISCO JOSE MIGUEZ MARTINEZ",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "34",
    "latitud": -31.56645171,
    "longitud": -63.5162817,
    "color_sector": "#FF9800"
  },
  {
    "id": 201,
    "extinto": "EDITH BONGIOVANNI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "34",
    "latitud": -31.56645171,
    "longitud": -63.5162817,
    "color_sector": "#FF9800"
  },
  {
    "id": 202,
    "extinto": "GOMEZ MERCEDES CERERA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "36",
    "latitud": -31.56647237,
    "longitud": -63.51629465,
    "color_sector": "#FF9800"
  },
  {
    "id": 203,
    "extinto": "MILANESSO SALVADOR ADEMAR",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "37",
    "latitud": -31.5664827,
    "longitud": -63.51630113,
    "color_sector": "#FF9800"
  },
  {
    "id": 204,
    "extinto": "BUSTAMANTE ERNESTO FRANCISACO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "38",
    "latitud": -31.56649303,
    "longitud": -63.5163076,
    "color_sector": "#FF9800"
  },
  {
    "id": 205,
    "extinto": "ALMADA DIDIMO ALBERTO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "39",
    "latitud": -31.56650336,
    "longitud": -63.51631408,
    "color_sector": "#FF9800"
  },
  {
    "id": 206,
    "extinto": "JORGE ALBERTO MANZOTTI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "40",
    "latitud": -31.56651369,
    "longitud": -63.51632056,
    "color_sector": "#FF9800"
  },
  {
    "id": 207,
    "extinto": "HECTOR HUGO MANZOTTI",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "40",
    "latitud": -31.56651369,
    "longitud": -63.51632056,
    "color_sector": "#FF9800"
  },
  {
    "id": 208,
    "extinto": "ARTURO CESAR FERREYRA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "41",
    "latitud": -31.56652402,
    "longitud": -63.51632704,
    "color_sector": "#FF9800"
  },
  {
    "id": 209,
    "extinto": "GRAS RAMONA RITA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "41",
    "latitud": -31.56652402,
    "longitud": -63.51632704,
    "color_sector": "#FF9800"
  },
  {
    "id": 210,
    "extinto": "LASCANO ERNESTINA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "41",
    "latitud": -31.56652402,
    "longitud": -63.51632704,
    "color_sector": "#FF9800"
  },
  {
    "id": 211,
    "extinto": "ALMADA FEDERICO ESTEBAN",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "42",
    "latitud": -31.56653435,
    "longitud": -63.51633351,
    "color_sector": "#FF9800"
  },
  {
    "id": 212,
    "extinto": "MONCADA EUSEBIA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "42",
    "latitud": -31.56653435,
    "longitud": -63.51633351,
    "color_sector": "#FF9800"
  },
  {
    "id": 213,
    "extinto": "ALMADA GABRIEL DARIO",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "42",
    "latitud": -31.56653435,
    "longitud": -63.51633351,
    "color_sector": "#FF9800"
  },
  {
    "id": 214,
    "extinto": "MARGARITA MAGDALENA BROCELLI",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "1",
    "latitud": -31.56640141,
    "longitud": -63.51608233,
    "color_sector": "#FF9800"
  },
  {
    "id": 215,
    "extinto": "PEDRO CACIORGNA",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "1",
    "latitud": -31.56640141,
    "longitud": -63.51608233,
    "color_sector": "#FF9800"
  },
  {
    "id": 216,
    "extinto": "ERMETI ARMANDO NOVELLI",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "15",
    "latitud": -31.56637992,
    "longitud": -63.51617483,
    "color_sector": "#FF9800"
  },
  {
    "id": 217,
    "extinto": "CARLOS EMILIO LOPEZ",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "19",
    "latitud": -31.56637378,
    "longitud": -63.51620127,
    "color_sector": "#FF9800"
  },
  {
    "id": 218,
    "extinto": "JUAN MICAHELA MARGARITA",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "21",
    "latitud": -31.56637071,
    "longitud": -63.51621448,
    "color_sector": "#FF9800"
  },
  {
    "id": 219,
    "extinto": "DEIDERI JOSE ISIDORO",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "21",
    "latitud": -31.56637071,
    "longitud": -63.51621448,
    "color_sector": "#FF9800"
  },
  {
    "id": 220,
    "extinto": "ROBERTO OMAR SOSA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "1",
    "latitud": -31.56645032,
    "longitud": -63.51587619,
    "color_sector": "#FF9800"
  },
  {
    "id": 221,
    "extinto": "ANA PANERO DE SOSA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "3",
    "latitud": -31.56644718,
    "longitud": -63.51588939,
    "color_sector": "#FF9800"
  },
  {
    "id": 222,
    "extinto": "SEVERO SOSA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "3",
    "latitud": -31.56644718,
    "longitud": -63.51588939,
    "color_sector": "#FF9800"
  },
  {
    "id": 223,
    "extinto": "MAXIMO SOSA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "3",
    "latitud": -31.56644718,
    "longitud": -63.51588939,
    "color_sector": "#FF9800"
  },
  {
    "id": 224,
    "extinto": "ROBERTO  RUIZ",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "14",
    "latitud": -31.56645146,
    "longitud": -63.51596184,
    "color_sector": "#FF9800"
  },
  {
    "id": 225,
    "extinto": "SANTINO BENJAMIN GARCIA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "25",
    "latitud": -31.56641263,
    "longitud": -63.51603451,
    "color_sector": "#FF9800"
  },
  {
    "id": 226,
    "extinto": "MEDINA SANDRA BEATRIZ",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "27",
    "latitud": -31.56640949,
    "longitud": -63.5160477,
    "color_sector": "#FF9800"
  },
  {
    "id": 227,
    "extinto": "CARABANTE GLORIA ANA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "29",
    "latitud": -31.56640635,
    "longitud": -63.51606089,
    "color_sector": "#FF9800"
  },
  {
    "id": 228,
    "extinto": "TEJEDA LAURENCIO HECTOR",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "29",
    "latitud": -31.56640635,
    "longitud": -63.51606089,
    "color_sector": "#FF9800"
  },
  {
    "id": 229,
    "extinto": "EDUARDO DANIEL CACIORGNA",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "30",
    "latitud": -31.56642633,
    "longitud": -63.51606738,
    "color_sector": "#FF9800"
  },
  {
    "id": 230,
    "extinto": "NAVARRO JOSE MARIA",
    "sector": "NARANJA",
    "lote": "12",
    "nro": "2",
    "latitud": -31.56650604,
    "longitud": -63.5157211,
    "color_sector": "#FF9800"
  },
  {
    "id": 231,
    "extinto": "CATALINA  CARMEN  ARNALDI",
    "sector": "NARANJA",
    "lote": "12",
    "nro": "2",
    "latitud": -31.56650604,
    "longitud": -63.5157211,
    "color_sector": "#FF9800"
  },
  {
    "id": 232,
    "extinto": "CARLOS RAMON ROSSI",
    "sector": "NARANJA",
    "lote": "12",
    "nro": "10",
    "latitud": -31.56649429,
    "longitud": -63.51577413,
    "color_sector": "#FF9800"
  },
  {
    "id": 233,
    "extinto": "DE MICHELE GLADYS REMA",
    "sector": "NARANJA",
    "lote": "13",
    "nro": "21",
    "latitud": -31.56649096,
    "longitud": -63.51567319,
    "color_sector": "#FF9800"
  },
  {
    "id": 234,
    "extinto": "MARGARIA OLMAR CLEMENCIO",
    "sector": "NARANJA",
    "lote": "13",
    "nro": "21",
    "latitud": -31.56649096,
    "longitud": -63.51567319,
    "color_sector": "#FF9800"
  },
  {
    "id": 235,
    "extinto": "PABLA  ISABEL  LUDUEÑA",
    "sector": "NARANJA",
    "lote": "14",
    "nro": "1",
    "latitud": -31.56652692,
    "longitud": -63.51536617,
    "color_sector": "#FF9800"
  },
  {
    "id": 236,
    "extinto": "JUSTA CLEMENTINA GARCIA",
    "sector": "NARANJA",
    "lote": "15",
    "nro": "9",
    "latitud": -31.56653573,
    "longitud": -63.51524698,
    "color_sector": "#FF9800"
  },
  {
    "id": 237,
    "extinto": "GRACIELA ALBERT",
    "sector": "NARANJA",
    "lote": "15",
    "nro": "9",
    "latitud": -31.56653573,
    "longitud": -63.51524698,
    "color_sector": "#FF9800"
  },
  {
    "id": 238,
    "extinto": "FRANCISCO JUAN ALBERT",
    "sector": "NARANJA",
    "lote": "15",
    "nro": "9",
    "latitud": -31.56653573,
    "longitud": -63.51524698,
    "color_sector": "#FF9800"
  },
  {
    "id": 239,
    "extinto": "BERTORELLO NIEVE",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "6",
    "latitud": -31.56680032,
    "longitud": -63.51533459,
    "color_sector": "#FF9800"
  },
  {
    "id": 240,
    "extinto": "JOSE VICTORIO CAVALLO",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "6",
    "latitud": -31.56680032,
    "longitud": -63.51533459,
    "color_sector": "#FF9800"
  },
  {
    "id": 241,
    "extinto": "MININ JOSE ANTONIO",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "33",
    "latitud": -31.56678306,
    "longitud": -63.51538624,
    "color_sector": "#FF9800"
  },
  {
    "id": 242,
    "extinto": "MININ LUIS ANTONIO",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "34",
    "latitud": -31.56679259,
    "longitud": -63.51539421,
    "color_sector": "#FF9800"
  },
  {
    "id": 243,
    "extinto": "MININ MANUEL FRANCISCO",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "34",
    "latitud": -31.56679259,
    "longitud": -63.51539421,
    "color_sector": "#FF9800"
  },
  {
    "id": 244,
    "extinto": "MININ IRIS ZULMA",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "35",
    "latitud": -31.56680212,
    "longitud": -63.51540219,
    "color_sector": "#FF9800"
  },
  {
    "id": 245,
    "extinto": "CABRERA ANTONIA VIRGINIA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "1",
    "latitud": -31.56688098,
    "longitud": -63.51540315,
    "color_sector": "#FF9800"
  },
  {
    "id": 246,
    "extinto": "CABRERA NORMA GRACIELA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "1",
    "latitud": -31.56688098,
    "longitud": -63.51540315,
    "color_sector": "#FF9800"
  },
  {
    "id": 247,
    "extinto": "MAXIMO JOEL ZANELLA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "2",
    "latitud": -31.56689052,
    "longitud": -63.51541113,
    "color_sector": "#FF9800"
  },
  {
    "id": 248,
    "extinto": "JORGE  HORACIO  ZANELLA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "2",
    "latitud": -31.56689052,
    "longitud": -63.51541113,
    "color_sector": "#FF9800"
  },
  {
    "id": 249,
    "extinto": "PADRE RICARDO ABEL PALAMARCZUK",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "3",
    "latitud": -31.56690005,
    "longitud": -63.5154191,
    "color_sector": "#FF9800"
  },
  {
    "id": 250,
    "extinto": "BARBERO MAURO QUINTO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "4",
    "latitud": -31.56690958,
    "longitud": -63.51542708,
    "color_sector": "#FF9800"
  },
  {
    "id": 251,
    "extinto": "ETELVINA BERTA SALICRU",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "5",
    "latitud": -31.56691907,
    "longitud": -63.51543505,
    "color_sector": "#FF9800"
  },
  {
    "id": 252,
    "extinto": "BARBERO DELIA ANITA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "6",
    "latitud": -31.56692865,
    "longitud": -63.51544307,
    "color_sector": "#FF9800"
  },
  {
    "id": 253,
    "extinto": "OSCAR PICCINO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "6",
    "latitud": -31.56692865,
    "longitud": -63.51544307,
    "color_sector": "#FF9800"
  },
  {
    "id": 254,
    "extinto": "MIRTA MARIA ESTHER ORLANDI",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "6",
    "latitud": -31.56692865,
    "longitud": -63.51544307,
    "color_sector": "#FF9800"
  },
  {
    "id": 255,
    "extinto": "LUDUEÑA VIVIANA DEL VALLE",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "7",
    "latitud": -31.56693817,
    "longitud": -63.51545101,
    "color_sector": "#FF9800"
  },
  {
    "id": 256,
    "extinto": "GAVIGLIO CLAUDIA BEATRIZ",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "10",
    "latitud": -31.56696676,
    "longitud": -63.51547493,
    "color_sector": "#FF9800"
  },
  {
    "id": 257,
    "extinto": "VALERIA  ESTER  GAVIGLIO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "10",
    "latitud": -31.56696676,
    "longitud": -63.51547493,
    "color_sector": "#FF9800"
  },
  {
    "id": 258,
    "extinto": "JOSE ALBERTO PEIRONE",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "12",
    "latitud": -31.56698582,
    "longitud": -63.51549088,
    "color_sector": "#FF9800"
  },
  {
    "id": 259,
    "extinto": "VICTOR HUGO PEIRONE",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "12",
    "latitud": -31.56698582,
    "longitud": -63.51549088,
    "color_sector": "#FF9800"
  },
  {
    "id": 260,
    "extinto": "SUTER DELFO ROBERTO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "13",
    "latitud": -31.56699535,
    "longitud": -63.51549886,
    "color_sector": "#FF9800"
  },
  {
    "id": 261,
    "extinto": "ADELAIDA MARGARITA BONANCEA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "13",
    "latitud": -31.56699535,
    "longitud": -63.51549886,
    "color_sector": "#FF9800"
  },
  {
    "id": 262,
    "extinto": "PEREZ RAMON ALBERTO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "14",
    "latitud": -31.5668689,
    "longitud": -63.51542285,
    "color_sector": "#FF9800"
  },
  {
    "id": 263,
    "extinto": "MIGUEL ANGEL DIAZ",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "15",
    "latitud": -31.56687843,
    "longitud": -63.51543082,
    "color_sector": "#FF9800"
  },
  {
    "id": 264,
    "extinto": "DEBAR CASIMIRO JAIME",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "17",
    "latitud": -31.56689749,
    "longitud": -63.51544677,
    "color_sector": "#FF9800"
  },
  {
    "id": 265,
    "extinto": "MARIA ANGELA CRISTINA ALMADA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "17",
    "latitud": -31.56689749,
    "longitud": -63.51544677,
    "color_sector": "#FF9800"
  },
  {
    "id": 266,
    "extinto": "ALMADA MIGUEL ANGEL",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "18",
    "latitud": -31.56690702,
    "longitud": -63.51545475,
    "color_sector": "#FF9800"
  },
  {
    "id": 267,
    "extinto": "BARRIONUEVO ROMINA BELEN",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "18",
    "latitud": -31.56690702,
    "longitud": -63.51545475,
    "color_sector": "#FF9800"
  },
  {
    "id": 268,
    "extinto": "BRANDON DIAZ",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "18",
    "latitud": -31.56690702,
    "longitud": -63.51545475,
    "color_sector": "#FF9800"
  },
  {
    "id": 269,
    "extinto": "CALLEJAS HECTOR FABIAN",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "20",
    "latitud": -31.56692608,
    "longitud": -63.5154707,
    "color_sector": "#FF9800"
  },
  {
    "id": 270,
    "extinto": "PICCOLOTTO NILDA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "21",
    "latitud": -31.56693561,
    "longitud": -63.51547868,
    "color_sector": "#FF9800"
  },
  {
    "id": 271,
    "extinto": "LUDUEÑA-LUQUE ANGEL VALENTIN",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "22",
    "latitud": -31.56694515,
    "longitud": -63.51548665,
    "color_sector": "#FF9800"
  },
  {
    "id": 272,
    "extinto": "ARREDONDO GREGORIO RANULFO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "23",
    "latitud": -31.56695468,
    "longitud": -63.51549463,
    "color_sector": "#FF9800"
  },
  {
    "id": 273,
    "extinto": "LUISA ABED",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "23",
    "latitud": -31.56695468,
    "longitud": -63.51549463,
    "color_sector": "#FF9800"
  },
  {
    "id": 274,
    "extinto": "BUSTILLO VICTOR HUGO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "24",
    "latitud": -31.56696421,
    "longitud": -63.5155026,
    "color_sector": "#FF9800"
  },
  {
    "id": 275,
    "extinto": "NN ONTIVERO BUSTILLO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "24",
    "latitud": -31.56696421,
    "longitud": -63.5155026,
    "color_sector": "#FF9800"
  },
  {
    "id": 276,
    "extinto": "MATIAS LEANDRO MIGUEL",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "25",
    "latitud": -31.56697374,
    "longitud": -63.51551058,
    "color_sector": "#FF9800"
  },
  {
    "id": 277,
    "extinto": "DANTE SEBASTIAN MATIAS",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "25",
    "latitud": -31.56697374,
    "longitud": -63.51551058,
    "color_sector": "#FF9800"
  },
  {
    "id": 278,
    "extinto": "ITALO GERONIMO ORTIZ",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "25",
    "latitud": -31.56697374,
    "longitud": -63.51551058,
    "color_sector": "#FF9800"
  },
  {
    "id": 279,
    "extinto": "CESAR FRANCISCO GIRAUDO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "26",
    "latitud": -31.56698318,
    "longitud": -63.51551833,
    "color_sector": "#FF9800"
  },
  {
    "id": 280,
    "extinto": "PEREZ RAMON ALBERTO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "27",
    "latitud": -31.5668542,
    "longitud": -63.51544682,
    "color_sector": "#FF9800"
  },
  {
    "id": 281,
    "extinto": "GALLO OSVALDO PEDRO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "29",
    "latitud": -31.56687326,
    "longitud": -63.51546277,
    "color_sector": "#FF9800"
  },
  {
    "id": 282,
    "extinto": "VIRGINIA  ALICIA  DUBINI",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "30",
    "latitud": -31.56688279,
    "longitud": -63.51547075,
    "color_sector": "#FF9800"
  },
  {
    "id": 283,
    "extinto": "TORAZZA HUGO FRANCISCO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "31",
    "latitud": -31.56689232,
    "longitud": -63.51547872,
    "color_sector": "#FF9800"
  },
  {
    "id": 284,
    "extinto": "NAVARRO MAXIMA CRUZ",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "33",
    "latitud": -31.56691138,
    "longitud": -63.51549467,
    "color_sector": "#FF9800"
  },
  {
    "id": 285,
    "extinto": "GAVIGLIO ITALO EDELMI",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "33",
    "latitud": -31.56691138,
    "longitud": -63.51549467,
    "color_sector": "#FF9800"
  },
  {
    "id": 286,
    "extinto": "ROBERTO MARCELINO  DUBINI",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "34",
    "latitud": -31.56692091,
    "longitud": -63.51550265,
    "color_sector": "#FF9800"
  },
  {
    "id": 287,
    "extinto": "EGLES MARIA DOMINGA GIACOSSA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "34",
    "latitud": -31.56692091,
    "longitud": -63.51550265,
    "color_sector": "#FF9800"
  },
  {
    "id": 288,
    "extinto": "BRASSIOLO PABLO ESPIRITU",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "35",
    "latitud": -31.56693044,
    "longitud": -63.51551063,
    "color_sector": "#FF9800"
  },
  {
    "id": 289,
    "extinto": "ALEJO ANTONIO DEGON",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "36",
    "latitud": -31.56693997,
    "longitud": -63.5155186,
    "color_sector": "#FF9800"
  },
  {
    "id": 290,
    "extinto": "NEIRA ELBA ROSA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "38",
    "latitud": -31.56695903,
    "longitud": -63.51553455,
    "color_sector": "#FF9800"
  },
  {
    "id": 291,
    "extinto": "BOCARDO ADELMO ANTONIO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "39",
    "latitud": -31.56696856,
    "longitud": -63.51554253,
    "color_sector": "#FF9800"
  },
  {
    "id": 292,
    "extinto": "DUBINI ROSALIA MARIA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "39",
    "latitud": -31.56696856,
    "longitud": -63.51554253,
    "color_sector": "#FF9800"
  },
  {
    "id": 293,
    "extinto": "RAQUEL DOMINGA RODRIGUEZ",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "42",
    "latitud": -31.56686117,
    "longitud": -63.51548246,
    "color_sector": "#FF9800"
  },
  {
    "id": 294,
    "extinto": "LUIS ANGEL DEFAGOT",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "42",
    "latitud": -31.56686117,
    "longitud": -63.51548246,
    "color_sector": "#FF9800"
  },
  {
    "id": 295,
    "extinto": "DANIELE CATALINA ROSA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "44",
    "latitud": -31.56688024,
    "longitud": -63.51549842,
    "color_sector": "#FF9800"
  },
  {
    "id": 296,
    "extinto": "CEGLIO ANGEL CRISTOBAL",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "44",
    "latitud": -31.56688024,
    "longitud": -63.51549842,
    "color_sector": "#FF9800"
  },
  {
    "id": 297,
    "extinto": "RAMALLO DANIEL JESUS",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "46",
    "latitud": -31.5668993,
    "longitud": -63.51551437,
    "color_sector": "#FF9800"
  },
  {
    "id": 298,
    "extinto": "RAMALLO FERNANDO ADRIAN",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "47",
    "latitud": -31.56690883,
    "longitud": -63.51552234,
    "color_sector": "#FF9800"
  },
  {
    "id": 299,
    "extinto": "VISTALLI ANGELA DOMINGA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "48",
    "latitud": -31.56691835,
    "longitud": -63.51553032,
    "color_sector": "#FF9800"
  },
  {
    "id": 300,
    "extinto": "JULIO CESAR RONCATO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "48",
    "latitud": -31.56691835,
    "longitud": -63.51553032,
    "color_sector": "#FF9800"
  },
  {
    "id": 301,
    "extinto": "GABRIEL RONCATO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "48",
    "latitud": -31.56691835,
    "longitud": -63.51553032,
    "color_sector": "#FF9800"
  },
  {
    "id": 302,
    "extinto": "VALENTINA DE RONCATO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "48",
    "latitud": -31.56691835,
    "longitud": -63.51553032,
    "color_sector": "#FF9800"
  },
  {
    "id": 303,
    "extinto": "JUAN BAUTISTA RONCATO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "48",
    "latitud": -31.56691835,
    "longitud": -63.51553032,
    "color_sector": "#FF9800"
  },
  {
    "id": 304,
    "extinto": "DEGON JUAN PEDRO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "49",
    "latitud": -31.56692789,
    "longitud": -63.51553829,
    "color_sector": "#FF9800"
  },
  {
    "id": 305,
    "extinto": "DEGON ANTONIO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "49",
    "latitud": -31.56692789,
    "longitud": -63.51553829,
    "color_sector": "#FF9800"
  },
  {
    "id": 306,
    "extinto": "TORAZZA MAGDALENA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "49",
    "latitud": -31.56692789,
    "longitud": -63.51553829,
    "color_sector": "#FF9800"
  },
  {
    "id": 307,
    "extinto": "ARREDONDO JOSE GERMAN",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "50",
    "latitud": -31.56693742,
    "longitud": -63.51554627,
    "color_sector": "#FF9800"
  },
  {
    "id": 308,
    "extinto": "JOSEFA ESTER TEJEDA",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "50",
    "latitud": -31.56693742,
    "longitud": -63.51554627,
    "color_sector": "#FF9800"
  },
  {
    "id": 309,
    "extinto": "DEGON LUIS ANTONIO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "51",
    "latitud": -31.56694695,
    "longitud": -63.51555424,
    "color_sector": "#FF9800"
  },
  {
    "id": 310,
    "extinto": "ALICIA CRISTINA VISCONTI",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "52",
    "latitud": -31.56695648,
    "longitud": -63.51556222,
    "color_sector": "#FF9800"
  },
  {
    "id": 311,
    "extinto": "CARLOS MARTIN BOCCARDO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "52",
    "latitud": -31.56695648,
    "longitud": -63.51556222,
    "color_sector": "#FF9800"
  },
  {
    "id": 312,
    "extinto": "DIAZ RAMON ANTONIO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "1",
    "latitud": -31.56688201,
    "longitud": -63.51564184,
    "color_sector": "#FF9800"
  },
  {
    "id": 313,
    "extinto": "PETRONA ESTHER DIAZ",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "1",
    "latitud": -31.56688201,
    "longitud": -63.51564184,
    "color_sector": "#FF9800"
  },
  {
    "id": 314,
    "extinto": "JOSE ROLANDO ALGARBE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "1",
    "latitud": -31.56688201,
    "longitud": -63.51564184,
    "color_sector": "#FF9800"
  },
  {
    "id": 315,
    "extinto": "PACHO JOSE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "2",
    "latitud": -31.56690076,
    "longitud": -63.51565221,
    "color_sector": "#FF9800"
  },
  {
    "id": 316,
    "extinto": "ALFREDO ZALAZAR",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "3",
    "latitud": -31.566877,
    "longitud": -63.51565422,
    "color_sector": "#FF9800"
  },
  {
    "id": 317,
    "extinto": "ZALAZAR ADOLFO ELOI",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "3",
    "latitud": -31.566877,
    "longitud": -63.51565422,
    "color_sector": "#FF9800"
  },
  {
    "id": 318,
    "extinto": "ELVA ROSA GOMEZ",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "3",
    "latitud": -31.566877,
    "longitud": -63.51565422,
    "color_sector": "#FF9800"
  },
  {
    "id": 319,
    "extinto": "GUELLO FRARIEL",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "6",
    "latitud": -31.56689073,
    "longitud": -63.51567696,
    "color_sector": "#FF9800"
  },
  {
    "id": 320,
    "extinto": "MARTINA DE LOURDES ARGUELLO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "6",
    "latitud": -31.56689073,
    "longitud": -63.51567696,
    "color_sector": "#FF9800"
  },
  {
    "id": 321,
    "extinto": "GARCIA PEDRO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "7",
    "latitud": -31.56686696,
    "longitud": -63.51567897,
    "color_sector": "#FF9800"
  },
  {
    "id": 322,
    "extinto": "GARCIA RODOLFO PEDRO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "7",
    "latitud": -31.56686696,
    "longitud": -63.51567897,
    "color_sector": "#FF9800"
  },
  {
    "id": 323,
    "extinto": "ZUNILDA BRACAMONTE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "9",
    "latitud": -31.56686195,
    "longitud": -63.51569135,
    "color_sector": "#FF9800"
  },
  {
    "id": 324,
    "extinto": "PALAZON JUAN JOSE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "9",
    "latitud": -31.56686195,
    "longitud": -63.51569135,
    "color_sector": "#FF9800"
  },
  {
    "id": 325,
    "extinto": "HONG OSCAR E",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "11",
    "latitud": -31.56685693,
    "longitud": -63.51570372,
    "color_sector": "#FF9800"
  },
  {
    "id": 326,
    "extinto": "GUSTAVO EDELMI HOMGN",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "11",
    "latitud": -31.56685693,
    "longitud": -63.51570372,
    "color_sector": "#FF9800"
  },
  {
    "id": 327,
    "extinto": "SOSA VICENTE MARIA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "12",
    "latitud": -31.56687568,
    "longitud": -63.51571409,
    "color_sector": "#FF9800"
  },
  {
    "id": 328,
    "extinto": "ISELA MARINA TROC",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "12",
    "latitud": -31.56687568,
    "longitud": -63.51571409,
    "color_sector": "#FF9800"
  },
  {
    "id": 329,
    "extinto": "YOLANDA ROSA RODRIGUEZ",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "13",
    "latitud": -31.56685191,
    "longitud": -63.5157161,
    "color_sector": "#FF9800"
  },
  {
    "id": 330,
    "extinto": "JESUS BENJAMIN RODRIGUEZ",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "13",
    "latitud": -31.56685191,
    "longitud": -63.5157161,
    "color_sector": "#FF9800"
  },
  {
    "id": 331,
    "extinto": "EMILIA YOLANDA AREVALO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "13",
    "latitud": -31.56685191,
    "longitud": -63.5157161,
    "color_sector": "#FF9800"
  },
  {
    "id": 332,
    "extinto": "LOPEZ VILMA GLADIS",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "14",
    "latitud": -31.56687066,
    "longitud": -63.51572647,
    "color_sector": "#FF9800"
  },
  {
    "id": 333,
    "extinto": "CISTERNA CAYETANO ALFREDO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "15",
    "latitud": -31.5668469,
    "longitud": -63.51572848,
    "color_sector": "#FF9800"
  },
  {
    "id": 334,
    "extinto": "SOSA TRANSITO MIGUELINA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "15",
    "latitud": -31.5668469,
    "longitud": -63.51572848,
    "color_sector": "#FF9800"
  },
  {
    "id": 335,
    "extinto": "GONGORA JORGE GONZALO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "17",
    "latitud": -31.56684188,
    "longitud": -63.51574085,
    "color_sector": "#FF9800"
  },
  {
    "id": 336,
    "extinto": "LUIS ALBERTO RAMELLO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "18",
    "latitud": -31.56686063,
    "longitud": -63.51575122,
    "color_sector": "#FF9800"
  },
  {
    "id": 337,
    "extinto": "FERNANDO BERTOLEZ",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "18",
    "latitud": -31.56686063,
    "longitud": -63.51575122,
    "color_sector": "#FF9800"
  },
  {
    "id": 338,
    "extinto": "RAMON JERONIMO BERTOLEZ",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "19",
    "latitud": -31.56683686,
    "longitud": -63.51575323,
    "color_sector": "#FF9800"
  },
  {
    "id": 339,
    "extinto": "BENDINELLI IDA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "20",
    "latitud": -31.56685561,
    "longitud": -63.5157636,
    "color_sector": "#FF9800"
  },
  {
    "id": 340,
    "extinto": "DEL PINO SIMEON",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "20",
    "latitud": -31.56685561,
    "longitud": -63.5157636,
    "color_sector": "#FF9800"
  },
  {
    "id": 341,
    "extinto": "DEL PINO JOSE JAVIER",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "20",
    "latitud": -31.56685561,
    "longitud": -63.5157636,
    "color_sector": "#FF9800"
  },
  {
    "id": 342,
    "extinto": "BENDINELLI LEONE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "20",
    "latitud": -31.56685561,
    "longitud": -63.5157636,
    "color_sector": "#FF9800"
  },
  {
    "id": 343,
    "extinto": "MARIA PAGANI DE BENDINELLI",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "20",
    "latitud": -31.56685561,
    "longitud": -63.5157636,
    "color_sector": "#FF9800"
  },
  {
    "id": 344,
    "extinto": "BENDINELLI INES",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "20",
    "latitud": -31.56685561,
    "longitud": -63.5157636,
    "color_sector": "#FF9800"
  },
  {
    "id": 345,
    "extinto": "NOBREGA EDUARDO SILVERIO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "21",
    "latitud": -31.56683184,
    "longitud": -63.51576561,
    "color_sector": "#FF9800"
  },
  {
    "id": 346,
    "extinto": "TERESA AURORA ROLLE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "21",
    "latitud": -31.56683184,
    "longitud": -63.51576561,
    "color_sector": "#FF9800"
  },
  {
    "id": 347,
    "extinto": "DEL PINO ANGEL SIMEON",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "22",
    "latitud": -31.56685059,
    "longitud": -63.51577597,
    "color_sector": "#FF9800"
  },
  {
    "id": 348,
    "extinto": "DEL PINO MARIA LETICIA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "22",
    "latitud": -31.56685059,
    "longitud": -63.51577597,
    "color_sector": "#FF9800"
  },
  {
    "id": 349,
    "extinto": "STRA GRACIELA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "22",
    "latitud": -31.56685059,
    "longitud": -63.51577597,
    "color_sector": "#FF9800"
  },
  {
    "id": 350,
    "extinto": "PAZ SILVIO ENRIQUE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "23",
    "latitud": -31.56682683,
    "longitud": -63.51577798,
    "color_sector": "#FF9800"
  },
  {
    "id": 351,
    "extinto": "VALLEJO ELSA EMILIA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "23",
    "latitud": -31.56682683,
    "longitud": -63.51577798,
    "color_sector": "#FF9800"
  },
  {
    "id": 352,
    "extinto": "MARQUEZ MERCEDES CAYETANA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "24",
    "latitud": -31.56684557,
    "longitud": -63.51578835,
    "color_sector": "#FF9800"
  },
  {
    "id": 353,
    "extinto": "RENNA SEGUNDO",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "24",
    "latitud": -31.56684557,
    "longitud": -63.51578835,
    "color_sector": "#FF9800"
  },
  {
    "id": 354,
    "extinto": "AURORA RENNA",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "24",
    "latitud": -31.56684557,
    "longitud": -63.51578835,
    "color_sector": "#FF9800"
  },
  {
    "id": 355,
    "extinto": "MARIANA BESSONE",
    "sector": "NARANJA",
    "lote": "19",
    "nro": "24",
    "latitud": -31.56684557,
    "longitud": -63.51578835,
    "color_sector": "#FF9800"
  },
  {
    "id": 356,
    "extinto": "RODRIGUEZ MELITON",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "1",
    "latitud": -31.56681947,
    "longitud": -63.51580695,
    "color_sector": "#FF9800"
  },
  {
    "id": 357,
    "extinto": "MARTINEZ CARMEN DE MARIOTTA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "1",
    "latitud": -31.56681947,
    "longitud": -63.51580695,
    "color_sector": "#FF9800"
  },
  {
    "id": 358,
    "extinto": "RODRIGUEZ MONICA SILVIA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "1",
    "latitud": -31.56681947,
    "longitud": -63.51580695,
    "color_sector": "#FF9800"
  },
  {
    "id": 359,
    "extinto": "DOMINGA BEDOGNI DE BELTRAMO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "2",
    "latitud": -31.56683695,
    "longitud": -63.51582,
    "color_sector": "#FF9800"
  },
  {
    "id": 360,
    "extinto": "ROSA BEDOGNI",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "2",
    "latitud": -31.56683695,
    "longitud": -63.51582,
    "color_sector": "#FF9800"
  },
  {
    "id": 361,
    "extinto": "PRIMO BELTRAMO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "2",
    "latitud": -31.56683695,
    "longitud": -63.51582,
    "color_sector": "#FF9800"
  },
  {
    "id": 362,
    "extinto": "LEDESMA MARIA ELIDA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "4",
    "latitud": -31.56681316,
    "longitud": -63.51581849,
    "color_sector": "#FF9800"
  },
  {
    "id": 363,
    "extinto": "JUAN R ALEJOS",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "4",
    "latitud": -31.56681316,
    "longitud": -63.51581849,
    "color_sector": "#FF9800"
  },
  {
    "id": 364,
    "extinto": "ALVAREZ HUGO DANIEL",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "5",
    "latitud": -31.56683064,
    "longitud": -63.51583154,
    "color_sector": "#FF9800"
  },
  {
    "id": 365,
    "extinto": "JOSE ANTONIO CARRERAS",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "5",
    "latitud": -31.56683064,
    "longitud": -63.51583154,
    "color_sector": "#FF9800"
  },
  {
    "id": 366,
    "extinto": "LORENA ISABEL LUNA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "6",
    "latitud": -31.56685192,
    "longitud": -63.51584741,
    "color_sector": "#FF9800"
  },
  {
    "id": 367,
    "extinto": "CASIMIRO SANTOS LUNA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "6",
    "latitud": -31.56685192,
    "longitud": -63.51584741,
    "color_sector": "#FF9800"
  },
  {
    "id": 368,
    "extinto": "ARIEL RODOLFO BIANCO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "6",
    "latitud": -31.56685192,
    "longitud": -63.51584741,
    "color_sector": "#FF9800"
  },
  {
    "id": 369,
    "extinto": "FEDERICO HECTOR  MARCATO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "7",
    "latitud": -31.56680685,
    "longitud": -63.51583003,
    "color_sector": "#FF9800"
  },
  {
    "id": 370,
    "extinto": "AGUIRRE CLAUDIO PETRONILO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "10",
    "latitud": -31.56680053,
    "longitud": -63.51584156,
    "color_sector": "#FF9800"
  },
  {
    "id": 371,
    "extinto": "BEDOGNI JUAN JOSE",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "11",
    "latitud": -31.56681801,
    "longitud": -63.51585461,
    "color_sector": "#FF9800"
  },
  {
    "id": 372,
    "extinto": "JOSE BEDOGNI",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "11",
    "latitud": -31.56681801,
    "longitud": -63.51585461,
    "color_sector": "#FF9800"
  },
  {
    "id": 373,
    "extinto": "FERREYRA CARLOS BONIFACIO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "13",
    "latitud": -31.56679422,
    "longitud": -63.5158531,
    "color_sector": "#FF9800"
  },
  {
    "id": 374,
    "extinto": "BARIZONE ESTEBAN ANGEL",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "14",
    "latitud": -31.56681169,
    "longitud": -63.51586615,
    "color_sector": "#FF9800"
  },
  {
    "id": 375,
    "extinto": "AGUSTINA LUDUEÑA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "14",
    "latitud": -31.56681169,
    "longitud": -63.51586615,
    "color_sector": "#FF9800"
  },
  {
    "id": 376,
    "extinto": "HERRERA JUAN CARLOS",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "15",
    "latitud": -31.56683298,
    "longitud": -63.51588202,
    "color_sector": "#FF9800"
  },
  {
    "id": 377,
    "extinto": "ORTIZ CEFERINA ANTONIA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "15",
    "latitud": -31.56683298,
    "longitud": -63.51588202,
    "color_sector": "#FF9800"
  },
  {
    "id": 378,
    "extinto": "ANTONIO BEDOGNI",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "16",
    "latitud": -31.5667879,
    "longitud": -63.51586464,
    "color_sector": "#FF9800"
  },
  {
    "id": 379,
    "extinto": "CECILIA RANZIERI",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "16",
    "latitud": -31.5667879,
    "longitud": -63.51586464,
    "color_sector": "#FF9800"
  },
  {
    "id": 380,
    "extinto": "JAVIER BELTRAMO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "16",
    "latitud": -31.5667879,
    "longitud": -63.51586464,
    "color_sector": "#FF9800"
  },
  {
    "id": 381,
    "extinto": "N/N BEDOGNI",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "16",
    "latitud": -31.5667879,
    "longitud": -63.51586464,
    "color_sector": "#FF9800"
  },
  {
    "id": 382,
    "extinto": "TORAZZA ELIAS OSCAR",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "17",
    "latitud": -31.56680538,
    "longitud": -63.51587769,
    "color_sector": "#FF9800"
  },
  {
    "id": 383,
    "extinto": "ILDA ROSA CHIALVA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "18",
    "latitud": -31.56682666,
    "longitud": -63.51589356,
    "color_sector": "#FF9800"
  },
  {
    "id": 384,
    "extinto": "BERGESIO JUAN CARLOS",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "18",
    "latitud": -31.56682666,
    "longitud": -63.51589356,
    "color_sector": "#FF9800"
  },
  {
    "id": 385,
    "extinto": "BEDOGNI RENATO GUILLERMO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "19",
    "latitud": -31.56678159,
    "longitud": -63.51587618,
    "color_sector": "#FF9800"
  },
  {
    "id": 386,
    "extinto": "DEIDAMIA ANGELICA PAZ",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "19",
    "latitud": -31.56678159,
    "longitud": -63.51587618,
    "color_sector": "#FF9800"
  },
  {
    "id": 387,
    "extinto": "NN - ORONADO DELGADO ORIANA AYLEN",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "22",
    "latitud": -31.56677527,
    "longitud": -63.51588771,
    "color_sector": "#FF9800"
  },
  {
    "id": 388,
    "extinto": "LIDIA  ROSA  AGUIRRE",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "22",
    "latitud": -31.56677527,
    "longitud": -63.51588771,
    "color_sector": "#FF9800"
  },
  {
    "id": 389,
    "extinto": "FRANCISCO ROLDAN",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "23",
    "latitud": -31.56679275,
    "longitud": -63.51590076,
    "color_sector": "#FF9800"
  },
  {
    "id": 390,
    "extinto": "BRAULIA ALMADA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "23",
    "latitud": -31.56679275,
    "longitud": -63.51590076,
    "color_sector": "#FF9800"
  },
  {
    "id": 391,
    "extinto": "FERRERO JUAN BAUTISTA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "25",
    "latitud": -31.56676896,
    "longitud": -63.51589925,
    "color_sector": "#FF9800"
  },
  {
    "id": 392,
    "extinto": "LUDUEÑA ROSA LIDIA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "25",
    "latitud": -31.56676896,
    "longitud": -63.51589925,
    "color_sector": "#FF9800"
  },
  {
    "id": 393,
    "extinto": "VILCHI TEOTIMO",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "27",
    "latitud": -31.56680772,
    "longitud": -63.51592817,
    "color_sector": "#FF9800"
  },
  {
    "id": 394,
    "extinto": "ALMADA MARIA ESTHER",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "27",
    "latitud": -31.56680772,
    "longitud": -63.51592817,
    "color_sector": "#FF9800"
  },
  {
    "id": 395,
    "extinto": "GIOVINE YOLANDA ,MARIA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "1",
    "latitud": -31.56671858,
    "longitud": -63.51599118,
    "color_sector": "#FF9800"
  },
  {
    "id": 396,
    "extinto": "JOSE MARIA MARTINEZ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "1",
    "latitud": -31.56671858,
    "longitud": -63.51599118,
    "color_sector": "#FF9800"
  },
  {
    "id": 397,
    "extinto": "CARLOS HUGO AGUERO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "3",
    "latitud": -31.56676002,
    "longitud": -63.5160145,
    "color_sector": "#FF9800"
  },
  {
    "id": 398,
    "extinto": "ATILIO JOSE ASSOLINI",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "4",
    "latitud": -31.56671349,
    "longitud": -63.51600351,
    "color_sector": "#FF9800"
  },
  {
    "id": 399,
    "extinto": "ARREGUI ARTURO ADALBERTO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "5",
    "latitud": -31.56673217,
    "longitud": -63.51601404,
    "color_sector": "#FF9800"
  },
  {
    "id": 400,
    "extinto": "CEAGLIO JUAN JOAQUIN",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "6",
    "latitud": -31.56675493,
    "longitud": -63.51602683,
    "color_sector": "#FF9800"
  },
  {
    "id": 401,
    "extinto": "CEAGLIO JOSEFA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "6",
    "latitud": -31.56675493,
    "longitud": -63.51602683,
    "color_sector": "#FF9800"
  },
  {
    "id": 402,
    "extinto": "MARGARITA CIAGLIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "6",
    "latitud": -31.56675493,
    "longitud": -63.51602683,
    "color_sector": "#FF9800"
  },
  {
    "id": 403,
    "extinto": "BRASSIOLO HECTOR LUIS",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "9",
    "latitud": -31.56674983,
    "longitud": -63.51603917,
    "color_sector": "#FF9800"
  },
  {
    "id": 404,
    "extinto": "SOSA ANGELINA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "9",
    "latitud": -31.56674983,
    "longitud": -63.51603917,
    "color_sector": "#FF9800"
  },
  {
    "id": 405,
    "extinto": "SERRANO PEDROP B",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "10",
    "latitud": -31.56670331,
    "longitud": -63.51602818,
    "color_sector": "#FF9800"
  },
  {
    "id": 406,
    "extinto": "FONSECA PETRONILA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "10",
    "latitud": -31.56670331,
    "longitud": -63.51602818,
    "color_sector": "#FF9800"
  },
  {
    "id": 407,
    "extinto": "MENICHETTI LIDIA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "10",
    "latitud": -31.56670331,
    "longitud": -63.51602818,
    "color_sector": "#FF9800"
  },
  {
    "id": 408,
    "extinto": "CAFFARENA ROSA ESTER",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "11",
    "latitud": -31.56672199,
    "longitud": -63.5160387,
    "color_sector": "#FF9800"
  },
  {
    "id": 409,
    "extinto": "CACERES RICARDO RAUL",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "11",
    "latitud": -31.56672199,
    "longitud": -63.5160387,
    "color_sector": "#FF9800"
  },
  {
    "id": 410,
    "extinto": "GOMEZ BENANCIO ARMANDO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "12",
    "latitud": -31.56674474,
    "longitud": -63.5160515,
    "color_sector": "#FF9800"
  },
  {
    "id": 411,
    "extinto": "BUDASSI VICTORIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "13",
    "latitud": -31.56669822,
    "longitud": -63.51604051,
    "color_sector": "#FF9800"
  },
  {
    "id": 412,
    "extinto": "PETRONILA DORA SERRANO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "13",
    "latitud": -31.56669822,
    "longitud": -63.51604051,
    "color_sector": "#FF9800"
  },
  {
    "id": 413,
    "extinto": "ALBA BEATRIZ TABORDA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "14",
    "latitud": -31.5667169,
    "longitud": -63.51605104,
    "color_sector": "#FF9800"
  },
  {
    "id": 414,
    "extinto": "SERRANO RAMON ROGELIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "14",
    "latitud": -31.5667169,
    "longitud": -63.51605104,
    "color_sector": "#FF9800"
  },
  {
    "id": 415,
    "extinto": "NOVELLI RODOLFO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "15",
    "latitud": -31.56673965,
    "longitud": -63.51606383,
    "color_sector": "#FF9800"
  },
  {
    "id": 416,
    "extinto": "ALVAREZ MAGDALENA DE JESUS",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "15",
    "latitud": -31.56673965,
    "longitud": -63.51606383,
    "color_sector": "#FF9800"
  },
  {
    "id": 417,
    "extinto": "JULIO VICTORIO DAPRA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "16",
    "latitud": -31.56669312,
    "longitud": -63.51605284,
    "color_sector": "#FF9800"
  },
  {
    "id": 418,
    "extinto": "NORIS DEL CARMEN DAPRA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "16",
    "latitud": -31.56669312,
    "longitud": -63.51605284,
    "color_sector": "#FF9800"
  },
  {
    "id": 419,
    "extinto": "MARIS IRIS DAPRA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "16",
    "latitud": -31.56669312,
    "longitud": -63.51605284,
    "color_sector": "#FF9800"
  },
  {
    "id": 420,
    "extinto": "FERREYRA SEGUNDO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "17",
    "latitud": -31.5667118,
    "longitud": -63.51606337,
    "color_sector": "#FF9800"
  },
  {
    "id": 421,
    "extinto": "SUSANA DEL VALLE SERRANO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "17",
    "latitud": -31.5667118,
    "longitud": -63.51606337,
    "color_sector": "#FF9800"
  },
  {
    "id": 422,
    "extinto": "MURUA AMADEO RUBEN",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "19",
    "latitud": -31.56668803,
    "longitud": -63.51606518,
    "color_sector": "#FF9800"
  },
  {
    "id": 423,
    "extinto": "GERBAUDO RICARDO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "20",
    "latitud": -31.56670671,
    "longitud": -63.5160757,
    "color_sector": "#FF9800"
  },
  {
    "id": 424,
    "extinto": "MARIA ANGELICA BUSTO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "20",
    "latitud": -31.56670671,
    "longitud": -63.5160757,
    "color_sector": "#FF9800"
  },
  {
    "id": 425,
    "extinto": "GERBAUDO RAUL",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "21",
    "latitud": -31.56672946,
    "longitud": -63.5160885,
    "color_sector": "#FF9800"
  },
  {
    "id": 426,
    "extinto": "SARA FELIPE JUSTO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "22",
    "latitud": -31.56668293,
    "longitud": -63.51607751,
    "color_sector": "#FF9800"
  },
  {
    "id": 427,
    "extinto": "BELTRAMO URSULA MARIA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "22",
    "latitud": -31.56668293,
    "longitud": -63.51607751,
    "color_sector": "#FF9800"
  },
  {
    "id": 428,
    "extinto": "LAURENTI LEONARDO BARTOLOME",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "23",
    "latitud": -31.56670162,
    "longitud": -63.51608804,
    "color_sector": "#FF9800"
  },
  {
    "id": 429,
    "extinto": "FELIZ LUIS SUTER",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "24",
    "latitud": -31.56672437,
    "longitud": -63.51610083,
    "color_sector": "#FF9800"
  },
  {
    "id": 430,
    "extinto": "DAVITE BLANCA ANGELA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "24",
    "latitud": -31.56672437,
    "longitud": -63.51610083,
    "color_sector": "#FF9800"
  },
  {
    "id": 431,
    "extinto": "MOLINA MERCEDES RAMONA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "25",
    "latitud": -31.56667784,
    "longitud": -63.51608985,
    "color_sector": "#FF9800"
  },
  {
    "id": 432,
    "extinto": "ARNEUDO ANDRES",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "25",
    "latitud": -31.56667784,
    "longitud": -63.51608985,
    "color_sector": "#FF9800"
  },
  {
    "id": 433,
    "extinto": "FRANCISCO ANDRES SOSA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "25",
    "latitud": -31.56667784,
    "longitud": -63.51608985,
    "color_sector": "#FF9800"
  },
  {
    "id": 434,
    "extinto": "PERALTA EDGARDO RENE",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "26",
    "latitud": -31.56669652,
    "longitud": -63.51610037,
    "color_sector": "#FF9800"
  },
  {
    "id": 435,
    "extinto": "PERALTA ERNESTO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "27",
    "latitud": -31.56671927,
    "longitud": -63.51611317,
    "color_sector": "#FF9800"
  },
  {
    "id": 436,
    "extinto": "MATILDE ESTHER DEL VALLE SERRANO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "27",
    "latitud": -31.56671927,
    "longitud": -63.51611317,
    "color_sector": "#FF9800"
  },
  {
    "id": 437,
    "extinto": "RODRIGUEZ JOSE LUIS",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "31",
    "latitud": -31.56666766,
    "longitud": -63.51611452,
    "color_sector": "#FF9800"
  },
  {
    "id": 438,
    "extinto": "RODRIGUEZ MONICA PATRICIA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "31",
    "latitud": -31.56666766,
    "longitud": -63.51611452,
    "color_sector": "#FF9800"
  },
  {
    "id": 439,
    "extinto": "MANSILLA CONSOLACION",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "32",
    "latitud": -31.56668634,
    "longitud": -63.51612504,
    "color_sector": "#FF9800"
  },
  {
    "id": 440,
    "extinto": "JOSE AMADO MANSILLA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "32",
    "latitud": -31.56668634,
    "longitud": -63.51612504,
    "color_sector": "#FF9800"
  },
  {
    "id": 441,
    "extinto": "GARELLI MAGDALENA LUCIA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "33",
    "latitud": -31.56670909,
    "longitud": -63.51613784,
    "color_sector": "#FF9800"
  },
  {
    "id": 442,
    "extinto": "ACOSTA INES MERCEDEZ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "33",
    "latitud": -31.56670909,
    "longitud": -63.51613784,
    "color_sector": "#FF9800"
  },
  {
    "id": 443,
    "extinto": "NEIRA ELBA ROSA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "37",
    "latitud": -31.56665747,
    "longitud": -63.51613918,
    "color_sector": "#FF9800"
  },
  {
    "id": 444,
    "extinto": "PERALTA JULIO OCTAVIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "37",
    "latitud": -31.56665747,
    "longitud": -63.51613918,
    "color_sector": "#FF9800"
  },
  {
    "id": 445,
    "extinto": "ANA MARIA PERALTA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "38",
    "latitud": -31.56667615,
    "longitud": -63.51614971,
    "color_sector": "#FF9800"
  },
  {
    "id": 446,
    "extinto": "NEIRA ENRIQUE DANIEL",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "39",
    "latitud": -31.5666989,
    "longitud": -63.5161625,
    "color_sector": "#FF9800"
  },
  {
    "id": 447,
    "extinto": "SORIA RAMON E",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "40",
    "latitud": -31.56665238,
    "longitud": -63.51615152,
    "color_sector": "#FF9800"
  },
  {
    "id": 448,
    "extinto": "QUINTANILLA ROBERTO MANUEL",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "40",
    "latitud": -31.56665238,
    "longitud": -63.51615152,
    "color_sector": "#FF9800"
  },
  {
    "id": 449,
    "extinto": "ARCE SEGUNDO SEVERO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "41",
    "latitud": -31.56667106,
    "longitud": -63.51616204,
    "color_sector": "#FF9800"
  },
  {
    "id": 450,
    "extinto": "PURA GOMEZ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "41",
    "latitud": -31.56667106,
    "longitud": -63.51616204,
    "color_sector": "#FF9800"
  },
  {
    "id": 451,
    "extinto": "TABORDA JUAN LEON",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "42",
    "latitud": -31.56669381,
    "longitud": -63.51617484,
    "color_sector": "#FF9800"
  },
  {
    "id": 452,
    "extinto": "JUAN CARLOS TABORDA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "42",
    "latitud": -31.56669381,
    "longitud": -63.51617484,
    "color_sector": "#FF9800"
  },
  {
    "id": 453,
    "extinto": "NEIRA MARIA BEATRIZ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "43",
    "latitud": -31.56664728,
    "longitud": -63.51616385,
    "color_sector": "#FF9800"
  },
  {
    "id": 454,
    "extinto": "LUDUEÑA POLONIA ARSENIA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "44",
    "latitud": -31.56666597,
    "longitud": -63.51617437,
    "color_sector": "#FF9800"
  },
  {
    "id": 455,
    "extinto": "MARIA TERESA CAVAGNA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "44",
    "latitud": -31.56666597,
    "longitud": -63.51617437,
    "color_sector": "#FF9800"
  },
  {
    "id": 456,
    "extinto": "HECTOR EPIFANIO ZAMORA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "44",
    "latitud": -31.56666597,
    "longitud": -63.51617437,
    "color_sector": "#FF9800"
  },
  {
    "id": 457,
    "extinto": "ZANONI CARLOS ALFREDO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "45",
    "latitud": -31.56668872,
    "longitud": -63.51618717,
    "color_sector": "#FF9800"
  },
  {
    "id": 458,
    "extinto": "OLIVA JELMA DEL ROSARIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "45",
    "latitud": -31.56668872,
    "longitud": -63.51618717,
    "color_sector": "#FF9800"
  },
  {
    "id": 459,
    "extinto": "PEREZ LUIS DALMACIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "46",
    "latitud": -31.56664219,
    "longitud": -63.51617618,
    "color_sector": "#FF9800"
  },
  {
    "id": 460,
    "extinto": "TERESA MININ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "46",
    "latitud": -31.56664219,
    "longitud": -63.51617618,
    "color_sector": "#FF9800"
  },
  {
    "id": 461,
    "extinto": "DERRA ATILIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "47",
    "latitud": -31.56666087,
    "longitud": -63.51618671,
    "color_sector": "#FF9800"
  },
  {
    "id": 462,
    "extinto": "LUDUEÑA MARIA FRANCISCA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "47",
    "latitud": -31.56666087,
    "longitud": -63.51618671,
    "color_sector": "#FF9800"
  },
  {
    "id": 463,
    "extinto": "DERRA JORGE",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "47",
    "latitud": -31.56666087,
    "longitud": -63.51618671,
    "color_sector": "#FF9800"
  },
  {
    "id": 464,
    "extinto": "ROSSI ADELINA ANA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "48",
    "latitud": -31.56668363,
    "longitud": -63.5161995,
    "color_sector": "#FF9800"
  },
  {
    "id": 465,
    "extinto": "VIRONI ROBERTO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "48",
    "latitud": -31.56668363,
    "longitud": -63.5161995,
    "color_sector": "#FF9800"
  },
  {
    "id": 466,
    "extinto": "PERALTA SECILIA ANITA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "49",
    "latitud": -31.5666371,
    "longitud": -63.51618852,
    "color_sector": "#FF9800"
  },
  {
    "id": 467,
    "extinto": "DERRA   GAUDENCIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "49",
    "latitud": -31.5666371,
    "longitud": -63.51618852,
    "color_sector": "#FF9800"
  },
  {
    "id": 468,
    "extinto": "WALTER GAUDENCIO DERRA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "49",
    "latitud": -31.5666371,
    "longitud": -63.51618852,
    "color_sector": "#FF9800"
  },
  {
    "id": 469,
    "extinto": "WISMATH JUAN CARLOS",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "50",
    "latitud": -31.56665578,
    "longitud": -63.51619904,
    "color_sector": "#FF9800"
  },
  {
    "id": 470,
    "extinto": "FANANI SARA ESTHER",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "51",
    "latitud": -31.56667853,
    "longitud": -63.51621184,
    "color_sector": "#FF9800"
  },
  {
    "id": 471,
    "extinto": "FABIO ARMANDO VELEZ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "53",
    "latitud": -31.56665069,
    "longitud": -63.51621137,
    "color_sector": "#FF9800"
  },
  {
    "id": 472,
    "extinto": "SANDRI ONOFRIO",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "54",
    "latitud": -31.56667344,
    "longitud": -63.51622417,
    "color_sector": "#FF9800"
  },
  {
    "id": 473,
    "extinto": "FARCCARO AUGUSTA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "54",
    "latitud": -31.56667344,
    "longitud": -63.51622417,
    "color_sector": "#FF9800"
  },
  {
    "id": 474,
    "extinto": "SANDRI ESTHER MAGDALENA",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "54",
    "latitud": -31.56667344,
    "longitud": -63.51622417,
    "color_sector": "#FF9800"
  },
  {
    "id": 475,
    "extinto": "N/N  RIVERA/ NAVARRO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "1",
    "latitud": -31.56658828,
    "longitud": -63.51630381,
    "color_sector": "#FF9800"
  },
  {
    "id": 476,
    "extinto": "DUILIO CRISTOBAL CARRIZO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "1",
    "latitud": -31.56658828,
    "longitud": -63.51630381,
    "color_sector": "#FF9800"
  },
  {
    "id": 477,
    "extinto": "VERCELLONE ENRIQUE",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "2",
    "latitud": -31.56660392,
    "longitud": -63.51631972,
    "color_sector": "#FF9800"
  },
  {
    "id": 478,
    "extinto": "MARGARITA DOMINGA GRASSO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "2",
    "latitud": -31.56660392,
    "longitud": -63.51631972,
    "color_sector": "#FF9800"
  },
  {
    "id": 479,
    "extinto": "BLANCA VERCELLONE",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "2",
    "latitud": -31.56660392,
    "longitud": -63.51631972,
    "color_sector": "#FF9800"
  },
  {
    "id": 480,
    "extinto": "COLAZO CHELA DEL CARMEN",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "6",
    "latitud": -31.56658851,
    "longitud": -63.51634037,
    "color_sector": "#FF9800"
  },
  {
    "id": 481,
    "extinto": "COLAZO OLGA AIDA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "6",
    "latitud": -31.56658851,
    "longitud": -63.51634037,
    "color_sector": "#FF9800"
  },
  {
    "id": 482,
    "extinto": "LEAL MARCHENA MARIA SOLEDAD",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "5",
    "latitud": -31.56657301,
    "longitud": -63.5163244,
    "color_sector": "#FF9800"
  },
  {
    "id": 483,
    "extinto": "COLAZO GUSTAVO OSCAR",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "4",
    "latitud": -31.56659621,
    "longitud": -63.51633005,
    "color_sector": "#FF9800"
  },
  {
    "id": 484,
    "extinto": "YORIO BLANCA ANA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "4",
    "latitud": -31.56659621,
    "longitud": -63.51633005,
    "color_sector": "#FF9800"
  },
  {
    "id": 485,
    "extinto": "IVAN ELOY WABISZCZEWICZ",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "4",
    "latitud": -31.56659621,
    "longitud": -63.51633005,
    "color_sector": "#FF9800"
  },
  {
    "id": 486,
    "extinto": "LOYOLA JOSE ERNESTO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "7",
    "latitud": -31.56656517,
    "longitud": -63.51633478,
    "color_sector": "#FF9800"
  },
  {
    "id": 487,
    "extinto": "LOYOLA HECTOR JESUS",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "7",
    "latitud": -31.56656517,
    "longitud": -63.51633478,
    "color_sector": "#FF9800"
  },
  {
    "id": 488,
    "extinto": "ISABEL DEL CARMEN LOYOLA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "7",
    "latitud": -31.56656517,
    "longitud": -63.51633478,
    "color_sector": "#FF9800"
  },
  {
    "id": 489,
    "extinto": "LEAL MARCHENA JOSE MARIA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "8",
    "latitud": -31.56658081,
    "longitud": -63.51635069,
    "color_sector": "#FF9800"
  },
  {
    "id": 490,
    "extinto": "MARIA ESTHER CHALLIER",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "8",
    "latitud": -31.56658081,
    "longitud": -63.51635069,
    "color_sector": "#FF9800"
  },
  {
    "id": 491,
    "extinto": "BRASSIOLO HECTOR LUIS",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "9",
    "latitud": -31.56655747,
    "longitud": -63.5163451,
    "color_sector": "#FF9800"
  },
  {
    "id": 492,
    "extinto": "VILMA DOMINGA GARDA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "9",
    "latitud": -31.56655747,
    "longitud": -63.5163451,
    "color_sector": "#FF9800"
  },
  {
    "id": 493,
    "extinto": "JULIO ARGENTINO FRONTERA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "10",
    "latitud": -31.56657311,
    "longitud": -63.51636102,
    "color_sector": "#FF9800"
  },
  {
    "id": 494,
    "extinto": "IRMA MARIA GIRAUDO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "10",
    "latitud": -31.56657311,
    "longitud": -63.51636102,
    "color_sector": "#FF9800"
  },
  {
    "id": 495,
    "extinto": "VAZQUEZ JOSE CIPRIANO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "11",
    "latitud": -31.56654977,
    "longitud": -63.51635543,
    "color_sector": "#FF9800"
  },
  {
    "id": 496,
    "extinto": "PERONA VITALINA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "11",
    "latitud": -31.56654977,
    "longitud": -63.51635543,
    "color_sector": "#FF9800"
  },
  {
    "id": 497,
    "extinto": "MARIANI RICARDO ANTONIO",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "12",
    "latitud": -31.56656541,
    "longitud": -63.51637134,
    "color_sector": "#FF9800"
  },
  {
    "id": 498,
    "extinto": "EMELINA RODRIGUEZ",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "12",
    "latitud": -31.56656541,
    "longitud": -63.51637134,
    "color_sector": "#FF9800"
  },
  {
    "id": 499,
    "extinto": "ALVAREZ MARIA LOLA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "1",
    "latitud": -31.56655393,
    "longitud": -63.51570482,
    "color_sector": "#FF9800"
  },
  {
    "id": 500,
    "extinto": "GIACAGLIA HECTOR FEDERICO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "1",
    "latitud": -31.56655393,
    "longitud": -63.51570482,
    "color_sector": "#FF9800"
  },
  {
    "id": 501,
    "extinto": "FRANCISCO CACIORGNA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "4",
    "latitud": -31.56661831,
    "longitud": -63.51572536,
    "color_sector": "#FF9800"
  },
  {
    "id": 502,
    "extinto": "RAMONA CATALINA LOZA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "5",
    "latitud": -31.56664267,
    "longitud": -63.51573314,
    "color_sector": "#FF9800"
  },
  {
    "id": 503,
    "extinto": "CEBALLOS JOSE ALBERTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "7",
    "latitud": -31.56655084,
    "longitud": -63.51571803,
    "color_sector": "#FF9800"
  },
  {
    "id": 504,
    "extinto": "ALEJOS HECTOR DIONISIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "8",
    "latitud": -31.56657085,
    "longitud": -63.51572441,
    "color_sector": "#FF9800"
  },
  {
    "id": 505,
    "extinto": "ALEJOS JUAN",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "8",
    "latitud": -31.56657085,
    "longitud": -63.51572441,
    "color_sector": "#FF9800"
  },
  {
    "id": 506,
    "extinto": "PEREZ HECTOR DOMINGO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "9",
    "latitud": -31.56659521,
    "longitud": -63.51573219,
    "color_sector": "#FF9800"
  },
  {
    "id": 507,
    "extinto": "BALICKI RODOLFO ABEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "10",
    "latitud": -31.56661522,
    "longitud": -63.51573857,
    "color_sector": "#FF9800"
  },
  {
    "id": 508,
    "extinto": "GONZALEZ MAIA MARIA SELENE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "11",
    "latitud": -31.56663958,
    "longitud": -63.51574635,
    "color_sector": "#FF9800"
  },
  {
    "id": 509,
    "extinto": "BUSTOS LAZARO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "12",
    "latitud": -31.56665958,
    "longitud": -63.51575273,
    "color_sector": "#FF9800"
  },
  {
    "id": 510,
    "extinto": "PERALTA BLANCA DORA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "12",
    "latitud": -31.56665958,
    "longitud": -63.51575273,
    "color_sector": "#FF9800"
  },
  {
    "id": 511,
    "extinto": "BUSTOS ABEL ANGEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "12",
    "latitud": -31.56665958,
    "longitud": -63.51575273,
    "color_sector": "#FF9800"
  },
  {
    "id": 512,
    "extinto": "MARIA SUSANA CALLEJAS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "13",
    "latitud": -31.56654775,
    "longitud": -63.51573124,
    "color_sector": "#FF9800"
  },
  {
    "id": 513,
    "extinto": "LUCERO NORBERTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "14",
    "latitud": -31.56656776,
    "longitud": -63.51573762,
    "color_sector": "#FF9800"
  },
  {
    "id": 514,
    "extinto": "GIACCAGLIA TERESITA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "15",
    "latitud": -31.56659212,
    "longitud": -63.5157454,
    "color_sector": "#FF9800"
  },
  {
    "id": 515,
    "extinto": "DORA TERESA GOMEZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "16",
    "latitud": -31.56661213,
    "longitud": -63.51575178,
    "color_sector": "#FF9800"
  },
  {
    "id": 516,
    "extinto": "ALFREDO LUCIO PEREZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "16",
    "latitud": -31.56661213,
    "longitud": -63.51575178,
    "color_sector": "#FF9800"
  },
  {
    "id": 517,
    "extinto": "RAMON ALFREDO PEREZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "16",
    "latitud": -31.56661213,
    "longitud": -63.51575178,
    "color_sector": "#FF9800"
  },
  {
    "id": 518,
    "extinto": "PEREZ MARCELO SILVESTRE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "17",
    "latitud": -31.56663649,
    "longitud": -63.51575955,
    "color_sector": "#FF9800"
  },
  {
    "id": 519,
    "extinto": "MORAL IDA ANTONIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "18",
    "latitud": -31.56665649,
    "longitud": -63.51576594,
    "color_sector": "#FF9800"
  },
  {
    "id": 520,
    "extinto": "MARCELA BEATRIZ QUINTERO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "18",
    "latitud": -31.56665649,
    "longitud": -63.51576594,
    "color_sector": "#FF9800"
  },
  {
    "id": 521,
    "extinto": "JOSE ANTONIO LOPEZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "18",
    "latitud": -31.56665649,
    "longitud": -63.51576594,
    "color_sector": "#FF9800"
  },
  {
    "id": 522,
    "extinto": "RAUL IGNACIO PALACIOS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "19",
    "latitud": -31.56654466,
    "longitud": -63.51574444,
    "color_sector": "#FF9800"
  },
  {
    "id": 523,
    "extinto": "BRASSIOLO NANCY EDITH",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "23",
    "latitud": -31.5666334,
    "longitud": -63.51577276,
    "color_sector": "#FF9800"
  },
  {
    "id": 524,
    "extinto": "ROBERTO ANGEL BRASSIOLO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "23",
    "latitud": -31.5666334,
    "longitud": -63.51577276,
    "color_sector": "#FF9800"
  },
  {
    "id": 525,
    "extinto": "NORMA CAROLINA RIVARA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "23",
    "latitud": -31.5666334,
    "longitud": -63.51577276,
    "color_sector": "#FF9800"
  },
  {
    "id": 526,
    "extinto": "PERALTA MANUEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "24",
    "latitud": -31.5666534,
    "longitud": -63.51577915,
    "color_sector": "#FF9800"
  },
  {
    "id": 527,
    "extinto": "GIGENA FRANCISCO JAVIER",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "28",
    "latitud": -31.56660595,
    "longitud": -63.5157782,
    "color_sector": "#FF9800"
  },
  {
    "id": 528,
    "extinto": "DEIDERI GUILLERMO ANTONIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "28",
    "latitud": -31.56660595,
    "longitud": -63.5157782,
    "color_sector": "#FF9800"
  },
  {
    "id": 529,
    "extinto": "GIGENA DE DEIDERI MARIA ROSA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "28",
    "latitud": -31.56660595,
    "longitud": -63.5157782,
    "color_sector": "#FF9800"
  },
  {
    "id": 530,
    "extinto": "RAMELLO HUGO ALEJANDRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "30",
    "latitud": -31.56665031,
    "longitud": -63.51579236,
    "color_sector": "#FF9800"
  },
  {
    "id": 531,
    "extinto": "ALMADA JOSE ARTEMIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "31",
    "latitud": -31.56653848,
    "longitud": -63.51577086,
    "color_sector": "#FF9800"
  },
  {
    "id": 532,
    "extinto": "MAZZA CHAPARRO MARCELO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "34",
    "latitud": -31.56660286,
    "longitud": -63.51579141,
    "color_sector": "#FF9800"
  },
  {
    "id": 533,
    "extinto": "MAZZA VEGA RAMON",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "34",
    "latitud": -31.56660286,
    "longitud": -63.51579141,
    "color_sector": "#FF9800"
  },
  {
    "id": 534,
    "extinto": "JULIO RENE PAVON",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "35",
    "latitud": -31.56662721,
    "longitud": -63.51579918,
    "color_sector": "#FF9800"
  },
  {
    "id": 535,
    "extinto": "MARIA  ELOISA  SORIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "35",
    "latitud": -31.56662721,
    "longitud": -63.51579918,
    "color_sector": "#FF9800"
  },
  {
    "id": 536,
    "extinto": "RAMON  ANTONIO  QUINTEROS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "35",
    "latitud": -31.56662721,
    "longitud": -63.51579918,
    "color_sector": "#FF9800"
  },
  {
    "id": 537,
    "extinto": "FRANCISCO ALBERTO BUSTILLO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "38",
    "latitud": -31.5665554,
    "longitud": -63.51579046,
    "color_sector": "#FF9800"
  },
  {
    "id": 538,
    "extinto": "CHIAPPERO ANA ISABEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "40",
    "latitud": -31.56659977,
    "longitud": -63.51580462,
    "color_sector": "#FF9800"
  },
  {
    "id": 539,
    "extinto": "MAMERTO ERNESTO FERNANDEZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "40",
    "latitud": -31.56659977,
    "longitud": -63.51580462,
    "color_sector": "#FF9800"
  },
  {
    "id": 540,
    "extinto": "MARTINA BELEN DAVICINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "41",
    "latitud": -31.56662412,
    "longitud": -63.51581239,
    "color_sector": "#FF9800"
  },
  {
    "id": 541,
    "extinto": "BEDOGNI ADA ZONIA DEL VALLE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "42",
    "latitud": -31.56664413,
    "longitud": -63.51581878,
    "color_sector": "#FF9800"
  },
  {
    "id": 542,
    "extinto": "GIANOTTI TERESA LUCIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "44",
    "latitud": -31.56655231,
    "longitud": -63.51580367,
    "color_sector": "#FF9800"
  },
  {
    "id": 543,
    "extinto": "ANDRADES DONACIANO COSME",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "44",
    "latitud": -31.56655231,
    "longitud": -63.51580367,
    "color_sector": "#FF9800"
  },
  {
    "id": 544,
    "extinto": "MARIANI ALFREDO RITO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "54",
    "latitud": -31.56663795,
    "longitud": -63.51584519,
    "color_sector": "#FF9800"
  },
  {
    "id": 545,
    "extinto": "SARMINTO ADA FIDELMINA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "54",
    "latitud": -31.56663795,
    "longitud": -63.51584519,
    "color_sector": "#FF9800"
  },
  {
    "id": 546,
    "extinto": "TAMAGNINI VICTOR HUGO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "55",
    "latitud": -31.56652612,
    "longitud": -63.5158237,
    "color_sector": "#FF9800"
  },
  {
    "id": 547,
    "extinto": "OSCAR RAMON ROMERO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "57",
    "latitud": -31.56657049,
    "longitud": -63.51583786,
    "color_sector": "#FF9800"
  },
  {
    "id": 548,
    "extinto": "MARIANA DEL VALLE QUINTEROS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "60",
    "latitud": -31.56663486,
    "longitud": -63.5158584,
    "color_sector": "#FF9800"
  },
  {
    "id": 549,
    "extinto": "FONTANA VICENTE SANTIAGO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "63",
    "latitud": -31.56656739,
    "longitud": -63.51585107,
    "color_sector": "#FF9800"
  },
  {
    "id": 550,
    "extinto": "TABORDA ANA LILIAN",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "65",
    "latitud": -31.56661176,
    "longitud": -63.51586523,
    "color_sector": "#FF9800"
  },
  {
    "id": 551,
    "extinto": "GONZALEZ ENRIQUE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "67",
    "latitud": -31.56651994,
    "longitud": -63.51585012,
    "color_sector": "#FF9800"
  },
  {
    "id": 552,
    "extinto": "SOSA MARIA BERNARDINA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "67",
    "latitud": -31.56651994,
    "longitud": -63.51585012,
    "color_sector": "#FF9800"
  },
  {
    "id": 553,
    "extinto": "VICTOR  HUGO  GONZALEZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "67",
    "latitud": -31.56651994,
    "longitud": -63.51585012,
    "color_sector": "#FF9800"
  },
  {
    "id": 554,
    "extinto": "PAULINA MARGARITA ONTIVERO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "68",
    "latitud": -31.56653995,
    "longitud": -63.5158565,
    "color_sector": "#FF9800"
  },
  {
    "id": 555,
    "extinto": "JOSE ALBERTO GERBINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "68",
    "latitud": -31.56653995,
    "longitud": -63.5158565,
    "color_sector": "#FF9800"
  },
  {
    "id": 556,
    "extinto": "PABLO RICARDO NEIRA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "69",
    "latitud": -31.5665643,
    "longitud": -63.51586428,
    "color_sector": "#FF9800"
  },
  {
    "id": 557,
    "extinto": "RLPIDIO FRONTERA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "70",
    "latitud": -31.56658431,
    "longitud": -63.51587066,
    "color_sector": "#FF9800"
  },
  {
    "id": 558,
    "extinto": "FRONTERA RAMON VICTOR",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "71",
    "latitud": -31.56660867,
    "longitud": -63.51587844,
    "color_sector": "#FF9800"
  },
  {
    "id": 559,
    "extinto": "CASTILLO MARIA LUISA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "72",
    "latitud": -31.56662868,
    "longitud": -63.51588482,
    "color_sector": "#FF9800"
  },
  {
    "id": 560,
    "extinto": "VILMA  EDITH  MANDILE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "73",
    "latitud": -31.56651685,
    "longitud": -63.51586333,
    "color_sector": "#FF9800"
  },
  {
    "id": 561,
    "extinto": "MARTA JOSEFINA NAVARRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "75",
    "latitud": -31.56656121,
    "longitud": -63.51587748,
    "color_sector": "#FF9800"
  },
  {
    "id": 562,
    "extinto": "TOMAS ALEJANDRO JUNCOS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "75",
    "latitud": -31.56656121,
    "longitud": -63.51587748,
    "color_sector": "#FF9800"
  },
  {
    "id": 563,
    "extinto": "TORRES FAUSTINA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "76",
    "latitud": -31.56658122,
    "longitud": -63.51588387,
    "color_sector": "#FF9800"
  },
  {
    "id": 564,
    "extinto": "ANGEL FERNANDO RAMIREZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "76",
    "latitud": -31.56658122,
    "longitud": -63.51588387,
    "color_sector": "#FF9800"
  },
  {
    "id": 565,
    "extinto": "JUSTO ISOLINO ALGARBE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "76",
    "latitud": -31.56658122,
    "longitud": -63.51588387,
    "color_sector": "#FF9800"
  },
  {
    "id": 566,
    "extinto": "GOMEZ RAMON O",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "78",
    "latitud": -31.56662559,
    "longitud": -63.51589803,
    "color_sector": "#FF9800"
  },
  {
    "id": 567,
    "extinto": "GOMEZ ELEUTERIO OSCAR",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "78",
    "latitud": -31.56662559,
    "longitud": -63.51589803,
    "color_sector": "#FF9800"
  },
  {
    "id": 568,
    "extinto": "MARIA ROSA CASTILLO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "78",
    "latitud": -31.56662559,
    "longitud": -63.51589803,
    "color_sector": "#FF9800"
  },
  {
    "id": 569,
    "extinto": "CABRERA LUISA ARMINDA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "79",
    "latitud": -31.56651376,
    "longitud": -63.51587653,
    "color_sector": "#FF9800"
  },
  {
    "id": 570,
    "extinto": "LIENDO EFRAIN ALBERTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "81",
    "latitud": -31.56655812,
    "longitud": -63.51589069,
    "color_sector": "#FF9800"
  },
  {
    "id": 571,
    "extinto": "MARIA  ESTER  MOLINA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "84",
    "latitud": -31.5666225,
    "longitud": -63.51591124,
    "color_sector": "#FF9800"
  },
  {
    "id": 572,
    "extinto": "ARMONICO MARIANA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "89",
    "latitud": -31.5665994,
    "longitud": -63.51591806,
    "color_sector": "#FF9800"
  },
  {
    "id": 573,
    "extinto": "BOSSIO PABLO MIGUEL MAURICIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "90",
    "latitud": -31.56661941,
    "longitud": -63.51592445,
    "color_sector": "#FF9800"
  },
  {
    "id": 574,
    "extinto": "PRESOTTI ELSA EMILIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "90",
    "latitud": -31.56661941,
    "longitud": -63.51592445,
    "color_sector": "#FF9800"
  },
  {
    "id": 575,
    "extinto": "NORMA ROSA PERALTA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "96",
    "latitud": -31.56661632,
    "longitud": -63.51593766,
    "color_sector": "#FF9800"
  },
  {
    "id": 576,
    "extinto": "ALGARBE RAUL EDUARDO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "98",
    "latitud": -31.56652449,
    "longitud": -63.51592254,
    "color_sector": "#FF9800"
  },
  {
    "id": 577,
    "extinto": "FARIAS BERNABELA ROSA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "105",
    "latitud": -31.56654576,
    "longitud": -63.51594353,
    "color_sector": "#FF9800"
  },
  {
    "id": 578,
    "extinto": "ALGARBE JOSE JESUS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "105",
    "latitud": -31.56654576,
    "longitud": -63.51594353,
    "color_sector": "#FF9800"
  },
  {
    "id": 579,
    "extinto": "CEAGLIO NATALIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "108",
    "latitud": -31.56661014,
    "longitud": -63.51596407,
    "color_sector": "#FF9800"
  },
  {
    "id": 580,
    "extinto": "HONG MARGARITA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "108",
    "latitud": -31.56661014,
    "longitud": -63.51596407,
    "color_sector": "#FF9800"
  },
  {
    "id": 581,
    "extinto": "CEAGLIO ITALO ARMANDO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "108",
    "latitud": -31.56661014,
    "longitud": -63.51596407,
    "color_sector": "#FF9800"
  },
  {
    "id": 582,
    "extinto": "BARATELLI CELESTINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "114",
    "latitud": -31.56660705,
    "longitud": -63.51597728,
    "color_sector": "#FF9800"
  },
  {
    "id": 583,
    "extinto": "CUQUEJO MARIA ISABEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "114",
    "latitud": -31.56660705,
    "longitud": -63.51597728,
    "color_sector": "#FF9800"
  },
  {
    "id": 584,
    "extinto": "BARATELLI JUANITA ROSA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "114",
    "latitud": -31.56660705,
    "longitud": -63.51597728,
    "color_sector": "#FF9800"
  },
  {
    "id": 585,
    "extinto": "QRISOTOMO LEIRIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "118",
    "latitud": -31.56655959,
    "longitud": -63.51597633,
    "color_sector": "#FF9800"
  },
  {
    "id": 586,
    "extinto": "MAREIA ANTONIA FERREYRA DE LEIRIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "118",
    "latitud": -31.56655959,
    "longitud": -63.51597633,
    "color_sector": "#FF9800"
  },
  {
    "id": 587,
    "extinto": "TOMASA FUENTE DE LEIRIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "118",
    "latitud": -31.56655959,
    "longitud": -63.51597633,
    "color_sector": "#FF9800"
  },
  {
    "id": 588,
    "extinto": "YRINEO LEIRIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "118",
    "latitud": -31.56655959,
    "longitud": -63.51597633,
    "color_sector": "#FF9800"
  },
  {
    "id": 589,
    "extinto": "IRIS LUCIA TARQUINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "120",
    "latitud": -31.56660396,
    "longitud": -63.51599049,
    "color_sector": "#FF9800"
  },
  {
    "id": 590,
    "extinto": "PABLO  SEBASTIAN  BATTAINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "120",
    "latitud": -31.56660396,
    "longitud": -63.51599049,
    "color_sector": "#FF9800"
  },
  {
    "id": 591,
    "extinto": "PRADO ANTONIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "124",
    "latitud": -31.5665565,
    "longitud": -63.51598954,
    "color_sector": "#FF9800"
  },
  {
    "id": 592,
    "extinto": "FERREYRA JUAN LISANDRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "124",
    "latitud": -31.5665565,
    "longitud": -63.51598954,
    "color_sector": "#FF9800"
  },
  {
    "id": 593,
    "extinto": "RITO SOLIS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "127",
    "latitud": -31.56648903,
    "longitud": -63.51598221,
    "color_sector": "#FF9800"
  },
  {
    "id": 594,
    "extinto": "EMILIO NAJLE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "127",
    "latitud": -31.56648903,
    "longitud": -63.51598221,
    "color_sector": "#FF9800"
  },
  {
    "id": 595,
    "extinto": "MARIA MAGDALENA PEREYRA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "127",
    "latitud": -31.56648903,
    "longitud": -63.51598221,
    "color_sector": "#FF9800"
  },
  {
    "id": 596,
    "extinto": "SOLIS AZUCENA DEL CARMEN",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "127",
    "latitud": -31.56648903,
    "longitud": -63.51598221,
    "color_sector": "#FF9800"
  },
  {
    "id": 597,
    "extinto": "SANCHEZ AZUCENA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "129",
    "latitud": -31.5665334,
    "longitud": -63.51599637,
    "color_sector": "#FF9800"
  },
  {
    "id": 598,
    "extinto": "DIAZ MARIA LUISA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "132",
    "latitud": -31.56659778,
    "longitud": -63.51601691,
    "color_sector": "#FF9800"
  },
  {
    "id": 599,
    "extinto": "RANULFO CELSO GOMEZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "133",
    "latitud": -31.56648594,
    "longitud": -63.51599541,
    "color_sector": "#FF9800"
  },
  {
    "id": 600,
    "extinto": "JOSE ANTONIO DALTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "135",
    "latitud": -31.56653031,
    "longitud": -63.51600957,
    "color_sector": "#FF9800"
  },
  {
    "id": 601,
    "extinto": "PALLOTTO ELMA NOEMI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "135",
    "latitud": -31.56653031,
    "longitud": -63.51600957,
    "color_sector": "#FF9800"
  },
  {
    "id": 602,
    "extinto": "AUDISIO NESTOR",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "136",
    "latitud": -31.56655032,
    "longitud": -63.51601596,
    "color_sector": "#FF9800"
  },
  {
    "id": 603,
    "extinto": "LUIS MIGUEL AUDISIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "136",
    "latitud": -31.56655032,
    "longitud": -63.51601596,
    "color_sector": "#FF9800"
  },
  {
    "id": 604,
    "extinto": "JUANA BASILE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "136",
    "latitud": -31.56655032,
    "longitud": -63.51601596,
    "color_sector": "#FF9800"
  },
  {
    "id": 605,
    "extinto": "GARINO TERESITA DEL VALLE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "137",
    "latitud": -31.56657468,
    "longitud": -63.51602373,
    "color_sector": "#FF9800"
  },
  {
    "id": 606,
    "extinto": "IRMA ELIVE ABBA DE GARINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "138",
    "latitud": -31.56659469,
    "longitud": -63.51603012,
    "color_sector": "#FF9800"
  },
  {
    "id": 607,
    "extinto": "GARINO NELSOR",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "138",
    "latitud": -31.56659469,
    "longitud": -63.51603012,
    "color_sector": "#FF9800"
  },
  {
    "id": 608,
    "extinto": "LUCARELLI MARIA LUISA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "143",
    "latitud": -31.56657159,
    "longitud": -63.51603694,
    "color_sector": "#FF9800"
  },
  {
    "id": 609,
    "extinto": "CASTELLANO ALBERTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "143",
    "latitud": -31.56657159,
    "longitud": -63.51603694,
    "color_sector": "#FF9800"
  },
  {
    "id": 610,
    "extinto": "PERALTA ADELINA ROSA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "144",
    "latitud": -31.5665916,
    "longitud": -63.51604333,
    "color_sector": "#FF9800"
  },
  {
    "id": 611,
    "extinto": "JUAN ANTONIO COLAZO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "144",
    "latitud": -31.5665916,
    "longitud": -63.51604333,
    "color_sector": "#FF9800"
  },
  {
    "id": 612,
    "extinto": "MACHADO EMETERIO SAMUEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "150",
    "latitud": -31.56658851,
    "longitud": -63.51605654,
    "color_sector": "#FF9800"
  },
  {
    "id": 613,
    "extinto": "GLADYS MARGARITA MAPELLI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "155",
    "latitud": -31.56656541,
    "longitud": -63.51606336,
    "color_sector": "#FF9800"
  },
  {
    "id": 614,
    "extinto": "VICTOR HUGO MAPELLI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "155",
    "latitud": -31.56656541,
    "longitud": -63.51606336,
    "color_sector": "#FF9800"
  },
  {
    "id": 615,
    "extinto": "MARGONARI MIRIAN ANTONIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "156",
    "latitud": -31.56658542,
    "longitud": -63.51606975,
    "color_sector": "#FF9800"
  },
  {
    "id": 616,
    "extinto": "CASTELLANO ANGEL ALBERTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "156",
    "latitud": -31.56658542,
    "longitud": -63.51606975,
    "color_sector": "#FF9800"
  },
  {
    "id": 617,
    "extinto": "RENE OSCAR FERRERO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "156",
    "latitud": -31.56658542,
    "longitud": -63.51606975,
    "color_sector": "#FF9800"
  },
  {
    "id": 618,
    "extinto": "CRAVERO DELFO ANTONIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "158",
    "latitud": -31.56649359,
    "longitud": -63.51605464,
    "color_sector": "#FF9800"
  },
  {
    "id": 619,
    "extinto": "GALLO MARIO DEL VALLE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "160",
    "latitud": -31.56653796,
    "longitud": -63.5160688,
    "color_sector": "#FF9800"
  },
  {
    "id": 620,
    "extinto": "OSCAR ANDRES ARNEUDO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "162",
    "latitud": -31.56658233,
    "longitud": -63.51608296,
    "color_sector": "#FF9800"
  },
  {
    "id": 621,
    "extinto": "LEDESMA MARIA SUSANA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "168",
    "latitud": -31.56657924,
    "longitud": -63.51609616,
    "color_sector": "#FF9800"
  },
  {
    "id": 622,
    "extinto": "ALEJOSHUGO ALBERTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "168",
    "latitud": -31.56657924,
    "longitud": -63.51609616,
    "color_sector": "#FF9800"
  },
  {
    "id": 623,
    "extinto": "TISERA MIGUEL ANGEL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "172",
    "latitud": -31.56653178,
    "longitud": -63.51609521,
    "color_sector": "#FF9800"
  },
  {
    "id": 624,
    "extinto": "VILLARRUEL ALEJANDRA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "172",
    "latitud": -31.56653178,
    "longitud": -63.51609521,
    "color_sector": "#FF9800"
  },
  {
    "id": 625,
    "extinto": "GABRIELCO ALDO ERNESTO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "174",
    "latitud": -31.56657615,
    "longitud": -63.51610937,
    "color_sector": "#FF9800"
  },
  {
    "id": 626,
    "extinto": "RECH-RIOS ISABELLA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "176",
    "latitud": -31.56648432,
    "longitud": -63.51609426,
    "color_sector": "#FF9800"
  },
  {
    "id": 627,
    "extinto": "NEGRO PEDRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "177",
    "latitud": -31.56650868,
    "longitud": -63.51610204,
    "color_sector": "#FF9800"
  },
  {
    "id": 628,
    "extinto": "NEGRO GUILLERMO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "177",
    "latitud": -31.56650868,
    "longitud": -63.51610204,
    "color_sector": "#FF9800"
  },
  {
    "id": 629,
    "extinto": "MININ JUSTINA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "177",
    "latitud": -31.56650868,
    "longitud": -63.51610204,
    "color_sector": "#FF9800"
  },
  {
    "id": 630,
    "extinto": "MORANDO DE NEGRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "177",
    "latitud": -31.56650868,
    "longitud": -63.51610204,
    "color_sector": "#FF9800"
  },
  {
    "id": 631,
    "extinto": "NEGRO ALDO GUILLERMO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "177",
    "latitud": -31.56650868,
    "longitud": -63.51610204,
    "color_sector": "#FF9800"
  },
  {
    "id": 632,
    "extinto": "ROGGERO SUSANA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "180",
    "latitud": -31.56657306,
    "longitud": -63.51612258,
    "color_sector": "#FF9800"
  },
  {
    "id": 633,
    "extinto": "SASIA CARLOS ANTONIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "181",
    "latitud": -31.56646122,
    "longitud": -63.51610109,
    "color_sector": "#FF9800"
  },
  {
    "id": 634,
    "extinto": "RAMON LEONARDO ARRIETA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "184",
    "latitud": -31.5665256,
    "longitud": -63.51612163,
    "color_sector": "#FF9800"
  },
  {
    "id": 635,
    "extinto": "GONZALEZ JUANA COSMA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "186",
    "latitud": -31.56656997,
    "longitud": -63.51613579,
    "color_sector": "#FF9800"
  },
  {
    "id": 636,
    "extinto": "RAMON HUGO FERREYRA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "186",
    "latitud": -31.56656997,
    "longitud": -63.51613579,
    "color_sector": "#FF9800"
  },
  {
    "id": 637,
    "extinto": "ANA ESTER GOMEZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "188",
    "latitud": -31.56647814,
    "longitud": -63.51612068,
    "color_sector": "#FF9800"
  },
  {
    "id": 638,
    "extinto": "ALBERTO RAMON CONTRINI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "191",
    "latitud": -31.56654687,
    "longitud": -63.51614261,
    "color_sector": "#FF9800"
  },
  {
    "id": 639,
    "extinto": "MARIA ESTHER PERALTA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "191",
    "latitud": -31.56654687,
    "longitud": -63.51614261,
    "color_sector": "#FF9800"
  },
  {
    "id": 640,
    "extinto": "GERARDO DANIEL CONTRINI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "191",
    "latitud": -31.56654687,
    "longitud": -63.51614261,
    "color_sector": "#FF9800"
  },
  {
    "id": 641,
    "extinto": "GOMEZ ANA ROSA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "195",
    "latitud": -31.56649941,
    "longitud": -63.51614166,
    "color_sector": "#FF9800"
  },
  {
    "id": 642,
    "extinto": "GOMEZ CARLOS HORACIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "196",
    "latitud": -31.56651942,
    "longitud": -63.51614805,
    "color_sector": "#FF9800"
  },
  {
    "id": 643,
    "extinto": "GOMEZ JOSE MARIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "196",
    "latitud": -31.56651942,
    "longitud": -63.51614805,
    "color_sector": "#FF9800"
  },
  {
    "id": 644,
    "extinto": "ROSA  PAULA  CARANDINO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "196",
    "latitud": -31.56651942,
    "longitud": -63.51614805,
    "color_sector": "#FF9800"
  },
  {
    "id": 645,
    "extinto": "DELIA DORA CORDOBA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "200",
    "latitud": -31.56647196,
    "longitud": -63.5161471,
    "color_sector": "#FF9800"
  },
  {
    "id": 646,
    "extinto": "BUSANO - MONTENEGRO GABRIEL ALEJANDRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "203",
    "latitud": -31.56654069,
    "longitud": -63.51616903,
    "color_sector": "#FF9800"
  },
  {
    "id": 647,
    "extinto": "FRASSA MARIA ANGELA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "204",
    "latitud": -31.56656069,
    "longitud": -63.51617542,
    "color_sector": "#FF9800"
  },
  {
    "id": 648,
    "extinto": "MARSILI JUAN PABLO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "204",
    "latitud": -31.56656069,
    "longitud": -63.51617542,
    "color_sector": "#FF9800"
  },
  {
    "id": 649,
    "extinto": "MARSILI JUAN CARLOS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "204",
    "latitud": -31.56656069,
    "longitud": -63.51617542,
    "color_sector": "#FF9800"
  },
  {
    "id": 650,
    "extinto": "ENCARNACION ABAD",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "205",
    "latitud": -31.56644886,
    "longitud": -63.51615392,
    "color_sector": "#FF9800"
  },
  {
    "id": 651,
    "extinto": "PEDRO TUSELL",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "205",
    "latitud": -31.56644886,
    "longitud": -63.51615392,
    "color_sector": "#FF9800"
  },
  {
    "id": 652,
    "extinto": "RAMON GUILLERMO HERRERA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "206",
    "latitud": -31.56646887,
    "longitud": -63.51616031,
    "color_sector": "#FF9800"
  },
  {
    "id": 653,
    "extinto": "VELI LINO SANDRI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "207",
    "latitud": -31.56649323,
    "longitud": -63.51616808,
    "color_sector": "#FF9800"
  },
  {
    "id": 654,
    "extinto": "OLGA OFELIA ABUD",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "207",
    "latitud": -31.56649323,
    "longitud": -63.51616808,
    "color_sector": "#FF9800"
  },
  {
    "id": 655,
    "extinto": "GALLARDO JOSEFA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "208",
    "latitud": -31.56651324,
    "longitud": -63.51617447,
    "color_sector": "#FF9800"
  },
  {
    "id": 656,
    "extinto": "ILDA MARIA BERTOTTI",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "209",
    "latitud": -31.5665376,
    "longitud": -63.51618224,
    "color_sector": "#FF9800"
  },
  {
    "id": 657,
    "extinto": "SASIA ANGEL VICTORIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "209",
    "latitud": -31.5665376,
    "longitud": -63.51618224,
    "color_sector": "#FF9800"
  },
  {
    "id": 658,
    "extinto": "SAAVEDRA LUIS ELSO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "211",
    "latitud": -31.56644577,
    "longitud": -63.51616713,
    "color_sector": "#FF9800"
  },
  {
    "id": 659,
    "extinto": "SAAVEDRA LUIS ELSO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "211",
    "latitud": -31.56644577,
    "longitud": -63.51616713,
    "color_sector": "#FF9800"
  },
  {
    "id": 660,
    "extinto": "SAAVEDRA AGUSTIN NICOLAS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "212",
    "latitud": -31.56646578,
    "longitud": -63.51617352,
    "color_sector": "#FF9800"
  },
  {
    "id": 661,
    "extinto": "GIGENA DANTE JESUS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "215",
    "latitud": -31.56653451,
    "longitud": -63.51619545,
    "color_sector": "#FF9800"
  },
  {
    "id": 662,
    "extinto": "ONTIVERO RAMON REVELINDO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "216",
    "latitud": -31.56655451,
    "longitud": -63.51620184,
    "color_sector": "#FF9800"
  },
  {
    "id": 663,
    "extinto": "PEREZ HECTOR ROQUE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "1",
    "latitud": -31.56658559,
    "longitud": -63.51554227,
    "color_sector": "#FF9800"
  },
  {
    "id": 664,
    "extinto": "ROQUE CLAUDIO PEREZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "1",
    "latitud": -31.56658559,
    "longitud": -63.51554227,
    "color_sector": "#FF9800"
  },
  {
    "id": 665,
    "extinto": "ELDA LUQUE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "1",
    "latitud": -31.56658559,
    "longitud": -63.51554227,
    "color_sector": "#FF9800"
  },
  {
    "id": 666,
    "extinto": "PISTAN ELVIRA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "5",
    "latitud": -31.56667516,
    "longitud": -63.51556675,
    "color_sector": "#FF9800"
  },
  {
    "id": 667,
    "extinto": "RODRIGUEZ DOMINGO RAMON",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "5",
    "latitud": -31.56667516,
    "longitud": -63.51556675,
    "color_sector": "#FF9800"
  },
  {
    "id": 668,
    "extinto": "RODRIGUEZ MARIA DEL VALLE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "6",
    "latitud": -31.56669536,
    "longitud": -63.51557227,
    "color_sector": "#FF9800"
  },
  {
    "id": 669,
    "extinto": "NIEVA PAOLA VERONICA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "6",
    "latitud": -31.56669536,
    "longitud": -63.51557227,
    "color_sector": "#FF9800"
  },
  {
    "id": 670,
    "extinto": "ALDANA DE LOS MILAGROS GONZALEZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "6",
    "latitud": -31.56669536,
    "longitud": -63.51557227,
    "color_sector": "#FF9800"
  },
  {
    "id": 671,
    "extinto": "CHINCHO MARTA SILVIA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "7",
    "latitud": -31.56671555,
    "longitud": -63.51557779,
    "color_sector": "#FF9800"
  },
  {
    "id": 672,
    "extinto": "CORIA HORACIO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "7",
    "latitud": -31.56671555,
    "longitud": -63.51557779,
    "color_sector": "#FF9800"
  },
  {
    "id": 673,
    "extinto": "ANGELA DEL ROSARIO HEREDIA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "7",
    "latitud": -31.56671555,
    "longitud": -63.51557779,
    "color_sector": "#FF9800"
  },
  {
    "id": 674,
    "extinto": "CARLOS  ERNESTO  CAPELLO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "12",
    "latitud": -31.56667249,
    "longitud": -63.51558008,
    "color_sector": "#FF9800"
  },
  {
    "id": 675,
    "extinto": "SORIA JULIO HECTOR",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "14",
    "latitud": -31.56671288,
    "longitud": -63.51559112,
    "color_sector": "#FF9800"
  },
  {
    "id": 676,
    "extinto": "SARMIENTO MARIA ESPERANZA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "19",
    "latitud": -31.56666982,
    "longitud": -63.51559342,
    "color_sector": "#FF9800"
  },
  {
    "id": 677,
    "extinto": "HERNAN DAVID BERTOLINI",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "19",
    "latitud": -31.56666982,
    "longitud": -63.51559342,
    "color_sector": "#FF9800"
  },
  {
    "id": 678,
    "extinto": "SORIA OSVALDO ALFREDO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "24",
    "latitud": -31.56662236,
    "longitud": -63.51559451,
    "color_sector": "#FF9800"
  },
  {
    "id": 679,
    "extinto": "EVA ROSA VALLEJO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "25",
    "latitud": -31.56664256,
    "longitud": -63.51560003,
    "color_sector": "#FF9800"
  },
  {
    "id": 680,
    "extinto": "ALICIA CRISTINA VILLAFAÑE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "25",
    "latitud": -31.56664256,
    "longitud": -63.51560003,
    "color_sector": "#FF9800"
  },
  {
    "id": 681,
    "extinto": "ROSARIO DAMIAN VILLAFAÑE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "25",
    "latitud": -31.56664256,
    "longitud": -63.51560003,
    "color_sector": "#FF9800"
  },
  {
    "id": 682,
    "extinto": "LUDUEÑA JOSE LUIS",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "26",
    "latitud": -31.56666714,
    "longitud": -63.51560675,
    "color_sector": "#FF9800"
  },
  {
    "id": 683,
    "extinto": "DELFIN AMADO BONGIOVANNI",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "27",
    "latitud": -31.56668734,
    "longitud": -63.51561227,
    "color_sector": "#FF9800"
  },
  {
    "id": 684,
    "extinto": "ELMA YLDA BERNARDI",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "27",
    "latitud": -31.56668734,
    "longitud": -63.51561227,
    "color_sector": "#FF9800"
  },
  {
    "id": 685,
    "extinto": "MARIA ISABEL MORAL",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "28",
    "latitud": -31.56670754,
    "longitud": -63.51561779,
    "color_sector": "#FF9800"
  },
  {
    "id": 686,
    "extinto": "FEDERICO  NICOLAS  NAVARRO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "29",
    "latitud": -31.5665749,
    "longitud": -63.5155956,
    "color_sector": "#FF9800"
  },
  {
    "id": 687,
    "extinto": "PEDRO  ALBERTO  NAVARRO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "29",
    "latitud": -31.5665749,
    "longitud": -63.5155956,
    "color_sector": "#FF9800"
  },
  {
    "id": 688,
    "extinto": "GLADY NOEMI MARIN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "29",
    "latitud": -31.5665749,
    "longitud": -63.5155956,
    "color_sector": "#FF9800"
  },
  {
    "id": 689,
    "extinto": "HECTOR MIGUEL SARMIENTO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "30",
    "latitud": -31.5665951,
    "longitud": -63.51560112,
    "color_sector": "#FF9800"
  },
  {
    "id": 690,
    "extinto": "PEDRO CORZO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "32",
    "latitud": -31.56663988,
    "longitud": -63.51561336,
    "color_sector": "#FF9800"
  },
  {
    "id": 691,
    "extinto": "MARIA ROSA LUQUE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "32",
    "latitud": -31.56663988,
    "longitud": -63.51561336,
    "color_sector": "#FF9800"
  },
  {
    "id": 692,
    "extinto": "AVERSA ROBERTO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "34",
    "latitud": -31.56668467,
    "longitud": -63.5156256,
    "color_sector": "#FF9800"
  },
  {
    "id": 693,
    "extinto": "ABUD DIBE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "34",
    "latitud": -31.56668467,
    "longitud": -63.5156256,
    "color_sector": "#FF9800"
  },
  {
    "id": 694,
    "extinto": "CACERES ALINDA URELIA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "38",
    "latitud": -31.56661702,
    "longitud": -63.51562117,
    "color_sector": "#FF9800"
  },
  {
    "id": 695,
    "extinto": "FARIAS RAMON",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "40",
    "latitud": -31.5666618,
    "longitud": -63.51563341,
    "color_sector": "#FF9800"
  },
  {
    "id": 696,
    "extinto": "JUAN FEDERICO WERNER ALMADA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "41",
    "latitud": -31.566682,
    "longitud": -63.51563893,
    "color_sector": "#FF9800"
  },
  {
    "id": 697,
    "extinto": "ALVAREZ MARIA ALCIRA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "42",
    "latitud": -31.56670219,
    "longitud": -63.51564446,
    "color_sector": "#FF9800"
  },
  {
    "id": 698,
    "extinto": "MORAL AMERICO ANTONIO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "42",
    "latitud": -31.56670219,
    "longitud": -63.51564446,
    "color_sector": "#FF9800"
  },
  {
    "id": 699,
    "extinto": "ROMILDA DELFINA CAMUSSO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "44",
    "latitud": -31.56658976,
    "longitud": -63.51562778,
    "color_sector": "#FF9800"
  },
  {
    "id": 700,
    "extinto": "PERALTA TERESA NOEMI",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "45",
    "latitud": -31.56661434,
    "longitud": -63.51563451,
    "color_sector": "#FF9800"
  },
  {
    "id": 701,
    "extinto": "URAN JUAN PABLO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "46",
    "latitud": -31.56663454,
    "longitud": -63.51564003,
    "color_sector": "#FF9800"
  },
  {
    "id": 702,
    "extinto": "IRCANO RAMON SERVETTO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "47",
    "latitud": -31.56665913,
    "longitud": -63.51564675,
    "color_sector": "#FF9800"
  },
  {
    "id": 703,
    "extinto": "MARTA  INES  VIGNOLI",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "47",
    "latitud": -31.56665913,
    "longitud": -63.51564675,
    "color_sector": "#FF9800"
  },
  {
    "id": 704,
    "extinto": "PONCE DENIZ RAMON",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "48",
    "latitud": -31.56667933,
    "longitud": -63.51565227,
    "color_sector": "#FF9800"
  },
  {
    "id": 705,
    "extinto": "PONCE SARA TRINIDAD",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "48",
    "latitud": -31.56667933,
    "longitud": -63.51565227,
    "color_sector": "#FF9800"
  },
  {
    "id": 706,
    "extinto": "SORIA LUIS ENRIQUE",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "49",
    "latitud": -31.56669952,
    "longitud": -63.51565779,
    "color_sector": "#FF9800"
  },
  {
    "id": 707,
    "extinto": "FERNANDEZ LIDIA ELSA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "51",
    "latitud": -31.56658708,
    "longitud": -63.51564112,
    "color_sector": "#FF9800"
  },
  {
    "id": 708,
    "extinto": "JUAN LORENZO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "51",
    "latitud": -31.56658708,
    "longitud": -63.51564112,
    "color_sector": "#FF9800"
  },
  {
    "id": 709,
    "extinto": "PUSIOL VICTORIO M",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "52",
    "latitud": -31.56661167,
    "longitud": -63.51564784,
    "color_sector": "#FF9800"
  },
  {
    "id": 710,
    "extinto": "CATALINA BATTAGLINO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "52",
    "latitud": -31.56661167,
    "longitud": -63.51564784,
    "color_sector": "#FF9800"
  },
  {
    "id": 711,
    "extinto": "CRISTIAN JAVIER PEREZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "53",
    "latitud": -31.56663187,
    "longitud": -63.51565336,
    "color_sector": "#FF9800"
  },
  {
    "id": 712,
    "extinto": "JUAN DOMINGO RAMIREZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "53",
    "latitud": -31.56663187,
    "longitud": -63.51565336,
    "color_sector": "#FF9800"
  },
  {
    "id": 713,
    "extinto": "ALBARRACIN MARCELO GASPARIN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "54",
    "latitud": -31.56665646,
    "longitud": -63.51566008,
    "color_sector": "#FF9800"
  },
  {
    "id": 714,
    "extinto": "CACERES MARIA AIDA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "55",
    "latitud": -31.56667665,
    "longitud": -63.5156656,
    "color_sector": "#FF9800"
  },
  {
    "id": 715,
    "extinto": "RAMOS JUAN CARLOS",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "55",
    "latitud": -31.56667665,
    "longitud": -63.5156656,
    "color_sector": "#FF9800"
  },
  {
    "id": 716,
    "extinto": "MOYANO HECTOR CALIXTO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "56",
    "latitud": -31.56669685,
    "longitud": -63.51567112,
    "color_sector": "#FF9800"
  },
  {
    "id": 717,
    "extinto": "ANTONIA EDITH LUCERO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "56",
    "latitud": -31.56669685,
    "longitud": -63.51567112,
    "color_sector": "#FF9800"
  },
  {
    "id": 718,
    "extinto": "MORAL RAUL RICARDO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "56",
    "latitud": -31.56669685,
    "longitud": -63.51567112,
    "color_sector": "#FF9800"
  },
  {
    "id": 719,
    "extinto": "CIVARELLO ADELA YOLANDA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "57",
    "latitud": -31.56656422,
    "longitud": -63.51564893,
    "color_sector": "#FF9800"
  },
  {
    "id": 720,
    "extinto": "JOSE PALACIUK",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "57",
    "latitud": -31.56656422,
    "longitud": -63.51564893,
    "color_sector": "#FF9800"
  },
  {
    "id": 721,
    "extinto": "SANCHEZ BRISA ANAHI",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "58",
    "latitud": -31.56658441,
    "longitud": -63.51565445,
    "color_sector": "#FF9800"
  },
  {
    "id": 722,
    "extinto": "HEREDIA  MARCIAL  EXEQUIEL",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "58",
    "latitud": -31.56658441,
    "longitud": -63.51565445,
    "color_sector": "#FF9800"
  },
  {
    "id": 723,
    "extinto": "MORAL RAMON AUGUSTO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "61",
    "latitud": -31.56665378,
    "longitud": -63.51567341,
    "color_sector": "#FF9800"
  },
  {
    "id": 724,
    "extinto": "MARIA SUSANA MORAL",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "62",
    "latitud": -31.56667398,
    "longitud": -63.51567893,
    "color_sector": "#FF9800"
  },
  {
    "id": 725,
    "extinto": "LUCERO MARIA ESPERANZA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "63",
    "latitud": -31.56669418,
    "longitud": -63.51568445,
    "color_sector": "#FF9800"
  },
  {
    "id": 726,
    "extinto": "LUCERO JUAN PABLO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "63",
    "latitud": -31.56669418,
    "longitud": -63.51568445,
    "color_sector": "#FF9800"
  },
  {
    "id": 727,
    "extinto": "MORAL RODRIGO JAVIER",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "63",
    "latitud": -31.56669418,
    "longitud": -63.51568445,
    "color_sector": "#FF9800"
  },
  {
    "id": 728,
    "extinto": "MORAL ANTONIO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "63",
    "latitud": -31.56669418,
    "longitud": -63.51568445,
    "color_sector": "#FF9800"
  },
  {
    "id": 729,
    "extinto": "MACHADO MARIA LUISA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "63",
    "latitud": -31.56669418,
    "longitud": -63.51568445,
    "color_sector": "#FF9800"
  },
  {
    "id": 730,
    "extinto": "MORAL AMERICO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "63",
    "latitud": -31.56669418,
    "longitud": -63.51568445,
    "color_sector": "#FF9800"
  },
  {
    "id": 731,
    "extinto": "MIGUEL ANGEL ABBA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "64",
    "latitud": -31.56656154,
    "longitud": -63.51566226,
    "color_sector": "#FF9800"
  },
  {
    "id": 732,
    "extinto": "CAROLINA TESTA DE BERTOLEZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "65",
    "latitud": -31.56658174,
    "longitud": -63.51566778,
    "color_sector": "#FF9800"
  },
  {
    "id": 733,
    "extinto": "DOMINGO BERTOLEZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "65",
    "latitud": -31.56658174,
    "longitud": -63.51566778,
    "color_sector": "#FF9800"
  },
  {
    "id": 734,
    "extinto": "EDUARDO BERTOLEZ",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "65",
    "latitud": -31.56658174,
    "longitud": -63.51566778,
    "color_sector": "#FF9800"
  },
  {
    "id": 735,
    "extinto": "CARABANTE HECTOR ANTONIO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "66",
    "latitud": -31.56660633,
    "longitud": -63.5156745,
    "color_sector": "#FF9800"
  },
  {
    "id": 736,
    "extinto": "MARIA ERNESTA ROSAS",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "66",
    "latitud": -31.56660633,
    "longitud": -63.5156745,
    "color_sector": "#FF9800"
  },
  {
    "id": 737,
    "extinto": "ROSAS LIDIA NATIVIDAD",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "67",
    "latitud": -31.56662653,
    "longitud": -63.51568002,
    "color_sector": "#FF9800"
  },
  {
    "id": 738,
    "extinto": "NIVIO DOMINGO LEGUIZAMON",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "67",
    "latitud": -31.56662653,
    "longitud": -63.51568002,
    "color_sector": "#FF9800"
  },
  {
    "id": 739,
    "extinto": "MEDRAN FELIZ JOSE RAMON",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "68",
    "latitud": -31.56665111,
    "longitud": -63.51568675,
    "color_sector": "#FF9800"
  },
  {
    "id": 740,
    "extinto": "BIANCIOTTI NATALIA MAGDALENA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "68",
    "latitud": -31.56665111,
    "longitud": -63.51568675,
    "color_sector": "#FF9800"
  },
  {
    "id": 741,
    "extinto": "MARIA CRISTINA MEDRAN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "68",
    "latitud": -31.56665111,
    "longitud": -63.51568675,
    "color_sector": "#FF9800"
  },
  {
    "id": 742,
    "extinto": "ELISA MARIELA CAMPODONICO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "69",
    "latitud": -31.56667131,
    "longitud": -63.51569227,
    "color_sector": "#FF9800"
  },
  {
    "id": 743,
    "extinto": "GUZMAN MARCELA ALEJANDRA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "70",
    "latitud": -31.56669151,
    "longitud": -63.51569779,
    "color_sector": "#FF9800"
  },
  {
    "id": 744,
    "extinto": "MARINA MARISEL GUZMAN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "70",
    "latitud": -31.56669151,
    "longitud": -63.51569779,
    "color_sector": "#FF9800"
  },
  {
    "id": 745,
    "extinto": "BERTOLEZ EDUARDO ANGEL",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "72",
    "latitud": -31.56657907,
    "longitud": -63.51568112,
    "color_sector": "#FF9800"
  },
  {
    "id": 746,
    "extinto": "DIAZ CRISTIAN JONATAN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "73",
    "latitud": -31.56660366,
    "longitud": -63.51568784,
    "color_sector": "#FF9800"
  },
  {
    "id": 747,
    "extinto": "GUZMAN RITA RAQUEL",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "75",
    "latitud": -31.56664844,
    "longitud": -63.51570008,
    "color_sector": "#FF9800"
  },
  {
    "id": 748,
    "extinto": "LUDUEÑA ELVIO ARGENTINO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "76",
    "latitud": -31.56666864,
    "longitud": -63.5157056,
    "color_sector": "#FF9800"
  },
  {
    "id": 749,
    "extinto": "PERALTA MARIA EDIT",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "78",
    "latitud": -31.5665562,
    "longitud": -63.51568893,
    "color_sector": "#FF9800"
  },
  {
    "id": 750,
    "extinto": "PEREZ PETRONA SARA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "78",
    "latitud": -31.5665562,
    "longitud": -63.51568893,
    "color_sector": "#FF9800"
  },
  {
    "id": 751,
    "extinto": "JOSE ANGEL RAMALLO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "79",
    "latitud": -31.5665764,
    "longitud": -63.51569445,
    "color_sector": "#FF9800"
  },
  {
    "id": 752,
    "extinto": "MARTA PLEITAVINO DE RAMALLO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "79",
    "latitud": -31.5665764,
    "longitud": -63.51569445,
    "color_sector": "#FF9800"
  },
  {
    "id": 753,
    "extinto": "LUDEUÑA CANDIDO ERNESTO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "81",
    "latitud": -31.56662118,
    "longitud": -63.51570669,
    "color_sector": "#FF9800"
  },
  {
    "id": 754,
    "extinto": "BERTORELLO TERESA",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "81",
    "latitud": -31.56662118,
    "longitud": -63.51570669,
    "color_sector": "#FF9800"
  },
  {
    "id": 755,
    "extinto": "LUDUEÑA CANDIDO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "82",
    "latitud": -31.56664577,
    "longitud": -63.51571341,
    "color_sector": "#FF9800"
  },
  {
    "id": 756,
    "extinto": "ARGUELLO DE LUDUEÑA ROSARIO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "82",
    "latitud": -31.56664577,
    "longitud": -63.51571341,
    "color_sector": "#FF9800"
  },
  {
    "id": 757,
    "extinto": "LUDUEÑA RAMON AMERICO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "82",
    "latitud": -31.56664577,
    "longitud": -63.51571341,
    "color_sector": "#FF9800"
  },
  {
    "id": 758,
    "extinto": "LUDUEÑA JUSTO GERMAN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "82",
    "latitud": -31.56664577,
    "longitud": -63.51571341,
    "color_sector": "#FF9800"
  },
  {
    "id": 759,
    "extinto": "LUDUEÑA GERMAN",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "82",
    "latitud": -31.56664577,
    "longitud": -63.51571341,
    "color_sector": "#FF9800"
  },
  {
    "id": 760,
    "extinto": "DAVICINO ORLANDO NICANOR",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "84",
    "latitud": -31.56668616,
    "longitud": -63.51572445,
    "color_sector": "#FF9800"
  },
  {
    "id": 761,
    "extinto": "LUCIA SILVIA MARENGO",
    "sector": "NARANJA",
    "lote": "24",
    "nro": "84",
    "latitud": -31.56668616,
    "longitud": -63.51572445,
    "color_sector": "#FF9800"
  },
  {
    "id": 762,
    "extinto": "COMPANY JOSE LUIS",
    "sector": "NARANJA",
    "lote": "25",
    "nro": "1",
    "latitud": -31.56657127,
    "longitud": -63.51535385,
    "color_sector": "#FF9800"
  },
  {
    "id": 763,
    "extinto": "PEDRO BESSONE",
    "sector": "NARANJA",
    "lote": "25",
    "nro": "12",
    "latitud": -31.56667736,
    "longitud": -63.51538231,
    "color_sector": "#FF9800"
  },
  {
    "id": 764,
    "extinto": "MARIA ELVA MARIOTTA",
    "sector": "NARANJA",
    "lote": "25",
    "nro": "42",
    "latitud": -31.56667046,
    "longitud": -63.5154503,
    "color_sector": "#FF9800"
  },
  {
    "id": 765,
    "extinto": "MIGUEL GUALDA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "12",
    "latitud": -31.56682889,
    "longitud": -63.51550556,
    "color_sector": "#FF9800"
  },
  {
    "id": 766,
    "extinto": "JUANA GALERA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "12",
    "latitud": -31.56682889,
    "longitud": -63.51550556,
    "color_sector": "#FF9800"
  },
  {
    "id": 767,
    "extinto": "JOSE ANTONIO FUNES",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "15",
    "latitud": -31.56686249,
    "longitud": -63.5155177,
    "color_sector": "#FF9800"
  },
  {
    "id": 768,
    "extinto": "RAQUEL HERRERA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "15",
    "latitud": -31.56686249,
    "longitud": -63.5155177,
    "color_sector": "#FF9800"
  },
  {
    "id": 769,
    "extinto": "ALVAREZ LORENZO NICOLAS",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "17",
    "latitud": -31.56671075,
    "longitud": -63.51548827,
    "color_sector": "#FF9800"
  },
  {
    "id": 770,
    "extinto": "RAUL ANDRES ALVAREZ",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "18",
    "latitud": -31.56672195,
    "longitud": -63.51549231,
    "color_sector": "#FF9800"
  },
  {
    "id": 771,
    "extinto": "LUDUEÑA DANIEL FLORENCIO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "24",
    "latitud": -31.56678916,
    "longitud": -63.51551658,
    "color_sector": "#FF9800"
  },
  {
    "id": 772,
    "extinto": "NILDA ROSA LUQUE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "24",
    "latitud": -31.56678916,
    "longitud": -63.51551658,
    "color_sector": "#FF9800"
  },
  {
    "id": 773,
    "extinto": "LUDUEÑA JORGE ALBERTO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "25",
    "latitud": -31.56680036,
    "longitud": -63.51552062,
    "color_sector": "#FF9800"
  },
  {
    "id": 774,
    "extinto": "ROSA BEATRIZ CLAVERO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "26",
    "latitud": -31.56681156,
    "longitud": -63.51552467,
    "color_sector": "#FF9800"
  },
  {
    "id": 775,
    "extinto": "RAMOS ELVA ADELA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "28",
    "latitud": -31.56683396,
    "longitud": -63.51553275,
    "color_sector": "#FF9800"
  },
  {
    "id": 776,
    "extinto": "ABEL  OSACAR  BIANCO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "28",
    "latitud": -31.56683396,
    "longitud": -63.51553275,
    "color_sector": "#FF9800"
  },
  {
    "id": 777,
    "extinto": "GARCIA RAMON BAUSTISTA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "29",
    "latitud": -31.56684516,
    "longitud": -63.5155368,
    "color_sector": "#FF9800"
  },
  {
    "id": 778,
    "extinto": "DORA EDIT PERALTA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "29",
    "latitud": -31.56684516,
    "longitud": -63.5155368,
    "color_sector": "#FF9800"
  },
  {
    "id": 779,
    "extinto": "MAÑAY JUSTO ELIAS",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "30",
    "latitud": -31.56685636,
    "longitud": -63.51554084,
    "color_sector": "#FF9800"
  },
  {
    "id": 780,
    "extinto": "MAÑAY MIRIAM ELENA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "30",
    "latitud": -31.56685636,
    "longitud": -63.51554084,
    "color_sector": "#FF9800"
  },
  {
    "id": 781,
    "extinto": "LUDUEÑA JOSE RAMON",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "38",
    "latitud": -31.56677183,
    "longitud": -63.51553568,
    "color_sector": "#FF9800"
  },
  {
    "id": 782,
    "extinto": "BELTRAMO AVELINO JOSE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "39",
    "latitud": -31.56678303,
    "longitud": -63.51553972,
    "color_sector": "#FF9800"
  },
  {
    "id": 783,
    "extinto": "LUDUEÑA ROGELIO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "40",
    "latitud": -31.56679423,
    "longitud": -63.51554377,
    "color_sector": "#FF9800"
  },
  {
    "id": 784,
    "extinto": "GERBINO MERCEDEZ",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "40",
    "latitud": -31.56679423,
    "longitud": -63.51554377,
    "color_sector": "#FF9800"
  },
  {
    "id": 785,
    "extinto": "RAMON ANTONIO CLAVERO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "40",
    "latitud": -31.56679423,
    "longitud": -63.51554377,
    "color_sector": "#FF9800"
  },
  {
    "id": 786,
    "extinto": "RAMONA QUINTINA LUDUEÑA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "40",
    "latitud": -31.56679423,
    "longitud": -63.51554377,
    "color_sector": "#FF9800"
  },
  {
    "id": 787,
    "extinto": "JOSE NESTOR LUQUE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "42",
    "latitud": -31.56681663,
    "longitud": -63.51555186,
    "color_sector": "#FF9800"
  },
  {
    "id": 788,
    "extinto": "LIA ESTER PERALTA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "42",
    "latitud": -31.56681663,
    "longitud": -63.51555186,
    "color_sector": "#FF9800"
  },
  {
    "id": 789,
    "extinto": "GIRAUDO ALFREDO JORGE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "43",
    "latitud": -31.56682784,
    "longitud": -63.5155559,
    "color_sector": "#FF9800"
  },
  {
    "id": 790,
    "extinto": "PETTINARI RAYMUNDO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "44",
    "latitud": -31.56683904,
    "longitud": -63.51555994,
    "color_sector": "#FF9800"
  },
  {
    "id": 791,
    "extinto": "JORGE RAUL ORELLANO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "45",
    "latitud": -31.56685024,
    "longitud": -63.51556399,
    "color_sector": "#FF9800"
  },
  {
    "id": 792,
    "extinto": "OLDEVINA MARRONE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "50",
    "latitud": -31.5667321,
    "longitud": -63.51554669,
    "color_sector": "#FF9800"
  },
  {
    "id": 793,
    "extinto": "RAFAEL ALBERTO JUAREZ",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "50",
    "latitud": -31.5667321,
    "longitud": -63.51554669,
    "color_sector": "#FF9800"
  },
  {
    "id": 794,
    "extinto": "CASAS ERNESTO BACILIO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "51",
    "latitud": -31.5667433,
    "longitud": -63.51555074,
    "color_sector": "#FF9800"
  },
  {
    "id": 795,
    "extinto": "JUAN ELIO RIVATA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "53",
    "latitud": -31.5667657,
    "longitud": -63.51555883,
    "color_sector": "#FF9800"
  },
  {
    "id": 796,
    "extinto": "ARTURO TELMO TISERA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "53",
    "latitud": -31.5667657,
    "longitud": -63.51555883,
    "color_sector": "#FF9800"
  },
  {
    "id": 797,
    "extinto": "JUANA DOLORES TISSERA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "53",
    "latitud": -31.5667657,
    "longitud": -63.51555883,
    "color_sector": "#FF9800"
  },
  {
    "id": 798,
    "extinto": "MARIA FRANCISCA RODRIGUEZ",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "53",
    "latitud": -31.5667657,
    "longitud": -63.51555883,
    "color_sector": "#FF9800"
  },
  {
    "id": 799,
    "extinto": "VICTORIO SILVESTRE CIVALLERO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "53",
    "latitud": -31.5667657,
    "longitud": -63.51555883,
    "color_sector": "#FF9800"
  },
  {
    "id": 800,
    "extinto": "JUNCOS ESTHER RAMONA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "54",
    "latitud": -31.56677691,
    "longitud": -63.51556287,
    "color_sector": "#FF9800"
  },
  {
    "id": 801,
    "extinto": "JUNCOS JUAN DOMINGO",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "54",
    "latitud": -31.56677691,
    "longitud": -63.51556287,
    "color_sector": "#FF9800"
  },
  {
    "id": 802,
    "extinto": "VAZQUEZ MARIA INES",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "55",
    "latitud": -31.56678811,
    "longitud": -63.51556691,
    "color_sector": "#FF9800"
  },
  {
    "id": 803,
    "extinto": "RIVERO NELSON JOSE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "56",
    "latitud": -31.56679931,
    "longitud": -63.51557096,
    "color_sector": "#FF9800"
  },
  {
    "id": 804,
    "extinto": "RIVERO WALTER NELSON",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "56",
    "latitud": -31.56679931,
    "longitud": -63.51557096,
    "color_sector": "#FF9800"
  },
  {
    "id": 805,
    "extinto": "JOSE HIPOLITO VEGA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "57",
    "latitud": -31.56681051,
    "longitud": -63.515575,
    "color_sector": "#FF9800"
  },
  {
    "id": 806,
    "extinto": "BUSTOS BLANCA SUSANA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "57",
    "latitud": -31.56681051,
    "longitud": -63.515575,
    "color_sector": "#FF9800"
  },
  {
    "id": 807,
    "extinto": "GUILLERMO TEJEDA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "58",
    "latitud": -31.56682171,
    "longitud": -63.51557905,
    "color_sector": "#FF9800"
  },
  {
    "id": 808,
    "extinto": "MARIA DE LOS ANGELES HERRERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "1",
    "latitud": -31.56686862,
    "longitud": -63.51488856,
    "color_sector": "#4CAF50"
  },
  {
    "id": 809,
    "extinto": "RAMON ERNESTO HERRERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "1",
    "latitud": -31.56686862,
    "longitud": -63.51488856,
    "color_sector": "#4CAF50"
  },
  {
    "id": 810,
    "extinto": "BEATRIZ VIRGINIA RODRIGUEZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "2",
    "latitud": -31.56687987,
    "longitud": -63.51489244,
    "color_sector": "#4CAF50"
  },
  {
    "id": 811,
    "extinto": "EDUARDO NICOLAS GAMARRA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "3",
    "latitud": -31.56689111,
    "longitud": -63.51489632,
    "color_sector": "#4CAF50"
  },
  {
    "id": 812,
    "extinto": "FLORENCIA BAZAN",
    "sector": "VERDE",
    "lote": "27",
    "nro": "3",
    "latitud": -31.56689111,
    "longitud": -63.51489632,
    "color_sector": "#4CAF50"
  },
  {
    "id": 813,
    "extinto": "ENZO OSCAR TABORDA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "6",
    "latitud": -31.56692484,
    "longitud": -63.51490796,
    "color_sector": "#4CAF50"
  },
  {
    "id": 814,
    "extinto": "ISIDORO  ALBERTO  COMBA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "9",
    "latitud": -31.56695857,
    "longitud": -63.5149196,
    "color_sector": "#4CAF50"
  },
  {
    "id": 815,
    "extinto": "NORMA  GRACIELA  PEREZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "10",
    "latitud": -31.56696982,
    "longitud": -63.51492348,
    "color_sector": "#4CAF50"
  },
  {
    "id": 816,
    "extinto": "JORGE  OMAR  GALINDEZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "11",
    "latitud": -31.56686275,
    "longitud": -63.51491179,
    "color_sector": "#4CAF50"
  },
  {
    "id": 817,
    "extinto": "FRANCO RAUL ZABALA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "51",
    "latitud": -31.56683668,
    "longitud": -63.51501483,
    "color_sector": "#4CAF50"
  },
  {
    "id": 818,
    "extinto": "ANTONIA BARBARITA  COTTURA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "52",
    "latitud": -31.56684792,
    "longitud": -63.51501871,
    "color_sector": "#4CAF50"
  },
  {
    "id": 819,
    "extinto": "ILDEBRANDRO  RAMON  NAVARRO",
    "sector": "VERDE",
    "lote": "27",
    "nro": "55",
    "latitud": -31.56688165,
    "longitud": -63.51503035,
    "color_sector": "#4CAF50"
  },
  {
    "id": 820,
    "extinto": "JUAN CARLOS SANCHEZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "61",
    "latitud": -31.56682952,
    "longitud": -63.51504311,
    "color_sector": "#4CAF50"
  },
  {
    "id": 821,
    "extinto": "KEILA  ALDANA  BUSTAMANTE",
    "sector": "VERDE",
    "lote": "27",
    "nro": "70",
    "latitud": -31.56693071,
    "longitud": -63.51507803,
    "color_sector": "#4CAF50"
  },
  {
    "id": 822,
    "extinto": "MIGUEL  SIGIFREDO  GIORDANO",
    "sector": "VERDE",
    "lote": "27",
    "nro": "74",
    "latitud": -31.56685738,
    "longitud": -63.51507799,
    "color_sector": "#4CAF50"
  },
  {
    "id": 823,
    "extinto": "FRANCHESCO  MARTIN  NAVARRO",
    "sector": "VERDE",
    "lote": "27",
    "nro": "76",
    "latitud": -31.56687986,
    "longitud": -63.51508575,
    "color_sector": "#4CAF50"
  },
  {
    "id": 824,
    "extinto": "NAILA MELODY CAMPO",
    "sector": "VERDE",
    "lote": "27",
    "nro": "78",
    "latitud": -31.56690235,
    "longitud": -63.51509351,
    "color_sector": "#4CAF50"
  },
  {
    "id": 825,
    "extinto": "ARMANDO  EDELVE  SANTIAGO  BRUCELLI",
    "sector": "VERDE",
    "lote": "28",
    "nro": "3",
    "latitud": -31.56704215,
    "longitud": -63.51494659,
    "color_sector": "#4CAF50"
  },
  {
    "id": 826,
    "extinto": "RAMON SEBASTIAN GALIAN",
    "sector": "VERDE",
    "lote": "28",
    "nro": "4",
    "latitud": -31.56705351,
    "longitud": -63.51494998,
    "color_sector": "#4CAF50"
  },
  {
    "id": 827,
    "extinto": "LUIS EDUARDO LEGUIZAMON",
    "sector": "VERDE",
    "lote": "28",
    "nro": "19",
    "latitud": -31.56722388,
    "longitud": -63.5150009,
    "color_sector": "#4CAF50"
  },
  {
    "id": 828,
    "extinto": "OMAR FELICIANO CORREA",
    "sector": "VERDE",
    "lote": "28",
    "nro": "33",
    "latitud": -31.56715059,
    "longitud": -63.515004,
    "color_sector": "#4CAF50"
  },
  {
    "id": 829,
    "extinto": "JOSE OMAR LEGUIZAMON",
    "sector": "VERDE",
    "lote": "28",
    "nro": "59",
    "latitud": -31.56721248,
    "longitud": -63.51505295,
    "color_sector": "#4CAF50"
  },
  {
    "id": 830,
    "extinto": "JUAN BAUTISTA SANCHEZ",
    "sector": "VERDE",
    "lote": "28",
    "nro": "79",
    "latitud": -31.56720734,
    "longitud": -63.51507642,
    "color_sector": "#4CAF50"
  },
  {
    "id": 831,
    "extinto": "ARDILES FAUSTINO MARIO",
    "sector": "VERDE",
    "lote": "28",
    "nro": "160",
    "latitud": -31.56719589,
    "longitud": -63.5151839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 832,
    "extinto": "ARDILES MARCOS MANUEL",
    "sector": "VERDE",
    "lote": "28",
    "nro": "160",
    "latitud": -31.56719589,
    "longitud": -63.5151839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 833,
    "extinto": "MONTAÑA FAUSTINO",
    "sector": "VERDE",
    "lote": "28",
    "nro": "160",
    "latitud": -31.56719589,
    "longitud": -63.5151839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 834,
    "extinto": "LUQUE NORMA EDIT",
    "sector": "VERDE",
    "lote": "29",
    "nro": "1",
    "latitud": -31.56725018,
    "longitud": -63.5150117,
    "color_sector": "#4CAF50"
  },
  {
    "id": 835,
    "extinto": "BALDASA ANGELA MARI",
    "sector": "VERDE",
    "lote": "29",
    "nro": "1",
    "latitud": -31.56725018,
    "longitud": -63.5150117,
    "color_sector": "#4CAF50"
  },
  {
    "id": 836,
    "extinto": "CAON ALDO ALBINO",
    "sector": "VERDE",
    "lote": "29",
    "nro": "1",
    "latitud": -31.56725018,
    "longitud": -63.5150117,
    "color_sector": "#4CAF50"
  },
  {
    "id": 837,
    "extinto": "CAON HECTOR OSCAR",
    "sector": "VERDE",
    "lote": "29",
    "nro": "2",
    "latitud": -31.56726163,
    "longitud": -63.51501464,
    "color_sector": "#4CAF50"
  },
  {
    "id": 838,
    "extinto": "FABIAN  OSCAR CAON",
    "sector": "VERDE",
    "lote": "29",
    "nro": "2",
    "latitud": -31.56726163,
    "longitud": -63.51501464,
    "color_sector": "#4CAF50"
  },
  {
    "id": 839,
    "extinto": "LUCIANA FIDELMINA PERALTA",
    "sector": "VERDE",
    "lote": "29",
    "nro": "6",
    "latitud": -31.56730744,
    "longitud": -63.5150264,
    "color_sector": "#4CAF50"
  },
  {
    "id": 840,
    "extinto": "PEDRO ELOI GALINDES",
    "sector": "VERDE",
    "lote": "29",
    "nro": "6",
    "latitud": -31.56730744,
    "longitud": -63.5150264,
    "color_sector": "#4CAF50"
  },
  {
    "id": 841,
    "extinto": "HUMBERTO DEL VALLE VICENTE",
    "sector": "VERDE",
    "lote": "29",
    "nro": "7",
    "latitud": -31.56731889,
    "longitud": -63.51502934,
    "color_sector": "#4CAF50"
  },
  {
    "id": 842,
    "extinto": "CEBALLOS ERNESTO FERNANDO",
    "sector": "VERDE",
    "lote": "29",
    "nro": "60",
    "latitud": -31.56745787,
    "longitud": -63.51512002,
    "color_sector": "#4CAF50"
  },
  {
    "id": 843,
    "extinto": "GASPARINI ANGEL AMADO",
    "sector": "VERDE",
    "lote": "30",
    "nro": "62",
    "latitud": -31.56723494,
    "longitud": -63.5151893,
    "color_sector": "#4CAF50"
  },
  {
    "id": 844,
    "extinto": "GASPARINI BEATRIZ MARIA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "62",
    "latitud": -31.56723494,
    "longitud": -63.5151893,
    "color_sector": "#4CAF50"
  },
  {
    "id": 845,
    "extinto": "CARFAGNA IDA ROSA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "62",
    "latitud": -31.56723494,
    "longitud": -63.5151893,
    "color_sector": "#4CAF50"
  },
  {
    "id": 846,
    "extinto": "DARIO JOSE ABEL GASPARINI",
    "sector": "VERDE",
    "lote": "30",
    "nro": "63",
    "latitud": -31.5672465,
    "longitud": -63.5151916,
    "color_sector": "#4CAF50"
  },
  {
    "id": 847,
    "extinto": "MARIA INES CORDOBA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "64",
    "latitud": -31.56725805,
    "longitud": -63.51519391,
    "color_sector": "#4CAF50"
  },
  {
    "id": 848,
    "extinto": "LUIS BATAGLIA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "64",
    "latitud": -31.56725805,
    "longitud": -63.51519391,
    "color_sector": "#4CAF50"
  },
  {
    "id": 849,
    "extinto": "DIEGO NORBERTO VELZI",
    "sector": "VERDE",
    "lote": "30",
    "nro": "65",
    "latitud": -31.56726961,
    "longitud": -63.51519621,
    "color_sector": "#4CAF50"
  },
  {
    "id": 850,
    "extinto": "TABORDA JOSE RAMON",
    "sector": "VERDE",
    "lote": "30",
    "nro": "68",
    "latitud": -31.56730428,
    "longitud": -63.51520313,
    "color_sector": "#4CAF50"
  },
  {
    "id": 851,
    "extinto": "GOMEZ MARIA DE LAS MERCEDEZ",
    "sector": "VERDE",
    "lote": "30",
    "nro": "68",
    "latitud": -31.56730428,
    "longitud": -63.51520313,
    "color_sector": "#4CAF50"
  },
  {
    "id": 852,
    "extinto": "GRACIELA ALICIA TABORDA GOMEZ",
    "sector": "VERDE",
    "lote": "30",
    "nro": "68",
    "latitud": -31.56730428,
    "longitud": -63.51520313,
    "color_sector": "#4CAF50"
  },
  {
    "id": 853,
    "extinto": "TABORDA GOMEZ SILVIA DEL VALLE",
    "sector": "VERDE",
    "lote": "30",
    "nro": "68",
    "latitud": -31.56730428,
    "longitud": -63.51520313,
    "color_sector": "#4CAF50"
  },
  {
    "id": 854,
    "extinto": "MARIA JUANA DEL TRANSITO GALLARDO",
    "sector": "VERDE",
    "lote": "30",
    "nro": "69",
    "latitud": -31.56731584,
    "longitud": -63.51520543,
    "color_sector": "#4CAF50"
  },
  {
    "id": 855,
    "extinto": "VALENTIN  JUAN  LENCINAS",
    "sector": "VERDE",
    "lote": "30",
    "nro": "69",
    "latitud": -31.56731584,
    "longitud": -63.51520543,
    "color_sector": "#4CAF50"
  },
  {
    "id": 856,
    "extinto": "LUDUEÑA ROBERTA EMILIA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "70",
    "latitud": -31.56732739,
    "longitud": -63.51520774,
    "color_sector": "#4CAF50"
  },
  {
    "id": 857,
    "extinto": "BELASQUE RAMON IRINEO",
    "sector": "VERDE",
    "lote": "30",
    "nro": "70",
    "latitud": -31.56732739,
    "longitud": -63.51520774,
    "color_sector": "#4CAF50"
  },
  {
    "id": 858,
    "extinto": "NELIDA BEATRIZ CARRERA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "71",
    "latitud": -31.56733895,
    "longitud": -63.51521004,
    "color_sector": "#4CAF50"
  },
  {
    "id": 859,
    "extinto": "VELAZQUEZ CORNELIO EDUARDO",
    "sector": "VERDE",
    "lote": "30",
    "nro": "72",
    "latitud": -31.56735051,
    "longitud": -63.51521235,
    "color_sector": "#4CAF50"
  },
  {
    "id": 860,
    "extinto": "JUANA ERNESTINA VELAZQUEZ",
    "sector": "VERDE",
    "lote": "30",
    "nro": "72",
    "latitud": -31.56735051,
    "longitud": -63.51521235,
    "color_sector": "#4CAF50"
  },
  {
    "id": 861,
    "extinto": "JUAN CARLOS VELAZQUEZ",
    "sector": "VERDE",
    "lote": "30",
    "nro": "72",
    "latitud": -31.56735051,
    "longitud": -63.51521235,
    "color_sector": "#4CAF50"
  },
  {
    "id": 862,
    "extinto": "VELAZQUEZ IRINEO LEON",
    "sector": "VERDE",
    "lote": "30",
    "nro": "74",
    "latitud": -31.56737362,
    "longitud": -63.51521695,
    "color_sector": "#4CAF50"
  },
  {
    "id": 863,
    "extinto": "LUQUE JUAN CARLOS",
    "sector": "VERDE",
    "lote": "30",
    "nro": "76",
    "latitud": -31.56739673,
    "longitud": -63.51522156,
    "color_sector": "#4CAF50"
  },
  {
    "id": 864,
    "extinto": "LUQUE JUAN",
    "sector": "VERDE",
    "lote": "30",
    "nro": "76",
    "latitud": -31.56739673,
    "longitud": -63.51522156,
    "color_sector": "#4CAF50"
  },
  {
    "id": 865,
    "extinto": "VELAZQUEZ HAYDEE PETRONA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "76",
    "latitud": -31.56739673,
    "longitud": -63.51522156,
    "color_sector": "#4CAF50"
  },
  {
    "id": 866,
    "extinto": "VILLARROEL VERONICA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "77",
    "latitud": -31.56740829,
    "longitud": -63.51522387,
    "color_sector": "#4CAF50"
  },
  {
    "id": 867,
    "extinto": "VILLARROEL ROSARIO VERNABE",
    "sector": "VERDE",
    "lote": "30",
    "nro": "78",
    "latitud": -31.56741985,
    "longitud": -63.51522617,
    "color_sector": "#4CAF50"
  },
  {
    "id": 868,
    "extinto": "RAMON ALBANO GOMEZ",
    "sector": "VERDE",
    "lote": "30",
    "nro": "80",
    "latitud": -31.56744296,
    "longitud": -63.51523078,
    "color_sector": "#4CAF50"
  },
  {
    "id": 869,
    "extinto": "ANGELA DOMINGA GUARDATTI",
    "sector": "VERDE",
    "lote": "31",
    "nro": "19",
    "latitud": -31.5676931,
    "longitud": -63.51511826,
    "color_sector": "#4CAF50"
  },
  {
    "id": 870,
    "extinto": "ISABEL PETRONA GIANOTTI",
    "sector": "VERDE",
    "lote": "31",
    "nro": "115",
    "latitud": -31.56746073,
    "longitud": -63.51523257,
    "color_sector": "#4CAF50"
  },
  {
    "id": 871,
    "extinto": "DOMINGO LUIS LUDUEÑA",
    "sector": "VERDE",
    "lote": "31",
    "nro": "131",
    "latitud": -31.56764527,
    "longitud": -63.51527189,
    "color_sector": "#4CAF50"
  },
  {
    "id": 872,
    "extinto": "TERESA INES PEREYRA",
    "sector": "VERDE",
    "lote": "31",
    "nro": "131",
    "latitud": -31.56764527,
    "longitud": -63.51527189,
    "color_sector": "#4CAF50"
  },
  {
    "id": 873,
    "extinto": "ALDO ANTONIO GIACOSSA",
    "sector": "VERDE",
    "lote": "31",
    "nro": "132",
    "latitud": -31.56765681,
    "longitud": -63.51527435,
    "color_sector": "#4CAF50"
  },
  {
    "id": 874,
    "extinto": "AMALIA DOMINGA MASSIMINO",
    "sector": "VERDE",
    "lote": "31",
    "nro": "133",
    "latitud": -31.5676682,
    "longitud": -63.51527666,
    "color_sector": "#4CAF50"
  },
  {
    "id": 875,
    "extinto": "PEDRO PABLO GASPAROTTO",
    "sector": "VERDE",
    "lote": "31",
    "nro": "133",
    "latitud": -31.5676682,
    "longitud": -63.51527666,
    "color_sector": "#4CAF50"
  },
  {
    "id": 876,
    "extinto": "ANGEL CLEMENTE GASPAROTTO",
    "sector": "VERDE",
    "lote": "31",
    "nro": "133",
    "latitud": -31.5676682,
    "longitud": -63.51527666,
    "color_sector": "#4CAF50"
  },
  {
    "id": 877,
    "extinto": "NAVARRO RAMON ELOY",
    "sector": "VERDE",
    "lote": "32",
    "nro": "1",
    "latitud": -31.56682703,
    "longitud": -63.51509556,
    "color_sector": "#4CAF50"
  },
  {
    "id": 878,
    "extinto": "NAVARRO MARIA CRISTINA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "1",
    "latitud": -31.56682703,
    "longitud": -63.51509556,
    "color_sector": "#4CAF50"
  },
  {
    "id": 879,
    "extinto": "GIACOMINO OFELIA ORFINA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "1",
    "latitud": -31.56682703,
    "longitud": -63.51509556,
    "color_sector": "#4CAF50"
  },
  {
    "id": 880,
    "extinto": "MARIA ADA BUSTAMANTE",
    "sector": "VERDE",
    "lote": "32",
    "nro": "3",
    "latitud": -31.56684945,
    "longitud": -63.51510358,
    "color_sector": "#4CAF50"
  },
  {
    "id": 881,
    "extinto": "CATALINA EUGENIA YANEZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "5",
    "latitud": -31.56687187,
    "longitud": -63.51511159,
    "color_sector": "#4CAF50"
  },
  {
    "id": 882,
    "extinto": "HUGO PEDRO TAMAGNINI",
    "sector": "VERDE",
    "lote": "32",
    "nro": "5",
    "latitud": -31.56687187,
    "longitud": -63.51511159,
    "color_sector": "#4CAF50"
  },
  {
    "id": 883,
    "extinto": "MARIA DEL CARMEN MUCHELLI",
    "sector": "VERDE",
    "lote": "32",
    "nro": "23",
    "latitud": -31.56707365,
    "longitud": -63.51518376,
    "color_sector": "#4CAF50"
  },
  {
    "id": 884,
    "extinto": "DONALISIO ILDELFONSO JOSE",
    "sector": "VERDE",
    "lote": "32",
    "nro": "28",
    "latitud": -31.56712971,
    "longitud": -63.51520381,
    "color_sector": "#4CAF50"
  },
  {
    "id": 885,
    "extinto": "EMMA MOSETTO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "41",
    "latitud": -31.56684337,
    "longitud": -63.51512674,
    "color_sector": "#4CAF50"
  },
  {
    "id": 886,
    "extinto": "MONICA BEATRIZ LOPEZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "41",
    "latitud": -31.56684337,
    "longitud": -63.51512674,
    "color_sector": "#4CAF50"
  },
  {
    "id": 887,
    "extinto": "CESAR EDUARDO DURAN",
    "sector": "VERDE",
    "lote": "32",
    "nro": "51",
    "latitud": -31.56695548,
    "longitud": -63.51516683,
    "color_sector": "#4CAF50"
  },
  {
    "id": 888,
    "extinto": "GRACIELA GENOVEVA GONZALEZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "52",
    "latitud": -31.56696669,
    "longitud": -63.51517084,
    "color_sector": "#4CAF50"
  },
  {
    "id": 889,
    "extinto": "RAMON  ALBERTO  VELEZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "74",
    "latitud": -31.56721331,
    "longitud": -63.51525905,
    "color_sector": "#4CAF50"
  },
  {
    "id": 890,
    "extinto": "BIANCIOTTO ORESTE SALVINO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "76",
    "latitud": -31.56723573,
    "longitud": -63.51526707,
    "color_sector": "#4CAF50"
  },
  {
    "id": 891,
    "extinto": "PEDRO NILO MANDILE",
    "sector": "VERDE",
    "lote": "32",
    "nro": "78",
    "latitud": -31.56682477,
    "longitud": -63.51515093,
    "color_sector": "#4CAF50"
  },
  {
    "id": 892,
    "extinto": "ANITA VIOLETA VERDUNA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "84",
    "latitud": -31.56689203,
    "longitud": -63.51517499,
    "color_sector": "#4CAF50"
  },
  {
    "id": 893,
    "extinto": "NORA  ESTELA  RUIZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "84",
    "latitud": -31.56689203,
    "longitud": -63.51517499,
    "color_sector": "#4CAF50"
  },
  {
    "id": 894,
    "extinto": "GOMEZ GRISELDA DEL ROSARIO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "91",
    "latitud": -31.5669705,
    "longitud": -63.51520305,
    "color_sector": "#4CAF50"
  },
  {
    "id": 895,
    "extinto": "MARTA ELENA CEBALLOS",
    "sector": "VERDE",
    "lote": "32",
    "nro": "94",
    "latitud": -31.56700414,
    "longitud": -63.51521508,
    "color_sector": "#4CAF50"
  },
  {
    "id": 896,
    "extinto": "GOMEZ GUILLERMO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "97",
    "latitud": -31.56703777,
    "longitud": -63.51522711,
    "color_sector": "#4CAF50"
  },
  {
    "id": 897,
    "extinto": "NORMA FORTUNATA REGIS",
    "sector": "VERDE",
    "lote": "32",
    "nro": "97",
    "latitud": -31.56703777,
    "longitud": -63.51522711,
    "color_sector": "#4CAF50"
  },
  {
    "id": 898,
    "extinto": "NELSO VILIANO MARGARIA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "97",
    "latitud": -31.56703777,
    "longitud": -63.51522711,
    "color_sector": "#4CAF50"
  },
  {
    "id": 899,
    "extinto": "JUANA ARMINDA MAZZA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "102",
    "latitud": -31.56709382,
    "longitud": -63.51524716,
    "color_sector": "#4CAF50"
  },
  {
    "id": 900,
    "extinto": "PEREZ JOSE ERIO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "108",
    "latitud": -31.56716108,
    "longitud": -63.51527121,
    "color_sector": "#4CAF50"
  },
  {
    "id": 901,
    "extinto": "RODRIGUEZ LUISA OFELIA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "108",
    "latitud": -31.56716108,
    "longitud": -63.51527121,
    "color_sector": "#4CAF50"
  },
  {
    "id": 902,
    "extinto": "JOSE DANIEL PEREZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "108",
    "latitud": -31.56716108,
    "longitud": -63.51527121,
    "color_sector": "#4CAF50"
  },
  {
    "id": 903,
    "extinto": "HECTOR  JUAN  NANZER",
    "sector": "VERDE",
    "lote": "32",
    "nro": "111",
    "latitud": -31.56719471,
    "longitud": -63.51528324,
    "color_sector": "#4CAF50"
  },
  {
    "id": 904,
    "extinto": "JOSE NERIS ALTAMIRANO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "112",
    "latitud": -31.56720592,
    "longitud": -63.51528725,
    "color_sector": "#4CAF50"
  },
  {
    "id": 905,
    "extinto": "FERNANDO ALBERTO ALTAMIRANO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "112",
    "latitud": -31.56720592,
    "longitud": -63.51528725,
    "color_sector": "#4CAF50"
  },
  {
    "id": 906,
    "extinto": "SUSANA EDIT LUQUE",
    "sector": "VERDE",
    "lote": "32",
    "nro": "113",
    "latitud": -31.56721713,
    "longitud": -63.51529126,
    "color_sector": "#4CAF50"
  },
  {
    "id": 907,
    "extinto": "JUAN SECUNDINO SOSA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "113",
    "latitud": -31.56721713,
    "longitud": -63.51529126,
    "color_sector": "#4CAF50"
  },
  {
    "id": 908,
    "extinto": "GAITE ROSA AMALIA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "114",
    "latitud": -31.56722834,
    "longitud": -63.51529527,
    "color_sector": "#4CAF50"
  },
  {
    "id": 909,
    "extinto": "MARCELO ROBERTO ALVAREZ",
    "sector": "VERDE",
    "lote": "32",
    "nro": "115",
    "latitud": -31.56680749,
    "longitud": -63.51517009,
    "color_sector": "#4CAF50"
  },
  {
    "id": 910,
    "extinto": "LITA  NORMA  FERREYRA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "115",
    "latitud": -31.56680749,
    "longitud": -63.51517009,
    "color_sector": "#4CAF50"
  },
  {
    "id": 911,
    "extinto": "MIGUEL ANGEL LUDUEÑA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "116",
    "latitud": -31.5668187,
    "longitud": -63.5151741,
    "color_sector": "#4CAF50"
  },
  {
    "id": 912,
    "extinto": "DOMINGA CRISTINA BOLLATI",
    "sector": "VERDE",
    "lote": "32",
    "nro": "118",
    "latitud": -31.56684112,
    "longitud": -63.51518212,
    "color_sector": "#4CAF50"
  },
  {
    "id": 913,
    "extinto": "CHRISTIAN DANIEL GRIBAUDO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "119",
    "latitud": -31.56685233,
    "longitud": -63.51518612,
    "color_sector": "#4CAF50"
  },
  {
    "id": 914,
    "extinto": "SANTIAGO  LUIS  HEREDIA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "120",
    "latitud": -31.56686354,
    "longitud": -63.51519013,
    "color_sector": "#4CAF50"
  },
  {
    "id": 915,
    "extinto": "DALMA  ARESE",
    "sector": "VERDE",
    "lote": "32",
    "nro": "147",
    "latitud": -31.56716622,
    "longitud": -63.51529839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 916,
    "extinto": "JUAN  RAMON  LUQUE",
    "sector": "VERDE",
    "lote": "32",
    "nro": "147",
    "latitud": -31.56716622,
    "longitud": -63.51529839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 917,
    "extinto": "NELSO FELIX VIVA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "148",
    "latitud": -31.56717743,
    "longitud": -63.5153024,
    "color_sector": "#4CAF50"
  },
  {
    "id": 918,
    "extinto": "LORENZO SERRANO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "150",
    "latitud": -31.56719985,
    "longitud": -63.51531042,
    "color_sector": "#4CAF50"
  },
  {
    "id": 919,
    "extinto": "PORCEL DE PERALTA ANGEL INDALI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "1",
    "latitud": -31.56693755,
    "longitud": -63.51525004,
    "color_sector": "#4CAF50"
  },
  {
    "id": 920,
    "extinto": "PERALTA VIRGINIA ROSA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "1",
    "latitud": -31.56693755,
    "longitud": -63.51525004,
    "color_sector": "#4CAF50"
  },
  {
    "id": 921,
    "extinto": "FELISA DEL PINO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "1",
    "latitud": -31.56693755,
    "longitud": -63.51525004,
    "color_sector": "#4CAF50"
  },
  {
    "id": 922,
    "extinto": "LETICIA HAYDEE PAGANO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "2",
    "latitud": -31.56694877,
    "longitud": -63.51525401,
    "color_sector": "#4CAF50"
  },
  {
    "id": 923,
    "extinto": "AMANDA TERESA GALLARDO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "3",
    "latitud": -31.56695999,
    "longitud": -63.51525797,
    "color_sector": "#4CAF50"
  },
  {
    "id": 924,
    "extinto": "AQUILES JOSE VARAS",
    "sector": "VERDE",
    "lote": "33",
    "nro": "4",
    "latitud": -31.56697122,
    "longitud": -63.51526194,
    "color_sector": "#4CAF50"
  },
  {
    "id": 925,
    "extinto": "CESAR DEL VALLE LUCARELLI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "7",
    "latitud": -31.56700488,
    "longitud": -63.51527384,
    "color_sector": "#4CAF50"
  },
  {
    "id": 926,
    "extinto": "FEDERICO ZAGAGLIA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "10",
    "latitud": -31.56703854,
    "longitud": -63.51528574,
    "color_sector": "#4CAF50"
  },
  {
    "id": 927,
    "extinto": "HECTOR  MARTIN  TAMAIN",
    "sector": "VERDE",
    "lote": "33",
    "nro": "18",
    "latitud": -31.56712832,
    "longitud": -63.51531748,
    "color_sector": "#4CAF50"
  },
  {
    "id": 928,
    "extinto": "JOSE  EDMUNDO  PAVON",
    "sector": "VERDE",
    "lote": "33",
    "nro": "19",
    "latitud": -31.56713954,
    "longitud": -63.51532145,
    "color_sector": "#4CAF50"
  },
  {
    "id": 929,
    "extinto": "JUAN RANULFO SOSA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "22",
    "latitud": -31.5671732,
    "longitud": -63.51533335,
    "color_sector": "#4CAF50"
  },
  {
    "id": 930,
    "extinto": "RAMONA ETELVINA LUQUE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "22",
    "latitud": -31.5671732,
    "longitud": -63.51533335,
    "color_sector": "#4CAF50"
  },
  {
    "id": 931,
    "extinto": "ANA  LEONOR  PIVATTO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "23",
    "latitud": -31.56718442,
    "longitud": -63.51533731,
    "color_sector": "#4CAF50"
  },
  {
    "id": 932,
    "extinto": "LIRIA  FUNES DE GAITE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "24",
    "latitud": -31.56719564,
    "longitud": -63.51534128,
    "color_sector": "#4CAF50"
  },
  {
    "id": 933,
    "extinto": "JOSE LUIS MARIA GAITE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "24",
    "latitud": -31.56719564,
    "longitud": -63.51534128,
    "color_sector": "#4CAF50"
  },
  {
    "id": 934,
    "extinto": "JORGE  OMAR  VILLAFAÑE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "25",
    "latitud": -31.56720686,
    "longitud": -63.51534525,
    "color_sector": "#4CAF50"
  },
  {
    "id": 935,
    "extinto": "GOTTARDELLO ALFREDO RAFAEL",
    "sector": "VERDE",
    "lote": "33",
    "nro": "26",
    "latitud": -31.56721809,
    "longitud": -63.51534921,
    "color_sector": "#4CAF50"
  },
  {
    "id": 936,
    "extinto": "HONG ELSA YOLANDA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "27",
    "latitud": -31.56722931,
    "longitud": -63.51535318,
    "color_sector": "#4CAF50"
  },
  {
    "id": 937,
    "extinto": "HONG ILDA DORA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "27",
    "latitud": -31.56722931,
    "longitud": -63.51535318,
    "color_sector": "#4CAF50"
  },
  {
    "id": 938,
    "extinto": "GOTTARDELLO EUGENIO PEDRO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "27",
    "latitud": -31.56722931,
    "longitud": -63.51535318,
    "color_sector": "#4CAF50"
  },
  {
    "id": 939,
    "extinto": "VIRGOLINI LUIS ARTURO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "30",
    "latitud": -31.56726297,
    "longitud": -63.51536508,
    "color_sector": "#4CAF50"
  },
  {
    "id": 940,
    "extinto": "PERALTA LAZARO OSCAR",
    "sector": "VERDE",
    "lote": "33",
    "nro": "31",
    "latitud": -31.56693154,
    "longitud": -63.51527323,
    "color_sector": "#4CAF50"
  },
  {
    "id": 941,
    "extinto": "VALENZUELA JUSTINA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "31",
    "latitud": -31.56693154,
    "longitud": -63.51527323,
    "color_sector": "#4CAF50"
  },
  {
    "id": 942,
    "extinto": "MARIANO HERNAN GUARASCIO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "32",
    "latitud": -31.56694276,
    "longitud": -63.51527719,
    "color_sector": "#4CAF50"
  },
  {
    "id": 943,
    "extinto": "GUARASCIO LUIS",
    "sector": "VERDE",
    "lote": "33",
    "nro": "32",
    "latitud": -31.56694276,
    "longitud": -63.51527719,
    "color_sector": "#4CAF50"
  },
  {
    "id": 944,
    "extinto": "ORBEGOSO ALBERTO VICTORIO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "34",
    "latitud": -31.56696519,
    "longitud": -63.51528511,
    "color_sector": "#4CAF50"
  },
  {
    "id": 945,
    "extinto": "PEREZ CARMEN",
    "sector": "VERDE",
    "lote": "33",
    "nro": "34",
    "latitud": -31.56696519,
    "longitud": -63.51528511,
    "color_sector": "#4CAF50"
  },
  {
    "id": 946,
    "extinto": "IRMA LIRA ARGUELLO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "35",
    "latitud": -31.5669764,
    "longitud": -63.5152891,
    "color_sector": "#4CAF50"
  },
  {
    "id": 947,
    "extinto": "RAMON LUIS AGUIRRE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "35",
    "latitud": -31.5669764,
    "longitud": -63.5152891,
    "color_sector": "#4CAF50"
  },
  {
    "id": 948,
    "extinto": "JOSE URIBURU PASETTO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "36",
    "latitud": -31.56698765,
    "longitud": -63.51529306,
    "color_sector": "#4CAF50"
  },
  {
    "id": 949,
    "extinto": "VICTORIO GOTTARDELLO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "37",
    "latitud": -31.56699887,
    "longitud": -63.51529703,
    "color_sector": "#4CAF50"
  },
  {
    "id": 950,
    "extinto": "ROMANA ZORDAN",
    "sector": "VERDE",
    "lote": "33",
    "nro": "37",
    "latitud": -31.56699887,
    "longitud": -63.51529703,
    "color_sector": "#4CAF50"
  },
  {
    "id": 951,
    "extinto": "LUCARELLI CARLOS ALBERTO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "38",
    "latitud": -31.56701009,
    "longitud": -63.515301,
    "color_sector": "#4CAF50"
  },
  {
    "id": 952,
    "extinto": "ACOSTA FLORENCIA CATALINA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "38",
    "latitud": -31.56701009,
    "longitud": -63.515301,
    "color_sector": "#4CAF50"
  },
  {
    "id": 953,
    "extinto": "DURAN GERMAN ALEJANDRO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "39",
    "latitud": -31.56702131,
    "longitud": -63.51530497,
    "color_sector": "#4CAF50"
  },
  {
    "id": 954,
    "extinto": "VICTORIA CATALINA LUCARELLI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "39",
    "latitud": -31.56702131,
    "longitud": -63.51530497,
    "color_sector": "#4CAF50"
  },
  {
    "id": 955,
    "extinto": "LUCIANO JUAN VACA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "42",
    "latitud": -31.56705498,
    "longitud": -63.51531686,
    "color_sector": "#4CAF50"
  },
  {
    "id": 956,
    "extinto": "ALBERTO VICENTE BERTOSSI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "43",
    "latitud": -31.5670662,
    "longitud": -63.51532083,
    "color_sector": "#4CAF50"
  },
  {
    "id": 957,
    "extinto": "HUMBERTO JUAN VENCHIARUTTI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "44",
    "latitud": -31.56707742,
    "longitud": -63.5153248,
    "color_sector": "#4CAF50"
  },
  {
    "id": 958,
    "extinto": "ELDA  INES  GIACOSSA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "44",
    "latitud": -31.56707742,
    "longitud": -63.5153248,
    "color_sector": "#4CAF50"
  },
  {
    "id": 959,
    "extinto": "PAVON FELIX ERCOLINO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "45",
    "latitud": -31.56708864,
    "longitud": -63.51532877,
    "color_sector": "#4CAF50"
  },
  {
    "id": 960,
    "extinto": "IRMA YOLANDA TAMAIN",
    "sector": "VERDE",
    "lote": "33",
    "nro": "46",
    "latitud": -31.56709986,
    "longitud": -63.51533273,
    "color_sector": "#4CAF50"
  },
  {
    "id": 961,
    "extinto": "INDALECIO FERNANDEZ",
    "sector": "VERDE",
    "lote": "33",
    "nro": "46",
    "latitud": -31.56709986,
    "longitud": -63.51533273,
    "color_sector": "#4CAF50"
  },
  {
    "id": 962,
    "extinto": "AGOSTINA DE LA CRUZ GAVIGLIO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "48",
    "latitud": -31.56712231,
    "longitud": -63.51534067,
    "color_sector": "#4CAF50"
  },
  {
    "id": 963,
    "extinto": "MAXIMA DE LA CRUZ GAVIGLIO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "48",
    "latitud": -31.56712231,
    "longitud": -63.51534067,
    "color_sector": "#4CAF50"
  },
  {
    "id": 964,
    "extinto": "RAMONA ILDA GALLARDO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "49",
    "latitud": -31.56713353,
    "longitud": -63.51534463,
    "color_sector": "#4CAF50"
  },
  {
    "id": 965,
    "extinto": "JUAN PROSPERO CHARRAS",
    "sector": "VERDE",
    "lote": "33",
    "nro": "50",
    "latitud": -31.56714475,
    "longitud": -63.5153486,
    "color_sector": "#4CAF50"
  },
  {
    "id": 966,
    "extinto": "JUAN LUIS GUDIÑO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "51",
    "latitud": -31.56715597,
    "longitud": -63.51535257,
    "color_sector": "#4CAF50"
  },
  {
    "id": 967,
    "extinto": "BUSTAMANTE MERCEDES DEL VALLE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "52",
    "latitud": -31.56716719,
    "longitud": -63.51535653,
    "color_sector": "#4CAF50"
  },
  {
    "id": 968,
    "extinto": "HERMENEGILDO ANTONIO RODRIGUEZ",
    "sector": "VERDE",
    "lote": "33",
    "nro": "54",
    "latitud": -31.56718963,
    "longitud": -63.51536447,
    "color_sector": "#4CAF50"
  },
  {
    "id": 969,
    "extinto": "GAITE JORGE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "55",
    "latitud": -31.56720086,
    "longitud": -63.51536844,
    "color_sector": "#4CAF50"
  },
  {
    "id": 970,
    "extinto": "GAITE FELIPE PEDRO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "55",
    "latitud": -31.56720086,
    "longitud": -63.51536844,
    "color_sector": "#4CAF50"
  },
  {
    "id": 971,
    "extinto": "VICENTA GONZALEZ DE GAITE",
    "sector": "VERDE",
    "lote": "33",
    "nro": "55",
    "latitud": -31.56720086,
    "longitud": -63.51536844,
    "color_sector": "#4CAF50"
  },
  {
    "id": 972,
    "extinto": "GONZALEZ NORMA DEL ROSARIO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "55",
    "latitud": -31.56720086,
    "longitud": -63.51536844,
    "color_sector": "#4CAF50"
  },
  {
    "id": 973,
    "extinto": "LUQUE HORACIO HECTOR",
    "sector": "VERDE",
    "lote": "33",
    "nro": "56",
    "latitud": -31.56721208,
    "longitud": -63.5153724,
    "color_sector": "#4CAF50"
  },
  {
    "id": 974,
    "extinto": "LORENZO RODOLFO ARGUELLO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "57",
    "latitud": -31.5672233,
    "longitud": -63.51537637,
    "color_sector": "#4CAF50"
  },
  {
    "id": 975,
    "extinto": "DOLORES BENITO BRANDAN",
    "sector": "VERDE",
    "lote": "34",
    "nro": "1",
    "latitud": -31.56679104,
    "longitud": -63.51520723,
    "color_sector": "#4CAF50"
  },
  {
    "id": 976,
    "extinto": "LUISA JOSEFINA SORIA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "1",
    "latitud": -31.56679104,
    "longitud": -63.51520723,
    "color_sector": "#4CAF50"
  },
  {
    "id": 977,
    "extinto": "NELIDA BEATRIZ BRANDAN",
    "sector": "VERDE",
    "lote": "34",
    "nro": "1",
    "latitud": -31.56679104,
    "longitud": -63.51520723,
    "color_sector": "#4CAF50"
  },
  {
    "id": 978,
    "extinto": "ROSA ELSA MENDOZA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "4",
    "latitud": -31.56681953,
    "longitud": -63.51523132,
    "color_sector": "#4CAF50"
  },
  {
    "id": 979,
    "extinto": "GLADYS BEATRIZ ACUÑA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "5",
    "latitud": -31.56682902,
    "longitud": -63.51523935,
    "color_sector": "#4CAF50"
  },
  {
    "id": 980,
    "extinto": "ALEJANDRO JOSE TISSERA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "6",
    "latitud": -31.56683852,
    "longitud": -63.51524739,
    "color_sector": "#4CAF50"
  },
  {
    "id": 981,
    "extinto": "ORLANDO EXEQUIEL TISSERA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "6",
    "latitud": -31.56683852,
    "longitud": -63.51524739,
    "color_sector": "#4CAF50"
  },
  {
    "id": 982,
    "extinto": "PERALTA JOSE ALBERTO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "8",
    "latitud": -31.56685751,
    "longitud": -63.51526345,
    "color_sector": "#4CAF50"
  },
  {
    "id": 983,
    "extinto": "JUAN JOSE VELARDEZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "8",
    "latitud": -31.56685751,
    "longitud": -63.51526345,
    "color_sector": "#4CAF50"
  },
  {
    "id": 984,
    "extinto": "JUAN MANUEL VELARDEZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "8",
    "latitud": -31.56685751,
    "longitud": -63.51526345,
    "color_sector": "#4CAF50"
  },
  {
    "id": 985,
    "extinto": "JOSE ROBERTO FUENTES",
    "sector": "VERDE",
    "lote": "34",
    "nro": "9",
    "latitud": -31.566867,
    "longitud": -63.51527148,
    "color_sector": "#4CAF50"
  },
  {
    "id": 986,
    "extinto": "EDIT DEL VALLE MUÑOZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "10",
    "latitud": -31.5668765,
    "longitud": -63.51527951,
    "color_sector": "#4CAF50"
  },
  {
    "id": 987,
    "extinto": "MILAGROS SUAREZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "11",
    "latitud": -31.566886,
    "longitud": -63.51528754,
    "color_sector": "#4CAF50"
  },
  {
    "id": 988,
    "extinto": "PABLO LASTENIO ALGARBE",
    "sector": "VERDE",
    "lote": "34",
    "nro": "12",
    "latitud": -31.56689549,
    "longitud": -63.51529557,
    "color_sector": "#4CAF50"
  },
  {
    "id": 989,
    "extinto": "ANA MARIA CAPDEVILA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "13",
    "latitud": -31.56690499,
    "longitud": -63.51530361,
    "color_sector": "#4CAF50"
  },
  {
    "id": 990,
    "extinto": "JUAN CARLOS BERTORELLO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "17",
    "latitud": -31.56694297,
    "longitud": -63.51533573,
    "color_sector": "#4CAF50"
  },
  {
    "id": 991,
    "extinto": "ELVA TERESITA FONSECA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "18",
    "latitud": -31.56695247,
    "longitud": -63.51534376,
    "color_sector": "#4CAF50"
  },
  {
    "id": 992,
    "extinto": "ALEJANDRO CARLOS ZOPPETTI",
    "sector": "VERDE",
    "lote": "34",
    "nro": "19",
    "latitud": -31.56696196,
    "longitud": -63.5153518,
    "color_sector": "#4CAF50"
  },
  {
    "id": 993,
    "extinto": "TELMO ELSO TEJEDA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "20",
    "latitud": -31.56697146,
    "longitud": -63.51535983,
    "color_sector": "#4CAF50"
  },
  {
    "id": 994,
    "extinto": "PEDRO DANIEL PERALTA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "21",
    "latitud": -31.56698095,
    "longitud": -63.51536786,
    "color_sector": "#4CAF50"
  },
  {
    "id": 995,
    "extinto": "PEDRO SIMON GOMEZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "22",
    "latitud": -31.56699045,
    "longitud": -63.51537589,
    "color_sector": "#4CAF50"
  },
  {
    "id": 996,
    "extinto": "MARIA VIRGINIA CASTILLO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "22",
    "latitud": -31.56699045,
    "longitud": -63.51537589,
    "color_sector": "#4CAF50"
  },
  {
    "id": 997,
    "extinto": "SERGIO FABIAN MANSILLA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "23",
    "latitud": -31.56699994,
    "longitud": -63.51538392,
    "color_sector": "#4CAF50"
  },
  {
    "id": 998,
    "extinto": "OMAR DIONISIO ALVAREZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "25",
    "latitud": -31.56678837,
    "longitud": -63.51523488,
    "color_sector": "#4CAF50"
  },
  {
    "id": 999,
    "extinto": "CLAUDIA ROSA TISSERA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "25",
    "latitud": -31.56678837,
    "longitud": -63.51523488,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1000,
    "extinto": "JOSE IGNACIO ALVAREZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "25",
    "latitud": -31.56678837,
    "longitud": -63.51523488,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1001,
    "extinto": "CIRILO ANTONIO SOSA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "25",
    "latitud": -31.56678837,
    "longitud": -63.51523488,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1002,
    "extinto": "PEDRO ALEJANDRO TAMAGNINI",
    "sector": "VERDE",
    "lote": "34",
    "nro": "26",
    "latitud": -31.56679786,
    "longitud": -63.51524291,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1003,
    "extinto": "ROSA ANTONIA NISTAL",
    "sector": "VERDE",
    "lote": "34",
    "nro": "27",
    "latitud": -31.56680736,
    "longitud": -63.51525094,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1004,
    "extinto": "RAUL EDUARDO SARMIENTO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "27",
    "latitud": -31.56680736,
    "longitud": -63.51525094,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1005,
    "extinto": "ROSA  ALINDA TABORDA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "29",
    "latitud": -31.56682635,
    "longitud": -63.51526701,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1006,
    "extinto": "DANIEL ROBERTO RE",
    "sector": "VERDE",
    "lote": "34",
    "nro": "30",
    "latitud": -31.56683585,
    "longitud": -63.51527504,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1007,
    "extinto": "ROBERTO ROSADO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "32",
    "latitud": -31.56685484,
    "longitud": -63.5152911,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1008,
    "extinto": "ROSA LIDIA HERRERA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "33",
    "latitud": -31.56686433,
    "longitud": -63.51529913,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1009,
    "extinto": "RAMON ENRIQUE GONZALEZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "34",
    "latitud": -31.56687383,
    "longitud": -63.51530716,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1010,
    "extinto": "LAURA  TERESITA  GAZZERA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "35",
    "latitud": -31.56688332,
    "longitud": -63.5153152,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1011,
    "extinto": "MONICA BETRIZ COLAZO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "36",
    "latitud": -31.56689282,
    "longitud": -63.51532323,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1012,
    "extinto": "CLAUDIA JOSEFINA TABORDA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "37",
    "latitud": -31.56690232,
    "longitud": -63.51533126,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1013,
    "extinto": "ELSA JOSEFINA SMIT",
    "sector": "VERDE",
    "lote": "34",
    "nro": "37",
    "latitud": -31.56690232,
    "longitud": -63.51533126,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1014,
    "extinto": "PEDRO VALLS",
    "sector": "VERDE",
    "lote": "34",
    "nro": "38",
    "latitud": -31.56691181,
    "longitud": -63.51533929,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1015,
    "extinto": "ROSA CUGAT DE BALLS",
    "sector": "VERDE",
    "lote": "34",
    "nro": "38",
    "latitud": -31.56691181,
    "longitud": -63.51533929,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1016,
    "extinto": "ANGELA BALLS",
    "sector": "VERDE",
    "lote": "34",
    "nro": "38",
    "latitud": -31.56691181,
    "longitud": -63.51533929,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1017,
    "extinto": "HIPOLITO BALLS",
    "sector": "VERDE",
    "lote": "34",
    "nro": "38",
    "latitud": -31.56691181,
    "longitud": -63.51533929,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1018,
    "extinto": "ETTLIN ERNESTO JUAN",
    "sector": "VERDE",
    "lote": "34",
    "nro": "39",
    "latitud": -31.56692131,
    "longitud": -63.51534732,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1019,
    "extinto": "ANGELICA ALICIA TAMBORINI",
    "sector": "VERDE",
    "lote": "34",
    "nro": "40",
    "latitud": -31.5669308,
    "longitud": -63.51535535,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1020,
    "extinto": "OLGA TERESA SAVINI",
    "sector": "VERDE",
    "lote": "34",
    "nro": "41",
    "latitud": -31.5669403,
    "longitud": -63.51536339,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1021,
    "extinto": "TRINIDAD ORBEZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "42",
    "latitud": -31.56694979,
    "longitud": -63.51537142,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1022,
    "extinto": "JOSE OSVALDO MONTE",
    "sector": "VERDE",
    "lote": "34",
    "nro": "43",
    "latitud": -31.56695929,
    "longitud": -63.51537945,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1023,
    "extinto": "CARANDINO ELVIO FELIZ",
    "sector": "VERDE",
    "lote": "34",
    "nro": "44",
    "latitud": -31.56696879,
    "longitud": -63.51538748,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1024,
    "extinto": "CARANDINI VICTOR BARTOLO",
    "sector": "VERDE",
    "lote": "34",
    "nro": "44",
    "latitud": -31.56696879,
    "longitud": -63.51538748,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1025,
    "extinto": "AGUIAR CLARA GUILLERMINA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "46",
    "latitud": -31.56698778,
    "longitud": -63.51540354,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1026,
    "extinto": "PEREZ NELIDA CARMINDA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "1",
    "latitud": -31.56701548,
    "longitud": -63.51539826,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1027,
    "extinto": "RAUL OSVALDO TAMAIN",
    "sector": "VERDE",
    "lote": "35",
    "nro": "2",
    "latitud": -31.56702496,
    "longitud": -63.51540632,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1028,
    "extinto": "SILVANA TRANSITO ALGARBE",
    "sector": "VERDE",
    "lote": "35",
    "nro": "2",
    "latitud": -31.56702496,
    "longitud": -63.51540632,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1029,
    "extinto": "TAMAIN JUAN HECTOR",
    "sector": "VERDE",
    "lote": "35",
    "nro": "3",
    "latitud": -31.56703444,
    "longitud": -63.51541438,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1030,
    "extinto": "MARTIN ERNESTO AGUIRRE",
    "sector": "VERDE",
    "lote": "35",
    "nro": "3",
    "latitud": -31.56703444,
    "longitud": -63.51541438,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1031,
    "extinto": "CONTRERAS FACUNDO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "4",
    "latitud": -31.56704393,
    "longitud": -63.51542243,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1032,
    "extinto": "CONTRERAS FRANCISCO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "4",
    "latitud": -31.56704393,
    "longitud": -63.51542243,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1033,
    "extinto": "CANCIANI EDEL",
    "sector": "VERDE",
    "lote": "35",
    "nro": "5",
    "latitud": -31.56705341,
    "longitud": -63.51543049,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1034,
    "extinto": "ANA MARIA TAURIAN",
    "sector": "VERDE",
    "lote": "35",
    "nro": "5",
    "latitud": -31.56705341,
    "longitud": -63.51543049,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1035,
    "extinto": "MOLINA CALIXTO CARLOS",
    "sector": "VERDE",
    "lote": "35",
    "nro": "6",
    "latitud": -31.56706289,
    "longitud": -63.51543854,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1036,
    "extinto": "SANCHEZ MARIA LUISA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "6",
    "latitud": -31.56706289,
    "longitud": -63.51543854,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1037,
    "extinto": "ROUCO ESTELA SUSANA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "7",
    "latitud": -31.56707237,
    "longitud": -63.5154466,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1038,
    "extinto": "GAMERO MARIA ISABEL",
    "sector": "VERDE",
    "lote": "35",
    "nro": "7",
    "latitud": -31.56707237,
    "longitud": -63.5154466,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1039,
    "extinto": "NORA ISABEL ROUCO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "7",
    "latitud": -31.56707237,
    "longitud": -63.5154466,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1040,
    "extinto": "PICCA JOSE RAMON",
    "sector": "VERDE",
    "lote": "35",
    "nro": "8",
    "latitud": -31.56708185,
    "longitud": -63.51545466,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1041,
    "extinto": "MARTA DELIA ALBERICHI",
    "sector": "VERDE",
    "lote": "35",
    "nro": "8",
    "latitud": -31.56708185,
    "longitud": -63.51545466,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1042,
    "extinto": "VAZQUEZ JOSE SAUL",
    "sector": "VERDE",
    "lote": "35",
    "nro": "9",
    "latitud": -31.56709133,
    "longitud": -63.51546271,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1043,
    "extinto": "GONZALO NICOLAS VAZQUEZ",
    "sector": "VERDE",
    "lote": "35",
    "nro": "9",
    "latitud": -31.56709133,
    "longitud": -63.51546271,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1044,
    "extinto": "BERRONE LORENZO ABEL",
    "sector": "VERDE",
    "lote": "35",
    "nro": "10",
    "latitud": -31.56700328,
    "longitud": -63.51541785,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1045,
    "extinto": "BRUN JOSEFA MAGDALENA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "10",
    "latitud": -31.56700328,
    "longitud": -63.51541785,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1046,
    "extinto": "MARTA  HERMILDA  BERRONE",
    "sector": "VERDE",
    "lote": "35",
    "nro": "10",
    "latitud": -31.56700328,
    "longitud": -63.51541785,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1047,
    "extinto": "ALVAREZ GERMAN ALBERTO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "11",
    "latitud": -31.56701276,
    "longitud": -63.51542591,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1048,
    "extinto": "CELESTINA NISTAL",
    "sector": "VERDE",
    "lote": "35",
    "nro": "11",
    "latitud": -31.56701276,
    "longitud": -63.51542591,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1049,
    "extinto": "CARLOS ALBERTO ALVAREZ",
    "sector": "VERDE",
    "lote": "35",
    "nro": "11",
    "latitud": -31.56701276,
    "longitud": -63.51542591,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1050,
    "extinto": "MACARIO ROMAN ALVAREZ",
    "sector": "VERDE",
    "lote": "35",
    "nro": "12",
    "latitud": -31.56702224,
    "longitud": -63.51543397,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1051,
    "extinto": "ELBA ROSA FERREYRA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "12",
    "latitud": -31.56702224,
    "longitud": -63.51543397,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1052,
    "extinto": "BAILI ANDREA VERONICA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "13",
    "latitud": -31.56703172,
    "longitud": -63.51544202,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1053,
    "extinto": "VILLAFAÑE RUBEN ABELARDO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "15",
    "latitud": -31.56705068,
    "longitud": -63.51545813,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1054,
    "extinto": "VILLAFAÑE PABLA TERESA DE",
    "sector": "VERDE",
    "lote": "35",
    "nro": "15",
    "latitud": -31.56705068,
    "longitud": -63.51545813,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1055,
    "extinto": "VILLAFAÑE MIGUEL ANGEL",
    "sector": "VERDE",
    "lote": "35",
    "nro": "15",
    "latitud": -31.56705068,
    "longitud": -63.51545813,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1056,
    "extinto": "MOLINA ADOLFO LEONARDO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "16",
    "latitud": -31.56706016,
    "longitud": -63.51546619,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1057,
    "extinto": "DONDO DELQUI JOSE",
    "sector": "VERDE",
    "lote": "35",
    "nro": "17",
    "latitud": -31.56706964,
    "longitud": -63.51547425,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1058,
    "extinto": "IRENE ROSA CRETTINO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "17",
    "latitud": -31.56706964,
    "longitud": -63.51547425,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1059,
    "extinto": "CILDO BENITO DONDO",
    "sector": "VERDE",
    "lote": "35",
    "nro": "17",
    "latitud": -31.56706964,
    "longitud": -63.51547425,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1060,
    "extinto": "ABATI DAVID",
    "sector": "VERDE",
    "lote": "35",
    "nro": "18",
    "latitud": -31.56707912,
    "longitud": -63.5154823,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1061,
    "extinto": "SANTOS JORGE ALBERTO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "1",
    "latitud": -31.56729734,
    "longitud": -63.51536027,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1062,
    "extinto": "CLARA TERESA BERGES",
    "sector": "VERDE",
    "lote": "36",
    "nro": "1",
    "latitud": -31.56729734,
    "longitud": -63.51536027,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1063,
    "extinto": "SOSA ROBERTO JOSE",
    "sector": "VERDE",
    "lote": "36",
    "nro": "2",
    "latitud": -31.56731673,
    "longitud": -63.51536888,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1064,
    "extinto": "LUDUEÑA ALBERTO JOES",
    "sector": "VERDE",
    "lote": "36",
    "nro": "3",
    "latitud": -31.56729318,
    "longitud": -63.51537307,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1065,
    "extinto": "MERCEDES SEGOVIA",
    "sector": "VERDE",
    "lote": "36",
    "nro": "3",
    "latitud": -31.56729318,
    "longitud": -63.51537307,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1066,
    "extinto": "SOSA MANUEL GREGORIO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "4",
    "latitud": -31.56731257,
    "longitud": -63.51538168,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1067,
    "extinto": "IRMA MICAELA CHIABRANDO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "5",
    "latitud": -31.56728901,
    "longitud": -63.51538587,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1068,
    "extinto": "DEL PINO ESTEBAN JAVIER",
    "sector": "VERDE",
    "lote": "36",
    "nro": "6",
    "latitud": -31.5673084,
    "longitud": -63.51539448,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1069,
    "extinto": "DEL PINO CARLOS ALBERTO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "6",
    "latitud": -31.5673084,
    "longitud": -63.51539448,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1070,
    "extinto": "ALVAREZ SERAFIN TIMOTEO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "7",
    "latitud": -31.56728485,
    "longitud": -63.51539867,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1071,
    "extinto": "MONCADA ELSA JOSEFINA",
    "sector": "VERDE",
    "lote": "36",
    "nro": "7",
    "latitud": -31.56728485,
    "longitud": -63.51539867,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1072,
    "extinto": "PINOTTI MIGUEL JOAQUIN",
    "sector": "VERDE",
    "lote": "36",
    "nro": "8",
    "latitud": -31.56730424,
    "longitud": -63.51540728,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1073,
    "extinto": "BERRONE FLORINDA MARIA",
    "sector": "VERDE",
    "lote": "36",
    "nro": "8",
    "latitud": -31.56730424,
    "longitud": -63.51540728,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1074,
    "extinto": "CHIABRANDO ALIDA M.",
    "sector": "VERDE",
    "lote": "36",
    "nro": "9",
    "latitud": -31.56728067,
    "longitud": -63.51541146,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1075,
    "extinto": "VALIENTE NEMESIO FRANCISCO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "9",
    "latitud": -31.56728067,
    "longitud": -63.51541146,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1076,
    "extinto": "PEREZ JUAN BONIFACIO",
    "sector": "VERDE",
    "lote": "36",
    "nro": "11",
    "latitud": -31.56727651,
    "longitud": -63.51542427,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1077,
    "extinto": "DEFAGOT JUAN CARLOS",
    "sector": "VERDE",
    "lote": "36",
    "nro": "12",
    "latitud": -31.56729591,
    "longitud": -63.51543288,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1078,
    "extinto": "DEL PINO JOSE LUIS",
    "sector": "VERDE",
    "lote": "36",
    "nro": "13",
    "latitud": -31.56727236,
    "longitud": -63.51543708,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1079,
    "extinto": "RAUL MARTIN ADOLFO CARRANZA",
    "sector": "VERDE",
    "lote": "36",
    "nro": "14",
    "latitud": -31.56729175,
    "longitud": -63.51544568,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1080,
    "extinto": "ROBERTO LORENZO GIULIANI",
    "sector": "VERDE",
    "lote": "37",
    "nro": "2",
    "latitud": -31.56737512,
    "longitud": -63.515338,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1081,
    "extinto": "LOPEZ DE GIULIANI MARIA ELENA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "3",
    "latitud": -31.56740274,
    "longitud": -63.51535094,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1082,
    "extinto": "GIULIANI LORENZO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "3",
    "latitud": -31.56740274,
    "longitud": -63.51535094,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1083,
    "extinto": "LEIVA JULIO ERNESTO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "4",
    "latitud": -31.56742199,
    "longitud": -63.51535996,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1084,
    "extinto": "SCARABOTTI LUIS GERARDO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "6",
    "latitud": -31.56735157,
    "longitud": -63.51534216,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1085,
    "extinto": "JUAN ROMULO VELAZQUEZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "7",
    "latitud": -31.56737095,
    "longitud": -63.51535079,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1086,
    "extinto": "RODRIGUEZ EDUARDO EDUBILLO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "9",
    "latitud": -31.56741762,
    "longitud": -63.51537267,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1087,
    "extinto": "NORMA VIVIANA LOZA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "9",
    "latitud": -31.56741762,
    "longitud": -63.51537267,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1088,
    "extinto": "GRASSO FRANCISCO BLAS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "5",
    "latitud": -31.5674468,
    "longitud": -63.51537281,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1089,
    "extinto": "GRASSO MARTIN EMETERIO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "11",
    "latitud": -31.56734739,
    "longitud": -63.51535496,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1090,
    "extinto": "MARIA ROMELIA FRIAS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "11",
    "latitud": -31.56734739,
    "longitud": -63.51535496,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1091,
    "extinto": "PEREZ NICOLAS HUGO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "12",
    "latitud": -31.56736677,
    "longitud": -63.51536359,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1092,
    "extinto": "ELVA YOLANDA SISTERNA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "13",
    "latitud": -31.56739388,
    "longitud": -63.51537647,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1093,
    "extinto": "LUIS RAMON MANICERO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "13",
    "latitud": -31.56739388,
    "longitud": -63.51537647,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1094,
    "extinto": "CRISTIAN OSCAR BUSTILLO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "14",
    "latitud": -31.56741325,
    "longitud": -63.51538538,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1095,
    "extinto": "JUAREZ DARIO SEBASTIAN",
    "sector": "VERDE",
    "lote": "37",
    "nro": "15",
    "latitud": -31.56743766,
    "longitud": -63.51539803,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1096,
    "extinto": "GALLIANO ADELMA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "17",
    "latitud": -31.5673626,
    "longitud": -63.51537638,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1097,
    "extinto": "HUGO OSCAR PEREZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "17",
    "latitud": -31.5673626,
    "longitud": -63.51537638,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1098,
    "extinto": "IRALDO DAVID ORTIZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "18",
    "latitud": -31.56738966,
    "longitud": -63.51538925,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1099,
    "extinto": "JOSE PINOS CUGAT",
    "sector": "VERDE",
    "lote": "37",
    "nro": "20",
    "latitud": -31.56743309,
    "longitud": -63.51541064,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1100,
    "extinto": "NIEVE PINOS CUGAT",
    "sector": "VERDE",
    "lote": "37",
    "nro": "20",
    "latitud": -31.56743309,
    "longitud": -63.51541064,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1101,
    "extinto": "JOSE PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "20",
    "latitud": -31.56743309,
    "longitud": -63.51541064,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1102,
    "extinto": "JUAN PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "20",
    "latitud": -31.56743309,
    "longitud": -63.51541064,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1103,
    "extinto": "VICTORIA CUGAT",
    "sector": "VERDE",
    "lote": "37",
    "nro": "20",
    "latitud": -31.56743309,
    "longitud": -63.51541064,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1104,
    "extinto": "PINOTTI NATALIA SOLEDAD",
    "sector": "VERDE",
    "lote": "37",
    "nro": "21",
    "latitud": -31.56733904,
    "longitud": -63.51538055,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1105,
    "extinto": "ANA MARIA LITVACK",
    "sector": "VERDE",
    "lote": "37",
    "nro": "22",
    "latitud": -31.56735843,
    "longitud": -63.51538918,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1106,
    "extinto": "BESSONE SARA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "23",
    "latitud": -31.56738527,
    "longitud": -63.51540178,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1107,
    "extinto": "BEATRIZ NOEMI SARMIENTO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "24",
    "latitud": -31.56740452,
    "longitud": -63.5154108,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1108,
    "extinto": "TERESA CUGAT DE PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "25",
    "latitud": -31.56742852,
    "longitud": -63.51542325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1109,
    "extinto": "PABLO PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "25",
    "latitud": -31.56742852,
    "longitud": -63.51542325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1110,
    "extinto": "JAIME PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "25",
    "latitud": -31.56742852,
    "longitud": -63.51542325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1111,
    "extinto": "TERESA PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "25",
    "latitud": -31.56742852,
    "longitud": -63.51542325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1112,
    "extinto": "PABLO PINOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "25",
    "latitud": -31.56742852,
    "longitud": -63.51542325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1113,
    "extinto": "PIRCHI JORGE DANIEL",
    "sector": "VERDE",
    "lote": "37",
    "nro": "26",
    "latitud": -31.56733487,
    "longitud": -63.51539335,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1114,
    "extinto": "GRACIELA DEL VALLE VILLAFAÑE",
    "sector": "VERDE",
    "lote": "37",
    "nro": "26",
    "latitud": -31.56733487,
    "longitud": -63.51539335,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1115,
    "extinto": "ILDA CAROLINA CARANDINO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "27",
    "latitud": -31.56735425,
    "longitud": -63.51540197,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1116,
    "extinto": "JUAN LUIS F , VAZQUEZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "28",
    "latitud": -31.56738091,
    "longitud": -63.51541448,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1117,
    "extinto": "ELVIRA MARTINA SALGADO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "29",
    "latitud": -31.56740016,
    "longitud": -63.51542351,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1118,
    "extinto": "PEREZ NESTOR RUBEN",
    "sector": "VERDE",
    "lote": "37",
    "nro": "30",
    "latitud": -31.56742395,
    "longitud": -63.51543586,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1119,
    "extinto": "NILDA  ROSA  PEREZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "30",
    "latitud": -31.56742395,
    "longitud": -63.51543586,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1120,
    "extinto": "ELSA JOSEFINA PEREZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "30",
    "latitud": -31.56742395,
    "longitud": -63.51543586,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1121,
    "extinto": "BERNARDO ABEL DELFINO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "31",
    "latitud": -31.56733069,
    "longitud": -63.51540614,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1122,
    "extinto": "HERMANN JUAN ALBERTO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "32",
    "latitud": -31.56735008,
    "longitud": -63.51541477,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1123,
    "extinto": "AGUERO ELIDA RAQUEL",
    "sector": "VERDE",
    "lote": "37",
    "nro": "35",
    "latitud": -31.56741938,
    "longitud": -63.51544847,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1124,
    "extinto": "MOREYRA RENE FRANCISCO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "35",
    "latitud": -31.56741938,
    "longitud": -63.51544847,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1125,
    "extinto": "VILLAFAÑE OSCAR",
    "sector": "VERDE",
    "lote": "37",
    "nro": "36",
    "latitud": -31.56732652,
    "longitud": -63.51541896,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1126,
    "extinto": "VILLAFAÑE PIO OSCAR",
    "sector": "VERDE",
    "lote": "37",
    "nro": "36",
    "latitud": -31.56732652,
    "longitud": -63.51541896,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1127,
    "extinto": "ZULEMA  RAMONA  AIDA  LIENDO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "36",
    "latitud": -31.56732652,
    "longitud": -63.51541896,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1128,
    "extinto": "ELIAS NOE ALVAREZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "37",
    "latitud": -31.56734589,
    "longitud": -63.51542758,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1129,
    "extinto": "FRANCIS EZEQUIEL ALVAREZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "37",
    "latitud": -31.56734589,
    "longitud": -63.51542758,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1130,
    "extinto": "AGUEDA GALLO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "39",
    "latitud": -31.56739143,
    "longitud": -63.51544892,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1131,
    "extinto": "RODRIGUEZ ANDRES MARTIN",
    "sector": "VERDE",
    "lote": "37",
    "nro": "39",
    "latitud": -31.56739143,
    "longitud": -63.51544892,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1132,
    "extinto": "ZULMA T SABADILLA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "40",
    "latitud": -31.56741481,
    "longitud": -63.51546108,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1133,
    "extinto": "SERGIO ALEJANDRO MATOS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "40",
    "latitud": -31.56741481,
    "longitud": -63.51546108,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1134,
    "extinto": "CASANOVES JOSE",
    "sector": "VERDE",
    "lote": "37",
    "nro": "41",
    "latitud": -31.56732233,
    "longitud": -63.51543175,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1135,
    "extinto": "MARIA T GARU CAVALLERO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "41",
    "latitud": -31.56732233,
    "longitud": -63.51543175,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1136,
    "extinto": "PEREZ JUSTO ANTONIO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "41",
    "latitud": -31.56732233,
    "longitud": -63.51543175,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1137,
    "extinto": "CASANIVES CARIDAD",
    "sector": "VERDE",
    "lote": "37",
    "nro": "41",
    "latitud": -31.56732233,
    "longitud": -63.51543175,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1138,
    "extinto": "CASANOVES AURELIO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "42",
    "latitud": -31.56734173,
    "longitud": -63.51544038,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1139,
    "extinto": "GRACIETTI MARIA ELENA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "44",
    "latitud": -31.56738706,
    "longitud": -63.51546163,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1140,
    "extinto": "ANTONIO NORBERTO ROMERO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "45",
    "latitud": -31.56741024,
    "longitud": -63.51547369,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1141,
    "extinto": "CASANOVEZ CARMEN",
    "sector": "VERDE",
    "lote": "37",
    "nro": "47",
    "latitud": -31.56733754,
    "longitud": -63.51545317,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1142,
    "extinto": "PINOTTI LUIS",
    "sector": "VERDE",
    "lote": "37",
    "nro": "48",
    "latitud": -31.56736344,
    "longitud": -63.51546532,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1143,
    "extinto": "GALLARDO DELICIA GRACIELA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "48",
    "latitud": -31.56736344,
    "longitud": -63.51546532,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1144,
    "extinto": "PINOTTI NORMA MABEL",
    "sector": "VERDE",
    "lote": "37",
    "nro": "48",
    "latitud": -31.56736344,
    "longitud": -63.51546532,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1145,
    "extinto": "CAVAGNA JOSE",
    "sector": "VERDE",
    "lote": "37",
    "nro": "49",
    "latitud": -31.5673827,
    "longitud": -63.51547434,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1146,
    "extinto": "COLAZO MIGUEL DALMACIO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "1",
    "latitud": -31.56752108,
    "longitud": -63.51527205,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1147,
    "extinto": "COLAZO JOSE EUSEBIO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "1",
    "latitud": -31.56752108,
    "longitud": -63.51527205,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1148,
    "extinto": "RODRIGUEZ ALDO RUBEN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "2",
    "latitud": -31.56753986,
    "longitud": -63.51528234,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1149,
    "extinto": "MARIA MIGUELINA ALGARBE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "2",
    "latitud": -31.56753986,
    "longitud": -63.51528234,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1150,
    "extinto": "VENENCIA MARIA DEL CARMEN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "3",
    "latitud": -31.56756426,
    "longitud": -63.51529624,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1151,
    "extinto": "ALGARBE PATRICIO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "3",
    "latitud": -31.56756426,
    "longitud": -63.51529624,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1152,
    "extinto": "ALGARBE RAMON AMADO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "3",
    "latitud": -31.56756426,
    "longitud": -63.51529624,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1153,
    "extinto": "LUIS ANGEL MIGUEL DEFRANCISI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "5",
    "latitud": -31.56760476,
    "longitud": -63.51531779,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1154,
    "extinto": "OSVALDO OMAR HERRERA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "6",
    "latitud": -31.56762366,
    "longitud": -63.51532777,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1155,
    "extinto": "HECTOR ARMANDO HERRERA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "6",
    "latitud": -31.56762366,
    "longitud": -63.51532777,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1156,
    "extinto": "LUIS ALBERTO BASUALDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "7",
    "latitud": -31.56764667,
    "longitud": -63.51533992,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1157,
    "extinto": "COLAZO IVANNA ALEJANDRA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "8",
    "latitud": -31.5675161,
    "longitud": -63.51528445,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1158,
    "extinto": "RICARDO ALGARBE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "10",
    "latitud": -31.56755928,
    "longitud": -63.51530864,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1159,
    "extinto": "SORIA MARY ESTELA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "11",
    "latitud": -31.56757807,
    "longitud": -63.51531891,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1160,
    "extinto": "ALDO ADOLFO CARNERO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "12",
    "latitud": -31.56759993,
    "longitud": -63.51533026,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1161,
    "extinto": "MIGUEL ANGEL FRANCESCHI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "14",
    "latitud": -31.56764184,
    "longitud": -63.51535239,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1162,
    "extinto": "ROSA ZITA FRANCESCHI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "14",
    "latitud": -31.56764184,
    "longitud": -63.51535239,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1163,
    "extinto": "GONZALEZ OLADIO JOSE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "15",
    "latitud": -31.56751113,
    "longitud": -63.51529685,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1164,
    "extinto": "PATRICIO MARTIN ALGARBE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "16",
    "latitud": -31.56752991,
    "longitud": -63.51530714,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1165,
    "extinto": "PATRICIO  ALFREDO  ALGARBE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "16",
    "latitud": -31.56752991,
    "longitud": -63.51530714,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1166,
    "extinto": "ALGARBE PATRICIO MARTIN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "17",
    "latitud": -31.56755431,
    "longitud": -63.51532104,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1167,
    "extinto": "ELEONORA MARIA LUCIA LOPEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "18",
    "latitud": -31.5675731,
    "longitud": -63.51533131,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1168,
    "extinto": "RAMON VIRGILIO JULIO BUSTO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "21",
    "latitud": -31.56763701,
    "longitud": -63.51536487,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1169,
    "extinto": "OLGA  MARIA  CATALINA  MARCHISSONE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "21",
    "latitud": -31.56763701,
    "longitud": -63.51536487,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1170,
    "extinto": "MARIA LUISA RACCA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "28",
    "latitud": -31.56763218,
    "longitud": -63.51537735,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1171,
    "extinto": "TABORDA OSFALDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "29",
    "latitud": -31.56750117,
    "longitud": -63.51532164,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1172,
    "extinto": "TISSERA PEDRO BALBINO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "35",
    "latitud": -31.56762735,
    "longitud": -63.51538983,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1173,
    "extinto": "TISSERA PEDRO BALBINO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "35",
    "latitud": -31.56762735,
    "longitud": -63.51538983,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1174,
    "extinto": "TISSERA DONATILIA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "35",
    "latitud": -31.56762735,
    "longitud": -63.51538983,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1175,
    "extinto": "ZABALA NESTOR GASPAR",
    "sector": "VERDE",
    "lote": "38",
    "nro": "37",
    "latitud": -31.56751497,
    "longitud": -63.51534433,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1176,
    "extinto": "BAROTTO JUAN CARLOS",
    "sector": "VERDE",
    "lote": "38",
    "nro": "50",
    "latitud": -31.56748623,
    "longitud": -63.51535883,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1177,
    "extinto": "GOTTARDELLO ANTONIO ERMELINDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "50",
    "latitud": -31.56748623,
    "longitud": -63.51535883,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1178,
    "extinto": "RUBIOLO DELIA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "51",
    "latitud": -31.56750501,
    "longitud": -63.51536912,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1179,
    "extinto": "HUGO FERNANDEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "51",
    "latitud": -31.56750501,
    "longitud": -63.51536912,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1180,
    "extinto": "CESAR HUGO FERNANDEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "51",
    "latitud": -31.56750501,
    "longitud": -63.51536912,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1181,
    "extinto": "LIENDO JUAN AGUSTIN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "52",
    "latitud": -31.56752945,
    "longitud": -63.51538304,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1182,
    "extinto": "FERNANDEZ MARIA ALICIA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "52",
    "latitud": -31.56752945,
    "longitud": -63.51538304,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1183,
    "extinto": "VICTOR HUGO ARMANINI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "59",
    "latitud": -31.56752448,
    "longitud": -63.51539544,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1184,
    "extinto": "ARGENTE ESMERALDA ELENA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "66",
    "latitud": -31.56751951,
    "longitud": -63.51540784,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1185,
    "extinto": "LUIS ALBERTO ARMANINI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "66",
    "latitud": -31.56751951,
    "longitud": -63.51540784,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1186,
    "extinto": "HUGO NELSO ARMANINI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "66",
    "latitud": -31.56751951,
    "longitud": -63.51540784,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1187,
    "extinto": "BARRA NELIDA SONIA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "70",
    "latitud": -31.5676032,
    "longitud": -63.51545221,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1188,
    "extinto": "RAUL ERNESTO BARRA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "70",
    "latitud": -31.5676032,
    "longitud": -63.51545221,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1189,
    "extinto": "JOSEFA NELIDA MACHADO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "70",
    "latitud": -31.5676032,
    "longitud": -63.51545221,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1190,
    "extinto": "GARCIA TOMASA H",
    "sector": "VERDE",
    "lote": "38",
    "nro": "74",
    "latitud": -31.56753332,
    "longitud": -63.51543052,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1191,
    "extinto": "OSLER RAMON AMADO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "74",
    "latitud": -31.56753332,
    "longitud": -63.51543052,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1192,
    "extinto": "NORMA ADELA LIENDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "74",
    "latitud": -31.56753332,
    "longitud": -63.51543052,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1193,
    "extinto": "GIULIANI ROBERTO ANGEL",
    "sector": "VERDE",
    "lote": "38",
    "nro": "75",
    "latitud": -31.56755646,
    "longitud": -63.51544256,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1194,
    "extinto": "RAMON ANTONIO PERALTA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "77",
    "latitud": -31.56759837,
    "longitud": -63.51546469,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1195,
    "extinto": "LUJAN MARIA DEL CARMEN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "79",
    "latitud": -31.5674851,
    "longitud": -63.51541871,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1196,
    "extinto": "ANGELICA ROBERTINA ALARCON",
    "sector": "VERDE",
    "lote": "38",
    "nro": "83",
    "latitud": -31.56757053,
    "longitud": -63.51546502,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1197,
    "extinto": "RAUL ESTEBAN CELIZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "84",
    "latitud": -31.56759354,
    "longitud": -63.51547717,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1198,
    "extinto": "BONALDI ISIDRO SANTIAGO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "87",
    "latitud": -31.56750459,
    "longitud": -63.51544505,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1199,
    "extinto": "LUDUEÑA MARIA JULIANA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "87",
    "latitud": -31.56750459,
    "longitud": -63.51544505,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1200,
    "extinto": "VILMA  GLADIS  ARGUELLO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "90",
    "latitud": -31.5675657,
    "longitud": -63.5154775,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1201,
    "extinto": "ATANACIO  MAXIMO  LUDUEÑA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "90",
    "latitud": -31.5675657,
    "longitud": -63.5154775,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1202,
    "extinto": "VICTOR  SARGIO  LUDUEÑA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "90",
    "latitud": -31.5675657,
    "longitud": -63.5154775,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1203,
    "extinto": "VERONICA OLGA DIAZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "91",
    "latitud": -31.56758871,
    "longitud": -63.51548965,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1204,
    "extinto": "RAMONA ESTHER NAVARRO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "92",
    "latitud": -31.56745636,
    "longitud": -63.51543322,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1205,
    "extinto": "JUAN PABLO LUQUE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "95",
    "latitud": -31.5675184,
    "longitud": -63.51546772,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1206,
    "extinto": "LAORES FELIX OSCAR",
    "sector": "VERDE",
    "lote": "38",
    "nro": "98",
    "latitud": -31.56758388,
    "longitud": -63.51550212,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1207,
    "extinto": "PALACIO LILIANA BEATRIZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "100",
    "latitud": -31.56747016,
    "longitud": -63.5154559,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1208,
    "extinto": "INES DEL VALLE ZABALA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "103",
    "latitud": -31.56753714,
    "longitud": -63.51549247,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1209,
    "extinto": "IGNACIO INOCENCIO SERRANO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "103",
    "latitud": -31.56753714,
    "longitud": -63.51549247,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1210,
    "extinto": "MIRTA ANTONIA GASPARETTI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "104",
    "latitud": -31.56755604,
    "longitud": -63.51550245,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1211,
    "extinto": "GASPARETTI ELVIO JUAN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "105",
    "latitud": -31.56757905,
    "longitud": -63.5155146,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1212,
    "extinto": "BARRERA CLEMIRA JUANA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "105",
    "latitud": -31.56757905,
    "longitud": -63.5155146,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1213,
    "extinto": "ALVINA JOSEFINA ACEVEDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "106",
    "latitud": -31.5674464,
    "longitud": -63.51545801,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1214,
    "extinto": "VACA MARCELINO RAMON",
    "sector": "VERDE",
    "lote": "38",
    "nro": "108",
    "latitud": -31.56748968,
    "longitud": -63.51548225,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1215,
    "extinto": "MIRIAM HAYDEE TORRESI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "108",
    "latitud": -31.56748968,
    "longitud": -63.51548225,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1216,
    "extinto": "LUDUEÑA ANGEL HECTOR",
    "sector": "VERDE",
    "lote": "38",
    "nro": "109",
    "latitud": -31.56750846,
    "longitud": -63.51549252,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1217,
    "extinto": "MARCELO JAVIER LUDUEÑA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "111",
    "latitud": -31.56755121,
    "longitud": -63.51551493,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1218,
    "extinto": "FERREYRA CRESCENCIO ADOLFO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "112",
    "latitud": -31.56757422,
    "longitud": -63.51552708,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1219,
    "extinto": "CEBALLOS NORMA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "112",
    "latitud": -31.56757422,
    "longitud": -63.51552708,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1220,
    "extinto": "HUGO LUIS ORTS",
    "sector": "VERDE",
    "lote": "38",
    "nro": "113",
    "latitud": -31.56744142,
    "longitud": -63.51547041,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1221,
    "extinto": "SOFIA LIDIA VILCHEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "114",
    "latitud": -31.5674602,
    "longitud": -63.5154807,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1222,
    "extinto": "ROBLEDO PABLO OSCAR",
    "sector": "VERDE",
    "lote": "38",
    "nro": "115",
    "latitud": -31.5674847,
    "longitud": -63.51549465,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1223,
    "extinto": "MARIA CELINA FERNANDEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "115",
    "latitud": -31.5674847,
    "longitud": -63.51549465,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1224,
    "extinto": "RUBEN ANGEL GONZALEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "116",
    "latitud": -31.56750349,
    "longitud": -63.51550492,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1225,
    "extinto": "JOAQUIN TEJEDA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "117",
    "latitud": -31.56752748,
    "longitud": -63.51551742,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1226,
    "extinto": "MONCADA ELVA ISABEL",
    "sector": "VERDE",
    "lote": "38",
    "nro": "117",
    "latitud": -31.56752748,
    "longitud": -63.51551742,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1227,
    "extinto": "RAMON AGUSTIN TEJEDA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "117",
    "latitud": -31.56752748,
    "longitud": -63.51551742,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1228,
    "extinto": "ELVA ROSA TEJEDA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "118",
    "latitud": -31.56754638,
    "longitud": -63.51552741,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1229,
    "extinto": "NEMESI JULIO NEMESIO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "120",
    "latitud": -31.56743644,
    "longitud": -63.51548281,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1230,
    "extinto": "ALDO CARMEN NEMESI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "120",
    "latitud": -31.56743644,
    "longitud": -63.51548281,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1231,
    "extinto": "JUAREZ JOSEFA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "121",
    "latitud": -31.56745522,
    "longitud": -63.5154931,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1232,
    "extinto": "GUEVARA DERMIDIO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "121",
    "latitud": -31.56745522,
    "longitud": -63.5154931,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1233,
    "extinto": "GUEVRA IRMA EDELMIRA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "121",
    "latitud": -31.56745522,
    "longitud": -63.5154931,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1234,
    "extinto": "GUEVARA MARIA SERAFINA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "121",
    "latitud": -31.56745522,
    "longitud": -63.5154931,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1235,
    "extinto": "CUELLO JOSE CRISOLOGO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "122",
    "latitud": -31.56747973,
    "longitud": -63.51550705,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1236,
    "extinto": "PRESSON EDUARDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "123",
    "latitud": -31.56749852,
    "longitud": -63.51551733,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1237,
    "extinto": "GUEVARA JOSE DERMIDIO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "126",
    "latitud": -31.56756456,
    "longitud": -63.51555203,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1238,
    "extinto": "UTRERA PURA ROSA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "126",
    "latitud": -31.56756456,
    "longitud": -63.51555203,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1239,
    "extinto": "BIANCO DOMINGO LUIS",
    "sector": "VERDE",
    "lote": "38",
    "nro": "127",
    "latitud": -31.56743147,
    "longitud": -63.5154952,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1240,
    "extinto": "GUEVARA JOSE FELIX",
    "sector": "VERDE",
    "lote": "38",
    "nro": "128",
    "latitud": -31.56745024,
    "longitud": -63.51550549,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1241,
    "extinto": "CUELLO ANIBAL HENOCH",
    "sector": "VERDE",
    "lote": "38",
    "nro": "129",
    "latitud": -31.56747476,
    "longitud": -63.51551945,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1242,
    "extinto": "HUZULIAK SIMON SEBASTIAN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "130",
    "latitud": -31.56749354,
    "longitud": -63.51552973,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1243,
    "extinto": "GODOY GABINA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "131",
    "latitud": -31.56751782,
    "longitud": -63.51554238,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1244,
    "extinto": "ALBERTO  ENRIQUE  ROBLEDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "131",
    "latitud": -31.56751782,
    "longitud": -63.51554238,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1245,
    "extinto": "ADOLFO ESTEBAN GALLARDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "133",
    "latitud": -31.56755973,
    "longitud": -63.51556451,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1246,
    "extinto": "GUEVARA ROQUE MARCELO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "134",
    "latitud": -31.56742649,
    "longitud": -63.5155076,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1247,
    "extinto": "SAN RAMON JOSEFA AIDA DE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "134",
    "latitud": -31.56742649,
    "longitud": -63.5155076,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1248,
    "extinto": "GALLARDO LIDIA GRACIELA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "135",
    "latitud": -31.56744527,
    "longitud": -63.51551789,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1249,
    "extinto": "CELI DELFINA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "135",
    "latitud": -31.56744527,
    "longitud": -63.51551789,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1250,
    "extinto": "CELI CATALINA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "135",
    "latitud": -31.56744527,
    "longitud": -63.51551789,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1251,
    "extinto": "LAURA ALDANA LAORES",
    "sector": "VERDE",
    "lote": "38",
    "nro": "135",
    "latitud": -31.56744527,
    "longitud": -63.51551789,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1252,
    "extinto": "CABALLERA MARGARITA ,MARIA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "136",
    "latitud": -31.56746979,
    "longitud": -63.51553185,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1253,
    "extinto": "NEMESI LUIS PEDRO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "136",
    "latitud": -31.56746979,
    "longitud": -63.51553185,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1254,
    "extinto": "NEMESI AMERICO PEDRO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "136",
    "latitud": -31.56746979,
    "longitud": -63.51553185,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1255,
    "extinto": "NEMESI LIDICO JUAN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "136",
    "latitud": -31.56746979,
    "longitud": -63.51553185,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1256,
    "extinto": "HUZULIAK SIMON V.",
    "sector": "VERDE",
    "lote": "38",
    "nro": "137",
    "latitud": -31.56748857,
    "longitud": -63.51554213,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1257,
    "extinto": "TORRESI ELBA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "137",
    "latitud": -31.56748857,
    "longitud": -63.51554213,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1258,
    "extinto": "SALGUERO BENEDICTO NERI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "140",
    "latitud": -31.5675549,
    "longitud": -63.51557699,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1259,
    "extinto": "CALLEJO ANDRES NICOLAS",
    "sector": "VERDE",
    "lote": "38",
    "nro": "140",
    "latitud": -31.5675549,
    "longitud": -63.51557699,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1260,
    "extinto": "TISRA JOSE HUGO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "1",
    "latitud": -31.56766037,
    "longitud": -63.51537562,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1261,
    "extinto": "TISERA JUSTINA RAMONA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "1",
    "latitud": -31.56766037,
    "longitud": -63.51537562,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1262,
    "extinto": "AMELIA SEGUNDA SUELDO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "2",
    "latitud": -31.56767942,
    "longitud": -63.51538519,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1263,
    "extinto": "FABRICIO ESPOSITO LUBATTI N.N",
    "sector": "VERDE",
    "lote": "39",
    "nro": "4",
    "latitud": -31.56767479,
    "longitud": -63.51539777,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1264,
    "extinto": "NORIS ADRIANA LUBATTI",
    "sector": "VERDE",
    "lote": "39",
    "nro": "4",
    "latitud": -31.56767479,
    "longitud": -63.51539777,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1265,
    "extinto": "JOSE FABIO GIGENA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "5",
    "latitud": -31.56765111,
    "longitud": -63.51540078,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1266,
    "extinto": "ALEJANDRA BELEN GIGENA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "5",
    "latitud": -31.56765111,
    "longitud": -63.51540078,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1267,
    "extinto": "PEREYRA JOSE ALBERTO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "8",
    "latitud": -31.56766553,
    "longitud": -63.51542293,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1268,
    "extinto": "ELENA ISABEL ABREGO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "8",
    "latitud": -31.56766553,
    "longitud": -63.51542293,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1269,
    "extinto": "ELIA CATALINA CARABANTE",
    "sector": "VERDE",
    "lote": "39",
    "nro": "10",
    "latitud": -31.5676609,
    "longitud": -63.51543551,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1270,
    "extinto": "OLGA RODRIGUEZ",
    "sector": "VERDE",
    "lote": "39",
    "nro": "11",
    "latitud": -31.56763722,
    "longitud": -63.51543852,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1271,
    "extinto": "RODRIGUEZ TERESA JORGELINA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "12",
    "latitud": -31.56765627,
    "longitud": -63.51544809,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1272,
    "extinto": "URSULA BELTRAMO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "13",
    "latitud": -31.56763259,
    "longitud": -63.5154511,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1273,
    "extinto": "GRASSO FRANCISCO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "13",
    "latitud": -31.56763259,
    "longitud": -63.5154511,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1274,
    "extinto": "BLANCA MODESTA MANSILLA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "14",
    "latitud": -31.56765164,
    "longitud": -63.51546067,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1275,
    "extinto": "MIGUEL ANGEL RODRIGUEZ",
    "sector": "VERDE",
    "lote": "39",
    "nro": "14",
    "latitud": -31.56765164,
    "longitud": -63.51546067,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1276,
    "extinto": "GRASSO ADELMO FRANCISCO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "15",
    "latitud": -31.56762796,
    "longitud": -63.51546369,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1277,
    "extinto": "GARINO ESTELA CATALINA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "15",
    "latitud": -31.56762796,
    "longitud": -63.51546369,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1278,
    "extinto": "SIGALI ANTONIA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "16",
    "latitud": -31.56764701,
    "longitud": -63.51547325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1279,
    "extinto": "MIRTA GRACIELA MORENO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "16",
    "latitud": -31.56764701,
    "longitud": -63.51547325,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1280,
    "extinto": "MARGARITA ELSA RUFINATTI",
    "sector": "VERDE",
    "lote": "39",
    "nro": "17",
    "latitud": -31.56762333,
    "longitud": -63.51547627,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1281,
    "extinto": "DOMINGI VICENTE GARINO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "17",
    "latitud": -31.56762333,
    "longitud": -63.51547627,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1282,
    "extinto": "ARGUELLO DAVID",
    "sector": "VERDE",
    "lote": "39",
    "nro": "19",
    "latitud": -31.5676187,
    "longitud": -63.51548885,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1283,
    "extinto": "NELI DEL VALLE ROCCO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "19",
    "latitud": -31.5676187,
    "longitud": -63.51548885,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1284,
    "extinto": "PAOLA CECILIA ARGUELLO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "19",
    "latitud": -31.5676187,
    "longitud": -63.51548885,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1285,
    "extinto": "ROCCO DIEGO NELSON",
    "sector": "VERDE",
    "lote": "39",
    "nro": "20",
    "latitud": -31.56763775,
    "longitud": -63.51549841,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1286,
    "extinto": "SILVERIO ADAN LEZANA",
    "sector": "VERDE",
    "lote": "39",
    "nro": "22",
    "latitud": -31.56763312,
    "longitud": -63.51551099,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1287,
    "extinto": "ARGUELLO RAUL ERNESTO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "2",
    "latitud": -31.56762314,
    "longitud": -63.51553557,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1288,
    "extinto": "JUAREZ ELVIRA NELLY",
    "sector": "VERDE",
    "lote": "40",
    "nro": "2",
    "latitud": -31.56762314,
    "longitud": -63.51553557,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1289,
    "extinto": "CARANDINO VICTORIA DOMINGA",
    "sector": "VERDE",
    "lote": "40",
    "nro": "5",
    "latitud": -31.56759381,
    "longitud": -63.51554834,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1290,
    "extinto": "BELTRAMO FRANCISCO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "5",
    "latitud": -31.56759381,
    "longitud": -63.51554834,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1291,
    "extinto": "BELTRAMO FELIX DOMINGO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "5",
    "latitud": -31.56759381,
    "longitud": -63.51554834,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1292,
    "extinto": "FORCLAZ CARLOS ALBERTO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "8",
    "latitud": -31.5676066,
    "longitud": -63.51557182,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1293,
    "extinto": "FRANCISCO AMARANTO FORCLAZ",
    "sector": "VERDE",
    "lote": "40",
    "nro": "8",
    "latitud": -31.5676066,
    "longitud": -63.51557182,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1294,
    "extinto": "RODRIGUEZ FLORENTINA",
    "sector": "VERDE",
    "lote": "40",
    "nro": "8",
    "latitud": -31.5676066,
    "longitud": -63.51557182,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1295,
    "extinto": "BASSI RAUL IRINEO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "9",
    "latitud": -31.56758278,
    "longitud": -63.5155725,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1296,
    "extinto": "GASPARETTI EMA NELLY",
    "sector": "VERDE",
    "lote": "40",
    "nro": "9",
    "latitud": -31.56758278,
    "longitud": -63.5155725,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1297,
    "extinto": "BASSI ANGEL CERAFIN",
    "sector": "VERDE",
    "lote": "40",
    "nro": "10",
    "latitud": -31.56760108,
    "longitud": -63.5155839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1298,
    "extinto": "SOSA GUZMAN BRAIAN RUBEN",
    "sector": "VERDE",
    "lote": "40",
    "nro": "10",
    "latitud": -31.56760108,
    "longitud": -63.5155839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1299,
    "extinto": "MARIA ROSA GUZMAN",
    "sector": "VERDE",
    "lote": "40",
    "nro": "10",
    "latitud": -31.56760108,
    "longitud": -63.5155839,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1300,
    "extinto": "CARANDINO REMO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "12",
    "latitud": -31.56759557,
    "longitud": -63.51559598,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1301,
    "extinto": "RIVARA  IDA ROSA",
    "sector": "VERDE",
    "lote": "40",
    "nro": "12",
    "latitud": -31.56759557,
    "longitud": -63.51559598,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1302,
    "extinto": "N/N  SANCHEZ.-CISTERNA",
    "sector": "VERDE",
    "lote": "40",
    "nro": "12",
    "latitud": -31.56759557,
    "longitud": -63.51559598,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1303,
    "extinto": "CARANDINO REMO JOSE",
    "sector": "VERDE",
    "lote": "40",
    "nro": "14",
    "latitud": -31.56759005,
    "longitud": -63.51560807,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1304,
    "extinto": "ROLDAN MARIA RAMONA",
    "sector": "VERDE",
    "lote": "40",
    "nro": "15",
    "latitud": -31.56756623,
    "longitud": -63.51560875,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1305,
    "extinto": "ERNESTO  ALVAREZ",
    "sector": "VERDE",
    "lote": "40",
    "nro": "15",
    "latitud": -31.56756623,
    "longitud": -63.51560875,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1306,
    "extinto": "DERRA ASENCION",
    "sector": "VERDE",
    "lote": "40",
    "nro": "18",
    "latitud": -31.56757902,
    "longitud": -63.51563223,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1307,
    "extinto": "TELESFORO ELCLEORINDO CISTERNA",
    "sector": "VERDE",
    "lote": "40",
    "nro": "18",
    "latitud": -31.56757902,
    "longitud": -63.51563223,
    "color_sector": "#4CAF50"
  },
  {
    "id": 1308,
    "extinto": "MANUEL ARMANDO GARCIA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "1",
    "latitud": -31.56765739,
    "longitud": -63.51635926,
    "color_sector": "#FFD700"
  },
  {
    "id": 1309,
    "extinto": "ROQUE  ARMANDO  GARCIA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "1",
    "latitud": -31.56765739,
    "longitud": -63.51635926,
    "color_sector": "#FFD700"
  },
  {
    "id": 1310,
    "extinto": "SALAS DE FONTANA MARIA PURA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "3",
    "latitud": -31.5676753,
    "longitud": -63.51637693,
    "color_sector": "#FFD700"
  },
  {
    "id": 1311,
    "extinto": "GERMAN FONTANA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "3",
    "latitud": -31.5676753,
    "longitud": -63.51637693,
    "color_sector": "#FFD700"
  },
  {
    "id": 1312,
    "extinto": "MARIA DEL VALLE BANEGAS",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "6",
    "latitud": -31.56770218,
    "longitud": -63.51640343,
    "color_sector": "#FFD700"
  },
  {
    "id": 1313,
    "extinto": "LOPEZ ALCIRA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "6",
    "latitud": -31.56770218,
    "longitud": -63.51640343,
    "color_sector": "#FFD700"
  },
  {
    "id": 1314,
    "extinto": "NESTOR GERARDO MICHELI",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "8",
    "latitud": -31.56772009,
    "longitud": -63.5164211,
    "color_sector": "#FFD700"
  },
  {
    "id": 1315,
    "extinto": "CARNIEL NORMA TERESA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "14",
    "latitud": -31.56767088,
    "longitud": -63.51640427,
    "color_sector": "#FFD700"
  },
  {
    "id": 1316,
    "extinto": "PEDRO JOSE CAVAGNA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "14",
    "latitud": -31.56767088,
    "longitud": -63.51640427,
    "color_sector": "#FFD700"
  },
  {
    "id": 1317,
    "extinto": "MANDRINO LUISA TERESA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "17",
    "latitud": -31.56769775,
    "longitud": -63.51643077,
    "color_sector": "#FFD700"
  },
  {
    "id": 1318,
    "extinto": "CAROLINA BONALDI",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "19",
    "latitud": -31.56771567,
    "longitud": -63.51644844,
    "color_sector": "#FFD700"
  },
  {
    "id": 1319,
    "extinto": "SEIMANDI OSCAR",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "20",
    "latitud": -31.56772463,
    "longitud": -63.51645728,
    "color_sector": "#FFD700"
  },
  {
    "id": 1320,
    "extinto": "NIEVE ARCENIO FERREYRA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "22",
    "latitud": -31.56763667,
    "longitud": -63.51640914,
    "color_sector": "#FFD700"
  },
  {
    "id": 1321,
    "extinto": "MARIA CANDELARIA JUAREZ",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "22",
    "latitud": -31.56763667,
    "longitud": -63.51640914,
    "color_sector": "#FFD700"
  },
  {
    "id": 1322,
    "extinto": "CHIAPPO CLAUDIA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "23",
    "latitud": -31.56764563,
    "longitud": -63.51641797,
    "color_sector": "#FFD700"
  },
  {
    "id": 1323,
    "extinto": "LUISA PORCEL DE PERALTA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "24",
    "latitud": -31.56765459,
    "longitud": -63.51642681,
    "color_sector": "#FFD700"
  },
  {
    "id": 1324,
    "extinto": "AGUSTIN ACEVEDO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "24",
    "latitud": -31.56765459,
    "longitud": -63.51642681,
    "color_sector": "#FFD700"
  },
  {
    "id": 1325,
    "extinto": "EMILIO RITO ACEVEDO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "24",
    "latitud": -31.56765459,
    "longitud": -63.51642681,
    "color_sector": "#FFD700"
  },
  {
    "id": 1326,
    "extinto": "MARIA TERESA ALVAREZ",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "24",
    "latitud": -31.56765459,
    "longitud": -63.51642681,
    "color_sector": "#FFD700"
  },
  {
    "id": 1327,
    "extinto": "AUDISIO RICARDO LUIS",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "27",
    "latitud": -31.56768146,
    "longitud": -63.51645331,
    "color_sector": "#FFD700"
  },
  {
    "id": 1328,
    "extinto": "MOISES EMILIO LUQUE",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "28",
    "latitud": -31.56769042,
    "longitud": -63.51646214,
    "color_sector": "#FFD700"
  },
  {
    "id": 1329,
    "extinto": "RAMON EDUARDO BERTOLEZ",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "28",
    "latitud": -31.56769042,
    "longitud": -63.51646214,
    "color_sector": "#FFD700"
  },
  {
    "id": 1330,
    "extinto": "PERALTA CESAR JOSE",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "29",
    "latitud": -31.56769938,
    "longitud": -63.51647098,
    "color_sector": "#FFD700"
  },
  {
    "id": 1331,
    "extinto": "BENZAQUEN PAULA PERALTA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "29",
    "latitud": -31.56769938,
    "longitud": -63.51647098,
    "color_sector": "#FFD700"
  },
  {
    "id": 1332,
    "extinto": "ORLANDI ALICIA YOLANDA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "30",
    "latitud": -31.56770833,
    "longitud": -63.51647981,
    "color_sector": "#FFD700"
  },
  {
    "id": 1333,
    "extinto": "NOEMI ROSA ORLANDI",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "30",
    "latitud": -31.56770833,
    "longitud": -63.51647981,
    "color_sector": "#FFD700"
  },
  {
    "id": 1334,
    "extinto": "ZULEMA GLADYS ORLANDIS",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "30",
    "latitud": -31.56770833,
    "longitud": -63.51647981,
    "color_sector": "#FFD700"
  },
  {
    "id": 1335,
    "extinto": "ROCHA MARIA ADOLFINA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "31",
    "latitud": -31.56761433,
    "longitud": -63.51641881,
    "color_sector": "#FFD700"
  },
  {
    "id": 1336,
    "extinto": "ACUÑA VICENTE",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "31",
    "latitud": -31.56761433,
    "longitud": -63.51641881,
    "color_sector": "#FFD700"
  },
  {
    "id": 1337,
    "extinto": "CHIAPPO LUIS SILVESTRE",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "33",
    "latitud": -31.56763225,
    "longitud": -63.51643648,
    "color_sector": "#FFD700"
  },
  {
    "id": 1338,
    "extinto": "BLANCA SUSANA ACEVEDO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "33",
    "latitud": -31.56763225,
    "longitud": -63.51643648,
    "color_sector": "#FFD700"
  },
  {
    "id": 1339,
    "extinto": "ALMADA ANTONIA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "34",
    "latitud": -31.5676412,
    "longitud": -63.51644532,
    "color_sector": "#FFD700"
  },
  {
    "id": 1340,
    "extinto": "CHIAPPO PEDRO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "35",
    "latitud": -31.56765017,
    "longitud": -63.51645417,
    "color_sector": "#FFD700"
  },
  {
    "id": 1341,
    "extinto": "MAGDALENA BONETTO DE CHIAPPO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "35",
    "latitud": -31.56765017,
    "longitud": -63.51645417,
    "color_sector": "#FFD700"
  },
  {
    "id": 1342,
    "extinto": "CHIAPPO ANTONIO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "35",
    "latitud": -31.56765017,
    "longitud": -63.51645417,
    "color_sector": "#FFD700"
  },
  {
    "id": 1343,
    "extinto": "CHIAPPO HECTOR",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "35",
    "latitud": -31.56765017,
    "longitud": -63.51645417,
    "color_sector": "#FFD700"
  },
  {
    "id": 1344,
    "extinto": "GARDA GLADIS ESTHER",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "35",
    "latitud": -31.56765017,
    "longitud": -63.51645417,
    "color_sector": "#FFD700"
  },
  {
    "id": 1345,
    "extinto": "GARDA MIGUEL",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1346,
    "extinto": "BONETO MARIA TERESA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1347,
    "extinto": "GLADEZ JUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1348,
    "extinto": "BONETO ANTONIO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1349,
    "extinto": "BONETO LUIS ANGEL",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1350,
    "extinto": "BONETTO SILVESTRE",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1351,
    "extinto": "BONETTO MIGUEL",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1352,
    "extinto": "TERESA B DE BONETTO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "36",
    "latitud": -31.56765913,
    "longitud": -63.51646299,
    "color_sector": "#FFD700"
  },
  {
    "id": 1353,
    "extinto": "BONETTO ALDO JUAN",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "37",
    "latitud": -31.56766808,
    "longitud": -63.51647182,
    "color_sector": "#FFD700"
  },
  {
    "id": 1354,
    "extinto": "BONETTO ANGEL",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "37",
    "latitud": -31.56766808,
    "longitud": -63.51647182,
    "color_sector": "#FFD700"
  },
  {
    "id": 1355,
    "extinto": "MARIA C DE BONETTO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "37",
    "latitud": -31.56766808,
    "longitud": -63.51647182,
    "color_sector": "#FFD700"
  },
  {
    "id": 1356,
    "extinto": "ROMANO CARLOS LIRIO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "38",
    "latitud": -31.56767704,
    "longitud": -63.51648065,
    "color_sector": "#FFD700"
  },
  {
    "id": 1357,
    "extinto": "VIRGOLINI ELVA ANTONIA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "38",
    "latitud": -31.56767704,
    "longitud": -63.51648065,
    "color_sector": "#FFD700"
  },
  {
    "id": 1358,
    "extinto": "PERALTA CESAR HORACIO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "40",
    "latitud": -31.56769495,
    "longitud": -63.51649832,
    "color_sector": "#FFD700"
  },
  {
    "id": 1359,
    "extinto": "ROBERTO PEDRO PAVIATTO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "40",
    "latitud": -31.56769495,
    "longitud": -63.51649832,
    "color_sector": "#FFD700"
  },
  {
    "id": 1360,
    "extinto": "ALVAREZ JESUS LIDO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "1",
    "latitud": -31.56753912,
    "longitud": -63.51628115,
    "color_sector": "#FFD700"
  },
  {
    "id": 1361,
    "extinto": "BAICOCHEA JUANA R",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "1",
    "latitud": -31.56753912,
    "longitud": -63.51628115,
    "color_sector": "#FFD700"
  },
  {
    "id": 1362,
    "extinto": "AIDA DEL VALLE ACOSTA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "1",
    "latitud": -31.56753912,
    "longitud": -63.51628115,
    "color_sector": "#FFD700"
  },
  {
    "id": 1363,
    "extinto": "TISSERA JUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "2",
    "latitud": -31.56754947,
    "longitud": -63.51628758,
    "color_sector": "#FFD700"
  },
  {
    "id": 1364,
    "extinto": "ALVAREZ MIRTA IRIS",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "2",
    "latitud": -31.56754947,
    "longitud": -63.51628758,
    "color_sector": "#FFD700"
  },
  {
    "id": 1365,
    "extinto": "JULIO ARGENTINO RODRIGUEZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "3",
    "latitud": -31.56755982,
    "longitud": -63.51629401,
    "color_sector": "#FFD700"
  },
  {
    "id": 1366,
    "extinto": "MONCADA FRANCISCA LIVIA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "3",
    "latitud": -31.56755982,
    "longitud": -63.51629401,
    "color_sector": "#FFD700"
  },
  {
    "id": 1367,
    "extinto": "RODRIGUEZ PEDRO TRISTAN",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "3",
    "latitud": -31.56755982,
    "longitud": -63.51629401,
    "color_sector": "#FFD700"
  },
  {
    "id": 1368,
    "extinto": "RODRIGUEZ MARIA LUZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "4",
    "latitud": -31.56757017,
    "longitud": -63.51630043,
    "color_sector": "#FFD700"
  },
  {
    "id": 1369,
    "extinto": "RODRIGUEZ LUIS DE GONZALO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "5",
    "latitud": -31.56758053,
    "longitud": -63.51630686,
    "color_sector": "#FFD700"
  },
  {
    "id": 1370,
    "extinto": "MARIA ANGELICA GONZALEZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "5",
    "latitud": -31.56758053,
    "longitud": -63.51630686,
    "color_sector": "#FFD700"
  },
  {
    "id": 1371,
    "extinto": "DAMIAN ALBERTO LUCARELLI",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "6",
    "latitud": -31.56759088,
    "longitud": -63.51631329,
    "color_sector": "#FFD700"
  },
  {
    "id": 1372,
    "extinto": "RAMON  ALBERTO  LUCARELLI",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "6",
    "latitud": -31.56759088,
    "longitud": -63.51631329,
    "color_sector": "#FFD700"
  },
  {
    "id": 1373,
    "extinto": "MARIA ISABEL CORSETTI",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "7",
    "latitud": -31.56760123,
    "longitud": -63.51631971,
    "color_sector": "#FFD700"
  },
  {
    "id": 1374,
    "extinto": "VIJANDE NILDA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "8",
    "latitud": -31.56761158,
    "longitud": -63.51632614,
    "color_sector": "#FFD700"
  },
  {
    "id": 1375,
    "extinto": "PATRIA DANTE AGUSTIN",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "8",
    "latitud": -31.56761158,
    "longitud": -63.51632614,
    "color_sector": "#FFD700"
  },
  {
    "id": 1376,
    "extinto": "PATRIA ALDO EMILIO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "8",
    "latitud": -31.56761158,
    "longitud": -63.51632614,
    "color_sector": "#FFD700"
  },
  {
    "id": 1377,
    "extinto": "SCABON DOMINGO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "10",
    "latitud": -31.56763229,
    "longitud": -63.516339,
    "color_sector": "#FFD700"
  },
  {
    "id": 1378,
    "extinto": "LUIS ALFONSO CORSETTI",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "11",
    "latitud": -31.56752938,
    "longitud": -63.51630254,
    "color_sector": "#FFD700"
  },
  {
    "id": 1379,
    "extinto": "ARMANINI ELISA ANTONIA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "11",
    "latitud": -31.56752938,
    "longitud": -63.51630254,
    "color_sector": "#FFD700"
  },
  {
    "id": 1380,
    "extinto": "CAVALLERA NALDO FEDERICO CARLOS",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "12",
    "latitud": -31.56753973,
    "longitud": -63.51630897,
    "color_sector": "#FFD700"
  },
  {
    "id": 1381,
    "extinto": "FAJARDO ALFREDO GENARO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "13",
    "latitud": -31.56755009,
    "longitud": -63.5163154,
    "color_sector": "#FFD700"
  },
  {
    "id": 1382,
    "extinto": "PEDRAZA ERNESTO ISMAEL",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "14",
    "latitud": -31.56756044,
    "longitud": -63.51632182,
    "color_sector": "#FFD700"
  },
  {
    "id": 1383,
    "extinto": "RAMON FAUSTINO LOPEZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "15",
    "latitud": -31.56757079,
    "longitud": -63.51632825,
    "color_sector": "#FFD700"
  },
  {
    "id": 1384,
    "extinto": "JUAN AMADEO LOPEZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "15",
    "latitud": -31.56757079,
    "longitud": -63.51632825,
    "color_sector": "#FFD700"
  },
  {
    "id": 1385,
    "extinto": "PATRIA BLANCA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "16",
    "latitud": -31.56758114,
    "longitud": -63.51633468,
    "color_sector": "#FFD700"
  },
  {
    "id": 1386,
    "extinto": "RODRIGUEZ FELIZ JACINTO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "16",
    "latitud": -31.56758114,
    "longitud": -63.51633468,
    "color_sector": "#FFD700"
  },
  {
    "id": 1387,
    "extinto": "RODRIGUEZ COLAZO FELIZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "16",
    "latitud": -31.56758114,
    "longitud": -63.51633468,
    "color_sector": "#FFD700"
  },
  {
    "id": 1388,
    "extinto": "LUQUE AZUCENA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "16",
    "latitud": -31.56758114,
    "longitud": -63.51633468,
    "color_sector": "#FFD700"
  },
  {
    "id": 1389,
    "extinto": "RODRIGUEZ MARIA ISABEL",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "16",
    "latitud": -31.56758114,
    "longitud": -63.51633468,
    "color_sector": "#FFD700"
  },
  {
    "id": 1390,
    "extinto": "GAMITO MATILDE SOLEDAD",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "17",
    "latitud": -31.5675915,
    "longitud": -63.51634111,
    "color_sector": "#FFD700"
  },
  {
    "id": 1391,
    "extinto": "LUQUE VICTOR ALFONSO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "17",
    "latitud": -31.5675915,
    "longitud": -63.51634111,
    "color_sector": "#FFD700"
  },
  {
    "id": 1392,
    "extinto": "MATILDE BEATRIZ LUQUE",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "17",
    "latitud": -31.5675915,
    "longitud": -63.51634111,
    "color_sector": "#FFD700"
  },
  {
    "id": 1393,
    "extinto": "ROLANDO MARTHA SUSANA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "18",
    "latitud": -31.56760185,
    "longitud": -63.51634753,
    "color_sector": "#FFD700"
  },
  {
    "id": 1394,
    "extinto": "LORENZO OMAR CARBALLO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "19",
    "latitud": -31.5676122,
    "longitud": -63.51635396,
    "color_sector": "#FFD700"
  },
  {
    "id": 1395,
    "extinto": "MOLINARI JOSE",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "20",
    "latitud": -31.56762255,
    "longitud": -63.51636039,
    "color_sector": "#FFD700"
  },
  {
    "id": 1396,
    "extinto": "OTTONELLI DOMINGA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "20",
    "latitud": -31.56762255,
    "longitud": -63.51636039,
    "color_sector": "#FFD700"
  },
  {
    "id": 1397,
    "extinto": "LUQUE RAMON CARMEN",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "21",
    "latitud": -31.56751753,
    "longitud": -63.51632859,
    "color_sector": "#FFD700"
  },
  {
    "id": 1398,
    "extinto": "ANDRADA MARIA ORTENCIA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "21",
    "latitud": -31.56751753,
    "longitud": -63.51632859,
    "color_sector": "#FFD700"
  },
  {
    "id": 1399,
    "extinto": "BENEDICTO MUÑOZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "23",
    "latitud": -31.56753823,
    "longitud": -63.51634144,
    "color_sector": "#FFD700"
  },
  {
    "id": 1400,
    "extinto": "TERESA DEIDERI DE MUÑOZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "23",
    "latitud": -31.56753823,
    "longitud": -63.51634144,
    "color_sector": "#FFD700"
  },
  {
    "id": 1401,
    "extinto": "MANUEL MUÑOZ",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "23",
    "latitud": -31.56753823,
    "longitud": -63.51634144,
    "color_sector": "#FFD700"
  },
  {
    "id": 1402,
    "extinto": "PEDRO ALBERTO CORREA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "24",
    "latitud": -31.56754859,
    "longitud": -63.51634787,
    "color_sector": "#FFD700"
  },
  {
    "id": 1403,
    "extinto": "VICTORIO RIOCIOTTI LUCARELLI",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "25",
    "latitud": -31.56755894,
    "longitud": -63.51635429,
    "color_sector": "#FFD700"
  },
  {
    "id": 1404,
    "extinto": "UTRERA JUANA SARA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "25",
    "latitud": -31.56755894,
    "longitud": -63.51635429,
    "color_sector": "#FFD700"
  },
  {
    "id": 1405,
    "extinto": "NORMA AZUCENA CARBALLO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "27",
    "latitud": -31.56757964,
    "longitud": -63.51636715,
    "color_sector": "#FFD700"
  },
  {
    "id": 1406,
    "extinto": "HECTOR LUIS CEAGLIO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "28",
    "latitud": -31.56759,
    "longitud": -63.51637358,
    "color_sector": "#FFD700"
  },
  {
    "id": 1407,
    "extinto": "ELIA  AMANDA FERREYRA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "28",
    "latitud": -31.56759,
    "longitud": -63.51637358,
    "color_sector": "#FFD700"
  },
  {
    "id": 1408,
    "extinto": "ESTHER MARGARITA MARENGO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "30",
    "latitud": -31.5676107,
    "longitud": -63.51638643,
    "color_sector": "#FFD700"
  },
  {
    "id": 1409,
    "extinto": "JOSE ANGEL RUMACHELLA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "30",
    "latitud": -31.5676107,
    "longitud": -63.51638643,
    "color_sector": "#FFD700"
  },
  {
    "id": 1410,
    "extinto": "FACUNDO RUMACHELLA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "30",
    "latitud": -31.5676107,
    "longitud": -63.51638643,
    "color_sector": "#FFD700"
  },
  {
    "id": 1411,
    "extinto": "TESTA JOSE ANTONIO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "31",
    "latitud": -31.56750779,
    "longitud": -63.51634998,
    "color_sector": "#FFD700"
  },
  {
    "id": 1412,
    "extinto": "PLEYTAVINO NELIDA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "31",
    "latitud": -31.56750779,
    "longitud": -63.51634998,
    "color_sector": "#FFD700"
  },
  {
    "id": 1413,
    "extinto": "TESTA LUIS ANGEL",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "31",
    "latitud": -31.56750779,
    "longitud": -63.51634998,
    "color_sector": "#FFD700"
  },
  {
    "id": 1414,
    "extinto": "JULIA ARGENTINA ZANELLA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "32",
    "latitud": -31.56751815,
    "longitud": -63.5163564,
    "color_sector": "#FFD700"
  },
  {
    "id": 1415,
    "extinto": "JORDAN FERREYRA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "33",
    "latitud": -31.5675285,
    "longitud": -63.51636283,
    "color_sector": "#FFD700"
  },
  {
    "id": 1416,
    "extinto": "TERESA LEONTINA LUDUEÑA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "33",
    "latitud": -31.5675285,
    "longitud": -63.51636283,
    "color_sector": "#FFD700"
  },
  {
    "id": 1417,
    "extinto": "NILDA ESTER LEGUIZAMON",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "34",
    "latitud": -31.56753885,
    "longitud": -63.51636926,
    "color_sector": "#FFD700"
  },
  {
    "id": 1418,
    "extinto": "CROIS BLANCA ELVIRA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "35",
    "latitud": -31.5675492,
    "longitud": -63.51637569,
    "color_sector": "#FFD700"
  },
  {
    "id": 1419,
    "extinto": "HECTOR GIANINI",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "35",
    "latitud": -31.5675492,
    "longitud": -63.51637569,
    "color_sector": "#FFD700"
  },
  {
    "id": 1420,
    "extinto": "GIANINI JULIO H",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "35",
    "latitud": -31.5675492,
    "longitud": -63.51637569,
    "color_sector": "#FFD700"
  },
  {
    "id": 1421,
    "extinto": "ELIDA DOMINGA PESCE",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "36",
    "latitud": -31.56755956,
    "longitud": -63.51638211,
    "color_sector": "#FFD700"
  },
  {
    "id": 1422,
    "extinto": "PERALTA ELDO GODOFREDO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "39",
    "latitud": -31.56759061,
    "longitud": -63.5164014,
    "color_sector": "#FFD700"
  },
  {
    "id": 1423,
    "extinto": "BUSSANO MATEO JOSE",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "40",
    "latitud": -31.56760097,
    "longitud": -63.51640782,
    "color_sector": "#FFD700"
  },
  {
    "id": 1424,
    "extinto": "PERALTA RAMON ERASMO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "1",
    "latitud": -31.56742065,
    "longitud": -63.51622183,
    "color_sector": "#FFD700"
  },
  {
    "id": 1425,
    "extinto": "CAGNASSO ESTHER",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "1",
    "latitud": -31.56742065,
    "longitud": -63.51622183,
    "color_sector": "#FFD700"
  },
  {
    "id": 1426,
    "extinto": "MARTY LEON ELIAS",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "2",
    "latitud": -31.56743145,
    "longitud": -63.51622717,
    "color_sector": "#FFD700"
  },
  {
    "id": 1427,
    "extinto": "MARTY EMMA DE BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "2",
    "latitud": -31.56743145,
    "longitud": -63.51622717,
    "color_sector": "#FFD700"
  },
  {
    "id": 1428,
    "extinto": "LAURA ELENA DEL C. DE J.",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "2",
    "latitud": -31.56743145,
    "longitud": -63.51622717,
    "color_sector": "#FFD700"
  },
  {
    "id": 1429,
    "extinto": "RAMUNDA ROBERTO SEGUNDO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "3",
    "latitud": -31.56744225,
    "longitud": -63.5162325,
    "color_sector": "#FFD700"
  },
  {
    "id": 1430,
    "extinto": "NORMA DEL VALLE CHIALVA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "4",
    "latitud": -31.56745304,
    "longitud": -63.51623785,
    "color_sector": "#FFD700"
  },
  {
    "id": 1431,
    "extinto": "PEREZ MARIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "5",
    "latitud": -31.56746384,
    "longitud": -63.51624318,
    "color_sector": "#FFD700"
  },
  {
    "id": 1432,
    "extinto": "CARLOS ALBERTO AUDISIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "6",
    "latitud": -31.56747464,
    "longitud": -63.51624852,
    "color_sector": "#FFD700"
  },
  {
    "id": 1433,
    "extinto": "MARIA TEOFILA ORTEGA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "6",
    "latitud": -31.56747464,
    "longitud": -63.51624852,
    "color_sector": "#FFD700"
  },
  {
    "id": 1434,
    "extinto": "ACOSTA ELVIO TEOFILIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "7",
    "latitud": -31.56748543,
    "longitud": -63.51625386,
    "color_sector": "#FFD700"
  },
  {
    "id": 1435,
    "extinto": "ANA MARIA ACOSTA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "7",
    "latitud": -31.56748543,
    "longitud": -63.51625386,
    "color_sector": "#FFD700"
  },
  {
    "id": 1436,
    "extinto": "LUDUEÑA ELVIO OSCAR",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "8",
    "latitud": -31.56749623,
    "longitud": -63.5162592,
    "color_sector": "#FFD700"
  },
  {
    "id": 1437,
    "extinto": "OSFALDO MARCOS PAVON",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "8",
    "latitud": -31.56749623,
    "longitud": -63.5162592,
    "color_sector": "#FFD700"
  },
  {
    "id": 1438,
    "extinto": "SANCHEZ ALEJANDRO MATIAS",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "10",
    "latitud": -31.56751782,
    "longitud": -63.51626987,
    "color_sector": "#FFD700"
  },
  {
    "id": 1439,
    "extinto": "JORGE OSCAR ALVAREZ",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "10",
    "latitud": -31.56751782,
    "longitud": -63.51626987,
    "color_sector": "#FFD700"
  },
  {
    "id": 1440,
    "extinto": "CELSO PORCEL DE PERALTA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "11",
    "latitud": -31.56741257,
    "longitud": -63.51624414,
    "color_sector": "#FFD700"
  },
  {
    "id": 1441,
    "extinto": "PORCEL DE PERALTA ANA MARIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "11",
    "latitud": -31.56741257,
    "longitud": -63.51624414,
    "color_sector": "#FFD700"
  },
  {
    "id": 1442,
    "extinto": "GOMEZ NELIDA ROSA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "11",
    "latitud": -31.56741257,
    "longitud": -63.51624414,
    "color_sector": "#FFD700"
  },
  {
    "id": 1443,
    "extinto": "FERREYRA CAROLINA JOSEFA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "12",
    "latitud": -31.56742337,
    "longitud": -63.51624948,
    "color_sector": "#FFD700"
  },
  {
    "id": 1444,
    "extinto": "BERTETTO JULIO DOMINGO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "13",
    "latitud": -31.56743416,
    "longitud": -63.51625481,
    "color_sector": "#FFD700"
  },
  {
    "id": 1445,
    "extinto": "LENCINAS ELDA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "13",
    "latitud": -31.56743416,
    "longitud": -63.51625481,
    "color_sector": "#FFD700"
  },
  {
    "id": 1446,
    "extinto": "BONALDI JOSE LORENZO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "14",
    "latitud": -31.56744496,
    "longitud": -63.51626015,
    "color_sector": "#FFD700"
  },
  {
    "id": 1447,
    "extinto": "SILVIA ELENA BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "14",
    "latitud": -31.56744496,
    "longitud": -63.51626015,
    "color_sector": "#FFD700"
  },
  {
    "id": 1448,
    "extinto": "LORENZO ELIAS BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "14",
    "latitud": -31.56744496,
    "longitud": -63.51626015,
    "color_sector": "#FFD700"
  },
  {
    "id": 1449,
    "extinto": "PATRICIA BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "14",
    "latitud": -31.56744496,
    "longitud": -63.51626015,
    "color_sector": "#FFD700"
  },
  {
    "id": 1450,
    "extinto": "MARIA AMERICA BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "15",
    "latitud": -31.56745576,
    "longitud": -63.51626548,
    "color_sector": "#FFD700"
  },
  {
    "id": 1451,
    "extinto": "CARLOS BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "15",
    "latitud": -31.56745576,
    "longitud": -63.51626548,
    "color_sector": "#FFD700"
  },
  {
    "id": 1452,
    "extinto": "ANGELINA CARRARA DE BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "15",
    "latitud": -31.56745576,
    "longitud": -63.51626548,
    "color_sector": "#FFD700"
  },
  {
    "id": 1453,
    "extinto": "ESPINDOLA ROSA LETICIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "17",
    "latitud": -31.56747735,
    "longitud": -63.51627616,
    "color_sector": "#FFD700"
  },
  {
    "id": 1454,
    "extinto": "FUENTES BIENVENIDO SIXTO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "17",
    "latitud": -31.56747735,
    "longitud": -63.51627616,
    "color_sector": "#FFD700"
  },
  {
    "id": 1455,
    "extinto": "NIEVA RICARDO DE LAS MERCEDES",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "29",
    "latitud": -31.56748911,
    "longitud": -63.51631399,
    "color_sector": "#FFD700"
  },
  {
    "id": 1456,
    "extinto": "NILDA DOLORES GONZALEZ",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "29",
    "latitud": -31.56748911,
    "longitud": -63.51631399,
    "color_sector": "#FFD700"
  },
  {
    "id": 1457,
    "extinto": "OSVALDO CESAR VICENTE",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "29",
    "latitud": -31.56748911,
    "longitud": -63.51631399,
    "color_sector": "#FFD700"
  },
  {
    "id": 1458,
    "extinto": "NANI ROALD LUIS",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "30",
    "latitud": -31.5674999,
    "longitud": -63.51631932,
    "color_sector": "#FFD700"
  },
  {
    "id": 1459,
    "extinto": "AGUIRRE ROBERTO ANIBAL",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "21",
    "latitud": -31.56740273,
    "longitud": -63.5162713,
    "color_sector": "#FFD700"
  },
  {
    "id": 1460,
    "extinto": "SANTIAGO BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "22",
    "latitud": -31.56741353,
    "longitud": -63.51627664,
    "color_sector": "#FFD700"
  },
  {
    "id": 1461,
    "extinto": "TERESA CARRARA DE BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "22",
    "latitud": -31.56741353,
    "longitud": -63.51627664,
    "color_sector": "#FFD700"
  },
  {
    "id": 1462,
    "extinto": "FARRONI ADELINA SANTA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "23",
    "latitud": -31.56742432,
    "longitud": -63.51628197,
    "color_sector": "#FFD700"
  },
  {
    "id": 1463,
    "extinto": "GAZZONI JOSE",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "23",
    "latitud": -31.56742432,
    "longitud": -63.51628197,
    "color_sector": "#FFD700"
  },
  {
    "id": 1464,
    "extinto": "GAZZONI HECTOR RUBEN",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "23",
    "latitud": -31.56742432,
    "longitud": -63.51628197,
    "color_sector": "#FFD700"
  },
  {
    "id": 1465,
    "extinto": "DOMINGO SANTIAGO FRASSA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "24",
    "latitud": -31.56743512,
    "longitud": -63.51628731,
    "color_sector": "#FFD700"
  },
  {
    "id": 1466,
    "extinto": "VALIENTE ANDRES",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "25",
    "latitud": -31.56744592,
    "longitud": -63.51629265,
    "color_sector": "#FFD700"
  },
  {
    "id": 1467,
    "extinto": "MARCHISONE ISABEL",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "25",
    "latitud": -31.56744592,
    "longitud": -63.51629265,
    "color_sector": "#FFD700"
  },
  {
    "id": 1468,
    "extinto": "VALIENTE JUAN BAUTISTA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "25",
    "latitud": -31.56744592,
    "longitud": -63.51629265,
    "color_sector": "#FFD700"
  },
  {
    "id": 1469,
    "extinto": "MULLER MARIA DEL CARMEN",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "25",
    "latitud": -31.56744592,
    "longitud": -63.51629265,
    "color_sector": "#FFD700"
  },
  {
    "id": 1470,
    "extinto": "VALIENTE ANTONIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "25",
    "latitud": -31.56744592,
    "longitud": -63.51629265,
    "color_sector": "#FFD700"
  },
  {
    "id": 1471,
    "extinto": "VALIENTE VICTORIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "25",
    "latitud": -31.56744592,
    "longitud": -63.51629265,
    "color_sector": "#FFD700"
  },
  {
    "id": 1472,
    "extinto": "MODESTO FRASSA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "27",
    "latitud": -31.56746751,
    "longitud": -63.51630332,
    "color_sector": "#FFD700"
  },
  {
    "id": 1473,
    "extinto": "MARIA MARGARITA SASIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "27",
    "latitud": -31.56746751,
    "longitud": -63.51630332,
    "color_sector": "#FFD700"
  },
  {
    "id": 1474,
    "extinto": "CORSETTI ALBERTO PASCUAL",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "28",
    "latitud": -31.56747831,
    "longitud": -63.51630865,
    "color_sector": "#FFD700"
  },
  {
    "id": 1475,
    "extinto": "TABORDA MARIA ANGELICA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "28",
    "latitud": -31.56747831,
    "longitud": -63.51630865,
    "color_sector": "#FFD700"
  },
  {
    "id": 1476,
    "extinto": "MOYANO DONACIANO N",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "20",
    "latitud": -31.56750974,
    "longitud": -63.51629216,
    "color_sector": "#FFD700"
  },
  {
    "id": 1477,
    "extinto": "MOYANO MARIA LIDIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "20",
    "latitud": -31.56750974,
    "longitud": -63.51629216,
    "color_sector": "#FFD700"
  },
  {
    "id": 1478,
    "extinto": "BERTETTO ADOLFO LUIS",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "19",
    "latitud": -31.56749895,
    "longitud": -63.51628683,
    "color_sector": "#FFD700"
  },
  {
    "id": 1479,
    "extinto": "AUDICIO JUAN BAUTISTA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "31",
    "latitud": -31.56739465,
    "longitud": -63.51629361,
    "color_sector": "#FFD700"
  },
  {
    "id": 1480,
    "extinto": "BENJAMINA RAMONA SERRADEL",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "31",
    "latitud": -31.56739465,
    "longitud": -63.51629361,
    "color_sector": "#FFD700"
  },
  {
    "id": 1481,
    "extinto": "OMAR ALBERTO FRASSA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "32",
    "latitud": -31.56740544,
    "longitud": -63.51629895,
    "color_sector": "#FFD700"
  },
  {
    "id": 1482,
    "extinto": "MARIA CRISTINA BARRIONUEVO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "32",
    "latitud": -31.56740544,
    "longitud": -63.51629895,
    "color_sector": "#FFD700"
  },
  {
    "id": 1483,
    "extinto": "AGUIRRE JUAN ANTONIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "33",
    "latitud": -31.56741624,
    "longitud": -63.51630428,
    "color_sector": "#FFD700"
  },
  {
    "id": 1484,
    "extinto": "AGUIRRE-RE IGNACIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "33",
    "latitud": -31.56741624,
    "longitud": -63.51630428,
    "color_sector": "#FFD700"
  },
  {
    "id": 1485,
    "extinto": "AUDISIO JUAN ALBERTO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "34",
    "latitud": -31.56742704,
    "longitud": -63.51630962,
    "color_sector": "#FFD700"
  },
  {
    "id": 1486,
    "extinto": "TELMO TORAZZA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "35",
    "latitud": -31.56743783,
    "longitud": -63.51631496,
    "color_sector": "#FFD700"
  },
  {
    "id": 1487,
    "extinto": "CELESTINA  ANGELA  CERONI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "35",
    "latitud": -31.56743783,
    "longitud": -63.51631496,
    "color_sector": "#FFD700"
  },
  {
    "id": 1488,
    "extinto": "ELVIRA CORSETTI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "36",
    "latitud": -31.56744863,
    "longitud": -63.51632029,
    "color_sector": "#FFD700"
  },
  {
    "id": 1489,
    "extinto": "RIGAZIO VICTORIO MARIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "36",
    "latitud": -31.56744863,
    "longitud": -63.51632029,
    "color_sector": "#FFD700"
  },
  {
    "id": 1490,
    "extinto": "MEDINA VIRGINIA",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "38",
    "latitud": -31.56747023,
    "longitud": -63.51633097,
    "color_sector": "#FFD700"
  },
  {
    "id": 1491,
    "extinto": "LUDUEÑA ALEJANDRO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "38",
    "latitud": -31.56747023,
    "longitud": -63.51633097,
    "color_sector": "#FFD700"
  },
  {
    "id": 1492,
    "extinto": "LUDUEÑA JULIO ALEJANDRO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "38",
    "latitud": -31.56747023,
    "longitud": -63.51633097,
    "color_sector": "#FFD700"
  },
  {
    "id": 1493,
    "extinto": "GAITE ERNESTO ABEL",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "1",
    "latitud": -31.5674567,
    "longitud": -63.51611718,
    "color_sector": "#FFD700"
  },
  {
    "id": 1494,
    "extinto": "ARREGUI TERESA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "1",
    "latitud": -31.5674567,
    "longitud": -63.51611718,
    "color_sector": "#FFD700"
  },
  {
    "id": 1495,
    "extinto": "GAITE FLORIANA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "1",
    "latitud": -31.5674567,
    "longitud": -63.51611718,
    "color_sector": "#FFD700"
  },
  {
    "id": 1496,
    "extinto": "GAITE ERNESTO ABEL",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "1",
    "latitud": -31.5674567,
    "longitud": -63.51611718,
    "color_sector": "#FFD700"
  },
  {
    "id": 1497,
    "extinto": "MOCHI MIGUEL ANGEL",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "2",
    "latitud": -31.56746718,
    "longitud": -63.51612332,
    "color_sector": "#FFD700"
  },
  {
    "id": 1498,
    "extinto": "AMBROSIO RIOS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "3",
    "latitud": -31.56747766,
    "longitud": -63.51612946,
    "color_sector": "#FFD700"
  },
  {
    "id": 1499,
    "extinto": "ROLANDO ELVA MAGDALENA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "3",
    "latitud": -31.56747766,
    "longitud": -63.51612946,
    "color_sector": "#FFD700"
  },
  {
    "id": 1500,
    "extinto": "ALGARRA JUAN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "7",
    "latitud": -31.56751957,
    "longitud": -63.51615403,
    "color_sector": "#FFD700"
  },
  {
    "id": 1501,
    "extinto": "PRESOTTI SANTOS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "7",
    "latitud": -31.56751957,
    "longitud": -63.51615403,
    "color_sector": "#FFD700"
  },
  {
    "id": 1502,
    "extinto": "PRESOTTI MARIA ANGELA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "7",
    "latitud": -31.56751957,
    "longitud": -63.51615403,
    "color_sector": "#FFD700"
  },
  {
    "id": 1503,
    "extinto": "PRESOTTI ANA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "7",
    "latitud": -31.56751957,
    "longitud": -63.51615403,
    "color_sector": "#FFD700"
  },
  {
    "id": 1504,
    "extinto": "ANZUINELLI AVELINO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "9",
    "latitud": -31.56754053,
    "longitud": -63.51616632,
    "color_sector": "#FFD700"
  },
  {
    "id": 1505,
    "extinto": "ANZUINELLI JORGE OSVALDO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "9",
    "latitud": -31.56754053,
    "longitud": -63.51616632,
    "color_sector": "#FFD700"
  },
  {
    "id": 1506,
    "extinto": "CUELLO OLGA ROSA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "9",
    "latitud": -31.56754053,
    "longitud": -63.51616632,
    "color_sector": "#FFD700"
  },
  {
    "id": 1507,
    "extinto": "CAMPANA ROXANA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "9",
    "latitud": -31.56754053,
    "longitud": -63.51616632,
    "color_sector": "#FFD700"
  },
  {
    "id": 1508,
    "extinto": "ILDA AYDEE FORMENTELLI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "10",
    "latitud": -31.56755101,
    "longitud": -63.51617246,
    "color_sector": "#FFD700"
  },
  {
    "id": 1509,
    "extinto": "FORMENTELLI MARIA INES",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "11",
    "latitud": -31.56756149,
    "longitud": -63.5161786,
    "color_sector": "#FFD700"
  },
  {
    "id": 1510,
    "extinto": "MARCELA ALMADA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "11",
    "latitud": -31.56756149,
    "longitud": -63.5161786,
    "color_sector": "#FFD700"
  },
  {
    "id": 1511,
    "extinto": "INES ALMADA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "11",
    "latitud": -31.56756149,
    "longitud": -63.5161786,
    "color_sector": "#FFD700"
  },
  {
    "id": 1512,
    "extinto": "RAMON ANGEL ALMADA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "11",
    "latitud": -31.56756149,
    "longitud": -63.5161786,
    "color_sector": "#FFD700"
  },
  {
    "id": 1513,
    "extinto": "CEBALLOS GLADYS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "13",
    "latitud": -31.56758244,
    "longitud": -63.51619089,
    "color_sector": "#FFD700"
  },
  {
    "id": 1514,
    "extinto": "JUAN CARLOS CAMUSSO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "13",
    "latitud": -31.56758244,
    "longitud": -63.51619089,
    "color_sector": "#FFD700"
  },
  {
    "id": 1515,
    "extinto": "CAMUSSO JAVIER GUSTAVO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "13",
    "latitud": -31.56758244,
    "longitud": -63.51619089,
    "color_sector": "#FFD700"
  },
  {
    "id": 1516,
    "extinto": "ADRIANA DEL VALLE SACILOTTO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "14",
    "latitud": -31.56759292,
    "longitud": -63.51619703,
    "color_sector": "#FFD700"
  },
  {
    "id": 1517,
    "extinto": "PASTORE ESTHER C",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "15",
    "latitud": -31.5676034,
    "longitud": -63.51620317,
    "color_sector": "#FFD700"
  },
  {
    "id": 1518,
    "extinto": "CEBALLOS ABEL",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "15",
    "latitud": -31.5676034,
    "longitud": -63.51620317,
    "color_sector": "#FFD700"
  },
  {
    "id": 1519,
    "extinto": "RAFAELA AGUSTINA CORSETTI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "16",
    "latitud": -31.56761388,
    "longitud": -63.51620931,
    "color_sector": "#FFD700"
  },
  {
    "id": 1520,
    "extinto": "HUMBERTO ELEAZAR TABORDA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "16",
    "latitud": -31.56761388,
    "longitud": -63.51620931,
    "color_sector": "#FFD700"
  },
  {
    "id": 1521,
    "extinto": "QUINTEROS MIGUEL ANTONIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "18",
    "latitud": -31.56763483,
    "longitud": -63.5162216,
    "color_sector": "#FFD700"
  },
  {
    "id": 1522,
    "extinto": "MARIA ISABEL LUDUEÑA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "18",
    "latitud": -31.56763483,
    "longitud": -63.5162216,
    "color_sector": "#FFD700"
  },
  {
    "id": 1523,
    "extinto": "ZABALA FROYLAN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "20",
    "latitud": -31.56765581,
    "longitud": -63.51623386,
    "color_sector": "#FFD700"
  },
  {
    "id": 1524,
    "extinto": "ROCA ANTONIA DEL VALLE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "21",
    "latitud": -31.5674474,
    "longitud": -63.51613883,
    "color_sector": "#FFD700"
  },
  {
    "id": 1525,
    "extinto": "LOZA MARIA ELSA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "21",
    "latitud": -31.5674474,
    "longitud": -63.51613883,
    "color_sector": "#FFD700"
  },
  {
    "id": 1526,
    "extinto": "GUILLERMINA LUISA LOZA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "21",
    "latitud": -31.5674474,
    "longitud": -63.51613883,
    "color_sector": "#FFD700"
  },
  {
    "id": 1527,
    "extinto": "LOZA JOSE LUIS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "21",
    "latitud": -31.5674474,
    "longitud": -63.51613883,
    "color_sector": "#FFD700"
  },
  {
    "id": 1528,
    "extinto": "GARCIA ALGARRA  VALENTIN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "23",
    "latitud": -31.56745788,
    "longitud": -63.51614497,
    "color_sector": "#FFD700"
  },
  {
    "id": 1529,
    "extinto": "VALIENTE ALFREDO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "25",
    "latitud": -31.56748931,
    "longitud": -63.5161634,
    "color_sector": "#FFD700"
  },
  {
    "id": 1530,
    "extinto": "VALIENTE JOSE MARIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "26",
    "latitud": -31.56749979,
    "longitud": -63.51616954,
    "color_sector": "#FFD700"
  },
  {
    "id": 1531,
    "extinto": "RUBIOLO CELSO PEDRO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "27",
    "latitud": -31.56751027,
    "longitud": -63.51617568,
    "color_sector": "#FFD700"
  },
  {
    "id": 1532,
    "extinto": "VALIENTE IRES BLANCA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "27",
    "latitud": -31.56751027,
    "longitud": -63.51617568,
    "color_sector": "#FFD700"
  },
  {
    "id": 1533,
    "extinto": "UTRERA RAMON EDUARDO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "28",
    "latitud": -31.56752075,
    "longitud": -63.51618183,
    "color_sector": "#FFD700"
  },
  {
    "id": 1534,
    "extinto": "DONDO ANA MARIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "30",
    "latitud": -31.5675417,
    "longitud": -63.51619411,
    "color_sector": "#FFD700"
  },
  {
    "id": 1535,
    "extinto": "JUAN CARLOS ARMANINI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "32",
    "latitud": -31.56756266,
    "longitud": -63.5162064,
    "color_sector": "#FFD700"
  },
  {
    "id": 1536,
    "extinto": "ROMEO ARMANINI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "33",
    "latitud": -31.56757314,
    "longitud": -63.51621254,
    "color_sector": "#FFD700"
  },
  {
    "id": 1537,
    "extinto": "ELISA ARMANINI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "33",
    "latitud": -31.56757314,
    "longitud": -63.51621254,
    "color_sector": "#FFD700"
  },
  {
    "id": 1538,
    "extinto": "GOMEZ MARIA ANTONIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "33",
    "latitud": -31.56757314,
    "longitud": -63.51621254,
    "color_sector": "#FFD700"
  },
  {
    "id": 1539,
    "extinto": "ALBINA ROSA TEJEDA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "34",
    "latitud": -31.56758362,
    "longitud": -63.51621868,
    "color_sector": "#FFD700"
  },
  {
    "id": 1540,
    "extinto": "RAMON NESTOR ARGUELLO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "34",
    "latitud": -31.56758362,
    "longitud": -63.51621868,
    "color_sector": "#FFD700"
  },
  {
    "id": 1541,
    "extinto": "VIRGIÑO ALBERTO CACIORGNA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "37",
    "latitud": -31.56761505,
    "longitud": -63.51623711,
    "color_sector": "#FFD700"
  },
  {
    "id": 1542,
    "extinto": "MARIA GABRIELA ARENILLAS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "39",
    "latitud": -31.56763602,
    "longitud": -63.51624937,
    "color_sector": "#FFD700"
  },
  {
    "id": 1543,
    "extinto": "NELSON LUIS VIGNOLO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "40",
    "latitud": -31.56764649,
    "longitud": -63.51625554,
    "color_sector": "#FFD700"
  },
  {
    "id": 1544,
    "extinto": "ALGARRA FRANCISCO SANTOS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "41",
    "latitud": -31.56743607,
    "longitud": -63.51616519,
    "color_sector": "#FFD700"
  },
  {
    "id": 1545,
    "extinto": "NORMA IBI CATTANEO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "41",
    "latitud": -31.56743607,
    "longitud": -63.51616519,
    "color_sector": "#FFD700"
  },
  {
    "id": 1546,
    "extinto": "ANA  MARIA  ALGARRA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "41",
    "latitud": -31.56743607,
    "longitud": -63.51616519,
    "color_sector": "#FFD700"
  },
  {
    "id": 1547,
    "extinto": "MARTINEZ JOSE TEOFILO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "42",
    "latitud": -31.56744655,
    "longitud": -63.51617133,
    "color_sector": "#FFD700"
  },
  {
    "id": 1548,
    "extinto": "MARTINEZ TERESITA DE JESUS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "42",
    "latitud": -31.56744655,
    "longitud": -63.51617133,
    "color_sector": "#FFD700"
  },
  {
    "id": 1549,
    "extinto": "MARIANI ELDA ANGELICA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "42",
    "latitud": -31.56744655,
    "longitud": -63.51617133,
    "color_sector": "#FFD700"
  },
  {
    "id": 1550,
    "extinto": "SUAREZ SANTINA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "44",
    "latitud": -31.56746751,
    "longitud": -63.51618362,
    "color_sector": "#FFD700"
  },
  {
    "id": 1551,
    "extinto": "RAMON HUGO RODRIGUEZ",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "44",
    "latitud": -31.56746751,
    "longitud": -63.51618362,
    "color_sector": "#FFD700"
  },
  {
    "id": 1552,
    "extinto": "DECCICO ANGEL ANTONIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "46",
    "latitud": -31.56748846,
    "longitud": -63.5161959,
    "color_sector": "#FFD700"
  },
  {
    "id": 1553,
    "extinto": "ARIAS BLANCA ELENA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "47",
    "latitud": -31.56749894,
    "longitud": -63.51620204,
    "color_sector": "#FFD700"
  },
  {
    "id": 1554,
    "extinto": "DARIOZZI MARIANO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "48",
    "latitud": -31.56750942,
    "longitud": -63.51620819,
    "color_sector": "#FFD700"
  },
  {
    "id": 1555,
    "extinto": "FANANI MARIA MARGARITA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "48",
    "latitud": -31.56750942,
    "longitud": -63.51620819,
    "color_sector": "#FFD700"
  },
  {
    "id": 1556,
    "extinto": "CATALANO VALENTIN LIBERATO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "48",
    "latitud": -31.56750942,
    "longitud": -63.51620819,
    "color_sector": "#FFD700"
  },
  {
    "id": 1557,
    "extinto": "BERRONE MARIA MARGARITA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "49",
    "latitud": -31.5675199,
    "longitud": -63.51621433,
    "color_sector": "#FFD700"
  },
  {
    "id": 1558,
    "extinto": "GONZALEZ JUAN HECTOR",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "49",
    "latitud": -31.5675199,
    "longitud": -63.51621433,
    "color_sector": "#FFD700"
  },
  {
    "id": 1559,
    "extinto": "BASSI LUCIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "49",
    "latitud": -31.5675199,
    "longitud": -63.51621433,
    "color_sector": "#FFD700"
  },
  {
    "id": 1560,
    "extinto": "GONZALEZ RAUL BONIFACIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "50",
    "latitud": -31.56753038,
    "longitud": -63.51622047,
    "color_sector": "#FFD700"
  },
  {
    "id": 1561,
    "extinto": "RIVIERE JULIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "51",
    "latitud": -31.56754085,
    "longitud": -63.51622661,
    "color_sector": "#FFD700"
  },
  {
    "id": 1562,
    "extinto": "JULIO E RIVIÃRE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "51",
    "latitud": -31.56754085,
    "longitud": -63.51622661,
    "color_sector": "#FFD700"
  },
  {
    "id": 1563,
    "extinto": "FLORENTINA VDA. DE RIVIÃRE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "51",
    "latitud": -31.56754085,
    "longitud": -63.51622661,
    "color_sector": "#FFD700"
  },
  {
    "id": 1564,
    "extinto": "MARIA MAGDALENA SOSA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "51",
    "latitud": -31.56754085,
    "longitud": -63.51622661,
    "color_sector": "#FFD700"
  },
  {
    "id": 1565,
    "extinto": "ETHEHUALDO CASORRAN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "53",
    "latitud": -31.56756181,
    "longitud": -63.5162389,
    "color_sector": "#FFD700"
  },
  {
    "id": 1566,
    "extinto": "MANGIERI MARIA DEL CARMEN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "54",
    "latitud": -31.56757229,
    "longitud": -63.51624504,
    "color_sector": "#FFD700"
  },
  {
    "id": 1567,
    "extinto": "GIACOSSA NATALIO CELSO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "55",
    "latitud": -31.56758277,
    "longitud": -63.51625118,
    "color_sector": "#FFD700"
  },
  {
    "id": 1568,
    "extinto": "BUFFA VICENTE BARTOLO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "57",
    "latitud": -31.56760372,
    "longitud": -63.51626347,
    "color_sector": "#FFD700"
  },
  {
    "id": 1569,
    "extinto": "MAIDANA SEGUNDO RAMON",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "59",
    "latitud": -31.56762468,
    "longitud": -63.51627575,
    "color_sector": "#FFD700"
  },
  {
    "id": 1570,
    "extinto": "GUEVARA MARIA TERESA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "59",
    "latitud": -31.56762468,
    "longitud": -63.51627575,
    "color_sector": "#FFD700"
  },
  {
    "id": 1571,
    "extinto": "GONZALEZ SHEIRLEY TIZIANA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "60",
    "latitud": -31.56763516,
    "longitud": -63.51628189,
    "color_sector": "#FFD700"
  },
  {
    "id": 1572,
    "extinto": "GAITE FELIZ RAMON",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "61",
    "latitud": -31.56742677,
    "longitud": -63.51618684,
    "color_sector": "#FFD700"
  },
  {
    "id": 1573,
    "extinto": "VACA RAMONA MAGDALENA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "61",
    "latitud": -31.56742677,
    "longitud": -63.51618684,
    "color_sector": "#FFD700"
  },
  {
    "id": 1574,
    "extinto": "GUEVARA ROBERTO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "61",
    "latitud": -31.56742677,
    "longitud": -63.51618684,
    "color_sector": "#FFD700"
  },
  {
    "id": 1575,
    "extinto": "MARIANI ATILIO SEGUNDO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "62",
    "latitud": -31.56743724,
    "longitud": -63.51619298,
    "color_sector": "#FFD700"
  },
  {
    "id": 1576,
    "extinto": "GUMERSINDA RUIZ DE MARIANI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "62",
    "latitud": -31.56743724,
    "longitud": -63.51619298,
    "color_sector": "#FFD700"
  },
  {
    "id": 1577,
    "extinto": "AUDISIO HILDA AIDE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "63",
    "latitud": -31.56744772,
    "longitud": -63.51619913,
    "color_sector": "#FFD700"
  },
  {
    "id": 1578,
    "extinto": "MERLO CARLOS ROBERTO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "63",
    "latitud": -31.56744772,
    "longitud": -63.51619913,
    "color_sector": "#FFD700"
  },
  {
    "id": 1579,
    "extinto": "MANTESE PEDRO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "64",
    "latitud": -31.5674582,
    "longitud": -63.51620527,
    "color_sector": "#FFD700"
  },
  {
    "id": 1580,
    "extinto": "MANTESE PEDRO (HIJO)",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "64",
    "latitud": -31.5674582,
    "longitud": -63.51620527,
    "color_sector": "#FFD700"
  },
  {
    "id": 1581,
    "extinto": "MARIA OLIVA DE MANTESE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "64",
    "latitud": -31.5674582,
    "longitud": -63.51620527,
    "color_sector": "#FFD700"
  },
  {
    "id": 1582,
    "extinto": "BELTRAMO ANDRES DOMINGO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "64",
    "latitud": -31.5674582,
    "longitud": -63.51620527,
    "color_sector": "#FFD700"
  },
  {
    "id": 1583,
    "extinto": "FRANCISCO ANDRES BELTRAMO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "65",
    "latitud": -31.56746868,
    "longitud": -63.51621141,
    "color_sector": "#FFD700"
  },
  {
    "id": 1584,
    "extinto": "ERNESTO JAVIER GARCIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "65",
    "latitud": -31.56746868,
    "longitud": -63.51621141,
    "color_sector": "#FFD700"
  },
  {
    "id": 1585,
    "extinto": "WALTER GERMAN FERREYRA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "66",
    "latitud": -31.56747916,
    "longitud": -63.51621755,
    "color_sector": "#FFD700"
  },
  {
    "id": 1586,
    "extinto": "RAMON AMADO FERREYRA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "66",
    "latitud": -31.56747916,
    "longitud": -63.51621755,
    "color_sector": "#FFD700"
  },
  {
    "id": 1587,
    "extinto": "GIACOSSA NORBERTO CARLOS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "67",
    "latitud": -31.56748964,
    "longitud": -63.5162237,
    "color_sector": "#FFD700"
  },
  {
    "id": 1588,
    "extinto": "GIACOSSA DOMINGO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "67",
    "latitud": -31.56748964,
    "longitud": -63.5162237,
    "color_sector": "#FFD700"
  },
  {
    "id": 1589,
    "extinto": "FANTONE MARGARITA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "67",
    "latitud": -31.56748964,
    "longitud": -63.5162237,
    "color_sector": "#FFD700"
  },
  {
    "id": 1590,
    "extinto": "AIMAR HUGO JUAN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "68",
    "latitud": -31.56750011,
    "longitud": -63.51622984,
    "color_sector": "#FFD700"
  },
  {
    "id": 1591,
    "extinto": "RIOS NIZ ARNALDO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "68",
    "latitud": -31.56750011,
    "longitud": -63.51622984,
    "color_sector": "#FFD700"
  },
  {
    "id": 1592,
    "extinto": "PLEITAVINO RENE ANSELMO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "70",
    "latitud": -31.56752107,
    "longitud": -63.51624212,
    "color_sector": "#FFD700"
  },
  {
    "id": 1593,
    "extinto": "LUDUEÑA MARIA ROSA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "71",
    "latitud": -31.56753155,
    "longitud": -63.51624827,
    "color_sector": "#FFD700"
  },
  {
    "id": 1594,
    "extinto": "PAVON CARDELIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "71",
    "latitud": -31.56753155,
    "longitud": -63.51624827,
    "color_sector": "#FFD700"
  },
  {
    "id": 1595,
    "extinto": "CEJAS RAMONA DEL ROSARIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "71",
    "latitud": -31.56753155,
    "longitud": -63.51624827,
    "color_sector": "#FFD700"
  },
  {
    "id": 1596,
    "extinto": "ROBLEDO DE FUNES DIONISIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "71",
    "latitud": -31.56753155,
    "longitud": -63.51624827,
    "color_sector": "#FFD700"
  },
  {
    "id": 1597,
    "extinto": "PAVON MARTA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "71",
    "latitud": -31.56753155,
    "longitud": -63.51624827,
    "color_sector": "#FFD700"
  },
  {
    "id": 1598,
    "extinto": "PAVON CARLITOS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "71",
    "latitud": -31.56753155,
    "longitud": -63.51624827,
    "color_sector": "#FFD700"
  },
  {
    "id": 1599,
    "extinto": "PAVON FAUSTO ROSARIO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "72",
    "latitud": -31.56754203,
    "longitud": -63.51625441,
    "color_sector": "#FFD700"
  },
  {
    "id": 1600,
    "extinto": "GUGLIELMONE ALBERTO JUAN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "73",
    "latitud": -31.56755251,
    "longitud": -63.51626055,
    "color_sector": "#FFD700"
  },
  {
    "id": 1601,
    "extinto": "ALVAREZ JOSE VALENTIN",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "74",
    "latitud": -31.56756298,
    "longitud": -63.51626669,
    "color_sector": "#FFD700"
  },
  {
    "id": 1602,
    "extinto": "PALACIOS JUSTA FLORINDA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "74",
    "latitud": -31.56756298,
    "longitud": -63.51626669,
    "color_sector": "#FFD700"
  },
  {
    "id": 1603,
    "extinto": "PALACIOS JOSEFINA TRINIDAD",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "74",
    "latitud": -31.56756298,
    "longitud": -63.51626669,
    "color_sector": "#FFD700"
  },
  {
    "id": 1604,
    "extinto": "PALACIOS RAMON",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "74",
    "latitud": -31.56756298,
    "longitud": -63.51626669,
    "color_sector": "#FFD700"
  },
  {
    "id": 1605,
    "extinto": "CASAS JOSEFA MARGARITA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "74",
    "latitud": -31.56756298,
    "longitud": -63.51626669,
    "color_sector": "#FFD700"
  },
  {
    "id": 1606,
    "extinto": "MONTENEGRO ESTANISLAO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "75",
    "latitud": -31.56757346,
    "longitud": -63.51627284,
    "color_sector": "#FFD700"
  },
  {
    "id": 1607,
    "extinto": "CARLOS IVO VARAS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "76",
    "latitud": -31.56758394,
    "longitud": -63.51627898,
    "color_sector": "#FFD700"
  },
  {
    "id": 1608,
    "extinto": "BUSTAMANTE UBAL LUCINDO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "76",
    "latitud": -31.56758394,
    "longitud": -63.51627898,
    "color_sector": "#FFD700"
  },
  {
    "id": 1609,
    "extinto": "RODRIGUEZ GRACIELA AIDA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "77",
    "latitud": -31.56759442,
    "longitud": -63.51628512,
    "color_sector": "#FFD700"
  },
  {
    "id": 1610,
    "extinto": "ANTONIO CAVALLERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "78",
    "latitud": -31.5676049,
    "longitud": -63.51629126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1611,
    "extinto": "MARGARITA ABRATTE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "78",
    "latitud": -31.5676049,
    "longitud": -63.51629126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1612,
    "extinto": "ELENA CAVALLERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "78",
    "latitud": -31.5676049,
    "longitud": -63.51629126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1613,
    "extinto": "ELIDA CAVALLERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "78",
    "latitud": -31.5676049,
    "longitud": -63.51629126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1614,
    "extinto": "ATILIO CAVALLERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "78",
    "latitud": -31.5676049,
    "longitud": -63.51629126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1615,
    "extinto": "NESTOR CAVALLERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "78",
    "latitud": -31.5676049,
    "longitud": -63.51629126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1616,
    "extinto": "FUENTES EVELIO ITALO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "79",
    "latitud": -31.56761538,
    "longitud": -63.51629741,
    "color_sector": "#FFD700"
  },
  {
    "id": 1617,
    "extinto": "GÃIZZO TOMAS",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "1",
    "latitud": -31.56747798,
    "longitud": -63.51607058,
    "color_sector": "#FFD700"
  },
  {
    "id": 1618,
    "extinto": "PEDANO VIRGINIA ANGELICA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "2",
    "latitud": -31.56748843,
    "longitud": -63.51607678,
    "color_sector": "#FFD700"
  },
  {
    "id": 1619,
    "extinto": "JESUS  ESTEBAN  PEDANO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "2",
    "latitud": -31.56748843,
    "longitud": -63.51607678,
    "color_sector": "#FFD700"
  },
  {
    "id": 1620,
    "extinto": "CEJAS ALFREDO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "3",
    "latitud": -31.56749889,
    "longitud": -63.51608298,
    "color_sector": "#FFD700"
  },
  {
    "id": 1621,
    "extinto": "NOELIA SOLEDAD FERREYRA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "4",
    "latitud": -31.56750934,
    "longitud": -63.51608918,
    "color_sector": "#FFD700"
  },
  {
    "id": 1622,
    "extinto": "PERALTA VICTOR HUGO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "6",
    "latitud": -31.56753025,
    "longitud": -63.51610158,
    "color_sector": "#FFD700"
  },
  {
    "id": 1623,
    "extinto": "PABLO ALBERTO CARNIEL",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "7",
    "latitud": -31.5675407,
    "longitud": -63.51610778,
    "color_sector": "#FFD700"
  },
  {
    "id": 1624,
    "extinto": "RAMELLO ELENA DE",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "8",
    "latitud": -31.56755115,
    "longitud": -63.51611398,
    "color_sector": "#FFD700"
  },
  {
    "id": 1625,
    "extinto": "SORQUETTI MAFALDA R. DE",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "9",
    "latitud": -31.56756161,
    "longitud": -63.51612018,
    "color_sector": "#FFD700"
  },
  {
    "id": 1626,
    "extinto": "SORQUETTI MIGUEL",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "9",
    "latitud": -31.56756161,
    "longitud": -63.51612018,
    "color_sector": "#FFD700"
  },
  {
    "id": 1627,
    "extinto": "FERNANDEZ MIGUEL ALBERTO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "10",
    "latitud": -31.56757206,
    "longitud": -63.51612637,
    "color_sector": "#FFD700"
  },
  {
    "id": 1628,
    "extinto": "SARMIENTO ISABEL ESTANISLADA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "11",
    "latitud": -31.56758252,
    "longitud": -63.51613257,
    "color_sector": "#FFD700"
  },
  {
    "id": 1629,
    "extinto": "CARABANTE JERONIMO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "12",
    "latitud": -31.56759297,
    "longitud": -63.51613877,
    "color_sector": "#FFD700"
  },
  {
    "id": 1630,
    "extinto": "LEGUIZAMON RAGIEL JACINTO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "14",
    "latitud": -31.56761388,
    "longitud": -63.51615117,
    "color_sector": "#FFD700"
  },
  {
    "id": 1631,
    "extinto": "LEGUIZAMON MARTHA ISABEL",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "14",
    "latitud": -31.56761388,
    "longitud": -63.51615117,
    "color_sector": "#FFD700"
  },
  {
    "id": 1632,
    "extinto": "LEGUISAMON  ESTER",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "14",
    "latitud": -31.56761388,
    "longitud": -63.51615117,
    "color_sector": "#FFD700"
  },
  {
    "id": 1633,
    "extinto": "NN IGNACIO CARRANZA-ASTRADA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "15",
    "latitud": -31.56762433,
    "longitud": -63.51615737,
    "color_sector": "#FFD700"
  },
  {
    "id": 1634,
    "extinto": "OSCAR  ANTONIO  CARANDINO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "17",
    "latitud": -31.56764524,
    "longitud": -63.51616977,
    "color_sector": "#FFD700"
  },
  {
    "id": 1635,
    "extinto": "AYALA JUAN GABRIEL",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "18",
    "latitud": -31.56765569,
    "longitud": -63.51617597,
    "color_sector": "#FFD700"
  },
  {
    "id": 1636,
    "extinto": "RAUL HECTOR ROSAS",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "18",
    "latitud": -31.56765569,
    "longitud": -63.51617597,
    "color_sector": "#FFD700"
  },
  {
    "id": 1637,
    "extinto": "SERRANO PEDRO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "21",
    "latitud": -31.56746859,
    "longitud": -63.51609218,
    "color_sector": "#FFD700"
  },
  {
    "id": 1638,
    "extinto": "MARIA AGUSTINA ZARZENON",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "21",
    "latitud": -31.56746859,
    "longitud": -63.51609218,
    "color_sector": "#FFD700"
  },
  {
    "id": 1639,
    "extinto": "JUANA ELENA TEJEDA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "22",
    "latitud": -31.56747904,
    "longitud": -63.51609838,
    "color_sector": "#FFD700"
  },
  {
    "id": 1640,
    "extinto": "GAITE EMILIA FATIMA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "22",
    "latitud": -31.56747904,
    "longitud": -63.51609838,
    "color_sector": "#FFD700"
  },
  {
    "id": 1641,
    "extinto": "ALBACHIARO JUAN",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "25",
    "latitud": -31.5675104,
    "longitud": -63.51611698,
    "color_sector": "#FFD700"
  },
  {
    "id": 1642,
    "extinto": "MEIRONE ROSA MARIA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "25",
    "latitud": -31.5675104,
    "longitud": -63.51611698,
    "color_sector": "#FFD700"
  },
  {
    "id": 1643,
    "extinto": "GIRAUDO CARLOS JORGE",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "25",
    "latitud": -31.5675104,
    "longitud": -63.51611698,
    "color_sector": "#FFD700"
  },
  {
    "id": 1644,
    "extinto": "GIRAUDO ELSA JUANA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "25",
    "latitud": -31.5675104,
    "longitud": -63.51611698,
    "color_sector": "#FFD700"
  },
  {
    "id": 1645,
    "extinto": "ALBACHIARO JULIO CESAR",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "26",
    "latitud": -31.56752086,
    "longitud": -63.51612318,
    "color_sector": "#FFD700"
  },
  {
    "id": 1646,
    "extinto": "TEJEDA CRESENCIO DIEGO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "27",
    "latitud": -31.56753131,
    "longitud": -63.51612938,
    "color_sector": "#FFD700"
  },
  {
    "id": 1647,
    "extinto": "CORZO JOSEFA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "27",
    "latitud": -31.56753131,
    "longitud": -63.51612938,
    "color_sector": "#FFD700"
  },
  {
    "id": 1648,
    "extinto": "AMAYA JOSE RAMON",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "27",
    "latitud": -31.56753131,
    "longitud": -63.51612938,
    "color_sector": "#FFD700"
  },
  {
    "id": 1649,
    "extinto": "BAZAN HECTOR RAMON",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "27",
    "latitud": -31.56753131,
    "longitud": -63.51612938,
    "color_sector": "#FFD700"
  },
  {
    "id": 1650,
    "extinto": "LERDA GABRIEL",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "28",
    "latitud": -31.56754176,
    "longitud": -63.51613558,
    "color_sector": "#FFD700"
  },
  {
    "id": 1651,
    "extinto": "LERDA MARA EMILSE",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "28",
    "latitud": -31.56754176,
    "longitud": -63.51613558,
    "color_sector": "#FFD700"
  },
  {
    "id": 1652,
    "extinto": "LERDA FLORENTINO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "28",
    "latitud": -31.56754176,
    "longitud": -63.51613558,
    "color_sector": "#FFD700"
  },
  {
    "id": 1653,
    "extinto": "LUDUEÑA SARA FELISA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "28",
    "latitud": -31.56754176,
    "longitud": -63.51613558,
    "color_sector": "#FFD700"
  },
  {
    "id": 1654,
    "extinto": "NELSO ENRIQUE SASIA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "32",
    "latitud": -31.56758358,
    "longitud": -63.51616037,
    "color_sector": "#FFD700"
  },
  {
    "id": 1655,
    "extinto": "ANITA GUMERSINDA MANDRILE",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "32",
    "latitud": -31.56758358,
    "longitud": -63.51616037,
    "color_sector": "#FFD700"
  },
  {
    "id": 1656,
    "extinto": "NN CAMUSSO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "33",
    "latitud": -31.56759403,
    "longitud": -63.51616657,
    "color_sector": "#FFD700"
  },
  {
    "id": 1657,
    "extinto": "VICTOR LUIS GIODA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "36",
    "latitud": -31.5676254,
    "longitud": -63.51618517,
    "color_sector": "#FFD700"
  },
  {
    "id": 1658,
    "extinto": "PEREYRA OSCAR",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "1",
    "latitud": -31.56751451,
    "longitud": -63.51601961,
    "color_sector": "#FFD700"
  },
  {
    "id": 1659,
    "extinto": "ILDA NOEMI AMIONE",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "1",
    "latitud": -31.56751451,
    "longitud": -63.51601961,
    "color_sector": "#FFD700"
  },
  {
    "id": 1660,
    "extinto": "ROJAS RUBEN ADOLFO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "3",
    "latitud": -31.56753523,
    "longitud": -63.51603243,
    "color_sector": "#FFD700"
  },
  {
    "id": 1661,
    "extinto": "RODOLFO JUAN DENTI",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "3",
    "latitud": -31.56753523,
    "longitud": -63.51603243,
    "color_sector": "#FFD700"
  },
  {
    "id": 1662,
    "extinto": "BRIA ROGELIO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "4",
    "latitud": -31.56754558,
    "longitud": -63.51603885,
    "color_sector": "#FFD700"
  },
  {
    "id": 1663,
    "extinto": "PONS MARIA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "4",
    "latitud": -31.56754558,
    "longitud": -63.51603885,
    "color_sector": "#FFD700"
  },
  {
    "id": 1664,
    "extinto": "NOEMI  CAROLE  CATTANEO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "4",
    "latitud": -31.56754558,
    "longitud": -63.51603885,
    "color_sector": "#FFD700"
  },
  {
    "id": 1665,
    "extinto": "JUNCOS BASTIAN",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "6",
    "latitud": -31.5675663,
    "longitud": -63.51605167,
    "color_sector": "#FFD700"
  },
  {
    "id": 1666,
    "extinto": "JUNCOS LOGAN",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "6",
    "latitud": -31.5675663,
    "longitud": -63.51605167,
    "color_sector": "#FFD700"
  },
  {
    "id": 1667,
    "extinto": "TABORDA JUANA NELIDA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "7",
    "latitud": -31.56757666,
    "longitud": -63.51605809,
    "color_sector": "#FFD700"
  },
  {
    "id": 1668,
    "extinto": "JUNCOS TOMAS AGUSTIN",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "7",
    "latitud": -31.56757666,
    "longitud": -63.51605809,
    "color_sector": "#FFD700"
  },
  {
    "id": 1669,
    "extinto": "LUQUE JOSE MARTIN",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "7",
    "latitud": -31.56757666,
    "longitud": -63.51605809,
    "color_sector": "#FFD700"
  },
  {
    "id": 1670,
    "extinto": "SERGIO GUSTAVO BRIA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "9",
    "latitud": -31.56759738,
    "longitud": -63.51607091,
    "color_sector": "#FFD700"
  },
  {
    "id": 1671,
    "extinto": "AMADA GENOVEVA LUDUEÑA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "10",
    "latitud": -31.56760774,
    "longitud": -63.51607733,
    "color_sector": "#FFD700"
  },
  {
    "id": 1672,
    "extinto": "BRUNO FEDERICO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "13",
    "latitud": -31.56763881,
    "longitud": -63.51609657,
    "color_sector": "#FFD700"
  },
  {
    "id": 1673,
    "extinto": "MIGLIETTA VICENTA RAFAELA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "13",
    "latitud": -31.56763881,
    "longitud": -63.51609657,
    "color_sector": "#FFD700"
  },
  {
    "id": 1674,
    "extinto": "GOMEZ VICTOR HUGO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "14",
    "latitud": -31.56750479,
    "longitud": -63.51604101,
    "color_sector": "#FFD700"
  },
  {
    "id": 1675,
    "extinto": "CRISTIAN GABRIEL TABORDA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "15",
    "latitud": -31.56751515,
    "longitud": -63.51604742,
    "color_sector": "#FFD700"
  },
  {
    "id": 1676,
    "extinto": "RIVATA MIGUEL ALDO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "16",
    "latitud": -31.56752551,
    "longitud": -63.51605384,
    "color_sector": "#FFD700"
  },
  {
    "id": 1677,
    "extinto": "GOMEZ LAURA ROSA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "17",
    "latitud": -31.56753587,
    "longitud": -63.51606025,
    "color_sector": "#FFD700"
  },
  {
    "id": 1678,
    "extinto": "FIGUEREDO ROBERTO FRANCISCO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "17",
    "latitud": -31.56753587,
    "longitud": -63.51606025,
    "color_sector": "#FFD700"
  },
  {
    "id": 1679,
    "extinto": "ALBANO JUANA ANITA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "18",
    "latitud": -31.56754623,
    "longitud": -63.51606666,
    "color_sector": "#FFD700"
  },
  {
    "id": 1680,
    "extinto": "LASTRA MOISES",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "18",
    "latitud": -31.56754623,
    "longitud": -63.51606666,
    "color_sector": "#FFD700"
  },
  {
    "id": 1681,
    "extinto": "MARTINEZ MARIA ETELVINA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "18",
    "latitud": -31.56754623,
    "longitud": -63.51606666,
    "color_sector": "#FFD700"
  },
  {
    "id": 1682,
    "extinto": "HERRERA JUSTO PASTOR",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "19",
    "latitud": -31.56755659,
    "longitud": -63.51607308,
    "color_sector": "#FFD700"
  },
  {
    "id": 1683,
    "extinto": "FELISA ROSA NORIEGA DE HERRERA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "20",
    "latitud": -31.56756695,
    "longitud": -63.51607949,
    "color_sector": "#FFD700"
  },
  {
    "id": 1684,
    "extinto": "ANGEL ALFONSO HERRERA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "20",
    "latitud": -31.56756695,
    "longitud": -63.51607949,
    "color_sector": "#FFD700"
  },
  {
    "id": 1685,
    "extinto": "LUIS ALFREDO HERRERA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "20",
    "latitud": -31.56756695,
    "longitud": -63.51607949,
    "color_sector": "#FFD700"
  },
  {
    "id": 1686,
    "extinto": "VIOLETA DEL VALLE HERRERA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "20",
    "latitud": -31.56756695,
    "longitud": -63.51607949,
    "color_sector": "#FFD700"
  },
  {
    "id": 1687,
    "extinto": "ROBERTO RAMON DANIELE",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "21",
    "latitud": -31.5675773,
    "longitud": -63.5160859,
    "color_sector": "#FFD700"
  },
  {
    "id": 1688,
    "extinto": "ANA  TEOFILA  MARTINI",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "24",
    "latitud": -31.56760838,
    "longitud": -63.51610514,
    "color_sector": "#FFD700"
  },
  {
    "id": 1689,
    "extinto": "ALARCON JULIO ROBERTO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "1",
    "latitud": -31.56754662,
    "longitud": -63.51594839,
    "color_sector": "#FFD700"
  },
  {
    "id": 1690,
    "extinto": "ALARCON ISIDRO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "1",
    "latitud": -31.56754662,
    "longitud": -63.51594839,
    "color_sector": "#FFD700"
  },
  {
    "id": 1691,
    "extinto": "PEREZ MARIA JOSEFA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "1",
    "latitud": -31.56754662,
    "longitud": -63.51594839,
    "color_sector": "#FFD700"
  },
  {
    "id": 1692,
    "extinto": "BRANDAN JUAN ANGEL",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "2",
    "latitud": -31.56755701,
    "longitud": -63.51595474,
    "color_sector": "#FFD700"
  },
  {
    "id": 1693,
    "extinto": "ROLANDO FRANCISCO V.",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "3",
    "latitud": -31.5675674,
    "longitud": -63.51596108,
    "color_sector": "#FFD700"
  },
  {
    "id": 1694,
    "extinto": "ISABEL JOSEFA CALCATERRA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "3",
    "latitud": -31.5675674,
    "longitud": -63.51596108,
    "color_sector": "#FFD700"
  },
  {
    "id": 1695,
    "extinto": "SOLA STELLA MARIS",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "4",
    "latitud": -31.56757779,
    "longitud": -63.51596743,
    "color_sector": "#FFD700"
  },
  {
    "id": 1696,
    "extinto": "TAPIA RAMON SECUNDINO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "7",
    "latitud": -31.56760896,
    "longitud": -63.51598647,
    "color_sector": "#FFD700"
  },
  {
    "id": 1697,
    "extinto": "JUNCOS CANDIDA ROSA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "7",
    "latitud": -31.56760896,
    "longitud": -63.51598647,
    "color_sector": "#FFD700"
  },
  {
    "id": 1698,
    "extinto": "TAPIA TERESA SUSANA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "7",
    "latitud": -31.56760896,
    "longitud": -63.51598647,
    "color_sector": "#FFD700"
  },
  {
    "id": 1699,
    "extinto": "GUIZZO MARIA ESTHER",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "9",
    "latitud": -31.56762973,
    "longitud": -63.51599917,
    "color_sector": "#FFD700"
  },
  {
    "id": 1700,
    "extinto": "ALEJANDRA ABACA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "10",
    "latitud": -31.56764012,
    "longitud": -63.51600552,
    "color_sector": "#FFD700"
  },
  {
    "id": 1701,
    "extinto": "VICENTE ALBACHIARO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "10",
    "latitud": -31.56764012,
    "longitud": -63.51600552,
    "color_sector": "#FFD700"
  },
  {
    "id": 1702,
    "extinto": "SOSA DAMIAN",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "10",
    "latitud": -31.56764012,
    "longitud": -63.51600552,
    "color_sector": "#FFD700"
  },
  {
    "id": 1703,
    "extinto": "ALBACHIARO ALBA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "10",
    "latitud": -31.56764012,
    "longitud": -63.51600552,
    "color_sector": "#FFD700"
  },
  {
    "id": 1704,
    "extinto": "JAIME MIGUEL CERDA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "11",
    "latitud": -31.56765051,
    "longitud": -63.51601186,
    "color_sector": "#FFD700"
  },
  {
    "id": 1705,
    "extinto": "DOMINGA FRONTERA DE ZALAZAR",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "12",
    "latitud": -31.5676609,
    "longitud": -63.51601821,
    "color_sector": "#FFD700"
  },
  {
    "id": 1706,
    "extinto": "ZALAZAR ANASTACIO OMAR",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "12",
    "latitud": -31.5676609,
    "longitud": -63.51601821,
    "color_sector": "#FFD700"
  },
  {
    "id": 1707,
    "extinto": "GERMAN MOYANO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "13",
    "latitud": -31.56767129,
    "longitud": -63.51602456,
    "color_sector": "#FFD700"
  },
  {
    "id": 1708,
    "extinto": "EINAUDI PEDRO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "13",
    "latitud": -31.56767129,
    "longitud": -63.51602456,
    "color_sector": "#FFD700"
  },
  {
    "id": 1709,
    "extinto": "HECTOR ANTONIO ISUARDI",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "14",
    "latitud": -31.56753701,
    "longitud": -63.51596986,
    "color_sector": "#FFD700"
  },
  {
    "id": 1710,
    "extinto": "GALFRE ROMULO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "15",
    "latitud": -31.5675474,
    "longitud": -63.5159762,
    "color_sector": "#FFD700"
  },
  {
    "id": 1711,
    "extinto": "ANGELA VICTORIA DAGATTI",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "15",
    "latitud": -31.5675474,
    "longitud": -63.5159762,
    "color_sector": "#FFD700"
  },
  {
    "id": 1712,
    "extinto": "TABORDA RAUL EDUARDO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "16",
    "latitud": -31.56755779,
    "longitud": -63.51598255,
    "color_sector": "#FFD700"
  },
  {
    "id": 1713,
    "extinto": "GREGORIA DIAZ DE RIOS",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "18",
    "latitud": -31.56757856,
    "longitud": -63.51599525,
    "color_sector": "#FFD700"
  },
  {
    "id": 1714,
    "extinto": "MALIZIA AGUSTIN ANGEL",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "19",
    "latitud": -31.56758895,
    "longitud": -63.51600159,
    "color_sector": "#FFD700"
  },
  {
    "id": 1715,
    "extinto": "QUAINO HUMBERTO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "20",
    "latitud": -31.56759934,
    "longitud": -63.51600794,
    "color_sector": "#FFD700"
  },
  {
    "id": 1716,
    "extinto": "BALBI MARIA FRANCISCA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "20",
    "latitud": -31.56759934,
    "longitud": -63.51600794,
    "color_sector": "#FFD700"
  },
  {
    "id": 1717,
    "extinto": "UNIA PIERINO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "20",
    "latitud": -31.56759934,
    "longitud": -63.51600794,
    "color_sector": "#FFD700"
  },
  {
    "id": 1718,
    "extinto": "QUAINO ELMA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "20",
    "latitud": -31.56759934,
    "longitud": -63.51600794,
    "color_sector": "#FFD700"
  },
  {
    "id": 1719,
    "extinto": "ESTHER CORDELIA PASETTO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "21",
    "latitud": -31.56760973,
    "longitud": -63.51601429,
    "color_sector": "#FFD700"
  },
  {
    "id": 1720,
    "extinto": "FRANCISCO OSCAR RODRIGUEZ",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "21",
    "latitud": -31.56760973,
    "longitud": -63.51601429,
    "color_sector": "#FFD700"
  },
  {
    "id": 1721,
    "extinto": "QUINTEROS LUCIA ALBERTA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "22",
    "latitud": -31.56762012,
    "longitud": -63.51602064,
    "color_sector": "#FFD700"
  },
  {
    "id": 1722,
    "extinto": "MARTA GRISELDA VACA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "22",
    "latitud": -31.56762012,
    "longitud": -63.51602064,
    "color_sector": "#FFD700"
  },
  {
    "id": 1723,
    "extinto": "VACA MARTIN MARCELO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "22",
    "latitud": -31.56762012,
    "longitud": -63.51602064,
    "color_sector": "#FFD700"
  },
  {
    "id": 1724,
    "extinto": "PABLO UZIEL CUEVAS",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "23",
    "latitud": -31.56763051,
    "longitud": -63.51602698,
    "color_sector": "#FFD700"
  },
  {
    "id": 1725,
    "extinto": "MONICA BEATRIZ CABRAL",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "23",
    "latitud": -31.56763051,
    "longitud": -63.51602698,
    "color_sector": "#FFD700"
  },
  {
    "id": 1726,
    "extinto": "GUIZZO YOLANDA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "24",
    "latitud": -31.56764089,
    "longitud": -63.51603333,
    "color_sector": "#FFD700"
  },
  {
    "id": 1727,
    "extinto": "HECTOR JOSE NEGRO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "24",
    "latitud": -31.56764089,
    "longitud": -63.51603333,
    "color_sector": "#FFD700"
  },
  {
    "id": 1728,
    "extinto": "TERRANOVA MARIANA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "25",
    "latitud": -31.56765128,
    "longitud": -63.51603968,
    "color_sector": "#FFD700"
  },
  {
    "id": 1729,
    "extinto": "NEGRO CARLOS PEDRO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "25",
    "latitud": -31.56765128,
    "longitud": -63.51603968,
    "color_sector": "#FFD700"
  },
  {
    "id": 1730,
    "extinto": "GUIZZO ALBINA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "25",
    "latitud": -31.56765128,
    "longitud": -63.51603968,
    "color_sector": "#FFD700"
  },
  {
    "id": 1731,
    "extinto": "YOMAHA DORAID MOHAMED",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "26",
    "latitud": -31.56766168,
    "longitud": -63.51604603,
    "color_sector": "#FFD700"
  },
  {
    "id": 1732,
    "extinto": "GONZALEZ RICARDO RUBEN",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "28",
    "latitud": -31.56753778,
    "longitud": -63.51599767,
    "color_sector": "#FFD700"
  },
  {
    "id": 1733,
    "extinto": "GAIDO MARIO PEDRO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "29",
    "latitud": -31.56754817,
    "longitud": -63.51600402,
    "color_sector": "#FFD700"
  },
  {
    "id": 1734,
    "extinto": "CACERES CARMEN ROSA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "30",
    "latitud": -31.56755856,
    "longitud": -63.51601036,
    "color_sector": "#FFD700"
  },
  {
    "id": 1735,
    "extinto": "CAUDANA NELSO RAMON",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "30",
    "latitud": -31.56755856,
    "longitud": -63.51601036,
    "color_sector": "#FFD700"
  },
  {
    "id": 1736,
    "extinto": "ACOSTA RAMON JERONIMO",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "32",
    "latitud": -31.56757934,
    "longitud": -63.51602306,
    "color_sector": "#FFD700"
  },
  {
    "id": 1737,
    "extinto": "MARIA ZULMA PEREZ",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "32",
    "latitud": -31.56757934,
    "longitud": -63.51602306,
    "color_sector": "#FFD700"
  },
  {
    "id": 1738,
    "extinto": "ISIDORO ANTONIO HONGN",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "33",
    "latitud": -31.56758972,
    "longitud": -63.51602941,
    "color_sector": "#FFD700"
  },
  {
    "id": 1739,
    "extinto": "TERESA M. CEAGLIO DE HONGN",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "33",
    "latitud": -31.56758972,
    "longitud": -63.51602941,
    "color_sector": "#FFD700"
  },
  {
    "id": 1740,
    "extinto": "MARIO A. HONGN",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "33",
    "latitud": -31.56758972,
    "longitud": -63.51602941,
    "color_sector": "#FFD700"
  },
  {
    "id": 1741,
    "extinto": "HONGN EDELVE HAYDE",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "34",
    "latitud": -31.56760011,
    "longitud": -63.51603575,
    "color_sector": "#FFD700"
  },
  {
    "id": 1742,
    "extinto": "MONICA BEATRIZ MANSILLA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "35",
    "latitud": -31.5676105,
    "longitud": -63.5160421,
    "color_sector": "#FFD700"
  },
  {
    "id": 1743,
    "extinto": "TULIAN RINA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "36",
    "latitud": -31.56762089,
    "longitud": -63.51604845,
    "color_sector": "#FFD700"
  },
  {
    "id": 1744,
    "extinto": "HUGO ALFREDO CARRERA",
    "sector": "AMARILLO",
    "lote": "47",
    "nro": "36",
    "latitud": -31.56762089,
    "longitud": -63.51604845,
    "color_sector": "#FFD700"
  },
  {
    "id": 1745,
    "extinto": "PALACIOS ERNESTO JUAN",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "1",
    "latitud": -31.56757225,
    "longitud": -63.51575572,
    "color_sector": "#FFD700"
  },
  {
    "id": 1746,
    "extinto": "PEREZ CARMEN",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "1",
    "latitud": -31.56757225,
    "longitud": -63.51575572,
    "color_sector": "#FFD700"
  },
  {
    "id": 1747,
    "extinto": "PALACIOS JUAN DE LA CRUZ",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "1",
    "latitud": -31.56757225,
    "longitud": -63.51575572,
    "color_sector": "#FFD700"
  },
  {
    "id": 1748,
    "extinto": "MARGARITA JUANA MARGARIA",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "2",
    "latitud": -31.56759045,
    "longitud": -63.51576733,
    "color_sector": "#FFD700"
  },
  {
    "id": 1749,
    "extinto": "SANTIAGO ISIDRO SACILOTTO",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "3",
    "latitud": -31.56761262,
    "longitud": -63.51578146,
    "color_sector": "#FFD700"
  },
  {
    "id": 1750,
    "extinto": "ERNESTO BALTAZAR PALACIOS",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "4",
    "latitud": -31.56756663,
    "longitud": -63.51576773,
    "color_sector": "#FFD700"
  },
  {
    "id": 1751,
    "extinto": "ALARCON ISIDRO ROBERTO",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "5",
    "latitud": -31.56758483,
    "longitud": -63.51577935,
    "color_sector": "#FFD700"
  },
  {
    "id": 1752,
    "extinto": "ALARCON NORMA DEL VALLE",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "5",
    "latitud": -31.56758483,
    "longitud": -63.51577935,
    "color_sector": "#FFD700"
  },
  {
    "id": 1753,
    "extinto": "GOMEZ LUIS EDUARDO",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "6",
    "latitud": -31.567607,
    "longitud": -63.51579348,
    "color_sector": "#FFD700"
  },
  {
    "id": 1754,
    "extinto": "MARIANI FELIPE",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "6",
    "latitud": -31.567607,
    "longitud": -63.51579348,
    "color_sector": "#FFD700"
  },
  {
    "id": 1755,
    "extinto": "IRENE GIULIANI DE MARIANI",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "6",
    "latitud": -31.567607,
    "longitud": -63.51579348,
    "color_sector": "#FFD700"
  },
  {
    "id": 1756,
    "extinto": "RAUL ARTURO PEREZ",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "11",
    "latitud": -31.56757359,
    "longitud": -63.51580338,
    "color_sector": "#FFD700"
  },
  {
    "id": 1757,
    "extinto": "FERREYRA MARIA ALICIA",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "12",
    "latitud": -31.56759575,
    "longitud": -63.51581751,
    "color_sector": "#FFD700"
  },
  {
    "id": 1758,
    "extinto": "GOMEZ CARLOS ROBERTO",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "12",
    "latitud": -31.56759575,
    "longitud": -63.51581751,
    "color_sector": "#FFD700"
  },
  {
    "id": 1759,
    "extinto": "GOMEZ ANDRES",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "13",
    "latitud": -31.56754976,
    "longitud": -63.51580378,
    "color_sector": "#FFD700"
  },
  {
    "id": 1760,
    "extinto": "GOMEZ ANDRES",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "13",
    "latitud": -31.56754976,
    "longitud": -63.51580378,
    "color_sector": "#FFD700"
  },
  {
    "id": 1761,
    "extinto": "PEREYRA CELIA",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "13",
    "latitud": -31.56754976,
    "longitud": -63.51580378,
    "color_sector": "#FFD700"
  },
  {
    "id": 1762,
    "extinto": "GOMEZ OMAR ALBERTO",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "14",
    "latitud": -31.56756797,
    "longitud": -63.5158154,
    "color_sector": "#FFD700"
  },
  {
    "id": 1763,
    "extinto": "GOMEZ AURELIA F. GOMEZ DE",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "15",
    "latitud": -31.56759013,
    "longitud": -63.51582953,
    "color_sector": "#FFD700"
  },
  {
    "id": 1764,
    "extinto": "GOMEZ MATILDE",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "15",
    "latitud": -31.56759013,
    "longitud": -63.51582953,
    "color_sector": "#FFD700"
  },
  {
    "id": 1765,
    "extinto": "ROSALIA BETTEGA",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "16",
    "latitud": -31.56754414,
    "longitud": -63.5158158,
    "color_sector": "#FFD700"
  },
  {
    "id": 1766,
    "extinto": "PAPA BLAS",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "17",
    "latitud": -31.56756235,
    "longitud": -63.51582742,
    "color_sector": "#FFD700"
  },
  {
    "id": 1767,
    "extinto": "PAPA MARIA JOSEFA",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "17",
    "latitud": -31.56756235,
    "longitud": -63.51582742,
    "color_sector": "#FFD700"
  },
  {
    "id": 1768,
    "extinto": "CONSETA TORRE",
    "sector": "AMARILLO",
    "lote": "48",
    "nro": "17",
    "latitud": -31.56756235,
    "longitud": -63.51582742,
    "color_sector": "#FFD700"
  },
  {
    "id": 1769,
    "extinto": "GALOPPO JOSE",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "1",
    "latitud": -31.56762533,
    "longitud": -63.51568073,
    "color_sector": "#FFD700"
  },
  {
    "id": 1770,
    "extinto": "GOMEZ RITA IRENE",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "1",
    "latitud": -31.56762533,
    "longitud": -63.51568073,
    "color_sector": "#FFD700"
  },
  {
    "id": 1771,
    "extinto": "AMAYA RUFINO HEMENEGILDO",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "3",
    "latitud": -31.56766551,
    "longitud": -63.51570687,
    "color_sector": "#FFD700"
  },
  {
    "id": 1772,
    "extinto": "SORIA ANGELINA ISABEL",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "3",
    "latitud": -31.56766551,
    "longitud": -63.51570687,
    "color_sector": "#FFD700"
  },
  {
    "id": 1773,
    "extinto": "DELOGU JUAN",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "4",
    "latitud": -31.56761962,
    "longitud": -63.5156927,
    "color_sector": "#FFD700"
  },
  {
    "id": 1774,
    "extinto": "VICTORIA CISTERNA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "4",
    "latitud": -31.56761962,
    "longitud": -63.5156927,
    "color_sector": "#FFD700"
  },
  {
    "id": 1775,
    "extinto": "SISTERNA MARIA CELINA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "5",
    "latitud": -31.56763774,
    "longitud": -63.51570449,
    "color_sector": "#FFD700"
  },
  {
    "id": 1776,
    "extinto": "ARIEL FABIAN JUAREZ",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "5",
    "latitud": -31.56763774,
    "longitud": -63.51570449,
    "color_sector": "#FFD700"
  },
  {
    "id": 1777,
    "extinto": "FRANCISCO AMADEO JUAREZ",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "5",
    "latitud": -31.56763774,
    "longitud": -63.51570449,
    "color_sector": "#FFD700"
  },
  {
    "id": 1778,
    "extinto": "ADRIAN ALBERTO AMAYA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "6",
    "latitud": -31.56765981,
    "longitud": -63.51571883,
    "color_sector": "#FFD700"
  },
  {
    "id": 1779,
    "extinto": "HUZULIAK DEMETRIO VICENTE",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "7",
    "latitud": -31.56761392,
    "longitud": -63.51570466,
    "color_sector": "#FFD700"
  },
  {
    "id": 1780,
    "extinto": "MATIAS ELVIO EDUARDO",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "9",
    "latitud": -31.5676541,
    "longitud": -63.51573079,
    "color_sector": "#FFD700"
  },
  {
    "id": 1781,
    "extinto": "PEDRO DAMIAN MANSILLA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "10",
    "latitud": -31.56760821,
    "longitud": -63.51571662,
    "color_sector": "#FFD700"
  },
  {
    "id": 1782,
    "extinto": "LUDUEÑA ROBERTO GABRIEL",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "11",
    "latitud": -31.56762633,
    "longitud": -63.51572841,
    "color_sector": "#FFD700"
  },
  {
    "id": 1783,
    "extinto": "BESSONE CANDIDA ESTHER",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "11",
    "latitud": -31.56762633,
    "longitud": -63.51572841,
    "color_sector": "#FFD700"
  },
  {
    "id": 1784,
    "extinto": "AUDISIO EUGENIO RAFAEL",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "12",
    "latitud": -31.56764839,
    "longitud": -63.51574276,
    "color_sector": "#FFD700"
  },
  {
    "id": 1785,
    "extinto": "DIAZ ANTONIO",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "13",
    "latitud": -31.5676025,
    "longitud": -63.51572858,
    "color_sector": "#FFD700"
  },
  {
    "id": 1786,
    "extinto": "ANA JESUS ZAPPA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "13",
    "latitud": -31.5676025,
    "longitud": -63.51572858,
    "color_sector": "#FFD700"
  },
  {
    "id": 1787,
    "extinto": "STROGUSZ ALEJANDRO",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "16",
    "latitud": -31.56759679,
    "longitud": -63.51574054,
    "color_sector": "#FFD700"
  },
  {
    "id": 1788,
    "extinto": "POSSE JUANA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "16",
    "latitud": -31.56759679,
    "longitud": -63.51574054,
    "color_sector": "#FFD700"
  },
  {
    "id": 1789,
    "extinto": "GUZMAN MARIA ADELA",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "17",
    "latitud": -31.56761491,
    "longitud": -63.51575233,
    "color_sector": "#FFD700"
  },
  {
    "id": 1790,
    "extinto": "MARIA TERESA GUDIÑO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "1",
    "latitud": -31.5676897,
    "longitud": -63.51554383,
    "color_sector": "#FFD700"
  },
  {
    "id": 1791,
    "extinto": "ELPIDIO LEGUIZAMON",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "1",
    "latitud": -31.5676897,
    "longitud": -63.51554383,
    "color_sector": "#FFD700"
  },
  {
    "id": 1792,
    "extinto": "IDELIO JUAN DANIELE",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "2",
    "latitud": -31.56770843,
    "longitud": -63.51555424,
    "color_sector": "#FFD700"
  },
  {
    "id": 1793,
    "extinto": "REYNA MANUELA AMAYA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "2",
    "latitud": -31.56770843,
    "longitud": -63.51555424,
    "color_sector": "#FFD700"
  },
  {
    "id": 1794,
    "extinto": "FARIAS ASENCIO REGINALDO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "3",
    "latitud": -31.56773124,
    "longitud": -63.51556691,
    "color_sector": "#FFD700"
  },
  {
    "id": 1795,
    "extinto": "MOREYRA LIDIA ISABEL",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "3",
    "latitud": -31.56773124,
    "longitud": -63.51556691,
    "color_sector": "#FFD700"
  },
  {
    "id": 1796,
    "extinto": "TOMAS MARTINEZ",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "4",
    "latitud": -31.56768466,
    "longitud": -63.51555619,
    "color_sector": "#FFD700"
  },
  {
    "id": 1797,
    "extinto": "FARIAS VICTOR HUGO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "6",
    "latitud": -31.5677262,
    "longitud": -63.51557927,
    "color_sector": "#FFD700"
  },
  {
    "id": 1798,
    "extinto": "CISMONDI DAVID ANTONIO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "7",
    "latitud": -31.56767962,
    "longitud": -63.51556856,
    "color_sector": "#FFD700"
  },
  {
    "id": 1799,
    "extinto": "JUANA CLEMIRA LUDUEÑA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "8",
    "latitud": -31.56769835,
    "longitud": -63.51557897,
    "color_sector": "#FFD700"
  },
  {
    "id": 1800,
    "extinto": "HECTOR  JULIO  ALARCON",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "8",
    "latitud": -31.56769835,
    "longitud": -63.51557897,
    "color_sector": "#FFD700"
  },
  {
    "id": 1801,
    "extinto": "LUDUEÑA CARMEN MERCEDES",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "10",
    "latitud": -31.56767458,
    "longitud": -63.51558092,
    "color_sector": "#FFD700"
  },
  {
    "id": 1802,
    "extinto": "LUQUE TEODORA CELMIRA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "10",
    "latitud": -31.56767458,
    "longitud": -63.51558092,
    "color_sector": "#FFD700"
  },
  {
    "id": 1803,
    "extinto": "ALDO ORFELIO DOFFO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "11",
    "latitud": -31.56769331,
    "longitud": -63.51559133,
    "color_sector": "#FFD700"
  },
  {
    "id": 1804,
    "extinto": "CELINA DOMINGA TARQUINO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "11",
    "latitud": -31.56769331,
    "longitud": -63.51559133,
    "color_sector": "#FFD700"
  },
  {
    "id": 1805,
    "extinto": "EMILIO MARCOS TRUCCHIA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "13",
    "latitud": -31.56766954,
    "longitud": -63.51559328,
    "color_sector": "#FFD700"
  },
  {
    "id": 1806,
    "extinto": "RAQUEL  SUSANA  GOMEZ",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "13",
    "latitud": -31.56766954,
    "longitud": -63.51559328,
    "color_sector": "#FFD700"
  },
  {
    "id": 1807,
    "extinto": "MIGUEL  ANGEL  MARCO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "14",
    "latitud": -31.56768827,
    "longitud": -63.5156037,
    "color_sector": "#FFD700"
  },
  {
    "id": 1808,
    "extinto": "FELIPA JUVENCIA GOMEZ",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "15",
    "latitud": -31.56771108,
    "longitud": -63.51561636,
    "color_sector": "#FFD700"
  },
  {
    "id": 1809,
    "extinto": "EMILIO MARCO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "15",
    "latitud": -31.56771108,
    "longitud": -63.51561636,
    "color_sector": "#FFD700"
  },
  {
    "id": 1810,
    "extinto": "NORMA ESTHER MARCO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "15",
    "latitud": -31.56771108,
    "longitud": -63.51561636,
    "color_sector": "#FFD700"
  },
  {
    "id": 1811,
    "extinto": "BAUTISTA CLEMENTE FELIPPA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "16",
    "latitud": -31.5676645,
    "longitud": -63.51560565,
    "color_sector": "#FFD700"
  },
  {
    "id": 1812,
    "extinto": "ADELAIDA ENRIQUETA SALVUCCI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "16",
    "latitud": -31.5676645,
    "longitud": -63.51560565,
    "color_sector": "#FFD700"
  },
  {
    "id": 1813,
    "extinto": "RUBEN ALBERTO JUAREZ",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "17",
    "latitud": -31.56768323,
    "longitud": -63.51561606,
    "color_sector": "#FFD700"
  },
  {
    "id": 1814,
    "extinto": "TOMAS SALVADOR MARCO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "18",
    "latitud": -31.56770604,
    "longitud": -63.51562872,
    "color_sector": "#FFD700"
  },
  {
    "id": 1815,
    "extinto": "NELIDA  HAYDEE  CORTEZ",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "18",
    "latitud": -31.56770604,
    "longitud": -63.51562872,
    "color_sector": "#FFD700"
  },
  {
    "id": 1816,
    "extinto": "CONTRINI ROSA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "19",
    "latitud": -31.56765946,
    "longitud": -63.51561801,
    "color_sector": "#FFD700"
  },
  {
    "id": 1817,
    "extinto": "MARCO EMILIO ALBERTO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "20",
    "latitud": -31.56767819,
    "longitud": -63.51562842,
    "color_sector": "#FFD700"
  },
  {
    "id": 1818,
    "extinto": "MARIA  URSULA  DEL VALLE  PIATTI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "20",
    "latitud": -31.56767819,
    "longitud": -63.51562842,
    "color_sector": "#FFD700"
  },
  {
    "id": 1819,
    "extinto": "FERREYRA BACILIO MAGNO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "22",
    "latitud": -31.56765443,
    "longitud": -63.51563037,
    "color_sector": "#FFD700"
  },
  {
    "id": 1820,
    "extinto": "LUIS SANTIAGO GIGENA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "23",
    "latitud": -31.56767315,
    "longitud": -63.51564079,
    "color_sector": "#FFD700"
  },
  {
    "id": 1821,
    "extinto": "GIGENA JUANA ADALIA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "25",
    "latitud": -31.56764939,
    "longitud": -63.51564274,
    "color_sector": "#FFD700"
  },
  {
    "id": 1822,
    "extinto": "ANDRES JORGE RUBIOLO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "27",
    "latitud": -31.56769092,
    "longitud": -63.51566581,
    "color_sector": "#FFD700"
  },
  {
    "id": 1823,
    "extinto": "BENJAMIN AMUCHASTEGUI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "28",
    "latitud": -31.56764435,
    "longitud": -63.5156551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1824,
    "extinto": "ELOISA AMUCHASTEGUI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "28",
    "latitud": -31.56764435,
    "longitud": -63.5156551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1825,
    "extinto": "JUAN AMUCHASTEGUI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "28",
    "latitud": -31.56764435,
    "longitud": -63.5156551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1826,
    "extinto": "TRINIDAD AMUCHASTEGUI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "28",
    "latitud": -31.56764435,
    "longitud": -63.5156551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1827,
    "extinto": "ARMINDA ARRIETA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "28",
    "latitud": -31.56764435,
    "longitud": -63.5156551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1828,
    "extinto": "FAUSTO AMUCHASTEGUI",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "28",
    "latitud": -31.56764435,
    "longitud": -63.5156551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1829,
    "extinto": "LUJAN RAMON ANASTACIO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "29",
    "latitud": -31.56766307,
    "longitud": -63.51566551,
    "color_sector": "#FFD700"
  },
  {
    "id": 1830,
    "extinto": "FERRARIS AMERICO MARTIN",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "30",
    "latitud": -31.56768588,
    "longitud": -63.51567818,
    "color_sector": "#FFD700"
  },
  {
    "id": 1831,
    "extinto": "GUGLIELMONE MARIA CACILDA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "31",
    "latitud": -31.56763931,
    "longitud": -63.51566746,
    "color_sector": "#FFD700"
  },
  {
    "id": 1832,
    "extinto": "ESPAÑOM MIRIAM HORTENCIA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "31",
    "latitud": -31.56763931,
    "longitud": -63.51566746,
    "color_sector": "#FFD700"
  },
  {
    "id": 1833,
    "extinto": "ACOSTA VIRGINIO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "32",
    "latitud": -31.56765804,
    "longitud": -63.51567788,
    "color_sector": "#FFD700"
  },
  {
    "id": 1834,
    "extinto": "MUSSO ALICIA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "33",
    "latitud": -31.56768084,
    "longitud": -63.51569054,
    "color_sector": "#FFD700"
  },
  {
    "id": 1835,
    "extinto": "HERRERA ALBERTO ORLANDO",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "1",
    "latitud": -31.56773289,
    "longitud": -63.51543408,
    "color_sector": "#FFD700"
  },
  {
    "id": 1836,
    "extinto": "N/N BRIA FINE",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "1",
    "latitud": -31.56773289,
    "longitud": -63.51543408,
    "color_sector": "#FFD700"
  },
  {
    "id": 1837,
    "extinto": "CANDIDO JESUS HERRERA",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "1",
    "latitud": -31.56773289,
    "longitud": -63.51543408,
    "color_sector": "#FFD700"
  },
  {
    "id": 1838,
    "extinto": "FERNANDEZ,HECTOR JAIME",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "10",
    "latitud": -31.56771873,
    "longitud": -63.51547168,
    "color_sector": "#FFD700"
  },
  {
    "id": 1839,
    "extinto": "REGE DORA",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "16",
    "latitud": -31.56770929,
    "longitud": -63.51549675,
    "color_sector": "#FFD700"
  },
  {
    "id": 1840,
    "extinto": "ROMERO CIPRIANA RAMONA",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "17",
    "latitud": -31.56772827,
    "longitud": -63.51550651,
    "color_sector": "#FFD700"
  },
  {
    "id": 1841,
    "extinto": "CORNEJO JUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "17",
    "latitud": -31.56772827,
    "longitud": -63.51550651,
    "color_sector": "#FFD700"
  },
  {
    "id": 1842,
    "extinto": "CORNEJO ADELMA ANSELMA",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "18",
    "latitud": -31.56775139,
    "longitud": -63.51551836,
    "color_sector": "#FFD700"
  },
  {
    "id": 1843,
    "extinto": "JUAN JOSE RADALJ",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "19",
    "latitud": -31.56770457,
    "longitud": -63.51550929,
    "color_sector": "#FFD700"
  },
  {
    "id": 1844,
    "extinto": "ALBERTO SERVILIANO FERREYRA",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "19",
    "latitud": -31.56770457,
    "longitud": -63.51550929,
    "color_sector": "#FFD700"
  },
  {
    "id": 1845,
    "extinto": "DELGADO ADELA EUSEBIA",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "22",
    "latitud": -31.56769984,
    "longitud": -63.51552182,
    "color_sector": "#FFD700"
  },
  {
    "id": 1846,
    "extinto": "ANGEL RODOLFO MARIN",
    "sector": "AMARILLO",
    "lote": "53",
    "nro": "13",
    "latitud": -31.56801915,
    "longitud": -63.51536562,
    "color_sector": "#FFD700"
  },
  {
    "id": 1847,
    "extinto": "MIGUEL ANGEL MARIN",
    "sector": "AMARILLO",
    "lote": "53",
    "nro": "13",
    "latitud": -31.56801915,
    "longitud": -63.51536562,
    "color_sector": "#FFD700"
  },
  {
    "id": 1848,
    "extinto": "CLEMENTINO REGINALDO AGUERO",
    "sector": "AMARILLO",
    "lote": "54",
    "nro": "17",
    "latitud": -31.5679923,
    "longitud": -63.51554236,
    "color_sector": "#FFD700"
  },
  {
    "id": 1849,
    "extinto": "RIVATA JUAN ALBERTO",
    "sector": "AMARILLO",
    "lote": "56",
    "nro": "15",
    "latitud": -31.56796404,
    "longitud": -63.51580785,
    "color_sector": "#FFD700"
  },
  {
    "id": 1850,
    "extinto": "GARAY FORTUNATO",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "3",
    "latitud": -31.5679366,
    "longitud": -63.51591992,
    "color_sector": "#FFD700"
  },
  {
    "id": 1851,
    "extinto": "FARIA EUDOSIA DEIDAD",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "3",
    "latitud": -31.5679366,
    "longitud": -63.51591992,
    "color_sector": "#FFD700"
  },
  {
    "id": 1852,
    "extinto": "VAZQUEZ RAMON ARGENTINO",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "6",
    "latitud": -31.5679342,
    "longitud": -63.51593333,
    "color_sector": "#FFD700"
  },
  {
    "id": 1853,
    "extinto": "VAZQUEZ VALERIA EDITH",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "6",
    "latitud": -31.5679342,
    "longitud": -63.51593333,
    "color_sector": "#FFD700"
  },
  {
    "id": 1854,
    "extinto": "LUISA MAXIMINA ZABADILLA",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "6",
    "latitud": -31.5679342,
    "longitud": -63.51593333,
    "color_sector": "#FFD700"
  },
  {
    "id": 1855,
    "extinto": "CARMEN DOROTEO MAYDANA",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "9",
    "latitud": -31.56793181,
    "longitud": -63.51594673,
    "color_sector": "#FFD700"
  },
  {
    "id": 1856,
    "extinto": "MARIANI PASCUAL",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "13",
    "latitud": -31.5678864,
    "longitud": -63.51596363,
    "color_sector": "#FFD700"
  },
  {
    "id": 1857,
    "extinto": "AIDA CERONI",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "13",
    "latitud": -31.5678864,
    "longitud": -63.51596363,
    "color_sector": "#FFD700"
  },
  {
    "id": 1858,
    "extinto": "SANTIAGO MANUEL LUDUEÑA",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "18",
    "latitud": -31.56792462,
    "longitud": -63.51598694,
    "color_sector": "#FFD700"
  },
  {
    "id": 1859,
    "extinto": "GASTON  LUDUEÑA  BARADAD",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "18",
    "latitud": -31.56792462,
    "longitud": -63.51598694,
    "color_sector": "#FFD700"
  },
  {
    "id": 1860,
    "extinto": "RUGGERI SEGUNDO CECAR",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "20",
    "latitud": -31.56790191,
    "longitud": -63.5159954,
    "color_sector": "#FFD700"
  },
  {
    "id": 1861,
    "extinto": "MARCELO ALEJANDRO MUGAS",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "21",
    "latitud": -31.56792222,
    "longitud": -63.51600035,
    "color_sector": "#FFD700"
  },
  {
    "id": 1862,
    "extinto": "ROBERTO JULIO MUGAS",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "21",
    "latitud": -31.56792222,
    "longitud": -63.51600035,
    "color_sector": "#FFD700"
  },
  {
    "id": 1863,
    "extinto": "ANTONIO AMERICO MUGAS",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "21",
    "latitud": -31.56792222,
    "longitud": -63.51600035,
    "color_sector": "#FFD700"
  },
  {
    "id": 1864,
    "extinto": "VELEZ MIGUEL IGNACIO",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "24",
    "latitud": -31.56791982,
    "longitud": -63.51601375,
    "color_sector": "#FFD700"
  },
  {
    "id": 1865,
    "extinto": "JOSE MODESTO VELEZ",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "27",
    "latitud": -31.56791743,
    "longitud": -63.51602716,
    "color_sector": "#FFD700"
  },
  {
    "id": 1866,
    "extinto": "GONZALEZ ISALON",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "1",
    "latitud": -31.56786897,
    "longitud": -63.51606091,
    "color_sector": "#FFD700"
  },
  {
    "id": 1867,
    "extinto": "GOMEZ MIGUEL ANGEL",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "1",
    "latitud": -31.56786897,
    "longitud": -63.51606091,
    "color_sector": "#FFD700"
  },
  {
    "id": 1868,
    "extinto": "CIPRIANA REGINALDA ESPINOSA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "1",
    "latitud": -31.56786897,
    "longitud": -63.51606091,
    "color_sector": "#FFD700"
  },
  {
    "id": 1869,
    "extinto": "GOMEZ JORGE ENRIQUE",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "3",
    "latitud": -31.56790961,
    "longitud": -63.51607062,
    "color_sector": "#FFD700"
  },
  {
    "id": 1870,
    "extinto": "GOMEZ JESUS MARIA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "4",
    "latitud": -31.56786662,
    "longitud": -63.51607433,
    "color_sector": "#FFD700"
  },
  {
    "id": 1871,
    "extinto": "GOMEZ PEDRO MARIO",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "4",
    "latitud": -31.56786662,
    "longitud": -63.51607433,
    "color_sector": "#FFD700"
  },
  {
    "id": 1872,
    "extinto": "DIAZ JUANA LIDIA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "4",
    "latitud": -31.56786662,
    "longitud": -63.51607433,
    "color_sector": "#FFD700"
  },
  {
    "id": 1873,
    "extinto": "NAVARRO MARIA VICTORIA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "6",
    "latitud": -31.56790726,
    "longitud": -63.51608404,
    "color_sector": "#FFD700"
  },
  {
    "id": 1874,
    "extinto": "GOMEZ MARCELO ARIEL",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "7",
    "latitud": -31.56786427,
    "longitud": -63.51608774,
    "color_sector": "#FFD700"
  },
  {
    "id": 1875,
    "extinto": "JUAREZ ROQUE RAFAEL",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "9",
    "latitud": -31.56790492,
    "longitud": -63.51609745,
    "color_sector": "#FFD700"
  },
  {
    "id": 1876,
    "extinto": "CASSIANI CLARA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "14",
    "latitud": -31.5678799,
    "longitud": -63.51611943,
    "color_sector": "#FFD700"
  },
  {
    "id": 1877,
    "extinto": "COVADIS JUAN",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "14",
    "latitud": -31.5678799,
    "longitud": -63.51611943,
    "color_sector": "#FFD700"
  },
  {
    "id": 1878,
    "extinto": "NOEMI GONZALEZ",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "14",
    "latitud": -31.5678799,
    "longitud": -63.51611943,
    "color_sector": "#FFD700"
  },
  {
    "id": 1879,
    "extinto": "NELIDA BEATRIZ VACA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "15",
    "latitud": -31.56790022,
    "longitud": -63.51612428,
    "color_sector": "#FFD700"
  },
  {
    "id": 1880,
    "extinto": "HECTOR LUIS VACA",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "18",
    "latitud": -31.56789787,
    "longitud": -63.5161377,
    "color_sector": "#FFD700"
  },
  {
    "id": 1881,
    "extinto": "NELIDA TERESA JUAREZ",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "18",
    "latitud": -31.56789787,
    "longitud": -63.5161377,
    "color_sector": "#FFD700"
  },
  {
    "id": 1882,
    "extinto": "NAVARRO MARIA ESTER",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "20",
    "latitud": -31.5678752,
    "longitud": -63.51614626,
    "color_sector": "#FFD700"
  },
  {
    "id": 1883,
    "extinto": "RODRIGUEZ CECILIA INES",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "21",
    "latitud": -31.56789552,
    "longitud": -63.51615112,
    "color_sector": "#FFD700"
  },
  {
    "id": 1884,
    "extinto": "DANIEL RAFAEL RODRIGUEZ",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "21",
    "latitud": -31.56789552,
    "longitud": -63.51615112,
    "color_sector": "#FFD700"
  },
  {
    "id": 1885,
    "extinto": "MIGUEL ANGEL FERNANDEZ",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "33",
    "latitud": -31.56788612,
    "longitud": -63.51620478,
    "color_sector": "#FFD700"
  },
  {
    "id": 1886,
    "extinto": "MARTINEZ JUAN DE DIOS",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "1",
    "latitud": -31.56784131,
    "longitud": -63.51622113,
    "color_sector": "#FFD700"
  },
  {
    "id": 1887,
    "extinto": "UTRERA ANITA ELENA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "3",
    "latitud": -31.56788222,
    "longitud": -63.51622919,
    "color_sector": "#FFD700"
  },
  {
    "id": 1888,
    "extinto": "DITTOMASSO DOMINGA MARIA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "6",
    "latitud": -31.56788027,
    "longitud": -63.51624269,
    "color_sector": "#FFD700"
  },
  {
    "id": 1889,
    "extinto": "JOSE FAUSTINO PERALTA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "6",
    "latitud": -31.56788027,
    "longitud": -63.51624269,
    "color_sector": "#FFD700"
  },
  {
    "id": 1890,
    "extinto": "CAMILLO HUGO DANIEL",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "9",
    "latitud": -31.56787832,
    "longitud": -63.51625619,
    "color_sector": "#FFD700"
  },
  {
    "id": 1891,
    "extinto": "CENONA AMELIA CARNERO",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "9",
    "latitud": -31.56787832,
    "longitud": -63.51625619,
    "color_sector": "#FFD700"
  },
  {
    "id": 1892,
    "extinto": "TERESITA MILVA PEREZ",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "9",
    "latitud": -31.56787832,
    "longitud": -63.51625619,
    "color_sector": "#FFD700"
  },
  {
    "id": 1893,
    "extinto": "RAMALLO GERALDO RAFAEL",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "12",
    "latitud": -31.56787637,
    "longitud": -63.51626969,
    "color_sector": "#FFD700"
  },
  {
    "id": 1894,
    "extinto": "ARNEUDO JUAN BAUTISTA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "19",
    "latitud": -31.56782961,
    "longitud": -63.51630214,
    "color_sector": "#FFD700"
  },
  {
    "id": 1895,
    "extinto": "BRUCELLO MARIA ERNESTA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "19",
    "latitud": -31.56782961,
    "longitud": -63.51630214,
    "color_sector": "#FFD700"
  },
  {
    "id": 1896,
    "extinto": "ARNEUDO JORGE PEDRO",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "22",
    "latitud": -31.56782766,
    "longitud": -63.51631565,
    "color_sector": "#FFD700"
  },
  {
    "id": 1897,
    "extinto": "ARNEUDO CARLOS OSCAR",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "22",
    "latitud": -31.56782766,
    "longitud": -63.51631565,
    "color_sector": "#FFD700"
  },
  {
    "id": 1898,
    "extinto": "EDE  ANGELA  PORCARI",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "24",
    "latitud": -31.56786857,
    "longitud": -63.5163237,
    "color_sector": "#FFD700"
  },
  {
    "id": 1899,
    "extinto": "RICARDO MATA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "30",
    "latitud": -31.56786467,
    "longitud": -63.51635071,
    "color_sector": "#FFD700"
  },
  {
    "id": 1900,
    "extinto": "KURINA MARIA FRANCISCA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "30",
    "latitud": -31.56786467,
    "longitud": -63.51635071,
    "color_sector": "#FFD700"
  },
  {
    "id": 1901,
    "extinto": "PEREZ OSFALDO ERNESTO",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "33",
    "latitud": -31.56786272,
    "longitud": -63.51636421,
    "color_sector": "#FFD700"
  },
  {
    "id": 1902,
    "extinto": "FERNANDEZ MIRTA GRACIELA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "1",
    "latitud": -31.56781023,
    "longitud": -63.51637953,
    "color_sector": "#FFD700"
  },
  {
    "id": 1903,
    "extinto": "GABRIELA A ZANONI",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "1",
    "latitud": -31.56781023,
    "longitud": -63.51637953,
    "color_sector": "#FFD700"
  },
  {
    "id": 1904,
    "extinto": "ELENA GRASSO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "4",
    "latitud": -31.56780742,
    "longitud": -63.51639283,
    "color_sector": "#FFD700"
  },
  {
    "id": 1905,
    "extinto": "FERNANDEZ ANTONIO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "4",
    "latitud": -31.56780742,
    "longitud": -63.51639283,
    "color_sector": "#FFD700"
  },
  {
    "id": 1906,
    "extinto": "FERNANDEZ SUSANA ELENA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "4",
    "latitud": -31.56780742,
    "longitud": -63.51639283,
    "color_sector": "#FFD700"
  },
  {
    "id": 1907,
    "extinto": "LOPEZ LAURO RAMON",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "5",
    "latitud": -31.56782756,
    "longitud": -63.51639863,
    "color_sector": "#FFD700"
  },
  {
    "id": 1908,
    "extinto": "PAVON JENARA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "5",
    "latitud": -31.56782756,
    "longitud": -63.51639863,
    "color_sector": "#FFD700"
  },
  {
    "id": 1909,
    "extinto": "RAUL GERMAN URTEAGA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "6",
    "latitud": -31.5678477,
    "longitud": -63.51640443,
    "color_sector": "#FFD700"
  },
  {
    "id": 1910,
    "extinto": "CRISTINA ROSA GRASSO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "6",
    "latitud": -31.5678477,
    "longitud": -63.51640443,
    "color_sector": "#FFD700"
  },
  {
    "id": 1911,
    "extinto": "ANGEL LEIRIA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "9",
    "latitud": -31.56784489,
    "longitud": -63.51641772,
    "color_sector": "#FFD700"
  },
  {
    "id": 1912,
    "extinto": "FILOMENA CLEMIRA ZABALA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "9",
    "latitud": -31.56784489,
    "longitud": -63.51641772,
    "color_sector": "#FFD700"
  },
  {
    "id": 1913,
    "extinto": "HERMINIA ROSA LEIRIA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "9",
    "latitud": -31.56784489,
    "longitud": -63.51641772,
    "color_sector": "#FFD700"
  },
  {
    "id": 1914,
    "extinto": "ROSSI VIRGILIO SANTOS",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "10",
    "latitud": -31.5678018,
    "longitud": -63.51641942,
    "color_sector": "#FFD700"
  },
  {
    "id": 1915,
    "extinto": "ROSSI VICTORIA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "10",
    "latitud": -31.5678018,
    "longitud": -63.51641942,
    "color_sector": "#FFD700"
  },
  {
    "id": 1916,
    "extinto": "ISABEL ROSA PERALTA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "10",
    "latitud": -31.5678018,
    "longitud": -63.51641942,
    "color_sector": "#FFD700"
  },
  {
    "id": 1917,
    "extinto": "CEJAS CARLOS OSVALDO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "16",
    "latitud": -31.56779619,
    "longitud": -63.51644601,
    "color_sector": "#FFD700"
  },
  {
    "id": 1918,
    "extinto": "JORGE RUBEN YERCOVICH",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "18",
    "latitud": -31.56783647,
    "longitud": -63.51645761,
    "color_sector": "#FFD700"
  },
  {
    "id": 1919,
    "extinto": "MOLINA LAURA DE",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "21",
    "latitud": -31.56783366,
    "longitud": -63.5164709,
    "color_sector": "#FFD700"
  },
  {
    "id": 1920,
    "extinto": "CROSS EDUARDO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "21",
    "latitud": -31.56783366,
    "longitud": -63.5164709,
    "color_sector": "#FFD700"
  },
  {
    "id": 1921,
    "extinto": "CROSS JUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "21",
    "latitud": -31.56783366,
    "longitud": -63.5164709,
    "color_sector": "#FFD700"
  },
  {
    "id": 1922,
    "extinto": "ROBERTO LUIS FENOGLIO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "22",
    "latitud": -31.56779058,
    "longitud": -63.5164726,
    "color_sector": "#FFD700"
  },
  {
    "id": 1923,
    "extinto": "TERESITA ELVIRA VASALLO",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "22",
    "latitud": -31.56779058,
    "longitud": -63.5164726,
    "color_sector": "#FFD700"
  },
  {
    "id": 1924,
    "extinto": "LAURA TERESA CROSS",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "23",
    "latitud": -31.56781071,
    "longitud": -63.5164784,
    "color_sector": "#FFD700"
  },
  {
    "id": 1925,
    "extinto": "LUQUE LUIS LINDOR",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "24",
    "latitud": -31.56783085,
    "longitud": -63.5164842,
    "color_sector": "#FFD700"
  },
  {
    "id": 1926,
    "extinto": "MARIA MAGDALENA ALVAREZ",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "24",
    "latitud": -31.56783085,
    "longitud": -63.5164842,
    "color_sector": "#FFD700"
  },
  {
    "id": 1927,
    "extinto": "AMADO LUNA JUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "27",
    "latitud": -31.56782805,
    "longitud": -63.51649749,
    "color_sector": "#FFD700"
  },
  {
    "id": 1928,
    "extinto": "BACILE LUDUEÑA EMMA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "27",
    "latitud": -31.56782805,
    "longitud": -63.51649749,
    "color_sector": "#FFD700"
  },
  {
    "id": 1929,
    "extinto": "RAUL EDUARDO LUDUEÑA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "29",
    "latitud": -31.5678051,
    "longitud": -63.51650499,
    "color_sector": "#FFD700"
  },
  {
    "id": 1930,
    "extinto": "ALVAREZ MARIA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "30",
    "latitud": -31.56782524,
    "longitud": -63.51651079,
    "color_sector": "#FFD700"
  },
  {
    "id": 1931,
    "extinto": "HORACIO ESTEBAN CISTERNA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "30",
    "latitud": -31.56782524,
    "longitud": -63.51651079,
    "color_sector": "#FFD700"
  },
  {
    "id": 1932,
    "extinto": "CISTERNA ROBERTO ESTEBAN",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "30",
    "latitud": -31.56782524,
    "longitud": -63.51651079,
    "color_sector": "#FFD700"
  },
  {
    "id": 1933,
    "extinto": "PEDERNERA BERNARDA CELIA",
    "sector": "AMARILLO",
    "lote": "60",
    "nro": "33",
    "latitud": -31.56782243,
    "longitud": -63.51652408,
    "color_sector": "#FFD700"
  },
  {
    "id": 1934,
    "extinto": "RODRIGUEZ CARMEN F",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "1",
    "latitud": -31.56768952,
    "longitud": -63.51620756,
    "color_sector": "#FFD700"
  },
  {
    "id": 1935,
    "extinto": "PEREZ MARIA ALCIRA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "1",
    "latitud": -31.56768952,
    "longitud": -63.51620756,
    "color_sector": "#FFD700"
  },
  {
    "id": 1936,
    "extinto": "FLORES MARIA VICTORIA DEL CARMEN",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "10",
    "latitud": -31.56779251,
    "longitud": -63.51623435,
    "color_sector": "#FFD700"
  },
  {
    "id": 1937,
    "extinto": "FLORES BRUNO EMILIO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "10",
    "latitud": -31.56779251,
    "longitud": -63.51623435,
    "color_sector": "#FFD700"
  },
  {
    "id": 1938,
    "extinto": "MENCEGUEZ IRMA BEATRIZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "12",
    "latitud": -31.5678154,
    "longitud": -63.5162403,
    "color_sector": "#FFD700"
  },
  {
    "id": 1939,
    "extinto": "ALANIS ALBERTO NILO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "12",
    "latitud": -31.5678154,
    "longitud": -63.5162403,
    "color_sector": "#FFD700"
  },
  {
    "id": 1940,
    "extinto": "ALFARO JORGE ALDO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "16",
    "latitud": -31.56771934,
    "longitud": -63.51624014,
    "color_sector": "#FFD700"
  },
  {
    "id": 1941,
    "extinto": "MOLINA MARIA ESTHER",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "16",
    "latitud": -31.56771934,
    "longitud": -63.51624014,
    "color_sector": "#FFD700"
  },
  {
    "id": 1942,
    "extinto": "JUAN  CARLOS  FAILLA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "16",
    "latitud": -31.56771934,
    "longitud": -63.51624014,
    "color_sector": "#FFD700"
  },
  {
    "id": 1943,
    "extinto": "MACHADO OSVALDO PEDRO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "18",
    "latitud": -31.56774223,
    "longitud": -63.51624609,
    "color_sector": "#FFD700"
  },
  {
    "id": 1944,
    "extinto": "FLORENTINO HERNANDEZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "18",
    "latitud": -31.56774223,
    "longitud": -63.51624609,
    "color_sector": "#FFD700"
  },
  {
    "id": 1945,
    "extinto": "TERESA ALDA CRISTIN",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "19",
    "latitud": -31.56775367,
    "longitud": -63.51624907,
    "color_sector": "#FFD700"
  },
  {
    "id": 1946,
    "extinto": "EDMUNDO FRANCISCO CRISTIN",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "20",
    "latitud": -31.56776512,
    "longitud": -63.51625205,
    "color_sector": "#FFD700"
  },
  {
    "id": 1947,
    "extinto": "ELVA ROSA RIGAZIO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "20",
    "latitud": -31.56776512,
    "longitud": -63.51625205,
    "color_sector": "#FFD700"
  },
  {
    "id": 1948,
    "extinto": "EMILIO BARBIERI",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "23",
    "latitud": -31.56779945,
    "longitud": -63.51626098,
    "color_sector": "#FFD700"
  },
  {
    "id": 1949,
    "extinto": "CARLOS BARBIERI",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "24",
    "latitud": -31.56781089,
    "longitud": -63.51626395,
    "color_sector": "#FFD700"
  },
  {
    "id": 1950,
    "extinto": "PALAZON JOSEFINA SARA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "25",
    "latitud": -31.56767952,
    "longitud": -63.51626,
    "color_sector": "#FFD700"
  },
  {
    "id": 1951,
    "extinto": "ALFREDO BENJAMIN PALAZON",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "25",
    "latitud": -31.56767952,
    "longitud": -63.51626,
    "color_sector": "#FFD700"
  },
  {
    "id": 1952,
    "extinto": "ALGARBE JUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "26",
    "latitud": -31.56769096,
    "longitud": -63.51626298,
    "color_sector": "#FFD700"
  },
  {
    "id": 1953,
    "extinto": "LISTELLO CARLOS ERNESTO ENRIQUE",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "27",
    "latitud": -31.56770241,
    "longitud": -63.51626595,
    "color_sector": "#FFD700"
  },
  {
    "id": 1954,
    "extinto": "ARNOLETTI FLORENTINO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "28",
    "latitud": -31.56771385,
    "longitud": -63.51626893,
    "color_sector": "#FFD700"
  },
  {
    "id": 1955,
    "extinto": "ESTER LUCINIA GONZALEZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "28",
    "latitud": -31.56771385,
    "longitud": -63.51626893,
    "color_sector": "#FFD700"
  },
  {
    "id": 1956,
    "extinto": "FLORES JUAN GABRIEL",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "29",
    "latitud": -31.5677253,
    "longitud": -63.5162719,
    "color_sector": "#FFD700"
  },
  {
    "id": 1957,
    "extinto": "RAMONA OLGA PEREZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "29",
    "latitud": -31.5677253,
    "longitud": -63.5162719,
    "color_sector": "#FFD700"
  },
  {
    "id": 1958,
    "extinto": "JUAN HUMBERTO FLORES",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "31",
    "latitud": -31.56774818,
    "longitud": -63.51627786,
    "color_sector": "#FFD700"
  },
  {
    "id": 1959,
    "extinto": "MOLINA FREDESVINDA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "33",
    "latitud": -31.56777107,
    "longitud": -63.51628381,
    "color_sector": "#FFD700"
  },
  {
    "id": 1960,
    "extinto": "LUCAS OSCAR BROCHERO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "38",
    "latitud": -31.56768548,
    "longitud": -63.51629176,
    "color_sector": "#FFD700"
  },
  {
    "id": 1961,
    "extinto": "N/N REMENTERIA/JUAREZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "41",
    "latitud": -31.56771981,
    "longitud": -63.51630069,
    "color_sector": "#FFD700"
  },
  {
    "id": 1962,
    "extinto": "MARGARIA CLIBER HILARIO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "42",
    "latitud": -31.56773125,
    "longitud": -63.51630367,
    "color_sector": "#FFD700"
  },
  {
    "id": 1963,
    "extinto": "MARGARIA LORENZO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "42",
    "latitud": -31.56773125,
    "longitud": -63.51630367,
    "color_sector": "#FFD700"
  },
  {
    "id": 1964,
    "extinto": "CASAS DE MARGARIA VICTORIA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "42",
    "latitud": -31.56773125,
    "longitud": -63.51630367,
    "color_sector": "#FFD700"
  },
  {
    "id": 1965,
    "extinto": "VARAS VICTOR HUGO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "45",
    "latitud": -31.56776558,
    "longitud": -63.5163126,
    "color_sector": "#FFD700"
  },
  {
    "id": 1966,
    "extinto": "RONCATO DOMINGA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "49",
    "latitud": -31.56766952,
    "longitud": -63.51631243,
    "color_sector": "#FFD700"
  },
  {
    "id": 1967,
    "extinto": "NAZETTA ANGEL JOSE",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "49",
    "latitud": -31.56766952,
    "longitud": -63.51631243,
    "color_sector": "#FFD700"
  },
  {
    "id": 1968,
    "extinto": "LUIS DOMINGO GOMEZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "50",
    "latitud": -31.56768097,
    "longitud": -63.51631541,
    "color_sector": "#FFD700"
  },
  {
    "id": 1969,
    "extinto": "LUQUE NANCY",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "51",
    "latitud": -31.56769241,
    "longitud": -63.51631839,
    "color_sector": "#FFD700"
  },
  {
    "id": 1970,
    "extinto": "MONGILARDI JUAN JOSE",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "51",
    "latitud": -31.56769241,
    "longitud": -63.51631839,
    "color_sector": "#FFD700"
  },
  {
    "id": 1971,
    "extinto": "LUIS  ENRIQUE  LUQUE",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "51",
    "latitud": -31.56769241,
    "longitud": -63.51631839,
    "color_sector": "#FFD700"
  },
  {
    "id": 1972,
    "extinto": "HECTOR HUGO GOMEZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "52",
    "latitud": -31.56770385,
    "longitud": -63.51632136,
    "color_sector": "#FFD700"
  },
  {
    "id": 1973,
    "extinto": "NIS ELENA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "53",
    "latitud": -31.5677153,
    "longitud": -63.51632434,
    "color_sector": "#FFD700"
  },
  {
    "id": 1974,
    "extinto": "LIENDO ESTANISLAO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "53",
    "latitud": -31.5677153,
    "longitud": -63.51632434,
    "color_sector": "#FFD700"
  },
  {
    "id": 1975,
    "extinto": "MORAL MARGARITA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "53",
    "latitud": -31.5677153,
    "longitud": -63.51632434,
    "color_sector": "#FFD700"
  },
  {
    "id": 1976,
    "extinto": "LIENDO NIS MIGUEL ANGEL",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "53",
    "latitud": -31.5677153,
    "longitud": -63.51632434,
    "color_sector": "#FFD700"
  },
  {
    "id": 1977,
    "extinto": "N/N PEDRO BENJAMIN MOLINA MARINEZ",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "54",
    "latitud": -31.56772674,
    "longitud": -63.51632732,
    "color_sector": "#FFD700"
  },
  {
    "id": 1978,
    "extinto": "BOSSIO TOMAS JUAN VALENTIN",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "55",
    "latitud": -31.56773819,
    "longitud": -63.51633029,
    "color_sector": "#FFD700"
  },
  {
    "id": 1979,
    "extinto": "CAMARADA MARIA SOFIA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "55",
    "latitud": -31.56773819,
    "longitud": -63.51633029,
    "color_sector": "#FFD700"
  },
  {
    "id": 1980,
    "extinto": "MICHELLI NESTOR JUAN",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "56",
    "latitud": -31.56774963,
    "longitud": -63.51633327,
    "color_sector": "#FFD700"
  },
  {
    "id": 1981,
    "extinto": "SARA MERCEDES GAZZONI",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "56",
    "latitud": -31.56774963,
    "longitud": -63.51633327,
    "color_sector": "#FFD700"
  },
  {
    "id": 1982,
    "extinto": "DUGATTO DANILO",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "60",
    "latitud": -31.5677954,
    "longitud": -63.51634518,
    "color_sector": "#FFD700"
  },
  {
    "id": 1983,
    "extinto": "DUGATTO MILVA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "60",
    "latitud": -31.5677954,
    "longitud": -63.51634518,
    "color_sector": "#FFD700"
  },
  {
    "id": 1984,
    "extinto": "HERMINIO EMILIO RIVARA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "1",
    "latitud": -31.56773966,
    "longitud": -63.51591631,
    "color_sector": "#FFD700"
  },
  {
    "id": 1985,
    "extinto": "RIVARA MIGUEL PEDRO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "2",
    "latitud": -31.56775117,
    "longitud": -63.51591892,
    "color_sector": "#FFD700"
  },
  {
    "id": 1986,
    "extinto": "CRISTIN JOSEFA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "2",
    "latitud": -31.56775117,
    "longitud": -63.51591892,
    "color_sector": "#FFD700"
  },
  {
    "id": 1987,
    "extinto": "RIVARA VICTORIO H.",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "2",
    "latitud": -31.56775117,
    "longitud": -63.51591892,
    "color_sector": "#FFD700"
  },
  {
    "id": 1988,
    "extinto": "VERONICA DEL VALLE CEAGLIO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "5",
    "latitud": -31.5677857,
    "longitud": -63.51592673,
    "color_sector": "#FFD700"
  },
  {
    "id": 1989,
    "extinto": "ADRIANA RAMONA CEAGLIO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "5",
    "latitud": -31.5677857,
    "longitud": -63.51592673,
    "color_sector": "#FFD700"
  },
  {
    "id": 1990,
    "extinto": "DELQUI CEAGLIO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "5",
    "latitud": -31.5677857,
    "longitud": -63.51592673,
    "color_sector": "#FFD700"
  },
  {
    "id": 1991,
    "extinto": "MARIA ROSA C",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "7",
    "latitud": -31.56780872,
    "longitud": -63.51593193,
    "color_sector": "#FFD700"
  },
  {
    "id": 1992,
    "extinto": "EDUARDO OSCAR C",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "7",
    "latitud": -31.56780872,
    "longitud": -63.51593193,
    "color_sector": "#FFD700"
  },
  {
    "id": 1993,
    "extinto": "ESTAURINO FRANCO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "7",
    "latitud": -31.56780872,
    "longitud": -63.51593193,
    "color_sector": "#FFD700"
  },
  {
    "id": 1994,
    "extinto": "MAIDANA MARIA HIPOLITA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "12",
    "latitud": -31.56786627,
    "longitud": -63.51594495,
    "color_sector": "#FFD700"
  },
  {
    "id": 1995,
    "extinto": "ALDO  GASPAR  CEAGLIO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "12",
    "latitud": -31.56786627,
    "longitud": -63.51594495,
    "color_sector": "#FFD700"
  },
  {
    "id": 1996,
    "extinto": "ELDA ARGUELLO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "13",
    "latitud": -31.56773571,
    "longitud": -63.5159401,
    "color_sector": "#FFD700"
  },
  {
    "id": 1997,
    "extinto": "PRADO JAVIER MARTIN",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "14",
    "latitud": -31.56774722,
    "longitud": -63.5159427,
    "color_sector": "#FFD700"
  },
  {
    "id": 1998,
    "extinto": "RAMALLO ORFILIO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "16",
    "latitud": -31.56777024,
    "longitud": -63.51594791,
    "color_sector": "#FFD700"
  },
  {
    "id": 1999,
    "extinto": "ARGUELLO MANUELA GRISELDA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "16",
    "latitud": -31.56777024,
    "longitud": -63.51594791,
    "color_sector": "#FFD700"
  },
  {
    "id": 2000,
    "extinto": "PERALTA MARIA CATALINA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "16",
    "latitud": -31.56777024,
    "longitud": -63.51594791,
    "color_sector": "#FFD700"
  },
  {
    "id": 2001,
    "extinto": "LARROSA FRANCISCO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "17",
    "latitud": -31.56778175,
    "longitud": -63.51595051,
    "color_sector": "#FFD700"
  },
  {
    "id": 2002,
    "extinto": "ROGELIA  ROSA  LARROSA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "17",
    "latitud": -31.56778175,
    "longitud": -63.51595051,
    "color_sector": "#FFD700"
  },
  {
    "id": 2003,
    "extinto": "LOYOLA EVELINA DEL VALLE",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "18",
    "latitud": -31.56779326,
    "longitud": -63.51595312,
    "color_sector": "#FFD700"
  },
  {
    "id": 2004,
    "extinto": "JULIO MODESTO BARBOZA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "24",
    "latitud": -31.56786232,
    "longitud": -63.51596874,
    "color_sector": "#FFD700"
  },
  {
    "id": 2005,
    "extinto": "SIMBRON MARIO CESAR",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "25",
    "latitud": -31.56773091,
    "longitud": -63.51596905,
    "color_sector": "#FFD700"
  },
  {
    "id": 2006,
    "extinto": "VILLABAZA ERMELINDA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "25",
    "latitud": -31.56773091,
    "longitud": -63.51596905,
    "color_sector": "#FFD700"
  },
  {
    "id": 2007,
    "extinto": "SIMBRON MIGUEL CIPRIANO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "25",
    "latitud": -31.56773091,
    "longitud": -63.51596905,
    "color_sector": "#FFD700"
  },
  {
    "id": 2008,
    "extinto": "LEIVA ANTONIA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "27",
    "latitud": -31.56775393,
    "longitud": -63.51597426,
    "color_sector": "#FFD700"
  },
  {
    "id": 2009,
    "extinto": "ALBERT CARLOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "27",
    "latitud": -31.56775393,
    "longitud": -63.51597426,
    "color_sector": "#FFD700"
  },
  {
    "id": 2010,
    "extinto": "ALBERT ALFONSO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "27",
    "latitud": -31.56775393,
    "longitud": -63.51597426,
    "color_sector": "#FFD700"
  },
  {
    "id": 2011,
    "extinto": "OEREZ LIDIA ROSA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "28",
    "latitud": -31.56776544,
    "longitud": -63.51597686,
    "color_sector": "#FFD700"
  },
  {
    "id": 2012,
    "extinto": "ELEUTERIO  NERIO  PERALTA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "28",
    "latitud": -31.56776544,
    "longitud": -63.51597686,
    "color_sector": "#FFD700"
  },
  {
    "id": 2013,
    "extinto": "SIMBRON ERGIDIO YSABELINO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "29",
    "latitud": -31.56777695,
    "longitud": -63.51597947,
    "color_sector": "#FFD700"
  },
  {
    "id": 2014,
    "extinto": "DARIO SEBASTIAN SIMBRON",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "30",
    "latitud": -31.56778846,
    "longitud": -63.51598207,
    "color_sector": "#FFD700"
  },
  {
    "id": 2015,
    "extinto": "MARCELO DALMIRO RAMON ISLA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "31",
    "latitud": -31.56779997,
    "longitud": -63.51598467,
    "color_sector": "#FFD700"
  },
  {
    "id": 2016,
    "extinto": "ISABEL BORGIATTINO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "33",
    "latitud": -31.56782299,
    "longitud": -63.51598988,
    "color_sector": "#FFD700"
  },
  {
    "id": 2017,
    "extinto": "LUIS FRANCISCO LUQUE",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "33",
    "latitud": -31.56782299,
    "longitud": -63.51598988,
    "color_sector": "#FFD700"
  },
  {
    "id": 2018,
    "extinto": "LUIS OVIDIO GONZALEZ",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "38",
    "latitud": -31.56773848,
    "longitud": -63.51599544,
    "color_sector": "#FFD700"
  },
  {
    "id": 2019,
    "extinto": "ELECTRA AURELIA AMEDEI",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "38",
    "latitud": -31.56773848,
    "longitud": -63.51599544,
    "color_sector": "#FFD700"
  },
  {
    "id": 2020,
    "extinto": "GONZALEZ AMEIDE AIDA AURORA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "38",
    "latitud": -31.56773848,
    "longitud": -63.51599544,
    "color_sector": "#FFD700"
  },
  {
    "id": 2021,
    "extinto": "ZABALA MARIA TERESA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "39",
    "latitud": -31.56774999,
    "longitud": -63.51599805,
    "color_sector": "#FFD700"
  },
  {
    "id": 2022,
    "extinto": "ANDRES VICENTE BONGIOVANNI",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "40",
    "latitud": -31.5677615,
    "longitud": -63.51600065,
    "color_sector": "#FFD700"
  },
  {
    "id": 2023,
    "extinto": "SILVIA HAYDEE GOMEZ",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "40",
    "latitud": -31.5677615,
    "longitud": -63.51600065,
    "color_sector": "#FFD700"
  },
  {
    "id": 2024,
    "extinto": "JAVIER HORACIO ALBERT",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "40",
    "latitud": -31.5677615,
    "longitud": -63.51600065,
    "color_sector": "#FFD700"
  },
  {
    "id": 2025,
    "extinto": "FARRANDO ANA CECILIA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "44",
    "latitud": -31.56780754,
    "longitud": -63.51601106,
    "color_sector": "#FFD700"
  },
  {
    "id": 2026,
    "extinto": "FRANCISCO  JUSTO  AGUIRRE",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "48",
    "latitud": -31.56785358,
    "longitud": -63.51602148,
    "color_sector": "#FFD700"
  },
  {
    "id": 2027,
    "extinto": "GONZALEZ AMEDEI JUAN",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "49",
    "latitud": -31.56772217,
    "longitud": -63.51602179,
    "color_sector": "#FFD700"
  },
  {
    "id": 2028,
    "extinto": "MORUÑA JULIETA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "50",
    "latitud": -31.56773368,
    "longitud": -63.5160244,
    "color_sector": "#FFD700"
  },
  {
    "id": 2029,
    "extinto": "RICARDO HUGO QUARANTELLI",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "50",
    "latitud": -31.56773368,
    "longitud": -63.5160244,
    "color_sector": "#FFD700"
  },
  {
    "id": 2030,
    "extinto": "ANTONIO JOSE CORTEZ",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "51",
    "latitud": -31.56774519,
    "longitud": -63.516027,
    "color_sector": "#FFD700"
  },
  {
    "id": 2031,
    "extinto": "JOSE CORTEZ",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "51",
    "latitud": -31.56774519,
    "longitud": -63.516027,
    "color_sector": "#FFD700"
  },
  {
    "id": 2032,
    "extinto": "JUAN ZABALA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "55",
    "latitud": -31.56779123,
    "longitud": -63.51603741,
    "color_sector": "#FFD700"
  },
  {
    "id": 2033,
    "extinto": "PAULINA MAIDANA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "55",
    "latitud": -31.56779123,
    "longitud": -63.51603741,
    "color_sector": "#FFD700"
  },
  {
    "id": 2034,
    "extinto": "MARIA AURELIA ZABALA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "55",
    "latitud": -31.56779123,
    "longitud": -63.51603741,
    "color_sector": "#FFD700"
  },
  {
    "id": 2035,
    "extinto": "ROBERTO TABORDA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "55",
    "latitud": -31.56779123,
    "longitud": -63.51603741,
    "color_sector": "#FFD700"
  },
  {
    "id": 2036,
    "extinto": "GALINDEZ JULIA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "61",
    "latitud": -31.56771822,
    "longitud": -63.51604558,
    "color_sector": "#FFD700"
  },
  {
    "id": 2037,
    "extinto": "GALINDEZ MAURICIO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "61",
    "latitud": -31.56771822,
    "longitud": -63.51604558,
    "color_sector": "#FFD700"
  },
  {
    "id": 2038,
    "extinto": "AGUIAR BLANCA ARGENTINA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "62",
    "latitud": -31.56772973,
    "longitud": -63.51604818,
    "color_sector": "#FFD700"
  },
  {
    "id": 2039,
    "extinto": "JUAREZ DANIEL",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "63",
    "latitud": -31.56774124,
    "longitud": -63.51605079,
    "color_sector": "#FFD700"
  },
  {
    "id": 2040,
    "extinto": "MARCELO OSCAR BOEHLER",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "79",
    "latitud": -31.56778248,
    "longitud": -63.51609016,
    "color_sector": "#FFD700"
  },
  {
    "id": 2041,
    "extinto": "BOEHLER MIRTA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "80",
    "latitud": -31.56779399,
    "longitud": -63.51609276,
    "color_sector": "#FFD700"
  },
  {
    "id": 2042,
    "extinto": "BOEHLER VICTOR LUIS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "80",
    "latitud": -31.56779399,
    "longitud": -63.51609276,
    "color_sector": "#FFD700"
  },
  {
    "id": 2043,
    "extinto": "CAUDANA EDELMO JUAN MANUEL",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "80",
    "latitud": -31.56779399,
    "longitud": -63.51609276,
    "color_sector": "#FFD700"
  },
  {
    "id": 2044,
    "extinto": "SEBASTIAN CAUDANA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "82",
    "latitud": -31.56781701,
    "longitud": -63.51609797,
    "color_sector": "#FFD700"
  },
  {
    "id": 2045,
    "extinto": "CAROLINA CLARA CRAVERO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "82",
    "latitud": -31.56781701,
    "longitud": -63.51609797,
    "color_sector": "#FFD700"
  },
  {
    "id": 2046,
    "extinto": "ORELLANA DIONICIA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "96",
    "latitud": -31.56783609,
    "longitud": -63.51612696,
    "color_sector": "#FFD700"
  },
  {
    "id": 2047,
    "extinto": "ALBERICI  ROBERTO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "97",
    "latitud": -31.56770468,
    "longitud": -63.51612727,
    "color_sector": "#FFD700"
  },
  {
    "id": 2048,
    "extinto": "BRAVO ANGELA INES",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "97",
    "latitud": -31.56770468,
    "longitud": -63.51612727,
    "color_sector": "#FFD700"
  },
  {
    "id": 2049,
    "extinto": "J.JAVIER VOCOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "102",
    "latitud": -31.56776223,
    "longitud": -63.51614029,
    "color_sector": "#FFD700"
  },
  {
    "id": 2050,
    "extinto": "M.NIGELIA VOCOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "102",
    "latitud": -31.56776223,
    "longitud": -63.51614029,
    "color_sector": "#FFD700"
  },
  {
    "id": 2051,
    "extinto": "J.HERMENGAUDIO VOCOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "102",
    "latitud": -31.56776223,
    "longitud": -63.51614029,
    "color_sector": "#FFD700"
  },
  {
    "id": 2052,
    "extinto": "ESPIRITU VOCOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "103",
    "latitud": -31.56777374,
    "longitud": -63.5161429,
    "color_sector": "#FFD700"
  },
  {
    "id": 2053,
    "extinto": "HERMENGAUDIO VOCOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "103",
    "latitud": -31.56777374,
    "longitud": -63.5161429,
    "color_sector": "#FFD700"
  },
  {
    "id": 2054,
    "extinto": "ARGENTES YOLANDA VIRGINIA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "104",
    "latitud": -31.56778525,
    "longitud": -63.5161455,
    "color_sector": "#FFD700"
  },
  {
    "id": 2055,
    "extinto": "ARGENTE ORLANDO ALBERTO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "104",
    "latitud": -31.56778525,
    "longitud": -63.5161455,
    "color_sector": "#FFD700"
  },
  {
    "id": 2056,
    "extinto": "ARGENTE JOSE",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "105",
    "latitud": -31.56779676,
    "longitud": -63.5161481,
    "color_sector": "#FFD700"
  },
  {
    "id": 2057,
    "extinto": "DELFITO JOSEFINA DOROTEA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "105",
    "latitud": -31.56779676,
    "longitud": -63.5161481,
    "color_sector": "#FFD700"
  },
  {
    "id": 2058,
    "extinto": "MAURICIO OMAR SAMBRENIL",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "110",
    "latitud": -31.56771224,
    "longitud": -63.51615366,
    "color_sector": "#FFD700"
  },
  {
    "id": 2059,
    "extinto": "LUIS ARMANDO CONTRERAS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "114",
    "latitud": -31.56775828,
    "longitud": -63.51616408,
    "color_sector": "#FFD700"
  },
  {
    "id": 2060,
    "extinto": "QUINTERO LOURDES MARTINA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "114",
    "latitud": -31.56775828,
    "longitud": -63.51616408,
    "color_sector": "#FFD700"
  },
  {
    "id": 2061,
    "extinto": "SILVINA   CONTRERAS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "115",
    "latitud": -31.5677698,
    "longitud": -63.51616668,
    "color_sector": "#FFD700"
  },
  {
    "id": 2062,
    "extinto": "CHIALVA RAUL EDUARDO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "121",
    "latitud": -31.56769679,
    "longitud": -63.51617484,
    "color_sector": "#FFD700"
  },
  {
    "id": 2063,
    "extinto": "MARINA DE LOS ANGELES ATTIS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "128",
    "latitud": -31.56777736,
    "longitud": -63.51619307,
    "color_sector": "#FFD700"
  },
  {
    "id": 2064,
    "extinto": "ROSSO CAROLINA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "131",
    "latitud": -31.56781189,
    "longitud": -63.51620088,
    "color_sector": "#FFD700"
  },
  {
    "id": 2065,
    "extinto": "OVIDIO RAUL CORDOBA",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "131",
    "latitud": -31.56781189,
    "longitud": -63.51620088,
    "color_sector": "#FFD700"
  },
  {
    "id": 2066,
    "extinto": "ISLAS JOSE RUPERTO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "132",
    "latitud": -31.5678234,
    "longitud": -63.51620348,
    "color_sector": "#FFD700"
  },
  {
    "id": 2067,
    "extinto": "TAMAGNINI RUBEN ORESTE",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "132",
    "latitud": -31.5678234,
    "longitud": -63.51620348,
    "color_sector": "#FFD700"
  },
  {
    "id": 2068,
    "extinto": "NIETO JUAN IGNACIO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "1",
    "latitud": -31.56768842,
    "longitud": -63.51572416,
    "color_sector": "#FFD700"
  },
  {
    "id": 2069,
    "extinto": "MORENO ELENA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "2",
    "latitud": -31.56770825,
    "longitud": -63.51573128,
    "color_sector": "#FFD700"
  },
  {
    "id": 2070,
    "extinto": "ZORZENON JUAN MARCELINO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "2",
    "latitud": -31.56770825,
    "longitud": -63.51573128,
    "color_sector": "#FFD700"
  },
  {
    "id": 2071,
    "extinto": "ZORZENON  ANTONIO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "2",
    "latitud": -31.56770825,
    "longitud": -63.51573128,
    "color_sector": "#FFD700"
  },
  {
    "id": 2072,
    "extinto": "CARLOS OMAR NORIEGA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "8",
    "latitud": -31.56783583,
    "longitud": -63.51577709,
    "color_sector": "#FFD700"
  },
  {
    "id": 2073,
    "extinto": "ESTANISLAO OMAR NORIEGA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "8",
    "latitud": -31.56783583,
    "longitud": -63.51577709,
    "color_sector": "#FFD700"
  },
  {
    "id": 2074,
    "extinto": "MARIA GILA SORIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "8",
    "latitud": -31.56783583,
    "longitud": -63.51577709,
    "color_sector": "#FFD700"
  },
  {
    "id": 2075,
    "extinto": "ANDRADA RAMON ALBERTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "8",
    "latitud": -31.56783583,
    "longitud": -63.51577709,
    "color_sector": "#FFD700"
  },
  {
    "id": 2076,
    "extinto": "LEANDRO DAVID ROSSI",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "9",
    "latitud": -31.56785566,
    "longitud": -63.51578421,
    "color_sector": "#FFD700"
  },
  {
    "id": 2077,
    "extinto": "LUPARIA CARLOS ALBERTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "10",
    "latitud": -31.56787979,
    "longitud": -63.51579287,
    "color_sector": "#FFD700"
  },
  {
    "id": 2078,
    "extinto": "CATALINA RE DE VAUDAGNA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "10",
    "latitud": -31.56787979,
    "longitud": -63.51579287,
    "color_sector": "#FFD700"
  },
  {
    "id": 2079,
    "extinto": "ANA BELE ROSSI",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "10",
    "latitud": -31.56787979,
    "longitud": -63.51579287,
    "color_sector": "#FFD700"
  },
  {
    "id": 2080,
    "extinto": "JUAN BAUDAGNA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "10",
    "latitud": -31.56787979,
    "longitud": -63.51579287,
    "color_sector": "#FFD700"
  },
  {
    "id": 2081,
    "extinto": "LESBEGURIS MARIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "11",
    "latitud": -31.56789962,
    "longitud": -63.51579999,
    "color_sector": "#FFD700"
  },
  {
    "id": 2082,
    "extinto": "LESBEGUERIS ROSA RAMONA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "11",
    "latitud": -31.56789962,
    "longitud": -63.51579999,
    "color_sector": "#FFD700"
  },
  {
    "id": 2083,
    "extinto": "RIOS ROSENDO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "11",
    "latitud": -31.56789962,
    "longitud": -63.51579999,
    "color_sector": "#FFD700"
  },
  {
    "id": 2084,
    "extinto": "VAUDAGNA EDGAR BAUTISTA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "11",
    "latitud": -31.56789962,
    "longitud": -63.51579999,
    "color_sector": "#FFD700"
  },
  {
    "id": 2085,
    "extinto": "LESBEGUERIS ANA CLEOTILDE",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "11",
    "latitud": -31.56789962,
    "longitud": -63.51579999,
    "color_sector": "#FFD700"
  },
  {
    "id": 2086,
    "extinto": "CABRERA HORTENCIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "12",
    "latitud": -31.56768498,
    "longitud": -63.51573725,
    "color_sector": "#FFD700"
  },
  {
    "id": 2087,
    "extinto": "BARRERA JOSE ATILIO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "12",
    "latitud": -31.56768498,
    "longitud": -63.51573725,
    "color_sector": "#FFD700"
  },
  {
    "id": 2088,
    "extinto": "FORNERO JUAN ERNESTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "13",
    "latitud": -31.5677048,
    "longitud": -63.51574437,
    "color_sector": "#FFD700"
  },
  {
    "id": 2089,
    "extinto": "JUANA AUDELINA CABRERA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "13",
    "latitud": -31.5677048,
    "longitud": -63.51574437,
    "color_sector": "#FFD700"
  },
  {
    "id": 2090,
    "extinto": "LUQUE HILDA ESMILDA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "14",
    "latitud": -31.56772463,
    "longitud": -63.51575149,
    "color_sector": "#FFD700"
  },
  {
    "id": 2091,
    "extinto": "ELVIO CARMEN BALBO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "14",
    "latitud": -31.56772463,
    "longitud": -63.51575149,
    "color_sector": "#FFD700"
  },
  {
    "id": 2092,
    "extinto": "CRETTINO BAUTISTA ERNESTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "19",
    "latitud": -31.56783238,
    "longitud": -63.51579018,
    "color_sector": "#FFD700"
  },
  {
    "id": 2093,
    "extinto": "JUAN CARLOS CRETTINO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "19",
    "latitud": -31.56783238,
    "longitud": -63.51579018,
    "color_sector": "#FFD700"
  },
  {
    "id": 2094,
    "extinto": "ACOSTA MIGUELINA DEL VALLE",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "23",
    "latitud": -31.56768153,
    "longitud": -63.51575034,
    "color_sector": "#FFD700"
  },
  {
    "id": 2095,
    "extinto": "MILAGROS MORELLO- MONCADA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "25",
    "latitud": -31.56772118,
    "longitud": -63.51576457,
    "color_sector": "#FFD700"
  },
  {
    "id": 2096,
    "extinto": "DOMINGA ELVIRA BRIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "34",
    "latitud": -31.56767809,
    "longitud": -63.51576343,
    "color_sector": "#FFD700"
  },
  {
    "id": 2097,
    "extinto": "CATALINA BRIA DE FERNANDEZ",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "34",
    "latitud": -31.56767809,
    "longitud": -63.51576343,
    "color_sector": "#FFD700"
  },
  {
    "id": 2098,
    "extinto": "DOMINGO BRIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "34",
    "latitud": -31.56767809,
    "longitud": -63.51576343,
    "color_sector": "#FFD700"
  },
  {
    "id": 2099,
    "extinto": "DOMINGA DENINOTTI DE BRIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "34",
    "latitud": -31.56767809,
    "longitud": -63.51576343,
    "color_sector": "#FFD700"
  },
  {
    "id": 2100,
    "extinto": "INES RAMONA HUZULIAK",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "35",
    "latitud": -31.56769791,
    "longitud": -63.51577054,
    "color_sector": "#FFD700"
  },
  {
    "id": 2101,
    "extinto": "JOSE BARTOLO BRIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "35",
    "latitud": -31.56769791,
    "longitud": -63.51577054,
    "color_sector": "#FFD700"
  },
  {
    "id": 2102,
    "extinto": "YOLANDA ESTHER BRIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "35",
    "latitud": -31.56769791,
    "longitud": -63.51577054,
    "color_sector": "#FFD700"
  },
  {
    "id": 2103,
    "extinto": "BERNABE RAUL FARIAS",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "45",
    "latitud": -31.56767464,
    "longitud": -63.51577651,
    "color_sector": "#FFD700"
  },
  {
    "id": 2104,
    "extinto": "GLADIS MARGARITA PESANDO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "45",
    "latitud": -31.56767464,
    "longitud": -63.51577651,
    "color_sector": "#FFD700"
  },
  {
    "id": 2105,
    "extinto": "FALCO MIRTA DEL CARMEN",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "47",
    "latitud": -31.56771429,
    "longitud": -63.51579075,
    "color_sector": "#FFD700"
  },
  {
    "id": 2106,
    "extinto": "BENZO RUBEN PEDRO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "56",
    "latitud": -31.5676712,
    "longitud": -63.5157896,
    "color_sector": "#FFD700"
  },
  {
    "id": 2107,
    "extinto": "FERNANDEZ RUBEN TIMOTEO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "57",
    "latitud": -31.56769102,
    "longitud": -63.51579672,
    "color_sector": "#FFD700"
  },
  {
    "id": 2108,
    "extinto": "NEVA MARIA CALVO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "57",
    "latitud": -31.56769102,
    "longitud": -63.51579672,
    "color_sector": "#FFD700"
  },
  {
    "id": 2109,
    "extinto": "MARSILI JUANA CARMEN",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "58",
    "latitud": -31.56771085,
    "longitud": -63.51580384,
    "color_sector": "#FFD700"
  },
  {
    "id": 2110,
    "extinto": "FALCO MAURICIO HECTOR",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "58",
    "latitud": -31.56771085,
    "longitud": -63.51580384,
    "color_sector": "#FFD700"
  },
  {
    "id": 2111,
    "extinto": "BLANCA MARGARITA TONATTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "67",
    "latitud": -31.56766775,
    "longitud": -63.51580269,
    "color_sector": "#FFD700"
  },
  {
    "id": 2112,
    "extinto": "VICTOR LEOPOLDO PEDRAZA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "67",
    "latitud": -31.56766775,
    "longitud": -63.51580269,
    "color_sector": "#FFD700"
  },
  {
    "id": 2113,
    "extinto": "MOSSATTO CANDIDA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "68",
    "latitud": -31.56768758,
    "longitud": -63.51580981,
    "color_sector": "#FFD700"
  },
  {
    "id": 2114,
    "extinto": "RAMOS JORGE MACIEL",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "69",
    "latitud": -31.5677074,
    "longitud": -63.51581693,
    "color_sector": "#FFD700"
  },
  {
    "id": 2115,
    "extinto": "N-N RAMOS GIOVANNI",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "69",
    "latitud": -31.5677074,
    "longitud": -63.51581693,
    "color_sector": "#FFD700"
  },
  {
    "id": 2116,
    "extinto": "FERNANDO LUIS HERRERA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "70",
    "latitud": -31.56773154,
    "longitud": -63.5158256,
    "color_sector": "#FFD700"
  },
  {
    "id": 2117,
    "extinto": "GABRIEL HECTOR VIDELA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "71",
    "latitud": -31.56775137,
    "longitud": -63.51583272,
    "color_sector": "#FFD700"
  },
  {
    "id": 2118,
    "extinto": "ESTELA  ROSA  ISAIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "72",
    "latitud": -31.56777119,
    "longitud": -63.51583984,
    "color_sector": "#FFD700"
  },
  {
    "id": 2119,
    "extinto": "PERALTA REYNALDO RAMON",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "77",
    "latitud": -31.56787895,
    "longitud": -63.51587853,
    "color_sector": "#FFD700"
  },
  {
    "id": 2120,
    "extinto": "JUAREZ ANTONIA CITA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "77",
    "latitud": -31.56787895,
    "longitud": -63.51587853,
    "color_sector": "#FFD700"
  },
  {
    "id": 2121,
    "extinto": "NEREO EFRAIN LIENDO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "78",
    "latitud": -31.56766431,
    "longitud": -63.51581578,
    "color_sector": "#FFD700"
  },
  {
    "id": 2122,
    "extinto": "CANGA ELMA BEGLIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "78",
    "latitud": -31.56766431,
    "longitud": -63.51581578,
    "color_sector": "#FFD700"
  },
  {
    "id": 2123,
    "extinto": "PINOS JOSE DEMETRIO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "79",
    "latitud": -31.56768413,
    "longitud": -63.5158229,
    "color_sector": "#FFD700"
  },
  {
    "id": 2124,
    "extinto": "ANA  HUZULIAK",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "79",
    "latitud": -31.56768413,
    "longitud": -63.5158229,
    "color_sector": "#FFD700"
  },
  {
    "id": 2125,
    "extinto": "UTRERA TRANSITO ROSA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "80",
    "latitud": -31.56770396,
    "longitud": -63.51583002,
    "color_sector": "#FFD700"
  },
  {
    "id": 2126,
    "extinto": "LIENDO JOSE ADELMO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "80",
    "latitud": -31.56770396,
    "longitud": -63.51583002,
    "color_sector": "#FFD700"
  },
  {
    "id": 2127,
    "extinto": "ALMADA MARIA JOSEFINA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "81",
    "latitud": -31.5677281,
    "longitud": -63.51583869,
    "color_sector": "#FFD700"
  },
  {
    "id": 2128,
    "extinto": "UTRERA MARIA ESTHER",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "83",
    "latitud": -31.56776775,
    "longitud": -63.51585292,
    "color_sector": "#FFD700"
  },
  {
    "id": 2129,
    "extinto": "ANTONIO DANIEL SOTTOVIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "83",
    "latitud": -31.56776775,
    "longitud": -63.51585292,
    "color_sector": "#FFD700"
  },
  {
    "id": 2130,
    "extinto": "ROSA EUFEMIA SOTTOVIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "83",
    "latitud": -31.56776775,
    "longitud": -63.51585292,
    "color_sector": "#FFD700"
  },
  {
    "id": 2131,
    "extinto": "CRISTINA ADELINA SANCHEZ",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "84",
    "latitud": -31.56779189,
    "longitud": -63.51586159,
    "color_sector": "#FFD700"
  },
  {
    "id": 2132,
    "extinto": "RAMON EDUARDO ZAPPA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "85",
    "latitud": -31.56781171,
    "longitud": -63.51586871,
    "color_sector": "#FFD700"
  },
  {
    "id": 2133,
    "extinto": "HECTOR OSCAR LOPEZ",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "88",
    "latitud": -31.5678755,
    "longitud": -63.51589161,
    "color_sector": "#FFD700"
  },
  {
    "id": 2134,
    "extinto": "JUAN CARLOS BELTRAMO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "89",
    "latitud": -31.56766086,
    "longitud": -63.51582887,
    "color_sector": "#FFD700"
  },
  {
    "id": 2135,
    "extinto": "ABBA ROMILDA ELVIRA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "89",
    "latitud": -31.56766086,
    "longitud": -63.51582887,
    "color_sector": "#FFD700"
  },
  {
    "id": 2136,
    "extinto": "ALBERICHI NOELIA KARINA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "90",
    "latitud": -31.56768069,
    "longitud": -63.51583599,
    "color_sector": "#FFD700"
  },
  {
    "id": 2137,
    "extinto": "RODRIGUEZ CARLOS ALBERTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "91",
    "latitud": -31.56770051,
    "longitud": -63.51584311,
    "color_sector": "#FFD700"
  },
  {
    "id": 2138,
    "extinto": "ELVIO SEBASTIAN BRUNETTO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "92",
    "latitud": -31.56772465,
    "longitud": -63.51585177,
    "color_sector": "#FFD700"
  },
  {
    "id": 2139,
    "extinto": "GENESIO EMILIA VICTORIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "92",
    "latitud": -31.56772465,
    "longitud": -63.51585177,
    "color_sector": "#FFD700"
  },
  {
    "id": 2140,
    "extinto": "SANCHEZ ANASTACIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "93",
    "latitud": -31.56774448,
    "longitud": -63.51585889,
    "color_sector": "#FFD700"
  },
  {
    "id": 2141,
    "extinto": "ZAPPA ESTEBAN JOSE",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "93",
    "latitud": -31.56774448,
    "longitud": -63.51585889,
    "color_sector": "#FFD700"
  },
  {
    "id": 2142,
    "extinto": "MARIA ISABEL ZAPPA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "93",
    "latitud": -31.56774448,
    "longitud": -63.51585889,
    "color_sector": "#FFD700"
  },
  {
    "id": 2143,
    "extinto": "LOZANO RODOLFO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "94",
    "latitud": -31.5677643,
    "longitud": -63.51586601,
    "color_sector": "#FFD700"
  },
  {
    "id": 2144,
    "extinto": "FELISA IRENE PALACIO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "94",
    "latitud": -31.5677643,
    "longitud": -63.51586601,
    "color_sector": "#FFD700"
  },
  {
    "id": 2145,
    "extinto": "MARCELO  GABRIEL  LUCERO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "95",
    "latitud": -31.56778844,
    "longitud": -63.51587468,
    "color_sector": "#FFD700"
  },
  {
    "id": 2146,
    "extinto": "JORGE ALBERICHI",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "96",
    "latitud": -31.56780827,
    "longitud": -63.5158818,
    "color_sector": "#FFD700"
  },
  {
    "id": 2147,
    "extinto": "ONTIVEROS ARTURO BENJAMIN",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "100",
    "latitud": -31.56765741,
    "longitud": -63.51584196,
    "color_sector": "#FFD700"
  },
  {
    "id": 2148,
    "extinto": "MARIA ANGELICA CEREZO FERREYROLA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "100",
    "latitud": -31.56765741,
    "longitud": -63.51584196,
    "color_sector": "#FFD700"
  },
  {
    "id": 2149,
    "extinto": "MANSANELLI ESTHER DEL CARMEN",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "101",
    "latitud": -31.56767724,
    "longitud": -63.51584908,
    "color_sector": "#FFD700"
  },
  {
    "id": 2150,
    "extinto": "CUGAT DANIEL RAUL",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "102",
    "latitud": -31.56769707,
    "longitud": -63.5158562,
    "color_sector": "#FFD700"
  },
  {
    "id": 2151,
    "extinto": "VACA MARIA SUSUNA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "103",
    "latitud": -31.56772121,
    "longitud": -63.51586486,
    "color_sector": "#FFD700"
  },
  {
    "id": 2152,
    "extinto": "BENITO MODESTO FIORA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "103",
    "latitud": -31.56772121,
    "longitud": -63.51586486,
    "color_sector": "#FFD700"
  },
  {
    "id": 2153,
    "extinto": "CARLOS HUGO FIORA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "103",
    "latitud": -31.56772121,
    "longitud": -63.51586486,
    "color_sector": "#FFD700"
  },
  {
    "id": 2154,
    "extinto": "CISTERNA SAN TIAGO EUGENIO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "104",
    "latitud": -31.56774103,
    "longitud": -63.51587198,
    "color_sector": "#FFD700"
  },
  {
    "id": 2155,
    "extinto": "ORESTE ACOSTA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "104",
    "latitud": -31.56774103,
    "longitud": -63.51587198,
    "color_sector": "#FFD700"
  },
  {
    "id": 2156,
    "extinto": "JUAN FORTUNATO BATALLA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "104",
    "latitud": -31.56774103,
    "longitud": -63.51587198,
    "color_sector": "#FFD700"
  },
  {
    "id": 2157,
    "extinto": "VILCHES DIONISIO TOMAS",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "106",
    "latitud": -31.567785,
    "longitud": -63.51588777,
    "color_sector": "#FFD700"
  },
  {
    "id": 2158,
    "extinto": "COLOMBO LETICIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "106",
    "latitud": -31.567785,
    "longitud": -63.51588777,
    "color_sector": "#FFD700"
  },
  {
    "id": 2159,
    "extinto": "BERTOLATTO EVA BETTY",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "106",
    "latitud": -31.567785,
    "longitud": -63.51588777,
    "color_sector": "#FFD700"
  },
  {
    "id": 2160,
    "extinto": "ANGRISANI IDA ANTONIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "107",
    "latitud": -31.56780482,
    "longitud": -63.51589489,
    "color_sector": "#FFD700"
  },
  {
    "id": 2161,
    "extinto": "CARLOS DANTE BERTONE",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "107",
    "latitud": -31.56780482,
    "longitud": -63.51589489,
    "color_sector": "#FFD700"
  },
  {
    "id": 2162,
    "extinto": "QUINTEROS ROSA LUCIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "108",
    "latitud": -31.56782465,
    "longitud": -63.51590201,
    "color_sector": "#FFD700"
  },
  {
    "id": 2163,
    "extinto": "MIRTA VICTORIA DELOGU",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "109",
    "latitud": -31.56784879,
    "longitud": -63.51591067,
    "color_sector": "#FFD700"
  },
  {
    "id": 2164,
    "extinto": "BENITES LUIS GERONIMO",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "1",
    "latitud": -31.56782337,
    "longitud": -63.51566323,
    "color_sector": "#FFD700"
  },
  {
    "id": 2165,
    "extinto": "MARTINATTO EMERIO ANTONIO",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "3",
    "latitud": -31.56784571,
    "longitud": -63.51567157,
    "color_sector": "#FFD700"
  },
  {
    "id": 2166,
    "extinto": "MOYA ROBERTO DANTE",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "3",
    "latitud": -31.56784571,
    "longitud": -63.51567157,
    "color_sector": "#FFD700"
  },
  {
    "id": 2167,
    "extinto": "AMALIA TERESA MARTINATTO",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "3",
    "latitud": -31.56784571,
    "longitud": -63.51567157,
    "color_sector": "#FFD700"
  },
  {
    "id": 2168,
    "extinto": "LOPEZ CAYETANA FRANCISCA",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "31",
    "latitud": -31.56780306,
    "longitud": -63.51573748,
    "color_sector": "#FFD700"
  },
  {
    "id": 2169,
    "extinto": "CRISPIN GERVACIO AGUIRRE",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "31",
    "latitud": -31.56780306,
    "longitud": -63.51573748,
    "color_sector": "#FFD700"
  },
  {
    "id": 2170,
    "extinto": "FATIMA ANTONELA SINGH",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "31",
    "latitud": -31.56780306,
    "longitud": -63.51573748,
    "color_sector": "#FFD700"
  },
  {
    "id": 2171,
    "extinto": "ECTOR  ORACIO  ACOSTA",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "32",
    "latitud": -31.56781423,
    "longitud": -63.51574165,
    "color_sector": "#FFD700"
  },
  {
    "id": 2172,
    "extinto": "DI GARBO MARIA ELENA",
    "sector": "AMARILLO",
    "lote": "65",
    "nro": "6",
    "latitud": -31.56792649,
    "longitud": -63.51546013,
    "color_sector": "#FFD700"
  },
  {
    "id": 2173,
    "extinto": "GIGENA CARLOS HERMINIO",
    "sector": "AMARILLO",
    "lote": "65",
    "nro": "7",
    "latitud": -31.56795087,
    "longitud": -63.51546784,
    "color_sector": "#FFD700"
  },
  {
    "id": 2174,
    "extinto": "AMERICA TULIA  GIGENA",
    "sector": "AMARILLO",
    "lote": "65",
    "nro": "8",
    "latitud": -31.56797089,
    "longitud": -63.51547417,
    "color_sector": "#FFD700"
  },
  {
    "id": 2175,
    "extinto": "ANTONUCCI ANGEL",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "17",
    "latitud": -31.56781355,
    "longitud": -63.51543018,
    "color_sector": "#FFD700"
  },
  {
    "id": 2176,
    "extinto": "DUBINI MARIA ANTONIA",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "17",
    "latitud": -31.56781355,
    "longitud": -63.51543018,
    "color_sector": "#FFD700"
  },
  {
    "id": 2177,
    "extinto": "ANTONUCCILUIS ANGEL",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "18",
    "latitud": -31.56783243,
    "longitud": -63.51544022,
    "color_sector": "#FFD700"
  },
  {
    "id": 2178,
    "extinto": "ARIAS JUAN ANTONIO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "19",
    "latitud": -31.56785541,
    "longitud": -63.51545244,
    "color_sector": "#FFD700"
  },
  {
    "id": 2179,
    "extinto": "ALSIRA MARIANA GENOLET",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "19",
    "latitud": -31.56785541,
    "longitud": -63.51545244,
    "color_sector": "#FFD700"
  },
  {
    "id": 2180,
    "extinto": "ITALO EUSEBIO BRUCELLI",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "21",
    "latitud": -31.56780869,
    "longitud": -63.51544264,
    "color_sector": "#FFD700"
  },
  {
    "id": 2181,
    "extinto": "MABEL  DEL  VALLE  ARIAS",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "21",
    "latitud": -31.56780869,
    "longitud": -63.51544264,
    "color_sector": "#FFD700"
  },
  {
    "id": 2182,
    "extinto": "ARIAS SCANDAR",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "26",
    "latitud": -31.56782271,
    "longitud": -63.51546514,
    "color_sector": "#FFD700"
  },
  {
    "id": 2183,
    "extinto": "ARIAS ALEJANDRO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "26",
    "latitud": -31.56782271,
    "longitud": -63.51546514,
    "color_sector": "#FFD700"
  },
  {
    "id": 2184,
    "extinto": "URAN SELVA NORA",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "26",
    "latitud": -31.56782271,
    "longitud": -63.51546514,
    "color_sector": "#FFD700"
  },
  {
    "id": 2185,
    "extinto": "ANTONUCCI ANTONIO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "28",
    "latitud": -31.56786457,
    "longitud": -63.5154874,
    "color_sector": "#FFD700"
  },
  {
    "id": 2186,
    "extinto": "ANTONUCCIJUAN CARLOS",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "28",
    "latitud": -31.56786457,
    "longitud": -63.5154874,
    "color_sector": "#FFD700"
  },
  {
    "id": 2187,
    "extinto": "ROSA ANGELICA PAOLETTI",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "28",
    "latitud": -31.56786457,
    "longitud": -63.5154874,
    "color_sector": "#FFD700"
  },
  {
    "id": 2188,
    "extinto": "JUANA ROSA PAVON",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "30",
    "latitud": -31.56781785,
    "longitud": -63.51547761,
    "color_sector": "#FFD700"
  },
  {
    "id": 2189,
    "extinto": "ARIAS JULIO ALBERTO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "30",
    "latitud": -31.56781785,
    "longitud": -63.51547761,
    "color_sector": "#FFD700"
  },
  {
    "id": 2190,
    "extinto": "TABORDA GUIDO BENJAMIN",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "33",
    "latitud": -31.56779412,
    "longitud": -63.51548003,
    "color_sector": "#FFD700"
  },
  {
    "id": 2191,
    "extinto": "BELQUIS HAYDEE MONCADA",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "33",
    "latitud": -31.56779412,
    "longitud": -63.51548003,
    "color_sector": "#FFD700"
  },
  {
    "id": 2192,
    "extinto": "URAN NILDA VIOLETA",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "34",
    "latitud": -31.56781299,
    "longitud": -63.51549007,
    "color_sector": "#FFD700"
  },
  {
    "id": 2193,
    "extinto": "ANDRADA ANDRES LEONARDO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "35",
    "latitud": -31.56783598,
    "longitud": -63.51550229,
    "color_sector": "#FFD700"
  },
  {
    "id": 2194,
    "extinto": "FILIPPO MANUELA MAGDALENA",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "38",
    "latitud": -31.56780814,
    "longitud": -63.51550253,
    "color_sector": "#FFD700"
  },
  {
    "id": 2195,
    "extinto": "MONCADA DARDO AMADEO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "38",
    "latitud": -31.56780814,
    "longitud": -63.51550253,
    "color_sector": "#FFD700"
  },
  {
    "id": 2196,
    "extinto": "BUFFA IRMA GLORIA",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "61",
    "latitud": -31.56776011,
    "longitud": -63.51556727,
    "color_sector": "#FFD700"
  },
  {
    "id": 2197,
    "extinto": "DELORTO FRANCISCO",
    "sector": "AMARILLO",
    "lote": "66",
    "nro": "68",
    "latitud": -31.56781599,
    "longitud": -63.51561203,
    "color_sector": "#FFD700"
  },
  {
    "id": 2198,
    "extinto": "LUDUEÑA BLANCA ROSA",
    "sector": "AMARILLO",
    "lote": "67",
    "nro": "20",
    "latitud": -31.5677425,
    "longitud": -63.51570372,
    "color_sector": "#FFD700"
  },
  {
    "id": 2199,
    "extinto": "LUDUEÑA HUMBERTO FERNANDO",
    "sector": "AMARILLO",
    "lote": "67",
    "nro": "21",
    "latitud": -31.56775354,
    "longitud": -63.51570835,
    "color_sector": "#FFD700"
  },
  {
    "id": 2200,
    "extinto": "BRANDAN MARISEL DEL MILAGRO",
    "sector": "AZUL",
    "lote": "68",
    "nro": "1",
    "latitud": -31.56748076,
    "longitud": -63.51641057,
    "color_sector": "#4285F4"
  },
  {
    "id": 2201,
    "extinto": "ELSA TERESA ALVAREZ",
    "sector": "AZUL",
    "lote": "68",
    "nro": "2",
    "latitud": -31.56749811,
    "longitud": -63.51642385,
    "color_sector": "#4285F4"
  },
  {
    "id": 2202,
    "extinto": "NADIR BEATRIZ MACAGNO",
    "sector": "AZUL",
    "lote": "68",
    "nro": "3",
    "latitud": -31.56751923,
    "longitud": -63.51644002,
    "color_sector": "#4285F4"
  },
  {
    "id": 2203,
    "extinto": "BARRERA SILVIA ALEJANDRA",
    "sector": "AZUL",
    "lote": "68",
    "nro": "8",
    "latitud": -31.56747434,
    "longitud": -63.51642202,
    "color_sector": "#4285F4"
  },
  {
    "id": 2204,
    "extinto": "BARRERA ROQUE OMAR",
    "sector": "AZUL",
    "lote": "68",
    "nro": "8",
    "latitud": -31.56747434,
    "longitud": -63.51642202,
    "color_sector": "#4285F4"
  },
  {
    "id": 2205,
    "extinto": "MARIANI GUSTAVO LUIS",
    "sector": "AZUL",
    "lote": "68",
    "nro": "15",
    "latitud": -31.56746791,
    "longitud": -63.51643348,
    "color_sector": "#4285F4"
  },
  {
    "id": 2206,
    "extinto": "CARLE MAGDALENA CATALINA",
    "sector": "AZUL",
    "lote": "68",
    "nro": "29",
    "latitud": -31.56745506,
    "longitud": -63.51645638,
    "color_sector": "#4285F4"
  },
  {
    "id": 2207,
    "extinto": "BORGNA VICTOR HUGO",
    "sector": "AZUL",
    "lote": "68",
    "nro": "29",
    "latitud": -31.56745506,
    "longitud": -63.51645638,
    "color_sector": "#4285F4"
  },
  {
    "id": 2208,
    "extinto": "BORGNA DANIEL",
    "sector": "AZUL",
    "lote": "68",
    "nro": "29",
    "latitud": -31.56745506,
    "longitud": -63.51645638,
    "color_sector": "#4285F4"
  },
  {
    "id": 2209,
    "extinto": "CARLE JOSE NAZARENO",
    "sector": "AZUL",
    "lote": "68",
    "nro": "30",
    "latitud": -31.56747241,
    "longitud": -63.51646966,
    "color_sector": "#4285F4"
  },
  {
    "id": 2210,
    "extinto": "EDITH DEL CARMEN LAMBERTI",
    "sector": "AZUL",
    "lote": "68",
    "nro": "64",
    "latitud": -31.56742293,
    "longitud": -63.51651365,
    "color_sector": "#4285F4"
  },
  {
    "id": 2211,
    "extinto": "TERRENO JOSEFA BENITA",
    "sector": "AZUL",
    "lote": "69",
    "nro": "1",
    "latitud": -31.56741054,
    "longitud": -63.51652258,
    "color_sector": "#4285F4"
  },
  {
    "id": 2212,
    "extinto": "VERSELLI SILVIO ALBINO",
    "sector": "AZUL",
    "lote": "69",
    "nro": "1",
    "latitud": -31.56741054,
    "longitud": -63.51652258,
    "color_sector": "#4285F4"
  },
  {
    "id": 2213,
    "extinto": "VERCELLI MARIA CATALINA",
    "sector": "AZUL",
    "lote": "69",
    "nro": "1",
    "latitud": -31.56741054,
    "longitud": -63.51652258,
    "color_sector": "#4285F4"
  },
  {
    "id": 2214,
    "extinto": "BERNARDO RAMON JOSE TOMATTIS",
    "sector": "AZUL",
    "lote": "69",
    "nro": "9",
    "latitud": -31.56740394,
    "longitud": -63.5165339,
    "color_sector": "#4285F4"
  },
  {
    "id": 2215,
    "extinto": "JOSE ANTONIO TOMATTIS",
    "sector": "AZUL",
    "lote": "69",
    "nro": "17",
    "latitud": -31.56739734,
    "longitud": -63.51654522,
    "color_sector": "#4285F4"
  },
  {
    "id": 2216,
    "extinto": "VICTORIA BARONE",
    "sector": "AZUL",
    "lote": "69",
    "nro": "17",
    "latitud": -31.56739734,
    "longitud": -63.51654522,
    "color_sector": "#4285F4"
  },
  {
    "id": 2217,
    "extinto": "CISTERNA ANGELA GRACIELA",
    "sector": "AZUL",
    "lote": "69",
    "nro": "33",
    "latitud": -31.56738415,
    "longitud": -63.51656787,
    "color_sector": "#4285F4"
  },
  {
    "id": 2218,
    "extinto": "JOSE FLORENCIO HERNANDEZ",
    "sector": "AZUL",
    "lote": "69",
    "nro": "33",
    "latitud": -31.56738415,
    "longitud": -63.51656787,
    "color_sector": "#4285F4"
  },
  {
    "id": 2219,
    "extinto": "IDELIO DOMICIANO LAZZARONE",
    "sector": "AZUL",
    "lote": "69",
    "nro": "36",
    "latitud": -31.56743933,
    "longitud": -63.51661172,
    "color_sector": "#4285F4"
  },
  {
    "id": 2220,
    "extinto": "JUAN AVELINO ROLLE",
    "sector": "AZUL",
    "lote": "69",
    "nro": "41",
    "latitud": -31.56737756,
    "longitud": -63.51657919,
    "color_sector": "#4285F4"
  },
  {
    "id": 2221,
    "extinto": "SILEONI ITALO VICTORIO",
    "sector": "AZUL",
    "lote": "69",
    "nro": "49",
    "latitud": -31.56737096,
    "longitud": -63.51659051,
    "color_sector": "#4285F4"
  },
  {
    "id": 2222,
    "extinto": "ANGEL HUMBERTO SILEONI",
    "sector": "AZUL",
    "lote": "69",
    "nro": "57",
    "latitud": -31.56736437,
    "longitud": -63.51660183,
    "color_sector": "#4285F4"
  },
  {
    "id": 2223,
    "extinto": "LEONID GOLUBENKO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "1",
    "latitud": -31.56727579,
    "longitud": -63.51657661,
    "color_sector": "#4285F4"
  },
  {
    "id": 2224,
    "extinto": "NELIDA MARIA FERREYRA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "1",
    "latitud": -31.56727579,
    "longitud": -63.51657661,
    "color_sector": "#4285F4"
  },
  {
    "id": 2225,
    "extinto": "FERREYRA HORACIO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "1",
    "latitud": -31.56727579,
    "longitud": -63.51657661,
    "color_sector": "#4285F4"
  },
  {
    "id": 2226,
    "extinto": "LUIS VICENTE BASSI",
    "sector": "AZUL",
    "lote": "70",
    "nro": "2",
    "latitud": -31.56729188,
    "longitud": -63.5165919,
    "color_sector": "#4285F4"
  },
  {
    "id": 2227,
    "extinto": "IDA ZANELLA DE BASSI",
    "sector": "AZUL",
    "lote": "70",
    "nro": "2",
    "latitud": -31.56729188,
    "longitud": -63.5165919,
    "color_sector": "#4285F4"
  },
  {
    "id": 2228,
    "extinto": "PEREZ VICTORIA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "4",
    "latitud": -31.56732756,
    "longitud": -63.51662581,
    "color_sector": "#4285F4"
  },
  {
    "id": 2229,
    "extinto": "GIGENA JORGE AUGUSTO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "4",
    "latitud": -31.56732756,
    "longitud": -63.51662581,
    "color_sector": "#4285F4"
  },
  {
    "id": 2230,
    "extinto": "FRANCO MARCOS JAVIER",
    "sector": "AZUL",
    "lote": "70",
    "nro": "4",
    "latitud": -31.56732756,
    "longitud": -63.51662581,
    "color_sector": "#4285F4"
  },
  {
    "id": 2231,
    "extinto": "PERALTA JULIO OSCAR",
    "sector": "AZUL",
    "lote": "70",
    "nro": "7",
    "latitud": -31.56730407,
    "longitud": -63.51662114,
    "color_sector": "#4285F4"
  },
  {
    "id": 2232,
    "extinto": "MARIA TERESA BRANDAN",
    "sector": "AZUL",
    "lote": "70",
    "nro": "7",
    "latitud": -31.56730407,
    "longitud": -63.51662114,
    "color_sector": "#4285F4"
  },
  {
    "id": 2233,
    "extinto": "JUAN AGUSTIN PERALTA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "8",
    "latitud": -31.56732016,
    "longitud": -63.51663643,
    "color_sector": "#4285F4"
  },
  {
    "id": 2234,
    "extinto": "GOMEZ PASCUAL ROBERTO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "11",
    "latitud": -31.56729667,
    "longitud": -63.51663176,
    "color_sector": "#4285F4"
  },
  {
    "id": 2235,
    "extinto": "GOMEZ RAMON LEONCIO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "11",
    "latitud": -31.56729667,
    "longitud": -63.51663176,
    "color_sector": "#4285F4"
  },
  {
    "id": 2236,
    "extinto": "ANGEL AMANCIO JUAREZ",
    "sector": "AZUL",
    "lote": "70",
    "nro": "12",
    "latitud": -31.56731276,
    "longitud": -63.51664705,
    "color_sector": "#4285F4"
  },
  {
    "id": 2237,
    "extinto": "GUARDATTI AMELIA CLEMENTINA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "13",
    "latitud": -31.56725359,
    "longitud": -63.51660847,
    "color_sector": "#4285F4"
  },
  {
    "id": 2238,
    "extinto": "JUAREZ JOSE DOMINGO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2239,
    "extinto": "JUAREZ JUAN FRANCISCO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2240,
    "extinto": "JUAREZ AMANCIO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2241,
    "extinto": "FILOMENA PEREZ DE JUAREZ",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2242,
    "extinto": "JUAREZ EDMUNDO DANTE",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2243,
    "extinto": "JUAREZ RUFINO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2244,
    "extinto": "GOMEZ TELEFORA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "16",
    "latitud": -31.56730536,
    "longitud": -63.51665767,
    "color_sector": "#4285F4"
  },
  {
    "id": 2245,
    "extinto": "GIGENA HELVECIA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "17",
    "latitud": -31.56724619,
    "longitud": -63.51661909,
    "color_sector": "#4285F4"
  },
  {
    "id": 2246,
    "extinto": "DUBINI LUIS ALFREDO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "17",
    "latitud": -31.56724619,
    "longitud": -63.51661909,
    "color_sector": "#4285F4"
  },
  {
    "id": 2247,
    "extinto": "WOLOWICZ",
    "sector": "AZUL",
    "lote": "70",
    "nro": "19",
    "latitud": -31.56728187,
    "longitud": -63.516653,
    "color_sector": "#4285F4"
  },
  {
    "id": 2248,
    "extinto": "ALBANO DOMINGA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "19",
    "latitud": -31.56728187,
    "longitud": -63.516653,
    "color_sector": "#4285F4"
  },
  {
    "id": 2249,
    "extinto": "WOLOWICZ DOMINGA GREGORIA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "19",
    "latitud": -31.56728187,
    "longitud": -63.516653,
    "color_sector": "#4285F4"
  },
  {
    "id": 2250,
    "extinto": "JUAREZ JUAN CARLOS",
    "sector": "AZUL",
    "lote": "70",
    "nro": "20",
    "latitud": -31.56729795,
    "longitud": -63.51666829,
    "color_sector": "#4285F4"
  },
  {
    "id": 2251,
    "extinto": "CALOS ALBERTO JUAREZ",
    "sector": "AZUL",
    "lote": "70",
    "nro": "20",
    "latitud": -31.56729795,
    "longitud": -63.51666829,
    "color_sector": "#4285F4"
  },
  {
    "id": 2252,
    "extinto": "CANAVESIO GLORIA MAFALDA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "21",
    "latitud": -31.56723878,
    "longitud": -63.51662971,
    "color_sector": "#4285F4"
  },
  {
    "id": 2253,
    "extinto": "OLGA ESTELA TISSERA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "22",
    "latitud": -31.56725488,
    "longitud": -63.51664501,
    "color_sector": "#4285F4"
  },
  {
    "id": 2254,
    "extinto": "ALFREDO RODOLFO BUGNONE",
    "sector": "AZUL",
    "lote": "70",
    "nro": "22",
    "latitud": -31.56725488,
    "longitud": -63.51664501,
    "color_sector": "#4285F4"
  },
  {
    "id": 2255,
    "extinto": "SARGIOTTO ANDRES ALBERTO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "25",
    "latitud": -31.56723138,
    "longitud": -63.51664033,
    "color_sector": "#4285F4"
  },
  {
    "id": 2256,
    "extinto": "ELISA ISABEL VALIENTE",
    "sector": "AZUL",
    "lote": "70",
    "nro": "25",
    "latitud": -31.56723138,
    "longitud": -63.51664033,
    "color_sector": "#4285F4"
  },
  {
    "id": 2257,
    "extinto": "LEIVA MARGARITA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "27",
    "latitud": -31.56726707,
    "longitud": -63.51667424,
    "color_sector": "#4285F4"
  },
  {
    "id": 2258,
    "extinto": "BERTETTO JOSE ANTONIO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "27",
    "latitud": -31.56726707,
    "longitud": -63.51667424,
    "color_sector": "#4285F4"
  },
  {
    "id": 2259,
    "extinto": "BECCACECE CAROLINA ANA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "28",
    "latitud": -31.56728315,
    "longitud": -63.51668953,
    "color_sector": "#4285F4"
  },
  {
    "id": 2260,
    "extinto": "PAVON JOSE",
    "sector": "AZUL",
    "lote": "70",
    "nro": "28",
    "latitud": -31.56728315,
    "longitud": -63.51668953,
    "color_sector": "#4285F4"
  },
  {
    "id": 2261,
    "extinto": "GARINO JOSE DOMINGO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "30",
    "latitud": -31.56724008,
    "longitud": -63.51666625,
    "color_sector": "#4285F4"
  },
  {
    "id": 2262,
    "extinto": "DONZINO ABA EMANUEL MARTIN",
    "sector": "AZUL",
    "lote": "70",
    "nro": "30",
    "latitud": -31.56724008,
    "longitud": -63.51666625,
    "color_sector": "#4285F4"
  },
  {
    "id": 2263,
    "extinto": "TORAZZA ANGELA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "30",
    "latitud": -31.56724008,
    "longitud": -63.51666625,
    "color_sector": "#4285F4"
  },
  {
    "id": 2264,
    "extinto": "DONZINO ROLANDO MARTIN",
    "sector": "AZUL",
    "lote": "70",
    "nro": "30",
    "latitud": -31.56724008,
    "longitud": -63.51666625,
    "color_sector": "#4285F4"
  },
  {
    "id": 2265,
    "extinto": "WOLOWICZ LUIS ROSA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "32",
    "latitud": -31.56727575,
    "longitud": -63.51670016,
    "color_sector": "#4285F4"
  },
  {
    "id": 2266,
    "extinto": "MARIA FRANCISCA DESTEFANIS",
    "sector": "AZUL",
    "lote": "70",
    "nro": "32",
    "latitud": -31.56727575,
    "longitud": -63.51670016,
    "color_sector": "#4285F4"
  },
  {
    "id": 2267,
    "extinto": "PRATTO VILMA CATALINA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "33",
    "latitud": -31.56721659,
    "longitud": -63.51666158,
    "color_sector": "#4285F4"
  },
  {
    "id": 2268,
    "extinto": "BIONDINI VICTOR HUGO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "33",
    "latitud": -31.56721659,
    "longitud": -63.51666158,
    "color_sector": "#4285F4"
  },
  {
    "id": 2269,
    "extinto": "BIONDINI TOMAS LUIS",
    "sector": "AZUL",
    "lote": "70",
    "nro": "33",
    "latitud": -31.56721659,
    "longitud": -63.51666158,
    "color_sector": "#4285F4"
  },
  {
    "id": 2270,
    "extinto": "PALACIOS MARIA ANA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "34",
    "latitud": -31.56723268,
    "longitud": -63.51667687,
    "color_sector": "#4285F4"
  },
  {
    "id": 2271,
    "extinto": "MAGDALENA BROCELLI",
    "sector": "AZUL",
    "lote": "70",
    "nro": "35",
    "latitud": -31.56725227,
    "longitud": -63.51669548,
    "color_sector": "#4285F4"
  },
  {
    "id": 2272,
    "extinto": "RICARDO LUIS CEAGLIO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "35",
    "latitud": -31.56725227,
    "longitud": -63.51669548,
    "color_sector": "#4285F4"
  },
  {
    "id": 2273,
    "extinto": "MAGDALENA BARAS DE BRUCELLI",
    "sector": "AZUL",
    "lote": "70",
    "nro": "35",
    "latitud": -31.56725227,
    "longitud": -63.51669548,
    "color_sector": "#4285F4"
  },
  {
    "id": 2274,
    "extinto": "SPIRITU BRUCELLI",
    "sector": "AZUL",
    "lote": "70",
    "nro": "35",
    "latitud": -31.56725227,
    "longitud": -63.51669548,
    "color_sector": "#4285F4"
  },
  {
    "id": 2275,
    "extinto": "LOFFLER GERMAN ADOLFO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "37",
    "latitud": -31.56720919,
    "longitud": -63.5166722,
    "color_sector": "#4285F4"
  },
  {
    "id": 2276,
    "extinto": "ALBA ROSA PALACIOS",
    "sector": "AZUL",
    "lote": "70",
    "nro": "37",
    "latitud": -31.56720919,
    "longitud": -63.5166722,
    "color_sector": "#4285F4"
  },
  {
    "id": 2277,
    "extinto": "CEAGLIO ITALO GASPAR",
    "sector": "AZUL",
    "lote": "70",
    "nro": "38",
    "latitud": -31.56722528,
    "longitud": -63.51668749,
    "color_sector": "#4285F4"
  },
  {
    "id": 2278,
    "extinto": "FONSECA ESTER",
    "sector": "AZUL",
    "lote": "70",
    "nro": "39",
    "latitud": -31.56724487,
    "longitud": -63.51670611,
    "color_sector": "#4285F4"
  },
  {
    "id": 2279,
    "extinto": "FRANCISCO JOSE CARNIEL",
    "sector": "AZUL",
    "lote": "70",
    "nro": "39",
    "latitud": -31.56724487,
    "longitud": -63.51670611,
    "color_sector": "#4285F4"
  },
  {
    "id": 2280,
    "extinto": "JOSE ROBERTO SANCHEZ",
    "sector": "AZUL",
    "lote": "71",
    "nro": "1",
    "latitud": -31.56732655,
    "longitud": -63.51667299,
    "color_sector": "#4285F4"
  },
  {
    "id": 2281,
    "extinto": "JOSE EDUARDO RAMON SILVA",
    "sector": "AZUL",
    "lote": "71",
    "nro": "2",
    "latitud": -31.56733642,
    "longitud": -63.51668039,
    "color_sector": "#4285F4"
  },
  {
    "id": 2282,
    "extinto": "GONZALEZ ADRIAN HORACIO",
    "sector": "AZUL",
    "lote": "71",
    "nro": "16",
    "latitud": -31.56736469,
    "longitud": -63.51673035,
    "color_sector": "#4285F4"
  },
  {
    "id": 2283,
    "extinto": "GONZALEZ JUAN CARLOS",
    "sector": "AZUL",
    "lote": "71",
    "nro": "16",
    "latitud": -31.56736469,
    "longitud": -63.51673035,
    "color_sector": "#4285F4"
  },
  {
    "id": 2284,
    "extinto": "OVIEDO OSVALDO OMAR",
    "sector": "AZUL",
    "lote": "71",
    "nro": "25",
    "latitud": -31.56734118,
    "longitud": -63.51674778,
    "color_sector": "#4285F4"
  },
  {
    "id": 2285,
    "extinto": "RAMONA  GLADIS  TOLEDO",
    "sector": "AZUL",
    "lote": "71",
    "nro": "25",
    "latitud": -31.56734118,
    "longitud": -63.51674778,
    "color_sector": "#4285F4"
  },
  {
    "id": 2286,
    "extinto": "ARGUELLO JUAN",
    "sector": "AZUL",
    "lote": "71",
    "nro": "31",
    "latitud": -31.56729051,
    "longitud": -63.51673859,
    "color_sector": "#4285F4"
  },
  {
    "id": 2287,
    "extinto": "ARGUELLORICARDO",
    "sector": "AZUL",
    "lote": "71",
    "nro": "31",
    "latitud": -31.56729051,
    "longitud": -63.51673859,
    "color_sector": "#4285F4"
  },
  {
    "id": 2288,
    "extinto": "HIRMA ROSA MORALES",
    "sector": "AZUL",
    "lote": "71",
    "nro": "31",
    "latitud": -31.56729051,
    "longitud": -63.51673859,
    "color_sector": "#4285F4"
  },
  {
    "id": 2289,
    "extinto": "SUSANA BEATRIZ GOMEZ",
    "sector": "AZUL",
    "lote": "71",
    "nro": "32",
    "latitud": -31.56730038,
    "longitud": -63.51674599,
    "color_sector": "#4285F4"
  },
  {
    "id": 2290,
    "extinto": "VICTOR HUGO TABORDA",
    "sector": "AZUL",
    "lote": "71",
    "nro": "34",
    "latitud": -31.56732011,
    "longitud": -63.51676078,
    "color_sector": "#4285F4"
  },
  {
    "id": 2291,
    "extinto": "RAUL ANTONIO OTERO",
    "sector": "AZUL",
    "lote": "71",
    "nro": "35",
    "latitud": -31.56732998,
    "longitud": -63.51676817,
    "color_sector": "#4285F4"
  },
  {
    "id": 2292,
    "extinto": "DONDO ELSA LUCIA",
    "sector": "AZUL",
    "lote": "72",
    "nro": "31",
    "latitud": -31.56743265,
    "longitud": -63.51683779,
    "color_sector": "#4285F4"
  },
  {
    "id": 2293,
    "extinto": "RODRIGUEZ ESCAGLIOTTI RUBEN",
    "sector": "AZUL",
    "lote": "73",
    "nro": "1",
    "latitud": -31.56756461,
    "longitud": -63.51663157,
    "color_sector": "#4285F4"
  },
  {
    "id": 2294,
    "extinto": "TRUCCO ESTEBAN CARLOS",
    "sector": "AZUL",
    "lote": "73",
    "nro": "2",
    "latitud": -31.56758397,
    "longitud": -63.51664028,
    "color_sector": "#4285F4"
  },
  {
    "id": 2295,
    "extinto": "EDA VICTORINA CHIAMBRETTO",
    "sector": "AZUL",
    "lote": "73",
    "nro": "2",
    "latitud": -31.56758397,
    "longitud": -63.51664028,
    "color_sector": "#4285F4"
  },
  {
    "id": 2296,
    "extinto": "RODRIGUEZ VARELA ISIDORO",
    "sector": "AZUL",
    "lote": "73",
    "nro": "5",
    "latitud": -31.5675604,
    "longitud": -63.51664435,
    "color_sector": "#4285F4"
  },
  {
    "id": 2297,
    "extinto": "RITA DEL VALLE RODRIGUEZ",
    "sector": "AZUL",
    "lote": "73",
    "nro": "5",
    "latitud": -31.5675604,
    "longitud": -63.51664435,
    "color_sector": "#4285F4"
  },
  {
    "id": 2298,
    "extinto": "IVILMA MARGARITA SCAGLIOTTI",
    "sector": "AZUL",
    "lote": "73",
    "nro": "5",
    "latitud": -31.5675604,
    "longitud": -63.51664435,
    "color_sector": "#4285F4"
  },
  {
    "id": 2299,
    "extinto": "ALBERTO ENRIQUE RODRIGUEZ SCAGLIOTTI",
    "sector": "AZUL",
    "lote": "73",
    "nro": "9",
    "latitud": -31.56755619,
    "longitud": -63.51665713,
    "color_sector": "#4285F4"
  },
  {
    "id": 2300,
    "extinto": "CONTRERAS CIPRIANO",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "40",
    "latitud": -31.56790357,
    "longitud": -63.51577499,
    "color_sector": "#FFD700"
  },
  {
    "id": 2301,
    "extinto": "TEJEDA LEOPOLDA",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "40",
    "latitud": -31.56790357,
    "longitud": -63.51577499,
    "color_sector": "#FFD700"
  },
  {
    "id": 2302,
    "extinto": "NICOLAS ANTONIO CONTRERAS",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "40",
    "latitud": -31.56790357,
    "longitud": -63.51577499,
    "color_sector": "#FFD700"
  },
  {
    "id": 2303,
    "extinto": "NORMA BEATRIZ CONTRERAS",
    "sector": "AMARILLO",
    "lote": "64",
    "nro": "40",
    "latitud": -31.56790357,
    "longitud": -63.51577499,
    "color_sector": "#FFD700"
  },
  {
    "id": 2304,
    "extinto": "JOSE LUIS FORMENTELLI",
    "sector": "VERDE",
    "lote": "32",
    "nro": "151",
    "latitud": -31.56721106,
    "longitud": -63.51531443,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2305,
    "extinto": "ESPERON NELIDA ESTHER",
    "sector": "VERDE",
    "lote": "32",
    "nro": "152",
    "latitud": -31.56722227,
    "longitud": -63.51531844,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2306,
    "extinto": "LUIS ERNESTO ARROÑADES",
    "sector": "VERDE",
    "lote": "32",
    "nro": "152",
    "latitud": -31.56722227,
    "longitud": -63.51531844,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2307,
    "extinto": "ROLANDO ESTER SALVADORA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "59",
    "latitud": -31.56724574,
    "longitud": -63.5153843,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2308,
    "extinto": "EMILIO JOSE PAVIATTO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "60",
    "latitud": -31.56725696,
    "longitud": -63.51538828,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2309,
    "extinto": "CUELLO OSCAR JUSTINIANO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "50",
    "latitud": -31.56740567,
    "longitud": -63.5154863,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2310,
    "extinto": "GUEVEL DORA CECILIA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "50",
    "latitud": -31.56740567,
    "longitud": -63.5154863,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2311,
    "extinto": "RAUL ALBERTO MAZZA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "50",
    "latitud": -31.56740567,
    "longitud": -63.5154863,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2312,
    "extinto": "NICHO ROCIO ORIANA",
    "sector": "VERDE",
    "lote": "37",
    "nro": "51",
    "latitud": -31.56731399,
    "longitud": -63.51545733,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2313,
    "extinto": "JOSEFA PERALTA DE MARTINEZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "53",
    "latitud": -31.56735908,
    "longitud": -63.51547803,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2314,
    "extinto": "MARIA MARTINEZ DE MEDRANO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "53",
    "latitud": -31.56735908,
    "longitud": -63.51547803,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2315,
    "extinto": "EUGENIO MARTINEZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "53",
    "latitud": -31.56735908,
    "longitud": -63.51547803,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2316,
    "extinto": "RAFAEL MEDRANO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "54",
    "latitud": -31.56737833,
    "longitud": -63.51548705,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2317,
    "extinto": "ALVAREZ FERNANDO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "55",
    "latitud": -31.56740109,
    "longitud": -63.51549891,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2318,
    "extinto": "CECILIA DEL MILAGRO ALVAREZ GHIBAUDO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "55",
    "latitud": -31.56740109,
    "longitud": -63.51549891,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2319,
    "extinto": "JUAN CARLOS LUQUE",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "26",
    "latitud": -31.5676291,
    "longitud": -63.51611797,
    "color_sector": "#FFD700"
  },
  {
    "id": 2320,
    "extinto": "LUQUE GRACIELA TERESITA",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "26",
    "latitud": -31.5676291,
    "longitud": -63.51611797,
    "color_sector": "#FFD700"
  },
  {
    "id": 2321,
    "extinto": "AUDISIO EUGENIO",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "18",
    "latitud": -31.56763698,
    "longitud": -63.51576668,
    "color_sector": "#FFD700"
  },
  {
    "id": 2322,
    "extinto": "ESTROGUSZ MIGUEL DOMINGO",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "18",
    "latitud": -31.56763698,
    "longitud": -63.51576668,
    "color_sector": "#FFD700"
  },
  {
    "id": 2323,
    "extinto": "ESTROGUSZ MIGUEL ANGEL",
    "sector": "AMARILLO",
    "lote": "49",
    "nro": "18",
    "latitud": -31.56763698,
    "longitud": -63.51576668,
    "color_sector": "#FFD700"
  },
  {
    "id": 2324,
    "extinto": "PERALTA LILIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "110",
    "latitud": -31.56786861,
    "longitud": -63.51591779,
    "color_sector": "#FFD700"
  },
  {
    "id": 2325,
    "extinto": "ANGEL NARCISO JUAREZ",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "110",
    "latitud": -31.56786861,
    "longitud": -63.51591779,
    "color_sector": "#FFD700"
  },
  {
    "id": 2326,
    "extinto": "MARIA  DEL VALLE  PERALTA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "70",
    "latitud": -31.56658431,
    "longitud": -63.51587066,
    "color_sector": "#FF9800"
  },
  {
    "id": 2327,
    "extinto": "ANGELICA  ANTONIA  LENCINA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "98",
    "latitud": -31.56652449,
    "longitud": -63.51592254,
    "color_sector": "#FF9800"
  },
  {
    "id": 2328,
    "extinto": "SILVIA  NOEMI  RODRIGUEZ",
    "sector": "VERDE",
    "lote": "33",
    "nro": "54",
    "latitud": -31.56718963,
    "longitud": -63.51536447,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2329,
    "extinto": "HECTOR  HUGO  ROSSO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "93",
    "latitud": -31.56747514,
    "longitud": -63.51544351,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2330,
    "extinto": "MARIA  CECILIA  AUDISIO",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "9",
    "latitud": -31.56750702,
    "longitud": -63.51626454,
    "color_sector": "#FFD700"
  },
  {
    "id": 2331,
    "extinto": "OTILIA  CARMEN  PALOPITO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "75",
    "latitud": -31.56757346,
    "longitud": -63.51627284,
    "color_sector": "#FFD700"
  },
  {
    "id": 2332,
    "extinto": "JORGE  ANIBAL  ISAIA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "1",
    "latitud": -31.56686377,
    "longitud": -63.51610595,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2333,
    "extinto": "RAMON BELARMINO ROLLE",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "36",
    "latitud": -31.56691259,
    "longitud": -63.51615093,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2334,
    "extinto": "ROSA  RAMONA  OGGIONE",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "13",
    "latitud": -31.56679422,
    "longitud": -63.5158531,
    "color_sector": "#FF9800"
  },
  {
    "id": 2335,
    "extinto": "MIGUEL  OLEGARIO  LUCERO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "8",
    "latitud": -31.56657085,
    "longitud": -63.51572441,
    "color_sector": "#FF9800"
  },
  {
    "id": 2336,
    "extinto": "DIEGO  LUIS  FERREYRA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "57",
    "latitud": -31.56681051,
    "longitud": -63.515575,
    "color_sector": "#FF9800"
  },
  {
    "id": 2337,
    "extinto": "MARIA  JULIETA  CROSS",
    "sector": "VERDE",
    "lote": "28",
    "nro": "6",
    "latitud": -31.56707623,
    "longitud": -63.51495677,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2338,
    "extinto": "BERNARDO MANSILLA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "3",
    "latitud": -31.56695999,
    "longitud": -63.51525797,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2339,
    "extinto": "BENJAMIN  VACA  BONALDI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "89",
    "latitud": -31.5675468,
    "longitud": -63.51546752,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2340,
    "extinto": "RICARDO  CARMEN CARNIEL",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "18",
    "latitud": -31.56770671,
    "longitud": -63.51643961,
    "color_sector": "#FFD700"
  },
  {
    "id": 2341,
    "extinto": "TERESA  AMANDA  BONALDI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "22",
    "latitud": -31.56741353,
    "longitud": -63.51627664,
    "color_sector": "#FFD700"
  },
  {
    "id": 2342,
    "extinto": "AMELIA  SUMILDA  MANTESE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "64",
    "latitud": -31.5674582,
    "longitud": -63.51620527,
    "color_sector": "#FFD700"
  },
  {
    "id": 2343,
    "extinto": "ALFREDO  ALBERICI",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "16",
    "latitud": -31.56770929,
    "longitud": -63.51549675,
    "color_sector": "#FFD700"
  },
  {
    "id": 2344,
    "extinto": "GUSTAVO RAMON   BENET",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "39",
    "latitud": -31.56774999,
    "longitud": -63.51599805,
    "color_sector": "#FFD700"
  },
  {
    "id": 2345,
    "extinto": "BERTA  NOEMI  GIGENA",
    "sector": "AZUL",
    "lote": "70",
    "nro": "3",
    "latitud": -31.56731147,
    "longitud": -63.51661052,
    "color_sector": "#4285F4"
  },
  {
    "id": 2346,
    "extinto": "ESTHER  ROSA  RAMONA  CAVALLERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "80",
    "latitud": -31.56762586,
    "longitud": -63.51630355,
    "color_sector": "#FFD700"
  },
  {
    "id": 2347,
    "extinto": "ROBERTO  FEDERICO  PATRIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "80",
    "latitud": -31.56762586,
    "longitud": -63.51630355,
    "color_sector": "#FFD700"
  },
  {
    "id": 2348,
    "extinto": "ANA  MARIA  PATRIA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "80",
    "latitud": -31.56762586,
    "longitud": -63.51630355,
    "color_sector": "#FFD700"
  },
  {
    "id": 2349,
    "extinto": "ROQUE ANGEL PEREYRA",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "50",
    "latitud": -31.56716458,
    "longitud": -63.51646812,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2350,
    "extinto": "ANA  DOMINGA  SCARAFFIA",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "53",
    "latitud": -31.5669012,
    "longitud": -63.5163944,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2351,
    "extinto": "DIEGO  ANTONIO  SANCHEZ",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "39",
    "latitud": -31.56698528,
    "longitud": -63.51667154,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2352,
    "extinto": "IRIS ROMILDA  BOTTA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "9",
    "latitud": -31.56645378,
    "longitud": -63.51633144,
    "color_sector": "#FF9800"
  },
  {
    "id": 2353,
    "extinto": "ANTONIO  RICARDO  ALGARBE",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "20",
    "latitud": -31.5663938,
    "longitud": -63.51620761,
    "color_sector": "#FF9800"
  },
  {
    "id": 2354,
    "extinto": "RUBÃN  GERARDO  CACIORGNA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "28",
    "latitud": -31.56693429,
    "longitud": -63.51496724,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2355,
    "extinto": "PEDRO  ANIBAL  LOIS",
    "sector": "VERDE",
    "lote": "29",
    "nro": "8",
    "latitud": -31.56733034,
    "longitud": -63.51503228,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2356,
    "extinto": "MARIA  JULIA  MAIDANA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "142",
    "latitud": -31.56711016,
    "longitud": -63.51527834,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2357,
    "extinto": "N.N  PIRCHI",
    "sector": "VERDE",
    "lote": "37",
    "nro": "26",
    "latitud": -31.56733487,
    "longitud": -63.51539335,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2358,
    "extinto": "ROGER  EUFRACIO  LUQUE",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "15",
    "latitud": -31.56767984,
    "longitud": -63.51641311,
    "color_sector": "#FFD700"
  },
  {
    "id": 2359,
    "extinto": "ELENA  VELIA  ANA  CAVALLERA",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "15",
    "latitud": -31.56767984,
    "longitud": -63.51641311,
    "color_sector": "#FFD700"
  },
  {
    "id": 2360,
    "extinto": "ELSA  ENRIQUETA  CAVALIERI",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "30",
    "latitud": -31.5674999,
    "longitud": -63.51631932,
    "color_sector": "#FFD700"
  },
  {
    "id": 2361,
    "extinto": "HAYDEE  LUISA  RAMONA  MOSSELLO",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "123",
    "latitud": -31.56771981,
    "longitud": -63.51618005,
    "color_sector": "#FFD700"
  },
  {
    "id": 2362,
    "extinto": "JUAN CARLOS  RE",
    "sector": "AZUL",
    "lote": "71",
    "nro": "36",
    "latitud": -31.56733985,
    "longitud": -63.51677557,
    "color_sector": "#4285F4"
  },
  {
    "id": 2363,
    "extinto": "EDUARDO  MAXIMILIANO  PRESSON",
    "sector": "VERDE",
    "lote": "38",
    "nro": "123",
    "latitud": -31.56749852,
    "longitud": -63.51551733,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2364,
    "extinto": "OSCAR  RAMON  TORAZZA",
    "sector": "NARANJA",
    "lote": "20",
    "nro": "17",
    "latitud": -31.56680538,
    "longitud": -63.51587769,
    "color_sector": "#FF9800"
  },
  {
    "id": 2365,
    "extinto": "MARTA  GRACIELA  FLORES",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "54",
    "latitud": -31.5669123,
    "longitud": -63.51639882,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2366,
    "extinto": "ALDO  RAMON  JUAREZ",
    "sector": "VERDE",
    "lote": "37",
    "nro": "15",
    "latitud": -31.56743766,
    "longitud": -63.51539803,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2367,
    "extinto": "SHEILA  CARNIEL",
    "sector": "AMARILLO",
    "lote": "58",
    "nro": "27",
    "latitud": -31.56789082,
    "longitud": -63.51617795,
    "color_sector": "#FFD700"
  },
  {
    "id": 2368,
    "extinto": "HERNAN  FACUNDO  BAIGORRIA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "28",
    "latitud": -31.56778498,
    "longitud": -63.51578748,
    "color_sector": "#FFD700"
  },
  {
    "id": 2369,
    "extinto": "ANTONIO ALFONSO DONALISIO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "28",
    "latitud": -31.56712971,
    "longitud": -63.51520381,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2370,
    "extinto": "HUGO  MOISES  GOMEZ",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "14",
    "latitud": -31.56750479,
    "longitud": -63.51604101,
    "color_sector": "#FFD700"
  },
  {
    "id": 2371,
    "extinto": "NELLIDA  JOSEFA  GARINO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "30",
    "latitud": -31.56724008,
    "longitud": -63.51666625,
    "color_sector": "#4285F4"
  },
  {
    "id": 2372,
    "extinto": "NESTOR  JUAN   PERASSI",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "23",
    "latitud": -31.56759802,
    "longitud": -63.51609873,
    "color_sector": "#FFD700"
  },
  {
    "id": 2373,
    "extinto": "ROSARIO  GOMEZ",
    "sector": "AMARILLO",
    "lote": "43",
    "nro": "12",
    "latitud": -31.56742337,
    "longitud": -63.51624948,
    "color_sector": "#FFD700"
  },
  {
    "id": 2374,
    "extinto": "MIRTA  ARGENTINA  CEBALLOS",
    "sector": "VERDE",
    "lote": "27",
    "nro": "16",
    "latitud": -31.56691896,
    "longitud": -63.51493119,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2375,
    "extinto": "MIGUEL  ALCIRES TABORDA",
    "sector": "VERDE",
    "lote": "34",
    "nro": "29",
    "latitud": -31.56682635,
    "longitud": -63.51526701,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2376,
    "extinto": "SARA  NIEVE  TEJEDA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "24",
    "latitud": -31.56749995,
    "longitud": -63.51611078,
    "color_sector": "#FFD700"
  },
  {
    "id": 2377,
    "extinto": "ALBA  ROSA  LUDUEÑA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "15",
    "latitud": -31.56751113,
    "longitud": -63.51529685,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2378,
    "extinto": "JOSEFINA  DEL  ROSARIO  FERNANDEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "131",
    "latitud": -31.56751782,
    "longitud": -63.51554238,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2379,
    "extinto": "BLANCA  LUCIA RAMIREZ",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "47",
    "latitud": -31.56749894,
    "longitud": -63.51620204,
    "color_sector": "#FFD700"
  },
  {
    "id": 2380,
    "extinto": "MARCELA  ALEJANDRA  LAZARTE",
    "sector": "VERDE",
    "lote": "38",
    "nro": "85",
    "latitud": -31.56746134,
    "longitud": -63.51542082,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2381,
    "extinto": "ROSA  BEATRIZ  GONZALEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "24",
    "latitud": -31.56754934,
    "longitud": -63.51533344,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2382,
    "extinto": "MONICA DEL LUJAN  NAVARRO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "8",
    "latitud": -31.56758702,
    "longitud": -63.5160645,
    "color_sector": "#FFD700"
  },
  {
    "id": 2383,
    "extinto": "ROMELIA  ESTER  JUAREZ",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "88",
    "latitud": -31.5678755,
    "longitud": -63.51589161,
    "color_sector": "#FFD700"
  },
  {
    "id": 2384,
    "extinto": "ADA CLIDA ARMENDIA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "50",
    "latitud": -31.56706799,
    "longitud": -63.51621265,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2385,
    "extinto": "FERNANDO AGUSTIN RAMALLO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "47",
    "latitud": -31.56749894,
    "longitud": -63.51620204,
    "color_sector": "#FFD700"
  },
  {
    "id": 2386,
    "extinto": "MARIA DELIA TISERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "68",
    "latitud": -31.56690823,
    "longitud": -63.51507027,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2387,
    "extinto": "CARMEN  LOLA  TISSERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2388,
    "extinto": "HECTOR  EUSEBIO  TISERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2389,
    "extinto": "IMAIS  TISERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2390,
    "extinto": "MICAELA  AIDA  FERNANDEZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2391,
    "extinto": "ANGELA  ROSARIO  BROCHERO",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2392,
    "extinto": "ALEJO  TISSERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2393,
    "extinto": "HONORIO  ELPIDIO  TISERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2394,
    "extinto": "MICAELA  AIDA  FERNANDEZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2395,
    "extinto": "FEDERICO  HECTOR  TISERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2396,
    "extinto": "CARLOS  NICOLAS  TISSERA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "69",
    "latitud": -31.56691947,
    "longitud": -63.51507415,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2397,
    "extinto": "PIA MERCEDES RAMIRES",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "35",
    "latitud": -31.5675941,
    "longitud": -63.51622482,
    "color_sector": "#FFD700"
  },
  {
    "id": 2398,
    "extinto": "VICTOR  JOSE  RIVAROLA",
    "sector": "VERDE",
    "lote": "30",
    "nro": "47",
    "latitud": -31.56729621,
    "longitud": -63.51517694,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2399,
    "extinto": "MARCELO  SEGUNDO  GALLARDO",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "27",
    "latitud": -31.56786662,
    "longitud": -63.51633721,
    "color_sector": "#FFD700"
  },
  {
    "id": 2400,
    "extinto": "ALBERTO ADEMAR ALBORNOZ",
    "sector": "VERDE",
    "lote": "27",
    "nro": "18",
    "latitud": -31.56694145,
    "longitud": -63.51493895,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2401,
    "extinto": "RAMONA CLELIA RIOS",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "68",
    "latitud": -31.56750011,
    "longitud": -63.51622984,
    "color_sector": "#FFD700"
  },
  {
    "id": 2402,
    "extinto": "ESTEBAN LUIS DELOGU",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "109",
    "latitud": -31.56784879,
    "longitud": -63.51591067,
    "color_sector": "#FFD700"
  },
  {
    "id": 2403,
    "extinto": "FEDERICO MARCATO",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "30",
    "latitud": -31.56699405,
    "longitud": -63.51664566,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2404,
    "extinto": "NELIDA ALBINA MARIA MOCHI",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "47",
    "latitud": -31.56690883,
    "longitud": -63.51552234,
    "color_sector": "#FF9800"
  },
  {
    "id": 2405,
    "extinto": "ANTONELLA SOLEDAD ARGUELLO VILLALBA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "47",
    "latitud": -31.56662103,
    "longitud": -63.5158256,
    "color_sector": "#FF9800"
  },
  {
    "id": 2406,
    "extinto": "MAFALDA  NILDA  DIAZ",
    "sector": "VERDE",
    "lote": "33",
    "nro": "40",
    "latitud": -31.56703254,
    "longitud": -63.51530893,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2407,
    "extinto": "JORGE  MATIAS  BUSSANO",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "40",
    "latitud": -31.56760097,
    "longitud": -63.51640782,
    "color_sector": "#FFD700"
  },
  {
    "id": 2408,
    "extinto": "CELIA  DOMINGA  BELLA",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "1",
    "latitud": -31.56675267,
    "longitud": -63.51529472,
    "color_sector": "#FF9800"
  },
  {
    "id": 2409,
    "extinto": "EDUARDO  JOSE  BIAGETTI",
    "sector": "NARANJA",
    "lote": "17",
    "nro": "1",
    "latitud": -31.56675267,
    "longitud": -63.51529472,
    "color_sector": "#FF9800"
  },
  {
    "id": 2410,
    "extinto": "MARIA  RAQUEL  NANI",
    "sector": "VERDE",
    "lote": "27",
    "nro": "20",
    "latitud": -31.56696394,
    "longitud": -63.51494671,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2411,
    "extinto": "STELLA  NORA  CARRIZO",
    "sector": "VERDE",
    "lote": "28",
    "nro": "7",
    "latitud": -31.56708758,
    "longitud": -63.51496017,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2412,
    "extinto": "EUFEMIA NICOLASA  LOPEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "118",
    "latitud": -31.56754638,
    "longitud": -63.51552741,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2413,
    "extinto": "MARCELO  GUSTAVO  CARANDINO",
    "sector": "VERDE",
    "lote": "40",
    "nro": "11",
    "latitud": -31.56757726,
    "longitud": -63.51558459,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2414,
    "extinto": "OSCAR  ELADIO  BETTEGA",
    "sector": "VIOLETA",
    "lote": "6",
    "nro": "28",
    "latitud": -31.56697082,
    "longitud": -63.51664942,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2415,
    "extinto": "HECTOR  ARMANDO  VICARIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "168",
    "latitud": -31.56657924,
    "longitud": -63.51609616,
    "color_sector": "#FF9800"
  },
  {
    "id": 2416,
    "extinto": "ZULEMA  MARGARITA  TEJEDA",
    "sector": "NARANJA",
    "lote": "8",
    "nro": "12",
    "latitud": -31.56638077,
    "longitud": -63.51632334,
    "color_sector": "#FF9800"
  },
  {
    "id": 2417,
    "extinto": "GUEVARA ROQUE MARCELINO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "132",
    "latitud": -31.56753672,
    "longitud": -63.51555236,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2418,
    "extinto": "JOSEFA AIDA DE SAN RAMON GUEVARA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "132",
    "latitud": -31.56753672,
    "longitud": -63.51555236,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2419,
    "extinto": "SERGIO  LUIS  ORTEGA",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "24",
    "latitud": -31.56717127,
    "longitud": -63.51644519,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2420,
    "extinto": "JUAN CARLOS FERNANDEZ",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "35",
    "latitud": -31.56668125,
    "longitud": -63.51613737,
    "color_sector": "#FF9800"
  },
  {
    "id": 2421,
    "extinto": "IRIS  ESTER  BRUCELLI",
    "sector": "VERDE",
    "lote": "34",
    "nro": "32",
    "latitud": -31.56685484,
    "longitud": -63.5152911,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2422,
    "extinto": "LUIS  ROQUE  GUEVARA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "132",
    "latitud": -31.56753672,
    "longitud": -63.51555236,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2423,
    "extinto": "ROMULO  PASCUAL  PRATTO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "29",
    "latitud": -31.56722396,
    "longitud": -63.51665093,
    "color_sector": "#4285F4"
  },
  {
    "id": 2424,
    "extinto": "MIRTA  TERESA  HUERTA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "64",
    "latitud": -31.56688226,
    "longitud": -63.51617004,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2425,
    "extinto": "DORLIZA  ESTHER  DOMINGUEZ",
    "sector": "VERDE",
    "lote": "38",
    "nro": "62",
    "latitud": -31.56758502,
    "longitud": -63.51542759,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2426,
    "extinto": "ANTONELLA  ANAHI  MOLINARI",
    "sector": "VERDE",
    "lote": "40",
    "nro": "2",
    "latitud": -31.56762314,
    "longitud": -63.51553557,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2427,
    "extinto": "GABRIELA  MARICEL  REYNOSO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "10",
    "latitud": -31.56744223,
    "longitud": -63.51538542,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2428,
    "extinto": "MARTA  FELISA  DARIOSSI",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "31",
    "latitud": -31.56755218,
    "longitud": -63.51620025,
    "color_sector": "#FFD700"
  },
  {
    "id": 2429,
    "extinto": "GIORGINA  VANESA  ALANIS",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "12",
    "latitud": -31.5678154,
    "longitud": -63.5162403,
    "color_sector": "#FFD700"
  },
  {
    "id": 2430,
    "extinto": "MARIA  LUISA  VEGA",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "56",
    "latitud": -31.56679931,
    "longitud": -63.51557096,
    "color_sector": "#FF9800"
  },
  {
    "id": 2431,
    "extinto": "ROSA  ELVIRA  PORPORATO",
    "sector": "VERDE",
    "lote": "28",
    "nro": "5",
    "latitud": -31.56706487,
    "longitud": -63.51495338,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2432,
    "extinto": "LUIS  DAVID  RECH",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "176",
    "latitud": -31.56648432,
    "longitud": -63.51609426,
    "color_sector": "#FF9800"
  },
  {
    "id": 2433,
    "extinto": "DESIDERIA OLGA  LUQUE",
    "sector": "NARANJA",
    "lote": "26",
    "nro": "41",
    "latitud": -31.56680543,
    "longitud": -63.51554781,
    "color_sector": "#FF9800"
  },
  {
    "id": 2434,
    "extinto": "OMAR  RITO  LUCARELLI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "38",
    "latitud": -31.56701009,
    "longitud": -63.515301,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2435,
    "extinto": "FATIMA BUD",
    "sector": "VIOLETA",
    "lote": "1",
    "nro": "71",
    "latitud": -31.56666243,
    "longitud": -63.51665412,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2436,
    "extinto": "MERCEDES  YOLANDA  HERNANDEZ",
    "sector": "NARANJA",
    "lote": "10",
    "nro": "2",
    "latitud": -31.56642143,
    "longitud": -63.51608867,
    "color_sector": "#FF9800"
  },
  {
    "id": 2437,
    "extinto": "JOSE  LUIS  FRONTERA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "10",
    "latitud": -31.56657311,
    "longitud": -63.51636102,
    "color_sector": "#FF9800"
  },
  {
    "id": 2438,
    "extinto": "MARIA  ISABEL  MOLINA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "10",
    "latitud": -31.56657311,
    "longitud": -63.51636102,
    "color_sector": "#FF9800"
  },
  {
    "id": 2439,
    "extinto": "RAMON  JUAN  FRONTERA",
    "sector": "NARANJA",
    "lote": "22",
    "nro": "10",
    "latitud": -31.56657311,
    "longitud": -63.51636102,
    "color_sector": "#FF9800"
  },
  {
    "id": 2440,
    "extinto": "NORMA  AMIRA  MONTENEGRO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "10",
    "latitud": -31.56661522,
    "longitud": -63.51573857,
    "color_sector": "#FF9800"
  },
  {
    "id": 2441,
    "extinto": "N.N SANCHEZ-CATALANO",
    "sector": "VERDE",
    "lote": "27",
    "nro": "36",
    "latitud": -31.56690593,
    "longitud": -63.51498271,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2442,
    "extinto": "ANALIA  DANIELA  VIRGOLINI",
    "sector": "VERDE",
    "lote": "30",
    "nro": "66",
    "latitud": -31.56728117,
    "longitud": -63.51519852,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2443,
    "extinto": "MARTHA  BEATRIZ  GIRAUDO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "56",
    "latitud": -31.56761286,
    "longitud": -63.51542726,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2444,
    "extinto": "PEDRO  NEMESIO  RAMALLO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "107",
    "latitud": -31.56746518,
    "longitud": -63.5154683,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2445,
    "extinto": "CESAR  ADRIAN  RAMALLO",
    "sector": "VERDE",
    "lote": "38",
    "nro": "107",
    "latitud": -31.56746518,
    "longitud": -63.5154683,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2446,
    "extinto": "NINFA  NELLI  LOPEZ",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "38",
    "latitud": -31.56773848,
    "longitud": -63.51599544,
    "color_sector": "#FFD700"
  },
  {
    "id": 2447,
    "extinto": "JULIO  EDUARDO  VOCOS",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "103",
    "latitud": -31.56777374,
    "longitud": -63.5161429,
    "color_sector": "#FFD700"
  },
  {
    "id": 2448,
    "extinto": "DOMINGO  ANGEL  ZALAZAR",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "48",
    "latitud": -31.56773843,
    "longitud": -63.51579942,
    "color_sector": "#FFD700"
  },
  {
    "id": 2449,
    "extinto": "EMILIA  FUNES",
    "sector": "AZUL",
    "lote": "71",
    "nro": "32",
    "latitud": -31.56730038,
    "longitud": -63.51674599,
    "color_sector": "#4285F4"
  },
  {
    "id": 2450,
    "extinto": "NILDO  ALBERTO  LEIRIA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "118",
    "latitud": -31.56655959,
    "longitud": -63.51597633,
    "color_sector": "#FF9800"
  },
  {
    "id": 2451,
    "extinto": "JUAN  CAON",
    "sector": "AZUL",
    "lote": "70",
    "nro": "40",
    "latitud": -31.56726095,
    "longitud": -63.5167214,
    "color_sector": "#4285F4"
  },
  {
    "id": 2452,
    "extinto": "PALMIRA  FRANCISCA  MARCATO",
    "sector": "AZUL",
    "lote": "70",
    "nro": "40",
    "latitud": -31.56726095,
    "longitud": -63.5167214,
    "color_sector": "#4285F4"
  },
  {
    "id": 2453,
    "extinto": "AVRIL  RIVARA TORAZZA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "40",
    "latitud": -31.56766721,
    "longitud": -63.51620997,
    "color_sector": "#FFD700"
  },
  {
    "id": 2454,
    "extinto": "YOLANDA  URAN",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "20",
    "latitud": -31.56707467,
    "longitud": -63.51618971,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2455,
    "extinto": "YOLANDA BEATRIZ RUFINI",
    "sector": "VIOLETA",
    "lote": "4",
    "nro": "101",
    "latitud": -31.56713864,
    "longitud": -63.51651455,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2456,
    "extinto": "JOSE  ALBERTO  CARABANTE",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "3",
    "latitud": -31.56648827,
    "longitud": -63.51634943,
    "color_sector": "#FF9800"
  },
  {
    "id": 2457,
    "extinto": "HILDA  LEONOR  PAVON",
    "sector": "NARANJA",
    "lote": "7",
    "nro": "3",
    "latitud": -31.56648827,
    "longitud": -63.51634943,
    "color_sector": "#FF9800"
  },
  {
    "id": 2458,
    "extinto": "LILLIANA  DEL  VALLE  SAQUI",
    "sector": "NARANJA",
    "lote": "21",
    "nro": "11",
    "latitud": -31.56672199,
    "longitud": -63.5160387,
    "color_sector": "#FF9800"
  },
  {
    "id": 2459,
    "extinto": "IRENE IMELDA BUSTOS",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "19",
    "latitud": -31.56654466,
    "longitud": -63.51574444,
    "color_sector": "#FF9800"
  },
  {
    "id": 2460,
    "extinto": "ANA MARIA PEIRONE",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "57",
    "latitud": -31.56657049,
    "longitud": -63.51583786,
    "color_sector": "#FF9800"
  },
  {
    "id": 2461,
    "extinto": "DIEGO  EZEQUIEL  CELIZ",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "83",
    "latitud": -31.56660249,
    "longitud": -63.51590485,
    "color_sector": "#FF9800"
  },
  {
    "id": 2462,
    "extinto": "KATHERINA MELINE PEREYRA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "142",
    "latitud": -31.56654723,
    "longitud": -63.51602917,
    "color_sector": "#FF9800"
  },
  {
    "id": 2463,
    "extinto": "MARTA  LILIANA  AMBROGIO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "182",
    "latitud": -31.56648123,
    "longitud": -63.51610747,
    "color_sector": "#FF9800"
  },
  {
    "id": 2464,
    "extinto": "NORMA  INES  ABREGO",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "184",
    "latitud": -31.5665256,
    "longitud": -63.51612163,
    "color_sector": "#FF9800"
  },
  {
    "id": 2465,
    "extinto": "AIDA  ADHELMA  ARREGUI",
    "sector": "VERDE",
    "lote": "27",
    "nro": "32",
    "latitud": -31.56686096,
    "longitud": -63.51496719,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2466,
    "extinto": "NN ARCE",
    "sector": "VERDE",
    "lote": "30",
    "nro": "80",
    "latitud": -31.56744296,
    "longitud": -63.51523078,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2467,
    "extinto": "ALFREDO  EDGARDO  GIACOSSA",
    "sector": "VERDE",
    "lote": "31",
    "nro": "132",
    "latitud": -31.56765681,
    "longitud": -63.51527435,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2468,
    "extinto": "HECTOR  JOSE  GIACOSSA",
    "sector": "VERDE",
    "lote": "31",
    "nro": "132",
    "latitud": -31.56765681,
    "longitud": -63.51527435,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2469,
    "extinto": "LIDIA  BIENVENIDA  ORELLANO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "78",
    "latitud": -31.56682477,
    "longitud": -63.51515093,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2470,
    "extinto": "JORGE LUIS ESPOSITO",
    "sector": "VERDE",
    "lote": "32",
    "nro": "146",
    "latitud": -31.56715501,
    "longitud": -63.51529438,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2471,
    "extinto": "ALBINA DEL CARMEN MONASTERIO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "4",
    "latitud": -31.56767479,
    "longitud": -63.51539777,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2472,
    "extinto": "ANDREA CECILIA GRASSO",
    "sector": "VERDE",
    "lote": "39",
    "nro": "15",
    "latitud": -31.56762796,
    "longitud": -63.51546369,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2473,
    "extinto": "RAUL OMAR ACEVEDO",
    "sector": "AMARILLO",
    "lote": "41",
    "nro": "17",
    "latitud": -31.56769775,
    "longitud": -63.51643077,
    "color_sector": "#FFD700"
  },
  {
    "id": 2474,
    "extinto": "DILIMO ALBERTO TABORDA",
    "sector": "AMARILLO",
    "lote": "42",
    "nro": "7",
    "latitud": -31.56760123,
    "longitud": -63.51631971,
    "color_sector": "#FFD700"
  },
  {
    "id": 2475,
    "extinto": "ROBERTO  EFRAIN  TABORDA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "16",
    "latitud": -31.56761388,
    "longitud": -63.51620931,
    "color_sector": "#FFD700"
  },
  {
    "id": 2476,
    "extinto": "MARTA OFELIA VALE",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "65",
    "latitud": -31.56746868,
    "longitud": -63.51621141,
    "color_sector": "#FFD700"
  },
  {
    "id": 2477,
    "extinto": "JOAQUIN ANDRES PAILLER",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "11",
    "latitud": -31.56758252,
    "longitud": -63.51613257,
    "color_sector": "#FFD700"
  },
  {
    "id": 2478,
    "extinto": "MATEO GALOPPO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "31",
    "latitud": -31.56757313,
    "longitud": -63.51615418,
    "color_sector": "#FFD700"
  },
  {
    "id": 2479,
    "extinto": "DANIEL  ALFREDO CARO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "37",
    "latitud": -31.56763585,
    "longitud": -63.51619137,
    "color_sector": "#FFD700"
  },
  {
    "id": 2480,
    "extinto": "ERMELINDA  LEONOR  LOZANO",
    "sector": "AMARILLO",
    "lote": "57",
    "nro": "27",
    "latitud": -31.56791743,
    "longitud": -63.51602716,
    "color_sector": "#FFD700"
  },
  {
    "id": 2481,
    "extinto": "SEGUNDO JOAQUIN GALLARDO",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "27",
    "latitud": -31.56786662,
    "longitud": -63.51633721,
    "color_sector": "#FFD700"
  },
  {
    "id": 2482,
    "extinto": "MARIA DELIA VACA",
    "sector": "AMARILLO",
    "lote": "59",
    "nro": "27",
    "latitud": -31.56786662,
    "longitud": -63.51633721,
    "color_sector": "#FFD700"
  },
  {
    "id": 2483,
    "extinto": "LAUTARO  ARMANINI",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "20",
    "latitud": -31.56776512,
    "longitud": -63.51625205,
    "color_sector": "#FFD700"
  },
  {
    "id": 2484,
    "extinto": "RITA  ELIZABETH  HERRERA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "30",
    "latitud": -31.56773674,
    "longitud": -63.51627488,
    "color_sector": "#FFD700"
  },
  {
    "id": 2485,
    "extinto": "SANTIAGO SILVESTRE GARDA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "37",
    "latitud": -31.56767403,
    "longitud": -63.51628879,
    "color_sector": "#FFD700"
  },
  {
    "id": 2486,
    "extinto": "EDWIN DARIO  BERTONI",
    "sector": "AMARILLO",
    "lote": "62",
    "nro": "73",
    "latitud": -31.56771342,
    "longitud": -63.51607453,
    "color_sector": "#FFD700"
  },
  {
    "id": 2487,
    "extinto": "MARIA INES LOZANO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "94",
    "latitud": -31.5677643,
    "longitud": -63.51586601,
    "color_sector": "#FFD700"
  },
  {
    "id": 2488,
    "extinto": "JOSE  ORFEO  GOMEZ",
    "sector": "AZUL",
    "lote": "71",
    "nro": "32",
    "latitud": -31.56730038,
    "longitud": -63.51674599,
    "color_sector": "#4285F4"
  },
  {
    "id": 2489,
    "extinto": "LIDIA ROSA SANTORO",
    "sector": "VERDE",
    "lote": "28",
    "nro": "8",
    "latitud": -31.56709894,
    "longitud": -63.51496356,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2490,
    "extinto": "MARIA  SUNILDA  GIGENA",
    "sector": "VERDE",
    "lote": "35",
    "nro": "14",
    "latitud": -31.5670412,
    "longitud": -63.51545008,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2491,
    "extinto": "SERGIO JAVIER ARRIETA",
    "sector": "AMARILLO",
    "lote": "61",
    "nro": "43",
    "latitud": -31.56774269,
    "longitud": -63.51630665,
    "color_sector": "#FFD700"
  },
  {
    "id": 2492,
    "extinto": "GLADIS  MARIA  BUTTIGLIERO",
    "sector": "AZUL",
    "lote": "71",
    "nro": "26",
    "latitud": -31.56735105,
    "longitud": -63.51675518,
    "color_sector": "#4285F4"
  },
  {
    "id": 2493,
    "extinto": "JUAN  JOSE  CALDERON",
    "sector": "VERDE",
    "lote": "27",
    "nro": "58",
    "latitud": -31.56691538,
    "longitud": -63.51504199,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2494,
    "extinto": "IRENE  JOSEFA  DANIELE",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "7",
    "latitud": -31.5675407,
    "longitud": -63.51610778,
    "color_sector": "#FFD700"
  },
  {
    "id": 2495,
    "extinto": "JORGE  RAMON  ESPAÑON",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "31",
    "latitud": -31.56763931,
    "longitud": -63.51566746,
    "color_sector": "#FFD700"
  },
  {
    "id": 2496,
    "extinto": "CARLOS  HORACIO  FERREYRA",
    "sector": "NARANJA",
    "lote": "9",
    "nro": "13",
    "latitud": -31.56654364,
    "longitud": -63.51628435,
    "color_sector": "#FF9800"
  },
  {
    "id": 2497,
    "extinto": "OSVALDO  PABLO  CRAVERO",
    "sector": "VERDE",
    "lote": "33",
    "nro": "15",
    "latitud": -31.56709465,
    "longitud": -63.51530558,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2498,
    "extinto": "MARTA  BEATRIZ  NAVARRO",
    "sector": "VERDE",
    "lote": "37",
    "nro": "18",
    "latitud": -31.56738966,
    "longitud": -63.51538925,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2499,
    "extinto": "MARIA  EULALIA  MACHADO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "96",
    "latitud": -31.56780827,
    "longitud": -63.5158818,
    "color_sector": "#FFD700"
  },
  {
    "id": 2500,
    "extinto": "VICTOR  JUAN  GOLDI",
    "sector": "VERDE",
    "lote": "38",
    "nro": "42",
    "latitud": -31.56762252,
    "longitud": -63.5154023,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2501,
    "extinto": "GERARDO  RAUL  BETTEGA",
    "sector": "VERDE",
    "lote": "38",
    "nro": "63",
    "latitud": -31.56760803,
    "longitud": -63.51543974,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2502,
    "extinto": "ELSA CONSEPCION  ORELLANO",
    "sector": "AMARILLO",
    "lote": "46",
    "nro": "5",
    "latitud": -31.56755594,
    "longitud": -63.51604526,
    "color_sector": "#FFD700"
  },
  {
    "id": 2503,
    "extinto": "SARA  MARGARITA TISERA",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "22",
    "latitud": -31.56765443,
    "longitud": -63.51563037,
    "color_sector": "#FFD700"
  },
  {
    "id": 2504,
    "extinto": "MARTA JOSEFA TAMAGNINI",
    "sector": "VERDE",
    "lote": "33",
    "nro": "6",
    "latitud": -31.56699366,
    "longitud": -63.51526987,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2505,
    "extinto": "JORGE VICTOR UTRERA",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "28",
    "latitud": -31.56752075,
    "longitud": -63.51618183,
    "color_sector": "#FFD700"
  },
  {
    "id": 2506,
    "extinto": "JOSE  LUIS  BUSTOS",
    "sector": "NARANJA",
    "lote": "11",
    "nro": "7",
    "latitud": -31.5664409,
    "longitud": -63.51591577,
    "color_sector": "#FF9800"
  },
  {
    "id": 2507,
    "extinto": "OSVALDO  NEMESIO DEL VALLE SPRING",
    "sector": "VERDE",
    "lote": "32",
    "nro": "52",
    "latitud": -31.56696669,
    "longitud": -63.51517084,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2508,
    "extinto": "DIEGO  NARCISO  GOROSITO",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "13",
    "latitud": -31.56771401,
    "longitud": -63.51548422,
    "color_sector": "#FFD700"
  },
  {
    "id": 2509,
    "extinto": "JUAN  DOMINGO  TISERA",
    "sector": "NARANJA",
    "lote": "23",
    "nro": "172",
    "latitud": -31.56653178,
    "longitud": -63.51609521,
    "color_sector": "#FF9800"
  },
  {
    "id": 2510,
    "extinto": "SIMON  ENRIQUE  HUZULIAK",
    "sector": "VERDE",
    "lote": "38",
    "nro": "130",
    "latitud": -31.56749354,
    "longitud": -63.51552973,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2511,
    "extinto": "EDIT  ANGELA DEL ROSARIO  MUSSO",
    "sector": "AMARILLO",
    "lote": "50",
    "nro": "30",
    "latitud": -31.56768588,
    "longitud": -63.51567818,
    "color_sector": "#FFD700"
  },
  {
    "id": 2512,
    "extinto": "ROQUE  RAIMUNDO  CARRIZO",
    "sector": "AMARILLO",
    "lote": "51",
    "nro": "22",
    "latitud": -31.56769984,
    "longitud": -63.51552182,
    "color_sector": "#FFD700"
  },
  {
    "id": 2513,
    "extinto": "OSMAR BAUTISTA  CRETTINO",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "18",
    "latitud": -31.56781256,
    "longitud": -63.51578306,
    "color_sector": "#FFD700"
  },
  {
    "id": 2514,
    "extinto": "HUGO  ALBERTO  VAUDAGNA",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "21",
    "latitud": -31.56787635,
    "longitud": -63.51580596,
    "color_sector": "#FFD700"
  },
  {
    "id": 2515,
    "extinto": "DORA  BEATRIZ  CARMONA",
    "sector": "VIOLETA",
    "lote": "1",
    "nro": "75",
    "latitud": -31.56670804,
    "longitud": -63.51666685,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2516,
    "extinto": "LIDIA  ESTHER  FERREYRA",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "15",
    "latitud": -31.56701917,
    "longitud": -63.51616767,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2517,
    "extinto": "DOMINGO  VICTOR  ROSSO",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "63",
    "latitud": -31.56687116,
    "longitud": -63.51616563,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2518,
    "extinto": "MARIA MARGARITA GUZMAN",
    "sector": "VERDE",
    "lote": "38",
    "nro": "133",
    "latitud": -31.56755973,
    "longitud": -63.51556451,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2519,
    "extinto": "PASCUAL RAMON BARONE",
    "sector": "VIOLETA",
    "lote": "3",
    "nro": "19",
    "latitud": -31.56706357,
    "longitud": -63.5161853,
    "color_sector": "#9C27B0"
  },
  {
    "id": 2520,
    "extinto": "ANA MARIA LLAMAS DE MADARIAGA",
    "sector": "NARANJA",
    "lote": "13",
    "nro": "16",
    "latitud": -31.56651729,
    "longitud": -63.51563674,
    "color_sector": "#FF9800"
  },
  {
    "id": 2521,
    "extinto": "ANGELA VALENTINA LUQUE",
    "sector": "VERDE",
    "lote": "30",
    "nro": "77",
    "latitud": -31.56740829,
    "longitud": -63.51522387,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2522,
    "extinto": "JUAN MANUEL SUBIZAR",
    "sector": "VERDE",
    "lote": "31",
    "nro": "116",
    "latitud": -31.56747227,
    "longitud": -63.51523503,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2523,
    "extinto": "CLARINDA ROSA PERALTA",
    "sector": "VERDE",
    "lote": "33",
    "nro": "9",
    "latitud": -31.56702732,
    "longitud": -63.51528178,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2524,
    "extinto": "MARIA ANA CEAGLIO",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "16",
    "latitud": -31.56763479,
    "longitud": -63.51616357,
    "color_sector": "#FFD700"
  },
  {
    "id": 2525,
    "extinto": "NAVARRO RAMON ELOY",
    "sector": "VERDE",
    "lote": "27",
    "nro": "71",
    "latitud": -31.56682364,
    "longitud": -63.51506635,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2526,
    "extinto": "NAVARRO MARIA CRISTINA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "71",
    "latitud": -31.56682364,
    "longitud": -63.51506635,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2527,
    "extinto": "GIACOMINO OFELIA ORFINA",
    "sector": "VERDE",
    "lote": "27",
    "nro": "71",
    "latitud": -31.56682364,
    "longitud": -63.51506635,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2528,
    "extinto": "N - N - SARMIENTO - CARRA",
    "sector": "VERDE",
    "lote": "32",
    "nro": "1",
    "latitud": -31.56682703,
    "longitud": -63.51509556,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2529,
    "extinto": "LIVIA DEL CARMEN GOMEZ",
    "sector": "VERDE",
    "lote": "33",
    "nro": "17",
    "latitud": -31.56711709,
    "longitud": -63.51531351,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2530,
    "extinto": "ARIEL ALBERTO HERMANN",
    "sector": "VERDE",
    "lote": "37",
    "nro": "32",
    "latitud": -31.56735008,
    "longitud": -63.51541477,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2531,
    "extinto": "RAUL JORGE ARREDONDO",
    "sector": "NARANJA",
    "lote": "18",
    "nro": "23",
    "latitud": -31.56695468,
    "longitud": -63.51549463,
    "color_sector": "#FF9800"
  },
  {
    "id": 2532,
    "extinto": "OSCAR RICARDO GONZALEZ",
    "sector": "VERDE",
    "lote": "28",
    "nro": "7",
    "latitud": -31.56708758,
    "longitud": -63.51496017,
    "color_sector": "#4CAF50"
  },
  {
    "id": 2533,
    "extinto": "NELIDA GLORIA CARO",
    "sector": "AMARILLO",
    "lote": "44",
    "nro": "55",
    "latitud": -31.56758277,
    "longitud": -63.51625118,
    "color_sector": "#FFD700"
  },
  {
    "id": 2534,
    "extinto": "TERESA CATALINA SALA",
    "sector": "AMARILLO",
    "lote": "45",
    "nro": "34",
    "latitud": -31.56760449,
    "longitud": -63.51617277,
    "color_sector": "#FFD700"
  },
  {
    "id": 2535,
    "extinto": "JUAN DE DIOS JUAREZ",
    "sector": "AMARILLO",
    "lote": "63",
    "nro": "108",
    "latitud": -31.56782465,
    "longitud": -63.51590201,
    "color_sector": "#FFD700"
  },
  {
    "id": 2536,
    "extinto": "CARLOS ALBERTO GIGENA",
    "sector": "AMARILLO",
    "lote": "65",
    "nro": "3",
    "latitud": -31.56795393,
    "longitud": -63.51545462,
    "color_sector": "#FFD700"
  },
  {
    "id": 2537,
    "extinto": "CLAUDIA ALEJANDRA MARTELLOTTO",
    "sector": "AZUL",
    "lote": "69",
    "nro": "22",
    "latitud": -31.56748682,
    "longitud": -63.51661633,
    "color_sector": "#4285F4"
  },
  {
    "id": 2538,
    "extinto": "MARIA ELENA PEREZ",
    "sector": "AZUL",
    "lote": "70",
    "nro": "14",
    "latitud": -31.56726968,
    "longitud": -63.51662376,
    "color_sector": "#4285F4"
  }
];

// Busqueda por texto (fallback local)
function buscarParcelas(texto) {
    if (!texto || texto.trim() === '') return parcelas;
    const lower = texto.toLowerCase();
    return parcelas.filter(p =>
        (p.extinto && p.extinto.toLowerCase().includes(lower)) ||
        (p.sector && p.sector.toLowerCase().includes(lower)) ||
        (p.lote && String(p.lote).includes(lower)) ||
        (p.nro && String(p.nro).includes(lower)) ||
        (String(p.id).includes(lower))
    );
}

// La API solo está disponible cuando la app se sirve desde un backend HTTP.
// En file:// y GitHub Pages se usa directamente el fallback local para evitar
// errores CORS y solicitudes 404 innecesarias en la consola.
function puedeUsarApi() {
    if (typeof window === 'undefined' || !window.location) return false;
    const { protocol, hostname } = window.location;
    return (protocol === 'http:' || protocol === 'https:') && !hostname.endsWith('github.io');
}

// Fetch parcelas from API, fallback a mock
async function fetchParcelas(query) {
    console.log('[Fetch] ===== fetchParcelas INICIADO =====');
    console.log('[Fetch] query:', JSON.stringify(query));

    if (!puedeUsarApi()) {
        const results = buscarParcelas(query || '');
        console.log('[Mock] Entorno estático detectado; usando datos locales:', results.length, 'registros');
        return results;
    }

    try {
        const url = query
            ? '/api/parcelas?q=' + encodeURIComponent(query)
            : '/api/parcelas';
        console.log('[Fetch] URL:', url);
        const res = await fetch(url);
        console.log('[Fetch] HTTP status:', res.status, res.statusText);
        if (!res.ok) {
            console.error('[Fetch] ❌ HTTP ERROR:', res.status, res.statusText);
        }
        const text = await res.text();
        console.log('[Fetch] Body (primeros 300 chars):', text.substring(0, 300));
        let json;
        try {
            json = JSON.parse(text);
        } catch(parseErr) {
            console.error('[Fetch] ❌ Error parseando JSON:', parseErr.message);
            console.error('[Fetch] Body recibido:', text.substring(0, 500));
            console.warn('[Mock] fetchParcelas fallback (JSON inválido)');
            return buscarParcelas(query || '');
        }
        console.log('[Fetch] Claves del JSON:', Object.keys(json));
        const data = json.data || json;
        console.log(`[Fetch] Fuente: ${json.source || 'desconocida'} | Resultados: ${Array.isArray(data) ? data.length : 'NO ES ARRAY'}`);
        console.log('[Fetch] ===== fetchParcelas OK =====');
        return data;
    } catch (err) {
        console.error('[Fetch] ❌ ERROR CATCH:', err.message);
        console.error('[Fetch] Stack:', err.stack);
        console.warn('[Mock] fetchParcelas fallback:', err.message);
        return buscarParcelas(query || '');
    }
}

// Fetch parcela by ID from API, fallback a mock
async function fetchParcelaById(id) {
    console.log('[Fetch] fetchParcelaById id:', id);

    if (!puedeUsarApi()) {
        return parcelas.find(p => String(p.id) === String(id)) || null;
    }

    try {
        const res = await fetch('/api/parcelas/' + id);
        console.log('[Fetch] Parcela by ID HTTP status:', res.status);
        if (!res.ok) {
            console.error('[Fetch] ❌ HTTP ERROR parcela:', res.status);
        }
        const json = await res.json();
        const data = json.data || json;
        console.log(`[Fetch] Parcela fuente: ${json.source || 'mock'} | ID: ${id}`);
        return data;
    } catch (err) {
        console.error('[Fetch] ❌ fetchParcelaById ERROR:', err.message);
        console.warn('[Mock] fetchParcelaById fallback:', err.message);
        return parcelas.find(p => p.id === id) || null;
    }
}
