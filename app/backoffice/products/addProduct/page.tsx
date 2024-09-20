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
      <div className="min-h-screen bg-gray-100 text-gray-800 py-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-10">
            Ajouter un nouveau produit
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300">
            <AddProductForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
