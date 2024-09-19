'use client';

import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  accessories: string;
  options: string;
}

const ShowProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

//Récupération des produits
  useEffect(() => {
    //Requête API
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Liste des produits</h1>
        {products.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Aucun produit n'a été ajouté pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-800 font-bold mb-2">Prix: {product.price}€</p>
                <p className="text-gray-600">Accessoires: {product.accessories}</p>
                <p className="text-gray-600">Options: {product.options}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowProductsPage;
