document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const city = document.getElementById("cityInput").value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'your_api_key';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to retrieve weather data.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherInfo = `Weather in ${city}:<br>
                                 Description: ${weatherDescription}<br>
                                 Temperature: ${temperature}°C<br>
                                 Humidity: ${humidity}%<br>
                                 Wind Speed: ${windSpeed} m/s`;

            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("weatherInfo").innerHTML = 'Failed to retrieve weather data.';
        });
}