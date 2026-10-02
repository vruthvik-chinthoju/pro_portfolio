import "./css/Skills.css"
import { Code, Server, Wrench, Brain } from "lucide-react"

import react from "../assets/skillslogo/reactlogo.svg"
import js from "../assets/skillslogo/JavaScript.svg"
import html from "../assets/skillslogo/HTML5.svg"
import css from "../assets/skillslogo/CSS3.svg"

import django from "../assets/skillslogo/Django.svg"
import djangoRest from "../assets/skillslogo/Django REST.svg"
import flask from "../assets/skillslogo/Flask.svg"
import python from "../assets/skillslogo/Python.svg"
import mysql from "../assets/skillslogo/MySQL.svg"

import git from "../assets/skillslogo/Git.svg"
import github from "../assets/skillslogo/GitHub.svg"
import vscode from "../assets/skillslogo/Visual Studio Code (VS Code).svg"
import pycharm from "../assets/skillslogo/PyCharm.svg"
import postgres from "../assets/skillslogo/PostgresSQL.svg"
import postman from "../assets/skillslogo/Postman.svg"

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <p className="skills-tag">02 — MY EXPERTISE</p>

        <h2>
          Skills that build <br />
          <i>real-world products</i><span>.</span>
        </h2>

        <div className="small">
          <p className="skills-sub">
            A blend of frontend precision, backend logic, and problem-solving mindset.
          </p>
        </div>
      </div>

      <div className="skills-grid">

        {/* FRONTEND */}
        <div className="skill-card">
          <Code className="icon" />
          <h3>Frontend</h3>

          <div className="tags">
            <span className="tag"><img src={react} /> React</span>
            <span className="tag"><img src={js} /> JavaScript</span>
            <span className="tag"><img src={html} /> HTML5</span>
            <span className="tag"><img src={css} /> CSS3</span>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill-card">
          <Server className="icon" />
          <h3>Backend</h3>

          <div className="tags">
            <span className="tag"><img src={django} /> Django</span>
            <span className="tag"><img src={djangoRest} /> Django REST</span>
            <span className="tag"><img src={flask} /> Flask</span>
            <span className="tag"><img src={python} /> Python</span>
            <span className="tag"><img src={mysql} /> SQL</span>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skill-card">
          <Wrench className="icon" />
          <h3>Tools</h3>

          <div className="tags">
            <span className="tag"><img src={git} /> Git</span>
            <span className="tag"><img src={github} /> GitHub</span>
            <span className="tag"><img src={vscode} /> VS Code</span>
            <span className="tag"><img src={pycharm} /> PyCharm</span>
            <span className="tag"><img src={postgres} /> PostgreSQL</span>
            <span className="tag"><img src={mysql} /> MySQL</span>
            <span className="tag"><img src={postman} /> Postman</span>
          </div>
        </div>

        {/* CS CONCEPTS */}
        <div className="skill-card">
          <Brain className="icon" />
          <h3>CS Concepts</h3>

          <div className="tags">
            <span className="tag">DSA</span>
            <span className="tag">OOPS</span>
            <span className="tag">RDBMS</span>
            <span className="tag">REST APIs</span>
            <span className="tag">DB Design</span>
          </div>
        </div>

      </div>
    </section>
  )
}