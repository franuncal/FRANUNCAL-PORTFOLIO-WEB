import "./Proyectos.css";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { FaReact, FaJs } from "react-icons/fa";
import { SiVite, SiGreensock, SiReactrouter } from "react-icons/si";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// === Imagenes de proyectos activos ===
import agroTruckImg from "../../assets/img/img-proyectos/agrotruck.png";
import agencia from "../../assets/img/img-proyectos/agencia.webp";
import conect from "../../assets/img/img-proyectos/conect.webp";
// import puriImg from "../../assets/img/img-proyectos/puri.webp";

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
import img12 from "../../assets/img/img-proyectos/N12.webp";
import img13 from "../../assets/img/img-proyectos/N13.webp";
import img14 from "../../assets/img/img-proyectos/N14.webp";

gsap.registerPlugin(ScrollTrigger);

// === Proyectos activos ===
const proyectosActivos = [
  {
    img: agencia,
    alt: "Agencia de Marketing",
    title: "Sitio Web Corporativo",
    desc: "Sitio web para agencia de marketing. Desarrollo completo en React.",
    badge: "En desarrollo",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    img: conect,
    alt: "ConectArte",
    title: "E-commerce de Productos",
    desc: "E-commerce de productos. Desarrollo en React con enfoque escalable.",
    badge: "En desarrollo",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    img: agroTruckImg,
    alt: "Agro Truck App",
    title: "Landing + App móvil",
    desc: "Plataforma de logística agropecuaria. Desarrollo web y app React Native.",
    badge: "En desarrollo",
    tech: [FaReact, FaJs],
  },
];

// === Proyectos finalizados ===
const proyectosData = [
  {
    img: img14,
    alt: "Puri Arte/Serigrafia",
    title: "Portfolio Web",
    url: "https://puri.com.ar/",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    img: img13,
    alt: "Paladar Saludable",
    title: "Landing Page",
    url: "https://paladarsaludable.com.ar/",
    tech: [FaReact, SiVite, SiReactrouter],
  },
  {
    img: img12,
    alt: "Mampatica",
    title: "Sitio Web",
    url: "https://mampatica.com/",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    img: img11,
    alt: "SKY Las Grutas",
    title: "Sitio Web",
    url: "https://skylasgrutas.com/",
    tech: [FaReact, SiVite],
  },
  {
    img: img8,
    alt: "Bombicino Diagnóstico",
    title: "Sitio Web",
    url: "https://www.bombicino.com.ar/",
    tech: [FaReact, SiVite, SiReactrouter],
  },
  {
    img: img2,
    alt: "Portfolio Audiovisual",
    title: "Portfolio Web",
    url: "https://federementeria.com/",
    tech: [FaReact, SiVite],
  },
  {
    img: img,
    alt: "Grand Alyson",
    title: "Sitio Web",
    url: "https://experienciagrandalyson.com.ar/",
    tech: [FaReact, SiVite, SiReactrouter],
  },
  {
    img: img5,
    alt: "Silvestre DDL",
    title: "Landing Page",
    url: "https://silvestreddl.com/",
    tech: [FaReact, SiVite],
  },
  {
    img: img7,
    alt: "Menta y Limón Cumbia",
    title: "Landing Page",
    url: "https://mentaylimoncumbia.com/",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    img: img4,
    alt: "Cabañas Temistocles",
    title: "Sitio Web",
    url: "https://temistoclesesquel.com.ar/",
    tech: [FaReact, SiVite],
  },
  {
    img: img1,
    alt: "Chand Mantra",
    title: "Landing Page",
    url: "https://chandmantra.com/",
    tech: [FaJs, FaReact, SiVite],
  },
  {
    img: img9,
    alt: "MI Logística Internacional",
    title: "Landing Page",
    url: "https://milogisticainternacional.com/",
    tech: [FaReact, SiVite],
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
      <h2 ref={titleRef}>En desarrollo </h2>
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
