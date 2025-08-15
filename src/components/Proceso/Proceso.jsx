import "./Proceso.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaRegHandshake,
  FaFileAlt,
  FaPalette,
  FaCode,
  FaRegEye,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const pasos = [
  {
    titulo: "Primer contacto",
    descripcion: "Reunión inicial para conocer tu idea y objetivos.",
    icon: <FaRegHandshake />,
    color: "#6bceb2",
  },
  {
    titulo: "Propuesta y presupuesto",
    descripcion: "Te presento una propuesta personalizada y presupuesto.",
    icon: <FaFileAlt />,
    color: "#ffd166",
  },
  {
    titulo: "Planificación y diseño",
    descripcion: "Definimos estructura, tiempos y diseño visual.",
    icon: <FaPalette />,
    color: "#43aaff",
  },
  {
    titulo: "Desarrollo",
    descripcion: "Construyo el sitio web y sus funcionalidades.",
    icon: <FaCode />,
    color: "#ef476f",
  },
  {
    titulo: "Revisión y ajustes",
    descripcion: "Revisamos juntos y realizo los ajustes necesarios.",
    icon: <FaRegEye />,
    color: "#9d6bce",
  },
  {
    titulo: "Lanzamiento y soporte",
    descripcion: "Publicamos el sitio y te brindo soporte post-lanzamiento.",
    icon: <FaRocket />,
    color: "#00bfae",
  },
];

const Proceso = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 90%" },
      }
    );
    gsap.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: descRef.current, start: "top 90%" },
      }
    );
    gsap.fromTo(
      stepsRef.current.filter(Boolean),
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.18,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: stepsRef.current[0], start: "top 92%" },
      }
    );
  }, []);

  return (
    <section className="proceso-section">
      <h2 ref={titleRef}>¿Cómo es el proceso de trabajo?</h2>
      <p ref={descRef} className="proceso-desc">
        Así te acompaño desde la idea inicial hasta el lanzamiento de tu
        proyecto web:
      </p>
      <div className="proceso-timeline">
        {pasos.map((paso, i) => (
          <div
            className="proceso-card"
            ref={(el) => (stepsRef.current[i] = el)}
            key={i}
          >
            <div className="proceso-icon" style={{ background: paso.color }}>
              {paso.icon}
            </div>
            <div className="proceso-info">
              <h3>{paso.titulo}</h3>
              <p>{paso.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="proceso-cta">
        <a href="/contacto" className="cta-btn">
          ¿Listo para empezar tu proyecto? <span>Contáctame</span>
        </a>
      </div>
    </section>
  );
};

export default Proceso;
