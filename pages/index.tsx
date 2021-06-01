import Head from "next/head";
import React from "react";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
    </>
  );
}
