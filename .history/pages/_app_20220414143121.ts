import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import AuthLayout from "../components/AuthLayout";

function MyApp() {
  /* if (Component.getLayout) {
    return Component.getLayout(
      <ChakraProvider theme={theme}>
        <AuthLayout>
          
          <Component {...pageProps} />
        </AuthLayout>
      </ChakraProvider>
    );
  } */

  return (
    <>
   
  </>
  );
}

export default MyApp;
