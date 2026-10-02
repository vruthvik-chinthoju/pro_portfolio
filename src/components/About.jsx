import "./css/About.css"
import { Code, Server, Brain, Users } from "lucide-react"
import profile from "/DSC00076.JPG"
import sunpic from "/proof_hub/IMG-20250830-WA0021.jpg"

export default function About() {
  return (
    <section className="about" id="about">

      {/* TOP SECTION */}
      <div className="about-top">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={sunpic} alt="profile" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <p className="about-tag">01 — ABOUT ME</p>
          <h1>
            The person <br /> <i>behind the code</i><span className="dot">.</span>
          </h1>

          <p>
            I'm a <b>Computer Science graduate </b> based in Hyderabad , India focused on
            <b> Full Stack Development</b> and <b>AI-driven applications</b>.
            I build production-ready applications with clean design and scalable backend systems.
          </p>

          <p>
            My work includes developing applications using
            <b> React, Django, and REST APIs</b>, ensuring performance, maintainability,
            and a strong user experience.
          </p>

          <p>
            I'm currently seeking <b>full-time roles or internships</b> where I can
            contribute from day one, solve real problems, and deliver measurable impact.
          </p>
        </div>

      </div>

      {/* KEEP YOUR CARDS */}
      <div className="about-cards">

        <div className="card">
          <Code className="icon" />
          <h3>Full Stack Developer</h3>
          <p>
            I build end-to-end web apps using React & Django with performance focus.
          </p>
        </div>

        <div className="card">
          <Server className="icon" />
          <h3>Backend & APIs</h3>
          <p>
            Skilled in REST APIs, authentication, and scalable backend systems.
          </p>
        </div>

        <div className="card">
          <Brain className="icon" />
          <h3>Problem Solver</h3>
          <p>
            Strong DSA foundation with optimized and efficient solutions.
          </p>
        </div>

        <div className="card">
          <Users className="icon" />
          <h3>Team & Growth</h3>
          <p>
            Collaborative mindset with Git, teamwork, and continuous learning.
          </p>
        </div>

      </div>

    </section>
  )
}