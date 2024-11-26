"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import Pagination from "@/app/components/Pagination";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";

interface Accessory {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const ShowAccessoriesPage: React.FC = () => {
  // Données en dur ( à remplacer par la requête API )
  const [accessories, setAccessories] = useState<Accessory[]>([
    {
      id: 1,
      name: "Manette Classique",
      description: "Une manette ergonomique.",
      price: 29.99,
      category: "Manettes",
    },
    {
      id: 2,
      name: "Coque Transparente",
      description: "Protégez votre console.",
      price: 14.99,
      category: "Accessoires",
    },
    {
      id: 3,
      name: "Adaptateur HDMI",
      description: "Jouez sur un écran moderne.",
      price: 39.99,
      category: "Câbles",
    },
    {
      id: 4,
      name: "Chargeur Portable",
      description: "Rechargez votre console.",
      price: 19.99,
      category: "Accessoires",
    },
    {
      id: 5,
      name: "Manette Sans Fil",
      description: "Pour plus de liberté.",
      price: 49.99,
      category: "Manettes",
    },
    {
      id: 6,
      name: "Câble USB",
      description: "Connexion rapide et efficace.",
      price: 9.99,
      category: "Câbles",
    },
    {
      id: 7,
      name: "Écran Protecteur",
      description: "Protégez votre écran.",
      price: 12.99,
      category: "Accessoires",
    },
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(accessories.length / itemsPerPage);

  const paginatedAccessories = accessories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fonction pour supprimer un accessoire
  const handleDelete = (id: number) => {
    const updatedAccessories = accessories.filter(
      (accessory) => accessory.id !== id
    );
    setAccessories(updatedAccessories);
    // Rajouter l'appel d'API pour supprimer l'accessoire
    toast.success("Accessoire supprimé avec succès !");
  };

  // Fonction pour modifier un accessoire
  const handleEdit = (id: number) => {
    // Rajouter la redirection vers la page de modification de l'accessoire
    toast.success("Modification effectuée avec succès !");
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <NavbarBackOffice />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Liste des Accessoires
        </h1>

        {paginatedAccessories.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-lg border-4 border-dashed border-gray-300 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">
              Aucun accessoire disponible
            </h2>
            <p className="text-lg">
              Ajoutez des accessoires pour les voir apparaître ici.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedAccessories.map((accessory) => (
              <div
                key={accessory.id}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg border-4 border-purple-500 transition-transform transform hover:scale-105 relative"
              >
                <h2 className="text-2xl font-bold mb-4 text-center bg-purple-500 text-white p-2 rounded-md">
                  {accessory.name}
                </h2>
                <p className="text-gray-300 mb-4">{accessory.description}</p>
                <p className="text-gray-400 italic mb-2">
                  Catégorie : {accessory.category}
                </p>
                <p className="text-green-400 font-bold text-lg">
                  Prix : {accessory.price.toFixed(2)} €
                </p>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(accessory.id)}
                    className="text-blue-400 hover:text-blue-600"
                    title="Modifier"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(accessory.id)}
                    className="text-red-400 hover:text-red-600"
                    title="Supprimer"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ShowAccessoriesPage;
