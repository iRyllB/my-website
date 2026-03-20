import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">CREATIVE_TECH</div>
        <nav>
          <a className="active">Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
        <div className="menu">≡</div>
      </header>

      {/* HERO */}
      <section className="hero">
        <p className="archive">PORTFOLIO ARCHIVE</p>
        <h1>
          The intersection of logic <br />
          and <span>visual poetry.</span>
        </h1>

        <div className="filters">
          <button className="active">ALL</button>
          <button>DESIGN</button>
          <button>DEVELOPMENT</button>
        </div>
      </section>

      {/* GRID */}
      <section className="grid">
        {/* BIG LEFT */}
        <div className="card large">
          <div className="overlay">
            <h3>Neural_OS Interface</h3>
            <p>
              A custom-built design system and dashboard for autonomous edge
              computing units.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="card image">
          <img src="/img1.png" alt="design" />
          <div className="card-text">
            <small>EDITORIAL DESIGN</small>
            <h3>Vortex Monograph</h3>
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="card code">
          <div className="code-box">
            <p>FRAGMENT_04.JS</p>
            <h3>Generative Motion</h3>
          </div>
        </div>

        {/* CENTER GREEN */}
        <div className="card green">
          <div className="circle"></div>
          <p>MINIMAL BRAND DESIGN</p>
        </div>

        {/* RIGHT TEXT */}
        <div className="card text">
          <small>IDENTITY</small>
          <h3>Aura Fintech</h3>
          <p>
            Visual identity for a decentralised banking protocol, focusing on
            transparency and trust.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Interested in a collaboration?</h2>
        <p>
          Currently accepting selected projects for Q3 2024. Let's build
          something technically superior.
        </p>
        <button>GET IN TOUCH</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>CREATIVE_TECH</div>
        <div className="links">
          <a>DRIBBBLE</a>
          <a>GITHUB</a>
          <a>LINKEDIN</a>
        </div>
        <div className="copy">© 2024 CREATIVE TECHNOLOGIST</div>
      </footer>
    </div>
  );
};

export default Home;