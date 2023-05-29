import { PlanesNetflixDBType } from "./db";

interface MetodoPagoItemType {
  children?: ReactNode;
}
export interface MarcaSliderItemType {
  name?: string;
  image_url?: string;
}

export interface ListDePlanesItemType {
  title?: string;
  image?: string;
}

export interface CardPlanNetFlixType extends PlanesNetflixDBType {}

export interface ContactCardType {
  select_input_items: Array<Planes1PlayDBType>;
  image_url?: string;
}
