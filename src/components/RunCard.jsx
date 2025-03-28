import React from 'react';
import '../styles/RunCard.css'; 

const RunCard = ({ date, distance, time, mood }) => {
  return (
    <div className="run-card container flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <h3 className="text-lg">{date}</h3>
        <span className="text-lg">{mood}</span>
      </div>
      <div>
        <p className="text-md"><strong>Distans:</strong> {distance} km</p>
        <p className="text-md"><strong>Tid:</strong> {time} min</p>
      </div>
    </div>
  );
};

export default RunCard;
