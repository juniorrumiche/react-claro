import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";
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
          <Spinner
            color="teal"
            thickness="4px"
            speed="0.75s"
            emptyColor="gray.200"
            size="lg"
          />
          <Text mt={2} fontSize="lg" fontWeight='semibold' color="gray.400">
            Validando sesión...
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};
