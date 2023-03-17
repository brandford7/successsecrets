// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { Script } from 'next/script'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
         
          {/*   <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
              <script>
            window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd =
            ezstandalone.cmd || [];
            ezstandalone.cmd.push(function() {
              ezstandalone.define(102, 103)
             ezstandalone.enable()
            ezstandalone.display()});
            </script>*/}
           
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
