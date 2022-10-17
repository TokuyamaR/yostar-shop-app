export const Cart = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-80 h-fit">
      <h3 className="p-4 text-xl font-bold border-b border-gray-200">
        注文一覧
      </h3>
      <div className="p-4 space-y-4 border-b border-gray-200">
        <p>料理</p>
        <div className="space-x-2">
          <span>サラダ</span>
          <span className="font-bold">¥&nbsp;200</span>
        </div>
        <div className="space-x-2">
          <button className="px-2 bg-gray-200 rounded">+</button>
          <button className="px-2 bg-gray-200 rounded">-</button>
          <span>数量：1</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-x-2 font-bold">
          <span>合計</span>
          <span>¥&nbsp;2,500円</span>
        </div>
        <div className="text-right">
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:opacity-80">
            注文する
          </button>
        </div>
      </div>
    </div>
  );
};
