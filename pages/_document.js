// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import AdsterraSocialBar from "../components/adverts/SocialBarAd";
import AdsterraNative from "../components/adverts/NativeAds";
import AdsterraPopUnder from "../components/adverts/PopUnderAds";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            crossOrigin="anonymous"
          ></script>
          <AdsterraSocialBar />
          {/*<AdsterraNative/>*/}
          <AdsterraPopUnder />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
