import React from "react";
import "./weather.style.css";

const Weather = props => {
  
  return (
    <div className = "group" style={{border:"1px solid black", margin: "60px 460px",textAlign:"left", paddingLeft:"20px" }}>
     <h2 className = "cityName">{props.city.name}, {props.city.sys.country}</h2> 
     <h4 className="weatherMain" style={{marginBottom:"0px"}} >{props.city.weather[0].main}</h4>
     <p className="weather" style={{marginTop:"0px"}}>{props.city.weather[0].description}</p>
     <p className="card-text">min temp:        {props.city.main.temp_min}</p>
     <p className="card-text">max temp:        {props.city.main.temp_max}</p>
     <p className="card-text">location:        {props.city.coord.lat}, {props.city.coord.lon}</p>
    </div>
  );
};

export default Weather;
