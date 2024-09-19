'use client'
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaHeadphonesAlt,
  FaCogs,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";

const NavbarBackOffice: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#1a1a2e] text-white flex justify-between items-center px-6 py-4 border-b-4 border-cyan-400 relative z-50">
      <div className="text-3xl uppercase text-pink-300 tracking-wider">
        Logo
      </div>

      <div
        className={`cursor-pointer flex flex-col justify-between h-6 w-8 z-50 transition-all duration-300 ${
          menuOpen ? "transform rotate-90" : ""
        }`}
        onClick={toggleMenu}
      >
        <div className={`h-1 w-full bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
        <div className={`h-1 w-full bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
        <div className={`h-1 w-full bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#1a1a2e] px-6 py-12 transition-transform duration-300 shadow-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6">
          <li>
            <Link href="/backoffice/dashboard" className="text-lg flex items-center text-white hover:text-cyan-400 transition">
              <FaTachometerAlt className="mr-3" />
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link href="/backoffice/addProduct" className="text-lg flex items-center text-white hover:text-cyan-400 transition">
              <FaBoxOpen className="mr-3" />
              Produits
            </Link>
          </li>
          <li>
            <Link href="/backoffice/addAccessories" className="text-lg flex items-center text-white hover:text-cyan-400 transition">
              <FaHeadphonesAlt className="mr-3" />
              Accessoires
            </Link>
          </li>
          <li>
            <Link href="/backoffice/addOptions" className="text-lg flex items-center text-white hover:text-cyan-400 transition">
              <FaCogs className="mr-3" />
              Options
            </Link>
          </li>
          <li>
            <Link href="/backoffice/orders" className="text-lg flex items-center text-white hover:text-cyan-400 transition">
              <FaShoppingCart className="mr-3" />
              Commandes
            </Link>
          </li>
          <li>
            <Link href="/backoffice/logout" className="text-lg flex items-center text-red-500 hover:text-white hover:bg-red-500 transition">
              <FaSignOutAlt className="mr-3" />
              Déconnexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBackOffice;
