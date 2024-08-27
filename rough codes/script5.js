const ApiKey = "ee75d3d8d3cdd82fe75b1f55bda3d7d5";
// const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const weatherIcon = document.querySelector('.weather-icon')

btn.addEventListener('click', () => {
    const ApiKey = "ee75d3d8d3cdd82fe75b1f55bda3d7d5";
    const city = inp.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        document.querySelector('h1').innerHTML = Math.round(data.main.temp-273) + "°C"
        document.querySelector('h2').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + " %"
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"
        inp.value = ""

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloud.png"
        }else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/clear.png"
        }else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
    })
})