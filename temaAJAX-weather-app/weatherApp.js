"use strict";

/**
 * Sectiunea current weather
 */

let urlCurrentWeather =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

let curWeather = {};

// async function ajax(url, method, body) {
//   let response = await fetch(url + ".json", {
//     method: method,
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return await response.json();
// }

// async function getVremeAcum(city) {
//   curWeather = await ajax(urlCurrentWeather + city, "GET");
//   draw(curWeather, city);
// }

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

/**
 * TODO:
 *
 * 1) Cream template folosind grid ✅
 * 2) Afisam generatorul de data
 * 3) Afisam vremea
 *    3.1) Functie separata de transformat data din unix in date
 *
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
  let str = "";
  // parcurg pana la 40 pentru ca prognoza din 3 in 3 ore timp de 5 zile am calculat-o ca 24/3 = 8 * 5 = 40 de intrari
  for (let j = 0; j < 40; j++) {
    str += `
      <div class="prognoza">
        <p class="ziua">Ziua:<span class="bold">${forecast.list[
          j
        ].dt_txt.substr(0, 10)}</span></p>
        <img src="http://openweathermap.org/img/w/${
          forecast.list[j].weather[0].icon
        }.png" alt="weatherImg" class="imgPrognoza">
        <p>Ora:<span class="bold"> ${forecast.list[j].dt_txt.substr(
          11,
          5
        )}</span></p>
        <p>Temperatura:<span class="bold"> ${
          forecast.list[j].main.temp
        }°C</span></p>
        <p>Descriere:<span class="bold"> ${
          forecast.list[j].weather[0].description
        }</span></p>
      </div>
    `;
  }

  document.querySelector(".gridContainer").innerHTML = str;
}
