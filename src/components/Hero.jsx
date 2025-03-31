import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(https://placehold.co/600x400)` }}
    >
      <div className="hero-overlay" />

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