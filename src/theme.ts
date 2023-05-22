import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...config,
    styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#FAFAFA", "black.800")(props),
      },
    }),
  },
});
