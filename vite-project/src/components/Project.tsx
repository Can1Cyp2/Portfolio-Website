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
    <div className="project-item" onClick={onClick}>
      <img src={VITE_BASE_URL + image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default Project;
