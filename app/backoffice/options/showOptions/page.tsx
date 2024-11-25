"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
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
  // Données en dur (à remplacer par des appels API)
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

  // Fonction pour supprimer une option
  const handleDelete = (id: string) => {
    const updatedOptions = options.filter((option) => option._id !== id);
    setOptions(updatedOptions);
    toast.success("Option supprimée avec succès");
    // Rajouter l'appel d'API pour modifier les données de l'option
  };

  // Fonction pour modifier une option
  const handleEdit = (id: string) => {
    toast.success("Modification effectuée avec succès");
    // Rajouter l'appel d'API pour modifier les données de l'option
  };

  const filterOptionsByType = (consoleType: string) => {
    return options.filter((option) => option.consoleType === consoleType);
  };

  const consoleTypes = ["GBA", "NES", "SNES"];

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <NavbarBackOffice />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Liste des Options
        </h1>

        {options.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-lg border-4 border-dashed border-gray-300 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">
              Aucune option disponible
            </h2>
            <p className="text-lg">
              Ajoutez des options pour les voir apparaître ici.
            </p>
          </div>
        ) : (
          consoleTypes.map((consoleType) => {
            const filteredOptions = filterOptionsByType(consoleType);

            if (filteredOptions.length === 0) return null;

            return (
              <div key={consoleType} className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  Options{" "}
                  {consoleType === "GBA" ? "Game Boy Advance" : consoleType}
                </h2>

                <div className="flex overflow-x-auto space-x-6 p-4 bg-gray-100 border-4 border-gray-400 rounded-lg scrollbar-hide">
                  {filteredOptions.map((option) => (
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
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ShowOptionsPage;
