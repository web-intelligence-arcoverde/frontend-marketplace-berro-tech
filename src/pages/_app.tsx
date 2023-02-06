import '@/styles/globals.css';
import type {AppProps} from 'next/app';

import React from 'react';
import Head from 'next/head';

import {Provider} from 'react-redux';
import {store} from '../store';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Berro Tech</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
