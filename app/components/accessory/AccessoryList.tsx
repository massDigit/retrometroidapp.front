// AccessoryList.tsx
"use client";

import React, { useEffect, useState } from 'react';

type Accessory = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

interface AccessoryListProps {
  onSelectAccessory: (accessory: Accessory, isSelected: boolean) => void;
}

const AccessoryList: React.FC<AccessoryListProps> = ({ onSelectAccessory }) => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('http://localhost:3000/accessories/');
        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération des accessoires: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.result) {
          setAccessories(data.allAccessories);
        } else {
          console.error('Erreur lors de la récupération des accessoires:', data.message);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des accessoires:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  const handleAccessoryToggle = (accessory: Accessory) => {
    const isSelected = selectedAccessories.includes(accessory._id);
    let updatedSelectedAccessories: string[];

    if (isSelected) {
      updatedSelectedAccessories = selectedAccessories.filter((id) => id !== accessory._id);
    } else {
      updatedSelectedAccessories = [...selectedAccessories, accessory._id];
    }

    setSelectedAccessories(updatedSelectedAccessories);
    onSelectAccessory(accessory, !isSelected);
  };

  if (loading) {
    return <p>Chargement des accessoires...</p>;
  }

  if (accessories.length === 0) {
    return <p>Aucun accessoire disponible.</p>;
  }

  return (
<div className="mt-4">
      <h3 className="font-medium mb-2">Accessoires disponibles</h3>
      <ul>
        {accessories.map((accessory) => (
          <li key={accessory._id} className="flex items-center justify-between border-b py-2">
            <div>
              <p className="font-semibold">{accessory.name}</p>
              <p className="text-sm text-gray-600">{accessory.description}</p>
              {accessory.price && accessory.price > 0 ? (
                <p className="text-sm font-medium">Prix: {accessory.price.toFixed(2)} €</p>
              ) : null}
            </div>
            <div>
              <input
                type="checkbox"
                checked={selectedAccessories.includes(accessory._id)}
                onChange={() => handleAccessoryToggle(accessory)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessoryList;
