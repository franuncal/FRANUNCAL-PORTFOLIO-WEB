import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaNpm,
} from "react-icons/fa";
import "./SobreMi.css";
import img from "../../assets/img/logoB2.webp";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SobreMi = () => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    // Logo: Zoom + giro suave
    gsap.fromTo(
      logoRef.current,
      { scale: 0.4, rotate: -30, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
        },
      }
    );

    // Título: Entrada de letras de abajo hacia arriba, una a una
    const title = titleRef.current;
    const originalTitle = title.innerText;
    const letters = originalTitle.split("");
    title.innerHTML = letters
      .map(
        (char) =>
          `<span style="display:inline-block">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    gsap.fromTo(
      title.querySelectorAll("span"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
        },
      }
    );

    // Subtítulo: Fade in + desplazamiento desde la derecha
    gsap.fromTo(
      subtitleRef.current,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
        },
      }
    );

    // Párrafo: Fade in + desplazamiento desde abajo
    gsap.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      }
    );

    // Botones: Zoom + fade con stagger
    gsap.fromTo(
      buttonsRef.current.children,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 85%",
        },
      }
    );

    // Íconos: Aparecen con stagger y rebote
    gsap.fromTo(
      iconsRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="main-content">
      <section className="sobre-mi" id="sobre-mi">
        <div className="container sobre-mi-container">
          <div className="image">
            <img
              ref={logoRef}
              src={img}
              alt="Logo personal"
              className="profile-logo"
            />
          </div>
          <div className="text">
            <h2 ref={titleRef}>Hola, soy Fran</h2>
            <h3 ref={subtitleRef}>Frontend Developer</h3>
            <p ref={paragraphRef}>
              Más de 4 años de experiencia en el desarrollo de sitios web
              atractivos, funcionales y con identidad. Transformo ideas en
              experiencias digitales sólidas, enfocadas en los detalles, la
              estética y una conexión real con cada usuario.
            </p>
            <div className="button-group" ref={buttonsRef}>
              <a href="/contacto" className="btn btn-primary">
                Contacto
              </a>
              <a href="/projects" className="btn btn-primary">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="tecnologias">
          <h2>Habilidades Técnicas</h2>
          <div className="iconos-tecnologias" ref={iconsRef}>
            <FaHtml5 className="icon icon-html" />
            <FaCss3Alt className="icon icon-css" />
            <FaJs className="icon icon-js" />
            <FaReact className="icon icon-react" />
            <FaGitAlt className="icon icon-git" />
            <FaGithub className="icon icon-github" />
            <FaAws className="icon icon-aws" />
            <FaNpm className="icon icon-npm" />
          </div>
        </div>
      </section>
    </div>
  );
};
