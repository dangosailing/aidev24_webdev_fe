import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PathContext from "../contexts/PathContextBase";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GetUserPosition from "../components/GetUserPosition";
import Timer from "../components/Timer";
import MapUpdater from "../components/UpdateMapPosition";
import { savePath } from "../services/pathApi";
import Form from "../components/Form";
import Loading from "../components/Loading"
import "../styles/PathMaker.css";

const PathMaker = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    setTitle,
    distance,
    route,
    setRoute,
    position,
    setPosition,
    savedTime,
  } = useContext(PathContext);

  const fields = [
    {
      name: "title",
      label: "Path Title",
      validation: { required: "A title is required" },
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (!sessionToken) {
      navigate("/login");
    } else {
      setToken(sessionToken);
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    setLoading(true);
    const pathData = {
      waypoints: route,
      title: data.title,
      distance: distance,
      time: savedTime,
    };
    const response = await savePath(pathData);
    setTitle(data.title);
    setLoading(false);
    return response
  };

  return (
    <div className="container">
      <div className="pathmaker-grid">
        <div className="map">
          <MapContainer
            center={position || [59.4058093, 17.9478554]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "500px", width: "100%", borderRadius: "8px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater route={route} />

            {route.length > 0 && (
              <Marker position={route[0]}>
                <Popup>Start of the route</Popup>
              </Marker>
            )}

            {route.length > 0 && <Polyline positions={route} color="blue" />}
          </MapContainer>
        </div>
        { !loading && (
        <div className="container-position-save">
          <GetUserPosition
            onPositionUpdate={setPosition}
            onRouteUpdate={setRoute}
          />
          {route && route.length > 0 && (
              <Form fields={fields} onSubmit={onSubmit} buttonText="Save path"/>
            
          )}
        </div>)
        }
        {loading &&
        <Loading />        }

        <Timer />
      </div>
    </div>
  );
};

export default PathMaker;
