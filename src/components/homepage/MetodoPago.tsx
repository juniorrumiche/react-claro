import {
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBox, FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineCreditScore } from "react-icons/md";
import { MetodoPagoItemType } from "../../types/componente";

const MetodoPagoItem = ({ children }: MetodoPagoItemType) => {
  return (
    <Flex
      minHeight={190}
      flexDirection="column"
      bg={useColorModeValue("white", "whiteAlpha.200")}
      gap={5}
      boxShadow="lg"
      alignItems="center"
      px={3}
      py={8}
      borderRadius="lg"
    >
      {children}
    </Flex>
  );
};

export const MetodoPago = () => {
  return (
    <>
      <Container
        px={5}
        mt={10}
        minWidth={{ base: "1xl", md: "7xl", lg: "6xl" }}
      >
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={5}
        >
          <GridItem w="full">
            <MetodoPagoItem>
              <MdOutlineCreditScore color="gray" size={50} />
              <Text width="70%">
                Paga con la comodidad y en cuotas de tu marca preferida.
              </Text>
            </MetodoPagoItem>
          </GridItem>
          <GridItem w="full">
            <MetodoPagoItem>
              <FaMoneyBillWave size={40} color="gray" />
              <Text width="70%">
                Paga a través de tu banca personal con Pago Efectivo.
              </Text>
            </MetodoPagoItem>
          </GridItem>
          <GridItem w="full">
            <MetodoPagoItem>
              <FaBox size={40} color="gray" />
              <Text width="70%">
                Si lo prefieres paga al recibir tu producto.
              </Text>
            </MetodoPagoItem>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
