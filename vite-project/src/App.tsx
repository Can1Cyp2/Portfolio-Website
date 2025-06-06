import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitlePage from "./components/TitlePage";
import ProjectsSection from "./components/ProjectsSection";
import ContactPage from "./contactPage/ContactPage";
import MyExperiencePage from "./ExperiencePage/ExperiencePage";
import AboutMe from "./sections/AboutMe";
import Footer from "./components/Footer";
import ProjectsPage from "./Projects Page/ProjectsPage";
import "./index.css";

import VoiceVaultUsers from "./VoiceVault/VoiceVaultUsers"; // Importing the VoiceVaultUsers component

export const VITE_BASE_URL = "/Portfolio-Website/";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path={VITE_BASE_URL}
            element={
              <>
                <TitlePage />
                <ProjectsSection />
                <AboutMe />
              </>
            }
          />
          <Route
            path={VITE_BASE_URL + "experience"}
            element={<MyExperiencePage />} // Experience Page
          />
          <Route path={VITE_BASE_URL + "contact"} element={<ContactPage />} />{" "}
          {/* Contact Page */}
          <Route
            path={VITE_BASE_URL + "projects"}
            element={<ProjectsPage />}
          />{" "}
          {/* Projects Page */}
          <Route
            path={VITE_BASE_URL + "voicevault-users"}
            element={<VoiceVaultUsers />}
          />
          {/* 404 fallback page (keep user on the same page if direct link fails) */}
          <Route path="*" element={<TitlePage />} />
        </Routes>
        <Footer /> {/* Footer remains at the bottom of every page */}
      </div>
    </Router>
  );
};

export default App;
