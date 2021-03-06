import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import AuthLayout from "../components/layouts/AuthLayout";
import Layout from "../components/layouts/Layout";
import Script from "next/script";
import { useEffect } from "react";

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
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
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
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
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
