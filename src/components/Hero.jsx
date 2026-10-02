import "./css/hero.css"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import resumeicon from "../assets/skillslogo/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg"

function ScrollText({ children }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="headline"
    >
      {children}
    </motion.h1>
  );
}

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <p className="intro">Hi, I’m Ruthvik</p>

        {/* 🔥 USE IT HERE */}
        <ScrollText>
          Full Stack Developer
        </ScrollText>

        <p className="subtext">
          I build scalable web applications using React, Django, and REST APIs,
          focusing on clean UI and performance.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" className="btn secondary" download>
            <span> <img src={resumeicon} alt="" />Download Resume</span>
          </a>
        </div>

        <p className="availability">Open to opportunities</p>
      </div>

      <div className="hero-right">
        <div className="stats">
          <div>
            <h2>5+</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>7.8</h2>
            <p>CGPA</p>
          </div>
          <div>
            <h2><svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 50C50 25 75 25 100 50C125 75 150 75 150 50C150 25 125 25 100 50C75 75 50 75 50 50Z"
                fill="none"
                stroke="#C47A2C"
                stroke-width="8"
                stroke-linecap="round" />
            </svg></h2>
            <p>Ideas</p>
          </div>
        </div>
      </div>

    </section>
  )
}