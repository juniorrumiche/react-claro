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
import { BannerFullClaro } from "../components/fullclaro/BannerFullClaro";
import { Footer } from "../components/base/Footer";

const CardPhoneFullClaro = () => {
  return (
    <Flex justifyContent="center">
      <Image
        maxHeight={180}
        src="https://claroperupoc.vtexassets.com/arquivos/ids/314645/hffffhgfhg--1-.png?"
      ></Image>
    </Flex>
  );
};

const CardListPhoneFullClaro = () => {
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
      <GridItem w="full">
        <CardPhoneFullClaro />
      </GridItem>

      <GridItem w="full">
        <CardPhoneFullClaro />
      </GridItem>

      <GridItem w="full">
        <CardPhoneFullClaro />
      </GridItem>

      <GridItem w="full">
        <CardPhoneFullClaro />
      </GridItem>
    </Grid>
  );
};

export const FullClaroPage = () => {
  return (
    <>
      <Navbar />
      <BannerFullClaro />
      <Box py={10} px={5} >
        <Container py={10} maxWidth="3xl" bg="whiteAlpha.200">
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

      <Box >
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
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
