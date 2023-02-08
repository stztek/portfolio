import Aos from "aos";
import "aos/dist/aos.css";
import "./css/about.css";

import HTMLlogo from "./assets/htmllogo.png"
import CSSlogo from "./assets/csslogo.png"
import JSlogo from "./assets/jslogo.png"
import ReactLogo from "./assets/reactlogo.png"
export default function About() {
  return (
    <div className="cont">
      <div className="about-container" data-aos="zoom-in" id="about">
        <h1 data-aos="zoom-out">Sobre mi</h1>
        <p className="p-about" data-aos="zoom-out">
          Mi nombre es Federico, tengo 28 años y actualmente vivo en Cordoba,
          Argentina.
        </p>
        <p className="p-about" data-aos="zoom-out">
          Actualmente ocupo mi tiempo en el desarrollo de sitios web del lado
          Frontend. No obstante, tambien poseo conocimientos en Backend con la
          finalidad de poder entender conceptos necesarios para el front.
        </p>
        <p className="p-about" data-aos="zoom-out">
          Mi proposito en el desarrollo es seguir conociendo nuevas teconologias
          y mejorar todos los días para poder brindar el mejor de los servicios.
        </p>
      </div>

      <div className="skills-container" data-aos="zoom-in" data-aos-anchor-placement="right-top" >
        <h2 data-aos="zoom-out">Skills</h2>
        <div className="list-skills" data-aos="zoom-out">
        <div className="skill-container" >
          <p className="p-skills" >HTML</p>
          <img src={HTMLlogo} className="img-skill" data-aos="zoom-out"></img>
          </div>

          <div className="skill-container">
          <p className="p-skills">CSS</p>
          <img src={CSSlogo} className="img-skill" data-aos="zoom-out"></img>
          </div>

          <div className="skill-container">
          <p className="p-skills">JavaScript</p>
          <img src={JSlogo} className="img-skill" data-aos="zoom-out"></img>
          </div>

          <div className="skill-container">
          <p className="p-skills">React</p>
          <img src={ReactLogo} className="img-skill" data-aos="zoom-out"></img>
          </div>

        </div>
      </div>
    </div>
  );
}
