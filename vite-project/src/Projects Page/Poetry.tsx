import React, { useEffect, useRef } from "react";
import "./Poetry.css";
import { VITE_BASE_URL } from "../App";

const Poetry: React.FC = () => {
  const svgPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const svgPath = svgPathRef.current;

    if (!svgPath) return;

    const length = svgPath.getTotalLength();

    // Set up the stroke dash to create the line drawing effect
    svgPath.style.strokeDasharray = `${length}`;
    svgPath.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svgPath.style.transition = "stroke-dashoffset 3s ease-in-out"; // Slow down the line drawing
            svgPath.style.strokeDashoffset = "0"; // Start the line drawing

            const pencilAnimation =
              svgPath.parentElement?.querySelector("animateMotion");
            if (pencilAnimation) {
              pencilAnimation?.beginElement(); // Start the pencil animation
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    const section = svgPath.parentElement?.parentElement;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Function to open the poetry website in a new tab
  const openPoetryWebsite = () => {
    window.open("https://paulospoetry.com", "_blank");
  };

  return (
    <div className="poetry-container">
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

        {/* Add the button to redirect to the external website */}
        <button className="redirect-button" onClick={openPoetryWebsite}>
          Visit Paul's Poetry
        </button>
      </div>

      {/* SVG Drawing on the right */}
      <div className="poetry-svg-container">
        <svg
          id="pen-drawing"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
        >
          {/* Drawing Path */}
          <path
            id="path"
            ref={svgPathRef}
            className="svg-path"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            d="M10,10 C30,80 90,40 120,140" /* Path */
          />

          {/* Pencil Image following the path */}
          <image
            href={VITE_BASE_URL + "/pictures/ProjectsSection/poetry/pencil.png"}
            width="50"
            height="50"
            className="poetry-pencil"
            transform="translate(0, -5)" /* Move pencil higher */
          >
            <animateMotion
              dur="2s" /* Match the duration of the line drawing */
              repeatCount="1"
              fill="freeze"
              begin="indefinite"
            >
              <mpath href="#path" />
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
  );
};

export default Poetry;
