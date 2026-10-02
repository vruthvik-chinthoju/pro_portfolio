import "./css/achivements.css";

export default function Achivements() {
  return (
    <section className="ach-section" id="journey">

      {/* HEADER */}
      <div className="ach-header">
        <p>05 — JOURNEY</p>
        <h2>
          Beyond tech <br /> <i>& achievements</i><span>.</span>
        </h2>
      </div>

      <div className="ach-journey">

        {/* LEFT LINE */}
        <div className="ach-line"></div>

        {/* CONTENT */}
        <div className="ach-content">

          {/* BEYOND TECH */}
          

          {/* ACHIEVEMENT 1 */}
          <div className="ach-card">
            <span className="ach-year">2025</span>
            <h3>Google Agentathon</h3>
            <p>
              Built a Government Assist solution in 36 hours, leading execution
              and collaboration — contributing to a Guinness World Record event.
            </p>
          </div>

          {/* ACHIEVEMENT 2 */}
          <div className="ach-card">
            <span className="ach-year">2024–2025</span>
            <h3>Major Project</h3>
            <p>
              Worked on a full-scale project, handling development and team
              coordination while ensuring timely delivery.
            </p>
          </div>

          <div className="ach-card ach-highlight">
            <span className="ach-label">Beyond Tech</span>
            <h3><a href="https://www.instagram.com/beyond_worldzzz?igsh=c3VkbHdtZm4xY2Rt">@beyond_worldzzz</a></h3>
            <p>
              I run a content platform reviewing movies, anime, and series —
              simplifying opinions into engaging storytelling that connects
              with audiences.
            </p>

            <div className="ach-tags">
              <span>Content</span>
              <span>Storytelling</span>
              <span>Audience</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}