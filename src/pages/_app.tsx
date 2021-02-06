import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import BlockedPage from '../layout/BlockedPage';
import api from '../services/api';
import GlobalStyle from '../styles/globalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [blocked, setBlocked] = useState({
    blocked: false,
    remaining: 0,
    reset: 0,
  });

  useEffect(() => {
    api.get('/rate_limit').then(({ data: { rate } }) =>
      setBlocked({
        blocked: rate.remaining === 0,
        remaining: rate.limit,
        reset: rate.reset,
      }),
    );
  }, []);

  useEffect(() => {
    console.log(blocked);
  }, [blocked]);

  return (
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
      {blocked.blocked ? <BlockedPage /> : <Component {...pageProps} />}
    </>
  );
};

export default App;
