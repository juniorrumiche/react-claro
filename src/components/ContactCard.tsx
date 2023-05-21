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

export const ContactCard = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    let response = await fetch("/api/clientes/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status == 201) {
      resetForm();
      toast({
        title: "Exito!",
        status: "success",
        description: "sus datos has sido registrados con exito",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    toast({
      title: "Error!",
      status: "error",
      description: (await response.json()).message || "ha ocurrido un error",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex
      bgImage="url('/banner.jpg')"
      bgSize="cover"
      bgRepeat="round"
      position="relative"
    >
      <Stack zIndex={2} py={10} px={5}>
        <Box
          color={useColorModeValue("gray.600", "gray.800")}
          w="full"
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.50")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>DNI</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <AiOutlineIdcard />
                </InputLeftElement>
                <Input
                  value={formData.dni}
                  onChange={(e) => handlerForm(e)}
                  type="email"
                  name="dni"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Correo Electronico</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <AiOutlineMail />
                </InputLeftElement>

                <Input
                  value={formData.email}
                  onChange={(e) => handlerForm(e)}
                  type="email"
                  name="email"
                />
              </InputGroup>
            </FormControl>
            <HStack>
              <FormControl isRequired>
                <FormLabel>Plan</FormLabel>
                <Select onChange={(e) => handlerForm(e)} name="opcion">
                  <option value="0">item 1</option>
                  <option value="1">item 2</option>
                  <option value="3">item 3</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <AiFillPhone />
                  </InputLeftElement>

                  <Input
                    value={formData.telefono}
                    onChange={(e) => handlerForm(e)}
                    type="tel"
                    name="telefono"
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <Stack spacing={10}>
              <Button
                isLoading={isLoading}
                onClick={async () => {
                  setIsLoading(true);
                  await submitForm();

                  setIsLoading(false);
                }}
                loadingText="Enviando"
                colorScheme="red"
                leftIcon={<AiFillSave size={20} />}
              >
                Enviar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
