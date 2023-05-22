import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";

const CarouselMarcaItem = () => {
  return (
    <Box>
      <Flex
        py={5}
        px={10}
        m={5}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="2xl"
        bg={useColorModeValue("white", "whiteAlpha.200")}
      >
        <Image src="https://claroperupoc.vtexassets.com/arquivos/banner-marcar-2023-iphone.png" />
        <Heading size="lg" textAlign="center">
          IPHONE
        </Heading>
      </Flex>
    </Box>
  );
};

export const CarouselMarcas = () => {
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
      <CarouselMarcaItem />
      <CarouselMarcaItem />
      <CarouselMarcaItem />
      <CarouselMarcaItem />
      <CarouselMarcaItem />
      <CarouselMarcaItem />
      <CarouselMarcaItem />
    </Slider>
  );
};
