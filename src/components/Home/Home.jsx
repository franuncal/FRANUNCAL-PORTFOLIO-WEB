import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Home.css";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Home = () => {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const navRef = useRef(null);
  const cardRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Estado inicial: todo invisible
    gsap.set(
      [
        socialRef.current,
        nameRef.current,
        descRef.current,
        navRef.current,
        cardRef.current,
      ],
      { opacity: 0, y: 24, filter: "blur(6px)" },
    );

    // Secuencia cinematográfica
    tl.to(socialRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.7,
    })
      .to(
        nameRef.current,
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
        "-=0.3",
      )
      .to(
        descRef.current,
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
        "-=0.4",
      )
      .to(
        navRef.current,
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
        "-=0.3",
      )
      .to(
        cardRef.current,
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
        "-=0.5",
      );
  }, []);

  return (
    <div className="home-container">
      {/* Iconos sociales arriba a la izquierda */}
      <div className="top-social-icons" ref={socialRef}>
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

      {/* Promo card — consistente con Contacto */}
      <div className="promo-card" ref={cardRef}>
        <div className="promo-content">
          <h3 className="promo-title">Agenda 2026</h3>
          <p className="promo-subtitle">Abierta para nuevos proyectos</p>
          <div className="promo-status">
            <span className="promo-dot" />
            <span className="promo-label">Disponible</span>
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
      <div className="personal-info">
        <div className="info-text" ref={nameRef}>
          <h2>
            FRAN <span className="logo-bracket">{"{ F }"}</span>
          </h2>
        </div>

        <div className="professional-description" ref={descRef}>
          <p className="desc-role">
            Frontend Developer — React, animaciones y performance.
          </p>
          <p className="desc-availability">Disponible para nuevos proyectos.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">© {new Date().getFullYear()}</div>
    </div>
  );
};
