import { motion } from "framer-motion";
import images from "../../constants/images";
import "./header.scss";

function Header() {
  return (
    <header className="app__header" id="home">
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.85 }}
        className="app__header-info"
      >
        <div className="container">
          <div className="app__header-text">
            <span>It's Emir, i'm a</span>
            <h1>Frontend Developer</h1>
            <p>Freelance frontend dev based in Algeria, let's work together.</p>
            <a href="#contact" class="btn">
              Contact Me
            </a>
          </div>
          <img src={images.hero} alt="" />
        </div>
      </motion.div>
      <img className="wave" src={images.wave} alt="" />
    </header>
  );
}

export default Header;
