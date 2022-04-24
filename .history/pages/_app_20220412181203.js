import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   const getLayout = Component.getLayout || ((page) => page);
 /* if (Component.getLayout) {
    return Component.getLayout(
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }*/

  return getLayout((
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  ))
}

export default MyApp;
