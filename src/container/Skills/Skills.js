import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { client, urlFor } from "../../client";

import "./skills.scss";

function Skills() {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    const skQuery = "*[_type == 'skills']";
    client.fetch(skQuery).then((data) => setSkills(data));
  }, []);
  return skills  ? (
    <div className="app__skills" id="skills">
      <div className="sec-title">
        <span>what i do</span>
        <h2>My Skills</h2>
      </div>
      <div className="container">
        <motion.div className="skills-list app__flex">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}
              viewport={{ once: true }}
              className="skill"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  ) : null;
}

export default Skills;
