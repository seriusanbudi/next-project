import "styles/globals.css";
import "styles/tailwind.css";

import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { theme } from "theme";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Your best app name</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme["default-theme"]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
