import "@/styles/globals.css";
import type { AppProps } from "next/app";

import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "../store";
import { ModalGeneric } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  if (!domLoaded) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <html lang="pt-BR">
        <Head>
          <title>Berro Tech</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
          <ModalGeneric />
        </Provider>
      </html>
    );
  }
}

export default MyApp;
