import React, { useRef } from "react";
import "./FanPage.css"; // Import FanPage-specific styles
import { VITE_BASE_URL } from "../App";

const FanPage: React.FC = () => {
  const microphoneRef = useRef<HTMLDivElement | null>(null);

  // Array of musical note symbols to be displayed
  const noteSymbols = ["♪", "♫", "♬", "♩", "♭", "♯"];
  const noteColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFC300",
    "#8E44AD",
  ]; // Array of colors

  // Function to create and animate musical notes on hover or tap
  const createMusicalNotes = () => {
    if (!microphoneRef.current) return;

    for (let i = 0; i < 5; i++) {
      const note = document.createElement("span");
      note.innerText =
        noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
      note.className = "musical-note";

      const randomColor =
        noteColors[Math.floor(Math.random() * noteColors.length)];
      note.style.color = randomColor;

      microphoneRef.current.appendChild(note);

      // Positioning: Move the starting position higher and to the right
      const imgWidth = microphoneRef.current.offsetWidth;
      const imgHeight = microphoneRef.current.offsetHeight;
      const randomXStart = imgWidth / 2 + 50; // Move further to the right from the center
      const randomYStart = imgHeight / 2 - 85; // Move higher than the center

      note.style.left = `${randomXStart}px`;
      note.style.top = `${randomYStart}px`;

      const randomXDirection = Math.random() * 200 - 100; // Random horizontal animation direction
      const randomYDirection = Math.random() * 200 - 100; // Random vertical animation direction
      note.style.setProperty("--x", `${randomXDirection}px`);
      note.style.setProperty("--y", `${randomYDirection}px`);

      setTimeout(() => {
        note.remove();
      }, 3000);
    }
  };

  return (
    <div className="fanpage-container">
      <div className="fanpage-content">
        <a 
          href="https://github.com/Can1Cyp2/BandWebsite-Shinedown" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fanpage-title-link"
        >
          <h1>Artist Website</h1>
        </a>
        <p>
          This project represents the first website I created in grade 10 using
          only HTML. It features a comprehensive navigation menu that links to
          various sections of the site, including band members, show schedules,
          and a history section.
        </p>
        <p>
          The website also includes album details with cover images and
          descriptions. Through this project, I learned the basics of HTML,
          including layout structuring, linking, and basic CSS for styling.
        </p>
      </div>

      {/* Microphone container */}
      <div
        className="fanpage-instrument-container"
        ref={microphoneRef}
        onMouseEnter={createMusicalNotes} // Trigger notes on hover
        onClick={createMusicalNotes} // Trigger notes on tap/click
      >
        <img
          src={
            VITE_BASE_URL + "/pictures/ProjectsSection/fanpage/microphone.png"
          }
          alt="Microphone"
          className="fanpage-instrument"
        />
        <p className="hover-text">
          try hovering over or tapping the microphone!
        </p>{" "}
        {/* Faint text */}
      </div>
    </div>
  );
};

export default FanPage;
