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

let form = document.querySelector('form')
let inp = document.querySelector('input')
form.addEventListener('submit', (b) => {
    b.preventDefault()
    // console.log('done');
    console.log(inp.value);
    console.log('submitted');
})