"use client";

import React from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";
import AddAccessoryForm from "@/app/components/accessory/AddAccessoryForm";

const AddAccessoryPage: React.FC = () => {
  return (
    <div>
      <div>
        <NavbarBackOffice />
      </div>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Ajouter un Accessoire
          </h1>
          <AddAccessoryForm />
        </div>
      </div>
    </div>
  );
};

export default AddAccessoryPage;
