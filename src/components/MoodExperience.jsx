import React, { useState } from 'react';
import '../styles/MoodExperience.css';
import happyIcon from '../assets/happy.svg';
import chillIcon from '../assets/chill.svg';
import motivationIcon from '../assets/motivation.svg';

const moods = [
  { icon: happyIcon, alt: 'Happy', playlist: 'Energetic Pop' },
  { icon: chillIcon, alt: 'Chill', playlist: 'Chill Vibes' },
  { icon: motivationIcon, alt: 'Motivated', playlist: 'Motivation Boost' }
];

const MoodExperience = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-experience">
      <p className="mood-experience__label">MOOD</p>
      <div className="mood-experience__options">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="mood-experience__button"
            onClick={() => setSelectedMood(mood)}
          >
            <img src={mood.icon} alt={mood.alt} className="mood-icon" />
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mood-experience__suggestion">
          <h3>Music Suggestion</h3>
          <p>Recommended playlist: <strong>{selectedMood.playlist}</strong></p>
        </div>
      )}
    </div>
  );
};

export default MoodExperience;