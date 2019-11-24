import React, { Component } from 'react'
import Hobbies from "./Hobbies";
import PropTypes from 'prop-types';

const HobbyList = () => {
  return (
    <div>
      <Hobbies
    hobbies = {["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]}
    />
    </div>
  )
}

export default HobbyList;