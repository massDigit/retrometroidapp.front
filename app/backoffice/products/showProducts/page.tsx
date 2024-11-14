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

<<<<<<< HEAD
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
=======
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des produits");
        }
        const data = await response.json();
        setProducts(data.allProduct);
      } catch (error: unknown) {
        console.error("Erreur :", error);
        setError("Impossible de récupérer les produits");
>>>>>>> devv
      } finally {
        setLoading(false);
      }
    };
<<<<<<< HEAD

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
=======

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Chargement des produits...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavbarBackOffice />
      <div className="container mx-auto py-12">
  <h1 className="text-4xl font-bold text-center mb-10">Liste des produits</h1>
  {products.length === 0 ? (
    <p>Aucun produit disponible</p>
  ) : (
    <div className="flex flex-wrap gap-8 justify-center">
      {products.map((product) => (
        <div key={product._id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          {/* Superposition des images de face */}
          <OptionCard
            options={[
              ...product.coque,
              ...product.button,
              ...product.pads,
              ...product.laniere,
              ...product.stickers,
              ...product.batterie,
              ...product.screen,
            ]}
            viewType="front"
            single={false}
          />

          {/* Superposition des images de côté */}
          <OptionCard
            options={[
              ...product.coque,
              ...product.button,
              ...product.pads,
              ...product.laniere,
              ...product.stickers,
              ...product.batterie,
              ...product.screen,
            ]}
            viewType="side"
            single={false}
          />

          {/* Superposition des images arrière */}
          <OptionCard
            options={[
              ...product.coque,
              ...product.button,
              ...product.pads,
              ...product.laniere,
              ...product.stickers,
              ...product.batterie,
              ...product.screen,
            ]}
            viewType="back"
            single={false}
          />
>>>>>>> devv
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
};

export default ShowProductsPage;
