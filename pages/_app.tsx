import '../styles/globals.css'
import App, { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/material-ui/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/material-ui/theme'


const clientSideEmotionCache = createEmotionCache();

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: IMyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
     <CacheProvider value={emotionCache}>
      <Head> 
        <title>DRKDQL | Personal brand</title>
        <meta name="description" content="Personal brand for web/mobile/gaming projects and social media content creation."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence> 
          <Component {...pageProps}/> 
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: any) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
