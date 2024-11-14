"use client";

import React, { useEffect, useState } from 'react';

type Color = {
  _id: string;
  name: string;
};

const Colors: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch('http://localhost:3000/colors');
        const data = await response.json();
        setColors(data.allColor);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des couleurs:', error);
      }
    };

    fetchColors();
  }, []);

  if (loading) return <p>Chargement des couleurs...</p>;

  return (
    <div>
      <h2>Couleurs disponibles</h2>
      {colors.map((color) => (
        <button key={color._id} style={{ backgroundColor: color.name }}>
          {color.name}
        </button>
      ))}
    </div>
  );
};

export default Colors;
