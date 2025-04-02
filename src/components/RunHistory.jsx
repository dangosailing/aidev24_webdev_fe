import React from "react";
import { Link } from "react-router-dom";
import '../styles/RunHistory.css'; 

const RunHistory = ({
  runs = [
    "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg=Run+1",
    "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg=Run+2",
    "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg=Run+3",
  ],
}) => {
  return (
    <div className="run-history">
      <div className="run-history__header">
        <h2>Runs</h2>
        <Link to="/user-paths" className="run-history__button">View all</Link>
      </div>
      <div className="run-history__images">
        {runs.map((run, index) => (
          <Link to="/user-paths" key={index}>
            <img
              src={run}
              alt={`Run ${index + 1}`}
              className="run-history__image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RunHistory;
