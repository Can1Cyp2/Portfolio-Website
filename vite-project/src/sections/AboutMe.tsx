import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section">
      <h2>About Me</h2>
      <div className="about-me-text">
        <p>
          I am a 21-year-old Computer Science student at York University's
          Lassonde School of Engineering, set to graduate at the end of 2024. I
          completed high school in June 2021 with a 90% grade average at Monarch
          Park Collegiate Institute.
        </p>
        <p>
          I am passionate about technology and music, with extensive knowledge
          in coding languages such as Python, C++, JavaScript, CSS, and HTML.
          One of my proudest achievements is building a portfolio website to
          showcase my work. Additionally, I am a self-taught musician,
          proficient in guitar, piano, and drums.
        </p>
      </div>
      <div className="about-me-details">
        <div className="about-me-skills">
          <h3>Skills</h3>
          <ul>
            <li>
              Proficient in C++, Python, JavaScript, HTML, CSS, and ReactJS.
            </li>
            <li>
              Effective in independent work, team collaboration, and customer
              interactions.
            </li>
            <li>Quick learner with strong problem-solving abilities.</li>
          </ul>
        </div>
        <div className="about-me-awards">
          <h3>Awards & Scholarships</h3>
          <ul>
            <li>$2,000 entrance scholarship to York University.</li>
            <li>Award from the Waterloo Computing Contest.</li>
            <li>Multiple-year honors student.</li>
            <li>Graduated high school with high honors.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
