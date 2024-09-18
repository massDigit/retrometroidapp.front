"use client";

import React from 'react';
import Link from 'next/link';
import { FiUser, FiShoppingCart, FiTruck } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <>
      {/* Header principal */}
      <header className="header">
        <nav className="navigation">
          {/* Logo avec texte */}
          <div className="logo">
            <Link href="/" legacyBehavior>
              <a className="logo-link">
                <span className="logo-text">
                  <span className="main-text">RETROMETROID</span>
                  <span className="sub-text">CUSTOMS CREATION</span>
                </span>
              </a>
            </Link>
          </div>

          {/* Liens de navigation */}
          <ul className="nav-links">
            <li>
              <Link href="/personnalisation" legacyBehavior>
                <a>PERSONNALISATION</a>
              </Link>
            </li>
            <li>
              <Link href="/psvita-oled" legacyBehavior>
                <a>PSVITA - OLED</a>
              </Link>
            </li>
            <li>
              <Link href="/editions-limitees" legacyBehavior>
                <a>ÉDITIONS LIMITÉES</a>
              </Link>
            </li>
            <li>
              <Link href="/accessoires" legacyBehavior>
                <a>ACCESSOIRES</a>
              </Link>
            </li>
            <li>
              <Link href="/fonds-ecran" legacyBehavior>
                <a>FONDS D'ÉCRAN</a>
              </Link>
            </li>
          </ul>

          {/* Icônes utilisateur et panier */}
          <div className="icons">
            <span className="icon">
              <Link href="/account" legacyBehavior>
                <a>
                  <FiUser /> {/* Icône User contour */}
                </a>
              </Link>
            </span>
            <span className="icon">
              <Link href="/cart" legacyBehavior>
                <a>
                  <FiShoppingCart /> {/* Icône Shopping Cart contour */}
                </a>
              </Link>
            </span>
          </div>
        </nav>

        {/* Barre promotionnelle */}
        <div className="promo-bar">
          <span className="promo-icon">
            <FiTruck />
          </span>
          <span className="promo-text">
            Livraison offerte dès 139€ avec Mondial Relay
          </span>
        </div>
      </header>

      {/* Styles */}
      <style jsx>{`
        /* Charger la police Bebas Neue */
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        /* Header principal */
        .header {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100vw;
        }

        /* Style de la navigation */
        .navigation {
          display: flex;
          align-items: center; 
          justify-content: space-between;
          width: 100%;
          max-width: 1400px;
          height: 50px; 
          padding: 0 270px;
        }

        /* Logo */
        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          text-transform: uppercase;
          color: #000;
        }
        .main-text {
          font-size: 18px;
          font-weight: 300;
          color: black;
          line-height: 1;
        }
        .sub-text {
          font-size: 12px;
          color: red;
          font-weight: bold;
          line-height: 1;
          display: block;
          margin-top: -4px;
        }

        /* Liens de navigation */
        .nav-links {
          list-style: none;
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          flex-grow: 1;
        }
        .nav-links a {
          font-family: 'Bebas Neue', sans-serif;
          text-decoration: none;
          color: #000;
          font-weight: 300;
          font-size: 18px;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #0070f3;
        }

        /* Icônes */
        .icons {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .icon {
          font-size: 20px;
          color: #000;
          transition: color 0.3s ease;
        }
        .icon:hover {
          color: #808080;
        }

        /* Barre promotionnelle */
        .promo-bar {
          background-color: #000;
          color: #fff;
          text-align: center;
          height: 50px;
          font-size: 14px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .promo-icon {
          margin-right: 8px;
          font-size: 16px;
        }

        .promo-text {
          vertical-align: middle;
        }
      `}</style>
    </>
  );
};

export default Header;
