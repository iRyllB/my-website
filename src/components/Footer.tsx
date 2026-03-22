import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* LEFT COLUMN */}
          <div className="footer-brand">
            <h2 className="footer-logo">Portfolio</h2>
            <p className="footer-text">
              Design Wiz is a boutique digital agency specialized in
              creating high-impact brand identities and web solutions
              for forward-thinking companies.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer-nav">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-list">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="footer-connect">
            <h5 className="footer-heading">Connect</h5>
            <div className="footer-socials">
              <div className="social-circle"></div>
              <div className="social-circle"></div>
              <div className="social-circle"></div>
            </div>
          </div>

        </div>

        {/* BOTTOM BORDER + ROW */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 DESIGN WIZ. CRAFTED WITH KINETIC PRECISION.
          </p>

          <a href="#top" className="footer-back">
            BACK TO TOP
            <span className="arrow"></span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;