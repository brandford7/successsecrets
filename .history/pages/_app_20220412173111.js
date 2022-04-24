import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import SignIn from "./auth/signin";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = SignIn.getLayout ?? defaultPageLayout;
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
