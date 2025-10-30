
const options = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'2-digit',
    hour12: true,
    timeZoneName:'short'             
};


//this for the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

//this for the current date
const currentDate = new Date();
const formattedNow = currentDate.toLocaleString('en-US', options);
document.getElementById('date').textContent = formattedNow.replace(',', '');

//this for the last modified date
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString('en-US', options);
document.getElementById('lastModified').textContent = formattedDate.replace(',',' ');






