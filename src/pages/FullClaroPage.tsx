import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navbar } from "../components/base/Navbar";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { CarouselBanner } from "../components/CarouselBanner";
import { CardImageFullClaroProps, CardPhoneFullClaroProps, CarouselBannerImageProps } from "../types/componente";

const CardPhoneFullClaro = ({image}:CardPhoneFullClaroProps) => {
  return (
    <Flex justifyContent="center">
      <Image
        maxHeight={180}
        src={image}
      ></Image>
    </Flex>
  );
};

const CardListPhoneFullClaro = () => {
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
      <GridItem w="full">
        <CardPhoneFullClaro image="https://claroperupoc.vtexassets.com/arquivos/ids/155523/4.png" />
      </GridItem>

      <GridItem w="full">
        <CardPhoneFullClaro image="https://claroperupoc.vtexassets.com/arquivos/ids/243196/1--34-.png" />
      </GridItem>

      <GridItem w="full">
        <CardPhoneFullClaro image="https://claroperupoc.vtexassets.com/arquivos/ids/987109/moto-a13-tofu-1.png?" />
      </GridItem>

      <GridItem w="full">
        <CardPhoneFullClaro image="https://www.datocms-assets.com/88735/1674691302-samsung-galaxy-s21-plus-500x500b.png" />
      </GridItem>
    </Grid>
  );
};

const CardImageFullClaro = ({ image }: CardImageFullClaroProps) => {
  return (
    <Box>
      <a
        href={`https://api.whatsapp.com/send/?phone=51902430825&text=${"😀Hola Fer. Por favor, deseo mayor información para Full Claro. Gracias."}`}
        target="_blank"
      >
        <Image src={image} borderRadius="2xl" />
      </a>
    </Box>
  );
};

const sliderImages: Array<CarouselBannerImageProps> = [
  {
    base: "",
    md: "/images/fullclaro/slider-fullclaro-1.jpg",
  },
  {
    base: "",
    md: "/images/fullclaro/slider-fullclaro-2.jpg",
  },
];

export const FullClaroPage = () => {
  return (
    <>
      <Helmet>
        <title>Full Claro | Tienda Claro</title>
      </Helmet>

      <Navbar />
      <CarouselBanner image={sliderImages} />
      <Box py={10} px={5}>
        <Container py={10} maxWidth="4xl" bg="whiteAlpha.200">
          <CardListPhoneFullClaro />
          <VStack mt={5} spacing={0}>
            <Heading fontSize="3xl" fontWeight="semibold">
              Además tendrá
            </Heading>
            <Heading fontSize="3xl" color="#DC3545" fontWeight="semibold">
              descuentos exclusivos
            </Heading>
            <Heading fontSize="3xl" fontWeight="semibold">
              en celulares
            </Heading>
          </VStack>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="4xl">
          <SimpleGrid
            mb={10}
            columns={{ base: 1, md: 2 }}
            gap={{ base: 10, md: 20 }}
          >
            <VStack
              bg={useColorModeValue("white", "whiteAlpha.200")}
              textAlign="center"
              px={12}
              py={10}
              borderRadius="2xl"
            >
              <Heading color="#DC3545" fontWeight="semibold" fontSize="3xl">
                Full claro esta en todas partes
              </Heading>
              <Text>
                sujeto al plan que manejes Vamos, que esperas, unete a la gran
                Familia de Claro, hay miles de Ofertas esperando por ti.
              </Text>
            </VStack>

            <HStack
              borderRadius="2xl"
              px={5}
              py={10}
              bg={useColorModeValue("white", "whiteAlpha.200")}
            >
              <Box w="80%">
                <Text>
                  Busca en cada promocion el apartado de ful claro, y descubre
                  beneficios que te encantaran.
                </Text>
              </Box>
              <Box>
                <Image src="/muestra.jpg" alt="claro precios" />
              </Box>
            </HStack>
            <CardImageFullClaro image="/images/fullclaro/fullclaro-1.jpg" />
            <CardImageFullClaro image="/images/fullclaro/fullclaro-2.jpg" />
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
