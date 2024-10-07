import "./Footer.css";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 FranUncal || Todos los derechos reservados.</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/franuncalap/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:franuncal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a href="https://wa.me/2324469630" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/franuncal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
