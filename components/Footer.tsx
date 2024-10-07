import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-black text-white py-12 border-t-2 border-red-500">
      <div className="footer-container max-w-6xl mx-auto flex flex-wrap justify-between items-start text-sm space-y-8 md:space-y-0 md:space-x-8">
        <div className="footer-about flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold uppercase mb-4 tracking-wider text-cyan-400">
            Retrometroid
          </h3>
          <p className="mb-4 text-gray-300">
            Découvrez notre large gamme de produits rétro
          </p>
          <p className="text-gray-500">
            &copy; 2024 Retrometroid. Tous droits réservés.
          </p>
        </div>

        <div className="footer-social flex-1 text-center">
          <p className="mb-4 text-gray-300">Suivez-nous sur :</p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-cyan-400 hover:text-purple-400 transition-all"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-cyan-400 hover:text-purple-400 transition-all"
            >
              <FaTiktok size={30} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-cyan-400 hover:text-purple-400 transition-all"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>

        <div className="footer-legal flex-1 text-center sm:text-left">
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="/mentions-legales"
                className="hover:text-purple-400 transition"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/conditions-generales"
                className="hover:text-purple-400 transition"
              >
                Conditions générales de vente
              </a>
            </li>
            <li>
              <a
                href="/politique-confidentialite"
                className="hover:text-purple-400 transition"
              >
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
