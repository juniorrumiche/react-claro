import { Helmet } from "react-helmet";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";

export const DashboardPage = () => {
  return (
    <>
    <Helmet>
    <title>Dashboard | Tienda Claro</title>
    </Helmet>
      <NavbarAdmin />
    </>
  );
};
