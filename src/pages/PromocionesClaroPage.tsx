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

const CardPromociones = () => {
  return (
    <Box
      color="white.200"
      bg={useColorModeValue("white", "whiteAlpha.200")}
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
          <Image src="https://claroperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/651dff28-1169-4d33-9476-c9a7c6502bd6___246a9cc3b6d98f4dbc9cba68cb59cd2b.png" />
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
          <SimpleGrid columns={2} py={10} spacing={10}>
            <CardPromociones />
            <CardPromociones />
          </SimpleGrid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
