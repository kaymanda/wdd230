const hamburgerButton = document.querySelector("#theButton");
const navMenu = document.querySelector(".menu");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});

/* Last Visited */

const msDays = 84600000; // converting ms to days

if (localStorage.getItem("lastDateVisit")) {
  const lastDateVisit = new Date(localStorage.getItem("lastDateVisit")).getTime();
  const today = Date.now();
  let daysDiffer = (today - lastDateVisit) / msDays;
  let message = "";
  if (daysDiffer < 1) {
    message = "Back so soon! Awesome!";
  }else if (daysDiffer >= 1) {
    if (daysDiffer > 1 && daysDiffer < 2) {
      message = `Your last visit was ${Math.floor(daysDiffer)} day ago`;
    } else {
      message = `Your last visit was ${Math.floor(daysDiffer)} days ago`;
    }
  }

  const visitDate = document.querySelector("#last-visit");
  visitDate.textContent = message;
  localStorage.setItem("lastDateVisit", todaysDate);
} else {
  document.getElementById("last-visit").textContent =
    "Welcome! Let us know if you have any questions.";
}


/*Time Stamp*/

function setTimeStamp() {
    const timeElement = document.getElementById("timestamp");
    const currentDate = new Date();
    const formattedTimeStamp = currentDate.toLocaleString();
}
setTimeStamp();



