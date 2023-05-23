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
import { CardPlanNetFlixType } from "../../types/componente";
import { MdSpeed } from "react-icons/md";

export const CardPlanNetflix = ({
  mb_standar,
  precio_total,
  modalidad,
  numero_pantallas,
  mb_fullclaro,
}: CardPlanNetFlixType) => {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text fontSize={"lg"} color="gray.500" fontWeight={500} p={2} px={3}>
            <MdSpeed size={75} />
            {mb_standar} Mbps
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>S./</Text>
            <Text fontSize={"5xl"} fontWeight={800}>
              {precio_total.toFixed(2)}
            </Text>
            <Text color={"gray.500"}>/mes</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {modalidad}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {numero_pantallas} Pantallas
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              <b>{mb_fullclaro}Mbps</b> Full Claro
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Mira series sin publicidad
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
