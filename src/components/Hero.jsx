import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
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