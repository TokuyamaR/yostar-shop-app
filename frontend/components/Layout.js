import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { logout } from "../lib/auth";

export const Layout = (props) => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>Yostar Shop</title>
      </Head>
      <header>
        <nav className="w-full p-4 bg-slate-600">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl text-red-300">Yostar Shop</a>
            </Link>
            <ul className="flex flex-row ml-auto text-white gap-x-4">
              {user ? (
                <li>
                  <Link href="/">
                    <a className="hover:underline" onClick={logout}>
                      ログアウト
                    </a>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href="/login">
                    <a className="hover:underline">ログイン</a>
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <h3 className="font-bold text-white">{user.username}</h3>
                </li>
              ) : (
                <li>
                  <Link href="/register">
                    <a className="hover:underline">新規登録</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <div className="p-8">{props.children}</div>
    </div>
  );
};
