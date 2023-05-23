import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { CardServiceType } from "../../types/componente";

const CardService = (props: CardServiceType) => {
  return (
    <Flex my={5} w="full" flexDir="column">
      <HStack
        justifyContent="center"
        alignItems="center"
        w="full"
        py={14}
        my={5}
        borderRadius="3xl"
        bg={useColorModeValue("white", "whiteAlpha.200")}
      >
        <Image src="https://claroperupoc.vtexassets.com/arquivos/claro-img-renueva-tu-equipo_actualizado.png" />
      </HStack>
      <Heading textAlign="center" fontWeight="semibold" size="md">
        {props.title}
      </Heading>
    </Flex>
  );
};

export const PhoneCardInfo = () => {
  return (
    <>
      <Container
        px={5}
        my={10}
        minWidth={{ base: "1xl", md: "7xl", lg: "6xl" }}
      >
        <Center>
          <Heading size="lg">Tenemos el plan perfecto para ti</Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 5 }} gap={10}>
          <CardService title="Hogar 1 play" />
          <CardService title="Hogar 2 play" />
          <CardService title="Hogar 3 play" />
          <CardService title="Planes Netflix" />
          <CardService title="Planes Moviles" />
        </SimpleGrid>
      </Container>
    </>
  );
};
