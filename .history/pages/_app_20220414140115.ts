import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import AuthLayout from "../components/AuthLayout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
    <SessionProvider session={session}>
      <ChakraProvider theme={theme} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
