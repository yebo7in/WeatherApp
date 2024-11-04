import React, { useState } from 'react';

const SearchBar = ({ fetchWeatherData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter city name" 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;