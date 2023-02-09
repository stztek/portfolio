import ReactLogo from "../assets/reactlogo.png";


export default function ReactLink()
{
return (
    <div className="skill-container">
    <p className="p-skills">React</p>
    <img
      src={ReactLogo}
      className="img-skill"
      data-aos="flip-left"
    ></img>
    <div className="barra-skills" data-aos="zoom-in">
      <div className="progreso-skills-react" data-aos="zoom-out"></div>
    </div>
  </div>
)
}