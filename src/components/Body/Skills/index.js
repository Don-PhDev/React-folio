import { SkillData } from "../../data/skills";
import SkillCard from "./skill-card";
import "./skills.css";

function Skills() {
  const data = SkillData;

  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((skill) => {
          return (
            <div className="skills-section">
              <label className="skill-type">{skill.type}</label>
              <div className="skills-list">
                {skill.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
