"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartItems: React.FC = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCustomizationRedirect = () => {
    router.push("/customization");
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Votre panier est vide.</p>
          <button
            onClick={handleCustomizationRedirect}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold"
          >
            Personnaliser votre manette
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">Prix: {item.price}€</p>
                <div className="flex items-center mt-2">
                  <label
                    htmlFor={`quantity-${item.id}`}
                    className="mr-2 text-gray-700"
                  >
                    Quantité:
                  </label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    min={1}
                    className="w-16 p-2 border border-gray-300 rounded-lg text-gray-700"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600 mt-2 text-sm"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white p-6 rounded-lg shadow-md text-right">
            <h3 className="text-xl font-bold text-gray-800">
              Total: {getTotalPrice()}€
            </h3>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleCustomizationRedirect}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold"
              >
                Personnaliser votre manette
              </button>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-bold">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
