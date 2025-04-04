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
import RunCard from "../components/RunCard";
import Form from "../components/Form";
import "../styles/UserPath.css";
import { updatePath } from "../services/pathApi";

const UserPath = () => {
  const location = useLocation();
  const { pathData } = location.state || {};

  const [title, setTitle] = useState(pathData["title"]);
  const [distance, setDistance] = useState(pathData["distance"]);
  const [time, setTime] = useState(pathData["time"]);
  const [token, setToken] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [mapStyle, setMapStyle] = useState("detailed");

  const { path_id, waypoints } = pathData;

  const position = waypoints[0];

  const navigate = useNavigate();

  const convertTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = convertTime(time);

  const onSubmit = async (data) => {
    let new_time =
      parseInt(data.timeHrs || 0) * 3600 +
      parseInt(data.timeMin || 0) * 60 +
      parseInt(data.timeSec || 0);
    let new_data = {
      waypoints: waypoints,
      title: data.title,
      time: new_time,
      distance: distance,
    };

    const response = await updatePath(path_id, new_data);
    setTitle(new_data["title"]);
    setTime(new_data["time"]);
    setEditMode(false);
    return response;
  };

  const fields = [
    {
      name: "title",
      label: "New title",
      validation: { required: "A title is required" },
      defaultValue: title,
    },
    {
      name: "timeHrs",
      label: "Update Time (Hours)",
      type: "number",
      validation: {
        required: "Hours are required",
        min: { value: 0, message: "Hours cannot be negative" },
      },
      defaultValue: hours,
    },
    {
      name: "timeMin",
      label: "Update Time (Minutes)",
      type: "number",
      validation: {
        required: "Minutes are required",
        min: { value: 0, message: "Minutes cannot be negative" },
        max: { value: 59, message: "Minutes cannot exceed 59" },
      },
      defaultValue: minutes,
    },
    {
      name: "timeSec",
      label: "Update Time (Seconds)",
      type: "number",
      validation: {
        required: "Seconds are required",
        min: { value: 0, message: "Seconds cannot be negative" },
        max: { value: 59, message: "Seconds cannot exceed 59" },
      },
      defaultValue: seconds,
    },
  ];

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
      <h1 className="page-heading">Path Details</h1>
      {title && distance ? (
        <div>
          <div className="container-paths-buttons">
            <Button text="Back to paths" onClick={() => handleNavigate()} />
            {!editMode && (
              <Button text="Edit" onClick={() => setEditMode(true)} />
            )}
            {editMode && (
              <Button text="Cancel" onClick={() => setEditMode(false)} />
            )}
          </div>
          {!editMode && (
            <div className="run-card-wrapper">
              <RunCard title={title} time={time} distance={distance} />
            </div>
          )}
          {editMode && (
            <div className="path-form-wrapper">
              <Form fields={fields} onSubmit={onSubmit} />
            </div>
          )}

          <div className="container-map-style">
            <Button
              text={"Detailed"}
              onClick={() => setMapStyle("detailed")}
            ></Button>
            <Button
              text={"Simplified"}
              onClick={() => setMapStyle("simple")}
            ></Button>
            <Button
              text={"Dark Mode"}
              onClick={() => setMapStyle("darkmode")}
            ></Button>
          </div>
          <div className="map">
            <MapContainer
              center={position || [59.3293, 18.0686]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "500px", width: "100%" }}
            >
              {mapStyle === "detailed" && (
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              )}
              {mapStyle === "simple" && (
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
              )}
              {mapStyle === "darkmode" && (
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
              )}

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
