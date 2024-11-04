// src/components/MapDisplay.js

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapDisplay = ({ latitude, longitude, onMapClick }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], mapRef.current.getZoom()); // Center the map to the new coordinates
    }
  }, [latitude, longitude]); // Effect runs whenever latitude or longitude changes

  const handleMapClick = (event) => {
    onMapClick(event); // Call the onMapClick function passed as prop
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      onClick={handleMapClick}
      ref={mapRef} // Set ref to the MapContainer
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Current location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapDisplay;