import "./css/experience.css";

import python from "../assets/skillslogo/Python.svg"
import react from "../assets/skillslogo/reactlogo.svg"
import django from "../assets/skillslogo/Django.svg"
import djangorest from "../assets/skillslogo/Django REST.svg"
import postgres from "../assets/skillslogo/PostgresSQL.svg"


export default function Experience() {
  return (
    <section className="experience" id="experience">

      {/* HEADER */}
      <div className="exp-header">
        <p className="exp-tag">03 — EXPERIENCE</p>
        <h2>
          Where I've worked <br /><i> & learned</i><span>.</span>
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        {/* ITEM 1 */}
        <div className="timeline-item">
          <div className="timeline-left">
            <p className="date">2025</p>
            <img src="https://th.bing.com/th?q=Qspiders+Company+Logo+Design&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
            <p className="company">Q-Spiders</p>
            <span className="badge">Training</span>
          </div>

          <div className="timeline-right">
            <h3>Full Stack Development Trainee</h3>
            <p>
              Completed industry-oriented training in Python Full Stack Development,
              working on real-world applications across the full development lifecycle.
              Gained hands-on experience in backend systems, frontend integration,
              debugging, and deployment.
            </p>

            <div className="tags">
              <span className="tag">
                <img src={python} alt="Python" /> Python
              </span>

              <span className="tag">
                <img src={react} alt="React" /> React
              </span>

              <span className="tag">
                <img src={django} alt="Django" /> Django
              </span>

              <span className="tag">
                <img src={djangorest} alt="REST APIs" /> REST APIs
              </span>

              <span className="tag">
                <img src="https://www.bing.com/th/id/OIP.QgzdZTedtMfvvmCqfMhWVAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />Debugging</span>
              <span className="tag">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220820/pngtree-designing-sql-database-icon-logo-for-uiux-application-photo-image_25219828.jpg" alt="" />SQL</span>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="timeline-item">
          <div className="timeline-left">
            <p className="date">2024</p>
            <p className="company">Self Projects</p>
            <span className="badge">Projects</span>
          </div>

          <div className="timeline-right">
            <h3>Full Stack Developer</h3>
            <p>
              Built and deployed multiple full stack applications using React and Django.
              Focused on clean UI, scalable backend architecture, and real-world usability.
              Worked on authentication systems, APIs, and responsive design.
            </p>

            <div className="tags">
              <span className="tag">
                <img src={react} alt="React" /> React
              </span>

              <span className="tag">
                <img src={django} alt="Django" /> Django
              </span>

              <span className="tag">
                <img src={postgres} alt="PostgreSQL" /> PostgreSQL
              </span>

              <span className="tag">
                <img src={djangorest} alt="" />APIs</span>
              <span className="tag">
                <img src="https://static.vecteezy.com/system/resources/previews/028/032/773/large_2x/ux-ui-icon-free-vector.jpg" alt="" />UI/UX</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}