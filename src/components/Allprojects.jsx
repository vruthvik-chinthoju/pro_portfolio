import "./css/Allprojects.css";

import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectBrowser from "./ProjectBrowser"

// GitHub
import githubImg from "../assets/skillslogo/GitHub.svg";

// Tech icons
import react from "../assets/skillslogo/reactlogo.svg";
import django from "../assets/skillslogo/Django.svg";
import djangorest from "../assets/skillslogo/Django REST.svg";
import python from "../assets/skillslogo/Python.svg";
import postgres from "../assets/skillslogo/PostgresSQL.svg";
import flask from "../assets/skillslogo/Flask.svg";
import javascript from "../assets/skillslogo/JavaScript.svg";

// Project images
import mindbuddyImg from "../assets/images/mindbuddy.png";
import cricketImg from "../assets/images/homepage.png";
import recipeImg from "../assets/images/original-recipes.png";
import snakegame from "../assets/images/snakegame.png";
import anichar from "../assets/images/anichar.png";
import govtassist from "../assets/images/govtassist1.png";
// import employeeImg from "../assets/images/Register.png";

// Project logos
import mindbuddyLogo from "../assets/images/chatlogo.png";
import cricketLogo from "../assets/images/finallogo.png";
import recipeLogo from "../assets/images/cooklogo.png";

