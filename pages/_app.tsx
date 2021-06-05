import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
