export const Cart = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-80 dark:text-white dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200">注文一覧</div>
      <div className="p-4 space-y-4">
        <p>料理</p>
        <div className="space-x-2">
          <span>サラダ</span>
          <span>¥&nbsp;200円</span>
        </div>
      </div>
    </div>
  );
};
