import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapUpdater from "../components/UpdateMapPosition";
import Button from "../components/Button";

const UserPath = () => {
  const [token, setToken] = useState("");
  
  const location = useLocation();
  const { pathData } = location.state || {};

  const { title, distance, waypoints } = pathData;

  const position = waypoints[0];

  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (!sessionToken) {
      navigate("/login");
    } else {
      setToken(sessionToken);
    }
  }, [navigate]);

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Path Details</h1>
      <Button text="Back to paths" onClick={() => handleNavigate()} />

      {title && distance ? (
        <div>
          <div>
            <p>Title: {title}</p>
            <p>Distance: {distance} km</p>
          </div>
          <div className="map">
            <MapContainer
              center={position || [59.3293, 18.0686]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapUpdater route={waypoints} />

              {waypoints.length > 0 && (
                <Marker position={waypoints[0]}>
                  <Popup>Start of the route</Popup>
                </Marker>
              )}

              {waypoints.length > 0 && (
                <Polyline positions={waypoints} color="blue" />
              )}
            </MapContainer>
          </div>
        </div>
      ) : (
        <p>No path data available.</p>
      )}
    </div>
  );
};

export default UserPath;
