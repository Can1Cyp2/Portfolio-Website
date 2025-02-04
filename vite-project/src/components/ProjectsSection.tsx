import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import "./ProjectsSection.css";
import { Link } from "react-router-dom";
import { VITE_BASE_URL } from "../App";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    learnMoreLink?: string; // Optional
  }>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          section.classList.add("fade-in");
        } else {
          section.classList.remove("fade-in");
        }
      }

      const projectItems = document.querySelectorAll(".project-item");
      projectItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= window.innerHeight) {
          item.classList.add("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the scroll function to check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      id: "project1",
      title: "Minesweeper",
      description:
        "A modern remake of the classic Minesweeper game, featuring essential mechanics such as flagging, win conditions, and a fully functional play button.",
      longDescription:
        "This modern remake of Minesweeper offers a polished gaming experience, incorporating all the classic features you expect: flagging of potential mines, clear win conditions, and an intuitive play button to start each game. The game is enhanced with smooth animations and a dynamic user interface. The randomly generated maps ensure that no two games are alike, providing endless replayability and a fresh challenge every time.",
      image: "/pictures/ProjectsSection/minesweeper/minesweeperPic.png",
      githubUrl: "https://github.com/Can1Cyp2/Minesweeper---Remake",
    },
    {
      id: "project13",
      title: "Guitar Scale Visualizer",
      description:
        "An interactive guitar fretboard visualizer that helps musicians explore scales, tunings, and note positions.",
      longDescription: `
        The Guitar Scale Visualizer is an interactive web application designed to help guitarists explore different scales, tunings, and note positions on the fretboard.<br>
<br>
        Key Features:<br>
        - Scale Selection: Users can choose from a variety of scales such as major, minor, pentatonic, and more.<br>
        - Custom Tunings: Manually adjust each string's tuning or use preset tunings.<br>
        - Interactive UI: The fretboard dynamically updates to display selected notes and scales.<br>
<br>
        Technologies Used:<br>
        - React.js: Provides a responsive and interactive user interface.<br>
        - CSS & JavaScript: Enhances styling and interactivity.<br>
    <br>
        Deployment:<br>
        - Hosted on GitHub Pages for easy access.<br>
      `,
      image:
        "/pictures/ProjectsSection/guitarScaleVisualizer/guitar-scale-visualizer.jpg",
      githubUrl: "https://github.com/Can1Cyp2/guitar-scale-visualizer",
    },
    {
      id: "project5",
      title: "VoiceVault",
      description:
        "A React Native application for exploring vocal ranges of artists and songs.",
      longDescription: `
        VoiceVault is an innovative mobile application designed for music enthusiasts and professionals to explore vocal ranges of artists and songs.<br>
    <br>
        Core Features:<br>
        - Vocal Range Exploration: Search for artists and songs and view their vocal ranges.<br>
        - Built-in Tuner: Includes a tuner for singers to match their pitch.<br>
        - Modern UI/UX: A sleek and intuitive design enhances user experience.<br>
     <br>
        Technologies Used:<br>
        - React Native: Enables cross-platform development for iOS and Android.<br>
        - APIs: Fetch data for vocal ranges and song information from reliable sources.<br>
    <br>
        Design Highlights on Products Page:<br>
        - Includes an interactive piano interface for users to explore basic notes (C, D, E).<br>
        - Provides visual and auditory feedback for an engaging learning experience.<br>
    <br>
      `,
      image: "/pictures/ProjectsSection/voiceVault/voiceVaultPic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/VoiceVault",
      learnMoreLink: `${VITE_BASE_URL}voicevault-users`,
    },
    {
      id: "project2",
      title: "JUMP!",
      description:
        "A game inspired by classic games such as Mario and Doodle Jump.",
      longDescription:
        "JUMP! is a platformer game I created in Grade 11 (2020). In this game, you guide your character through levels, jumping from platform to platform, avoiding enemies, and aiming to reach the star at the top to win. Developed as a school project, JUMP! was my first experience in game development using Python and Pygame. The project taught me a lot about coding and game design. If I were to remake it now, I would improve the code to be cleaner, more precise, and reduce glitches.",
      image: "/pictures/ProjectsSection/jump/jumpPic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/JUMP-game-",
    },
    {
      id: "project3",
      title: "Poetry Website for Paulos Ioannou",
      description:
        "A poetry website showcasing poems with a fully implemented backend, including admin controls for adding, editing, or deleting poems.",
      longDescription: `
        The Poetry Website is designed for poet Paulos L. Ioannou, providing a platform for presenting his works. Users can explore, read, and engage with poetry, while an admin dashboard allows authorized users to manage content.<br>

        *Frontend:<br>
        - Built with React for a dynamic and interactive user interface.<br>
        - Key features include a homepage, poetry list, detailed poem view with English and Greek versions, and an admin dashboard for content management.<br>

        *Backend:<br>
        - Powered by Node.js and Express, the backend handles API requests for poem data and user management.<br>
        - RESTful API for CRUD operations on poems and user data.<br>

        *Deployment:<br>
        - Front-end is hosted on GitHub Pages with a custom domain (paulospoetry.com).<br>
        - Secure user authentication ensures admin-level access for content updates.<br>
      `,
      image: "/pictures/ProjectsSection/poetry/poetryPic.png",
      githubUrl: "https://github.com/Can1Cyp2/poetry-website",
    },
    {
      id: "project4",
      title: "Poetry Site Backend",
      description:
        "A robust backend system developed to support a full-stack poetry platform.",
      longDescription: `
        The Poetry Site Backend serves as the foundation of a full-stack poetry platform, providing seamless integration with the frontend for a rich user experience.<br>
    
        *Core Features:*<br>
        - **CRUD API Endpoints:** Fully functional endpoints to manage poems and user data.<br>
        - **Authentication:** Secure user login and admin-level access for managing poetry content.<br>
        - **Database Management:** Uses MongoDB to store and retrieve poems and user information.<br>
    
        *Technologies Used:*<br>
        - **Node.js and Express:** Build robust and scalable APIs.<br>
        - **MongoDB:** Efficiently handle data storage and retrieval.<br>
    
        *Deployment:*<br>
        - The backend APIs are hosted on a secure server, ensuring reliability and performance.<br>
      `,
      image: "/pictures/ProjectsSection/poetryBackend/poetryBackendPic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/poetry-backend",
    },
    {
      id: "project9",
      title: "Fan Page Website",
      description:
        "A band website built entirely in HTML, showcasing Shinedown's albums, history, and official links.",
      longDescription:
        "This project represents the first website I created in grade 10 using only HTML. It features a comprehensive navigation menu that links to various sections of the site, including band members, show schedules, and a history section. The website also includes album details with cover images and descriptions. Through this project, I learned the basics of HTML, including layout structuring, linking, and basic CSS for styling. It served as a foundational experience in my journey into web development.",
      image: "/pictures/ProjectsSection/fanpage/fanPagePic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/BandWebsite-Shinedown",
    },
    {
      id: "project6",
      title: "BuyEase",
      description:
        "A marketplace platform for university students to buy and sell goods and services within their campus community.",
      longDescription: `
        BuyEase is designed to create a secure, student-centered marketplace that allows university students to buy and sell goods and services. It addresses the challenges of connecting local buyers and sellers and fosters a community-based environment. Key features include a secure marketplace for goods and services, user-friendly UI, and tools for student entrepreneurs to sell their products or services. Built using MongoDB for data storage, Node.js for the back-end, and React for the front-end.<br>
        
        # Motivation:<br>
        The platform helps students save money by purchasing second-hand goods or affordable services. It's a safe and convenient marketplace within the campus, providing a space for student entrepreneurs to thrive.<br>
        
        # Contribution:<br>
        We follow Git Flow branching strategy for code contributions, and track issues and features via Trello. New contributions are always welcome!`,
      image: "/pictures/ProjectsSection/buyEase/BuyEaseLogo.jpg",
      githubUrl: "https://github.com/Can1Cyp2/BuyEase_Project",
    },
    {
      id: "project11",
      title: "WordGuesser",
      description:
        "A game similar to Wordle where you try to guess a 5-letter word.",
      longDescription:
        "WordGuesser is a game inspired by the popular Wordle game. The player must guess a 5-letter word, with feedback provided for each guess. The game tracks the player's remaining guesses and highlights correct and incorrect letters. The game was built using HTML, CSS, and JavaScript, with a focus on creating a simple and fun user interface. This project helped me understand the fundamentals of web development and game logic.",
      image: "/pictures/ProjectsSection/wordGuesser/wordGuessPic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/Word-Guesser",
    },
    {
      id: "project8",
      title: "Sudoku Game",
      description:
        "A Sudoku game with various difficulty levels and a user-friendly interface.",
      longDescription:
        "This Sudoku Game offers a highly interactive and engaging experience for users of all skill levels. Featuring multiple difficulty levels, from beginner to expert, it challenges players to solve puzzles with a sleek and intuitive interface. The game includes hints, auto-check features, and an undo button to enhance the playing experience. Whether you’re a seasoned Sudoku enthusiast or a newcomer to the game, this project provides endless hours of entertainment and mental stimulation.",
      image: "/pictures/ProjectsSection/sudoku/sudokuPic1.png",
      githubUrl: "https://github.com/Can1Cyp2/Sudoku-with-solver",
    },
    {
      id: "project7",
      title: "2048 Recreation",
      description:
        "A mobile version of the classic 2048 game for Android devices.",
      longDescription:
        "The 2048 game is a modern puzzle game designed for Android devices using Android Studio. Players swipe to move tiles on a 4x4 grid, combining those with identical numbers to reach higher values. The game includes features like customizable point goals, a scoreboard, and a high scores menu to track top performances. This project showcases a deep understanding of mobile development, problem-solving, and user interface design.",
      image: "/pictures/ProjectsSection/2048/recreation2048Pic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/2048",
    },
    {
      id: "project10",
      title: "Blob Counting (recursion)",
      description:
        "A C++ program that utilizes recursion to count connected blobs on a grid.",
      longDescription:
        "This C++ program, created during my early high school years while learning recursion, asks the user for the number of rows and columns to generate a grid filled with 'blobs' (*). The user is then prompted to select a position on the grid, and the program checks that position for a blob. If a blob is found, it recursively counts all connected blobs in that area, otherwise, it returns 0. This project was a foundational exercise in understanding recursion and basic grid traversal algorithms in C++.",
      image: "/pictures/ProjectsSection/blob/blobPic.jpg",
      githubUrl: "https://github.com/Can1Cyp2/BlobChecker-Recursion",
    },
    {
      id: "project12",
      title: "University Projects Compilation",
      description:
        "A collection of various university projects showcasing skills in Java and Android development.",
      longDescription: `
        <p>This compilation includes multiple projects completed during my university studies, each demonstrating different aspects of programming and software development. The key projects are:</p>
        
        <p style="margin-top: 2rem;">- <strong>BMI Calculator App:</strong><br>
        An Android application that calculates the Body Mass Index (BMI) based on user input for weight and height. This project helped me learn Android development with Java, including UI components and event handling.</p>
        
        <p style="margin-top: 2rem;">- <strong>Java Control Structures Practice:</strong><br>
        A set of utility methods to practice Java control structures, including loops, conditionals, and method creation. This project reinforced my understanding of algorithms and handling edge cases.</p>
        
        <p style="margin-top: 2rem;">- <strong>Vending Machine Simulation:</strong><br>
        A simulation of a vending machine that manages stock levels and user interactions. Through this project, I learned about class-based structures, state management, and method design.</p>
        
        <p style="margin-top: 2rem;">- <strong>Course Registration System:</strong><br>
        A system that models student course registrations, tracks grades, and generates GPA reports. This project involved designing object-oriented models and managing associations between objects.</p>
        
        <p style="margin-top: 2rem;">- <strong>Utilities for Array Manipulation:</strong><br>
        Utility methods for advanced array operations, such as finding multiples of 3 and flattening 2D arrays. This project enhanced my skills in array manipulation and debugging.</p>
        
        <p style="margin-top: 2rem;">- <strong>Auto Shop Management System:</strong><br>
        A management system for an auto shop, handling operations like adding, selling, and transferring ownership of vehicles. This project taught me about working with collections in Java and enforcing business rules through exception handling.</p>
        
        <p style="margin-top: 2rem;">Each project includes a JUnit test file to ensure the correctness of the implemented logic, solidifying my understanding of unit testing in Java.</p>
      `,
      image:
        "/pictures/ProjectsSection/universityCompilation/gitScreenshot.png",
      githubUrl: "https://github.com/Can1Cyp2/UniversityJavaProjects",
    },
  ];

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft -= 50;
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += 50;
    }
  };

  const startScrolling = (direction: "left" | "right") => {
    stopScrolling();
    scrollInterval.current = setInterval(() => {
      if (direction === "left") {
        scrollLeft();
      } else {
        scrollRight();
      }
    }, 50);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <h2 className="projects-title">
        My Projects
        <span className="projects-subtitle">
          Check out my designated projects page for a more exciting look at my
          work!
        </span>
      </h2>

      <div className="project-gallery" ref={galleryRef}>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            onClick={() =>
              setSelectedProject({
                title: project.title,
                description: project.longDescription || project.description,
                image: project.image,
                githubUrl: project.githubUrl,
                learnMoreLink: project.learnMoreLink,
              })
            }
          />
        ))}
      </div>

      {/* Arrow Buttons for Scrolling */}
      <div
        className="arrow-container arrow-left"
        onMouseDown={() => startScrolling("left")}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
      >
        <svg
          className="arrow"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>
      <div
        className="arrow-container arrow-right"
        onMouseDown={() => startScrolling("right")}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
      >
        <svg
          className="arrow"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </div>

      <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
              position: "relative", // Ensure relative positioning for correct placement
            }}
          >
            {/* Image Container */}
            <div style={{ position: "relative", maxWidth: "50%" }}>
              <img
                src={VITE_BASE_URL + selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />

              {/* GitHub link icon positioned at the top-right of the image */}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl} // Use correct GitHub URL for each project, but for now it only takes you to page
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    fontSize: "1.5rem",
                    color: "#007bff",
                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly opaque background
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer", // Pointer cursor to indicate clickable link
                    zIndex: 10,
                    textDecoration: "none", // Remove the blue underline
                  }}
                >
                  🔗
                </a>
              )}
            </div>

            {/* Project Description */}
            <div
              style={{
                flex: "1",
                maxWidth: "50%",
                textAlign: "left",
                position: "relative",
                padding: "20px",
                paddingTop: "60px", // Push the description text lower
              }}
            >
              <h2
                style={{
                  fontSize: "2.8rem",
                  marginBottom: "40px",
                  textAlign: "center",
                  color: "black",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                <Link
                  to={VITE_BASE_URL + "projects"}
                  className="modal-link"
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e: {
                    currentTarget: { style: { color: string } };
                  }) => {
                    e.currentTarget.style.color = "#007bff"; // Change color on hover
                  }}
                  onMouseLeave={(e: {
                    currentTarget: { style: { color: string } };
                  }) => {
                    e.currentTarget.style.color = "black"; // Revert color on mouse leave
                  }}
                >
                  {selectedProject.title}
                </Link>
              </h2>
              {/* Render the Description */}
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedProject.description.replace(
                    `<span class="voicevault-link">Visit VoiceVault Landing Page</span>`,
                    `<a href="${VITE_BASE_URL}voicevault-users" style="color: rgb(0, 155, 10); text-decoration: underline;" target="_blank">Visit VoiceVault Landing Page</a>`
                  ),
                }}
                style={{
                  fontSize: "1.5rem",
                  color: "#666",
                  lineHeight: "1.8",
                  marginTop: "40px",
                }}
              />
              {/* Add Learn More link if available */}
              {selectedProject?.learnMoreLink && (
                <div
                  style={{
                    marginTop: "2rem",
                    fontSize: "1.5rem",
                    color: "rgb(0, 155, 10)",
                  }}
                >
                  <Link
                    to={selectedProject.learnMoreLink}
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "rgb(0, 155, 10)",
                    }}
                  >
                    Visit VoiceVault Landing Page
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;
