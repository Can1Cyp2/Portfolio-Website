import React from "react";
import "./UniversityProjectsCompilation.css"; // Import UniversityProjectsCompilation-specific styles

const UniversityProjectsCompilation: React.FC = () => {
  const handleImageClick = () => {
    window.open("https://github.com/Can1Cyp2/UniversityJavaProjects", "_blank");
  };

  return (
    <div className="university-projects-container">
      <div className="github-preview" onClick={handleImageClick}>
        <img
          src="/pictures/ProjectsSection/universityCompilation/gitScreenshot.png"
          alt="GitHub Project Screenshot"
          className="github-screenshot"
        />

        {/* Overlay with clickable icon */}
        <div className="overlay">
          <span className="click-icon">🔗</span>
        </div>
      </div>

      {/* Foreground content */}
      <div className="university-projects-content">
        <h1>University Projects Compilation</h1>
        <p>
          This compilation includes multiple projects completed during my
          university studies, each demonstrating different aspects of
          programming and software development.
        </p>
        <p>
          Key projects span mobile development, control structures, and
          object-oriented programming, showcasing experience in Java, Android
          development, algorithms, and more.
        </p>
      </div>
    </div>
  );
};

export default UniversityProjectsCompilation;
