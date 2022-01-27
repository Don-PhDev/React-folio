import About from "./About/index";
import Skills from "./Skills/index";
import Projects from "./Projects/index";
import Contact from "./Contact/index";
import Separator from "../common/separator";
import "./body.css";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Separator />
        <Skills />
      </section>

      <section id="projects">
        <Separator />
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
