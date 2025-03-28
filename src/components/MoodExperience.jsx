import React, { useState } from 'react';
import '../styles/MoodExperience.css';

const moods = ['😊', '😐', '😩'];

const moodToPlaylist = {
  '😊': 'Energetic Pop',
  '😐': 'Chill Vibes',
  '😩': 'Motivation Boost'
};

const MoodExperience = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const playlist = selectedMood ? moodToPlaylist[selectedMood] : null;

  return (
    <div className="mood-experience">
      <p className="mood-experience__label">MOOD</p>
      <div className="mood-experience__options">
        {moods.map((mood) => (
          <button
            key={mood}
            className="mood-experience__button"
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>

      {playlist && (
        <div className="mood-experience__suggestion">
          <h3>Music Suggestion</h3>
          <p>Recomended playlist: <strong>{playlist}</strong></p>
        </div>
      )}
    </div>
  );
};

export default MoodExperience;