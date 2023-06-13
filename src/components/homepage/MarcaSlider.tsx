import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MarcaSliderItemType } from "../../types/componente";
import { MarcasTelefonoDB } from "../../db/db";

const MarcaSliderItem = ({ name, image_url }: MarcaSliderItemType) => {
  return (
    <Box>
      <Flex
        borderWidth={1}
        borderColor="transparent"
        p={5}
        minHeight={310}
        transition="all"
        transitionDuration=".5s"
        m={5}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="2xl"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        _hover={{
          borderColor: useColorModeValue("gray.300", "whiteAlpha.400"),
        }}
      >
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send/?phone=51902430825&text=${"😃¡Hola Fernanda! estoy interesado en adquirir un "}${name} en plan postpago .Por favor mas información. Gracias.`}
        >
          <LazyLoadImage
            loading="lazy"
            src={
              image_url
                ? `${image_url}`
                : "https://claroperupoc.vtexassets.com/arquivos/banner-marcar-2023-zte.png"
            }
          />
          <Heading mt={2} fontWeight="semibold" size="md" textAlign="center">
            {name}
          </Heading>
        </a>
      </Flex>
    </Box>
  );
};

export const MarcaSlider = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} px={5} py={10}>
      {MarcasTelefonoDB.map((value, index) => (
        <MarcaSliderItem key={index} {...value} />
      ))}
    </SimpleGrid>
  );
};
