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
        my={5}
        borderRadius="3xl"
        bg={useColorModeValue("white", "whiteAlpha.200")}
      >
        <Image borderRadius="2xl" src={props.image} />
      </HStack>
      <Heading textAlign="center" fontWeight="semibold" size="md">
        {props.name}
      </Heading>
    </Flex>
  );
};

const planes = [
  {
    name: "Hogar 1 play",
    image: "/images/home-1play.jpg",
  },
  {
    name: "Hogar 2 play",
    image: "/images/home-2play.jpg",
  },

  {
    name: "Hogar 3 play",
    image: "/images/home-3play.jpg",
  },
  {
    name: "Planes Netflix",
    image: "/images/home-netflix.jpg",
  },
  
  {
    name: "Planes Moviles",
    image: "/images/home-planes-moviles.jpg",
  },
];

export const ListaDePlanes = () => {
  return (
    <>
      <Container
        px={5}
        my={10}
        minWidth={{ base: "1xl", md: "7xl", lg: "7xl" }}
      >
        <Center>
          <Heading size="lg">Tenemos el plan perfecto para ti</Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} gap={10}>
          {planes.map((value, index) => (
            <ListaPlanItem key={index} {...value} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
