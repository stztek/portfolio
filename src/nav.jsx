import "./css/nav.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const ScrollLink = (props) => {
  const handleClickSmooth = (e) => {};
  return <Link {...props} onClick={handleClickSmooth} />;
};
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
      <div className="menu-container" data-aos-anchor-placement="top-top">
        <FontAwesomeIcon
          className="menu-nav"
          icon="fa-solid fa-bars"
          data-aos="zoom-out"
          onClick={handleClick}
        />
      </div>

      <div className={style}>
        <ScrollLink
          className="a"
          to="home"
          spy={true}
          offset={-50}
          duration={500}
          smooth={true}
          data-aos="zoom-out"
          data-aos-anchor-placement="left-top"
          data-aos-mirror="true"
        >
          Inicio
        </ScrollLink>
        <ScrollLink
          className="a"
          to="about"
          spy={true}
          offset={-150}
          duration={500}
          smooth={true}
          data-aos="zoom-in"
          data-aos-anchor-placement="left-top"
          data-aos-mirror="true"
        >
          Sobre mi
        </ScrollLink>
        <ScrollLink
          className="a"
          to="portfolio"
          spy={true}
          offset={50}
          duration={500}
          data-aos="zoom-out"
          data-aos-anchor-placement="right-top"
          data-aos-mirror="true"
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          className="a"
          to="contact"
          spy={true}
          offset={50}
          duration={500}
          smooth={true}
          data-aos="zoom-in"
          data-aos-anchor-placement="right-top"
          data-aos-mirror="true"
        >
          Contactame
        </ScrollLink>
      </div>
    </div>
  );
}
