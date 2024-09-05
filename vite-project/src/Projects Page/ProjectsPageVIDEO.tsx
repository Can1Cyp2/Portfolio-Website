import React, { useEffect, useRef } from "react";
import "./ProjectsPage.css"; // Import your CSS file

const ProjectsPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      if (video) {
        const scrollPosition = window.scrollY;
        const scrollRange = window.innerHeight * 3; // Set a larger scroll range for slower video progress
        const scrollPercent = Math.min(scrollPosition / scrollRange, 1); // Ensure it doesn't exceed 1 (100%)
        const targetTime = scrollPercent * video.duration;

        video.currentTime = targetTime;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projects-page">
      <div className="video-container">
        <video
          ref={videoRef}
          src="/videos/testscrollVideo.mp4" // Ensure this path is correct
          muted
          playsInline
          className="scroll-video"
        />
      </div>
      {/* Add additional content if needed */}
    </div>
  );
};

export default ProjectsPage;
