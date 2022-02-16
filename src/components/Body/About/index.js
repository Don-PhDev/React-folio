import "./about.css";

function About() {
  return (
    <div>
      <label className="section-title">About</label>
      <div className="about">
        <div className="about-top">
          <div className="about-left">
            <div className="about-text">
              <p>I love creating things for the web.</p>
              <p>I've been programming since I was 16 years old,
              and up until now, my enjoyment and excitement
              seeing my programs work hasn't changed.</p>
              <p>I've strived to learn and improve my skills every day,
              pulling numerous all-nighters.</p>
              I gain the most satisfaction and confidence
              when challenged, and for that reason,
              I continually pushed myself to do things
              I'd never accomplished before.
              I still have a lot to improve (for example,
              if you have constructive criticism or suggestion
              about this website, I'd be glad to hear that 🤗).
            </div>
              <a download href={require("../../../assets/Don.Usbal.Software.Engineer.16feb2022.resume.pdf")} className="download-cv">
            Download Resume
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
