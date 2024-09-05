import React, { useEffect, useRef } from "react";
import "./Recreation2048.css"; // Ensure your CSS file is correctly imported

const Recreation2048: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const section = sectionRef.current;

      if (video && section) {
        const sectionTop = section.offsetTop; // Top of the section
        const sectionHeight = section.offsetHeight; // Height of the section
        const scrollY = window.scrollY + window.innerHeight; // Scroll position including the viewport height

        // Calculate the scroll percentage within the section
        let scrollPosition = scrollY - sectionTop;
        scrollPosition = Math.max(0, scrollPosition); // Ensure no negative values

        // Increase the scroll range to slow down video playback
        const scrollPercent = Math.min(scrollPosition / sectionHeight, 1); // Extend the scroll range (1.5 times section height)

        // Limit the video playback to the first 5 seconds
        const videoDuration = Math.min(video.duration, 5);
        const targetTime = scrollPercent * videoDuration;

        if (video.currentTime !== targetTime) {
          video.currentTime = targetTime; // Update the video based on scroll
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="recreation2048-container" ref={sectionRef}>
      <div className="recreation2048-content">
        <h1>2048 Recreation</h1>
        <p>
          A mobile version of the classic 2048 game for Android devices. Players
          swipe to move tiles, combining identical numbers to reach higher
          values.
        </p>
        <p>
          This version includes features like customizable point goals, a
          scoreboard, and a high-scores menu, showcasing a deep understanding of
          mobile development and problem-solving.
        </p>
      </div>

      {/* Video controlled by scroll */}
      <video
        ref={videoRef}
        src="/pictures/ProjectsSection/2048/2048.mp4" // Ensure this path is correct
        muted
        playsInline
        className="recreation2048-video"
        preload="auto"
      />
    </div>
  );
};

export default Recreation2048;
