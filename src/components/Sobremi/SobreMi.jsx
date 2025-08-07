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
// import pr from "../../assets/pdf/Propuesta de Proyecto.pdf";

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
            Más de 4 años de experiencia desarrollando sitios web atractivos,
            funcionales y con identidad. Transformo ideas en experiencias
            digitales sólidas, enfocadas en el detalle, la estética y la
            conexión real con cada usuario.
          </p>
          <div className="button-group">
            <a href="/contacto" className="btn btn-primary">
              Contáctame
            </a>
            <a href="/projects" className="btn btn-primary">
              Proyectos
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
