import Link from "next/link";

const Register = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl">ユーザー登録</h2>
      <section>
        <form className="flex flex-col w-1/2 space-y-4">
          <label className="flex flex-col">
            <span>ユーザー名</span>
            <input
              type="text"
              name="username"
              className="p-1 border border-gray-400"
            />
          </label>
          <label className="flex flex-col">
            <span>メールアドレス</span>
            <input
              type="email"
              name="email"
              className="p-1 border border-gray-400"
            />
          </label>
          <label className="flex flex-col">
            <span>パスワード</span>
            <input
              type="password"
              name="password"
              className="p-1 border border-gray-400"
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
            >
              送信
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
