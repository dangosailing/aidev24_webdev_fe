import React from 'react'
import { Helmet } from 'react-helmet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import RunCard from '../components/RunCard';
import MoodExperience from '../components/MoodExperience'; 
import Hero from '../components/Hero';
import ImageTextSection from "../components/ImageTextSection";
//import energyImage from "../assets/energy.jpg";
import '../styles/base.css';
import DeleteUserButton from '../components/DeleteUserButton';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RunPrepper – Your Personal Running Companion for Goals, Motivation & Progress</title>
        <meta name="description" content="Discover RunPrepper – the smart running app designed to track your runs, set personal goals, and keep your motivation high. Perfect for beginners and pros alike." />
      </Helmet>
      <Hero />
      <div className="container">
        <h2>Home</h2>
        <div style={{ height: '400px', width: '100%', marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}>
          <MapContainer center={[59.3293, 18.0686]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[59.3293, 18.0686]}>
              <Popup>
                Du är här! <br /> Stockholm
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <ImageTextSection
          image={`url(https://placehold.co/600x400)`}
          title="Push Your Limits"
          text="Track every step, every mood, and every victory. RunPrepper supports your growth — one run at a time."
        />
        
        <MoodExperience />

        <div style={{ marginTop: '20px' }}>
          <RunCard
            date="27 mars 2025"
            distance={5.2}
            time={31}
            mood="😊"
          />
        </div>

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
      </div>
    </>
  );
}

export default Home;