import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { Overlay } from "./Overlay";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CarouselBannerProps } from "../types/componente";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CarouselBanner = ({ image }: CarouselBannerProps) => {
  return (
    <Box w="full">
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
      <Slider {...settings} arrows={false}>
        {image.map((img, index) => (
          <Box position="relative" key={index}>
            <Overlay />

            <LazyLoadImage
              alt="pagina claro"
              srcSet={`
              /images/max-ilimitado-95.jpg 1300w, 
              ${img.md} 500w
            `}
              sizes="(max-width: 600px) 1200px, 500px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
