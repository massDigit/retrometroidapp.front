"use client";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaHeadphonesAlt,
  FaCogs,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import "../globals.css";
import React, { useState } from "react";
import Link from "next/link";

const NavbarBackOffice: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1> {/* Logo du site */}
      </div>

      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-bar top-bar"></div>
        <div className="burger-bar middle-bar"></div>
        <div className="burger-bar bottom-bar"></div>
      </div>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li>
            <a href="/backoffice/dashboard" className="navbar-link">
              <FaTachometerAlt className="navbar-icon" /> Tableau de bord
            </a>
          </li>

          <li>
            <a href="/backoffice/addProduct" className="navbar-link">
              <FaBoxOpen className="navbar-icon" /> Produits
            </a>
          </li>

          <li>
            <a href="/backoffice/addAccessories" className="navbar-link">
              <FaHeadphonesAlt className="navbar-icon" /> Accessoires
            </a>
          </li>

          <li>
            <Link href="/backoffice/addOptions" className="navbar-link">
              <FaCogs className="navbar-icon" /> Options
            </Link>
          </li>

          <li>
            <a href="/backoffice/orders" className="navbar-link">
              <FaShoppingCart className="navbar-icon" /> Commandes
            </a>
          </li>

          <li>
            <a href="/backoffice/logout" className="navbar-link logout">
              <FaSignOutAlt className="navbar-icon" /> Déconnexion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBackOffice;
