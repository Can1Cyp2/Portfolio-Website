import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
      <div style={{ height: headerHeight + "px", opacity: 0 }}></div>
    </>
  );
}
