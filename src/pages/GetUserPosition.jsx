import React, { useState } from 'react';
import { newPath } from '../services/pathApi';


const GetUserPosition = () => {
  const [location, setLocation] = useState("");
  const [distanceKm, setDistanceKm] = useState(1);
  const [coordinates, setCoordinates] = useState(null);
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (location) {
      fetchCoordinates(location);
    }
  };

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
        setCoordinates(coords);
        await sendCoordinatesToBackend(coords);
        setLoading(false);
      },
      (error) => {
        alert("Could not get location: " + error.message);
        setLoading(false);
      }
    );
  };

  const fetchCoordinates = async (location) => {
    setLoading(true);
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: location }, async (results, status) => {
      if (status === "OK" && results[0]) {
        const coords = results[0].geometry.location;
        setCoordinates({
          lat: coords.lat(),
          lng: coords.lng(),
        });
        await sendCoordinatesToBackend({
          lat: coords.lat(),
          lng: coords.lng(),
        });
      } else {
        alert("Could not find location");
      }
      setLoading(false);
    });
  };

  const sendCoordinatesToBackend = async (coords) => {
    const distanceMeters = distanceKm * 1000;
    const pathData = {
      starting_point: [coords.lng, coords.lat],
      distance: distanceMeters,
    };
    try {
      const result = await newPath(pathData);
      setRoute(result);
    } catch (error) {
      console.log("Error getting path", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleManualSubmit}>
        <input
          type="text"
          placeholder="Start Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get my route</button>
      </form>
      <button onClick={handleCurrentLocation}>Use my current location</button>
      <input
        type="number"
        placeholder="Distance in km"
        value={distanceKm}
        onChange={(e) => setDistanceKm(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        coordinates && <p>Lat: {coordinates.lat}, Lng: {coordinates.lng}</p>
      )}

      {route && <p>Route: {JSON.stringify(route.path)}</p>}
    </div>
  );
};

export default GetUserPosition;
