import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

  render() {
    const {name,weatherMain,weatherDesc,country,tempMin,tempMax,location,locationSecond} = this.props;
    

    return(
     <div className = "group" style={{border:"1px solid black", margin: "60px 460px",textAlign:"left", paddingLeft:"20px" }}>
       
    <h2 className = "cityName">{name}, {country}</h2> 
    <h4 className="weatherMain" style={{marginBottom:"0px"}} >{weatherMain}</h4>
    <p className="weather" style={{marginTop:"0px"}}>{weatherDesc}</p>
    <p className="card-text">min temp:        {tempMin}</p>
    <p className="card-text">max temp:        {tempMax}</p>
    <p className="card-text">location:        {location}, {locationSecond}</p>
     </div>
    ) 
  }
}


User.prototypes = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
}
export default User;