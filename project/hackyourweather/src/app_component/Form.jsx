import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadWeather}>
        {/* <div>{props.error ? error() : ""}</div> */}
        <div className="row">
          <div className="col-md-3 offset-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn">Search</button>
            <p className={props.text === props.errorMessage ? "err-msg" : "user-msg"}>
      {props.text}
    </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;