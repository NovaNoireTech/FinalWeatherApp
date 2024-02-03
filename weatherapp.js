const API_key = 'ea499ec7e0edace73ba87ffa6e198a08';

async function displayWeather(city_name) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found! Enter a valid city name.');
            return;
        }

        console.log(data);

        displayWeatherDetails(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Error, please try again.');
    }
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = document.getElementById("city");
    displayWeather(city.value);

    console.log(city.value);
});


function displayWeatherDetails(weatherData) {
    const high = weatherData.main.temp_max;
    const low = weatherData.main.temp_min;
    const forecast = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;

    const displayWeather = {
        highTemperature: high,
        lowTemperature: low,
        forecast: forecast,
        humidity: humidity
    };

    console.log(displayWeather);

    

    document.getElementById("high").textContent = `${displayWeather.highTemperature} °C`;
    document.getElementById("low").textContent = `${displayWeather.lowTemperature} °C`;
    document.getElementById("forecast").textContent = displayWeather.forecast;
    document.getElementById("humidity").textContent = `${displayWeather.humidity} %`;
}



// Had trouble converting  F to celsuis. But got it working. 