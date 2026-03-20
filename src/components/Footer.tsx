import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">
            <span>Port</span>folio
          </h2>
          <p className="footer-description">
            Crafting digital experiences through graphic design and web
            development. Let's build something remarkable together.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-nav">
          <h4>NAVIGATION</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>

        {/* Right Section */}
        <div className="footer-social-copyright">
          <div className="footer-social">
            <h4>CONNECT</h4>
            <div className="social-icons">
              <div className="icon"><FaGithub /></div>
              <div className="icon"><FaLinkedinIn /></div>
              <div className="icon"><FaTwitter /></div>
              <div className="icon"><FaInstagram /></div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2026 Portfolio. All rights reserved.</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Designed & Developed with passion</p>
      </div>
    </footer>
  );
};

export default Footer;