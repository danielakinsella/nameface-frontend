import Head from "next/head";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Daniela Kinsella - Staff Software Engineer at The New York Times" />
        <meta name="robots" content="index, follow" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>Daniela Kinsella - Staff Software Engineer</title>

      </Head>
      
        <Component {...pageProps} />

    </>
  );
}
export default MyApp;
