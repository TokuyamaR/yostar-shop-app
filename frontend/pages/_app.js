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
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
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

  const addItem = (item) => {
    let { items } = cart;
    const newItem = items.find((i) => i.id === item.id);
    // カートに同じ商品がない時
    if (!newItem) {
      item.quantity = 1;
      setCart({
        items: [...items, item],
        totalPrice: cart.totalPrice + item.price,
      });
      Cookies.set("cart", cart.items);
      // カートに同じ商品がある時
    } else {
      setCart({
        items: cart.items.map((item) => {
          item.id === newItem.id
            ? Object.assign({}, item, { quantity: item.quantity + 1 })
            : item;
        }),
        totalPrice: cart.totalPrice + item.price,
      });
      Cookies.set("cart", cart.items);
    }
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
