import React, { useState } from 'react';
import './App.css';
import Form from './app_component/Form';
import Weather from './app_component/Weather';


const App = () => {
  const [weather, setWeather] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');
  const [city, setCities] = useState('');
  const [trigger, setTrigger] = useState(false);

  const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const getWeather = async () => {
    try {
      const url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
      );

      const response = await url.json();

      const addCity = weather.filter(city => city.id !== response.id) || weather.length === 0;

      setWeather([response, ...addCity]);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleCity = e => {
    setCities(e.target.value);
  };

  const handleSubmit = () => {
    setTrigger(true);
    getWeather();
  };

  function removeCity(id) {
    setWeather(weather.filter(city => city.id !== id));
  }

  return (
    <div className="App">
      <Form loadWeather={weather} change={handleCity} click={handleSubmit} />
      {trigger === true ? <Weather cityValue={weather} delete={removeCity} /> : null}
    </div>
  );
};

export default App;
