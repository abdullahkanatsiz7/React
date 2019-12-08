import React from "react";
import "./weather.style.css";

const Weather = props => {
  const { name, sys, weather, main, coord, id } = props.city;

  const celcius = temp => {
  const celc = temp - 273.15;
      return Math.round(celc);
  }
  
  return (
    <div className = "group" style={{border:"1px solid black", margin: "60px 460px",textAlign:"left", paddingLeft:"20px" }}>
     <button className="click" onClick={() => props.cityRemove(id)}> <i className="fa fa-times"  ></i> </button>
     <h2 className = "cityName">{name}, {sys.country}</h2> 
     <h4 className="weatherMain" style={{marginBottom:"0px"}} >{weather[0].main}</h4>
     <p className="weather" style={{marginTop:"0px"}}>{weather[0].description}</p>
     <p className="card-text">min temp:        {celcius(main.temp_min)}</p>
     <p className="card-text">max temp:        {celcius(main.temp_max)}</p>
     <p className="card-text">location:        {coord.lat}, {coord.lon}</p>
    </div>
  );
};

export default Weather;
