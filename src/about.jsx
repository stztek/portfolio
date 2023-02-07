import Aos from "aos";
import "aos/dist/aos.css";
import "./css/about.css";

export default function About() {
  return (
    <div className="cont">
      <div className="about-container" data-aos="zoom-in" >
        <h1>Sobre mi</h1>
        <p className="p-about">
          Mi nombre es Federico, tengo 28 años y actualmente vivo en Cordoba,
          Argentina.{" "}
        </p>
        <p className="p-about">
          Actualmente ocupo mi tiempo en el desarrollo de sitios web del lado
          Frontend. No obstante, tambien poseo conocimientos en Backend con la
          finalidad de poder entender conceptos necesarios para el front.
        </p>
        <p>
          Mi proposito en el desarrollo es seguir conociendo nuevas teconologias
          y mejorar todos los días para poder brindar el mejor de los servicios.
        </p>
      </div>

      <div className="skills-container" data-aos="zoom-in">
        <h2>Skills</h2>
        <div className="list-skills">
          <p className="p-skills">HTML</p>
          <p className="p-skills">CSS</p>
          <p className="p-skills">JavaScript</p>
          <p className="p-skills">React</p>
        </div>
      </div>
    </div>
  );
}
