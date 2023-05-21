import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const BannerFullClaro = () => {
  return (
    <Box bg="#AA0E0F" p={5}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={10}
      >
        <GridItem w="full" py={10} px={{ base: 10, md: 20 }}>
          <Box
            bg="#F5A96F"
            px={20}
            py={10}
            textAlign="center"
            borderRadius="2xl"
            position="relative"
          >
            <Box
              top={-5}
              right={-5}
              bg="#ADD8E6"
              h={95}
              w={95}
              borderRadius="50%"
              position="absolute"
            >
              <Flex h="full" alignItems="center" justifyContent="center">
                <Text fontWeight='semibold'>Oferta</Text>
              </Flex>
            </Box>
            <VStack spacing={5}>
              <Text fontSize={20}>Puedes obtener hasta</Text>
              <Heading size="4xl">50% MÁS</Heading>
            </VStack>
          </Box>
        </GridItem>
        <GridItem w="full">
          <Flex
            alignItems="center"
            flexDirection="column"
            gap={2}
            justifyContent="center"
            h="full"
          >
            <Text color="white">BIENVENIDO A LA FAMILIA</Text>
            <Heading color="white" size="4xl">
              FULL CLARO
            </Heading>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
