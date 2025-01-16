import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import { VITE_BASE_URL } from "../App";

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

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
      <Header></Header>
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#2c2c2c",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "#ffffff",
            textAlign: "center", // Center align the title
            marginBottom: "3rem", // Adds extra space below the title
          }}
        >
          My Experience
        </h2>

        {/* Current Resume PDF ( front and center)*/}
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#444",
            padding: "1.5rem",
            borderRadius: "8px",
            maxWidth: "90%",
            margin: "0 auto 3rem auto",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem" }}>My Latest Resume</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <embed
              src="https://raw.githubusercontent.com/Can1Cyp2/Portfolio-Website/main/vite-project/pictures/Sebastian_Landry_Resume.pdf"
              type="application/pdf"
              style={{
                width: "85%", // Adjusts width for larger screens
                height: "70vh", // Sets height dynamically
                maxWidth: "100%", // Prevents overflow on small screens
                border: "none",
              }}
            />
          </div>
        </div>

        {/* Button to toggle old resume */}
        <button
          onClick={handleShowOldResume}
          style={{
            backgroundColor: "#444",
            color: "#fff",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontSize: "1.2rem",
            cursor: "pointer",
            marginBottom: "2rem",
          }}
        >
          {showOldResume ? "Hide Old 2-Page Resume" : "View Old 2-Page Resume"}
        </button>

        {/* Old Resume Images (side by side) */}
        {showOldResume && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <img
              src={VITE_BASE_URL + "pictures/ResumePage1.jpg"}
              alt="Resume Page 1"
              style={{
                width: "45%",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleImageClick("/pictures/ResumePage1.jpg")}
            />
            <img
              src={VITE_BASE_URL + "pictures/ResumePage2.jpg"}
              alt="Resume Page 2"
              style={{
                width: "45%",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleImageClick("/pictures/ResumePage2.jpg")}
            />
          </div>
        )}

        {/* Licenses & Certifications Section */}
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#444",
            padding: "3rem",
            borderRadius: "12px",
            maxWidth: "90%",
            margin: "4rem auto 0 auto",
          }}
        >
          <h3 style={{ fontSize: "2.5rem", marginBottom: "2.5rem" }}>
            Licenses & Certifications
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Certification 1 */}
            <div
              style={{
                backgroundColor: "#333",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Building Communication Skills in the Age of AI
              </h4>
              <p
                style={{
                  margin: "0.5rem 0 0.8rem",
                  fontSize: "1rem",
                  color: "#bbb",
                }}
              >
                <strong>Platform:</strong> LinkedIn (Issued Jan 2025)
              </p>
              <p style={{ margin: 0, fontSize: "1rem", color: "#ddd" }}>
                <strong>Skills:</strong> Interpersonal Communication · Emotional
                Intelligence · Professional Communication · Generative AI Tools
                · Artificial Intelligence for Business
              </p>
            </div>

            {/* Certification 2 */}
            <div
              style={{
                backgroundColor: "#333",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                TypeScript Essential Training
              </h4>
              <p
                style={{
                  margin: "0.5rem 0 0.8rem",
                  fontSize: "1rem",
                  color: "#bbb",
                }}
              >
                <strong>Platform:</strong> LinkedIn (Issued Jan 2025)
              </p>
              <p style={{ margin: 0, fontSize: "1rem", color: "#ddd" }}>
                <strong>Skills:</strong> TypeScript
              </p>
            </div>

            {/* Certification 3 */}
            <div
              style={{
                backgroundColor: "#333",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                TypeScript for JavaScript Developers
              </h4>
              <p
                style={{
                  margin: "0.5rem 0 0.8rem",
                  fontSize: "1rem",
                  color: "#bbb",
                }}
              >
                <strong>Platform:</strong> LinkedIn (Issued Jan 2025)
              </p>
              <p style={{ margin: 0, fontSize: "1rem", color: "#ddd" }}>
                <strong>Skills:</strong> JavaScript · TypeScript · Front-End
                Development
              </p>
            </div>

            {/* Certification 4 */}
            <div
              style={{
                backgroundColor: "#333",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Tri-Council Policy Statement Certification
              </h4>
              <p
                style={{
                  margin: "0.5rem 0 0.8rem",
                  fontSize: "1rem",
                  color: "#bbb",
                }}
              >
                Successfully completed the Course on Research Ethics based on
                the Tri-Council Policy Statement: Ethical Conduct for Research
                Involving Humans (TCPS 2: CORE 2022).
              </p>
              <p style={{ margin: 0, fontSize: "1rem", color: "#ddd" }}>
                <strong>Certificate ID:</strong> 0001333891
              </p>
              <p
                style={{
                  margin: "0.5rem 0 0",
                  fontSize: "1rem",
                  color: "#ddd",
                }}
              >
                <strong>Issued on:</strong> 12 September 2024
              </p>
            </div>
          </div>
        </div>

        {/* Modal for viewing resume */}
        <Modal open={!!selectedImage} onClose={handleCloseModal}>
          {selectedImage && (
            <div
              style={{
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <img
                src={VITE_BASE_URL + selectedImage}
                alt="Resume"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          )}
        </Modal>
      </section>
    </>
  );
};

export default ExperiencePage;
