import Socials from "../../common/socials/index";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-left">
          <div className="hero-text">
            <span className="hero-greeting">Hi 👋, I'm</span>
            <br />
            <span className="hero-name">Don Forrest</span>
            <br />
          </div>
          {/* <p className="hero-title">Software engineer</p> */}
          <p className="hero-description">
            I'm a Software engineer specializing in building an exceptional
            websites. <br />
            Check out my latest <a href="#projects">works.</a>
          </p>
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
