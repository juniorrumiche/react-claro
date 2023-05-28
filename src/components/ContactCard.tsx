import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {
  AiFillPhone,
  AiFillSave,
  AiOutlineIdcard,
  AiOutlineMail,
} from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import { ContactCardType } from "../types/componente";
import { useAuth } from "../context/AuthContext";

export const ContactCard = ({ select_input_items }: ContactCardType) => {
  const [isLoading, setIsLoading] = useState(false);
  const { ToastOptions } = useAuth();
  const [formData, setFormData] = useState({
    dni: "",
    telefono: "",
    email: "",
  });
  const toast = useToast();

  const handlerForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      dni: "",
      telefono: "",
      email: "",
    });
  };

  const submitForm = async () => {
    let response = await fetch("/api/v1/clientes/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status == 201) {
      resetForm();
      toast({
        ...ToastOptions,
        title: "Exito!",
        status: "success",
        description: "sus datos has sido registrados con exito",
      });
      return;
    }

    toast({
      ...ToastOptions,
      title: "Error!",
      status: "error",
      description: (await response.json()).message || "ha ocurrido un error",
    });
  };

  return (
    <Flex
      bgImage="url('/banner.jpg')"
      bgSize="cover"
      bgRepeat="round"
      position="relative"
      py={10}
    >
      <Stack zIndex={2} py={10} px={5}>
        <Box
          color={useColorModeValue("gray.600", "gray.800")}
          w="full"
          rounded={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel color="white">DNI</FormLabel>
              <InputGroup bg="white" borderRadius="2xl">
                <InputLeftElement>
                  <AiOutlineIdcard size={25} />
                </InputLeftElement>
                <Input
                  py={5}
                  placeholder="Tu DNI"
                  value={formData.dni}
                  maxLength={8}
                  onChange={(e) => handlerForm(e)}
                  type="tel"
                  name="dni"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="white">Correo Electronico</FormLabel>
              <InputGroup bg="white" borderRadius="2xl">
                <InputLeftElement>
                  <AiOutlineMail size={25} />
                </InputLeftElement>

                <Input
                  py={5}
                  placeholder="Correo Electronico"
                  value={formData.email}
                  onChange={(e) => handlerForm(e)}
                  type="email"
                  name="email"
                />
              </InputGroup>
            </FormControl>
            <HStack>
              <FormControl isRequired>
                <FormLabel color="white">Plan</FormLabel>
                <Select
                  bg="white"
                  onChange={(e) => handlerForm(e)}
                  name="opcion"
                >
                  <option style={{ backgroundColor: "white" }} value="">
                    Seleccione
                  </option>
                  {select_input_items.map((item, index) => (
                    <option
                      style={{ backgroundColor: "white" }}
                      key={index}
                      value={`${item.value}`}
                    >
                      {item.text}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Telefono</FormLabel>
                <InputGroup bg="white" borderRadius="2xl">
                  <InputLeftElement bg="white" borderRadius="2xl">
                    <AiFillPhone size={25} />
                  </InputLeftElement>

                  <Input
                    py={5}
                    value={formData.telefono}
                    placeholder="Telefono"
                    onChange={(e) => handlerForm(e)}
                    maxLength={9}
                    type="tel"
                    name="telefono"
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <Stack spacing={10}>
              <Button
                mt={3}
                py={5}
                isLoading={isLoading}
                onClick={async () => {
                  setIsLoading(true);
                  await submitForm();

                  setIsLoading(false);
                }}
                loadingText="Enviando informacion"
                bg="#E53E3E"
                color="white"
                leftIcon={<AiFillSave size={20} />}
              >
                Enviar informacion
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
