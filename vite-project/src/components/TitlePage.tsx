import React, { useEffect, useState } from "react";
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
  const typingSpeed = 150;
  const deleteSpeed = 100;
  const nameWithMistake = "Sebastian Laundry";
  const fullText = "Sebastian Landry";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Find the video element and ensure it plays on mobile
    const videoElement = document.querySelector("video");

    if (videoElement) {
      videoElement.muted = true; // Ensure video is muted
      videoElement.play().catch(() => {
        // Fallback: Play video when the user clicks on it if autoplay fails
        videoElement.addEventListener("click", () => {
          videoElement.play();
        });
      });
    }

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
        <video autoPlay playsInline loop muted controls={false}>
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
