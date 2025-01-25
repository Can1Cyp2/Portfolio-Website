import React, { useState, useEffect } from "react";
import "./PoetryBackend.css";

const PoetryBackend: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<{
    method: string;
    path: string;
    description: string;
  } | null>(null);

  const endpoints = [
    { method: "GET", path: "/poems", description: "Fetch all poems" },
    { method: "POST", path: "/poems/new", description: "Add a new poem" },
    { method: "GET", path: "/poems/:id", description: "Fetch a poem by ID" },
    {
      method: "DELETE",
      path: "/poems/:id/delete",
      description: "Delete a poem by ID",
    },
  ];

  // Disable scrolling when a modal is open:
  useEffect(() => {
    if (selectedEndpoint) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [selectedEndpoint]);

  const closeModal = () => setSelectedEndpoint(null);

  return (
    <div className="poetry-backend-container">
      {/* Design Section on the Left */}
      <div className="poetry-backend-design">
        <div className="api-box">
          <h3>API Design</h3>
          <ul>
            {endpoints.map((endpoint) => (
              <li
                key={endpoint.path}
                onClick={() => setSelectedEndpoint(endpoint)}
              >
                <strong>{endpoint.method}</strong> {endpoint.path}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Text Section on the Right */}
      <div className="poetry-backend-content">
        <h1>Poetry Site Backend</h1>
        <p>
          A robust backend system developed to support a full-stack poetry
          platform. The backend provides APIs for managing poems, user
          interactions, and translations, built using Node.js, Express, and
          MongoDB.
        </p>
        <p>
          Features include user authentication, poem categorization, and
          seamless integration with the frontend for a rich user experience.
        </p>
      </div>

      {/* Modal for API Details */}
      {selectedEndpoint && (
        <div className="api-modal">
          <div className="api-modal-content">
            <h4>API Details</h4>
            <p>
              <strong>Path:</strong> {selectedEndpoint.path}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {
                endpoints.find((e) => e.path === selectedEndpoint.path)
                  ?.description
              }
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoetryBackend;
