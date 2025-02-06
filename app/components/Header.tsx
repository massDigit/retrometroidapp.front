import Link from "next/link";
import Image from "next/image";
import { FiUser, FiShoppingCart, FiTruck } from "react-icons/fi";
import { useState } from "react";

const Header: React.FC = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-white flex flex-col items-center w-full">
        <nav className="w-full max-w-6xl flex justify-between items-center h-14 px-10">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-black uppercase tracking-wider"
            >
              <Image
                src="/logo.png"
                alt="Logo RetroMetroid"
                width={50}
                height={50}
                className="mr-2"
              />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-8 items-center">
          <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              // onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="#"
                className="text-black hover:text-cyan-500 transition-colors text-lg"
              >
                PERSONNALISATION
              </Link>
              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link
                    href="/customization"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-cyan-500 transition-colors"
                  >
                    GBA
                  </Link>
                  <Link
                    href="/customizationGBASP"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-cyan-500 transition-colors"
                  >
                    GBA-SP
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-cyan-500 transition-colors text-lg"
              >
                PSVITA - OLED
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-cyan-500 transition-colors text-lg"
              >
                ÉDITIONS LIMITÉES
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-cyan-500 transition-colors text-lg"
              >
                ACCESSOIRES
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-cyan-500 transition-colors text-lg"
              >
                FONDS D ÉCRAN
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6">
            <Link
              href="/login"
              className="text-black hover:text-cyan-500 transition-colors"
            >
              <FiUser size={24} />
            </Link>
            <Link
              href="/cart"
              className="text-black hover:text-cyan-500 transition-colors"
            >
              <FiShoppingCart size={24} />
            </Link>
          </div>
        </nav>

        <div className="bg-black text-white text-center h-12 flex items-center justify-center w-full">
          <FiTruck className="mr-2" />
          <span>Livraison offerte dès 139€ avec Mondial Relay</span>
        </div>
      </header>
    </>
  );
};

export default Header;
