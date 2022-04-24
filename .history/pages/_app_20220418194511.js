import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import AuthLayout from "../components/AuthLayout";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider>
        <ChakraProvider theme={theme}>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </ChakraProvider>
      </Provider>
    );
  }

  return (
    <></Provider>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
