"use client";

import React, { useEffect, useState } from "react";

type Color = {
  _id: string;
  name: string;
};

type ColorsListProps = {
  onSelectColor: (color: string) => void; // Callback pour notifier la couleur sélectionnée
  selectedColor: string; // La couleur actuellement sélectionnée
};

const ColorsList: React.FC<ColorsListProps> = ({
  onSelectColor,
  selectedColor,
}) => {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("http://localhost:3000/colors");
        const data = await response.json();
        setColors(data.allColor);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des couleurs:", error);
      }
    };

    fetchColors();
  }, []);

  if (loading) return <p>Chargement des couleurs...</p>;

  return (
    <select
      value={selectedColor}
      onChange={(e) => onSelectColor(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
    >
      <option value="" disabled>
        Sélectionnez une couleur
      </option>
      {colors.map((color) => (
        <option key={color._id} value={color.name}>
          {color.name}
        </option>
      ))}
    </select>
  );
};

export default ColorsList;
