var latitude;
var longitude;
var temperature;
var convertVar;

function convertKelvin(type, temperature) {
    if (type === 'f') {
        temperature = temperature * (9 / 5) - 459.67;
    }
    if (type === 'c') {
        temperature = temperature - 273.15;
    }
    return temperature.toFixed(2);
}

function returnWeather() {
    var xhr = new XMLHttpRequest();
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='.concat(latitude).concat('&lon=').concat(longitude).concat('&appid=56719a6c3b68e79e0551fb7775e1676b');
    xhr.open("GET", url, false);
    xhr.send();

    var data = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(data));
    var picture = data.weather[0].main;

    var icon = data.weather[0].icon;
    var sourcePic = 'http://openweathermap.org/img/w/'.concat(icon).concat('.png');
    document.getElementById("picture").src = sourcePic;
    document.getElementById("message").innerHTML = data.weather[0].main;
    document.getElementById("temperature").innerHTML = convertKelvin('f', data.main.temp) + '&deg;';
    temperature = data.main.temp;

    return 'done';
}

function convert() {
    if (convertVar === 'c' || !convertVar) {
        document.getElementById("temperature").innerHTML = convertKelvin('c', temperature) + '&deg;';
        convertVar = 'f';
    } else {
        document.getElementById("temperature").innerHTML = convertKelvin('f', temperature) + '&deg;';
        convertVar = 'c';
    }
}


function geoFindMe() {
    var output = document.getElementById("location");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var country = document.getElementById("country");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        var geocodeCity = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + '&language=en';

        $.getJSON(geocodeCity).done(function(location) {
            country.innerHTML = location.results[0].address_components[7].long_name;
            state.innerHTML = location.results[0].address_components[6].long_name;
            city.innerHTML = location.results[0].address_components[3].long_name;
        });
        output.innerHTML = latitude + ' ' + longitude;
        returnWeather();
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}
