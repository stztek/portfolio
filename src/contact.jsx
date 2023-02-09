import { faL } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./css/contact.css";

export default function Contact(e) {
  const [enviado, setEnviado] = useState(null);
  const [nombre, setNombre] = useState("");
  const [correo, setMail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (correo === "" || nombre === "" || desc === "") {
      setEnviado(false);
      console.log("no se pudo enviar");
    } else {
      setEnviado(true);
      console.log(nombre, correo, desc);
    }
  };

  const ChangeName = (event) => {
    setNombre(event.target.value);
  };

  const ChangeMail = (event) => {
    setMail(event.target.value);
  };
  const ChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  const SendContact = async () => {
    if (correo === "" || nombre === "" || desc === "") {
      return;
    } else {
      const URL = "https://63e531bbc04baebbcdb5d306.mockapi.io/contacts";
      const response = await axios.post(URL, {
        nombre,
        correo,
        desc,
      });

      console.log(response.data);
    }
  };

  return (
    <div
      className="box-contact"
      data-aos="zoom-in"
      id="contact"
      onSubmit={handleSubmit}
    >
      <div className="contact-container">
        <h2 data-aos="zoom-in">Contactame</h2>
        <form className="form-box">
          <input
            className="input-container"
            placeholder="Nombre"
            type="name"
            data-aos="zoom-in"
            value={nombre}
            onChange={ChangeName}
          ></input>
          <div className="check-box">
            {nombre === "" ? (
              <p className="p-form" data-aos="zoom-in" data-aos-once="true">
                Campo vacio
              </p>
            ) : (
              <></>
            )}
          </div>
          <input
            className="input-container"
            placeholder="Correo Electronico"
            type="email"
            data-aos="zoom-in"
            value={correo}
            onChange={ChangeMail}
          ></input>
          <div className="check-box">
            {correo === "" ? (
              <p className="p-form" data-aos="zoom-in" data-aos-once="true">
                Campo vacio
              </p>
            ) : (
              <></>
            )}
          </div>
          <textarea
            className="text-container"
            placeholder="Descripción"
            type="description"
            data-aos="zoom-in"
            value={desc}
            onChange={ChangeDesc}
          ></textarea>
          <div className="check-box">
            {desc === "" ? (
              <p className="p-form" data-aos="zoom-in" data-aos-once="true">
                Campo vacio
              </p>
            ) : (
              <></>
            )}
          </div>
          <button
            className="button-contact-container"
            data-aos="zoom-in"
            data-aos-once="true"
            onClick={SendContact}
          >
            Enviar
          </button>
          <div>
            {enviado ? (
              <h2>
                Gracias por contactarnos. En la brevedad estarémos al habla
              </h2>
            ) : (
              <p className="p-form" data-aos="zoom-in" data-aos-once="true">
                Para poder completar el contacto, es necesario que complete
                todos los campos que se encuentran vacios. Recuerde que es
                importante ser descriptivo con o que necesite.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
