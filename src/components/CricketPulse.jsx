import "./css/cricketpulse.css";
import { ArrowLeft, ExternalLink, SprayCan } from "lucide-react";
import { Link } from "react-router-dom";
import githubImg from "../assets/skillslogo/GitHub.svg"

import heroImg from "../assets/cricketpulse/homepage.png";
import leaderboardImg from "../assets/cricketpulse/leaderboard.png";
import loginImg from "../assets/cricketpulse/login.png";
import matchesImg from "../assets/cricketpulse/matches.png";
import predictionImg from "../assets/cricketpulse/mypredictions.png";
import playerImg from "../assets/cricketpulse/playerstats.png";
import statsImg from "../assets/cricketpulse/stats.png";
import teamsImg from "../assets/cricketpulse/teams.png";
import teamMatchesImg from "../assets/cricketpulse/teammatches.png";
import sports from "../assets/cricketpulse/sports.png";

import screen1 from "../assets/cricketpulse/Screenshot 2026-03-26 214940.png"
import screen2 from "../assets/cricketpulse/Screenshot 2026-03-27 085519.png"
import screen3 from "../assets/cricketpulse/Screenshot 2026-03-28 094018.png"
import screen4 from "../assets/cricketpulse/Screenshot 2026-03-28 094643.png"
import matchesone from "../assets/cricketpulse/matchesone.png"
import chat from "../assets/cricketpulse/chat.png"

