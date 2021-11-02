//Displaycurrenttime

let currentTimeDisplay = (currentTime) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[currentTime.getDay()];

  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  let mornAft = (hour) => {
    return hour < 12 ? "am" : "pm";
  };
  let convertCurrentHour = (hour) => {
    return hour > 12 ? hour - 12 : hour;
  };

  let formattedDate = `${currentDay} ${convertCurrentHour(
    currentHour
  )}:${currentMinute}${mornAft(currentHour)}`;
  return formattedDate;
};

let currentDateContain = document.querySelector("#current-time");
currentDateContain.innerHTML = currentTimeDisplay(new Date());

//displaytypedcity
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#location-container");
  let cityInput = document.querySelector("#input-city");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#display-location");
searchForm.addEventListener("submit", search);

//converttemp
function convertTempFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 68;
}

function convertTempCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 20;
}

let fahrenheitClick = document.querySelector("#fahrenheit");
fahrenheitClick.addEventListener("click", convertTempFahrenheit);

let celciusClick = document.querySelector("#celcius");
celciusClick.addEventListener("click", convertTempCelsius);
