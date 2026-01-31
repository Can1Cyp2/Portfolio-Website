import React, { useEffect, useState, useRef } from "react";
import "./TitlePage.css";
import Header from "./Header";

interface TitlePageProps {
  id?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ id }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const typingSpeed = 150;
  const deleteSpeed = 100;
  const nameWithMistake = "Sebastian Laundry";
  const fullText = "Sebastian Landry";

  // Separate useEffect for video autoplay on mobile
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Ensure video attributes are set for mobile Safari
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.setAttribute("playsinline", "");
    videoElement.setAttribute("webkit-playsinline", "");

    const playVideo = async () => {
      try {
        await videoElement.play();
      } catch {
        // If autoplay fails, try playing on user interaction
        const handleInteraction = () => {
          videoElement.play();
          document.removeEventListener("touchstart", handleInteraction);
          document.removeEventListener("click", handleInteraction);
        };
        document.addEventListener("touchstart", handleInteraction, { once: true });
        document.addEventListener("click", handleInteraction, { once: true });
      }
    };

    // Try to play immediately and also on load
    playVideo();
    videoElement.addEventListener("loadedmetadata", playVideo);

    return () => {
      videoElement.removeEventListener("loadedmetadata", playVideo);
    };
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Handle the typing effect logic:
    if (!isDeleting && !isFinished) {
      if (index < nameWithMistake.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + nameWithMistake[index]);
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 500);
      }
    } else if (isDeleting && !isFinished) {
      if (index > 10) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIsFinished(true);
        setIndex(10);
      }
    } else if (isFinished) {
      if (index < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [index, isDeleting, isFinished, nameWithMistake, fullText]);

  return (
    <>
      <div className="title-page" id={id}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          loop
          muted
          controls={false}
          preload="auto"
          // @ts-expect-error webkit-playsinline is a non-standard attribute for older iOS
          webkit-playsinline="true"
        >
          <source src="./videos/TitleBackgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="title-text-container">
          <h1 className="title-text">
            {text}
            <span className="caret">|</span>
          </h1>
        </div>
      </div>
      <Header enableSticky={true}></Header>
    </>
  );
};

export default TitlePage;
