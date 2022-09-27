import React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Foody!</title>
      </Head>
      <header>
        <nav className="p-4 w-full bg-slate-600">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="text-2xl text-red-300">Foody!</a>
            </Link>
            <ul className="flex flex-row gap-x-4 ml-auto text-white">
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
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
