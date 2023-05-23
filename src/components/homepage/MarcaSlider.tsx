import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";
import { MarcaSliderItemType } from "../../types/componente";

const MarcaSliderItem = (props: MarcaSliderItemType) => {
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
      <MarcaSliderItem title="SAMSUMG" />
      <MarcaSliderItem title="IPHONE" />
      <MarcaSliderItem title="OPO" />
      <MarcaSliderItem title="XIAOMI" />
      <MarcaSliderItem title="HUWAEI" />
    </Slider>
  );
};
