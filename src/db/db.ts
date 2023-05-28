import {
  MarcasTelefonoType,
  Planes1PlayDBType,
  Planes2PlayAvanzadoDBType,
  Planes2PlaySimpleDBType,
  PlanesBaseType,
  PlanesNetflixDBType,
} from "../types/db";

export const Planes1Play: Array<PlanesBaseType> = [
  {
    nombre_plan: "Plan Claro S/.70",
    velocidad: 50,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 70.0,
    mb_standar: 50,
    mb_fullclaro: 70,
  },

  {
    nombre_plan: "Plan Claro S/.80",
    velocidad: 100,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 80.0,
    mb_standar: 100,
    mb_fullclaro: 200,
  },

  {
    nombre_plan: "Plan Claro S/.95",
    velocidad: 150,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 95.0,
    mb_standar: 150,
    mb_fullclaro: 300,
  },

  {
    nombre_plan: "Plan Claro S/.110",
    velocidad: 200,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 110.0,
    mb_standar: 200,
    mb_fullclaro: 400,
  },

  {
    nombre_plan: "Plan Claro S/.200",
    velocidad: 300,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 200.0,
    mb_standar: 200,
    mb_fullclaro: 400,
  },

  {
    nombre_plan: "Plan Claro S/.240",
    velocidad: 500,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 240.0,
    mb_standar: 500,
    mb_fullclaro: 1000,
  },

  {
    nombre_plan: "Plan Claro S/.440",
    velocidad: 1000,
    duracion_promo: 1,
    precio_promo: 0,
    precio_real: 440.0,
    mb_standar: 1000,
    mb_fullclaro: 2000,
  },
];

export const MarcasTelefonoDB: Array<MarcasTelefonoType> = [
  {
    name: "IPHONE",
    image_url: "https://claroperupoc.vtexassets.com/arquivos/ids/155523/4.png",
  },

  {
    name: "HONOR",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/702348/honor-x7a-silver.png",
  },
  {
    name: "HUAWEI",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/243196/1--34-.png",
  },

  {
    name: "MOTOROLA",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/987109/moto-a13-tofu-1.png?",
  },

  {
    name: "OPPO",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/843775/oppo-reno-7-uno.png",
  },

  {
    name: "SAMSUNG",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/947532/tira-retira--6-.png",
  },
  {
    name: "ETC",
    image_url: "https://claroperupoc.vtexassets.com/arquivos/ids/250532/3.png",
  },

  {
    name: "VIVO",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/250470/V21_Color.png",
  },

  {
    name: "XIAOMI",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/292774/Redmi-9A-front.png",
  },

  {
    name: "ZTE",
    image_url:
      "https://claroperupoc.vtexassets.com/arquivos/ids/1025727/V40-design-negro.png",
  },
];

export const Plan2PlayAvanzadoDb: Array<Planes2PlayAvanzadoDBType> = [
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 72.50",
    duracion_promo: 3,
    mb_fullclaro: 100,
    mb_standar: 50,
    precio_promo: 72.5,
    precio_real: 145.0,
    velocidad: 50,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 77.50",
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 100,
    precio_promo: 77.5,
    precio_real: 155.0,
    velocidad: 100,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 85.00",
    duracion_promo: 3,
    mb_fullclaro: 300,
    mb_standar: 150,
    precio_promo: 85.0,
    precio_real: 170.0,
    velocidad: 0,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 92.50",
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 400,
    precio_promo: 92.5,
    precio_real: 180.0,
    velocidad: 200,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 137.50",
    duracion_promo: 3,
    mb_fullclaro: 600,
    mb_standar: 300,
    precio_promo: 137.5,
    precio_real: 275.0,
    velocidad: 300,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 157.50",
    duracion_promo: 3,
    mb_fullclaro: 1000,
    mb_standar: 500,
    precio_promo: 157.5,
    precio_real: 315.0,
    velocidad: 500,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 257.50",
    duracion_promo: 3,
    mb_fullclaro: 0,
    mb_standar: 300,
    precio_promo: 257.5,
    precio_real: 515.0,
    velocidad: 300,
  },
];

