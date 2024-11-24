"use client";

import React, { useState, useEffect } from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";
import OptionCard from "@/app/components/option/OptionCard";

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
  coque: Option[];
  button: Option[];
  pads: Option[];
  laniere: Option[];
  stickers: Option[];
  batterie: Option[];
  screen: Option[];
  sacoche: Accessory[];
  screen_shield: Accessory[];
  silicone_shield: Accessory[];
}

const ShowProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des produits
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Le contenu de la page est indisponible");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <NavbarBackOffice />
      </div>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Liste des produits
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2 text-left">Image</th>
                  <th className="border px-4 py-2 text-left">Nom</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                  <th className="border px-4 py-2 text-left">Prix</th>
                  <th className="border px-4 py-2 text-left">Accessoires</th>
                  <th className="border px-4 py-2 text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4">
                      Chargement des produits...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={6} className="text-center text-red-500 py-4">
                      {error}
                    </td>
                  </tr>
                ) : products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4">
                      Aucun produit n'a été ajouté pour le moment.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-100">
                      <td className="border px-4 py-2">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td>
                      <td className="border px-4 py-2">{product.name}</td>
                      <td className="border px-4 py-2">
                        {product.description}
                      </td>
                      <td className="border px-4 py-2">{product.price}€</td>
                      <td className="border px-4 py-2">
                        {product.accessories}
                      </td>
                      <td className="border px-4 py-2">{product.options}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProductsPage;
