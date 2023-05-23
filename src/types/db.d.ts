export interface SelectInputType {
  value: string;
  text: string;
}

export interface PlanesNetflixDBType {
  mb_standar: number;
  nombre_plan: string;
  mb_fullclaro: number;
  numero_pantallas: number;
  modalidad: string;
  cargo: number;
  precio_total: number;
}

export interface PlanesBaseType {
  nombre_plan: string;
  velocidad: number;
  duracion_promo: number;
  precio_promo: number;
  precio_real: number;
  mb_standar: number;
  mb_fullclaro: number;
}

export interface Planes1PlayDBType extends SelectInputType {}

export interface Planes2PlaySimpleDBType extends PlanesBaseType {}
export interface Planes2PlayAvanzadoDBType extends PlanesBaseType {}
export interface Planes2PlaySuperiorDBType extends PlanesBaseType {}

export interface Planes3PlayAvanzadoDBType extends PlanesBaseType {}
export interface Planes3PlaySuperiorDBType extends PlanesBaseType {}
