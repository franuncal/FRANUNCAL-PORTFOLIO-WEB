import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaNpm,
} from "react-icons/fa"; // Importar los iconos
import "./SobreMi.css";
// import img from "../../assets/img/1.webp";
import img from "../../assets/img/1zon.webp";
import cv from "../../assets/pdf/FranciscoUncalApraiz.pdf";

export const SobreMi = () => {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="container">
        <div className="image" data-aos="fade-left">
          <img src={img} alt="Imagen de perfil" />
        </div>
        <div className="text">
          <h2>Hola, soy Fran</h2>
          <p>
            Desarrollador Frontend con más de 4 años de experiencia creando
            sitios web a medida. Me especializo en desarrollar soluciones
            funcionales, atractivas y pensadas para cada cliente. <br /> Me
            caracterizo por tener una mirada analítica, buena comunicación y
            enfoque en el trabajo en equipo, buscando siempre calidad, claridad
            y eficiencia en cada proyecto.
          </p>
          <div className="button-group">
            <a href="/contacto" className="btn btn-primary">
              Contáctame
            </a>
            <a href={cv} download className="btn btn-secondary">
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      {/* Nueva sección de Tecnologías */}
      <div className="tecnologias">
        <h2>Habilidades Técnicas</h2>
        <div className="iconos-tecnologias">
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
  );
};
