"use client";

import React, { useEffect, useState } from "react";

interface Console {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Home: React.FC = () => {
  const [consoles, setConsoles] = useState<Console[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setConsoles(data));
  }, []);

  return (
    <div>
      <main>
        <h1>Consoles en vente</h1>
        <ul>
          {consoles.map((console) => (
            <li key={console._id}>
              <h2>{console.name}</h2>
              <p>{console.description}</p>
              <p>{console.price} €</p>
              <img src={console.imageUrl} alt={console.name} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;