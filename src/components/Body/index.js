import About from "./About/index";
import Skills from "./Skills/index";
import Projects from "./Projects/index";
import Contact from "./Contact/index";
import "./body.css";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
