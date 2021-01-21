"use strict";

/**
 * Sectiunea current weather
 */

let urlCurrentWeather =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

let curWeather = {};

async function getVremeAcum(city) {
  const response = await fetch(urlCurrentWeather + city);
  curWeather = await response.json();
  if (curWeather === null) curWeather = {};
  draw(curWeather, city);
}

function draw(curWeather, city) {
  let str = "";
  str += `
      <div class="curWeatherInfo">
      <img src="http://openweathermap.org/img/w/${curWeather.weather[0].icon}.png" id="currentWeatherIcon" >
      <ul>
          <li>Descriere: ${curWeather.weather[0].main}</li>
          <li>Umiditate: ${curWeather.main.humidity} %</li>
          <li>Presiune: ${curWeather.main.pressure} mmHg</li>
          <li>Temperatura curenta: ${curWeather.main.temp} °C</li>
          <li>Minima zilei: ${curWeather.main.temp_min} °C</li>
          <li>Maxima zilei: ${curWeather.main.temp_max} °C</li>
      </ul>
      </div>
      <div class="cityMap">
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=${city}&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
      </div>
        `;
  document.querySelector(".vremeaAcumContainer").innerHTML = str;
}

async function showNow() {
  let city = document.querySelector("#city").value;
  await getVremeAcum(city);
}

/**
 * Sectiunea prognoza
 */

let urlForecastWeather =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

let forecast = {};

async function showForecast() {
  let city = document.querySelector("#city").value;
  await getForecast(city);
}

async function getForecast(city) {
  const response = await fetch(urlForecastWeather + city);
  forecast = await response.json();
  if (forecast === null) forecast = {};
  drawForecast(forecast);
}

function drawForecast(forecast) {
  let sirZile = document.querySelectorAll(".gridDay");

  let indexZi = 0;
  let zi = forecast.list[0].dt_txt.substr(0, 10);
  sirZile[
    indexZi
  ].innerHTML = `<p class="ziua">Ziua:<span class="bold">${zi}</span></p>`;

  for (let i = 0; i < forecast.list.length; i++) {
    let data = forecast.list[i].dt_txt.substr(0, 10);
    let ora = forecast.list[i].dt_txt.substr(11, 5);
    if (zi !== data) {
      indexZi++;
      zi = data;
      sirZile[
        indexZi
      ].innerHTML += `<p class="ziua">Ziua:<span class="bold">${zi}</span></p>`;
    }
    sirZile[indexZi].innerHTML += `
      <div class="prognoza">
        <img src="http://openweathermap.org/img/w/${
          forecast.list[i].weather[0].icon
        }.png" alt="weatherImg" class="imgPrognoza">
        <p>Ora:<span class="bold"> ${forecast.list[i].dt_txt.substr(
          11,
          5
        )}</span></p>
        <p>Temperatura:<span class="bold"> ${
          forecast.list[i].main.temp
        }°C</span></p>
        <p>Descriere:<span class="bold"> ${
          forecast.list[i].weather[0].description
        }</span></p>
       </div> 
    `;
  }
}
