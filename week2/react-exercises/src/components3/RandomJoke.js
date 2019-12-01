import React, {useState, useEffect} from 'react'
import Joke from "./Joke";
import axios from "axios";

 function RandomJoke(props) {
   const [joke, setJoke ] = useState([]);

   
  const getFriend = async () => {
    const result = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
    const user = await result.data ;
    console.log(user)
    return user
  }

    const handleClick = async e =>{
      e.preventDefault();
      const user = await getFriend();
      setJoke([user])
    };
    
  return (
    <div>
   
     { <Joke data = {joke}/> }
     <button onClick={handleClick} >find something!</button>
    </div>
  )
}
export default RandomJoke;
