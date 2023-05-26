import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

export const LoaderDatosTabla = () => {
  return (
    <Box py={10}>
      <VStack spacing={5}>
        <Spinner color="teal" size="lg" />
        <Text>Cargando datos </Text>
      </VStack>
    </Box>
  );
};
