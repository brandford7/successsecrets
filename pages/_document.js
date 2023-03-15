// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import EzoicAd from "../components/adverts/EzoicAd";


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async='' src="//www.ezojs.com/ezoic/sa.min.js"></script>
          <script src='../sa.min.js' type="text/javascript" async=''>

          </script>
         

        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
