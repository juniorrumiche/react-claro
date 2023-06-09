import { PlanesNetflixDBType } from "./db";

interface MetodoPagoItemType {
  children?: ReactNode;
}
export interface MarcaSliderItemType {
  name?: string;
  image_url?: string;
}

export interface ListDePlanesItemType {
  name?: string;
  image?: string;
}

export interface CardPlanNetFlixType extends PlanesNetflixDBType {}

export interface ContactCardType {
  select_input_items: Array<Planes1PlayDBType>;
  image_url?: string;
}

export interface PhoneDataProps {
  onOpen: any;
  URLimg?: string;
  marca?: string;
  nombreEquipo?: string;
  modalidad?: string;
  pOnline: string;
}

export interface CarouselBannerImageProps {
  base: string;
  md: string;
}

export interface CarouselBannerProps {
  image: Array<CarouselBannerImageProps>;
}

export interface CardImageFullClaroProps {
  image: string;
}


export interface CardPhoneFullClaroProps {
  image: string
}
