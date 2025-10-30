
const lastModified = new Date(document.lastModified);

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
const formattedDate = lastModified.toLocaleString('en-US', options);

document.getElementById('lastModified').textContent = formattedDate.replace(',',' ');


