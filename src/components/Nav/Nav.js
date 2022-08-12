import React, { useState } from "react";
import "./nav.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="container">
        <div className="app__navbar-logo">Emir</div>
        <ul className="app__navbar-links">
          {["home", "about", "contact", "work", "skills"].map((item) => (
            <li key={item} className="app__flex p-text">
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          <div
            className={toggle && "active"}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "contact", "work", "skills"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
