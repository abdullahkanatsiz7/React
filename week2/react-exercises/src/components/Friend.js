import React, {useState, useEffect} from 'react'
import Button from "./Button";
import FriendProfile from "./FriendProfile";
import axios from "axios";

 function Friend(props) {
   //const title = props.user.Gender;
   //console.log(props.data[0])
   const [friend, setFriend] = useState({});

  const getFriend = async () => {
    const result = await axios.get(`https://www.randomuser.me/api?results=1`);
    const user = await result.data ;
    return user.results[0]
  }

    const handleClick = async e =>{
      e.preventDefault();
      const user = await getFriend();
      setFriend([user])
    };
    
  return (
    <div>
     <Button />
     {friend.length>0 ?  <FriendProfile data = {friend}/> : <h3>loading...</h3> }
     <button onClick={handleClick} >Get a friend!</button>
    </div>
  )
}
export default Friend;

  //const {first, last, country, postcode} = friend;