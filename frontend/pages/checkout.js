import { Cart } from "../components/Cart";
import { CheckoutForm } from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "../config";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
const checkout = (props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">注文情報の確認</h1>
      <div className="flex">
        <Cart />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default checkout;
