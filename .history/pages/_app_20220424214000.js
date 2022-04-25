import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import AuthLayout from "../components/layouts/AuthLayout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
         <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </ChakraProvider>
        </SessionProvider>
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
