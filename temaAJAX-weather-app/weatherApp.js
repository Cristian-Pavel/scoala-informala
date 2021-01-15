// "use strict";

/**
 * TODO:
 * 1) Importam API vreme (on load, functie get)
 * 2) Importam API iframe harta
 * 3) Afisam sectiune vreme si sectiune harta
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
          <li>Descriere: ${curWeather.weather[0].main}  </li>
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
