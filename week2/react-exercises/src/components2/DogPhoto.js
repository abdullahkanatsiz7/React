import React from 'react'

const DogPhoto = (props) => {
  
  return (
    <div>
      <img width="300" height="300" src={props.data.map(use => use.message) } /> 
    </div>
  )
}
export default DogPhoto;
