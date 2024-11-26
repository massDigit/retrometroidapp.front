"use client";

import React from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";
import AddOptionForm from "@/app/components/option/AddOptionForm";

const AddOptionPage: React.FC = () => {
  return (
    <div>
      <div>
        <NavbarBackOffice />
      </div>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Ajouter une Option
          </h1>
          <AddOptionForm />
        </div>
      </div>
    </div>
  );
};

export default AddOptionPage;
