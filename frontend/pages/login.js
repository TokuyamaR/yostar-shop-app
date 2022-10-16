import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Link from "next/link";
import { login } from "../lib/auth";

const Login = () => {
  const [data, setData] = useState({ identifier: "", password: "" });
  const appContext = useContext(AppContext);

  const handleLogin = () => {
    login(data.identifier, data.password)
      .then((response) => {
        appContext.setUser(response.data.user);
      })
      .catch((error) => alert("handle login error：", error.response));
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="space-y-4">
      <section>
        <div className="flex flex-col w-2/5 m-auto space-y-4">
          <h2 className="text-2xl text-center">ログイン</h2>
          <label className="flex flex-col">
            <span>メールアドレス</span>
            <input
              type="email"
              name="identifier"
              className="p-1 border border-gray-400"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="flex flex-col">
            <span>パスワード</span>
            <input
              type="password"
              name="password"
              className="p-1 border border-gray-400"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <div className="flex justify-between">
            <p className="text-sm">
              <Link href="/">
                <a className="text-blue-link hover:underline">
                  パスワードをお忘れの方
                </a>
              </Link>
            </p>
            <button
              type="submit"
              className="w-24 p-2 text-white bg-blue-600 rounded hover:opacity-80"
              onClick={() => handleLogin()}
            >
              ログイン
            </button>
            <Link href="/register">新規登録はこちら</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
