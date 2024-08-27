const div = document.querySelector("div");
const url = "https://dummyjson.com/recipes";

function fetchAPI() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i in data.recipes) {
        const li = document.createElement("li");
        // const img = document.createElement("img");
        // const att = document.createAttribute("src");

        li.innerHTML = data.recipes[i].name;
        // att.value = data.recipes[i].image;
        
        // img.style.height = "120px"
        // img.style.width = "120px"
        // img.setAttributeNode(att)
        div.appendChild(li);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchAPI();
