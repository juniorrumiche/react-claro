import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { Navbar } from "../components/base/Navbar";
import { CarouselHome } from "../components/CarouselHome";
import { Footer } from "../components/base/Footer";
import { PaymentCardInfo } from "../components/homepage/PaymentCardInfo";
import { PhoneCardInfo } from "../components/homepage/PhoneCardInfo";
import { CarouselMarcas } from "../components/CarouselMarcas";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <PaymentCardInfo />
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
        <Image alt="claro promociones" src="/claro-promociones.png" />
      </Box>
      <PhoneCardInfo />
      <Box py={10}>
        <Center>
          <Heading textAlign="center" size="lg">
            Las mejores marcas en equipos móviles
          </Heading>
        </Center>
        <CarouselMarcas />
      </Box>
      <Footer />
    </>
  );
};
