import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import ErrorAlert from './components/ErrorAlert';
import Map from './components/Map';
import './App.css';

const API_KEY = '9de6a6e35ce5a174862a90133f8c2902'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');
  const [location, setLocation] = useState({ lat: 0, lng: 0 }); 

  const fetchWeatherData = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      setWeatherData(weatherResponse.data);
      setError('');

      const { lat, lon } = weatherResponse.data.coord;
      setLocation({ lat, lng: lon }); 

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      setForecastData(forecastResponse.data.list.slice(0, 5));
    } catch (err) {
      setError('City not found or an error occurred. Please try again.');
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => {
      const newUnit = prevUnit === 'metric' ? 'imperial' : 'metric';
      console.log(`Switched to ${newUnit}`); 
      return newUnit;
    });
  };

 
  useEffect(() => {
    if (weatherData) {      
      fetchWeatherData(weatherData.name); 
    }
  }, [unit]); 

  return (
    <div className="App">
      <h1>Weather Forecast App</h1>
      <SearchBar fetchWeatherData={fetchWeatherData} />
      {error && <ErrorAlert message={error} />}
      {weatherData && <WeatherDisplay data={weatherData} unit={unit} />}
      <button onClick={toggleUnit}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <Map location={location} />
      {forecastData && (
        <>
          <h2>5-Day Forecast</h2>
          <Forecast data={forecastData} unit={unit} />
        </>
      )}
    </div>
  );
}

export default App;