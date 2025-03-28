import React, { useContext, useState } from "react";
import { newPath } from "../services/pathApi";
import PathContext from "../contexts/PathContextBase";

const GetUserPosition = ({ onPositionUpdate, onRouteUpdate }) => {
  const [loading, setLoading] = useState(false);

  const { distance, setDistance } = useContext(PathContext);

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
    const pathData = {
      starting_point: [coords.lng, coords.lat],
      distance: distance,
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
      <label htmlFor="distance">Distance in km</label>
      <input
        name="distance"
        type="number"
        value={distance / 1000 || 1}
        onChange={(e) => setDistance(e.target.value * 1000)}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default GetUserPosition;
