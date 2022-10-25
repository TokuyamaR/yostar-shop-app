import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useDisabled } from "../hooks/useDisabled";

export const Cart = () => {
  const { addItem, cart } = useContext(AppContext);
  const { isDisabled, disable, enable } = useDisabled();

  useEffect(() => {
    cart.items.length > 0 ? enable() : disable();
  }, [cart.items, disable, enable]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-80 h-fit">
      <h3 className="p-4 text-xl font-bold border-b border-gray-200">
        注文一覧
      </h3>
      {cart.items ? (
        <>
          <div className="p-4 space-y-4 border-b border-gray-200">
            {cart.items.map((item) => {
              if (item.quantity > 0) {
                return (
                  <div key={item.id} className="space-y-4">
                    <div className="space-x-2">
                      <span>{item.name}</span>
                      <span className="font-bold">¥&nbsp;{item.price}</span>
                    </div>
                    <div className="space-x-2">
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => addItem(item)}
                      >
                        +
                      </button>
                      <button className="px-2 bg-gray-200 rounded">-</button>
                      <span>数量：{item.quantity}</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="p-4 space-y-4">
            <div className="space-x-2 font-bold">
              <span>合計</span>
              <span>{`${cart.totalPrice}円`}</span>
            </div>
            <div className="text-right">
              <button
                disabled={isDisabled}
                className={`px-4 py-2 text-white bg-blue-600 rounded hover:opacity-80 ${
                  isDisabled ? "bg-gray-200" : ""
                }`}
              >
                注文する
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
