import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";
import { registerUser } from "../lib/auth";

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const appContext = useContext(AppContext);

  const handleRegister = () => {
    registerUser(data.username, data.email, data.password)
      .then((response) => {
        console.log("ユーザー登録成功：", response.data.user);
        appContext.setUser(response.data.user);
      })
      .catch((error) => console.log("エラー内容：", error.response));
  };
  return (
    <div className="space-y-4">
      <section>
        <div className="flex flex-col w-2/5 m-auto space-y-4">
          <h2 className="text-2xl text-center">ユーザー登録</h2>
          <label className="flex flex-col">
            <span>ユーザー名</span>
            <input
              type="text"
              name="username"
              className="p-1 border border-gray-400"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </label>
          <label className="flex flex-col">
            <span>メールアドレス</span>
            <input
              type="email"
              name="email"
              className="p-1 border border-gray-400"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </label>
          <label className="flex flex-col">
            <span>パスワード</span>
            <input
              type="password"
              name="password"
              className="p-1 border border-gray-400"
              onChange={(e) => setData({ ...data, password: e.target.value })}
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
              onClick={() => handleRegister()}
            >
              送信
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
