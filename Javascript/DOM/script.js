
// HTML Elements

// document.getElementById(id) -> Find an element by element id
// document.getElementsByTagName(name) -> Find elements by tag name
// document.getElementsByClassName(name) -> Find elements by class name

console.log(window);
console.log(document);

let val1 = document.querySelectorAll('h2')
for(let i of val1) {
    i.style.color = 'green'
}

let val2 = document.getElementById('btn')
console.log(val2);

let va3 = document.getElementsByClassName('btn2')
console.log(va3);

let val4 = document.querySelector('h2')
console.log(val4);

let val5 = document.querySelectorAll('button')
console.log(val5);


