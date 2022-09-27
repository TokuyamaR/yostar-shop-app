import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head></Head>
        <Component {...pageProps} />
      </>
    );
  }
}
