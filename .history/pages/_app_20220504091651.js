import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import AuthLayout from "../components/layouts/AuthLayout";
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

const router = useRouter();
useEffect(() => {
  const handleRouteChange = (url) => {
    gtag.pageview(url);
  };
  router.events.on("routeChangeComplete", handleRouteChange);
  return () => {
    router.events.off("routeChangeComplete", handleRouteChange);
  };
}, [router.events]);

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
