import React from "react";
import "./WordGuesser.css"; // Ensure your CSS file is correctly imported

const WordGuesser: React.FC = () => {
  return (
    <div className="wordguesser-container">
      <div className="wordguesser-content">
        <h1>WordGuesser</h1>
        <p>
          WordGuesser is a game inspired by the popular Wordle game. The player
          must guess a 5-letter word, with feedback provided for each guess. The
          game tracks the player's remaining guesses and highlights correct and
          incorrect letters.
        </p>
        <p>
          This game was built using HTML, CSS, and JavaScript, with a focus on
          creating a simple and fun user interface. It helped me understand the
          fundamentals of web development and game logic.
        </p>
      </div>

      {/* First Row: HELLO */}
      <div className="wordguesser-word">
        <div className="letter grey">H</div>
        <div className="letter yellow">E</div>
        <div className="letter grey">L</div>
        <div className="letter grey">L</div>
        <div className="letter yellow">O</div>
      </div>

      {/* Second Row: ABOVE */}
      <div className="wordguesser-word">
        <div className="letter grey">A</div>
        <div className="letter grey">B</div>
        <div className="letter yellow">O</div>
        <div className="letter grey">V</div>
        <div className="letter yellow">E</div>
      </div>

      {/* Third Row: OUTER */}
      <div className="wordguesser-word">
        <div className="letter yellow">O</div>
        <div className="letter grey">U</div>
        <div className="letter grey">T</div>
        <div className="letter green">E</div>
        <div className="letter grey">R</div>
      </div>

      {/* Fourth Row: FOXES */}
      <div className="wordguesser-word">
        <div className="letter grey">F</div>
        <div className="letter green">O</div>
        <div className="letter grey">X</div>
        <div className="letter green">E</div>
        <div className="letter green">S</div>
      </div>

      {/* Fifth Row: CODES */}
      <div className="wordguesser-word">
        <div className="letter green">C</div>
        <div className="letter green">O</div>
        <div className="letter green">D</div>
        <div className="letter green">E</div>
        <div className="letter green">S</div>
      </div>
    </div>
  );
};

export default WordGuesser;
