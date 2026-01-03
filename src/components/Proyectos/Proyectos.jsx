import "./Proyectos.css";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { FaReact, FaJs } from "react-icons/fa";
import { SiVite, SiGreensock, SiReactrouter } from "react-icons/si";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltedCard from "./TiltedCard";
import StarBorder from "./StarBorder";

// === Imagenes de proyectos finalizados ===
import img from "../../assets/img/img-proyectos/N1.webp";
import img1 from "../../assets/img/img-proyectos/N8.webp";
import img2 from "../../assets/img/img-proyectos/N2.webp";
// import img3 from "../../assets/img/img-proyectos/N4.webp";
import img4 from "../../assets/img/img-proyectos/N6.webp";
import img5 from "../../assets/img/img-proyectos/N5.webp";
// import img6 from "../../assets/img/img-proyectos/N7.webp";
import img7 from "../../assets/img/img-proyectos/N3.webp";
import img8 from "../../assets/img/img-proyectos/N10.webp";
// import img9 from "../../assets/img/img-proyectos/N9.webp";
import img11 from "../../assets/img/img-proyectos/N11.webp";
import img12 from "../../assets/img/img-proyectos/N12.webp";
import img13 from "../../assets/img/img-proyectos/N13.webp";
import img14 from "../../assets/img/img-proyectos/N14.webp";
import img15 from "../../assets/img/img-proyectos/N15.webp";
import img16 from "../../assets/img/img-proyectos/N16.webp";

gsap.registerPlugin(ScrollTrigger);

// === Proyectos activos ===
const proyectosActivos = [
  {
    title: "Sitio Web Corporativo",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    title: "E-commerce de Productos",
    tech: [FaReact, SiVite, SiGreensock],
  },
  {
    title: "Landing + App móvil",
    tech: [FaReact, FaJs],
  },
];

// === Proyectos finalizados ===
const proyectosData = [
  {
    img: img15,
    alt: "Cardiología Hepta",
    title: "Landing Page",
    url: "https://cardiologia.hepta.com.ar/",
    tech: [FaReact, SiVite],
  },
  {
    img: img16,
    alt: "Killacabanas",
    title: "Sitio Web",
    url: "https://killacabanas.com/",
    tech: [FaReact, SiVite, SiGreensock],
  },
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
  // {
  //   img: img9,
  //   alt: "MI Logística Internacional",
  //   title: "Landing Page",
  //   url: "https://milogisticainternacional.com/",
  //   tech: [FaReact, SiVite],
  // },
  // {
  //   img: img3,
  //   alt: "Proyecto Nuevo 1",
  //   title: "Sitio Web",
  //   url: "#",
  //   tech: [FaReact, SiVite, SiGreensock],
  // },
  // {
  //   img: img6,
  //   alt: "Proyecto Nuevo 2",
  //   title: "Landing Page",
  //   url: "#",
  //   tech: [FaReact, SiVite],
  // },
];

const Proyectos = () => {
  const titleRef = useRef(null);
  const developmentRef = useRef(null);
  const cardsActivosRef = useRef([]);

  useEffect(() => {
    // Animación título principal
    gsap.fromTo(
      titleRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animación del mensaje de desarrollo
    if (developmentRef.current) {
      gsap.fromTo(
        developmentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: developmentRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Animación de proyectos activos
    gsap.fromTo(
      cardsActivosRef.current.filter(Boolean),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsActivosRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="projects-section">
      {/* === MENSAJE DE AGENDA === */}
      <div className="development-message" ref={developmentRef}>
        <div className="development-content">
          <h3>Agenda 2026 abierta para nuevos proyectos.</h3>
          <p>
            Disponible para colaborar en proyectos innovadores que busquen
            transformar ideas en realidad digital.
          </p>
        </div>
      </div>

      {/* === BLOQUE DE PROYECTOS ACTIVOS === */}
      <h2 ref={titleRef}>En desarrollo</h2>
      <div className="projects-container active">
        {proyectosActivos.map((p, i) => (
          <StarBorder
            key={i}
            as="div"
            className="project-card-active-wrapper"
            color="cyan"
            speed="5s"
            ref={(el) => (cardsActivosRef.current[i] = el)}
          >
            <div className="badge">En desarrollo</div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <div className="tech-logos">
                {p.tech.map((Icon, idx) => (
                  <Icon className="icon" key={idx} />
                ))}
              </div>
            </div>
          </StarBorder>
        ))}
      </div>

      {/* === BLOQUE DE PROYECTOS FINALIZADOS === */}
      <h2 className="finalizados-title">Proyectos finalizados</h2>
      <p className="projects-desc">
        Algunos de los proyectos que he creado a lo largo de mi carrera como
        programador.
      </p>
      <div className="tilted-cards-grid">
        {proyectosData.map((proyecto, i) => (
          <a
            key={i}
            href={proyecto.url}
            target="_blank"
            rel="noreferrer"
            className="tilted-card-link"
          >
            <TiltedCard
              imageSrc={proyecto.img}
              altText={proyecto.alt}
              captionText={proyecto.title}
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="320px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <div className="tilted-card-project-info">
              <h3>{proyecto.title}</h3>
              <div className="tech-logos">
                {proyecto.tech.map((Icon, idx) => (
                  <Icon className="icon" key={idx} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
