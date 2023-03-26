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
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { Analytics } from "@vercel/analytics/react";




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
            <Script
              id="show-ad"
              async
              src="https://fundingchoicesmessages.google.com/i/pub-3825617756167561?ers=1"
              nonce="55nt8l_NwNSXsr9GjA2oMw"
              dangerouslySetInnerHTML={{
                __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`,
              }}
            />

            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3825617756167561"
              crossOrigin="anonymous"
            />

            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </ChakraProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
