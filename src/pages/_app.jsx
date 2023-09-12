import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Navbar from "..//components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import ContextProvider from "../components/ContextProvider";
import Head from "next/head";
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
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <ContextProvider>
            <Head>
              <link rel="icon" href={favIcon.src} />
            </Head>
            <Navbar />
            <Component {...pageProps} />
          </ContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
