import "./css/Projects.css";

import { useState } from "react";
import githubImg from "../assets/skillslogo/GitHub.svg";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectBrowser from "../components/ProjectBrowser";

// Images
import homepageImg from "../assets/images/homepage.png";
import cricketlogo from "../assets/images/finallogo.png";
import cooklogo from "../assets/images/cooklogo.png";
import mindbuddylogo from "../assets/images/chatlogo.png";

import recipehub from "../assets/images/original-recipes.png";
import mindbuddy from "../assets/images/mindbuddy.png";

// Tech icons
import react from "../assets/skillslogo/reactlogo.svg";
import django from "../assets/skillslogo/Django.svg";
import djangorest from "../assets/skillslogo/Django REST.svg";
import python from "../assets/skillslogo/Python.svg";
import postgres from "../assets/skillslogo/PostgresSQL.svg";
import javascript from "../assets/skillslogo/JavaScript.svg";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const featuredProjects = [
    {
      number: "01",
      title: "MindBuddy",
      logo: mindbuddylogo,
      img: mindbuddy,
      url: "mindbudy.netlify.app",

      desc:
        "An AI-powered mental wellness platform designed to make everyday emotional support more accessible through conversational AI, mood tracking, journaling, wellness exercises, and personalized self-care experiences.",

      impact:
        "AI-assisted emotional support · Personalized wellness tracking · Conversational UX",

      expand:
        "MindBuddy is a full-stack AI wellness platform built around the idea of making mental-wellness support available through a simple, private, and accessible digital experience. The platform combines an AI conversational interface with mood tracking, journaling, breathing exercises, wellness activities, goals, sleep tracking, and personalized user experiences.",

      github:
        "https://github.com/vruthvik-chinthoju/mindbuddy",

      live:
        "https://mindbudy.netlify.app/",

      view: "/projects/mindbuddy",

      tags: [
        { icon: react, name: "React" },
        { icon: django, name: "Django" },
        { icon: python, name: "Python" },
        { icon: djangorest, name: "DRF" },
        { name: "Hugging Face" },
        { name: "LLM" },
      ],

      features: [
        "AI-powered conversational companion",
        "Support for stress, anxiety, loneliness, and emotional challenges",
        "Mood and wellness tracking",
        "Journaling and self-reflection features",
        "Wellness exercises and activities",
        "LLM integration using Hugging Face",
      ],
    },

    {
      number: "02",
      title: "CricketPulse",
      logo: cricketlogo,
      img: homepageImg,
      caseStudy: "/cricketpulse",
      url: "vruthvik-chinthoju.github.io/",

      desc:
        "A full-stack cricket intelligence platform that combines live cricket data, player statistics, team analytics, leaderboards, and machine-learning-based match predictions into a single interactive experience",

      impact:
        "Sports analytics · ML-powered predictions · Real-time data integration",

      expand:
        "CricketPulse was built to transform raw cricket data into an interactive analytics experience. Instead of simply displaying scores, the platform brings together match information, player statistics, team data, leaderboards, and machine-learning predictions in one application.",

      github:
        "https://github.com/vruthvik-chinthoju/cricketpulse",

      live:
        "https://vruthvik-chinthoju.github.io/cricketpulse-frontend-v2/",

      view: "/CricketPulse",

      tags: [
        { icon: react, name: "React" },
        { icon: django, name: "Django" },
        { icon: djangorest, name: "DRF" },
        { icon: postgres, name: "PostgreSQL" },
        { icon: python, name: "Python" },
      ],

      features: [
        "Live cricket match information",
        "Team and player statistics",
        "IPL match prediction system",
        "Machine-learning-based predictions",
        "Leaderboard and prediction rankings",
        "REST API powered backend",
      ],
    },

    {
      number: "03",
      title: "AI Recipe Hub",
      logo: cooklogo,
      img: recipehub,
      url: "recipe-hub-ucc0.onrender.com",

      desc:
        "An AI-enhanced recipe discovery platform that combines recipe APIs, search and exploration features, and intelligent functionality to create a more personalized cooking experience.",

      impact:
        "Recipe discovery | API integration | AI-powered features",

      expand:
        "AI Recipe Hub was developed to make discovering and managing recipes easier through a modern web experience. The application combines a recipe data source with a structured frontend and backend, allowing users to explore recipes while interacting with AI-powered functionality.",

      github:
        "https://github.com/vruthvik-chinthoju/recipe-hub",

      live:
        "https://recipe-hub-ucc0.onrender.com/",

      view: "/projects/ai-recipe-hub",

      tags: [
        { icon: javascript, name: "JavaScript" },
        { icon: django, name: "Django" },
        { icon: python, name: "Python" },
        { name: "API" },
        { name: "AI" },
      ],

      features: [
        "Recipe discovery and browsing",
        "Recipe search functionality",
        "Recipe details and ingredients",
        "AI Chef functionality",
        "API integration",
        "User authentication and recipe management",
      ],
    },
  ];

  const handleViewMore = (projectNumber) => {
    setExpandedProject(
      expandedProject === projectNumber ? null : projectNumber
    );
  };

  return (
    <section className="projects" id="projects">

      {/* HEADER */}
      <div className="projects-header">
        <p className="proj-title">04 — PROJECTS</p>

        <h2>
          Selected Work <br />
          <span>
            <i>& Real Impact.</i>
          </span>
        </h2>
      </div>

      {/* FEATURED PROJECTS */}
      <div className="projects-wrapper">

        {featuredProjects.map((proj) => {
          const isExpanded = expandedProject === proj.number;

          return (
            <div className="proj-block" key={proj.number}>

              {/* =====================================================
                  INITIAL CARD
                  YOUR EXISTING CARD — KEPT THE SAME
              ====================================================== */}

              {!isExpanded && (
                <>
                  {/* LEFT */}
                  <div className="proj-text">

                    <p className="proj-index">
                      {proj.number} — FEATURED PROJECT
                    </p>

                    <div className="proj-heading">

                      {proj.logo && (
                        <img
                          className="proj-logo"
                          src={proj.logo}
                          alt={proj.title}
                        />
                      )}

                      <h2>{proj.title}</h2>

                    </div>

                    <p className="proj-desc">
                      {proj.desc}
                    </p>

                    {/* TECH STACK */}
                    <div className="proj-tags">

                      {proj.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="proj-tag"
                        >
                          {tag.icon && (
                            <img
                              src={tag.icon}
                              alt={tag.name}
                            />
                          )}

                          {tag.name}
                        </span>
                      ))}

                    </div>

                    <p className="proj-impact">
                      {proj.impact}
                    </p>

                    {/* VIEW PROJECT */}
                    <button
                      className="proj-view"
                      onClick={() => handleViewMore(proj.number)}
                    >
                      View More
                      <ArrowRight size={15} />
                    </button>

                  </div>

                  {/* RIGHT */}
                  <div className="proj-right">

                    {/* BROWSER MOCKUP */}
                    <div className="proj-image">

                      <ProjectBrowser
                        image={proj.img}
                        url={proj.url}
                        alt={`${proj.title} website`}
                      />

                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="proj-actions">

                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-btn proj-btn-primary"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>

                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-btn proj-btn-ghost"
                      >
                        <img
                          src={githubImg}
                          alt="GitHub"
                        />

                        GitHub
                      </a>
                      {proj.caseStudy && (
                        <Link
                          to={proj.caseStudy}
                          className="proj-btn proj-btn-ghost"
                        >
                          <ArrowRight size={16} />
                          Case Study
                        </Link>
                      )}

                    </div>

                  </div>
                </>
              )}

              {/* =====================================================
                  EXPANDED PROJECT
              ====================================================== */}

              {isExpanded && (
                <div className="project-expanded">

                  {/* PROJECT NUMBER */}
                  <p className="expanded-index">
                    {proj.number} — FEATURED PROJECT
                  </p>

                  {/* PROJECT TITLE */}
                  <div className="expanded-heading">

                    {proj.logo && (
                      <img
                        src={proj.logo}
                        alt={proj.title}
                        className="expanded-logo"
                      />
                    )}

                    <h2>{proj.title}</h2>

                  </div>

                  {/* PROJECT IMAGE */}
                  <div className="expanded-image">
                    <ProjectBrowser
                      image={proj.img}
                      url={proj.url}
                      alt={`${proj.title} website`}
                    />
                  </div>

                  {/* PROJECT DESCRIPTION */}
                  <div className="expanded-section">

                    <h3>About the Project</h3>

                    <p>
                      {proj.expand}
                    </p>

                  </div>

                  {/* TECH STACK */}
                  <div className="expanded-section">

                    <h3>Tech Stack</h3>

                    <div className="expanded-tags">

                      {proj.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="proj-tag"
                        >
                          {tag.icon && (
                            <img
                              src={tag.icon}
                              alt={tag.name}
                            />
                          )}

                          {tag.name}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* KEY FEATURES */}
                  <div className="expanded-section">

                    <h3>Key Features</h3>

                    <div className="features-list">

                      {proj.features.map((feature, index) => (
                        <div
                          className="feature-item"
                          key={index}
                        >
                          <span className="feature-check">
                            ✓
                          </span>

                          <span>
                            {feature}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                  {/* LINKS */}
                  <div className="expanded-actions">

                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn proj-btn-primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn proj-btn-ghost"
                    >
                      <img
                        src={githubImg}
                        alt="GitHub"
                      />

                      GitHub
                    </a>

                  </div>

                  {/* SHOW LESS */}
                  <button
                    className="proj-back"
                    onClick={() => handleViewMore(proj.number)}
                  >
                    <ArrowLeft size={15} />
                    Show Less
                  </button>

                </div>
              )}

            </div>
          );
        })}

      </div>

      {/* ALL PROJECTS BUTTON */}
      <div className="all-projects-container">

        <Link
          to="/projects"
          className="all-projects-btn"
        >
          <span>See All Projects</span>
          <ArrowRight size={19} />
        </Link>

        <p>
          Explore all the projects I've built
        </p>

      </div>

    </section>
  );
}