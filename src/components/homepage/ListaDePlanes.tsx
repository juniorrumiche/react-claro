import {
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { ListDePlanesItemType } from "../../types/componente";

const ListaPlanItem = (props: ListDePlanesItemType) => {
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

export const ListaDePlanes = () => {
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
          <ListaPlanItem title="Hogar 1 play" />
          <ListaPlanItem title="Hogar 2 play" />
          <ListaPlanItem title="Hogar 3 play" />
          <ListaPlanItem title="Planes Netflix" />
          <ListaPlanItem title="Planes Moviles" />
        </SimpleGrid>
      </Container>
    </>
  );
};
