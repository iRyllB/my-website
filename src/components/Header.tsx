import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-highlight">Port</span>folio
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>

        {/* CTA Button */}
        <button className="cta-button">Let’s Talk</button>
      </div>
    </header>
  );
};

export default Header;