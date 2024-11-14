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
    <nav className="bg-gray-100 text-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/backoffice">
            <span className="cursor-pointer hover:text-indigo-500 transition-colors">
              BackOffice
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="/backoffice">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </span>
          </Link>
          <Link href="/backoffice/products/addProduct">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaBoxOpen />
              <span>Produits</span>
            </span>
          </Link>
          <Link href="/backoffice/options/addOption">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaCogs />
              <span>Options</span>
            </span>
          </Link>
          <Link href="/backoffice/accessories/addAccessories">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaTools />
              <span>Accessoires</span>
            </span>
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
          <Link href="/backoffice/">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </span>
          </Link>
          <Link href="/backoffice/products/showProducts">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaBoxOpen />
              <span>Produits</span>
            </span>
          </Link>
          <Link href="/backoffice/options/showOptions">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaCogs />
              <span>Options</span>
            </span>
          </Link>
          <Link href="/backoffice/accessories/showAccessories">
            <span className="flex items-center space-x-2 hover:text-indigo-500 transition-colors cursor-pointer">
              <FaTools />
              <span>Accessoires</span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarBackOffice;
