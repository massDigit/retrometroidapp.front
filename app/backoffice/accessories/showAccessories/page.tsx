"use client";

import React, { useState, useEffect } from "react";

interface Accessory {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const ShowAccessoriesPage: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des accessoires
  useEffect(() => {}, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Chargement des accessoires...</p>
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
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Liste des accessoires
        </h1>
        {accessories.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Aucun accessoire n'a été ajouté pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accessories.map((accessory) => (
              <div
                key={accessory.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {accessory.name}
                </h2>
                <p className="text-gray-600 mb-4">{accessory.description}</p>
                <p className="text-gray-600 italic">
                  Catégorie : {accessory.category}
                </p>
                <p className="text-gray-900 font-bold">
                  Prix : {accessory.price} €
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowAccessoriesPage;
