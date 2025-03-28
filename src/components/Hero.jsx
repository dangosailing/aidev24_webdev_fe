import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';
import runnerImg from '../assets/runner.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${runnerImg})` }}
    >
      {/* 🔲 Overlay direkt i JSX */}
      <div className="hero-overlay" />

      {/* 🔤 Content ovanpå overlay */}
      <div className="hero-content">
        <h1>RunPrepper – Run Smarter</h1>
        <p>Track your runs, set goals, and get motivated – all in one beautiful app.</p>
        <button className="hero-button" onClick={() => navigate('/register')}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;