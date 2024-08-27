const inp = document.querySelector("input");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const h3 = document.querySelector('h3')

btn.addEventListener("click", () => {
  let city = inp.value;
  const ApiKey = "ee75d3d8d3cdd82fe75b1f55bda3d7d5";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
  )
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
        console.log(err);
        h3.innerText = 'Check Again'
        h3.style.color = 'green'
    })
});
