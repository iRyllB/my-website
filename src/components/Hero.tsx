import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            I craft digital <br />
            experiences <br />
            that leave a
          </h1>

          <h1 className="hero-highlight">mark</h1>

          <p className="hero-description">
            Blending precision design with seamless code to
            build the future of visual storytelling.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">VIEW MY WORK</button>
            <button className="btn-secondary">GET IN TOUCH</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <div className="circle-glow"></div>
        </div>

      </div>
    </section>
  );
}