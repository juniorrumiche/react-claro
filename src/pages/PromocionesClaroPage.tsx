import {
  Box,
  Button,
  Container,
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

const promociones = [
  {
    name: " Aprovecha los dtos. en equipos + accesorios ",
    image: "/images/promo/promo-tarjeta-50.jpg",
  },

  {
    name: " Aprovecha los dtos. en equipos + accesorios ",
    image: "/images/promo/promo-tarjeta-20.jpg",
  },
];

interface CardPromocionesProps {
  name: string;
  image: string;
}
const CardPromociones = ({ name, image }: CardPromocionesProps) => {
  return (
    <Box
      color="white.200"
      bg={useColorModeValue("white", "whiteAlpha.100")}
      py={10}
      px={10}
      borderRadius="lg"
    >
      <HStack spacing={2}>
        <VStack alignItems="start">
          <Heading fontWeight="semibold" size="md" textAlign="start">
            Aprovecha los dtos. en equipos + accesorios
          </Heading>
          <Text>SOLO ONLINE</Text>
          <Button colorScheme="red">Lo Quiero </Button>
        </VStack>

        <VStack h="full" w="full">
          <Image src={image} />
        </VStack>
      </HStack>
    </Box>
  );
};

export const PromocionesClaroPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="6xl">
        <Box textAlign="center" py={10}>
          <Text>TENEMOS TODO LO QUE BUSCAS</Text>
          <Heading>Busca la promoción que más quieras</Heading>
          <Text mt={10}>
            En Argosal - Tienda Claro Online buscamos sorprenderte día a día,
            por eso hemos preparado diversas promociones que puedes encontrar en
            esta sección. Compra un nuevo teléfono inteligente, elige entre
            cientos de accesorios, disfruta de excelentes planes y descuentos
            que tenemos para ti ahora.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} py={10} spacing={10}>
            {promociones.map((value, index) => (
              <CardPromociones {...value} key={index} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
