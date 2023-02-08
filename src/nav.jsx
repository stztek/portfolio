import "./css/nav.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Nav() {
  const [style, setStyle] = useState("nav-container");

  fontawesome.library.add(faBars);

  const handleClick = () => {
    if (style === "nav-container") {
      setStyle("nav-container-responsive");
    } else {
      setStyle("nav-container");
    }
  };

  return (
    <div className="column-nav">
      <div className="menu-container">
        <FontAwesomeIcon
          className="menu-nav"
          icon="fa-solid fa-bars"
          data-aos="zoom-out"
          onClick={handleClick}
        />
      </div>

      <div className={style}>
        <a
          className="a"
          href="/"
          data-aos="zoom-out"
          data-aos-anchor-placement="left-top"
          data-aos-mirror="true"
        >
          Inicio
        </a>
        <a
          className="a"
          href="/about"
          data-aos="zoom-in"
          data-aos-anchor-placement="left-top"
          data-aos-mirror="true"
        >
          Sobre mi
        </a>
        <a
          className="a"
          href="/portfolio"
          data-aos="zoom-out"
          data-aos-anchor-placement="right-top"
          data-aos-mirror="true"
        >
          Portfolio
        </a>
        <a className="a" href="/contact"

                  data-aos="zoom-in"
                  data-aos-anchor-placement="right-top"
                  
                  data-aos-mirror="true">
          Contactame
        </a>
      </div>
    </div>
  );
}
