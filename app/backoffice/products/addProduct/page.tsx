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
          <h1 className="text-4xl font-bold text-center text-green-500 mb-8">
            Ajouter un nouveau produit
          </h1>
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
