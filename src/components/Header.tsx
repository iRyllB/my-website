
import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import HamburgerIcon from "./HamburgerIcon";
import SidePanel from "./SidePanel";


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when side panel is open
  useEffect(() => {
    if (sidePanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidePanelOpen]);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo">
          <span className="logo-accent">I</span>ryllB
        </div>
        {/* Desktop Navigation */}
        <nav className="nav nav--centered">
          <a className="nav-link active">Home</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Portfolio</a>
          <a className="nav-link">Contact</a>
        </nav>
        {/* CTA (desktop) */}
        <button className="cta-btn">Let’s Talk</button>
        {/* Hamburger Icon (mobile only) */}
        <div className="header-hamburger">
          <HamburgerIcon onClick={() => setSidePanelOpen(true)} />
        </div>
      </div>
      {/* Side Panel for Mobile Navigation */}
      <SidePanel open={sidePanelOpen} onClose={() => setSidePanelOpen(false)}>
        <nav className="side-nav">
          <a className="side-nav-link" onClick={() => setSidePanelOpen(false)}>Home</a>
          <a className="side-nav-link" onClick={() => setSidePanelOpen(false)}>About</a>
          <a className="side-nav-link" onClick={() => setSidePanelOpen(false)}>Portfolio</a>
          <a className="side-nav-link" onClick={() => setSidePanelOpen(false)}>Contact</a>
        </nav>
        <button className="cta-btn side-cta" style={{marginTop: 32}} onClick={() => setSidePanelOpen(false)}>Let’s Talk</button>
      </SidePanel>
    </header>
  );
};

export default Header;