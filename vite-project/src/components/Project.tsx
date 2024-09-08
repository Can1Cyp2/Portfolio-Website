import React from "react";
import { VITE_BASE_URL } from "../App";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <div
      className="project-item"
      onClick={onClick}
      style={{
        zIndex: 500,
        position: "relative",
        flex: "0 0 32%", // Slightly increase the width percentage
        maxWidth: "32%", // Increase the maximum width
        padding: "1.2rem",
        borderRadius: "12px", // The roundedness of the widget
      }}
    >
      <img
        src={VITE_BASE_URL + image}
        alt={title}
        className="project-image"
        style={{
          width: "98%",
          height: "73%",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "-3px",
          marginTop: "5px",
        }}
      />
      <h3 className="project-title">{title}</h3>
      <p
        className="project-description"
        style={{
          fontSize: "1.2rem",
          color: "#666",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Project;
