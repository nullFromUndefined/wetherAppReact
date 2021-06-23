import React from 'react';
import { calcTemperature } from './helpers';

export default class WeatherWidget extends React.Component {
    constructor(props) {
      super(props);
      this.state = props.valueCity;
    }
  
    shouldComponentUpdate() {
      if (this.props.valueCity.name !== this.state.name) {
        this.setState({ ...this.props.valueCity });
        return true;
      }
      return false;
    }
  
    render() {
      return (
        <div className="weather">
          <div>{this.state.name}</div>
          <div><img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} alt="" /></div>
          <div>{calcTemperature(this.state.main.temp)} {"\u2103"}</div>
        </div>
      )
    }
  }
  