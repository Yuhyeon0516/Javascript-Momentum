const API_KEY = "0c4bd1debc3884ec5c3c043cf2b74173";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weathers #weather");
      const temp = document.querySelector("#weathers #temp");
      const city = document.querySelector("#weathers #city");

      weather.innerText = `날씨: ${data.weather[0].main}`;
      temp.innerText = `온도: ${Math.round(data.main.temp)}°C`;
      city.innerText = `위치: ${data.name}`;
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
