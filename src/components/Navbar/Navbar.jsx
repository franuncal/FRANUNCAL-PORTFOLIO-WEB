// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
// import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navListRef = useRef(null);
  const socialRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // useEffect(() => {
  //   // Animación de entrada para el navbar
  //   gsap.from(navbarRef.current, {
  //     y: -60,
  //     // opacity: 0,
  //     duration: 1,
  //     ease: "power2.out",
  //   });
  //   // Animación para el logo
  //   gsap.from(logoRef.current, {
  //     scale: 0.7,
  //     // opacity: 0,
  //     duration: 0.8,
  //     delay: 0.3,
  //     ease: "back.out(1.7)",
  //   });
  //   // Animación para los links
  //   gsap.from(navListRef.current.children, {
  //     y: -20,
  //     // opacity: 0,
  //     duration: 0.6,
  //     stagger: 0.08,
  //     delay: 0.5,
  //     ease: "power2.out",
  //   });
  //   // Animación para los iconos sociales
  //   gsap.from(socialRef.current.children, {
  //     scale: 0.6,
  //     // opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.1,
  //     delay: 0.7,
  //     ease: "back.out(1.7)",
  //   });
  // }, []);

  return (
    <header ref={navbarRef}>
      <div className="navbar-inner">
        <a href="/" className="logo" ref={logoRef}>
          {"{ F }"}
        </a>
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list" ref={navListRef}>
            <li>
              <a className="inicio" href="/" onClick={closeMenu}>
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="/projects" onClick={closeMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <Link to="/contacto" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social-icons-nav" ref={socialRef}>
          <a
            href="https://www.instagram.com/franuncal.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:franuncal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
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
    </header>
  );
};

export default Navbar;
