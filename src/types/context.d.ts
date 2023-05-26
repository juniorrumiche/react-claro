import { UseToastOptions } from "@chakra-ui/react";
import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

export interface AuthProviderType {
  children: ReactNode | ReactElement;
}

export interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated?: Dispatch<SetStateAction<boolean>>;
  ToastOptions: UseToastOptions | undefined | null;
  sleep: (ms: number) => Promise<unknown>;
  login?: (email: string, password: string) => Promise<void>;
  token: () => string | null | undefined;
}
