import React from "react";
import Link from "next/link";
import { FiUser, FiShoppingCart, FiTruck } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="w-full max-w-6xl flex justify-between items-center h-14 px-10">
        <div className="header-logo">
          <Link
            href="/"
            className="flex items-center text-black uppercase tracking-wider"
          >
            <span className="text-2xl font-bold">RETROMETROID</span>
            <span className="ml-2 text-sm text-red-600 font-semibold">
              CUSTOMS CREATION
            </span>
          </Link>
        </div>

        <ul className="navbar-menu hidden md:flex space-x-8 items-center">
          <li>
            <Link href="/personnalisation" className="navbar-link">
              PERSONNALISATION
            </Link>
          </li>
          <li>
            <Link href="/psvita-oled" className="navbar-link">
              PSVITA - OLED
            </Link>
          </li>
          <li>
            <Link href="/editions-limitees" className="navbar-link">
              ÉDITIONS LIMITÉES
            </Link>
          </li>
          <li>
            <Link href="/accessoires" className="navbar-link">
              ACCESSOIRES
            </Link>
          </li>
          <li>
            <Link href="/fonds-ecran" className="navbar-link">
              FONDS D'ÉCRAN
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <Link href="/account" className="navbar-link">
            <FiUser size={24} />
          </Link>
          <Link href="/cart" className="navbar-link">
            <FiShoppingCart size={24} />
          </Link>
        </div>
      </nav>

      <div className="bg-black text-white text-center h-12 flex items-center justify-center">
        <FiTruck className="mr-2" />
        <span>Livraison offerte dès 139€ avec Mondial Relay</span>
      </div>
    </header>
  );
};

export default Header;
