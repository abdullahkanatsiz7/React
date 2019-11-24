import React, { Component } from 'react'
import User from './User';
import PropTypes from 'prop-types';


class Name extends Component {
  render() {
    const {users} = this.props;
 

    return (
      <div>
        {
          users.map(user => {
            return(
              <User
                
                 name = {user.name}
                 country = {user.sys.country}
                 weatherMain = {user.weather.map(detail=>detail.main)}
                 weatherDesc = {user.weather.map(detail=>detail.description)}
                 tempMin = {user.main.temp_min}
                 tempMax = {user.main.temp_max}
                 location = {user.coord.lat} 
                 locationSecond = {user.coord.lon}    
              />
            )
          })
        }
      </div>
    )
  }
}
Name.propTypes = {
  users: PropTypes.array.isRequired,
}
export default Name;