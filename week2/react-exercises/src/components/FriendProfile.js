import React from 'react'
import result from "./Friend"

 function FriendProfile(props) {
  return (
    <div>
      <ul>
       <li>Name: {props.data.map(use => use.name.first)}</li>
       <li>Surname: {props.data.map(use => use.name.last)}</li>
       <li>Address: {props.data.map(use =>use.location.city)} {props.data.map(use =>use.location.postcode)} {props.data.map(use =>use.location.country)}</li>
       <li>Email: {props.data.map(use =>use.email)}</li>
       <li>Phone: {props.data.map(use =>use.phone)}</li>
     </ul>
    </div>
  )
}
export default FriendProfile;