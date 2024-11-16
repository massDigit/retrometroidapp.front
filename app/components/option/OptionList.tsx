// OptionsList.tsx
"use client";

import React, { useEffect, useState, useCallback } from 'react';

const baseUrl = 'http://localhost:3000';

type Color = {
  _id: string;
  name: string;
};

type Option = {
  _id: string;
  name: string;
  description: string;
  color: Color[];
  optionImgFront: string;
  optionImgBack?: string;
  optionImgSide?: string;
  type: string;
  consoleType: string;
  imageDataFront?: string;
  imageDataBack?: string;
  imageDataSide?: string;
};

interface OptionListProps {
  type: string;
  consoleType: string;
  onSelectOption?: (option: Option, color: Color) => void;
  selectDefaultOption?: boolean;
  isExpanded?: boolean;
}

const OptionsList: React.FC<OptionListProps> = ({
  type,
  consoleType,
  onSelectOption,
  selectDefaultOption,
  isExpanded,
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);

  const handleOptionSelect = useCallback(
    async (option: Option, color: Color) => {
      try {
        const imagesData: {
          imageDataFront?: string;
          imageDataBack?: string;
          imageDataSide?: string;
        } = {};

        const imagePromises = [];

        if (option.optionImgFront) {
          const imageUrlFront = baseUrl + option.optionImgFront;
          imagePromises.push(
            fetch(imageUrlFront)
              .then((res) => {
                if (!res.ok) {
                  throw new Error(`Erreur lors du chargement de l'image avant: ${res.statusText}`);
                }
                return res.blob();
              })
              .then((blob) => {
                imagesData.imageDataFront = URL.createObjectURL(blob);
              })
          );
        }

        if (option.optionImgBack) {
          const imageUrlBack = baseUrl + option.optionImgBack;
          imagePromises.push(
            fetch(imageUrlBack)
              .then((res) => {
                if (!res.ok) {
                  throw new Error(`Erreur lors du chargement de l'image arrière: ${res.statusText}`);
                }
                return res.blob();
              })
              .then((blob) => {
                imagesData.imageDataBack = URL.createObjectURL(blob);
              })
          );
        }

        if (option.optionImgSide) {
          const imageUrlSide = baseUrl + option.optionImgSide;
          imagePromises.push(
            fetch(imageUrlSide)
              .then((res) => {
                if (!res.ok) {
                  throw new Error(`Erreur lors du chargement de l'image latérale: ${res.statusText}`);
                }
                return res.blob();
              })
              .then((blob) => {
                imagesData.imageDataSide = URL.createObjectURL(blob);
              })
          );
        }

        // Attendre que toutes les images soient chargées
        await Promise.all(imagePromises);

        // Créer une nouvelle option avec les données des images
        const optionWithImages = {
          ...option,
          ...imagesData,
        };

        // Appeler la fonction de rappel avec l'option mise à jour et la couleur sélectionnée
        if (onSelectOption) {
          onSelectOption(optionWithImages, color);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des images pour l\'option:', error);
      }
    },
    [onSelectOption]
  );

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/options/getOptionsByConsoleType?consoleType=${consoleType}`
        );
        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération des options: ${response.statusText}`);
        }
        const data: Option[] = await response.json();

        // Filtrer les options par type
        const filteredOptions = data.filter((option) => option.type === type);
        setOptions(filteredOptions || []);
        setLoading(false);

        // Sélectionner l'option par défaut si nécessaire
        if (selectDefaultOption && filteredOptions.length > 0) {
          const defaultOption = filteredOptions[0];
          const defaultColor = defaultOption.color[0];
          await handleOptionSelect(defaultOption, defaultColor);
        }
      } catch (error) {
        console.error(
          `Erreur lors du chargement des options pour ${consoleType}:`,
          error
        );
        setLoading(false);
      }
    };

    fetchOptions();
  }, [consoleType, type, selectDefaultOption, handleOptionSelect]);

  if (loading) return <p>Chargement des options...</p>;

  if (options.length === 0) {
    return <p>Aucune option trouvée pour {type}.</p>;
  }

  return isExpanded ? (
    <div className="flex flex-wrap gap-4 mt-2">
      {options.map((option) =>
        option.color.map((color) => (
          <button
            key={`${option._id}-${color.name}`}
            onClick={() => handleOptionSelect(option, color)}
            style={{ backgroundColor: color.name }}
            className="w-4 h-4 rounded-full cursor-pointer border border-gray-300 hover:border-blue-500"
            title={`${option.name} - ${color.name}`}
          />
        ))
      )}
    </div>
  ) : null;
};

export default OptionsList;
