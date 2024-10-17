import React, { useEffect, useRef } from "react";
import "./Poetry.css"; // Import Poetry-specific styles
//import { VITE_BASE_URL } from "../App";

const Poetry: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const section = sectionRef.current;

      if (video && section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY + window.innerHeight;

        let scrollPosition = scrollY - sectionTop;
        scrollPosition = Math.max(0, scrollPosition);

        const scrollPercent = Math.min(scrollPosition / sectionHeight, 1);
        const videoDuration = Math.min(video.duration, 5);
        const targetTime = scrollPercent * videoDuration;

        if (video.currentTime !== targetTime) {
          video.currentTime = targetTime;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="poetry-container" ref={sectionRef}>
      <div className="poetry-content">
        <h1>Poetry Website</h1>
        <p>
          A website showcasing and managing the poems of Paulos Ioannou, with a
          fully implemented backend and admin controls for adding, editing, or
          deleting poems.
        </p>
        <p>
          The platform allows users to explore poetry in multiple languages and
          leave feedback, while admin authenticated users can manage content and
          users efficiently.
        </p>
      </div>

      {/* Video controlled by scroll */}
      {/* <video
        ref={videoRef}
        src={VITE_BASE_URL + "/pictures/ProjectsSection/poetry/poetryVideo.mp4"}
        muted
        playsInline
        className="poetry-video"
        preload="auto"
      /> */}
    </div>
  );
};

export default Poetry;
