import { useState, useEffect } from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import createApolloClient from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { AppContext } from "../context/AppContext";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import axios from "axios";

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

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetch(`${API_URL}/api/users/me`, {
        headers: { Authorization: "Bearer " + token },
      })
        .then(async (response) => {
          if (!response.ok) {
            console.log("response NG:", response);
            Cookies.remove("token");
            setUser(null);
            return null;
          }
          console.log("response OK");
          const res = await response.json();
          setUser(res);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

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
