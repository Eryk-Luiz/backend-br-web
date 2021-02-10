import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import BlockedPage from '../layout/BlockedPage';
import api from '../services/api';
import GlobalStyle from '../styles/globalStyle';
import Header from '../components/Header';
import useStickyState from '../hooks/useStickyState';
import {
  light as LightTheme,
  dark as DarkTheme,
} from '../styles/themes/GregDuSoli';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const googleId = process.env.gcloud_id;
  const [theme, setTheme] = useStickyState('theme', DarkTheme);
  const [blocked, setBlocked] = useState({
    blocked: false,
    remaining: 0,
    reset: 0,
  });

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(LightTheme));

    api.get('/rate_limit').then(({ data: { rate } }) =>
      setBlocked({
        blocked: rate.remaining === 0,
        remaining: rate.limit,
        reset: rate.reset,
      }),
    );
  }, []);
  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? DarkTheme : LightTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Backend Brasil</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${googleId}');

          `,
            }}
          />
        </Head>

        {blocked.blocked ? (
          <>
            <Header toggleTheme={toggleTheme} />
            <BlockedPage />
          </>
        ) : (
          <>
            <Header toggleTheme={toggleTheme} />
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
