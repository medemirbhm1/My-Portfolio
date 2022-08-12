import "./contact.css";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div class="sec contact" id="contact">
      <div class="sec-title">
        <span>Get in touch</span>
        <h2>Contact me</h2>
      </div>
      <div class="container">
        <div class="text">
          <h4>Contact Information</h4>
          <p>
            Do you Have projects ? or maybe just you want to say hello ? i'd
            love to hear from you .
          </p>
          <ul class="info">
            <li>
              <AiOutlineUser /> Mohamed Emir Bouhamar
            </li>
            <li>
              <AiOutlinePhone />
              +213656707748
            </li>
            <li>
              <AiOutlineMail /> bouhamarm@gmail.com
            </li>
          </ul>
          <ul class="smedia">
            <li>
              <a href="https://github.com/medemirbhm1" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-emir-bouhamar-989327202"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Amir.bouhamar" target="_blank">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
        <form action="https://formsubmit.co/bouhamarm@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            required
          />
          <input type="hidden" name="_subject" value="From personal website" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
