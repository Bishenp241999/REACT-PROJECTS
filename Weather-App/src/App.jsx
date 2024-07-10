import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState(null);
  const apiKey = 'YOUR_API_KEY_FROM_OPENWEATHERMAP_API';

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      alert('Geolocation is not available');
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setWeather(data)
        })
        .catch(error => console.error('Error fetching the weather data:', error));
    }
  }, [latitude, longitude, apiKey]);

  function getWeatherCondition(code) {
    if (code >= 200 && code < 300) return 'Thunderstorm';
    if (code >= 300 && code < 400) return 'Drizzle';
    if (code >= 500 && code < 600) return 'Rain';
    if (code >= 600 && code < 700) return 'Snow';
    if (code >= 700 && code < 800) return 'Atmosphere';
    if (code === 800) return 'Clear';
    if (code > 800 && code < 900) return 'Clouds';
    return 'Unknown';
  }


  return (
    <div className="app">
      <h1>Weather App</h1>
      {weather ? (
        <div className="weather-info">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Icon Code: {weather.weather[0].icon}</p>
          <h2>{weather.name}</h2>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Conditions: {weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition Code: {getWeatherCondition(weather.weather[0].id)}</p>
          <p>To know more about Icon and Condition Code <a href='https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2'>Click Here</a></p>

        </div>
      ) : (
        <p>Loading weather information...</p>
      )}
    </div>
  );
}

export default App;

