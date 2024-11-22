"use client";

import React, { useState, useEffect } from "react";
import NavbarBackOffice from "@/app/components/NavbarBackOffice";
import OptionCard from "@/app/components/option/OptionCard";

interface Option {
  _id: string;
  name: string;
  description: string;
  type: string;
  price?: number;
  optionImgFront?: string;
  optionImgBack?: string;
  optionImgSide?: string;
}

const ShowOptionsPage: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Récupération des options
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("/api/options");
        if (!response.ok) {
          throw new Error("Failed to fetch options");
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        setError("Le contenu de la page est indisponible");
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  if (loading) {
    return <div>Chargement des options...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Fonction pour filtrer les options par type
  const filterOptionsByType = (type: string) => {
    return options.filter((option) => option.type === type);
  };

  const types = ["GBA", "NES", "SNES"]; // Liste des types que vous voulez afficher

  return (
    <div>
      <NavbarBackOffice />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          Liste des Options
        </h1>

        {types.map((type) => {
          const filteredOptions = filterOptionsByType(type);

          if (filteredOptions.length === 0) return null;

          return (
            <div key={type} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">
                Options {type === "GBA" ? "Game Boy Advance" : type}
              </h2>

              {/* Carrousel défilant */}
              <div className="flex overflow-x-auto space-x-6 p-4 bg-gray-100 rounded-lg">
                {filteredOptions.map((option) => (
                  <OptionCard
                    key={option._id}
                    options={[option]}
                    single={true}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowOptionsPage;
