// src/components/Forecast.js
import React from 'react';
import './Forecast.css'; // Import CSS for styling

const Forecast = ({ data, unit }) => {
  return (
    <div className="forecast-container"> {/* Add a class for styling */}
      {data.map((forecast) => {
        // Calculate the temperature based on the unit
        const temperature = unit === 'metric' 
          ? forecast.main.temp 
          : (forecast.main.temp * 9/5) + 32;

        return (
          <div key={forecast.dt} className="forecast-item"> {/* Add class for each item */}
            <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <p>
              Temperature: {Math.round(temperature)}° {unit === 'metric' ? 'C' : 'F'}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;