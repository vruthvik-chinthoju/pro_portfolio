import { useState, useEffect } from "react";
import "./css/Navbar.css"
import vrImg from "../assets/images/vr.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="log">
        <img src={vrImg} alt="" className="vr" />
        <h1 className="logo">Ruthvik</h1>
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#journey" onClick={() => setOpen(false)}>Achievements</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}