//copyright current year and last modified
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = 'Last Modified: ' +lastModified;
