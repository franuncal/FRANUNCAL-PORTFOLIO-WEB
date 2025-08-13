import "./Proyectos.css";
import img from "../../assets/img/img-proyectos/N1.webp";
import img1 from "../../assets/img/img-proyectos/N8.webp";
import img2 from "../../assets/img/img-proyectos/N2.webp";
import img4 from "../../assets/img/img-proyectos/N6.webp";
import img5 from "../../assets/img/img-proyectos/N5.webp";
import img7 from "../../assets/img/img-proyectos/N3.webp";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Proyectos = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Título: Fade in desde arriba
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

    // Descripción: Fade in desde abajo
    gsap.fromTo(
      descRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 90%",
        },
      }
    );

    // Tarjetas de proyectos: Zoom + stagger
    gsap.fromTo(
      cardsRef.current,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
        },
      }
    );
  }, []);

  // Helper para refs de tarjetas
  const setCardRef = (el, i) => {
    cardsRef.current[i] = el;
  };

  return (
    <section id="projects" className="projects-section">
      <h2 ref={titleRef}>Mis proyectos</h2>
      <p ref={descRef}>
        Estos son algunos de los proyectos que he creado a lo largo de mi
        carrera como programador.
      </p>
      <div className="projects-container">
        {/* Fede */}
        <div className="project-card" ref={(el) => setCardRef(el, 0)}>
          <img src={img2} alt="Portfolio del realizador audiovisual" />
          <div className="project-info">
            <h3>FR - Realizador Audiovisual</h3>
            <p>
              Portfolio profesional de un realizador audiovisual, destacando sus
              proyectos más importantes. El sitio permite explorar su trabajo
              visualmente y facilita la programación de reuniones para futuros
              proyectos.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://federementeria.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Grand Alyson */}
        <div className="project-card" ref={(el) => setCardRef(el, 1)}>
          <img src={img} alt="grand alyson web" />
          <div className="project-info">
            <h3>Grand Alyson - Proyecto Inmobiliario</h3>
            <p>
              Landing page inmobiliaria desarrollada para Grand Alyson, proyecto
              residencial orientado a mayores de 45 años. El sitio destaca su
              propuesta de vida, ubicación y amenities, transmitiendo calidez y
              confianza para facilitar consultas y ventas.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://experienciagrandalyson.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Silvestre */}
        <div className="project-card" ref={(el) => setCardRef(el, 2)}>
          <img src={img5} alt="Silvestre DDL" />
          <div className="project-info">
            <h3>Silvestre - Dulce de Leche</h3>
            <p>
              Sitio web para Silvestre - Tienda Natural, que refleja la esencia
              de la marca con imágenes y descripciones claras. Facilita la
              exploración de productos, conocimiento de su filosofía y compras
              seguras.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://silvestreddl.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Menta y Limon */}
        <div className="project-card" ref={(el) => setCardRef(el, 3)}>
          <img src={img7} alt="Alquileres Temporales" />
          <div className="project-info">
            <h3>Menta&Limon Cumbia</h3>
            <p>
              Landing page creada para la banda de cumbia Menta y Limón,
              mostrando su identidad musical y próximos shows. El sitio combina
              un diseño vibrante con contenido multimedia, permitiendo conocer
              su propuesta artística y agilizando las contrataciones para
              eventos.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://mentaylimoncumbia.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Temistocles */}
        <div className="project-card" ref={(el) => setCardRef(el, 4)}>
          <img src={img4} alt="Cabanas Temistocles" />
          <div className="project-info">
            <h3>Cabañas Temistocles</h3>
            <p>
              Sitio web para Cabañas Temistocles en Esquel, que destaca sus
              instalaciones y servicios a través de imágenes y descripciones.
              Facilita la exploración de las cabañas y la realización de
              reservas de manera fácil y efectiva.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://temistoclesesquel.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Chand Mantra */}
        <div className="project-card" ref={(el) => setCardRef(el, 5)}>
          <img src={img1} alt="Chand Mantra" />
          <div className="project-info">
            <h3>Chand Mantra - Espejos de Diseño</h3>
            <p>
              Landing page dedicada a la venta de espejos de diseño
              personalizados. La página se centra en presentar los productos de
              manera visual, con secciones claras que guían al usuario hacia la
              compra de manera eficiente.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
            </div>
            <a href="https://chandmantra.com/" target="_blank" rel="noreferrer">
              Sitio Web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
