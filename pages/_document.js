// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="ads.txt" href="/ads.txt" />
          {/* <script
            data-ad-client="YOUR_AD_CLIENT_ID"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
