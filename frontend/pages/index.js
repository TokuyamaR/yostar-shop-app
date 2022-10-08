import { useState } from "react";
import { ShopList } from "../components/shopList";

function HomePage() {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="お店の名前を入力してください。"
          className="w-64 p-2 border border-gray-400"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          type="submit"
          className="w-24 p-2 text-white bg-blue-600 rounded hover:opacity-80"
          onClick={() => setSearchWord(searchWord.toLocaleLowerCase())}
        >
          探す
        </button>
      </div>
      <div>
        <ShopList search={searchWord} />
      </div>
    </div>
  );
}

export default HomePage;
