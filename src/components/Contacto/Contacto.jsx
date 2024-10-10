import "./Contacto.css";

export const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contacto</h2>
          <p className="contact-description">
            Si tienes alguna pregunta o deseas colaborar, no dudes en
            contactarme a través del formulario o por mis redes sociales.
          </p>
        </div>

        <form
          className="contact-form dark-form"
          action="https://formsubmit.co/unquidev@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <span className="arrow">➔</span>
          </button>
        </form>
        <input
          type="hidden"
          name="_next"
          value="https://franuncal.unquidev.com/"
        ></input>
        <input
          type="hidden"
          name="_subject"
          value="¡Nuevo Contacto de la Web!"
        ></input>
        <input type="hidden" name="_captcha" value="false" />
      </div>
    </div>
  );
};
