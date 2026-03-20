import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <div className="logo">
          <span className="logo-bold">Port</span>folio
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a className="nav-link active">Home</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Portfolio</a>
          <a className="nav-link">Contact</a>
        </nav>

        {/* Button */}
        <button className="cta-btn">
          Let’s Talk
        </button>

      </div>
    </header>
  );
};

export default Header;