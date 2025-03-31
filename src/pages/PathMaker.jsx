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
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { savePath } from "../services/pathApi";
import UserContext from "../contexts/UserContextBase";

const PathMaker = () => {

  const { setServerMessage } = useContext(UserContext);
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
    setTitle(data.title);
    const pathData = {
      waypoints: route,
      title: data.title,
      distance: distance,
      time: savedTime,
    };
    try {
      const response = await savePath(pathData);
      setServerMessage({ type: "success", text: response.message });
    } catch (error){
      setServerMessage({ type: "failed", text: error.message });
    }
    setLoading(false);
  };

  return (
    <>
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
          <MapUpdater route={route} />

          {route.length > 0 && (
            <Marker position={route[0]}>
              <Popup>Start of the route</Popup>
            </Marker>
          )}

          {route.length > 0 && <Polyline positions={route} color="blue" />}
        </MapContainer>
      </div>

      <GetUserPosition
        onPositionUpdate={setPosition}
        onRouteUpdate={setRoute}
      />

      <Timer />
      {route && route.length > 0 && (
        <div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="title"
            label="Give your route a title"
            register={register}
            registerOptions={{ required: "A title for the route is required" }}
            error={errors.username}
            required
            />
          <Button text={"Save path"} type="submit" />
        </form>
            </div>
      )}
    </>
  );
};

export default PathMaker;
