import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { store } from "src/redux/store";
import { Provider } from "react-redux";

interface IMyAppProps extends AppProps {}

function MyApp(props: IMyAppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>DRKDQL | Personal brand</title>
        <meta
          name="description"
          content="Personal brand for web/mobile/gaming projects and social media content creation."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Provider store={store}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Provider>
    </>
  );
}

export default MyApp;
