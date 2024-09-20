"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import CustomizationForm from "@/app/components/CustomizationForm";

const CustomizationPage: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(149);
  const [customItem, setCustomItem] = useState<any>(null);

  const handlePriceUpdate = (newPrice: number) => {
    setTotalPrice(newPrice);
  };

  const handleAddToCart = (item: any) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...currentCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCustomItem(item);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="min-h-screen bg-white">
        <section className="bg-black text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">GAMEBOY ADVANCE</h1>
            <p className="mt-4 text-lg">À partir de 149€</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src="/images/green-gameboy.png"
                alt="Gameboy Advance"
                className="w-3/4 h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Configuration
              </h2>
              <CustomizationForm
                onPriceUpdate={handlePriceUpdate}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-semibold text-gray-800">
              Total: {totalPrice} €
            </h3>
            <p className="text-gray-500 mt-2">
              Acompte (30%) : {(totalPrice * 0.3).toFixed(2)} €
            </p>
            <button
              className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg"
              onClick={() => handleAddToCart(customItem)}
            >
              Ajouter au panier
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomizationPage;
