import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { VITE_BASE_URL } from "../App";

type Props = { enableSticky?: boolean };

export default function Header({ enableSticky = false }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef.current]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      setIsSticky(scrollY > windowHeight);
    };

    if (enableSticky) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const headerPosition = enableSticky && !isSticky ? "absolute" : "fixed";
  const headerTop = enableSticky && !isSticky ? "100vh" : "0";

  return (
    <>
      <header
        ref={headerRef}
        className="header"
        style={{ position: headerPosition, top: headerTop }}
      >
        <div className="header-content">
          <div className="logo">
            <Link to={VITE_BASE_URL}>
              <h1 className="script-logo">Sebastian Landry</h1>
            </Link>
          </div>
          <nav className="nav-links">
            <Link to={VITE_BASE_URL + "experience"}>Experience</Link>
            <span>|</span>
            <Link to={VITE_BASE_URL + "projects"}>Projects</Link>
            <span>|</span>
            <Link to={VITE_BASE_URL + "contact"}>Contact</Link>
          </nav>
        </div>
      </header>
      <div style={{ height: headerHeight + "px", opacity: 0 }}></div>
    </>
  );
}
