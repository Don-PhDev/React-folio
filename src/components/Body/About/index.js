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
            I've been programming since I was 16 years old, <br />
            and up until now, my enjoyment and excitement <br />
            seeing my programs work hasn't changed.
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
