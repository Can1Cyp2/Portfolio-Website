import React, { useEffect } from "react";

// imports for page sections:
import MineSweeper from "./MineSweeper";
import JumpGame from "./JumpGame";
import Recreation2048 from "./Recreation2048";
import SudokuGame from "./SudokuGame";
import FanPage from "./FanPage";
import BlobCounting from "./BlobCounting";
import WordGuesser from "./WordGuesser";
import UniversityProjectsCompilation from "./UniversityProjectsCompilation";

import "./ProjectsPage.css";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        // Scroll to the project smoothly
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If there's no hash, scroll to the top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="projects-page">
        {/* Projects Header */}
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <h2 className="projects-subtitle">
            All Projects Listed Here Can be found at:
          </h2>
          <a
            href="https://github.com/Can1Cyp2"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Can1Cyp2
          </a>
          <p className="projects-subtitle">
            Please use the scroll bar for a better experience on the webpage.
          </p>
        </div>

        {/* Minesweeper Section with id */}
        <section id="minesweeper">
          <MineSweeper />
        </section>

        {/* Jump Game Section with id */}
        <section id="jump-game">
          <JumpGame />
        </section>

        {/* 2048 Recreation Section with id */}
        <section id="recreation-2048">
          <Recreation2048 />
        </section>

        {/* Sudoku Game Section with id */}
        <section id="sudoku-game">
          <SudokuGame />
        </section>

        {/* Fan Page Section with id */}
        <section id="fan-page">
          <FanPage />
        </section>

        {/* Blob Counting Section with id */}
        <section id="blob-counting">
          <BlobCounting />
        </section>

        {/* Word Guesser Section with id */}
        <section id="word-guesser">
          <WordGuesser />
        </section>

        {/* University Projects Compilation Section with id */}
        <section id="university-projects-compilation">
          <UniversityProjectsCompilation />
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
