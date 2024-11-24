"use client";

import React, { useState } from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";

interface Color {
  _id: string;
  name: string;
}

interface Option {
  _id: string;
  name: string;
  description: string;
  color: Color[];
  optionImgFront?: string;
  optionImgBack?: string;
  optionImgSide?: string;
}

interface Accessory {
  _id: string;
  name: string;
  description: string;
  price: number;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  stockQuantity: number;
  accessories: Accessory[];
  options: Option[];
  imageUrl?: string;
}

const ShowProductsPage: React.FC = () => {
  // Données en dur (à remplacer par des appels API)
  const [products] = useState<Product[]>([
    {
      _id: "1",
      name: "Console Rétro",
      description: "Une console rétro avec des options personnalisables.",
      price: 199.99,
      type: "Console",
      stockQuantity: 20,
      accessories: [
        {
          _id: "1",
          name: "Coque Transparente",
          description: "Une coque transparente pour votre console.",
          price: 19.99,
        },
        {
          _id: "2",
          name: "Manette Classique",
          description: "Manette ergonomique pour une meilleure expérience.",
          price: 29.99,
        },
      ],
      options: [
        {
          _id: "1",
          name: "Boutons Dorés",
          description: "Des boutons dorés pour un look premium.",
          color: [],
          optionImgFront: "/images/buttons-gold.jpg",
        },
      ],
      imageUrl: "/images/retro-console.jpg",
    },
    {
      _id: "2",
      name: "Console Mini",
      description: "Une console compacte avec des jeux préinstallés.",
      price: 149.99,
      type: "Console",
      stockQuantity: 15,
      accessories: [],
      options: [],
      imageUrl: "/images/mini-console.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavbarBackOffice />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-md">
          Liste des Produits
        </h1>

        <div className="bg-white border-4 border-gray-400 rounded-lg p-6 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 text-white">
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Nom</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Prix</th>
                <th className="border px-4 py-2">Accessoires</th>
                <th className="border px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-red-500">
                    Aucun produit n'a été ajouté pour le moment.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product._id}
                    className="hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-200 transition-all"
                  >
                    <td className="border px-4 py-2">
                      <img
                        src={product.imageUrl || "/images/placeholder.jpg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md border-2 border-gray-300 shadow-md"
                      />
                    </td>
                    <td className="border px-4 py-2 font-bold">
                      {product.name}
                    </td>
                    <td className="border px-4 py-2">{product.description}</td>
                    <td className="border px-4 py-2 text-green-600 font-bold">
                      {product.price} €
                    </td>
                    <td className="border px-4 py-2">
                      {product.accessories.length > 0 ? (
                        <ul className="list-disc ml-4 text-gray-800">
                          {product.accessories.map((acc) => (
                            <li key={acc._id}>{acc.name}</li>
                          ))}
                        </ul>
                      ) : (
                        "Aucun"
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {product.options.length > 0 ? (
                        <ul className="list-disc ml-4 text-gray-800">
                          {product.options.map((opt) => (
                            <li key={opt._id}>{opt.name}</li>
                          ))}
                        </ul>
                      ) : (
                        "Aucune"
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowProductsPage;
