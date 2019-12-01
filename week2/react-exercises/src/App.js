import React, { Component, useState } from 'react';
import Friend from "./components/Friend";
import DogGallery from './components2/DogGallery';
import RandomJoke from "./components3/RandomJoke"
import axios from "axios";
import './App.css';




 const App = () => {


  
    return (
      
      <div className="container">
        <Friend/>
        <hr/>
        <DogGallery/>
        <hr/>
        <RandomJoke/>
      </div>
    );
  
}

export default App;