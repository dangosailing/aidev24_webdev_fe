import React from 'react'
import { Helmet } from 'react-helmet';
import '../styles/base.css';
import Hero from '../components/Hero';
import ImageTextSection from "../components/ImageTextSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RunPrepper – Your Personal Running Companion for Goals, Motivation & Progress</title>
        <meta name="description" content="Discover RunPrepper – the smart running app designed to track your runs, set personal goals, and keep your motivation high. Perfect for beginners and pros alike." />
      </Helmet>
      <Hero />
      <div className="container">
        
        <ImageTextSection
          image={`https://images.unsplash.com/photo-1509833903111-9cb142f644e4?q=80&w=2907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          title="Push Your Limits"
          text="Track every step, every mood, and every victory. RunPrepper supports your growth — one run at a time."
        />

        <section className="intro-section" style={{ marginTop: '40px' }}>
          <h1>Welcome to RunPrepper</h1>
          <p>
            RunPrepper is your all-in-one running companion designed to help you stay motivated, track your progress, and build healthy habits. Whether you're training for your first 5K or working toward a marathon, RunPrepper supports your personal journey — step by step.
          </p>

          <h2>What RunPrepper Offers</h2>
          <ul>
            <li><strong>Track Your Runs:</strong> Log distance, time, mood, and more.</li>
            <li><strong>Goal Setting:</strong> Set weekly or monthly goals and stay accountable.</li>
            <li><strong>Map Visualization:</strong> View your running routes in real-time.</li>
            <li><strong>Mood & Music Integration:</strong> Select your mood and get music suggestions tailored to how you feel.</li>
            <li><strong>Motivation Over Time:</strong> Keep a visual history of your runs and mood trends.</li>
          </ul>

          <h2>Start Running Smarter</h2>
          <p>
            RunPrepper makes running simple, joyful, and data-driven. Built with love for runners of all levels. Ready to hit the road? Start your next run with RunPrepper.
          </p>
        </section>
        
        <ImageTextSection
          image={`https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          title="Start Running Smarter"
          text="RunPrepper makes running simple, joyful, and data-driven. Built with love for runners of all levels. Ready to hit the road? Start your next run with RunPrepper."
        />
        
        <section className="cta-section">
          <h2>Ready to run smarter?</h2>
          <button className="btn btn-primary" onClick={() => window.location.href = '/register'}>Get Started</button>
        </section>
      </div>
    </>
  );
}

export default Home;