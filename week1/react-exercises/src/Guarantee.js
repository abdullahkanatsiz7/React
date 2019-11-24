import React from 'react'

 function Guarantee(props) {
  return (
    <div className="flex">
      <img className="guarantee-image" src={props.image} />
      <div className="guarantee-title">{props.title}</div>
      <div className="guarantee-desc">{props.description}</div>

    </div>
  )
}


export default Guarantee;