
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.53&lon=-112.30&units=imperial&appid=64aa0d0fe4df0547171dff1747aa255f";

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
  
    displayResults(data);
  }
  
  function displayResults(data) {
    currentTemp.textContent = `${data.main.temp} °F`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    captionDesc.textContent = data.weather[0].description;
  }
  
apiFetch();



