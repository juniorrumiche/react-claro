import {
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { CardPlanNetflix } from "../components/planesnetflix/CardPlanNetflix";
import { Planes1PlayDB, PlanesNetflixDB } from "../db/db";
import { Footer } from "../components/base/Footer";

export const PlanesNetflixPage = () => {
  return (
    <>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
      <Container maxWidth="5xl" py={10} px={5}>
        <Flex justifyContent="center">
          <VStack textAlign="center">
            <Image
              width="30%"
              src="https://www.pngplay.com/wp-content/uploads/7/Netflix-Logo-Transparent-Background.png"
            />
            <Text fontSize="3xl">
              Ahora contamos con <b>Netflix </b> para que tengas accesos a las
              mejores series y peliculas
            </Text>
          </VStack>
        </Flex>
        <SimpleGrid py={10} columns={{ base: 1, md: 3 }} gap={8}>
          {PlanesNetflixDB.map((plan, index) => (
            <CardPlanNetflix key={index} {...plan} />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};
