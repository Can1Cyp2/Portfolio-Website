import React, { useEffect, useRef } from "react";
import "./SudokuGame.css"; // Import Sudoku-specific CSS

const SudokuGame: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const elements = section.querySelectorAll(".sudoku-number");
        elements.forEach((el: Element) => {
          const elementTop = el.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          // Fade-in/fade-out based on scroll position
          const elementVisible = elementTop < windowHeight && elementTop > 0;
          if (elementVisible) {
            el.classList.add("visible");
          } else {
            el.classList.remove("visible");
          }
        });
      }
    };

    const randomizePositions = () => {
      const section = sectionRef.current;
      if (section) {
        const elements = section.querySelectorAll(".sudoku-number");
        elements.forEach((el: Element) => {
          // Randomize the position and tilt angle
          const randomTop = Math.random() * 80; // Random top position between 0% to 80% of the viewport height
          const randomLeft = Math.random() * 40; // Random left position within the first 40% of the viewport width
          const randomTilt = Math.random() * 30 - 15; // Random tilt between -15deg to 15deg

          (el as HTMLElement).style.top = `${randomTop}vh`;
          (el as HTMLElement).style.left = `${randomLeft}vw`; // Allow them to be spread more horizontally
          (el as HTMLElement).style.transform = `rotate(${randomTilt}deg)`;
        });
      }
    };

    randomizePositions(); // Set initial random positions
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sudoku-game-container" ref={sectionRef}>
      <div className="sudoku-game-content">
        <a href="https://github.com/Can1Cyp2/Sudoku-with-solver"
          target="_blank"
          rel="noopener noreferrer"
          className="sudoku-game-title-link"
        >
          <h1>Sudoku Game</h1>
        </a>
        <p>
          A Sudoku game with various difficulty levels and a user-friendly
          interface. It challenges players to solve puzzles with multiple
          difficulty settings.
        </p>
        <p>
          Features include hints, auto-check, and an undo button to enhance the
          playing experience, making it suitable for both beginners and experts.
        </p>
      </div>

      {/* Number Elements that fade in and out */}
      <div className="sudoku-numbers">
        <span className="sudoku-number blue-number">1</span>
        <span className="sudoku-number white-number">2</span>
        <span className="sudoku-number blue-number">3</span>
        <span className="sudoku-number white-number">4</span>
        <span className="sudoku-number blue-number">5</span>
        <span className="sudoku-number white-number">6</span>
        <span className="sudoku-number blue-number">7</span>
        <span className="sudoku-number white-number">8</span>
        <span className="sudoku-number blue-number">9</span>
      </div>
    </div>
  );
};

export default SudokuGame;
