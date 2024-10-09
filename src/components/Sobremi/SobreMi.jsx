import "./SobreMi.css";
import img from "../../assets/img/img4.png";
// import img from "../../assets/img/img1.jpeg";
import cv from "../../assets/pdf/cv-uncal apraiz francisco.pdf";

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
            Soy Programador Web con más de 3 años de experiencia creando sitios
            web para diversos clientes. A lo largo de mi carrera, he adquirido
            habilidades técnicas sólidas en React y JavaScript, lo que me
            permite enfrentar desafíos complejos y aportar soluciones
            eficientes. Mi meta es seguir evolucionando en este rol, creando
            interfaces de usuario innovadoras y colaborando en equipos dinámicos
            para lograr resultados sobresalientes.
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
    </section>
  );
};
