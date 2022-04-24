import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Layout>
          getLayout(
          <Component {...pageProps} />)
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
