import React, {useState, useEffect} from 'react'
import Buttons from "./Buttons";
import DogPhoto from "./DogPhoto";
import axios from "axios";

 function DogGallery(props) {
   const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    const result = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    const user = await result.data ;
    console.log(user)
    return user
  }

      const handleClick = async e =>{
      e.preventDefault();
      const user = await getDogPhoto();
      setDogPhotos([user])
    }; 
    
  return (
    <div>
     <Buttons/>
        {dogPhotos.length>0 ?  <DogPhoto data = {dogPhotos}/> : <h3>Get your first dog by clicking the button!</h3> }
        <button onClick={handleClick} >Get a dog!</button> 
    </div>
  )
}
export default DogGallery;