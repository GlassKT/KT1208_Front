import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Leftbar from "../common/leftbar/Leftbar.jsx";
import wrapper from "../stores/configureStore";
import { lightTheme } from "../styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GlassKT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Leftbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
