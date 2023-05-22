import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const CardService = () => {
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
      <Heading textAlign="center" size="md">
        Accesorios
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
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(5,1fr)" }}
          gap={5}
        >
          <GridItem w="full">
            <CardService />
          </GridItem>

          <GridItem w="full">
            <CardService />
          </GridItem>

          <GridItem w="full">
            <CardService />
          </GridItem>

          <GridItem w="full">
            <CardService />
          </GridItem>

          <GridItem w="full">
            <CardService />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
