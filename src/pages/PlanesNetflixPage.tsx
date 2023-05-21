import {
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";

export const PlanesNetflixPage = () => {
  return (
    <>
      <Navbar />
      <ContactCard />
      <Flex justifyContent="center">
        <VStack>
          <Image
            width="25%"
            src="https://www.pngplay.com/wp-content/uploads/7/Netflix-Logo-Transparent-Background.png"
          />
          <Text fontSize='3xl'>
            Ahora contamos con Netflix para que tengas accesos a las mejores
            series y peliculas
          </Text>
        </VStack>
      </Flex>
    </>
  );
};
