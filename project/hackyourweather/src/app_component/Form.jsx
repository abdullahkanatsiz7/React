import React, { useState } from 'react';
import './form.style.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Weather from './Weather';

const Form = props => {
  return (
    <div className="container h-100">
      <TextField onChange={props.change} id="standard-basic" label="Standard" />

      <Button onClick={props.click} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

export default Form;

/* { <form onSubmit={e => {
  handleSubmit(e);
}}>

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
    <button onclick={e=> handleSubmit(e)} className="btn" value="Search" type="submit">Search</button>
 
{      <p className={props.text === props.errorMessage ? "err-msg" : "user-msg"}>
{props.text}
</p> }
  </div>
</div>
</form> } */
