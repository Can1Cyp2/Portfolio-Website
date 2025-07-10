import React, { useEffect } from "react";
import "./BuyEase.css"; // Import BuyEase-specific styles
import { VITE_BASE_URL } from "../App";

const BuyEase: React.FC = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".buyease-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in view for quicker appearance
      }
    );

    images.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      images.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <div className="buyease-container">
      {/* Images on the left side */}
      <div className="buyease-images">
        <img
          src={VITE_BASE_URL + "/pictures/ProjectsSection/buyEase/textbook.png"}
          alt="Textbook"
          className="buyease-image"
        />
        <img
          src={VITE_BASE_URL + "/pictures/ProjectsSection/buyEase/money.png"}
          alt="Money"
          className="buyease-image"
        />
        <img
          src={
            VITE_BASE_URL +
            "/pictures/ProjectsSection/buyEase/graduation-hat.png"
          }
          alt="Graduation Hat"
          className="buyease-image hat"
        />
      </div>

      {/* BuyEase Content */}
      <div className="buyease-content">
        <a href="https://github.com/Can1Cyp2/BuyEase_Project"
        target="_blank"
        rel="noopener noreferrer"
        className="buyease-title-link"
          >
        <h1>BuyEase</h1>
      </a>
      <p>
        BuyEase is a marketplace platform for university students to buy and
        sell goods and services within their campus community.
      </p>
      <p>
        The platform helps students save money by purchasing second-hand goods
        or accessing affordable services, in hypothetical scenarios for a
        school project.
      </p>
    </div>
    </div >
  );
};

export default BuyEase;
