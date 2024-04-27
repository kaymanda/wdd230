//copyright current year and last modified

document.getElementById("year").innerHTML = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = 'Last Modified: ' +lastModified;
