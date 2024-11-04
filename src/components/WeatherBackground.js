

import React from 'react';
import './WeatherBackground.css';

const WeatherBackground = ({ weatherCondition }) => {
  const getBackgroundClass = () => {
    switch (weatherCondition) {
      case 'Clear':
        return 'clear-sky';
      case 'Clouds':
        return 'cloudy-sky';
      case 'Rain':
      case 'Drizzle':
        return 'rainy-sky';
      case 'Snow':
        return 'snowy-sky';
      case 'Thunderstorm':
        return 'stormy-sky';
      default:
        return '';
    }
  };

  return <div className={`weather-background ${getBackgroundClass()}`}></div>;
};

export default WeatherBackground;