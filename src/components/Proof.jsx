import { useState } from "react";
import "./css/Proof.css";

// Proof images
import qpiders from "../assets/proof_hub/Qpiders.jpeg";
import spider from "../assets/proof_hub/spider.png";

import agentathonCertificate from "../assets/proof_hub/agentathon-certificate.png";
import robotimg from "../assets/proof_hub/robotimg.jpeg";
import handle from "../assets/proof_hub/handle.jpeg";

import beyond2 from "../assets/proof_hub/beyond(2).jpeg";
import beyond1 from "../assets/proof_hub/beyond(1).jpeg";
import beyond from "../assets/proof_hub/beyond.jpeg";

import img20250622173603 from "../assets/proof_hub/IMG20250622173603.jpg";
import img20250503181150 from "../assets/proof_hub/IMG20250503181150.jpg";
import img20250727203509 from "../assets/proof_hub/IMG20250727203509.jpg";
import img20220901061814 from "../assets/proof_hub/IMG20220901061814.jpg";
import img20220621171815 from "../assets/proof_hub/IMG20220621171815.jpg";
import img20230824184418 from "../assets/proof_hub/IMG20230824184418.jpg";
import img20240120103038 from "../assets/proof_hub/IMG20240120103038.jpg";
import sunset from "../assets/proof_hub/sunset.jpeg";
import mantis1 from "../assets/proof_hub/mantis_1.jpeg";
import mantis2 from "../assets/proof_hub/mantis_2.jpeg";

export default function Proof() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const sections = [
    {
      title: "Training & Development",
      desc: "Completed Python Full Stack Development training with hands-on experience in backend, frontend, and real-world workflows.",
      images: [qpiders, spider],
    },

    {
      title: "Google Agentathon",
      desc: "Participated in Google Agentathon, building AI-driven solutions with a team under time constraints.",
      images: [
        agentathonCertificate,
        robotimg,
        handle,
      ],
    },

    {
      title: "Creative & Photography",
      desc: "Content creator and photographer focusing on storytelling, visuals, and audience engagement.",
      link: "https://www.instagram.com/beyond_worldzzz",
      images: [
        beyond2,
        beyond1,
        beyond,
      ],
      large: [
        img20250622173603,
        img20250503181150,
        img20250727203509,
        img20220901061814,
        img20220621171815,
        img20230824184418,
        img20240120103038,
        sunset,
        mantis1,
        mantis2,
      ],
    },
  ];

  return (
    <section className="proof-container" id="proof">

      {/* HEADER */}
      <div className="proof-header">
        <p className="taglu">06 — PROOF</p>

        <h2>
          Proof & <i>Highlights</i>
          <span>.</span>
        </h2>

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

            <span>
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          {/* CONTENT */}
          <div
            className={`proof-content ${
              openIndex === i ? "open" : ""
            }`}
          >

            <p>{sec.desc}</p>

            {sec.link && (
              <a
                href={sec.link}
                target="_blank"
                rel="noreferrer"
                className="proof-link"
              >
                Visit Instagram →
              </a>
            )}

            {/* NORMAL GRID */}
            <div className="proof-gallery">
              {sec.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                />
              ))}
            </div>

            {/* LARGE GRID */}
            {sec.large && (
              <div className="proof-gallery large">
                {sec.large.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      ))}

    </section>
  );
}