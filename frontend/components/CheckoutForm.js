import { useState, useContext } from "react";
import { CreditPaymentSection } from "./CreditPaymentSection";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import { AppContext } from "../context/AppContext";
import { API_URL } from "../config";

export const CheckoutForm = () => {
  const { cart } = useContext(AppContext);
  const [address, setAddress] = useState("");
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(undefined);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const checkoutOrder = async () => {
    const cardElement = elements.getElement(CardElement);
    const token = await stripe.createToken(cardElement);
    const userToken = Cookies.get("token");
    await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        amount: Number(cart.totalPrice),
        items: cart.items,
        address: address,
        token: token.token
          ? token.token.id
          : setIsPaymentSuccess(token.error.message),
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsPaymentSuccess(true);
        } else {
          setIsPaymentSuccess(false);
        }
      })
      .catch((error) => {
        alert("通信に失敗しました", error);
      });
  };
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
              onChange={(e) => handleChange(e)}
            />
          </label>
          <CreditPaymentSection
            checkoutOrder={checkoutOrder}
            isPaymentSuccess={isPaymentSuccess}
          />
        </form>
      </div>
    </div>
  );
};
