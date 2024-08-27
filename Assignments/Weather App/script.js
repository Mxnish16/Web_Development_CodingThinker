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
        document.querySelector('h1').innerHTML = Math.round(data.main.temp-273) + "°C"
        document.querySelector('h2').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + " %"
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"
        inp.value = ""

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "/Assignments/Weather App/images/clouds.png"
        }else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "/Assignments/Weather App/images/clear.png"
        }else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "/Assignments/Weather App/images/rain.png"
        }else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/Assignments/Weather App/images/drizzle.png"
        }else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "/Assignments/Weather App/images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
    }).catch((err) => {
      console.log(err);
    })
})





































// const div = document.querySelector("div");
// const inp = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let city = inp.value;
//   const ApiKey = "ee75d3d8d3cdd82fe75b1f55bda3d7d5";

//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//     //   console.log(data);
//       const cityName = document.querySelector("#city-Name");
//       const temp = document.querySelector("#temp");
//       const humid = document.querySelector("#humid");
//       const press = document.querySelector("#press");

//       cityName.innerHTML = inp.value;
//       temp.innerHTML = Math.floor(data.main.temp-273);
//       humid.innerHTML = data.main.humidity;
//       press.innerHTML = data.weather[0].main;
//       // inp.value = ""
      
//     })
//     .catch((err) => {
//       const errors = document.querySelector("#error");
//       errors.innerHTML = "City Not Found";
//     });
// });
