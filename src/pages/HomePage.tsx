import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { Navbar } from "../components/base/Navbar";
import { Footer } from "../components/base/Footer";
import { CarouselHome } from "../components/homepage/CarouselHome";
import { MarcaSlider } from "../components/homepage/MarcaSlider";
import { MetodoPago } from "../components/homepage/MetodoPago";
import { ListaDePlanes } from "../components/homepage/ListaDePlanes";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Tienda Claro</title>
      </Helmet>
      <Navbar />
      <CarouselHome />
      <MetodoPago />
      <Box mt={10} position="relative">
        <Box
          w="full"
          top="0"
          bottom="0"
          left="0"
          right="0"
          position="absolute"
          css={{ background: "rgba(10,10,10,0.2)" }}
        ></Box>
        <Image alt="claro promociones" src="/banner-home.png" />
      </Box>
      <ListaDePlanes />
      
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
