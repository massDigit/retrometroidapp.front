import Link from "next/link";
import { useState, useEffect } from "react";
import { FiUser, FiShoppingCart, FiTruck } from "react-icons/fi";

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="bg-white flex flex-col items-center w-full">
      <nav className="w-full max-w-6xl flex justify-between items-center h-14 px-10">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-black uppercase tracking-wider">
            <span className="text-2xl font-bold">RETROMETROID</span>
            <span className="ml-2 text-sm text-red-600 font-semibold">CUSTOMS CREATION</span>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link href="/personnalisation" className="text-black hover:text-cyan-500 transition-colors text-lg">
              PERSONNALISATION
            </Link>
          </li>
          <li>
            <Link href="/psvita-oled" className="text-black hover:text-cyan-500 transition-colors text-lg">
              PSVITA - OLED
            </Link>
          </li>
          <li>
            <Link href="/editions-limitees" className="text-black hover:text-cyan-500 transition-colors text-lg">
              ÉDITIONS LIMITÉES
            </Link>
          </li>
          <li>
            <Link href="/accessoires" className="text-black hover:text-cyan-500 transition-colors text-lg">
              ACCESSOIRES
            </Link>
          </li>
          <li>
            <Link href="/fonds-ecran" className="text-black hover:text-cyan-500 transition-colors text-lg">
              FONDS D'ÉCRAN
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <Link href="/account" className="text-black hover:text-cyan-500 transition-colors">
            <FiUser size={24} />
          </Link>
          <Link href="/cart" className="text-black hover:text-cyan-500 transition-colors">
            <FiShoppingCart size={24} />
          </Link>
        </div>
      </nav>

      <div className="bg-black text-white text-center h-12 flex items-center justify-center">
        <FiTruck className="mr-2" />
        <span>Livraison offerte dès 139€ avec Mondial Relay</span>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

        .header {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100vw;
        }

        .navigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1400px;
          height: 50px;
          padding: 0 270px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .logo-text {
          font-family: "Bebas Neue", sans-serif;
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
          font-family: "Bebas Neue", sans-serif;
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
    </header>
  );
};

export default Header;