import { CardElement } from "@stripe/react-stripe-js";

export const CreditPaymentSection = () => {
  return (
    <div>
      <label>
        <p className="text-gray-500">クレジット/デビットカード</p>
        <div className="p-1 border border-gray-300 rounded">
          <CardElement />
        </div>
      </label>
    </div>
  );
};
