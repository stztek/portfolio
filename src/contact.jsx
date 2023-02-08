import "./css/contact.css";

export default function Contact() {
  return (
    <div className="box-contact" data-aos="zoom-in" id="contact">
      <div className="contact-container">
        <h2 data-aos="zoom-in">Contactame</h2>
        <form className="form-box">
          <input
            className="input-container"
            placeholder="Nombre"
            type="name"
            data-aos="zoom-in"
          ></input>
          <input
            className="input-container"
            placeholder="Correo Electronico"
            type="email"
            data-aos="zoom-in"
          ></input>
          <textarea
            className="text-container"
            placeholder="Descripción"
            type="description"
            data-aos="zoom-in"
          ></textarea>
          <button className="button-contact-container" data-aos="zoom-in">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