export const Plan2PlaySimpleDb: Array<Planes2PlaySimpleDBType> = [
  {
    nombre_plan: "2Play Internet + Telefonía 40.00",
    duracion_promo: 3,
    mb_fullclaro: 100,
    mb_standar: 50,
    precio_promo: 40.0,
    precio_real: 80.0,
    velocidad: 50,
  },
  {
    nombre_plan: "2Play Internet + Telefonía 45.00",
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 100,
    precio_promo: 45.0,
    precio_real: 90.0,
    velocidad: 100,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 52.50",
    duracion_promo: 3,
    mb_fullclaro: 300,
    mb_standar: 150,
    precio_promo: 52.5,
    precio_real: 105.0,
    velocidad: 150,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 60.00",
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 400,
    precio_promo: 60.0,
    precio_real: 120.0,
    velocidad: 200,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 105.00",
    duracion_promo: 3,
    mb_fullclaro: 600,
    mb_standar: 300,
    precio_promo: 105.0,
    precio_real: 210.0,
    velocidad: 300,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 125.00",
    duracion_promo: 3,
    mb_fullclaro: 1000,
    mb_standar: 500,
    precio_promo: 157.5,
    precio_real: 315.0,
    velocidad: 500,
  },
  {
    nombre_plan: "2Play Internet + Claro TV Avanzado 225.00",
    duracion_promo: 3,
    mb_fullclaro: 0,
    mb_standar: 300,
    precio_promo: 257.5,
    precio_real: 515.0,
    velocidad: 300,
  },
];

export const Planes1PlayDB: Array<Planes1PlayDBType> = [
  {
    text: "Plan Claro 75.50",
    value: "Plan Claro 75.50",
  },

  {
    text: "Plan Claro 82.50",
    value: "Plan Claro 82.50",
  },

  {
    text: "Plan Claro 90",
    value: "Plan Claro 90",
  },
  {
    text: "Plan Claro 95.00",
    value: "Plan Claro 95.00",
  },

  {
    text: "Plan Claro 140.00",
    value: "Plan Claro 140.00",
  },

  {
    text: "Plan Claro 160.00",
    value: "Plan Claro 160.00",
  },

  {
    text: "Plan Claro 260.00",
    value: "Plan Claro 260.00",
  },
];

export const PlanesNetflixDB: Array<PlanesNetflixDBType> = [
  {
    mb_standar: 55,
    nombre_plan: "Max Play 95 con Netflix",
    mb_fullclaro: 82,
    numero_pantallas: 2,
    modalidad: "Plan Movil",
    cargo: 95.9,
    precio_total: 95.9,
  },

  {
    mb_standar: 100,
    nombre_plan:
      "2Play Internet 100 Mbps + telefonía fija 80 + Netflix Estándar",
    mb_fullclaro: 200,
    numero_pantallas: 2,
    modalidad: "Plan Fijo",
    cargo: 75.1,
    precio_total: 110.1,
  },

  {
    mb_standar: 100,
    nombre_plan: "Max Play 115 con Netflix",
    mb_fullclaro: 150,
    numero_pantallas: 2,
    modalidad: "Plan Fijo",
    cargo: 115.0,
    precio_total: 115.0,
  },

  {
    mb_standar: 180,
    nombre_plan:
      "2Play Internet 180 Mbps + telefonía fija 80 + Netflix Estándar",
    mb_fullclaro: 360,
    numero_pantallas: 2,
    modalidad: "Plan Fijo",
    cargo: 95.1,
    precio_total: 130.1,
  },

  {
    mb_standar: 145,
    nombre_plan: "Max Play 145 con Netflix",
    mb_fullclaro: 217,
    numero_pantallas: 2,
    modalidad: "Plan Fijo",
    cargo: 145.0,
    precio_total: 145.0,
  },

  {
    mb_standar: 180,
    nombre_plan:
      "3Play Internet 180 Mbps + Claro TV Avanzado + Telefonía 100 + Netflix Estándar",
    mb_fullclaro: 280,
    numero_pantallas: 2,
    modalidad: "Plan Fijo",
    cargo: 180.1,
    precio_total: 215.1,
  },

  {
    mb_standar: 280,
    nombre_plan:
      "3Play Internet 280 Mbps + Claro TV Avanzado + Telefonía 100 + Netflix Estándar",
    mb_fullclaro: 400,
    numero_pantallas: 2,
    modalidad: "Plan Fijo",
    cargo: 220.1,
    precio_total: 255.0,
  },
];
