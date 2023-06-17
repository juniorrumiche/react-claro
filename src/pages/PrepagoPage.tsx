import { Box, Center, Heading } from "@chakra-ui/react";
import { Navbar } from "../components/base/Navbar";
import { MarcaSlider } from "../components/homepage/MarcaSlider";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { CarouselBanner } from "../components/CarouselBanner";
import { CarouselBannerImageProps } from "../types/componente";

const sliderImages: Array<CarouselBannerImageProps> = [

  {
    
    base: "",
    md: "/images/slider-prepago-1.jpg",
  },
  {
    base: "",
    md: "/images/slider-prepago-2.jpg",
  },
  
  {
    base: "",
    md: "/images/slider-prepago-3.jpg",
  },
  
  {
    base: "",
    md: "/images/slider-prepago-4.jpg",
  },
  
  {
    base: "",
    md: "/images/slider-prepago-5.jpg",
  },
  {
    base: "",
    md: "/images/slider-prepago-6.jpg",
  }
];

export const PrepagoPage = () => {
  return (
    <>
      <Helmet>
        <title> Prepago | Tienda Claro</title>
      </Helmet>
      <Navbar />
      <CarouselBanner image={sliderImages} />

      <Box py={10}>
        <Center>
          <Heading textAlign="center" size="lg">
            Las mejores marcas en equipos móviles
          </Heading>
        </Center>
        <LazyLoadComponent>
          <MarcaSlider />
        </LazyLoadComponent>
      </Box>
      <Footer />
    </>
  );
};
