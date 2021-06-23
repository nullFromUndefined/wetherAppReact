import { codeUnsplash, codeOpenweathermap } from './variables';


export async function fetchWeather(city) {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${codeOpenweathermap}`)
      .then(res => {
        return res.json();
      })
  }
  
export async function fetchPictureCity(city, weather) {
    return await fetch(`https://api.unsplash.com/search/photos?page=1&query=${city}-${weather}&client_id=${codeUnsplash}`)
      .then(res => {
        return res.json();
      })
  }
  
export function toogleTheme(event) {
    const theme = event.target.textContent === "светлая" ? "темная" : "светлая";
    event.target.textContent = theme;
    document.querySelector("body").classList.toggle("dark-theme");
  }
  
export function toogleList(event) {
    const design = event.target.textContent === "плитку" ? "список" : "плитку";
    event.target.textContent = design;
    document.querySelector(".images-city").classList.toggle("two-columns");
  }
  