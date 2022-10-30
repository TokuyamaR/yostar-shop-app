import { Cart } from "../components/Cart";
import { CheckoutForm } from "../components/CheckoutForm";

const checkout = (props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">注文情報の確認</h1>
      <div className="flex">
        <Cart />
        <div>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default checkout;
