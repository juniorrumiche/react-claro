import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { CardPlanNetflix } from "../components/planesnetflix/CardPlanNetflix";
import { Planes1PlayDB, PlanesNetflixDB } from "../db/db";
import { Footer } from "../components/base/Footer";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

const settings = {
  swipe: true,
  slidesToShow: 3,
  autoplay: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PlanNetFlixBeneficios = () => {
  return (
    <Container maxWidth={"4xl"} py={10}>
      <VStack>
        <Heading size="lg">¿Por qué tener un plan Claro con Netflix?</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} py={10} gap={10}>
          <Box
            px={5}
            py={10}
            borderRadius="2xl"
            bg={useColorModeValue("white", "whiteAlpha.100")}
          >
            <VStack spacing={5} textAlign="center">
              <Text fontWeight="semibold">Adiós a las tarjetas</Text>
              <Image src="https://www.claro.com.pe/portal/pe-2020/recursos_contenido/claro-home/29e37067-1123-43ac-b90a-3ac6764981f9-adios_tarjetas.svg" />
              <Text color="">
                Ahora la suscripción a Netflix viene incluida en los nuevos
                planes Max Play y Hogar Play
              </Text>
            </VStack>
          </Box>

          <Box
            px={5}
            py={10}
            borderRadius="2xl"
            bg={useColorModeValue("white", "whiteAlpha.100")}
          >
            <VStack spacing={5} textAlign="center">
              <Text fontWeight="semibold">Mira Netflix donde quieras</Text>
              <Image src="https://www.claro.com.pe/portal/pe-2020/recursos_contenido/claro-home/c54fd4d1-9cc7-42e7-b5a6-b6fdf0cf2011-donde_quieras.svg" />
              <Text>
                Accede en todo momento al contenido de Netflix a través de tu
                Smart TV, computadora, tablet, smartphone, Xbox, etc.
              </Text>
            </VStack>
          </Box>
          <Box
            px={5}
            py={10}
            borderRadius="2xl"
            bg={useColorModeValue("white", "whiteAlpha.100")}
          >
            <VStack spacing={5} textAlign="center">
              <Text fontWeight="semibold">Variedad</Text>
              <Image src="https://www.claro.com.pe/portal/pe-2020/recursos_contenido/claro-home/b1d15b6e-a612-40c5-bf03-8ba6b2c99ddb-contenido_exclusivo.svg" />
              <Text>
                Podrás disfrutar de una gran variedad de películas, series y
                nuevos lanzamientos de Netflix
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export const PlanesNetflixPage = () => {
  return (
    <>
      <Helmet>
        <title>Planes Netflix con claro</title>
      </Helmet>

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Navbar />
      <ContactCard
        image_url="https://www.claro.com.pe/portal/pe-2020/recursos_contenido/claro-home/e7d2e4e1-e1de-48fa-a381-448ed1752c29-Banner-Principal-Atlas-2300x450-Desktop+-+netflix-feb23-v2.jpg"
        select_input_items={Planes1PlayDB}
      />
      <Container maxWidth="5xl" py={10} px={5}>
        <Flex justifyContent="center">
          <Heading fontWeight="semibold" size="lg">
            Conoce los planes Hogar Play con Netflix
          </Heading>
        </Flex>
      </Container>
      <Container maxWidth="6xl" pb={10}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}}>
          {PlanesNetflixDB.map((plan, index) => (
            <CardPlanNetflix key={index} {...plan} />
          ))}
        </SimpleGrid>
      </Container>
      <PlanNetFlixBeneficios />

      <Footer />
    </>
  );
};
