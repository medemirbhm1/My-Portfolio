import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import "./work.scss";
import { client, urlFor } from "../../client";

function Work() {
  const [work, setWork] = useState();
  useEffect(() => {
    const query = "*[_type == 'work']";
    client.fetch(query).then((data) => setWork(data));
  }, []);
  return work ? (
    <div className="app__work" id="work">
      <div className="container">
        <div className="sec-title">
          <span>My Portfolio</span>
          <h2>Recent work</h2>
        </div>
        <div className="cards">
          {work.map((project) => (
            <div className="card" key={project._id}>
              <div className="image">
                <div className="text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="links">
                    <a href={project.projectLink} target="_blank">
                      <AiFillEye />
                    </a>
                    <a href={project.codeLink} target="_blank">
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
                <img src={urlFor(project.imgUrl)} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default Work;
