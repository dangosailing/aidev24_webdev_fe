import React from 'react';
import '../styles/RunCard.css'; 

const RunCard = ({ date = "N/A", distance = 0, time = 0, mood, title = "Untitled" }) => {
  return (
    <div className="run-card container flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <h3 id="test-runcard-title" className="text-lg">{title}</h3>
        <span className="text-lg">{mood}</span>
      </div>
      <div>
        <p className="text-md"><strong>Distance:</strong> {distance/1000} km</p>
        <p className="text-md"><strong>Last saved time:</strong> {Math.floor(time / 3600)}h {Math.floor((time % 3600) / 60)}m {time % 60}s</p>
      </div>
    </div>
  );
};

export default RunCard;
