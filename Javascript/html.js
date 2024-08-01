// var a = 10
// let b = 'mxnish'
// let d = "choudhary"
// const c = false
// const f = true
// var x = 20


// let firstName = 'apple'
// let lastName = 'iPhone 14 Pro max'

// console.log(a)
// console.log(f)
// // console.log(b)
// console.log(c)
// // console.log(d)
// console.log(`${b} ${d}`) // this method is used for spacing.
// console.log(`${firstName} ${lastName}`)
// console.log('mxnish\nchoudhary') // \n used for line break
// console.log(`${b}\nchoudhary`)
// console.log(a+x)

// loops 

// var arr = [1,2,3,4,5,'Mxnish','Rahul',false]

// for(let i in arr) {
//     console.log(i)
// }

// for(let j of arr) {
//     console.log(j)
// }

// let a=20

// if(a<22) {
//     console.log('true')
// }

// else {
//     console.log('false')
// }

// termary operator

// let b = true
// b?console.log('this is true'):console.log('this is false');

// logical operators

// let m = 95
// let n = 20
// if(m<98 && n==20) {
//     console.log('A'); 
// }

// else {
//     console.log('B');
// }

// functions

// function plus(a,b) {
//     console.log(a+b);
// }
// plus(2,5)
// add()

// arrow function

// const abc=(a,b) => {
//     console.log(2+3);
// }
// abc(a,b)

// parameterised function

// function man(a,b) {
//     console.log(man(2,4));
// }
// man(2,4)

// function add(a,b) {
//     console.log(a+b);
// }
// add(2,4)

// return value

// let op = (f,g) => f+g 
// console.log(op(2,2));



// let man = [1,2,3,4,5]
// man.pop(5) 
// man.push(10)
// man.shift(1)
// man.unshift(12)
// console.log(man);
// console.log(man.length);
// console.log(man.includes(12)); // it checks the value in array.


// let mx = {
//     id : 10,
//     nannan :'Mxnish',
//     imPass : true
// }
// console.log(mx);

// crating object inside function

// function manish(num1,num2) {
//     let obj = {
//         add:num1+num2,
//         sub:num1-num2,
//         mul:num1*num2,
//         div:num1/num2
//     }

//     return obj
// }

// let ababba = manish(6,5)
// console.log(ababba.add); // for each 
// console.log(ababba); // for all 

// creating function inside object

// let obj = {
//     l : 10,
//     m : 20,
//     sum:function() {
//         console.log(this, "hey i'm Manish");
//         return this.l+this.m
//     }
// }

// console.log(obj.sum());
// console.log(obj);


// let hsn = [1,2,3,4,5,6]
// let hehe = hsn.filter((a,b,c) => {
//     return a>3
// })
// console.log(hehe);

// let arr = [1,2,3,4,5,6,6]
// let sum= arr.reduce((a,b,c,d) => {
//     return a+b
// }) 

// console.log(sum);

// let sum= arr.find((a,b) => {
//     return a==4
// })
// console.log(sum);

