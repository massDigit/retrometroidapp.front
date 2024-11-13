import React, { useEffect, useState } from 'react';

type Accessory = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

const Accessories: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('http://localhost:3000/accessories');
        const data = await response.json();
        setAccessories(data.allAccessories);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des accessoires:', error);
      }
    };

    fetchAccessories();
  }, []);

  if (loading) return <p>Chargement des accessoires...</p>;

  return (
    <div>
      <h2>Accessoires</h2>
      {accessories.map((acc) => (
        <div key={acc._id}>
          <p>{acc.name}</p>
          <p>{acc.description}</p>
          <p>Prix: {acc.price}€</p>
        </div>
      ))}
    </div>
  );
};

export default Accessories;
