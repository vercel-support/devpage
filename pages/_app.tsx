import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
