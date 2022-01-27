import Socials from "../../common/socials/index";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-left">
          <div className="about-text">
            Hi 👋, I'm <span className="about-name">Don Forrest Usbal</span>
            <br />
            a 19-year-old from the Philippines. <br />
            Specializing in building exceptional websites. <br />
            Check out my latest <a href="#projects" className="projects-link">projects.</a>
          </div>
        </div>
        <div className="about-right">
          <img
            src={require("../../../assets/programming.svg").default}
            alt="Programming illustration"
            className="about-image"
          />
        </div>
      </div>
      <div className="about-bottom">
        <Socials />
      </div>
    </div>
  );
}

export default About;
