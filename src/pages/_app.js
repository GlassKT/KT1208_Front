import Head from "next/head";
import { ThemeProvider } from "styled-components";
import wrapper from "../stores/configureStore";
// import { GlobalStyle } from "../styles/global-style";
import { lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Head>
        <title>GlassKT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
