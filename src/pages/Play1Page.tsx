import { Box, Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { Planes1Play, Planes1PlayDB } from "../db/db";
import { CardPlanesPlay } from "../components/CardPlanesPlay";
import { MdWifi } from "react-icons/md";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const Play1Page = () => {
  return (
    <>
      <Helmet>
        <title>Planes 1Play | Internet Hogar</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
      <Container maxWidth="6xl" py={10}>
        <Box py={5}>
          <VStack>
            <MdWifi size={90} />
            <Heading textAlign="center">
              Elige el paquete de Internet ideal para tu hogar
            </Heading>
          </VStack>
        </Box>
        <LazyLoadComponent>
          <SimpleGrid py={10} columns={{ base: 1, md: 3 }} gap={8}>
            {Planes1Play.map((plan, index) => (
              <CardPlanesPlay
                key={index}
                {...plan}
                precio_promo={plan.precio_real}
                precio_real={0}
              />
            ))}
          </SimpleGrid>
        </LazyLoadComponent>
      </Container>
      <Footer />
    </>
  );
};
