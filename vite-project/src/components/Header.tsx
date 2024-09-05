import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const titlePageHeight =
        document.getElementById("title-page")?.clientHeight || 0;

      if (window.scrollY > titlePageHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Apply the sticky effect only on the home page
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <>
      <header ref={headerRef} className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>Your Logo</h1>
            </Link>
          </div>
          <nav className="nav-links">
            <Link to="/experience">Experience</Link>
            <span>|</span>
            <Link to="/projects">Projects</Link>
            <span>|</span>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <div
        style={{ height: isSticky ? headerRef.current?.clientHeight : 0 }}
      ></div>
    </>
  );
};

export default Header;
