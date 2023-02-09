import JSlogo from "../assets/jslogo.png";

export default function JSlink() {
  return (
    <div className="skill-container">
      <p className="p-skills">JavaScript</p>
      <img src={JSlogo} className="img-skill" data-aos="flip-left"></img>
      <div className="barra-skills" data-aos="zoom-in">
        <div className="progreso-skills-js" data-aos="zoom-out"></div>
      </div>
    </div>
  );
}
