"use client";

import React, { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3000';

type Option = {
  _id: string;
  name: string;
  description: string;
  color: { _id: string; name: string }[];
  optionImgFront: string;
  optionImgBack?: string;
  optionImgSide?: string;
  type: string;
  consoleType: string;
};

interface OptionListProps {
  type: string;
  consoleType: string;
  onSelectOption?: (option: Option) => void;
}

const OptionsList: React.FC<OptionListProps> = ({ type, consoleType, onSelectOption }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(`${baseUrl}/options/getOptionsByConsoleType?consoleType=${consoleType}`);
        const data = await response.json();
        setOptions(data || []);
        setLoading(false);
      } catch (error) {
        console.error(`Erreur lors du chargement des options pour ${consoleType}:`, error);
      }
    };

    fetchOptions();
  }, [consoleType]);

  if (loading) return <p>Chargement des options...</p>;

  // Filtrer les options par `type`
  const filteredOptions = options.filter(option => option.type === type);

  if (filteredOptions.length === 0) {
    return <p>Aucune option trouvée pour {type}.</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {filteredOptions.map((option) => 
        option.color.map((color) => (
          <button
            key={`${option._id}-${color.name}`}
            onClick={() => onSelectOption && onSelectOption(option)}
            style={{ backgroundColor: color.name }}
            className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 hover:border-blue-500"
            title={`${option.name} - ${color.name}`}
          />
        ))
      )}
    </div>
  );
};

export default OptionsList;
