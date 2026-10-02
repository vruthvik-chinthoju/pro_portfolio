import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achivements from "./components/Achivements";
import Proof from "./components/Proof";

import AllProjects from "./components/Allprojects";

import CricketPulse from "./components/CricketPulse";


function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achivements />
        <Proof />
        <Contact />
      </main>
    </>
  );
}


function App() {
  return (
    <BrowserRouter basename="/pro_portfolio"> 

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects"
          element={<AllProjects />}
        />

        {/* CRICKETPULSE CASE STUDY */}
        <Route
          path="/cricketpulse"
          element={<CricketPulse />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;