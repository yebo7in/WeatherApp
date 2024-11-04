import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; 

delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), 
  iconUrl: require('leaflet/dist/images/marker-icon.png'), 
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
});

const CenteredMap = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location.lat && location.lng) {
      map.setView([location.lat, location.lng], 13); 
    }
  }, [location, map]);

  return null;
};

const Map = ({ location }) => {
  return (
    <MapContainer center={[location.lat || 0, location.lng || 0]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {location.lat && location.lng && (
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            Weather data for this location.
          </Popup>
        </Marker>
      )}
      <CenteredMap location={location} />
    </MapContainer>
  );
};

export default Map;
