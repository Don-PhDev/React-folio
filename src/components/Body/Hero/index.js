import Socials from "../../common/socials/index";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-left">
          <div className="hero-text">
            Hi 👋, I'm <span className="hero-name">Don Forrest Usbal</span>
            <br />
            a 19-year-old from the Philippines. <br />
            Specializing in building exceptional websites. <br />
            Check out my latest <a href="#projects" className="projects-link">projects.</a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={require("../../../assets/programming.svg").default}
            alt="Programming illustration"
            className="hero-image"
          />
        </div>
      </div>
      <div className="hero-bottom">
        <Socials />
      </div>
    </div>
  );
}

export default Hero;
