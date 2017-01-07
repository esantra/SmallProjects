function getQuote() {
  var xhr = new XMLHttpRequest();
  var url =  "https://wind-bow.gomix.me/twitch-api/channels/hebo";
  xhr.open("GET", url, false);
  //set header to application/vnd.twitchtv.v3+json
  xhr.setRequestHeader("Accept", "application/vnd.twitchtv.v3+json");
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
