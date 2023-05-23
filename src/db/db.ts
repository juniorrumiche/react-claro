import { Planes1PlayDBType, Planes2PlayAvanzadoDBType, Planes2PlaySimpleDBType, PlanesNetflixDBType } from "../types/db";

export const Plan2PlayAvanzadoDb: Array<Planes2PlayAvanzadoDBType> = [
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 72.50',
    duracion_promo: 3,
    mb_fullclaro: 100,
    mb_standar: 50,
    precio_promo: 72.50,
    precio_real: 145.00,
    velocidad: 50
  },
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 77.50',
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 100,
    precio_promo: 77.50,
    precio_real: 155.00,
    velocidad: 100
  }, 
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 85.00',
    duracion_promo: 3,
    mb_fullclaro: 300,
    mb_standar: 150,
    precio_promo: 85.00,
    precio_real: 170.00,
    velocidad: 0
  }, 
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 92.50',
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 400,
    precio_promo: 92.50,
    precio_real: 180.00,
    velocidad: 200
  }, 
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 137.50',
    duracion_promo: 3,
    mb_fullclaro: 600,
    mb_standar: 300,
    precio_promo: 137.50,
    precio_real: 275.00,
    velocidad: 300
  },
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 157.50',
    duracion_promo: 3,
    mb_fullclaro: 1000,
    mb_standar: 500,
    precio_promo: 157.50,
    precio_real: 315.00,
    velocidad: 500
  } ,
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 257.50',
    duracion_promo: 3,
    mb_fullclaro: 0,
    mb_standar: 300,
    precio_promo: 257.50,
    precio_real: 515.00,
    velocidad: 300
  } 
]

export const Plan2PlaySimpleDb: Array<Planes2PlaySimpleDBType> = [
  {
    nombre_plan: '2Play Internet + Telefonía 40.00',
    duracion_promo: 3,
    mb_fullclaro: 100,
    mb_standar: 50,
    precio_promo: 40.00,
    precio_real: 80.00,
    velocidad: 50
  },
  {
    nombre_plan: '2Play Internet + Telefonía 45.00',
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 100,
    precio_promo: 45.00,
    precio_real: 90.00,
    velocidad: 100
  }, 
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 52.50',
    duracion_promo: 3,
    mb_fullclaro: 300,
    mb_standar: 150,
    precio_promo: 52.50,
    precio_real: 105.00,
    velocidad: 150
  }, 
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 60.00',
    duracion_promo: 3,
    mb_fullclaro: 200,
    mb_standar: 400,
    precio_promo: 60.00,
    precio_real: 120.00,
    velocidad: 200
  }, 
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 105.00',
    duracion_promo: 3,
    mb_fullclaro: 600,
    mb_standar: 300,
    precio_promo: 105.00,
    precio_real: 210.00,
    velocidad: 300
  },
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 125.00',
    duracion_promo: 3,
    mb_fullclaro: 1000,
    mb_standar: 500,
    precio_promo: 157.50,
    precio_real: 315.00,
    velocidad: 500
  } ,
  {
    nombre_plan: '2Play Internet + Claro TV Avanzado 225.00',
    duracion_promo: 3,
    mb_fullclaro: 0,
    mb_standar: 300,
    precio_promo: 257.50,
    precio_real: 515.00,
    velocidad: 300
  }
]

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
