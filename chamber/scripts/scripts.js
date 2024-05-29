const hamburgerButton = document.querySelector("#theButton");
const navMenu = document.querySelector(".menu");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}


document.querySelector('.today').textContent = Date.now();

numVisits++;

localStorage.setItem("numVisits-1s", numVisits);

/*Time Stamp*/

function setTimeStamp() {
    const timeElement = document.getElementById("timestamp");
    const currentDate = new Date();
    const formattedTimeStamp = currentDate.toLocaleString();
}
setTimeStamp();

//Weather


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.53&lon=-112.30&units=imperial&appid=64aa0d0fe4df0547171dff1747aa255f";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather-card[0].icon}.png`;
    let desc = data.weather-card[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}

