import React, {useState} from "react";
import "./App.css";
import Form from "./app_component/Form";
import Weather from "./app_component/Weather";



const App = () => {
  
    const [weather, setWeather] = useState([]);
    const[loading, setLoading] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const getWeather = async city => {
   
    try{
      if (city.length === 0) {
        return;
      }
      const url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        
        const response = await url.json();
        console.log(response);
        

        const addCity = weather.filter(city => city.id !== response.id) || weather.length === 0;
        console.log('addCity:', addCity);
          setWeather([response, ...addCity]);
        setLoading('success');
    }catch(err) {
      setLoading('err')
      setErrorMessage(err.message)
    }
  }

    const removeCity = id => {
      setWeather(weather.filter(city => city.id === !id));
    }
   
    return (
      <div className="App">
        {loading === 'loading' && <h1>Loading</h1>}
        {loading === 'err' && <h1>{errorMessage}</h1>}
        <Form loadWeather={getWeather}/>
        {
        weather.map(city => (
           <Weather cityRemove={id => {removeCity(id);}} 
            city={city}
          />
        ))}
      </div>
    );
  }

export default App;
