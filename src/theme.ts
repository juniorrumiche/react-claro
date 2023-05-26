import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { createTheme } from "react-data-table-component";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.50", "gray.700")(props),
      },
    }),
  },
});

const chakraTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
});

createTheme("custom", {
  text: {
    primary: chakraTheme.colors.gray[200],
    secondary: chakraTheme.colors.gray[400],
  },
  background: {
    default: "#394353",
  },
  context: {
    background: chakraTheme.colors.gray[700],
    text: chakraTheme.colors.gray[50],
  },
  divider: {
    default: chakraTheme.colors.gray[700],
  },
  sortFocus: {
    default: "#2aa198",
  },
  button: {
    default: "#2aa198",
    hover: "rgba(0,0,0,.08)",
    focus: "rgba(255,255,255,.12)",
    disabled: "rgba(255, 255, 255, .34)",
  },
});

export const reactTableStyle = {
  rows: {
    style: {
      minHeight: "60px",
      "&:hover": {
        backgroundColor: "#9DECF9 !important",
      },
    },
  },
};
