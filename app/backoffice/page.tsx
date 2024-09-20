"use client";

import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaMoneyBill, FaBoxOpen, FaUser } from "react-icons/fa";
import NavbarBackOffice from "../components/NavbarBackOffice";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div>
        <NavbarBackOffice/>
      </div>
      <div className="p-10 bg-gray-100 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center">Tableau de bord</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-white">
            <FaShoppingCart className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Total des commandes</h3>
            <p className="text-3xl font-bold">140</p>
          </div>

          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-white">
            <FaBoxOpen className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Produits en stock</h3>
            <p className="text-3xl font-bold">10</p>
          </div>

          <div className="bg-gradient-to-r from-red-400 to-pink-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-white">
            <FaUser className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Nouveaux utilisateurs
            </h3>
            <p className="text-3xl font-bold">23</p>
          </div>
        </div>

        <div className="flex justify-around mb-10">
          <Link href="/backoffice/products/showProducts">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Voir Produits
            </button>
          </Link>

          <Link href="/backoffice/accessories/showAccessories">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Voir Accessoires
            </button>
          </Link>

          <Link href="/backoffice/options/showOptions">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Voir Options
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Commandes récentes
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 text-left">ID Commande</th>
                <th className="border px-4 py-2 text-left">Client</th>
                <th className="border px-4 py-2 text-left">Date</th>
                <th className="border px-4 py-2 text-left">Total</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2">#12345</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">01/09/2024</td>
                <td className="border px-4 py-2">€149.00</td>
                <td className="border px-4 py-2 text-green-500">Expédiée</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2">#12346</td>
                <td className="border px-4 py-2">Jane Smith</td>
                <td className="border px-4 py-2">02/09/2024</td>
                <td className="border px-4 py-2">€200.00</td>
                <td className="border px-4 py-2 text-yellow-500">En attente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
