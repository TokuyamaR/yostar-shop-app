import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import createApolloClient from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { AppContext } from "../context/AppContext";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import { useRouter } from "next/router";
import { isLoggedIn } from "../utils/isLoggedIn";

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);
  const client = createApolloClient();

  const useAccessControl = () => {
    const router = useRouter();
    useEffect(() => {
      if (/^\/(login|register)/.test(router.asPath) && isLoggedIn()) {
        router.replace("/");
      }
      if (!/^\/(login|register)/.test(router.asPath) && !isLoggedIn()) {
        router.replace("/login");
      }
    }, [router]);
  };

  useAccessControl();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetch(`${API_URL}/api/users/me`, {
        headers: { Authorization: "Bearer " + token },
      })
        .then(async (response) => {
          if (!response.ok) {
            Cookies.remove("token");
            setUser(null);
            return null;
          }
          const res = await response.json();
          setUser(res);
        })
        .catch((error) => {
          alert("user fetch error:", error.message);
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
};

export default App;
