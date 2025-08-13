import "./Contacto.css";
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contacto = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    // Título: Fade in desde arriba
    gsap.fromTo(
      titleRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      }
    );

    // Descripción: Fade in desde abajo
    gsap.fromTo(
      descRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 90%",
        },
      }
    );

    // Íconos sociales: Zoom + stagger
    gsap.fromTo(
      iconsRef.current.children,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="main-content">
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-info">
            <h2 ref={titleRef}>Contacto</h2>
            <p className="contact-description" ref={descRef}>
              Si tienes alguna pregunta o deseas colaborar, no dudes en
              contactarme a través de mis redes sociales o por email.
            </p>
          </div>

          <div className="social-icons" ref={iconsRef}>
            <div className="social-item">
              <a
                href="https://wa.me/2324469630"
                target="_blank"
                rel="noreferrer"
                className="icon-whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="social-item">
              <a
                href="mailto:franuncal@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-email"
              >
                <FaEnvelope />
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
              </a>
            </div>
          </div>
          {/* <a href="/projects" className="btn btn-primary">
          Propuesta de Proyecto
        </a> */}
        </div>
      </div>
    </div>
  );
};
