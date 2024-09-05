import React, { useEffect, useRef } from "react";
import "./2048Recreation.css"; // Import your specific CSS file

const Recreation2048: React.FC = () => {
  const gridRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      if (gridRef.current) {
        const maxTranslation = sectionHeight * 0.5; // Limit the translation
        const translation = Math.min(scrollPosition * 0.3, maxTranslation); // Parallax effect
        gridRef.current.style.transform = `translateY(${translation}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="recreation2048-container">
      {/* Background image that moves on scroll */}
      <img
        ref={gridRef}
        src="/pictures/ProjectsSection/2048/grid.png"
        alt="2048 Grid Background"
        className="recreation2048-background"
      />

      {/* Foreground content */}
      <div className="recreation2048-content">
        <h1>2048 Recreation</h1>
        <p>
          A mobile version of the classic 2048 game for Android devices. Players
          swipe to move tiles, combining identical numbers to reach higher
          values.
        </p>
        <p>
          This version includes features like customizable point goals, a
          scoreboard, and a high-scores menu, showcasing a deep understanding of
          mobile development and problem-solving.
        </p>
      </div>

      {/* Tile in the bottom right */}
      <img
        src="/pictures/ProjectsSection/2048/tile.png"
        alt="2048 Tile"
        className="recreation2048-tile"
      />
    </div>
  );
};

export default Recreation2048;
