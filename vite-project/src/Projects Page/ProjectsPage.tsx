import React from "react";

{
  /* imports for pages sections: */
}
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

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Header></Header>
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

        {/* Minesweeper Section */}
        <MineSweeper />
        {/* Jump Game Section */}
        <JumpGame />
        {/* 2048 Recreation Section */}
        <Recreation2048 />
        {/* Sudoku Game Section */}
        <SudokuGame />
        {/* Fan Page Section */}
        <FanPage />
        {/* Blob Counting Section */}
        <BlobCounting />
        {/* Word Guesser Section */}
        <WordGuesser />
        {/* University Projects Compilation Section */}
        <UniversityProjectsCompilation />
      </div>
    </>
  );
};

export default ProjectsPage;
