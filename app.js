import { createTimer } from "./timer.js";
import { setupFigures } from "./figures.js";
import { setupModal } from "./modal.js";
import { setupSpinner } from "./spinner.js";
import { setupDarkMode } from "./darkMode.js";
import { setupMap } from "./map.js";

const apiKey = "304ebd0928abf4afd9f4e521e89bd7eb"; // Replace with your OpenWeatherMap API key
const city = "Saalbach"; // You can change the city to where you want to get weather for

async function fetchWeather() {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    // Extracting weather details
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Extracting snow data (if available)
    let snowInfo = "No recent snowfall";
    if (data.snow) {
      snowInfo = data.snow["1h"]
        ? `Snowfall (1h): ${data.snow["1h"]} mm`
        : `Snowfall (3h): ${data.snow["3h"] || 0} mm`;
    }

    // Extracting freezing level (if available)
    const freezingLevel =
      data.main.temp < 0
        ? "Snowline likely at higher altitudes"
        : "Freezing level not critical";

    updateWeather(temperature, weatherDescription, humidity, windSpeed);
    updateSnowInfo(snowInfo, freezingLevel);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    showError();
  }
}

function updateWeather(temperature, weatherDescription, humidity, windSpeed) {
  document.getElementById("weather-info").innerHTML = `
    <p>Temperature: ${temperature}°C</p>
    <p>Condition: ${weatherDescription}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind: ${windSpeed} m/s</p>
  `;
}

function updateSnowInfo(snowInfo, freezingLevel) {
  document.getElementById("snow-info").innerHTML = `
    <p>${snowInfo}</p>
    <p>Freezing Level: ${freezingLevel}</p>
  `;
}

function showError() {
  document.getElementById("weather-info").textContent =
    "Failed to load weather info";
  document.getElementById("snow-info").textContent = "Failed to load snow info";
}

// Fetch weather on page load
fetchWeather();

createTimer();
setupFigures();
setupModal();
setupDarkMode();
setupMap();
setupSpinner();
