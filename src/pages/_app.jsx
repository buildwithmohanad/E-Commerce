import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Navbar from "..//components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import ContextProvider from "../components/ContextProvider";
// import Head from "next/head";
import { Html, Head } from 'next/document';

import favIcon from "../assets/commerce.svg"
const Theme = createTheme({
  typography: {
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: { main: "#2f4ca8" },
    secondary: { main: "#ff214c" }
  }
});


export default function MyApp({ Component, pageProps }) {
  return (
    <Html lang="en">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <ContextProvider>
            <Head>
              <title>E-commerce</title>
              <meta name="description" content="E-commerce app built with next.js by Mohannad Aldardiry"/>
              <link rel="icon" href={favIcon.src} />
            </Head>
            <Navbar />
            <Component {...pageProps} />
          </ContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Html>
  );
}
