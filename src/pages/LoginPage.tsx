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
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ADMIN_PATH, API_AUTH_PATH, COOKIE_NAME } from "../config/config";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isloading, setIsLoading] = useState(false);
  const formBackground = useColorModeValue("whiteAlpha.400", "whiteAlpha.100");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { ToastOptions, sleep, setIsAuthenticated } = useAuth();
  const toast = useToast();

  const login = async () => {
    try {
      let response = await axios.post(API_AUTH_PATH, {
        email,
        password,
      });
      const token = response.data.token || false;
      if (response.status == 200 && token) {
        Cookies.set(COOKIE_NAME, response.data.token, { expires: 1 / 24 });
        setIsAuthenticated && setIsAuthenticated(true);
        navigate(ADMIN_PATH);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          ...ToastOptions,
          status: "error",
          title: "Error",
          description: error.response?.data.message || "ha ocurrido un error",
        });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title> Log In | Tienda Claro </title>
      </Helmet>
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
              await login();
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
    </>
  );
};
