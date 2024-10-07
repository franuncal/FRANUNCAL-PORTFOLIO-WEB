// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <p href="/" className="logo">
        Fran Uncal
      </p>
      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="/" onClick={closeMenu}>
              Inicio
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
      <div className="social-icons-nav">
        <a
          href="https://www.instagram.com/franuncalap/"
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
    </header>
  );
};

export default Navbar;
