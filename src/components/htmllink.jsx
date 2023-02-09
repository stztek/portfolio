import HTMLlogo from "../assets/htmllogo.png";


export default function HTMLLink ()
{

    return (
        <div className="skill-container">
        <p className="p-skills">HTML</p>
        <img src={HTMLlogo} className="img-skill" data-aos="flip-left"></img>
        <div className="barra-skills" data-aos="zoom-out">
          <div className="progreso-skills-html" data-aos="zoom-out"></div>
        </div>
      </div>
      )
}