export default function AllProjects() {
    const projects = [
        {
            number: "01",
            title: "MindBuddy",
            category: "AI / FULL STACK",
            logo: mindbuddyLogo,
            image: mindbuddyImg,

            description:
                "An AI-powered mental wellness platform designed to make everyday emotional support more accessible through conversational AI, mood tracking, journaling, wellness exercises, and personalized self-care experiences.",

            features: [
                "AI-powered conversational support",
                "Mood tracking and emotional check-ins",
                "Guided breathing and wellness exercises",
                "Structured journaling system",
                "Personal goals and progress tracking",
                "Sleep and wellness features",
            ],

            tags: [
                { icon: react, name: "React" },
                { icon: django, name: "Django" },
                { icon: python, name: "Python" },
                { icon: djangorest, name: "DRF" },
                { name: "Hugging Face" },
                { name: "LLM" },
            ],

            live: "https://mindbudy.netlify.app/",
            github: "https://github.com/vruthvik-chinthoju/mindbuddy",
        },

        {
            number: "02",
            title: "CricketPulse",
            category: "FULL STACK / ML",
            logo: cricketLogo,
            image: cricketImg,

            description:
                "A full-stack cricket intelligence platform that combines cricket data, player statistics, team analytics, leaderboards, and machine-learning-based match predictions into a single interactive experience.",

            features: [
                "Cricket match and team data",
                "Player statistics",
                "Leaderboards",
                "External cricket API integration",
                "REST API architecture",
                "ML-based match prediction",
                "PostgreSQL data storage",
            ],

            tags: [
                { icon: react, name: "React" },
                { icon: django, name: "Django" },
                { icon: djangorest, name: "DRF" },
                { icon: postgres, name: "PostgreSQL" },
                { icon: python, name: "Python" },
            ],

            live:
                "https://vruthvik-chinthoju.github.io/cricketpulse-frontend-v2/",
            github: "https://github.com/vruthvik-chinthoju/cricketpulse",

            caseStudy: "/cricketpulse",
        },

        {
            number: "03",
            title: "GovtAssistant",
            category: "AI AGENT / FULL STACK",
            image: govtassist,

            description:
                "An AI-powered government scheme assistant that helps users discover relevant government schemes and understand eligibility requirements, required documents, application deadlines, and other important scheme information.",

            features: [
                "Government scheme discovery",
                "Eligibility guidance",
                "Required document information",
                "Application deadline information",
                "AI-powered assistance",
                "Gemini AI agent integration",
                "Government/API data integration",
            ],

            tags: [
                { icon: react, name: "React" },
                { icon: django, name: "Django" },
                { icon: python, name: "Python" },
                { name: "Gemini" },
                { name: "APIs" },
            ],

            live: "https://github.com/vruthvik-chinthoju/govtassist",
            github: "https://github.com/vruthvik-chinthoju/govtassist",
        },

        {
            number: "04",
            title: "AI Recipe Hub",
            category: "FULL STACK / AI",
            logo: recipeLogo,
            image: recipeImg,

            description:
                "An AI-enhanced recipe discovery platform that combines recipe APIs, search and exploration features, and intelligent functionality to create a more personalized cooking experience.",

            features: [
                "Recipe discovery and exploration",
                "External API integration",
                "AI-powered functionality",
                "Dynamic recipe data",
                "Backend API integration",
                "Responsive web interface",
            ],

            tags: [
                { icon: javascript, name: "JavaScript" },
                { icon: django, name: "Django" },
                { icon: python, name: "Python" },
                { name: "API" },
                { name: "AI" },
            ],

            live: "https://recipe-hub-ucc0.onrender.com/",
            github: "https://github.com/vruthvik-chinthoju/recipe-hub",
        },

        {
            number: "05",
            title: "AniChar",
            category: "INTERACTIVE / PERSONALITY ANALYSIS",
            image: anichar,

            description:
                "An interactive anime character platform where users select characters from different anime series and receive a personality analysis based on the personality traits associated with their choices.",

            features: [
                "Characters from multiple anime series",
                "Cross-anime character selection",
                "Interactive character choices",
                "Personality trait analysis",
                "Personalized personality results",
                "Interactive user experience",
            ],

            tags: [
                { icon: javascript, name: "JavaScript" },
                { name: "Anime APIs" },
                { name: "Personality Analysis" },
            ],

            live: "https://github.com/vruthvik-chinthoju/anime_personality",
            github: "https://github.com/vruthvik-chinthoju/anime_personality",
        },

        {
            number: "06",
            title: "Snake Game",
            category: "JAVASCRIPT / GAME DEVELOPMENT",
            image: snakegame,

            description:
                "A browser-based Snake game built with JavaScript featuring progressive speed, point collection, score tracking, and a leaderboard system for competitive gameplay.",

            features: [
                "Classic Snake gameplay",
                "Progressive speed system",
                "Point collection",
                "Score tracking",
                "Leaderboard",
                "Increasing gameplay difficulty",
            ],

            tags: [
                { icon: javascript, name: "JavaScript" },
                { name: "HTML" },
                { name: "CSS" },
            ],

            live: "https://snake-gameeee.netlify.app/",
            github: "https://github.com/vruthvik-chinthoju/snake-game",
        },
    ];


    return (
        <section className="all-projects">

            {/* ================= NAVBAR ================= */}

            <nav className="projects-navbar">
                <Link to="/" className="back-projects-btn">
                    <ArrowLeft size={17} />
                    Back to All Projects
                </Link>

                <div className="projects-navbar-title">
                    PROJECT ARCHIVE
                </div>
            </nav>

            {/* ================= HEADER ================= */}

            <div className="all-projects-header">
                <p className="all-projects-label">
                    04 — PROJECTS
                </p>

                <h1>
                    All <span>PROJECTS.</span>
                </h1>

                <p className="all-projects-intro">
                    A collection of projects I've built while exploring
                    full-stack development, AI, machine learning and data.
                </p>
            </div>

            {/* ================= PROJECT GRID ================= */}

            <div className="all-projects-grid">
                {projects.map((project) => (
                    <article
                        className="all-project-card"
                        key={project.number}
                    >

                        {/* PROJECT NUMBER */}

                        <div className="all-project-number">
                            {project.number} - PROJECT
                        </div>

                        {/* LOGO + NAME */}

                        <div className="all-project-heading">
                            {project.logo && (
                                <img
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    className="all-project-logo"
                                />
                            )}

                            <div>
                                <span className="all-project-category">
                                    {project.category}
                                </span>

                                <h2>{project.title}</h2>
                            </div>
                        </div>

                        {/* PROJECT IMAGE */}

                        <div className="all-project-image">
                            <ProjectBrowser
                                image={project.image}
                                url={project.live}
                                alt={`${project.title} website`}
                            />
                        </div>

                        {/* PROJECT INFORMATION */}

                        <div className="all-project-info">
                            <h3>About the Project</h3>

                            <p>{project.description}</p>
                        </div>

                        {/* TECH STACK */}

                        <div className="all-project-section">
                            <h3>Tech Stack</h3>

                            <div className="all-project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="all-project-tag"
                                    >
                                        {tag.icon && (
                                            <img
                                                src={tag.icon}
                                                alt=""
                                            />
                                        )}

                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* FEATURES */}

                        <div className="all-project-section">
                            <h3>Key Features</h3>

                            <div className="all-project-features">
                                {project.features.map((feature, featureIndex) => (
                                    <div
                                        className="all-project-feature"
                                        key={featureIndex}
                                    >
                                        <span className="feature-dot"></span>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LINKS */}

                        <div className="all-project-links">

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="all-project-live"
                            >
                                <ExternalLink size={15} />
                                Live Demo
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="all-project-github"
                            >
                                <img
                                    src={githubImg}
                                    alt="GitHub"
                                />
                                GitHub
                            </a>

                            {/* CRICKETPULSE ONLY */}

                            {project.caseStudy && (
                                <Link
                                    to={project.caseStudy}
                                    className="all-project-case-study"
                                >
                                    Case Study
                                </Link>
                            )}

                        </div>

                    </article>
                ))}
            </div>

        </section>
    );
}