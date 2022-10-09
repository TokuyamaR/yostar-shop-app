import { useState } from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import createApolloClient from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import AppContext from "../context/AppContext";

// ====== next/app を利用したpageの表示 ======
// import App from "next/app";
// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <>
//         <Head></Head>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </>
//     );
//   }
// }

// ====== apolloを利用したpageの表示 ======
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const client = createApolloClient();
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <ApolloProvider client={client}>
        <Head></Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AppContext.Provider>
  );
}
