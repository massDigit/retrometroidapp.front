import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <>
      <header className="bg-white flex flex-col items-center w-full">
        <nav className="w-full max-w-6xl flex justify-between items-center h-14 px-10">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-black uppercase tracking-wider">
              <span className="text-2xl font-bold">RETROMETROID</span>
              <span className="ml-2 text-sm text-red-600 font-semibold">CUSTOMS CREATION</span>
            </Link>
          </div>

          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/personnalisation" className="text-black hover:text-cyan-500 transition-colors text-lg">
                PERSONNALISATION
              </Link>
            </li>
            <li>
              <Link to="/psvita-oled" className="text-black hover:text-cyan-500 transition-colors text-lg">
                PSVITA - OLED
              </Link>
            </li>
            <li>
              <Link to="/editions-limitees" className="text-black hover:text-cyan-500 transition-colors text-lg">
                ÉDITIONS LIMITÉES
              </Link>
            </li>
            <li>
              <Link to="/accessoires" className="text-black hover:text-cyan-500 transition-colors text-lg">
                ACCESSOIRES
              </Link>
            </li>
            <li>
              <Link to="/fonds-ecran" className="text-black hover:text-cyan-500 transition-colors text-lg">
                FONDS D'ÉCRAN
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6">
            <Link to="/account" className="text-black hover:text-cyan-500 transition-colors">
              <FiUser size={24} />
            </Link>
            <Link to="/cart" className="text-black hover:text-cyan-500 transition-colors">
              <FiShoppingCart size={24} />
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
