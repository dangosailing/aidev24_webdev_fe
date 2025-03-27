import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import GetUserPosition from '../components/GetUserPosition';



const PathMaker = () => {
    const [position, setPosition] = useState(null);
    const [route, setRoute] = useState([]);
    
    const [token, setToken] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (!sessionToken) {
      navigate("/login");
    } else {
      setToken(sessionToken);
    }
  }, [navigate]);

    return (
      <>
        <div className="map">
          <MapContainer center={position || [59.3293, 18.0686]} zoom={13} scrollWheelZoom={true} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
  
            {position && (
              <Marker position={position}>
                <Popup>Your position</Popup>
              </Marker>
            )}
  
            {route.length > 0 && <Polyline positions={route} color="blue" />}
          </MapContainer>
        </div>
  
        <GetUserPosition onPositionUpdate={setPosition} onRouteUpdate={setRoute} />
      </>
    );
  };

export default PathMaker