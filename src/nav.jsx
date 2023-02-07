import "./css/nav.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Nav() {
    const [style, setStyle] = useState("nav-container");
    fontawesome.library.add(faBars);

    const handleClick=() =>{

        if (style === "nav-container")
        {
            setStyle("nav-container-responsive")
        } else
        {
            setStyle("nav-container")
        }

    }

  return (
    <div data-aos="fade-out" data-aos-offset="500" className="column-nav">
        <div className="menu-container">
        <FontAwesomeIcon className="menu-nav" icon="fa-solid fa-bars" data-aos="zoom-out" onClick={handleClick}/>
        </div>
      <div className={style}>


        <a
          className="a"
          href="/"
          data-aos="zoom-out"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          Inicio
        </a>
        <a
          className="a"
          href="/about"
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          Sobre mi
        </a>
        <a
          className="a"
          href="/portfolio"
          data-aos="zoom-out"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          Portfolio
        </a>
        <a
          className="a"
          href="/contact"
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          Contactame
        </a>
      </div>
    </div>
  );
}
