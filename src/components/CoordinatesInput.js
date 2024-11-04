// src/components/CoordinatesInput.js
import React, { useState } from 'react';

const CoordinatesInput = ({ fetchWeatherData }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (latitude && longitude) {
      fetchWeatherData({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
      setLatitude('');
      setLongitude('');
    } else {
      alert('Please enter both latitude and longitude.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={latitude} 
        onChange={(e) => setLatitude(e.target.value)} 
        placeholder="Enter latitude" 
        required 
      />
      <input 
        type="number" 
        value={longitude} 
        onChange={(e) => setLongitude(e.target.value)} 
        placeholder="Enter longitude" 
        required 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CoordinatesInput;