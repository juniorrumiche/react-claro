import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Fade,
} from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { Planes1PlayDB, Planes3PlaySuperior } from "../db/db";
import { CardPlanesPlay } from "../components/CardPlanesPlay";
import { MdWifi } from "react-icons/md";
import { MdOutlineTv } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const Play3SuperPage = () => {
  return (
    <>
      <Helmet>
        <title>Planes 3Play Superior | Internet Hogar</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
      <Container maxWidth="6xl" py={10}>
        <Box py={5}>
          <VStack>
            <HStack gap={5}>
              <Icon as={MdWifi} boxSize={{ base: 25, md: 90 }} />
              <Icon as={FaPlus} boxSize={{ base: 5, md: 25 }} />
              <Icon as={MdOutlineTv} boxSize={{ base: 25, md: 90 }} />
              <Icon as={FaPlus} boxSize={{ base: 5, md: 25 }} />
              <Icon as={MdOutlinePhone} boxSize={{ base: 25, md: 90 }} />
            </HStack>
            <Heading textAlign="center">
              Elige el paquete de Internet ideal para tu hogar
            </Heading>
          </VStack>
        </Box>
        <LazyLoadComponent>
          <SimpleGrid py={10} columns={{ base: 1, md: 3 }} gap={8}>
            {Planes3PlaySuperior.map((plan, index) => (
              <LazyLoadComponent key={index}>
                <CardPlanesPlay {...plan} />
              </LazyLoadComponent>
            ))}
          </SimpleGrid>
        </LazyLoadComponent>
      </Container>
      <Footer />
    </>
  );
};
