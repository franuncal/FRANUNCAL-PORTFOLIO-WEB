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
              href="https://www.instagram.com/franuncalap/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <p>https://instagram.com/franuncalap/</p>
          </div>
          <div className="social-item">
            <a
              href="mailto:franuncal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <p>franuncal@gmail.com</p>
          </div>
          <div className="social-item">
            <a href="https://wa.me/2324469630" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <p>https://wa.me/2324469630</p>
          </div>
          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/franuncal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <p>https://www.linkedin.com/in/franuncal/</p>
          </div>
        </div>
      </div>
    </div>
  );
};
