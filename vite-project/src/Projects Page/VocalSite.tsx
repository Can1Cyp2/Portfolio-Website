import React, { useEffect } from "react";
import "./VocalSite.css";
import { VITE_BASE_URL } from "../App";

const VocalSite: React.FC = () => {
  useEffect(() => {
    const mic = document.querySelector(".vocalsite-mic") as HTMLElement;
    const waves = document.querySelectorAll(".vocalsite-wave");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mic?.classList.add("in-view");
            waves.forEach((wave) => wave.classList.add("in-view"));
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(".vocalsite-container");
    if (section) observer.observe(section);

    // Mic "dance" on hover and tap
    if (mic) {
      const triggerDance = () => {
        mic.classList.add("dancing");
        setTimeout(() => mic.classList.remove("dancing"), 600);
      };

      mic.addEventListener("mouseenter", triggerDance); // desktop hover
      mic.addEventListener("touchstart", triggerDance); // mobile tap

      return () => {
        mic.removeEventListener("mouseenter", triggerDance);
        mic.removeEventListener("touchstart", triggerDance);
        if (section) observer.unobserve(section);
      };
    }
  }, []);

  const openVocalSite = () => {
    window.open("https://can1cyp2.github.io/vocal-coach-site/", "_blank");
  };

  return (
    <div className="vocalsite-container">
      <div className="vocalsite-animation">
        <img
          src={VITE_BASE_URL + "/pictures/ProjectsSection/vocalSite/mic.png"}
          alt="Microphone"
          className="vocalsite-mic"
        />
        <div className="vocalsite-wave wave1"></div>
        <div className="vocalsite-wave wave2"></div>
        <div className="vocalsite-wave wave3"></div>
      </div>

      <div className="vocalsite-content">
        <h1>VocalCoach - UNDER CONSTRUCTION</h1>
        <p style={{ fontStyle: "italic", color: "yellow" }}>
          **UNDER CONSTRUCTION - Will replace the placeholder text and values when the VocalCoach Site is done**
        </p>
        <p>
          VocalCoach Site is a full-stack website application designed to help users book and manage singing lessons with vocal coaches.
        </p>
        <p>
          Built with React, TypeScript, Supabase, and styled-components, it features secure auth, a dynamic calendar, and recurring session handling.
        </p>
        <button className="redirect-button" onClick={openVocalSite}>
          Visit Site
        </button>
      </div>
    </div>
  );
};

export default VocalSite;
