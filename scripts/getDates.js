//copyright current year and last modified

const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = `${currentYear}`;

const madeChanges = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${madeChanges}`;
