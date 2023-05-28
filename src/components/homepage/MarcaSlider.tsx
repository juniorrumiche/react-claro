import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import { MarcaSliderItemType } from "../../types/componente";
import { MarcasTelefonoDB } from "../../db/db";
import { Link as LinkRoute } from "react-router-dom";
import { MOVILES_LISTA_PATH } from "../../config/config";

const MarcaSliderItem = ({ name, image_url }: MarcaSliderItemType) => {
  return (
    <Box>
      <LinkRoute to={MOVILES_LISTA_PATH + "/" + name?.toLowerCase()}>
        <Flex
          borderWidth={1}
          borderColor="transparent"
          py={10}
          px={10}
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
        </Flex>
      </LinkRoute>
    </Box>
  );
};

export const MarcaSlider = () => {
  const settings = {
    swipe: true,
    slidesToShow: 4,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider dots={true} arrows={false} {...settings}>
      {MarcasTelefonoDB.map((marca, index) => (
        <MarcaSliderItem key={index} {...marca} />
      ))}
    </Slider>
  );
};
