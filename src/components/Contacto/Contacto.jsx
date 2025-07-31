import "./Contacto.css";
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contacto</h2>
          <p className="contact-description">
            Si tienes alguna pregunta o deseas colaborar, no dudes en
            contactarme a través de mis redes sociales o por email.
          </p>
        </div>

        <div className="social-icons">
          <div className="social-item">
            <a
              href="mailto:franuncal@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-email"
            >
              <FaEnvelope />
              <span>franuncal@gmail.com</span>
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/franuncal/"
              target="_blank"
              rel="noreferrer"
              className="icon-linkedin"
            >
              <FaLinkedin />
              <span>https://www.linkedin.com/in/franuncal/</span>
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://www.instagram.com/franuncal.dev/"
              target="_blank"
              rel="noreferrer"
              className="icon-instagram"
            >
              <FaInstagram />
              <span>https://instagram.com/franuncal.dev/</span>
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://wa.me/2324469630"
              target="_blank"
              rel="noreferrer"
              className="icon-whatsapp"
            >
              <FaWhatsapp />
              <span>https://wa.me/2324469630</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
