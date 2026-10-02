import { useState } from "react";
import "./css/Proof.css";

export default function Proof() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const sections = [
    {
      title: "Training & Development",
      desc: "Completed Python Full Stack Development training with hands-on experience in backend, frontend, and real-world workflows.",
      images: [
        "/pro_portfolio/proof_hub/Qpiders.jpeg",
        "/pro_portfolio/proof_hub/spider.png"
      ]
    },
    {
      title: "Google Agentathon",
      desc: "Participated in Google Agentathon, building AI-driven solutions with a team under time constraints.",
      images: [
        "/pro_portfolio/proof_hub/agentathon-certificate.png",
        "/pro_portfolio/proof_hub/robotimg.jpeg",
        "/pro_portfolio/proof_hub/handle.jpeg"
      ]
    },
    {
      title: "Creative & Photography",
      desc: "Content creator and photographer focusing on storytelling, visuals, and audience engagement.",
      link: "https://www.instagram.com/beyond_worldzzz",
      images: [
        "/pro_portfolio/proof_hub/beyond(2).jpeg",
        "/pro_portfolio/proof_hub/beyond(1).jpeg",
        "/pro_portfolio/proof_hub/beyond.jpeg"
      ],
      large: [
        "/pro_portfolio/proof_hub/IMG20250622173603.jpg",
        "/pro_portfolio/proof_hub/IMG20250503181150.jpg",
        "/pro_portfolio/proof_hub/IMG20250727203509.jpg",
        "/pro_portfolio/proof_hub/IMG20220901061814.jpg",
        "/pro_portfolio/proof_hub/IMG20220621171815.jpg",
        "/pro_portfolio/proof_hub/IMG20230824184418.jpg",
        "/pro_portfolio/proof_hub/IMG20240120103038.jpg",
        "/pro_portfolio/proof_hub/sunset.jpeg",
        "/pro_portfolio/proof_hub/mantis_1.jpeg",
        "/pro_portfolio/proof_hub/mantis_2.jpeg"
      ]
    }
  ]

  return (
    <section className="proof-container" id="proof">

      {/* HEADER */}
      <div className="proof-header">
        <p className="taglu">06 — PROOF</p>
        <h2>Proof & <i>Highlights</i><span>.</span></h2>
        <p className="subtitle">
          A curated collection of certifications, achievements, and creative work.
        </p>
      </div>

      {/* ACCORDION */}
      {sections.map((sec, i) => (
        <div className="proof-section" key={i}>

          {/* TOGGLE */}
          <button
            className="proof-toggle"
            onClick={() => toggle(i)}
          >
            {sec.title}
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>

          {/* CONTENT */}
          <div className={`proof-content ${openIndex === i ? "open" : ""}`}>

            <p>{sec.desc}</p>

            {sec.link && (
              <a href={sec.link} target="_blank" rel="noreferrer" className="proof-link">
                Visit Instagram →
              </a>
            )}

            {/* NORMAL GRID */}
            <div className="proof-gallery">
              {sec.images?.map((img, idx) => (
                <img key={idx} src={img} alt="" />
              ))}
            </div>

            {/* LARGE GRID */}
            {sec.large && (
              <div className="proof-gallery large">
                {sec.large.map((img, idx) => (
                  <img key={idx} src={img} alt="" />
                ))}
              </div>
            )}

          </div>
        </div>
      ))}

    </section>
  );
}