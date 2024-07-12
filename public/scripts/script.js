var map = L.map('map').setView(getCoords(), 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var customIcon = L.icon({
    iconUrl: 'img/satellite.gif',  // Specify the path to your custom icon image
    iconSize: [60, 60],                // Size of the icon
});

L.marker(getCoords(), {
    icon : customIcon 
}).addTo(map)
    .bindPopup('<center>ISS.<br> Current Location.</center>');
