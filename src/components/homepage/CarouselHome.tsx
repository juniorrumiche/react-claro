import React from "react";
import {
  Box,
  Heading,
  Container,
  Grid,
  GridItem,
  HStack,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Overlay } from "../Overlay";

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CarouselHome = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [_slider, setSlider] = React.useState<Slider | null>(null);

  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://claroperupoc.vtexassets.com/arquivos/claro-img-olo-banner-home-web-2023.png",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://claroperupoc.vtexassets.com/arquivos/claro-img-banner-home-web-apple-13-02-23.png",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://claroperupoc.vtexassets.com/arquivos/banner-home-samsung-web-17-03-23.png",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={{ base: "2xl", ld: "lg" }}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Container minWidth={{ base: "1xl", md: "7xl", lg: "6xl" }} p={0}>
        <Slider swipe={true} {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              boxShadow="2xl"
              height={"lg"}
              backgroundColor="gray.800"
              p={3}
            >
              <Grid
                justifyItems="center"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={2}
              >
                <GridItem w="100%" h={{ base: "4xs", lg: "lg" }} colSpan={2}>
                  <HStack w="full" h="full">
                    <Overlay />
                    <LazyLoadImage
                      alt="Claro images Moviles "
                      src={card.image}
                    ></LazyLoadImage>
                  </HStack>
                </GridItem>

                <GridItem
                  zIndex={3}
                  w="100%"
                  h={{ base: "3xs", lg: "lg" }}
                  pl={4}
                >
                  <HStack justifyContent="center" w="full" h="full">
                    <Box>
                      <Heading color="gray.100" mb={4} fontWeight="normal">
                        Manente conectado con olo
                      </Heading>
                      <Button colorScheme="red">Lo Quiero</Button>
                    </Box>
                  </HStack>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};
