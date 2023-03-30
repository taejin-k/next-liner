import { GlobalStyle } from "@/styles/global-style";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import Wrap from "./_wrap";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Head>
        <title>next-liner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrap>
        <Component {...pageProps} />
      </Wrap>
    </Provider>
  );
};

export default App;
