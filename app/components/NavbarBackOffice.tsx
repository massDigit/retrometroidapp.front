"use client";

import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaBoxOpen,
  FaCogs,
  FaTools,
} from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";

const NavbarBackOffice: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 text-gray-900 shadow-md font-retro">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/backoffice">
            <span className="cursor-pointer hover:text-blue-500 transition-colors">
              BackOffice
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="/backoffice">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </button>
          </Link>
          <Link href="/backoffice/products/addProduct">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaBoxOpen />
              <span>Ajouter un produit</span>
            </button>
          </Link>
          <Link href="/backoffice/options/addOption">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaCogs />
              <span>Ajouter une option</span>
            </button>
          </Link>
          <Link href="/backoffice/accessories/addAccessories">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaTools />
              <span>Ajouter un accessoire</span>
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 text-gray-900 px-4 py-4 space-y-4">
          <Link href="/backoffice">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </button>
          </Link>
          <Link href="/backoffice/products/addProduct">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaBoxOpen />
              <span>Ajouter un produit</span>
            </button>
          </Link>
          <Link href="/backoffice/options/addOption">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaCogs />
              <span>Ajouter une option</span>
            </button>
          </Link>
          <Link href="/backoffice/accessories/addAccessories">
            <button className="flex items-center space-x-2 bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors">
              <FaTools />
              <span>Ajouter un accessoire</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarBackOffice;
