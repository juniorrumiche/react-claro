import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";

const CardService = () => {
  return (
    <Flex my={5} w="full" flexDir="column">
      <HStack
        justifyContent="center"
        alignItems="center"
        w="full"
        py={5}
        my={3}
        borderRadius="3xl"
        background="gray.100"
      >
        <Image src="https://claroperupoc.vtexassets.com/arquivos/claro-img-claro-img-accesorios.png"></Image>
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
