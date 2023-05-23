import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";
import { CarouselMarcaItemTypes } from "../types/componente";

const CarouselMarcaItem = (props: CarouselMarcaItemTypes) => {
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
        <Image
          loading="lazy"
          src={
            props.url
              ? `${props.url}`
              : "https://claroperupoc.vtexassets.com/arquivos/banner-marcar-2023-zte.png"
          }
        />
        <Heading fontWeight="semibold" size="md" textAlign="center">
          {props.title}
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
      <CarouselMarcaItem title="SAMSUMG" />
      <CarouselMarcaItem title="IPHONE" />
      <CarouselMarcaItem title="OPO" />
      <CarouselMarcaItem title="XIAOMI" />
      <CarouselMarcaItem title="HUWAEI" />
      <CarouselMarcaItem />
    </Slider>
  );
};
