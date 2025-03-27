import React, { useState } from 'react';
import { newPath } from '../services/pathApi';

const GetUserPosition = ({ onPositionUpdate, onRouteUpdate }) => {
  const [distanceKm, setDistanceKm] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported for your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(coords)
        onPositionUpdate([coords.lng, coords.lat]);
        await sendCoordinatesToBackend(coords);
        setLoading(false);
      },
      (error) => {
        alert("Could not get location: " + error.message);
        setLoading(false);
      }
    );
  };

  const sendCoordinatesToBackend = async (coords) => {
    const distanceMeters = distanceKm * 1000;
    const pathData = {
      starting_point: [coords.lng, coords.lat],
      distance: distanceMeters,
    };

    try {
      const result = await newPath(pathData);
      if (result.path) {
        onRouteUpdate(result.path);
      }
    } catch (error) {
      console.log("Error getting path", error);
    }
  };

  return (
    <div>
      <button onClick={handleCurrentLocation}>Use my current location</button>
      <input
        type="number"
        placeholder="Distance in km"
        value={distanceKm}
        onChange={(e) => setDistanceKm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default GetUserPosition;
