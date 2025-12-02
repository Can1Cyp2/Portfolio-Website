import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section">
      <h2>About Me</h2>
      <div className="about-me-text">
        <p>
          I am a 22-year-old graduate of the Computer Science program at York
          University's Lassonde School of Engineering. I completed my studies at
          the end of 2024 with a GPA over 3.3. I am currently pursuing Honours
          studies. I completed high school in June 2021 with greater than a 90%
          grade average at Monarch Park Collegiate Institute.
        </p>
        <p>
          I am passionate about technology and music, with extensive knowledge
          in coding languages such as Python, C++, JavaScript, TypeScript, CSS,
          and HTML. One of my proudest achievements is building this portfolio
          website to showcase my work. Additionally, I am a self-taught
          musician, proficient in guitar, piano, and drums, now also commiting
          myself to vocal training.
        </p>
      </div>
      <div className="about-me-details">
        <div className="about-me-skills">
          <h3>Skills</h3>
          <ul>
            <li>
              Proficient in languages and frameworks such as C++, Python, JavaScript, TypeScript, HTML, CSS, React, and React Native.
            </li>
            <li>
              Professional experience in Full-Stack Development with a focus on front-end, TypeScript, and Generative
              AI Tools.
            </li>
            <li>
              Strong interpersonal communication, emotional intelligence, and
              professional communication skills.
            </li>
            <li>
              Effective in independent work, team collaboration, and customer
              interactions.
            </li>
            <li>Quick learner with strong problem-solving abilities.</li>
          </ul>
        </div>
        <div className="about-me-awards">
          <h3>Awards</h3>
          <ul>
            <li>
              Early acceptance into York University's Lassonde School of
              Engineering Computer Science Program.
            </li>
            <li>$2,000 entrance scholarship to York University.</li>
            <li>Award from the Waterloo Computing Contest.</li>
            <li>Multiple-year honors student.</li>
            <li>Graduated high school with high honours (+90%).</li>
            <li>
              Graduated from the Computer Science program at York University
              with a 3.3+ GPA.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
