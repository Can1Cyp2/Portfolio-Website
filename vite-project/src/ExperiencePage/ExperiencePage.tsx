import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import { VITE_BASE_URL } from "../App";

import "./ExperiencePage.css";

const ExperiencePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page

    // Detect screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set true for screens ≤768px
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Listen for window resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const openResumeInNewTab = () => {
    window.open("/Portfolio-Website/Sebastian_Landry_Resume.pdf", "_blank");
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showOldResume, setShowOldResume] = useState(false);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleShowOldResume = () => {
    setShowOldResume(!showOldResume);
  };

  return (
    <>
      <Header />
      <section className="experience-section">
        <h2 className="experience-title">My Experience</h2>

        {/* Current Resume PDF */}
        <div className="resume-container">
          <h3>My Styled Resume</h3>
          {!isSmallScreen ? (
            // Show embedded PDF for larger screens
            <div className="resume-embed-wrapper">
              <embed
                src="/Portfolio-Website/Sebastian_Landry_Resume.pdf"
                type="application/pdf"
                className="resume-embed"
              />
            </div>
          ) : (
            // Show button for smaller screens
            <div className="resume-button-wrapper">
              <p className="resume-prompt">
                The screen is too small to display the resume inline. Please
                click the button below to view it in a new tab.
              </p>
              <button className="resume-button" onClick={openResumeInNewTab}>
                View Resume in New Tab
              </button>
            </div>
          )}
        </div>

        {/* Button to toggle old resume */}
        <button className="toggle-resume-button" onClick={handleShowOldResume}>
          {showOldResume ? "Hide Old 2-Page Resume" : "View Old 2-Page Resume"}
        </button>

        {/* Old Resume Images */}
        {showOldResume && (
          <div className="experience-images">
            <img
              src={VITE_BASE_URL + "pictures/ResumePage1.jpg"}
              alt="Resume Page 1"
              className="resume-image"
              onClick={() => handleImageClick("/pictures/ResumePage1.jpg")}
            />
            <img
              src={VITE_BASE_URL + "pictures/ResumePage2.jpg"}
              alt="Resume Page 2"
              className="resume-image"
              onClick={() => handleImageClick("/pictures/ResumePage2.jpg")}
            />
          </div>
        )}

        {/* Licenses & Certifications Section */}
        <div className="certifications-section">
          <h3>Licenses & Certifications</h3>

          <div className="certification-item">
            <h4>AI Prompt Engineering</h4>
            <p>
              <strong>Platform:</strong> LinkedIn (Issued Feb 2025)
            </p>
            <p>
              <strong>Skills:</strong> AI Prompting · Prompt Engineering ·
              Generative AI Tools · Responsible AI Use · Large Language Models
              (LLMs) · Text & Image Generation
            </p>
            <p>
              <strong>Learning Objectives:</strong> Understand prompt
              engineering, use tools like ChatGPT & Gemini, evaluate AI
              capabilities, and apply ethical AI considerations.
            </p>
          </div>

          <div className="certification-item">
            <h4>Building Communication Skills in the Age of AI</h4>
            <p>
              <strong>Platform:</strong> LinkedIn (Issued Jan 2025)
            </p>
            <p>
              <strong>Skills:</strong> Interpersonal Communication · Emotional
              Intelligence · Professional Communication · Generative AI Tools ·
              Artificial Intelligence for Business
            </p>
          </div>

          <div className="certification-item">
            <h4>TypeScript Essential Training</h4>
            <p>
              <strong>Platform:</strong> LinkedIn (Issued Jan 2025)
            </p>
            <p>
              <strong>Skills:</strong> TypeScript
            </p>
          </div>

          <div className="certification-item">
            <h4>TypeScript for JavaScript Developers</h4>
            <p>
              <strong>Platform:</strong> LinkedIn (Issued Jan 2025)
            </p>
            <p>
              <strong>Skills:</strong> JavaScript · TypeScript · Front-End
              Development
            </p>
          </div>

          <div className="certification-item">
            <h4>Tri-Council Policy Statement Certification</h4>
            <p>
              Successfully completed the Course on Research Ethics based on the
              Tri-Council Policy Statement: Ethical Conduct for Research
              Involving Humans (TCPS 2: CORE 2022).
            </p>
            <p>
              <strong>Certificate ID:</strong> 0001333891
            </p>
            <p>
              <strong>Issued on:</strong> 12 September 2024
            </p>
          </div>
        </div>

        {/* Modal for viewing resume */}
        <Modal open={!!selectedImage} onClose={handleCloseModal}>
          {selectedImage && (
            <div className="modal-content">
              <img
                src={VITE_BASE_URL + selectedImage}
                alt="Resume"
                className="modal-image"
              />
            </div>
          )}
        </Modal>
      </section>
    </>
  );
};

export default ExperiencePage;
