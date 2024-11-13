import React, { useEffect, useState } from 'react';

type Option = {
  _id: string;
  name: string;
  description: string;
  optionImgFront: string;
  optionImgBack?: string;
  optionImgSide?: string;
  type: string;
};

const OptionsList: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('http://localhost:3000/option/getOptionsByType?type=GBA');
        const data = await response.json();
        setOptions(data.allColor);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des options GBA:', error);
      }
    };

    fetchOptions();
  }, []);

  if (loading) return <p>Chargement des options...</p>;

  return (
    <div>
      <h2>Options GBA</h2>
      {options.map((option) => (
        <div key={option._id}>
          <img src={option.optionImgFront} alt={option.name} />
          <p>{option.name}</p>
          <p>{option.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OptionsList;