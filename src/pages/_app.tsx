import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import GlobalStyle from '../styles/globalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>Backend Brasil</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />
  </>
);

export default App;
