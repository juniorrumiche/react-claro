import { Box } from "@chakra-ui/react";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";

export const DashboardPage = () => {
  return (
    <>
      <NavbarAdmin />
      <Box p={4}>Main Content Here</Box>
    </>
  );
};
