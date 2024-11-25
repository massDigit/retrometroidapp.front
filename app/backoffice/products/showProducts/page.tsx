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
  imageUrl: string;
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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
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
                    <tr key={product._id} className="hover:bg-gray-100">
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
                        {product.sacoche.length > 0 && <span>Sacoche, </span>}
                        {product.screen_shield.length > 0 && (
                          <span>Screen Shield, </span>
                        )}
                        {product.silicone_shield.length > 0 && (
                          <span>Silicone Shield</span>
                        )}
                      </td>
                      <td className="border px-4 py-2">
                        {product.coque.length > 0 && <span>Coque, </span>}
                        {product.button.length > 0 && <span>Button, </span>}
                        {product.pads.length > 0 && <span>Pads, </span>}
                        {product.laniere.length > 0 && <span>Laniere, </span>}
                        {product.stickers.length > 0 && <span>Stickers, </span>}
                        {product.batterie.length > 0 && <span>Batterie, </span>}
                        {product.screen.length > 0 && <span>Screen</span>}
                      </td>
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
