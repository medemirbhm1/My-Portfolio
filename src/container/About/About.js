import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import "./about.scss";
function About() {
  const [about, setAbout] = useState(null);
  const [education, setEducation] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'about']";
    client.fetch(query).then((data) => {
      setAbout(data[0]);
    });
    const eduQuery = "*[_type == 'education']";
    client
      .fetch(eduQuery)
      .then((data) => setEducation(data.sort((a, b) => +a.from - +b.from)));
  }, []);
  return about ? (
    <div className="app__about" id="about">
      <div className="container">
        <img src={urlFor(about.imgUrl)} alt="" />
        <div className="text">
          <div class="sec-title">
            <span>{about.title}</span>
            <h2>{about.subTitle}</h2>
          </div>
          <p>{about.description}</p>
          <div class="sec-title">
            <h2>Education</h2>
          </div>
          <div className="edu">
            {education.map(({ field, from, to, schoolName, location }) => (
              <div className={`period ${to === "now" ? "active" : ""}`}>
                <h3>{field}</h3>
                <p>
                  {schoolName}, {location}
                </p>
                <p>
                  {from} - {to}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default About;
