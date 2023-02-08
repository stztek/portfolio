import "./css/mainContainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "./assets/superlogo.png";

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 1500, debounceDelay: 50, once: false, mirror: true });
  });
  return (
    <div className="main-container">
      <div className="main">
        <img
          src={Logo}
          alt="Logo"
          data-aos="fade-right"
          data-aos-anchor-placement="center-center"
          
        />
      </div>

      <div className="main">
        <h2
          className="h2-main"
          data-aos="fade-left"
          data-aos-anchor-placement="right-center"
          
        >
          Frontend Developer
        </h2>
        <p
          className="p-main-container"
          data-aos="fade-right"
          data-aos-anchor-placement="right-center"
        >
          Trabajamos para que su negocio tenga su lugar en la Red. Envianos tu
          idea y nosotros la transformamos en datos.
        </p>
        <button
          className="button-contact"
          data-aos="fade-left"
          data-aos-anchor-placement="right-center"
        >
          Contactame!
        </button>
      </div>
    </div>
  );
}
