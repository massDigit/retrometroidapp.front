"use client";

import React, { useState } from "react";
import OptionCard from "@/app/components/OptionCardBackOffice";
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
  // Données en dur
  const [options] = useState<Option[]>([
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

  const filterOptionsByType = (consoleType: string) => {
    return options.filter((option) => option.consoleType === consoleType);
  };

  const consoleTypes = ["GBA", "NES", "SNES"];
  return (
    <div className="min-h-screen bg-white">
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

                <div className="flex overflow-x-auto space-x-6 p-4 bg-black border-4 border-green-600 rounded-lg scrollbar-hide">
                  {filteredOptions.map((option) => (
                    <OptionCard key={option._id} option={option} />
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
