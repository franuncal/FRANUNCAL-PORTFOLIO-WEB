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
import pr from "../../assets/pdf/Propuesta de Proyecto.pdf";

export const SobreMi = () => {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="container sobre-mi-container">
        <div className="image" data-aos="fade-right">
          <img src={img} alt="Logo personal" className="profile-logo" />
        </div>
        <div className="text" data-aos="fade-left">
          <h2>Hola, soy Fran</h2>
          <h3>Frontend Developer</h3>
          <p>
            Creando sitios que se ven bien y funcionan mejor. Transformando
            ideas en experiencias digitales con estilo, detalle y mucha
            personalidad. Me enfoco en crear webs que realmente destaquen y
            conecten con quienes las visitan.
          </p>
          <div className="button-group">
            <a href="/contacto" className="btn btn-primary">
              Contáctame
            </a>
            <a href={pr} download className="btn btn-secondary">
              Propuesta de Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className="tecnologias" data-aos="fade-up">
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
