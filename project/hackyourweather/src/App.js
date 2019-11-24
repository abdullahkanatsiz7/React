import React, { Component } from 'react';
import User from "./components/User";
import users from "./city-weather.json";
import Name from "./components/Name";
import './App.css';

class App extends Component {
  state = {
    users 
  }

  render() {
    
    return (

      <div  className="container" style={{border:"2px solid lightgrey"}}>
        <h2 style={{textAlign:"center"}}>Weather</h2>
        <section style={{textAlign:"center", paddingBottom:"50px"}} ><Name users = {this.state.users}/></section>
      </div>

    );
  }
}

export default App;
