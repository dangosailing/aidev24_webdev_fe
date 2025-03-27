import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import RunCard from '../components/RunCard';
import MoodExperience from '../components/MoodExperience'; // 🔧 Lagt till igen

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <div style={{ height: '400px', width: '100%', marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}>
        <MapContainer center={[59.3293, 18.0686]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[59.3293, 18.0686]}>
            <Popup>
              Du är här! <br /> Stockholm
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <MoodExperience /> {/* 🔧 Lagt tillbaka */}

      <div style={{ marginTop: '20px' }}>
        <RunCard
          date="27 mars 2025"
          distance={5.2}
          time={31}
          mood="😊"
        />
      </div>
    </div>
  );
}

export default Home;