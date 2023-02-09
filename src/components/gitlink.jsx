import GitLogo from "../assets/gitlogo.png";


export default function GitLink()
{
    return(
        
        <div className="skill-container">
        <p className="p-skills">Git</p>
        <img src={GitLogo} className="img-skill" data-aos="zoom-out"></img>
        <div className="barra-skills" data-aos="zoom-in">
          <div className="progreso-skills-git" data-aos="zoom-out"></div>
        </div>
      </div>
    )
}