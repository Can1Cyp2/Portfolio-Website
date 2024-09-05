import React, { useEffect, useRef } from "react";
import "./JumpGame.css"; // Import JumpGame-specific styles

const JumpGame: React.FC = () => {
  const backgroundRef = useRef<HTMLImageElement | null>(null);
  const tileRef = useRef<HTMLImageElement | null>(null); // Ref for the trampoline

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Get the trampoline's position
      if (backgroundRef.current && tileRef.current) {
        const trampolinePosition = tileRef.current.getBoundingClientRect().top;

        // Ensure the man moves only within the screen
        const maxTranslation =
          trampolinePosition -
          backgroundRef.current.offsetHeight +
          sectionHeight * 0.2; // Adjust end position to stop on trampoline
        const translation = Math.min(scrollPosition * 0.4, maxTranslation); // Adjust the scroll speed and ensure it doesn't move beyond the trampoline

        backgroundRef.current.style.transform = `translateY(${translation}px)`; // Move the man image based on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="jumpgame-container">
      {/* Man image that moves on scroll */}
      <img
        ref={backgroundRef}
        src="/pictures/ProjectsSection/jump/man.png"
        alt="Jump Game man"
        className="jumpgame-man"
      />

      {/* Foreground content */}
      <div className="jumpgame-content">
        <h1>Jump!</h1>
        <p>
          Jump! is a platformer game inspired by classics like Mario and Doodle
          Jump. The player navigates levels by jumping from platform to
          platform, avoiding obstacles and enemies.
        </p>
        <p>
          Developed during my high school years, this project introduced me to
          game development using Python and Pygame, teaching me important coding
          and game design concepts.
        </p>
      </div>

      {/* Trampoline Tile in the bottom */}
      <img
        ref={tileRef}
        src="/pictures/ProjectsSection/jump/trampoline.png"
        alt="Jump Tile"
        className="jumpgame-tile"
      />
    </div>
  );
};

export default JumpGame;
