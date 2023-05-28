import { Box, Center, Image, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeInOut = keyframes`
  0% {
    opacity: 0.7;
  }
  20% {
    opacity: 0.5;
  }
  
  40% {
    opacity: 0.2;
  }
  
  60% {
    opacity: 0.2;
  }
  
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.7;
  }
`;

export const SessionLoader = () => {
  return (
    <Center h="100vh">
      <Box
        textAlign="center"
        animation={`${fadeInOut} infinite 2s`}
        rounded="md"
      >
        <VStack>
          <Image
            w={{ base: "50%", md: "10%" }}
            src="https://logodownload.org/wp-content/uploads/2014/02/claro-logo-8.png"
          />
        </VStack>
      </Box>
    </Center>
  );
};
