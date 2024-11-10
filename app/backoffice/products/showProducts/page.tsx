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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Chargement des produits...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(products)
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
          />
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
};

export default ShowProductsPage;
