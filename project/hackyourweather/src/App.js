import React, {useState} from "react";
import "./App.css";
import Form from "./app_component/Form";
import Weather from "./app_component/Weather";

const Api_Key = "6ff788371a9241fdfa09bc81cc2f3a8f";

const App = () => {
  
    const [weather, setWeather] = useState({});
    const[loading, setLoading] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

  const getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    try{
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
        const response = await api_call.json();
        setWeather(response);
        setLoading('success');
      
    }catch(err) {
      setLoading('err')
      setErrorMessage(err.message)
    }
  }
    return (
      <div className="App">
        {loading === 'loading' && <h1>Loading</h1>}
        {loading === 'err' && <h1>{errorMessage}</h1>}
        <Form loadWeather={getWeather}/>
        {loading === 'success' && <Weather city = {weather}/>}
      </div>
    );
  }

export default App;
