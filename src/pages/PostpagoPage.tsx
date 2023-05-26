import { Navbar } from "../components/base/Navbar";
import { Footer } from "../components/base/Footer";
import { ContactCard } from "../components/ContactCard";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineFundView } from "react-icons/ai";

const PhoneCard = () => {
  return (
    <Flex
      borderRadius="2xl"
      p={5}
      flexDirection="column"
      bg={useColorModeValue('white', 'whiteAlpha.100')}
    >
      <Box textAlign="center" w="full">
        <Heading color="gray" size="md">
          Motorola
        </Heading>
        <Heading mt={2} size="lg">
          Moto G23 128GB Gris Oxford
        </Heading>
      </Box>
      <HStack mt={3} spacing={1}>
        <Box w="55%" textAlign="center">
          <Image alt="phone claro" src="/phone.png"></Image>
        </Box>
        <Stack w="40%" spacing={2}>
          <Text fontWeight="bold">Precio Online</Text>
          <Text fontWeight="bold">S/. 649.00</Text>
          <Text color="gray.500" fontSize={12}>
            Postpago Portabilidad Max ilimitado 69.90
          </Text>
          <Text fontSize={12}>
            <Badge bg="red.200" borderRadius="lg" mr={1}>
              20% dto
            </Badge>
            x 3 meses. <b>55.92</b>
          </Text>
        </Stack>
      </HStack>
      <Button
        colorScheme="red"
        mt={3}
        variant="outline"
        leftIcon={<AiOutlineFundView />}
      >
        Ver Detalles
      </Button>
    </Flex>
  );
};

export const PostpagoPage = () => {
  return (
    <main>
      <Navbar />
      <ContactCard select_input_items={[]} />
      <Grid
        py={10}
        px={5}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%">
          <PhoneCard />
        </GridItem>

        <GridItem w="100%">
          <PhoneCard />
        </GridItem>

        <GridItem w="100%">
          <PhoneCard />
        </GridItem>
      </Grid>
      <Footer />
    </main>
  );
};
