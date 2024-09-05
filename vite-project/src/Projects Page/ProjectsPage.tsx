import React from "react";
import MineSweeper from "./MineSweeper";
import JumpGame from "./JumpGame";
import Recreation2048 from "./2048Recreation"; // Import 2048 section
import "./ProjectsPage.css";

const ProjectsPage: React.FC = () => {
  return (
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
    </div>
  );
};

export default ProjectsPage;
