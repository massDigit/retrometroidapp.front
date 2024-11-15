// components/OptionSelector.tsx

import React, { useEffect, useState } from "react";

interface Option {
  name: string;
  color: string[];
}

interface OptionSelectorProps {
  optionLabel: string; // Label de l'option (e.g., "Coque", "Bouton", etc.)
  optionName: string; // Nom de l'option dans formData (e.g., "coqueName", "buttonName")
  colorName: string; // Nom de la couleur dans formData (e.g., "coqueColor", "buttonColor")
  formData: any; // Les données du formulaire
  setFormData: React.Dispatch<React.SetStateAction<any>>; // Fonction pour mettre à jour les données du formulaire
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
  optionLabel,
  optionName,
  colorName,
  formData,
  setFormData,
}) => {
  const [options, setOptions] = useState<Option[]>([]);


  // Fonction pour récupérer les options depuis l'API
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("http://localhost:3000/options");
        const data = await response.json();
        setOptions(data.allOptions);
      } catch (error) {
        console.error("Erreur lors de la récupération des options :", error);
      }
    };

    fetchOptions();
  }, []);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [optionName]: value,
      [colorName]: "", // Réinitialise la couleur lorsqu'une nouvelle option est sélectionnée
    }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [colorName]: value,
    }));

  };

  
  const selectedOption = options.find((option) => option.name === formData[optionName]);

  
  return (
    <>
      {/* Sélection de l'option */}
      <div>
        <label htmlFor={optionName} className="block text-gray-700 font-semibold mb-2">
          {optionLabel}
        </label>
        <select
          id={optionName}
          name={optionName}
          value={formData[optionName]}
          onChange={handleOptionChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
        >
          <option value="">Sélectionnez une {optionLabel.toLowerCase()}</option>
          {options
          .filter((option) => option.name.toLowerCase().startsWith(optionLabel.toLowerCase()))
          .map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={colorName} className="block text-gray-700 font-semibold mb-2">
          Couleur de {optionLabel.toLowerCase()}
        </label>
        <select
          id={colorName}
          name={colorName}
          value={formData[colorName]}
          onChange={handleColorChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
        >
        <option value="">Sélectionnez une couleur</option>
        {selectedOption?.color?.length ? (
          selectedOption.color.map((colorObj:any) => (
            <option key={colorObj._id} value={colorObj.name}>
              {colorObj.name}
            </option>
          ))
        ) : (
          <option value="">Aucune couleur disponible</option>
        )}
        </select>
      </div>
    </>
  );
};

export default OptionSelector;
