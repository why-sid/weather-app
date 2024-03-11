const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city)
{
    const api_key = "84a44b841c11882179a853ba8a3c8236";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    weather_body.style.display = "flex";
    location_not_found.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloudy.png";
            break;
        case 'Few Clouds':
            weather_img.src = "cloudy.png";
            break;
        case 'Clear':
            weather_img.src = "sunny.png";
            break;
        case 'Rain':
            weather_img.src = "light rain.png";
            break;
        case 'Monsoon':
        weather_img.src = "stormy.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "cold.png";
            break;
        case 'Smoke':
            weather_img.src = "smoke.png";
            break;
        case 'Drizzle':
            weather_img.src = "light rain.png";
            break;
                
    }

}

searchBtn.addEventListener('click', ()=>{checkWeather(inputBox.value);
});
