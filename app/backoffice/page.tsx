"use client";

import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaBoxOpen, FaCog } from "react-icons/fa";
import NavbarBackOffice from "../components/NavbarBackOffice";

const Dashboard: React.FC = () => {
  // Données en dur (à remplacer par l'appel API)
  const totalProducts = 20;
  const totalAccessories = 10;
  const totalOptions = 15;

  return (
    <div>
      <NavbarBackOffice />
      <div className="p-10 bg-gray-100 text-gray-800 min-h-screen">
        <h1 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          Tableau de Bord
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Link href="/backoffice/products/showProducts">
            <div className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,0,255,0.8),0_0_20px_rgba(0,0,255,0.6)] text-white">
              <FaBoxOpen className="text-4xl mb-4 animate-bounce" />
              <h3 className="text-lg font-semibold mb-2">Produits</h3>
              <p className="text-3xl font-bold">{totalProducts}</p>
            </div>
          </Link>

          <Link href="/backoffice/accessories/showAccessories">
            <div className="cursor-pointer bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.8),0_0_20px_rgba(0,255,0,0.6)] text-white">
              <FaShoppingCart className="text-4xl mb-4 animate-bounce" />
              <h3 className="text-lg font-semibold mb-2">Accessoires</h3>
              <p className="text-3xl font-bold">{totalAccessories}</p>
            </div>
          </Link>

          <Link href="/backoffice/options/showOptions">
            <div className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.8),0_0_20px_rgba(255,0,255,0.6)] text-white">
              <FaCog className="text-4xl mb-4 animate-bounce" />
              <h3 className="text-lg font-semibold mb-2">Options</h3>
              <p className="text-3xl font-bold">{totalOptions}</p>
            </div>
          </Link>
        </div>

        <div className="flex justify-around mb-10">
          <Link href="/backoffice/products/showProducts">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(75,0,130,0.8),0_0_20px_rgba(75,0,130,0.6)]">
              Voir Produits
            </button>
          </Link>

          <Link href="/backoffice/accessories/showAccessories">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.8),0_0_20px_rgba(0,255,0,0.6)]">
              Voir Accessoires
            </button>
          </Link>

          <Link href="/backoffice/options/showOptions">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(255,255,0,0.8),0_0_20px_rgba(255,255,0,0.6)]">
              Voir Options
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
