import React from 'react';

const WeatherDisplay = ({ data, unit }) => {
  // Calculate temperature based on the unit
  const temperatureC = data.main.temp; // Temperature in Celsius
  const temperatureF = (temperatureC * 9 / 5) + 32; // Convert to Fahrenheit

  return (
    <div>
      <h2>{data.name}</h2>
      <p>
        Temperature: {Math.round(unit === 'metric' ? temperatureC : temperatureF)}° {unit === 'metric' ? 'C' : 'F'}
      </p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
    </div>
  );
};

export default WeatherDisplay;