import "../styles/About.css";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  "Graphic Design": (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16L14.5 5.5C15.3 4.7 16.6 4.7 17.4 5.5L18.5 6.6C19.3 7.4 19.3 8.7 18.5 9.5L8 20H4V16Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 7L17 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  "Web Development": (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9.5 10L7 12L9.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 10L17 12L14.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "UI / UX Design": (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="16" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M4 17.5C5.5 15.5 7.5 14.5 10 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 17.5C18.5 15.5 16.5 14.5 14 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
};

const offerings = [
  {
    title: "Graphic Design",
    description:
      "Visual systems, brand assets, and polished layouts that make an immediate impression without feeling overworked.",
    tone: "warm",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive interfaces built with maintainable code and a focus on detail across every viewport.",
    tone: "neutral",
  },
  {
    title: "UI / UX Design",
    description:
      "Interfaces shaped around clarity, hierarchy, and flow so users can move through the experience effortlessly.",
    tone: "accent",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-intro">
          <div className="about-copy">
            <p className="about-kicker">What I Do</p>
            <h2 className="about-title">Bold visuals, clear systems, and thoughtful interactions.</h2>
            <p className="about-description">
              I combine visual design, clean engineering, and responsive thinking to build
              websites that feel intentional on every screen size.
            </p>
          </div>

          <div className="about-divider" aria-hidden="true" />
        </div>

        <div className="about-grid">
          {offerings.map((item) => (
            <article className="about-card" key={item.title} data-tone={item.tone}>
              <div className="about-icon" aria-hidden="true">
                {iconMap[item.title]}
              </div>

              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-text">{item.description}</p>

              <span className="about-card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}