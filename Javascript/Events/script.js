// ------------------ Click Event ---------------------

// 1st
// function add() {
//     console.log('Confirmed');
// }

// 2nd
// let btn = document.querySelector('button')
// btn.addEventListener('click' ,()=> {
//     console.log('bhagggggggggg');
// })

// 3rd
// let btn = document.querySelector('button')
// btn.onclick= function() {
//     console.log('aajjaooooo');
// }

// ------------------ Input Event ---------------------

// let div = document.querySelector('div')
// let inp = document.querySelector('input')

// inp.addEventListener('input', (a) => {
//     console.log(a.target.value);
//     div.innerText = a.target.value
// })

// ------------------ Submit Event ---------------------

// let form = document.querySelector('form')
// let inp = document.querySelector('input')
// form.addEventListener('submit', (b) => {
//     b.preventDefault()
//     // console.log('done');
//     console.log(inp.value);
//     console.log('submitted');
// })

// let btn1 = document.querySelector('#Btn1');
// let currMode = 'light';

// btn1.addEventListener('click', () => {
//     if(currMode === 'light') {
//         currMode = 'dark';
//         document.querySelector('body').style.backgroundColor = 'black';
//     }else {
//         currMode = 'light';
//         document.querySelector('body').style.backgroundColor = 'white';
//     }
//     console.log(btn1);
// })


// ------------------ (TO-DO List) ------------------ 


let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let data = inp.value;
  let li = document.createElement("li");
  li.innerText = data;
  ul.appendChild(li);
  inp.value = "";

  li.addEventListener('click', () => {
    li.remove()
  })
});
