import "../globals.css";
import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Retrometroid</h3>
          <p>
            Découvrez notre large gamme de produits rétro et profitez d'un
            service client de qualité.
          </p>
          <p>&copy; 2024 Retrometroid. Tous droits réservés.</p>
        </div>

        <div className="footer-social">
          <p>Suivez-nous sur :</p>
          <a href="#" aria-label="Instagram">
            <FaInstagram
              size={24}
              style={{ marginRight: "10px", color: "#fff" }}
            />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok
              size={24}
              style={{ marginRight: "10px", color: "#fff" }}
            />
          </a>
          <a href="#" aria-label="Email">
            <FaEnvelope size={24} style={{ color: "#fff" }} />
          </a>
        </div>

        <div className="footer-legal">
          <ul>
            <li>
              <a href="/mentions-legales">Mentions légales</a>
            </li>
            <li>
              <a href="/conditions-generales">Conditions générales de vente</a>
            </li>
            <li>
              <a href="/politique-confidentialite">
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
