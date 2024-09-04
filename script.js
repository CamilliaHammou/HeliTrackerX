const map = L.map('map').setView([51.505, -0.09], 13);

//we add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


function getRandomCoordinates() {
    return [51.505 + (Math.random() - 0.5) * 0.1, -0.09 + (Math.random() - 0.5) * 0.1];
}

//add helicopters
const helicopters = [];

for (let i = 0; i < 5; i++) {
    const [lat, lng] = getRandomCoordinates();
    const marker = L.marker([lat, lng]).addTo(map);
    helicopters.push(marker);
}

//we update helicopter positions every 2 seconds
setInterval(() => {
    helicopters.forEach(marker => {
        const [lat, lng] = getRandomCoordinates();
        marker.setLatLng([lat, lng]);
    });
}, 2000);
