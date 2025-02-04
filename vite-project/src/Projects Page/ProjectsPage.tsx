import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
import Poetry from "./Poetry";
import BuyEase from "./BuyEase";
import PoetryBackend from "./PoetryBackend";
import VoiceVault from "./VoiceVault";
import GuitarScaleVisualizer from "./GuitarScaleVisualizer";

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
      {/* Projects Header */}
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <h2 className="projects-page-subtitle">
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
        <p className="projects-page-subtitle">
          Please use the scroll bar for a better experience on the webpage.
        </p>
      </div>

      {/* Projects Sections */}
      <div className="projects-page">
        <section id="minesweeper">
          <MineSweeper />
        </section>

        <section id="guitar-scale-visualizer">
          <GuitarScaleVisualizer />
        </section>

        <section id="voicevault">
          <VoiceVault />
        </section>

        <section id="jump-game">
          <JumpGame />
        </section>

        <section id="poetry">
          <Poetry />
        </section>

        <section id="poetry-backend">
          <PoetryBackend />
        </section>

        <section id="fan-page">
          <FanPage />
        </section>

        <section id="BuyEase">
          <BuyEase />
        </section>

        <section id="word-guesser">
          <WordGuesser />
        </section>

        <section id="sudoku-game">
          <SudokuGame />
        </section>

        <section id="recreation-2048">
          <Recreation2048 />
        </section>

        <section id="blob-counting">
          <BlobCounting />
        </section>

        <section id="university-projects-compilation">
          <UniversityProjectsCompilation />
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
