import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import { VITE_BASE_URL } from "../App";

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
            marginBottom: "2rem",
          }}
        >
          My Experience
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Resume Images */}
          <img
            src={VITE_BASE_URL + "pictures/ResumePage1.jpg"}
            alt="Resume Page 1"
            style={{ width: "45%", cursor: "pointer" }}
            onClick={() => handleImageClick("/pictures/ResumePage1.jpg")}
          />
          <img
            src={VITE_BASE_URL + "pictures/ResumePage2.jpg"}
            alt="Resume Page 2"
            style={{ width: "45%", cursor: "pointer" }}
            onClick={() => handleImageClick("/pictures/ResumePage2.jpg")}
          />
        </div>

        {/* Modal for viewing resume */}
        <Modal open={!!selectedImage} onClose={handleCloseModal}>
          {selectedImage && (
            <div
              style={{
                width: "100%",
                maxHeight: "90vh", // Max height to fit within the viewport
                overflowY: "auto", // Enable vertical scrolling
              }}
            >
              <img
                src={VITE_BASE_URL + selectedImage}
                alt="Resume"
                style={{
                  width: "100%", // Full width of the modal
                  height: "auto", // Maintain aspect ratio
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
