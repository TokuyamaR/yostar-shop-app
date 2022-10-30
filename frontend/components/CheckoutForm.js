import { CreditPaymentSection } from "./CreditPaymentSection";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "../config";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
export const CheckoutForm = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-80 h-fit">
      <h3 className="p-4 text-lg border-b border-gray-200">決済情報</h3>
      <div className="p-4 space-y-4 border-b border-gray-200">
        <form action="post" className="space-y-4">
          <label>
            <p className="text-gray-500">住所</p>
            <input
              type="text"
              className="w-full p-1 border border-gray-300 rounded"
              placeholder="東京都港区六本木３丁目２−１"
            />
          </label>
          <Elements stripe={stripePromise}>
            <CreditPaymentSection />
          </Elements>
          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              注文を確認
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
