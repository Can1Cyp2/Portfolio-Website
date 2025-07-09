import React, { useEffect, useRef } from "react";
import "./MineSweeper.css"; // Import Minesweeper-specific styles
import { VITE_BASE_URL } from "../App";

// Comments here act as a template to follow for other components

const MineSweeper: React.FC = () => {
  const backgroundRef = useRef<HTMLImageElement | null>(null);
  const flagRef = useRef<HTMLImageElement | null>(null); // Ref for the flag

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Rise effect for background mine
      if (backgroundRef.current) {
        const maxTranslation = sectionHeight * 0.4; // Limit the translation to 80% of section height
        const translation = Math.min(scrollPosition * 0.5, maxTranslation); // Parallax speed factor 0.5
        backgroundRef.current.style.transform = `translateY(-${translation}px)`;
      }

      // Slight scroll effect for the flag
      if (flagRef.current) {
        const flagTranslation = Math.min(scrollPosition * 0.02, 50); // Move the flag only a few pixels (limited to 5px)
        flagRef.current.style.transform = `translateY(${flagTranslation}px)`; // slight translation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="minesweeper-container">
      {/* Background image that moves on scroll */}
      <img
        ref={backgroundRef}
        src={VITE_BASE_URL + "/pictures/ProjectsSection/minesweeper/mine.png"}
        alt="Minesweeper Background"
        className="minesweeper-background"
      />

      {/* Foreground content */}
      <div className="minesweeper-content">
        {/* Wrap the title and flag together */}
        <div className="minesweeper-title-container">
          <a
            href="https://github.com/Can1Cyp2/Minesweeper---Remake?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
            className="minesweeper-title-link"
          >
            <h1>Minesweeper</h1>
          </a>
          {/* Red flag positioned relative to the title */}
          <img
            ref={flagRef}
            src={
              VITE_BASE_URL +
              "/pictures/ProjectsSection/minesweeper/red-flag.png"
            }
            alt="Minesweeper Flag"
            className="minesweeper-flag"
          />
        </div>

        <p>
          A modern remake of the classic Minesweeper game, featuring essential
          mechanics such as flagging, win conditions, and a fully functional
          play button.
        </p>
        <p>
          This version offers a polished gaming experience with smooth
          animations, dynamic UI, and randomly generated maps to ensure endless
          replayability. It's a fresh challenge every time you play.
        </p>
      </div>

      {/* Tile in the bottom right */}
      <img
        src={
          VITE_BASE_URL +
          "/pictures/ProjectsSection/minesweeper/Silver_square.png"
        }
        alt="Minesweeper Tile"
        className="minesweeper-tile"
      />
    </div>
  );
};

export default MineSweeper;
