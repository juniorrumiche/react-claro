import { Box, Container, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import {  Planes1PlayDB, Planes2PlayAvanzado } from "../db/db";
import { CardPlanesPlay } from "../components/CardPlanesPlay";
import { MdOutlineTv, MdWifi } from "react-icons/md";
import { Footer } from "../components/base/Footer";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FaPlus } from "react-icons/fa";

export const Play2AdvancePage = () => {
  return (
    <>
      <Helmet>
        <title>Planes 2Play Avanzado | Internet Hogar</title>
      </Helmet>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
      <Container maxWidth="6xl" py={10}>
        <Box py={5}>
          <VStack>
                <HStack>
                    <MdWifi size={90} />
                    <FaPlus size={50} />
                    <MdOutlineTv size={90} />
                </HStack>
            <Heading>Elige el paquete de Internet ideal para tu hogar</Heading>
          </VStack>
        </Box>
        <LazyLoadComponent>
          <SimpleGrid py={10} columns={{ base: 1, md: 3 }} gap={8}>
            {Planes2PlayAvanzado.map((plan, index) => (
              <CardPlanesPlay key={index} {...plan} />
            ))}
          </SimpleGrid>
        </LazyLoadComponent>
      </Container>
      <Footer />
    </>
  );
};
