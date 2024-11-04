# Weather Forecast App

A React-based web application for displaying current weather information and a 5-day forecast for any city, complete with temperature conversion (Celsius/Fahrenheit) and a map view of the location.

# Features
- **Search by City or Coordinates**: Enter the name of a city to get the current weather and a 5-day forecast.
- **Temperature Conversion**: Toggle between Celsius and Fahrenheit.
- **Map Integration**: View the location of the city on a map.
- **Responsive Design**: Optimized for various screen sizes.
- **Error Handling**: User-friendly error messages for invalid city searches.

# Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yebo7in/WeatherApp.git
   cd weather-forecast-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Replace API key with yours:
   - if you want to, you can replace my API key with yours, or
   - simply use the one in the code, it should run properly
4. Run the application
   ```bash
   npm start
   ```
# About the Project:

## Frameworks and External Libraries Used in the Project
### React:

- Version: The project is built using React, a popular JavaScript library for building user interfaces.
- Purpose: Enables the development of reusable components and efficient state management for creating a dynamic and interactive web application.
### Axios:
- Version: A JavaScript library for making HTTP requests.
- Purpose: Used for fetching data from the OpenWeatherMap API. It simplifies the process of sending requests and handling responses or errors.
### React Leaflet:
- Version: A library that provides a React wrapper for Leaflet.js, which is used for interactive maps.
- Purpose: The Map component utilizes React Leaflet to display the map showing the location of the city for which weather data is searched.
### OpenWeatherMap API:
- Purpose: A third-party service used for fetching real-time weather data and 5-day forecasts.
- API Key: An API key is needed to access the OpenWeatherMap services.
### CSS:
- App.css and component-specific CSS files (e.g., Forecast.css) are used for styling the application.
- Purpose: Provides responsive and visually appealing design.
### React Hooks (useState, useEffect):
- Purpose: Used for state management and side effects. useState manages component states, while useEffect handles re-fetching data when dependencies like unit change.
### JavaScript ES6+ Features:
- Purpose: The project utilizes modern JavaScript features such as arrow functions, template literals, destructuring, and the spread/rest operator for clean and readable code.

## Code organization:
### Project Structure Overview
The project follows a typical React app organization. The main focus is on modular and reusable components, which allows for better scalability and maintainability. Here’s what each main section of the project does:
- **public/**: Contains static assets like index.html, favicon, etc. The index.html file is the template that serves as the entry point for the React app.
- **src/**: Contains all the source code for the React app, including:
     - **components/**: A directory where all reusable components are stored.
     -** App.js**: The main application component where the core logic and structure of the app are combined.
     - **App.css**: The main stylesheet for styling the application.
     - **index.js**: The entry point for React to render the App component into the DOM.
     - **index.css**: Global styles applied across the entire app.
### Explanation of Key Components
- **SearchBar.js**: A form component that handles user input for searching city weather data. It passes the input to a function (fetchWeatherData) from its parent component (App.js).
- **WeatherDisplay.js**: Displays current weather information based on data received from the API. It dynamically shows the temperature in either Celsius or Fahrenheit, depending on the unit state.
- **Forecast.js**: Displays the 5-day weather forecast, allowing the user to see upcoming weather conditions. It receives the unit prop to show temperatures in the correct format.
-** ErrorAlert.js**: Shows an error message when the city search fails or an issue occurs.
- **Map.js**: Integrates map functionality to show the location of the searched city using React Leaflet.
- **App.js**: The main component where state management and API calls are handled. It coordinates data fetching, state updates, and passes down props to child components.
# What's left
## Bug
- There is a bug when user trying to toggle between C° and F°, in the console.log, it shows that user fetched twice the data which will cause the unit transform into a wrong result, I'm still working on it.
- I added effect into the background, but not working properly.
