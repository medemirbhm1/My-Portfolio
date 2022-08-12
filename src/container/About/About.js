import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import "./about.scss";
function About() {
  const [about, setAbout] = useState(null);
  useEffect(() => {
    const query = "*[_type == 'about']";
    client.fetch(query).then((data) => {
      setAbout(data[0]);
    });
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
        </div>
      </div>
    </div>
  ) : null;
}

export default About;
