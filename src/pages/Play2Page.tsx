import {
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { Planes1PlayDB, Planes2PlayDB } from "../db/db";
import { CardPlanesPlay } from "../components/CardPlanesPlay";
import { MdOutlinePhone, MdWifi } from "react-icons/md";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FaPlus } from "react-icons/fa";

export const Play2Page = () => {
  return (
    <>
      <Helmet>
        <title>Planes 2Play | Internet Hogar</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
      <Container maxWidth="6xl" py={10}>
        <Box py={5}>
          <VStack>
            <HStack gap={5}>
              <MdWifi size={80} />
              <FaPlus size={25} />
              <MdOutlinePhone size={75} />
            </HStack>
            <Heading textAlign="center">
              Elige el paquete de Internet ideal para tu hogar
            </Heading>
          </VStack>
        </Box>
        <LazyLoadComponent>
          <SimpleGrid py={10} columns={{ base: 1, md: 3 }} gap={8}>
            {Planes2PlayDB.map((plan, index) => (
              <CardPlanesPlay key={index} {...plan} />
            ))}
          </SimpleGrid>
        </LazyLoadComponent>
      </Container>
      <Footer />
    </>
  );
};
