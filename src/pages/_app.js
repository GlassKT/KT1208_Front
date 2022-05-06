import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Leftbar from "../common/leftbar/Leftbar.jsx";
import wrapper from "../stores/configureStore";
import { lightTheme } from "../styles/theme";
import "../styles/globals.css";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function MyApp({ Component, pageProps }) {
  const { login } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>GlassKT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <FlexBox>
          {login && <Leftbar />}
          <Component {...pageProps} />
        </FlexBox>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
