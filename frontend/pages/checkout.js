import { Cart } from "../components/Cart";

const checkout = (props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">注文情報の確認</h1>
      <div className="flex">
        <div className="grid grid-cols-3 gap-4"></div>
        <Cart />
      </div>
    </div>
  );
};

export default checkout;
