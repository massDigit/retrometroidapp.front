"use client";

import React, { useState, useEffect } from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";

interface Option {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ShowOptionsPage: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des options
  useEffect(() => {}, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Chargement des options...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <NavbarBackOffice />
      </div>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Liste des options
          </h1>
          {options.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>Aucune option n'a été ajoutée pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {options.map((option) => (
                <div
                  key={option.id}
                  className="bg-white shadow-md rounded-lg p-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {option.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <p className="text-gray-900 font-bold">
                    Prix : {option.price} €
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowOptionsPage;
