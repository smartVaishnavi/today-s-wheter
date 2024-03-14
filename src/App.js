import React, { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description';
import { getFormattedWeatherData } from './weatherService';

import wether4Bg from './assets/wether4.jpg';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Mumbai'); // Default city

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getFormattedWeatherData(city);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]); // Fetch data when city changes

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${wether4Bg})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input
              type="text"
              name="city"
              placeholder='Enter city.'
              value={city}
              onChange={handleCityChange}
            />
            <button onClick={() => setCity(city)}>Get Weather</button>
          </div>
          <div className='section section__temperature'>
            <div className='icon'>
              <h3>{weatherData ? `${weatherData.city}, ${weatherData.country}` : 'Loading...'}</h3>
              <img src="https://cdn-icons-png.flaticon.com/128/3845/3845731.png "alt="Weather Icon" />
              <h3>{weatherData ? weatherData.description : ''}</h3>
            </div>
            <div className='temperature'>
              <h1>{weatherData ? `${weatherData.temperature}°C` : 'Loading...'}</h1>
            </div>
          </div>
          {/* Description */}
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
