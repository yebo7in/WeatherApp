
import React from 'react';
import './Forecast.css'; 

const Forecast = ({ data, unit }) => {
  return (
    <div className="forecast-container"> {}
      {data.map((forecast) => {
        
        const temperature = unit === 'metric' 
          ? forecast.main.temp 
          : (forecast.main.temp * 9/5) + 32;

        return (
          <div key={forecast.dt} className="forecast-item"> {}
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
