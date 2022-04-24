import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    bg: {
      100: "#353f51",
      200: "#303540",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
  },
});

