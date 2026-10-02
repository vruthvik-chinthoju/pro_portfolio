import "./css/Contact.css";
import githubImg from "../assets/skillslogo/GitHub.svg";

import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      {/* LEFT SIDE */}
      <div className="contact-left">

        <p className="contact-tag">07 — CONTACT</p>

        <h1>
          Let’s create <span>something amazing</span> together.
        </h1>

        <p className="contact-desc">
          I’m currently open to internships, collaborations, freelance work,
          and exciting opportunities where I can build impactful digital
          experiences.
        </p>

        <div className="availability">
          <span className="dot"></span>
          Available for opportunities
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">

        {/* EMAIL */}
        <a
          href="mailto:vruthvik.ch@gmail.com"
          className="contact-card"
        >
          <div className="icon">
            <FaEnvelope />
          </div>

          <div className="card-text">
            <p>Email</p>
            <h4>vruthvik.ch@gmail.com</h4>
          </div>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/chinthoju-vruthvik-83754b320/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon">
            <FaLinkedinIn />
          </div>

          <div className="card-text">
            <p>LinkedIn</p>
            <h4>Chinthoju Vruthvik</h4>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/vruthvik-chinthoju"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon github-icon">
            <img src={githubImg} alt="github" />
          </div>

          <div className="card-text">
            <p>GitHub</p>
            <h4>github.com/vruthvik-chinthoju</h4>
          </div>
        </a>

        {/* PHONE */}
        <a
          href="tel:+918919721525"
          className="contact-card"
        >
          <div className="icon">
            <FaPhoneAlt />
          </div>

          <div className="card-text">
            <p>Phone</p>
            <h4>+91 8919721525</h4>
          </div>
        </a>

      </div>

    </section>
  );
}