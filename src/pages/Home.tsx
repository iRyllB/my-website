import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />

      <main className="home-content">
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default Home;