export default function CricketPulse() {
  return (
    <div className="pulse-page">

      {/* TOP BAR */}
      <div className="pulse-top">

        <Link to="/#projects" className="pulse-back">
          <ArrowLeft size={18} />
          BACK
        </Link>

        <p>CRICKET-PULSE / CASE STUDY</p>
      </div>

      {/* HERO */}
      <section className="hero-block">

        <div className="hero-left">

          <p className="mini-text">SPORTS PLATFORM · 2026</p>

          <h1>
            CRICKET
            <br />
            PULSE
          </h1>

          <p className="hero-desc">
            An AI-powered IPL prediction ecosystem designed around
            real-time interaction, competitive engagement, live analytics,
            and machine learning driven insights.
          </p>

          <div className="hero-buttons">

            <a
              href="https://vruthvik-chinthoju.github.io/cricketpulse-frontend-v2/"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              <ExternalLink size={16} />
              LIVE SITE
            </a>

            <a
              href="https://github.com/vruthvik-chinthoju/cricketpulse"
              target="_blank"
              rel="noreferrer"
              className="ghost-btn"
            >
              <img src={githubImg} alt="" />
              GITHUB
            </a>

          </div>
        </div>

        <div className="hero-right">
          <img src={sports} alt="" />
        </div>
      </section>

      {/* TRANSITION */}
      <section className="statement-section">

        <p>THE REBUILD</p>

        <h2>
          VERSION 1
          <br />
          WORKED.
          <br />
          NOBODY
          <br />
          ENJOYED IT.
        </h2>

        <span>
          The original version delivered match information and predictions,
          but the experience lacked clarity, responsiveness, and engagement.
          Instead of patching the UI, the entire platform was redesigned
          from the ground up.
        </span>
        <div className="version">
          <img src={screen1} alt="" />
          <img src={screen2} alt="" />
          <img src={screen3} alt="" />
          <img src={screen4} alt="" />
        </div>
      </section>

      {/* MATCHES */}
      <section className="split-section">

        <div className="split-left">
          <p className="small-label">LIVE MATCH ENGINE · 01</p>

          <h2>
            PREDICTIONS
            <br />
            LOCK IN
            <br />
            REAL TIME.
          </h2>

          <p>
            Users predict winners before the match begins.
            Once the timer hits zero, predictions close automatically
            and the system updates dynamically.
          </p>

          <ul>
            <li>Live countdown logic</li>
            <li>Automatic prediction locking</li>
            <li>Dynamic match state handling</li>
            <li>Real-time score updates</li>
          </ul>
        </div>

        <div className="split-right">
          <img src={matchesone} alt="" />
        </div>
      </section>

      {/* FULL WIDTH */}
      <section className="image-break">
        <img src={leaderboardImg} alt="" />
      </section>

      {/* LEADERBOARD */}
      <section className="text-section">

        <p>COMPETITIVE EXPERIENCE · 02</p>

        <h2>
          COMPETITION
          <br />
          CREATES
          <br />
          RETENTION.
        </h2>

        <div className="text-grid">

          <span>
            Predictions alone are forgettable.
            The leaderboard transformed the platform into a competitive
            experience where users return to improve rankings and accuracy.
          </span>

          <span>
            Users earn points for correct predictions while the system
            tracks performance, rankings, and prediction history dynamically.
          </span>

        </div>
      </section>

      {/* AI */}
      <section className="split-section reverse">

        <div className="chat">
          <img src={chat} alt="" />
        </div>

        <div className="split-left">

          <p className="small-label">MACHINE LEARNING · 03</p>

          <h2 className="ml">
            PREDICTIONS
            SHOULD
            <br />
            FEEL
            HUMAN.
          </h2>

          <p>
            The AI assistant was trained using IPL datasets collected
            from Kaggle and converted into prediction-ready insights.
          </p>

          <ul>
            <li>Historical IPL dataset training</li>
            <li>Data preprocessing pipeline</li>
            <li>Probability-based predictions</li>
            <li>Interactive AI assistant</li>
          </ul>

        </div>
      </section>

      {/* PLAYER ANALYTICS */}
      <section className="gallery-section">

        <div className="gallery-left">
          <img src={playerImg} alt="" />
        </div>

        <div className="gallery-right">

          <p>PLAYER EXPERIENCE · 04</p>

          <h2>
            PLAYER
            ANALYTICS
            BUILT FOR
            CLARITY.
          </h2>

          <span>
            Player profiles, role systems, and performance statistics
            were redesigned to improve readability, structure,
            and mobile responsiveness.
          </span>

        </div>
      </section>

      {/* STATS */}
      <section className="split-section">

        <div className="split-left">

          <p className="small-label">LIVE DATA · 05</p>

          <h2>
            REAL DATA.
            <br />
            CLEANER
            <br />
            EXPERIENCE.
          </h2>

          <p>
            Cricket APIs were integrated to fetch team statistics,
            player data, and match analytics in real time.
          </p>

          <ul>
            <li>Live API integration</li>
            <li>Optimized rendering</li>
            <li>Data normalization</li>
            <li>Reduced unnecessary requests</li>
          </ul>

        </div>

        <div className="matches">
          <img src={statsImg} alt="" />
        </div>
      </section>

      {/* DOUBLE IMAGES */}
      <section className="double-images">

        <div>
          <img src={teamMatchesImg} alt="" />

          <h3>TEAM MATCH TIMELINES</h3>

          <p>
            Users can explore franchise history, match records,
            and performance trends across seasons.
          </p>
        </div>

        <div>
          <img src={predictionImg} alt="" />

          <h3>PREDICTION HISTORY</h3>

          <p>
            Every prediction is stored dynamically with
            result tracking and earned points.
          </p>
        </div>
      </section>

      {/* AUTH */}
      <section className="split-section reverse">

        <div className="login">
          <img src={loginImg} alt="" />
        </div>

        <div className="split-left">

          <p className="small-label logintext">AUTHENTICATION · 06</p>

          <h2 className="lgn">
            REMOVE
            <br />
            FRICTION.
          </h2>

          <p>
            Google OAuth and GitHub authentication were added
            to reduce onboarding friction and simplify access.
          </p>

          <ul>
            <li>Google OAuth</li>
            <li>GitHub Login</li>
            <li>Persistent sessions</li>
            <li>Secure authentication flow</li>
          </ul>

        </div>
      </section>

      {/* FINAL */}
      <section className="end-section">

        <p>FINAL OUTCOME</p>

        <h2>
          Cricket-Pulse evolved from a simple cricket UI experiment
          into a complete AI-powered IPL prediction platform focused
          on interaction, analytics, competition, and usability.
        </h2>

        <div className="stack-list">
          <span>React.js</span>
          <span>Django</span>
          <span>REST APIs</span>
          <span>Machine Learning</span>
          <span>OAuth</span>
          <span>PostgreSQL</span>
        </div>

      </section>

    </div>
  );
}