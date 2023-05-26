import { Flex, Heading, Image } from "@chakra-ui/react";
import { Navbar } from "../components/base/Navbar";

export const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <Flex
        w="full"
        h="lg"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Image src="/error-404.svg" alt="404-error" />
        <Heading color="gray.400" fontWeight="bold">
          PAGINA NO ENCONTRADA
        </Heading>
      </Flex>
    </>
  );
};
