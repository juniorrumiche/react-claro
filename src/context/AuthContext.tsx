import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { AuthContextData, AuthProviderType } from "../types/context";
import Cookies from "js-cookie";
import axios from "axios";
import { UseToastOptions, useToast } from "@chakra-ui/react";
import { API_AUTH_PATH, COOKIE_NAME } from "../config/config";

export const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  token: () => undefined,
  ToastOptions: {},
  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toast = useToast();

  const token = useCallback(() => Cookies.get(COOKIE_NAME), [isAuthenticated]);

  const ToastOptions: UseToastOptions = {
    isClosable: true,
    position: "top",
    duration: 5000,
  };

  const sleep = useCallback(
    (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
    []
  );

  const login = async (email: string, password: string) => {
    try {
      let response = await axios.post(API_AUTH_PATH, {
        email,
        password,
      });
      const token = response.data.token || false;
      if (response.status == 200 && token) {
        Cookies.set(COOKIE_NAME, response.data.token, { expires: 1 / 24 });
        setIsAuthenticated(true);
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

  const value = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      token,
      ToastOptions,
      login,
      sleep,
    }),
    [isAuthenticated, setIsAuthenticated, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
