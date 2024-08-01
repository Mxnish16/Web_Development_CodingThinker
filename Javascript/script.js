// let data = [
//     {
//         id : 1,
//         name : 'manish'
//     },
//     {
//         id : 2,
//         name : 'mxrci'
//     },
//     {
//         id : 3,
//         name : 'thekidd'
//     }
// ]

// data.map((a) => {
//     console.log(a.name);
// })

//printing of names which is greater than 1.

// let newData = data.filter((a) => {
//     return a.id > 1
// })
// newData.map((value) => {
//     console.log(value);
// })


// const numbers = [1, 2, 3, 4, 15, 20, 25];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); 

// const numbers = [1, 2, 3, 4, 15, 20, 25];
// const doubled = numbers.map(item => item / 2);
// console.log(doubled); 

// let numbers = [1, 2, 3, 4, 15, 20, 25];
// let doubled = numbers.map(item => item + 2);
// console.log(doubled); 



// let dataa=  [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       "age": 28,
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "state": "CA",
//         "zip": "12345"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "email": "jane.smith@example.com",
//       "age": 32,
//       "address": {
//         "street": "456 Oak St",
//         "city": "Somewhere",
//         "state": "NY",
//         "zip": "67890"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Emily Johnson",
//       "email": "emily.johnson@example.com",
//       "age": 24,
//       "address": {
//         "street": "789 Pine St",
//         "city": "Elsewhere",
//         "state": "TX",
//         "zip": "11223"
//       }
//     }
//   ]

// let number = Math.random()*1000000
// console.log(number);

// let number1 = Math.random()*10000
// console.log(Math.floor(number1));

// let date = new Date().toLocaleDateString()
// console.log(date );
  

// callback functions

function outer(a) {
  console.log('Heyyyyyy!');
  a()
}
function inner() {
  console.log('manishhhhh');
}
outer(inner)

// Asynchronus Programming

// it is used for delay of programm which you want to

// setTimeout(() => {
//   console.log('two');
// },1500)

// setTimeout(() => {
//   console.log('one');
// },1000)

// setTimeout(() => {
//   console.log('four');
// },2500)

// setTimeout(() => {
//   console.log('three');
// },2000)

let i =0;

while(i!=10){
let id = setInterval(() => {
  console.log('heheh');
},20)
}
i++;
clearInterval(id);


// clearInterval(id)

