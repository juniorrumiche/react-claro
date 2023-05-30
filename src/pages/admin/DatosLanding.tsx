import { Box, useColorModeValue, useToast } from "@chakra-ui/react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { reactTableStyle } from "../../theme";
import { LoaderDatosTabla } from "../../components/LoaderDatosTabla";

interface IPerson {
  id: number;
  dni: string;
  apellido: string;
  nombre: string;
  email: string;
  opcion: string;
  telefono: number;
}

const columns: TableColumn<IPerson>[] = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "DNI",
    selector: (row) => row.dni,
    sortable: true,
  },
  {
    name: "Apellido",
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Opción",
    selector: (row) => row.opcion,
    sortable: true,
  },
  {
    name: "Telefono",
    selector: (row) => row.telefono,
    sortable: true,
  },
];

export const DatosLanding = () => {
  const [clientesData, setClientesData] = useState<IPerson[]>([]);
  const [pending, setPending] = useState(true);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const token = Cookies.get("_session");
        let response = await axios.get("/api/v1/clientes/landing", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClientesData(response.data || []);
        setPending(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            position: "top",
            status: "error",
            description: error.response?.data.message || "Ha ocurrio un error",
            isClosable: true,
          });
          if (error.response?.status == 401) {
            toast({
              position: "top",
              status: "error",
              description: "su session ha exipirado",
              isClosable: true,
            });
            Cookies.remove("_session");
            navigate("/login");
          }
        }
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box p={5} bg={useColorModeValue("white", "whiteAlpha.100")} rounded="lg">
      <DataTable
        theme={useColorModeValue("light", "custom")}
        progressPending={pending}
        progressComponent={<LoaderDatosTabla />}
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="400px"
        title="Datos Landing"
        columns={columns}
        data={clientesData}
        customStyles={reactTableStyle}
        pagination
      />
    </Box>
  );
};
