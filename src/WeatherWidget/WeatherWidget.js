import React from 'react';
import { calcTemperature } from './helpers';

export default class WeatherWidget extends React.Component {
    constructor(props) {
      super(props);
      this.state = { valueCity: props.valueCity };
    }
  
    shouldComponentUpdate(nextProps) {
      if (nextProps.valueCity.name !== this.state.valueCity.name) {
        this.setState({ valueCity: nextProps.valueCity });
        return true;
      }
      return false;
    }
  
    render() {
      return (
        <div className="weather">
          <div>{this.state.valueCity.name}</div>
          <div><img src={`http://openweathermap.org/img/w/${this.state.valueCity.weather[0].icon}.png`} alt="" /></div>
          <div>{calcTemperature(this.state.valueCity.main.temp)} {"\u2103"}</div>
        </div>
      )
    }
  }
  