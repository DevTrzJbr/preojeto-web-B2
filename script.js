var marcarLoc;
var removeLoc;

function localizar() {
	navigator.geolocation.getCurrentPosition(showPosition, showError, {
	enableHighAccuracy:true
}) 
}

function showPosition(pos) {
	let lat = pos.coords.latitude;
	let lng = pos.coords.longitude;
	console.log('latitude: '+ lat, ' longitude: ' + lng);

	var map = L.map('map').setView([lat, lng], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGV2LWluaWNpYW50ZSIsImEiOiJjbDMxaGhkYjQwMWkyM2tuMjQyZXJ4d3A1In0.3ZLAG3knntfCNSSzoCrsnQ'
	}).addTo(map);

	var marker = L.marker([lat, lng]);

	marcarLoc = () => {
		map.setView([lat, lng], 13);
		marker.addTo(map)
		marker.bindPopup("<b>Ola!</b><br>Você esta aqui!.").openPopup();
	}

	removeLoc = () => {
		map.removeLayer(marker);
	}
	
	
}


function showError(err){
	alert(err.message + ", " + err.code);
}


localizar();

