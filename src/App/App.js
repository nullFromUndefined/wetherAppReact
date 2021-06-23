import React from 'react';
import './App.css';
import { fetchWeather, fetchPictureCity, toogleTheme, toogleList } from './helpers'
import WeatherWidget from './../WeatherWidget/WeatherWidget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCity: null, pictures: null, requestPictures: null
    };
  }

   watchWeather = async () => {
    const city = document.querySelector('#input-city').value
    if (!city) return;

    const valueCity = await fetchWeather(city);
    this.setState({ valueCity })
    const pictures = await fetchPictureCity(this.state.valueCity.name, this.state.valueCity.weather[0].main)
    
    this.setState({ pictures: pictures.results, requestPictures:  pictures.results})
  }

  filterImages = (event) => {
    const el = event.target;
    const filterConfig = el.dataset.filter;
    document.querySelector(".choice").classList.remove("choice");
    el.classList.add("choice");
  
    this.setState({ pictures: this.state.requestPictures.filter((el) => {
          if (filterConfig === "width") return el.width > el.height;
          else if (filterConfig === "height") return el.width < el.height;
          return true;
        }) 
      })
  }
  
  
render() {
  return (
      <div className="App">
        <div class="change-theme">Сменить тему: <span onClick={toogleTheme}>темная</span></div>
        <div className="form-group">
            <input type="text" name="user_name" id="input-city"/>
            <button onClick={this.watchWeather}>Посмотреть погоду</button>
        </div>
        { !!this.state.valueCity && <WeatherWidget state={this.state.valueCity} /> }
        { !!this.state.pictures &&  
            <div className="images-block">
              <div className="filter-group">
                <div className="filter" onClick={this.filterImages}>
                    Фильтр по фото:&nbsp;
                    <span className="choice" data-filter="all">Все&nbsp;</span>
                    <span data-filter="width">Горизонтальные&nbsp;</span> 
                    <span data-filter="height">Вертикальные</span>
                </div>
                <div className="filter" onClick={toogleList}>
                  Переключить дизайн на: <span>список</span>
                </div>
              </div>
              
              <div className="images-city">
                {this.state.pictures.map((el) => {
                  return (
                  <div className="image" key={el.id}>
                    <img src={el.urls.small} alt="" />
              </div>
            )
          })}
        </div>
      </div> }
      </div>
    );
  }
}

export default App;



