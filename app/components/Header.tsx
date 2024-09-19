"use client";

import React from "react";
import Link from "next/link";
import { FiUser, FiShoppingCart, FiTruck } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white flex flex-col items-center w-full">
        <nav className="w-full max-w-6xl flex justify-between items-center h-14 px-10">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center text-black uppercase tracking-wider">
                <span className="text-2xl font-bold">RETROMETROID</span>
                <span className="ml-2 text-sm text-red-600 font-semibold">
                  CUSTOMS CREATION
                </span>
              </a>
            </Link>
          </div>

          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link href="/personnalisation" legacyBehavior>
                <a className="text-black hover:text-cyan-500 transition-colors text-lg">
                  PERSONNALISATION
                </a>
              </Link>
            </li>
            <li>
              <Link href="/psvita-oled" legacyBehavior>
                <a className="text-black hover:text-cyan-500 transition-colors text-lg">
                  PSVITA - OLED
                </a>
              </Link>
            </li>
            <li>
              <Link href="/editions-limitees" legacyBehavior>
                <a className="text-black hover:text-cyan-500 transition-colors text-lg">
                  ÉDITIONS LIMITÉES
                </a>
              </Link>
            </li>
            <li>
              <Link href="/accessoires" legacyBehavior>
                <a className="text-black hover:text-cyan-500 transition-colors text-lg">
                  ACCESSOIRES
                </a>
              </Link>
            </li>
            <li>
              <Link href="/fonds-ecran" legacyBehavior>
                <a className="text-black hover:text-cyan-500 transition-colors text-lg">
                  FONDS D'ÉCRAN
                </a>
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6">
            <Link href="/account" legacyBehavior>
              <a className="text-black hover:text-cyan-500 transition-colors">
                <FiUser size={24} />
              </a>
            </Link>
            <Link href="/cart" legacyBehavior>
              <a className="text-black hover:text-cyan-500 transition-colors">
                <FiShoppingCart size={24} />
              </a>
            </Link>
          </div>
        </nav>

        <div className="bg-black text-white text-center h-12 flex items-center justify-center">
          <FiTruck className="mr-2" />
          <span>Livraison offerte dès 139€ avec Mondial Relay</span>
        </div>
      </header>
    </>
  );
};

export default Header;
