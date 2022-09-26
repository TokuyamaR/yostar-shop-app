import React from "react";
import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Componet, pageProps } = this.props;
    return (
      <>
        <Head></Head>
        <Comonent {...pageProps} />
      </>
    );
  }
}
