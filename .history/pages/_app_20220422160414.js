import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import AuthLayout from "../components/AuthLayout";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        
        <ChakraProvider theme={theme}>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </ChakraProvider>
      </Provider>
    );
  }

  return (
    <>
      <Provider store={store}>
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
