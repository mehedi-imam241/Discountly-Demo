import "@/styles/globals.scss";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider as MuiProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../../src/theme";
import createEmotionCache from "../../src/createEmotionCache";
import Navbar from "@/component/navbar";
import { Provider } from "react-redux";
import store from "@/redux/store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Discountly</title>
          <meta
            name="description"
            content="Automatically search for coupons on 30,000+ sites around the globe"
          />
        </Head>
        <MuiProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {/*<Navbar />*/}
          <Component {...pageProps} />
        </MuiProvider>
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
