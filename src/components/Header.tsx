import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo">
          <span className="logo-accent">Port</span>folio
        </div>
        {/* Navigation - centered selections */}
        <nav className="nav nav--centered">
          <a className="nav-link active">Home</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Portfolio</a>
          <a className="nav-link">Contact</a>
        </nav>
        {/* CTA */}
        <button className="cta-btn">
          Let’s Talk
        </button>
      </div>
    </header>
  );
};

export default Header;