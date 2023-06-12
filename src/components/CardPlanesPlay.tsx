import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { MdOutlineSpeed, MdWhatsapp } from "react-icons/md";
import { PlanesBaseType } from "../types/db";

export const CardPlanesPlay = ({
  mb_standar,
  mb_fullclaro,
  precio_promo,
  precio_real,
  duracion_promo
}: PlanesBaseType) => {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"sm"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text fontSize={"lg"} color="green.500" fontWeight={500} p={2} px={3}>
            <MdOutlineSpeed size={90} />
            {mb_standar} Mbps
          </Text>
          
       
              <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>S./</Text>
              <Text fontSize={"4xl"} fontWeight={800}>
                {precio_promo.toFixed(2)}
              </Text>
              <Text color={"gray.500"}>x {duracion_promo == 1 ? <text>1 mes</text>:<text>3 meses</text>}</Text>
            </Stack>




          { precio_real != 0  && precio_promo !=0 ? <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize='x'><b>El precio real es S/. {precio_real} por mes</b></Text>: null }
          <Text color="gray.500">Tu contrato renueva cada mes</Text>

        </Stack>

        <Box bg={useColorModeValue("white", "gray.800")} px={6} py={5}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Llamadas ilimitadas
            </ListItem>

            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Wi-Fi 2.4GHz y 5GHz
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Series y peliculas en HD
            </ListItem>
            {
              mb_fullclaro != 0 ? (
                <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                
                <b>{mb_fullclaro}Mbps</b> Full Claro
              </ListItem>
              ): null

            }

            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              100 min a Operador Nacional
            </ListItem>
          </List>

          <Button
            leftIcon={<MdWhatsapp size={25} />}
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Mas Información
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
