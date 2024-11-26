"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "@/app/components/Pagination";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";

interface Option {
  _id: string;
  name: string;
  description: string;
  type: string;
  consoleType: string;
  price?: number;
  optionImgFront?: string;
}

const ShowOptionsPage: React.FC = () => {
  // Données en dur (à remplacer par la requête API)
  const [options, setOptions] = useState<Option[]>([
    {
      _id: "1",
      name: "Manette Classique",
      description: "Manette ergonomique pour un confort optimal.",
      type: "Controller",
      consoleType: "NES",
      price: 49.99,
      optionImgFront: "/images/nes-controller-front.jpg",
    },
    {
      _id: "2",
      name: "Coque Transparente",
      description: "Coque translucide pour voir l'intérieur de votre console.",
      type: "Accessory",
      consoleType: "GBA",
      price: 19.99,
      optionImgFront: "/images/gba-case-front.jpg",
    },
    {
      _id: "3",
      name: "Adaptateur HDMI",
      description: "Transformez votre console rétro en HD.",
      type: "Accessory",
      consoleType: "SNES",
      price: 29.99,
      optionImgFront: "/images/snes-hdmi-adapter.jpg",
    },
    {
      _id: "4",
      name: "Boutons Dorés",
      description: "Des boutons dorés pour un look premium.",
      type: "Customization",
      consoleType: "NES",
      price: 14.99,
      optionImgFront: "/images/nes-golden-buttons.jpg",
    },
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(options.length / itemsPerPage);

  const paginatedOptions = options.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fonction pour supprimer une option
  const handleDelete = (id: string) => {
    const updatedOptions = options.filter((option) => option._id !== id);
    setOptions(updatedOptions);
    // Rajouter l'appel d'API pour supprimer l'option
    toast.success("Option supprimée avec succès");
  };

  // Fonction pour modifier une option
  const handleEdit = (id: string) => {
    // Rajouter la redirection vers la page de modification de l'option
    toast.success("Modification effectuée avec succès");
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <NavbarBackOffice />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Liste des Options
        </h1>

        {paginatedOptions.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-lg border-4 border-dashed border-gray-300 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">
              Aucune option disponible
            </h2>
            <p className="text-lg">
              Ajoutez des options pour les voir apparaître ici.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedOptions.map((option) => (
              <div
                key={option._id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-300 flex flex-col items-center relative"
              >
                <img
                  src={option.optionImgFront}
                  alt={option.name}
                  className="w-32 h-32 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-bold mb-2">{option.name}</h3>
                <p className="text-gray-600 text-center mb-4">
                  {option.description}
                </p>
                {option.price && (
                  <p className="text-green-600 font-semibold">
                    Prix : {option.price.toFixed(2)} €
                  </p>
                )}
                <div className="flex mt-4 space-x-4">
                  <button
                    onClick={() => handleEdit(option._id)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Modifier"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(option._id)}
                    className="text-red-500 hover:text-red-700"
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

export default ShowOptionsPage;
