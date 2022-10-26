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
    let { items, totalPrice } = cart;
    const newItem = items.find((i) => i.id === item.id);
    if (!newItem) {
      // カートに同じ商品がない時
      item.quantity = 1;
      const newCartItems = [...items, item];
      setCart({
        items: newCartItems,
        totalPrice: totalPrice + item.price,
      });
      Cookies.set("cart", JSON.stringify(newCartItems));
    } else {
      // カートに同じ商品がある時
      const newCartItems = items.map((item) =>
        item.id === newItem.id
          ? Object.assign({}, item, { quantity: item.quantity + 1 })
          : item
      );
      setCart({
        items: newCartItems,
        totalPrice: totalPrice + item.price,
      });
      Cookies.set("cart", JSON.stringify(newCartItems));
    }
  };

  const removeItem = (item) => {
    let { items, totalPrice } = cart;
    const newItem = items.find((i) => i.id === item.id);
    if (item.quantity > 1) {
      const newCartItems = items.map((item) =>
        item.id === newItem.id
          ? Object.assign({}, item, { quantity: item.quantity - 1 })
          : item
      );
      setCart({
        items: newCartItems,
        totalPrice: totalPrice - item.price,
      });
      Cookies.set("cart", JSON.stringify(newCartItems));
    } else {
      const index = items.findIndex((item) => item.id === newItem.id);
      items.splice(index, 1);
      setCart({
        items,
        totalPrice: totalPrice - item.price,
      });
      Cookies.set("cart", JSON.stringify(items));
    }
  };

  useAccessControl();

  useEffect(() => {
    const token = Cookies.get("token");
    const cartValue = Cookies.get("cart");

    if (cartValue !== undefined) {
      JSON.parse(cartValue).forEach((item) => {
        setCart({
          items: JSON.parse(cartValue),
          totalPrice: (cart.totalPrice += item.price * item.quantity),
        });
      });
    }

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
    <AppContext.Provider value={{ user, setUser, addItem, removeItem, cart }}>
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
