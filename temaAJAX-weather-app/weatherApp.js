"use strict";

/**
 * TODO:
 * 1) Importam API vreme (on load, functie get)
 * 2) Importam API iframe harta
 * 3) Afisam sectiune vreme si sectiune harta
 */

let urlCurrentWeather =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

let urlIconPrefix = "http://openweathermap.org/img/w/";

let curWeather = {};

async function ajax(url, method, body) {
  let response = await fetch(url + ".json", {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

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
      <img src="http://openweathermap.org/img/w/${curWeather.weather[0].icon}" alt="weatherImg">
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

/**

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22047.637653179154!2d23.703226762762295!3d46.31073701366769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474956c4dc09be4d%3A0x64d63acda414c439!2sAiud%20515200!5e0!3m2!1sen!2sro!4v1610724396447!5m2!1sen!2sro" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

 */

/**
 * <div class="mapouter"><div class="gmap_canvas"><iframe width="650" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://codepen.io/123movies/full/OJROyRx"></a><br><style>.mapouter{position:relative;text-align:right;height:250px;width:650px;}</style><a href="https://google-map-generator.com">embed map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:250px;width:650px;}</style></div></div>
 *
 *
 */
