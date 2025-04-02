import React, { useContext, useState } from "react";
import { newPath } from "../services/pathApi";
import PathContext from "../contexts/PathContextBase";
import Button from "./Button";
import Loading from "./Loading";
import "../styles/GetUserPosition.css";

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
      setServerMessage({
        type: "failed",
        text: error.response?.data?.error || "Error getting path!",
      });
    }
  };

  return (
    <div className="container-user-position">
      {!loading && (
        <div className="container-set-distance">
          <label htmlFor="distance">Distance in km</label>
          <input
            className="primary-user-input"
            name="distance"
            type="number"
            value={distance / 1000 || 1}
            onChange={(e) => setDistance(e.target.value * 1000)}
          />
          <Button
            text="Use my current location"
            onClick={handleCurrentLocation}
          ></Button>
        </div>
      )}
      {loading && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default GetUserPosition;
