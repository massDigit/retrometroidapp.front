"use client";

import React from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";
import AddProductForm from "@/app/components/product/AddProductForm";

const AddProductPage: React.FC = () => {
  return (
    <div>
      <div>
        <NavbarBackOffice />
      </div>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-md">
            Ajouter un nouveau produit
          </h1>
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
