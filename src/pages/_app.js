import Head from "next/head";
import { ThemeProvider } from "styled-components";
import RightBar from "../common/rightbar/RightBar";
import wrapper from "../stores/configureStore";
import { lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GlassKT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
        <RightBar />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
