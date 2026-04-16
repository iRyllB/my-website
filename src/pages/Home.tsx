import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />

      <main className="home-content">
        <Hero />
      </main>

      <Footer />
    </div>
  );
};

export default Home;