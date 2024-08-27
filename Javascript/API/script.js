// const div = document.querySelector("div");
// const URL = "https://dummyjson.com/recipes";

// fetch(URL)
//   .then((man) => {
//     return man.json();
//   })
//   .then((data) => {
//     // console.log(data);

//     for (let i in data.recipes) {
//       let li = document.createElement("li");
//       let img = document.createElement('img');
//       let att = document.createAttribute('src');

//       li.innerText = data.recipes[i].name;
//       att.value=data.recipes[i].image

//       img.style.height='200px'
//       img.style.width='200px'
//       img.setAttributeNode(att)

//       div.append(img,li)
//     //   div.append(li);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const div2 = document.querySelector(".two");
// const URL2 = "https://dummyjson.com/recipes";

// fetch(URL2)
//     .then((res2) => {
//         return res2.json();
//     })
//     .then((data2) => {
//         for (a in data2.recipes) {
//             const li = document.createElement("li");
//             const img = document.createElement('img');
//             const att = document.createAttribute('src');
            
//             li.innerText = data2.recipes[a].firstName;
//             att.value = data2.recipes[a].image;
//             img.setAttributeNode(att)
//             div2.appendChild(li,img);
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });
 