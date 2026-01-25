import "./Proyectos.css";
import { Link } from "react-router-dom";

// === Proyectos finalizados ===
const proyectosData = [
  {
    name: "PURI",
    description:
      "Portfolio web para artista de serigrafía. Diseño minimalista que destaca el trabajo artístico.",
    url: "https://puri.com.ar/",
    type: "REACT - Portfolio",
  },
  {
    name: "TEMISTOCLES",
    description: "Sitio web con sistema de reservas para Cabanas de Esquel.",
    url: "https://temistoclesesquel.com.ar/",
    type: "REACT - Sitio web",
  },
  {
    name: "KILLA",
    description:
      "Sitio web con sistema de reservas para Cabanas de Tanti Cordoba..",
    url: "https://killacabanas.com/",
    type: "REACT - Sitio web",
  },
  {
    name: "SILVESTRE",
    description:
      "Landing page para una marca de Dulce de leche artesanal, con diseno moderno, responsive y funcional.",
    url: "https://silvestreddl.com/",
    type: "REACT - Landing Page",
  },
  {
    name: "MAMPATICA",
    description: "Sitio web con sistema de reservas para Cabanas de Mampatica.",
    url: "https://mampatica.com.ar/",
    type: "REACT - Sitio web",
  },
  {
    name: "FEDE R.",
    description:
      "Portfolio audiovisual. Showcase de trabajos creativos con diseño impactante.",
    url: "https://federementeria.com/",
    type: "React - Portfolio",
  },
  {
    name: "SKY",
    description:
      "Sitio web para complejo turístico. Experiencia visual inmersiva.",
    url: "https://skylasgrutas.com/",
    type: "REACT sitio web",
  },
  {
    name: "MENTA&LIMON",
    description:
      "Landing page para banda de cumbia. Enfoque en conversión y experiencia de usuario.",
    url: "https://www.mentaylimoncumbia.com/",
    type: "React - Landing Page",
  },
  {
    name: "BOMBICINO",
    description:
      "Sitio web para centro de diagnóstico médico. Diseño profesional y confiable.",
    url: "https://www.bombicino.com.ar/",
    type: "React - Sitio web",
  },

  {
    name: "PALADAR SALUDABLE",
    description:
      "Landing page para servicio de alimentación saludable. Enfoque en conversión y experiencia de usuario.",
    url: "https://paladarsaludable.com.ar/",
    type: "REACT - Landing Page",
  },
];

const Proyectos = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Botón HOME arriba */}
      <Link to="/" className="home-link">
        HOME
      </Link>

      {/* Copyright vertical abajo izquierda */}
      <div className="copyright">© {new Date().getFullYear()}</div>

      {/* Sección WORK abajo a la izquierda (siempre visible) */}
      <div className="work-section">
        <h2 className="work-title">PROJECTS</h2>
        <div className="work-description">
          <p>
            Esta es una muestra de mi mejor trabajo en una variedad de campos
            incluyendo Diseño Web, Desarrollo Frontend, Diseño de Producto y
            Desarrollo de Aplicaciones.
          </p>
          <p>
            El mundo del diseño digital y desarrollo está en constante evolución
            y así ha evolucionado mi rol a lo largo de mi carrera.
          </p>
        </div>
      </div>

      <div className="projects-layout">
        {/* Lista de proyectos a la derecha */}
        <div className="projects-list">
          {proyectosData.map((proyecto, i) => (
            <div key={i} className="project-item">
              <a
                href={proyecto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <h3 className="project-name">{proyecto.name}</h3>
                <p className="project-type">- {proyecto.type}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
