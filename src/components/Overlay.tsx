import { Box } from "@chakra-ui/react";

export const Overlay = () => {
  return (
    <Box
      w="full"
      position="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      zIndex={1}
      css={{ backgroundColor: "rgba(10,10,10, 0.2)" }}
    ></Box>
  );
};
