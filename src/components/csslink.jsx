import CSSlogo from "../assets/csslogo.png";



export default function CSSlink()
{
    return (
        <div className="skill-container">
        <p className="p-skills">CSS</p>
        <img src={CSSlogo} className="img-skill" data-aos="zoom-out"></img>
        <div className="barra-skills" data-aos="zoom-out">
          <div className="progreso-skills-css" data-aos="zoom-out"></div>
        </div>
      </div>
    )
}