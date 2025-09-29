import "./Proyectos.css";
import img from "../../assets/img/img-proyectos/N1.webp";
import img1 from "../../assets/img/img-proyectos/N8.webp";
import img2 from "../../assets/img/img-proyectos/N2.webp";
import img4 from "../../assets/img/img-proyectos/N6.webp";
import img5 from "../../assets/img/img-proyectos/N5.webp";
import img7 from "../../assets/img/img-proyectos/N3.webp";
import img8 from "../../assets/img/img-proyectos/N10.webp";
import img9 from "../../assets/img/img-proyectos/N9.webp";
// import img10 from "../../assets/img/img-proyectos/N7.webp";
import img11 from "../../assets/img/img-proyectos/N11.webp";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proyectosData = [
  {
    img: img11,
    alt: "SKY Las Grutas",
    title: "Sitio Web",
    url: "https://skylasgrutas.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img8,
    alt: "Bombicino Diagnostico",
    title: "Sitio Web",
    url: "https://www.bombicino.com.ar/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img2,
    alt: "Portfolio del realizador audiovisual",
    title: "Portfolio Web",
    url: "https://federementeria.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img,
    alt: "Grand Alyson web",
    title: "Sitio Web",
    url: "https://experienciagrandalyson.com.ar/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img5,
    alt: "Silvestre DDL",
    title: "Landing Page",
    url: "https://silvestreddl.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img7,
    alt: "Menta y Limón Cumbia",
    title: "Landing Page",
    url: "https://mentaylimoncumbia.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img4,
    alt: "Cabañas Temistocles",
    title: "Sitio Web",
    url: "https://temistoclesesquel.com.ar/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img1,
    alt: "Chand Mantra",
    title: "Landing Page",
    url: "https://chandmantra.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs],
  },
  {
    img: img9,
    alt: "MI Logistica Internacional",
    title: "Landing Page",
    url: "https://milogisticainternacional.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  // {
  //   img: img10,
  //   alt: "Alquiler Esquel",
  //   title: "Landing Page",
  //   url: "https://alquileresquel.com/",
  //   tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  // },
];

const Proyectos = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
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

    gsap.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 92%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 ref={titleRef}>Mis proyectos</h2>
      <p ref={descRef} className="projects-desc">
        Estos son algunos de los proyectos que he creado a lo largo de mi
        carrera como programador.
      </p>
      <div className="projects-container">
        {proyectosData.map((proyecto, i) => (
          <div
            className="project-card"
            ref={(el) => (cardsRef.current[i] = el)}
            key={i}
          >
            <a href={proyecto.url} target="_blank" rel="noreferrer">
              <img src={proyecto.img} alt={proyecto.alt} />
            </a>
            <div className="project-info">
              <h3>{proyecto.title}</h3>
              <div className="tech-logos">
                {proyecto.tech.map((Icon, idx) => (
                  <Icon className="icon" key={idx} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
