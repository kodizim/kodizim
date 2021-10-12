import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

/* ADD GA */
class Site extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Site;
