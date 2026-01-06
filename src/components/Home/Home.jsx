import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Home.css";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Home = () => {
  const navRef = useRef(null);
  const infoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Animación de entrada suave
    gsap.fromTo(
      [navRef.current, infoRef.current, cardRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="home-container">
      {/* Iconos sociales arriba a la izquierda (dentro de la línea) */}
      <div className="top-social-icons">
        <a
          href="https://www.linkedin.com/in/franuncal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/franuncal.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:franuncal@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <div className="social-divider"></div>
      </div>

      {/* Card promocional arriba a la derecha */}
      <div className="promo-card" ref={cardRef}>
        <div className="promo-content">
          <div className="promo-text">
            <h3>Agenda 2026</h3>
            <p>Abierta para nuevos proyectos</p>
            <span className="promo-price">Disponible</span>
          </div>
        </div>
      </div>

      {/* Navegación grande a la derecha */}
      <nav className="main-navigation" ref={navRef}>
        <Link to="/sobre-mi" className="nav-link">
          SOBRE MI
        </Link>
        <Link to="/projects" className="nav-link">
          PORTFOLIO
        </Link>
        <Link to="/contacto" className="nav-link">
          CONTACTO
        </Link>
      </nav>

      {/* Información personal abajo a la izquierda */}
      <div className="personal-info" ref={infoRef}>
        <div className="info-text">
          <h2>
            FRAN <span className="logo-bracket">{"{ F }"}</span>
          </h2>
          <div className="professional-description">
            <p>
              Frontend Developer freelance especializado en React, trabajando en
              proyectos innovadores que buscan transformar ideas en experiencias
              digitales sólidas.
            </p>
            {/* <p>
              Más de 3 años de experiencia desarrollando sitios web modernos,
              personalizados y creativos.
            </p> */}
            <p>Disponible para colaborar en nuevos proyectos.</p>
          </div>
        </div>
      </div>

      {/* Copyright abajo izquierda */}
      <div className="copyright">© {new Date().getFullYear()}</div>
    </div>
  );
};
