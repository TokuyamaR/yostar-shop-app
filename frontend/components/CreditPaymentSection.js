import { CardElement } from "@stripe/react-stripe-js";

export const CreditPaymentSection = (props) => {
  return (
    <div className="space-y-4">
      <label>
        <p className="text-gray-500">クレジット/デビットカード</p>
        <div className="p-1 border border-gray-300 rounded">
          <CardElement />
        </div>
      </label>
      <div className="text-right">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={props.checkoutOrder}
        >
          注文を確認
        </button>
        {props.isPaymentSuccess !== undefined &&
          (props.isPaymentSuccess !== true ? (
            <p className="font-bold text-red-500">決済失敗</p>
          ) : (
            <p className="font-bold text-green-500">決済成功</p>
          ))}
      </div>
    </div>
  );
};
