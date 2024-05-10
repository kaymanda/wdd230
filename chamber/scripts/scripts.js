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