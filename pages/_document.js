// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head><meta name="monetag" content="e75253b629487386314b10de284b3e80"/></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
