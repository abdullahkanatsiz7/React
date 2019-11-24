import React, { Component } from 'react'
import Hobbies from "./components/Hobbies";
import HobbyList from "./components/HobbyList";
import f_delivery from './assets/exercises/f-delivery.png';
import coin from './assets/exercises/coin.png';
import chat from './assets/exercises/chat.png';
import Guarantee from "./Guarantee";
import Counter from "./exercise3";
import logo from './logo.svg';
import './App.css';
import Example from './exercise3';



class App extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h2>Exercise 1 : Extreme hobbies</h2>
        <HobbyList/>
        <hr/>
        <h2>Exercise 2</h2>
        <div className="Guarantee">
        <Guarantee 
        image={f_delivery}
        title = "Free shipping"
        description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
         <Guarantee 
        image = {coin}
        title = "100% Money back"
        description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
         <Guarantee 
        image = {chat}
        title = "Online support 24/7"
        description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
         <hr/>
         <h2>Exercise 3</h2>
      <Counter/>
      </div>
    )
  }
}

export default App;
