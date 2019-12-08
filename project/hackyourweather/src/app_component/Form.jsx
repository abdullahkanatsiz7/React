import React, { useState } from "react";
import "./form.style.css";

const Form = props => {

  const [city, setCities] = useState('');
  const handleCity = e => {
    setCities(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    city && props.loadWeather(city);
  };

  return (
    <div className="container h-100">
      <form onSubmit={e => {
          handleSubmit(e);
        }}>
        {/* <div>{props.error ? error() : ""}</div> */}
        <div className="row">
          <div className="col-md-3 offset-md-4">
            <input
              type="search"
              className="form-control"
              placeholder="Search City"
              name="city"
              autoComplete="off"
              onChange={e => handleCity(e)}
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn" value="Search" type="submit">Search</button>
         
       {      <p className={props.text === props.errorMessage ? "err-msg" : "user-msg"}>
      {props.text}
    </p> }
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;