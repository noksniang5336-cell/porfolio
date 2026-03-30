import React from "react";

const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 15 },
  { name: "JavaScript", level: 5 },
  { name: "React", level: 15 },
  { name: "Laravel", level: 70 },
  { name: "Git / GitHub", level: 80 },
];

function Competences() {
  return (
    <section className="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;