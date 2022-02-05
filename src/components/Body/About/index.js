import "./about.css";

function About() {
  return (
    <div>
      <label className="section-title">About</label>
      <div className="about">
        <div className="about-top">
          <div className="about-left">
            <div className="about-text">
              Hello! My full name is Don Forrest Usbal
              <br />
              I love creating things for the web.
              <br />
              I've been programming since I was 16 years old,
              <br />
              and up until now, my enjoyment and excitement
              <br />
              seeing my programs work hasn't changed.
              <br />
              <br />
              I've strived to learn and improve my skills every day,
              <br />
              pulling numerous all-nighters.
              <br />
              I gain the most satisfaction and confidence
              <br />
              when challenged, and for that reason,
              <br />
              I continually pushed myself to do things
              <br />
              I'd never accomplished before.
              <br />I still have a lot to improve (for example,
              <br />
              if you have constructive criticism or suggestion
              <br />
              about this website, I'd be glad to hear that 🤗).
            </div>
            <a href="#curriculum-vitae" className="download-cv">
              <span>Download Resume</span>
            </a>
          </div>
          <div className="about-right">
            <img
              src={require("../../../assets/don-forrest.jpeg")}
              alt="Don Forrest"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
