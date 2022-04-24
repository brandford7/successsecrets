import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
   <Session <ChakraProvider theme={theme}>

     
    </ChakraProvider>
  );
}

export default MyApp;
