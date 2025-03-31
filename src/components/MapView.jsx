import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const MapView = ({ center = [59.3293, 18.0686], zoom = 13 }) => {
  return (
    <div style={{ height: '300px', width: '100%', borderRadius: 8, overflow: 'hidden' }}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <Marker position={center}>
          <Popup>
            You are here! <br /> coordinates: {center[0]}, {center[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;