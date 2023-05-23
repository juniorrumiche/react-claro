interface SelectInputType {
  value: string;
  text: string;
}

interface PlanesNetflixDBType {
  mb_standar: number;
  nombre_plan: string;
  mb_fullclaro: number;
  numero_pantallas: number;
  modalidad: string;
  cargo: number;
  precio_total: number;
}

interface Planes1PlayDBType extends SelectInputType {}
