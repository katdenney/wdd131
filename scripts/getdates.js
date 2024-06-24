var currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = "&copy;" + currentYear;

var lastMod = new Date(document.lastModified);
var formattedDate = lastMod.toLocaleString();
document.getElementById('lastModified').textContent = "Last Modified: " + formattedDate;
