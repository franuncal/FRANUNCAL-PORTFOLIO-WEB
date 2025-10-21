import "./Proyectos.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// === Imagenes de proyectos activos ===
import agroTruckImg from "../../assets/img/img-proyectos/agrotruck.png";
import mampaticaImg from "../../assets/img/img-proyectos/mampatica.png";
import paladarImg from "../../assets/img/img-proyectos/paladar.png";
// import puriImg from "../../assets/img/img-proyectos/puri.png";

// === Imagenes de proyectos finalizados ===
import img from "../../assets/img/img-proyectos/N1.webp";
import img1 from "../../assets/img/img-proyectos/N8.webp";
import img2 from "../../assets/img/img-proyectos/N2.webp";
import img4 from "../../assets/img/img-proyectos/N6.webp";
import img5 from "../../assets/img/img-proyectos/N5.webp";
import img7 from "../../assets/img/img-proyectos/N3.webp";
import img8 from "../../assets/img/img-proyectos/N10.webp";
import img9 from "../../assets/img/img-proyectos/N9.webp";
import img11 from "../../assets/img/img-proyectos/N11.webp";

gsap.registerPlugin(ScrollTrigger);

// === Proyectos activos ===
const proyectosActivos = [
  {
    img: mampaticaImg,
    alt: "Mampatica",
    title: "Sitio web + Branding",
    desc: "Complejo de cabañas y cafetería en Tanti. Nueva versión 2025.",
    badge: "Próximo lanzamiento",
    tech: [FaHtml5, FaCss3Alt, FaReact],
  },
  {
    img: agroTruckImg,
    alt: "Agro Truck App",
    title: "Landing + App móvil",
    desc: "Plataforma de logística agropecuaria. Desarrollo web y app React Native.",
    badge: "En desarrollo",
    tech: [FaReact, FaJs],
  },
  {
    img: paladarImg,
    alt: "Paladar Saludable",
    title: "Landing page UX/UI",
    desc: "Rediseño y flujo UX para nutricionista. Optimización móvil y SEO.",
    badge: "En desarrollo",
    tech: [FaHtml5, FaCss3Alt, FaJs],
  },
  // {
  //   img: puriImg,
  //   alt: "Puri",
  //   title: "Portfolio Artistico",
  //   desc: "Rediseño y flujo UX para artista. Optimización móvil y SEO.",
  //   badge: "En desarrollo",
  //   tech: [FaHtml5, FaCss3Alt, FaJs],
  // },
];

// === Proyectos finalizados ===
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
    alt: "Bombicino Diagnóstico",
    title: "Sitio Web",
    url: "https://www.bombicino.com.ar/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img2,
    alt: "Portfolio Audiovisual",
    title: "Portfolio Web",
    url: "https://federementeria.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    img: img,
    alt: "Grand Alyson",
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
    alt: "MI Logística Internacional",
    title: "Landing Page",
    url: "https://milogisticainternacional.com/",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
];

const Proyectos = () => {
  const titleRef = useRef(null);
  const cardsActivosRef = useRef([]);
  const cardsFinalizadosRef = useRef([]);

  useEffect(() => {
    // Animación título principal
    gsap.fromTo(
      titleRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animación de proyectos activos
    gsap.fromTo(
      cardsActivosRef.current.filter(Boolean),
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: cardsActivosRef.current[0],
          start: "top 92%",
        },
      }
    );

    // Animación de proyectos finalizados
    gsap.fromTo(
      cardsFinalizadosRef.current.filter(Boolean),
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: cardsFinalizadosRef.current[0],
          start: "top 92%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="projects-section">
      {/* === BLOQUE DE PROYECTOS ACTIVOS === */}
      <h2 ref={titleRef}>En desarrollo — proyectos activos</h2>
      <p className="projects-desc">
        Actualmente trabajando en nuevas experiencias digitales.
      </p>
      <div className="projects-container active">
        {proyectosActivos.map((p, i) => (
          <div
            className="project-card active"
            key={i}
            ref={(el) => (cardsActivosRef.current[i] = el)}
          >
            <div className="badge">{p.badge}</div>
            <div className="img-wrapper">
              <img src={p.img} alt={p.alt} />
              <div className="overlay">
                <span>En desarrollo</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <div className="tech-logos">
                {p.tech.map((Icon, idx) => (
                  <Icon className="icon" key={idx} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === BLOQUE DE PROYECTOS FINALIZADOS === */}
      <h2 className="finalizados-title">Proyectos finalizados</h2>
      <p className="projects-desc">
        Algunos de los proyectos que he creado a lo largo de mi carrera como
        programador.
      </p>
      <div className="projects-container">
        {proyectosData.map((p, i) => (
          <div
            className="project-card"
            key={i}
            ref={(el) => (cardsFinalizadosRef.current[i] = el)}
          >
            <a href={p.url} target="_blank" rel="noreferrer">
              <img src={p.img} alt={p.alt} />
            </a>
            <div className="project-info">
              <h3>{p.title}</h3>
              <div className="tech-logos">
                {p.tech.map((Icon, idx) => (
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
