//copyright current year and last modified

const currentYear = new Date().getFullYear();

document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = 'Last Modified: ' +lastModified;
