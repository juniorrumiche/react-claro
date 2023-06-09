import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { Planes1PlayDB, Planes3PlayAvanzado } from "../db/db";
import { CardPlanesPlay } from "../components/CardPlanesPlay";
import { MdOutlinePhone, MdOutlineTv, MdWifi } from "react-icons/md";

import { FaPlus } from "react-icons/fa";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const Play3AdvancePage = () => {
  return (
    <>
      <Helmet>
        <title>Planes 3Play Avanzado | Internet Hogar</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
      <Container maxWidth="6xl" py={10}>
        <Box py={5}>
          <VStack>
            <HStack gap={5}>
              <Icon as={MdWifi} boxSize={{ base: 10, md: 90 }} />
              <Icon as={FaPlus} boxSize={{ base: 5, md: 25 }} />
              <Icon as={MdOutlineTv} boxSize={{ base: 10, md: 90 }} />
              <Icon as={FaPlus} boxSize={{ base: 5, md: 25 }} />
              <Icon as={MdOutlineTv} boxSize={{ base: 10, md: 90 }} />
            </HStack>
            <Heading textAlign="center">
              Elige el paquete de Internet ideal para tu hogar
            </Heading>
          </VStack>
        </Box>
        <LazyLoadComponent>
          <SimpleGrid py={10} columns={{ base: 1, md: 3 }} gap={8}>
            {Planes3PlayAvanzado.map((plan, index) => (
              <CardPlanesPlay key={index} {...plan} />
            ))}
          </SimpleGrid>
        </LazyLoadComponent>
      </Container>
      <Footer />
    </>
  );
};
