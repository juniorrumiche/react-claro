import {
  Button,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Cookie from "js-cookie";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isloading, setIsLoading] = useState(false);
  const formBackground = useColorModeValue("whiteAlpha.400", "whiteAlpha.100");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const loginUser = async () => {
    try {
      let response = await axios.post("/api/auth", {
        email,
        password,
      });

      if (response.status == 200) {
        Cookie.set("_session", response.data.token, { expires: 1 });
        navigate("/admin");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          position: "top",
          status: "error",
          title: "Error",
          description: error.response?.data.message || "ha ocurriod un error",
          isClosable: true,
          duration: 5000,
        });
      }
    }
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bg={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        bg={formBackground}
        p={12}
        position="relative"
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button
          onClick={async () => {
            setIsLoading(true);
            await sleep(2000);
            await loginUser();
            setIsLoading(false);
          }}
          isLoading={isloading}
          loadingText={"Verificando "}
          colorScheme="teal"
          mb={8}
        >
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <IconButton
            position="fixed"
            onClick={toggleColorMode}
            top={5}
            right={5}
            icon={colorMode === "dark" ? <MdLightMode /> : <MdDarkMode />}
            aria-label=".."
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};
