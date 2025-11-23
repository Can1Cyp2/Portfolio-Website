import React, { useState } from "react";
import "./OwnItSooner.css";
import { VITE_BASE_URL } from "../App";

const OwnItSooner: React.FC = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  const toggleDoor = () => {
    setDoorOpen(!doorOpen);
  };

  return (
    <div className="ownitsooner-container">
      {/* OwnItSooner Content on the Left */}
      <div className="ownitsooner-content">
        <a
          href="https://github.com/Can1Cyp2/mortgage-saver-app"
          target="_blank"
          rel="noopener noreferrer"
          className="ownitsooner-title-link"
        >
          <h1>OwnItSooner</h1>
        </a>
        <p>
          OwnItSooner is a React Native app that helps you optimize your mortgage payments and save money with smart strategies. Instantly compare payment options, see interest and time savings, and calculate the impact of extra or lump sum payments—all with privacy-first, on-device calculations.
        </p>
        <ul className="ownitsooner-features-list">
          <li>Monthly payment calculator with real-time updates</li>
          <li>Extra payment and lump sum analysis</li>
          <li>Interest and time savings breakdown</li>
          <li>All calculations done on your device</li>
        </ul>
      </div>

      {/* House Icon Section on the Right */}
      <div className="ownitsooner-icon">
        <img
          src={
            doorOpen
              ? `${VITE_BASE_URL}/pictures/ProjectsSection/ownItSooner/OIS_doorOpen.png`
              : `${VITE_BASE_URL}/pictures/ProjectsSection/ownItSooner/OIS_doorClosed.png`
          }
          alt={doorOpen ? "House with door open" : "House with door closed"}
          onClick={toggleDoor}
          className="ownitsooner-house"
          title="Click to toggle door"
        />
      </div>
    </div>
  );
};

export default OwnItSooner;