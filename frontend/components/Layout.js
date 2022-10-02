import React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";

const Layout = (props) => {
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
              <li>
                <Link href="/">
                  <a className="hover:underline">ログイン</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:underline">新規登録</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="mt-4">{props.children}</div>
    </div>
  );
};

export default Layout;
