import React from "react";
import "./VoiceVault.css";
import { VITE_BASE_URL } from "../App";

const VoiceVault: React.FC = () => {
  const playNote = (note: string) => {
    const audio = new Audio(
      `${VITE_BASE_URL}/pictures/ProjectsSection/voiceVault/${note}.mp3`
    );
    audio.play();
  };

  return (
    <div className="voicevault-container">
      {/* VoiceVault Content on the Left */}
      <div className="voicevault-content">
      <a
        href="https://github.com/your-username/your-voicevault-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="voicevault-title-link"
      >
        <h1>VoiceVault</h1>
      </a>
      <p>
        A React Native application for exploring vocal ranges of artists and
        songs. VoiceVault allows users to search for artists and songs, view
        their vocal ranges, and use additional features like a built-in tuner.
      </p>
      <p>
        The app combines a sleek design with powerful functionality, offering
        a seamless experience for music enthusiasts and professionals alike.
      </p>
    </div>

      {/* Piano Section on the Right */ }
  <div className="voicevault-piano">
    <div
      className="voicevault-key"
      onClick={() => playNote("C-note")}
      title="C Note"
    >
      <span className="key-label">C</span>
    </div>
    <div
      className="voicevault-key"
      onClick={() => playNote("D-note")}
      title="D Note"
    >
      <span className="key-label">D</span>
    </div>
    <div
      className="voicevault-key"
      onClick={() => playNote("E-note")}
      title="E Note"
    >
      <span className="key-label">E</span>
    </div>
  </div>
    </div >
  );
};

export default VoiceVault;
