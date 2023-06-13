import { Helmet } from "react-helmet";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const CardAdminEquipo = () => {
  return (
    <Box
      bg={useColorModeValue("white", "whiteAlpha.100")}
      p={3}
      borderRadius="lg"
    >
      <HStack>
        <Text fontWeight="semibold">Galaxy S28 128GB Negro</Text>
      </HStack>
    </Box>
  );
};

export const DashboardEquiposPage = () => {
  return (
    <>
      <Helmet>
        <title>Equipos | Tienda Claro</title>
      </Helmet>
      <NavbarAdmin />

      <SimpleGrid
        py={10}
        px={5}
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={5}
      >
        <CardAdminEquipo />
        <CardAdminEquipo />
        <CardAdminEquipo />
        <CardAdminEquipo />
      </SimpleGrid>
    </>
  );
};
