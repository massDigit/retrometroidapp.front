"use client";

import React from "react";
import CartItems from "@/app/components/CartItems";
import Header from "@/app/components/Header";

const CartPage: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Votre panier
          </h1>
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
