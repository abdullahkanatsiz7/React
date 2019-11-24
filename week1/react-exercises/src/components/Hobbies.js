import React, { Component } from 'react'


function Hobbies(props) {
  return (
    <div>
      <ul style={{listStyle:"none"}}>
        {props.hobbies.map(hobby => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

 

export default Hobbies;