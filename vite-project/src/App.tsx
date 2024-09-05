import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitlePage from "./components/TitlePage";
import ProjectsSection from "./components/ProjectsSection";
import ContactPage from "./contactPage/ContactPage";
import Header from "./components/Header";
import MyExperiencePage from "./ExperiencePage/ExperiencePage";
import AboutMe from "./sections/AboutMe";
import Footer from "./components/Footer";
import ProjectsPage from "./Projects Page/ProjectsPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* The Header is placed here so that it appears on all pages */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TitlePage />
                <ProjectsSection />
                <AboutMe />
              </>
            }
          />
          <Route path="/experience" element={<MyExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer /> {/* Footer remains at the bottom of every page */}
      </div>
    </Router>
  );
};

export default App;
