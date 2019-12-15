import React from 'react';
import './weather.style.css';
import Example from './RechartDay';
import ExampleHourly from './RechartHourly';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Weather = props => {
  console.log(props.cityValue);

  return (
    <div>
      {props.cityValue.map((city, index) => {
        function deleteCity() {
          props.delete(city.id);
        }

        const Home = () => {
          const celcius = temp => {
            const celc = temp - 273.15;
            return Math.round(celc);
          };
          return (
            <div
              className="group"
              style={{
                border: '1px solid black',
                margin: '60px 460px',
                textAlign: 'left',
                paddingLeft: '20px',
              }}
            >
              <button className="click" onClick={deleteCity}>
                <i className="fa fa-times"></i>
              </button>
              <Link to={'/'}>
                <button className="but">Back</button>
              </Link>
              <h2 className="cityName">
                {city.name}, {city.sys.country}
              </h2>

              <h4 className="weatherMain" style={{ marginBottom: '0px' }}>
                {city.weather[0].main}
              </h4>
              <p className="weather" style={{ marginTop: '0px' }}>
                {city.weather[0].description}
              </p>
              <p className="card-text">min temp: {celcius(city.main.temp_min)}</p>
              <p className="card-text">max temp: {celcius(city.main.temp_max)}</p>
              <p className="card-text">
                location: {city.coord.lat}, {city.coord.lon}
              </p>
            </div>
          );
        };
        const RecDay = props => {
          return (
            <div>
              <Link to={`/${props.value}/hourly`}>
                <button>Hourly</button>
              </Link>
              <Link to={`/${props.value}/daily`}>
                <button>Daily</button>
              </Link>
              <Example value={city.main.temp} />
            </div>
          );
        };
        const RecHour = props => {
          return (
            <div>
              <Link to={`/${props.value}/hourly`}>
                <button>Hourly</button>
              </Link>
              <Link to={`/${props.value}/daily`}>
                <button>Daily</button>
              </Link>
              <ExampleHourly value={city.main.temp} />
            </div>
          );
        };

        return (
          <div key={index}>
            <Router>
              <Home />
              <Link className="click" to={`/${city.name}/daily`}>
                Click!
              </Link>
              <Link to={`/${city.name}/hourly`}></Link>
              <Switch>
                <Route path={`/${city.name}/daily`} render={() => <RecDay value={city.name} />} />
                <Route path={`/${city.name}/hourly`} render={() => <RecDay value={city.name} />} />
                <Route path={'/'}></Route>
              </Switch>
            </Router>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
C:\Users\Asus\myapp2\React\project
