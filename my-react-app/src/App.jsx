// rafce -> 
// command for output
// 1. cd my-react-app
// 2. npm run dev


// import './App.css'
// import New from "./New"


// const App = () => {
//   let arr = ['manish','aman','rahul','kabir','samarth']
//   return (
//     <div>
//       <h1>Names</h1>
//       {
//         arr.map((a) => {
//           return(<>
//           <li> {a} </li>
//           </>)
//         })
//       }
//     </div>
    
//   )
// }

// import React from 'react'
// import New from './New'
// import Nav from './Comp/Nav'

// const App = () => {
//   return (
//     <>
//         <Nav />
//         <Nav />
//         <New />
//     </>
    
//   )
// }


import New from './New';
import Nav from "./Comp/Nav"

// const App = () => {
//   let a = 'Hello i am manish';
//   return (
//     <div>
//       {
//         <New a1 = {a}/>
//       }
//       {
//         <Nav/>
//       }
//     </div>
//   )
// }


import React from 'react'
import CountFunction from './countFunction';
import Clock from './Clock';
import Input from './Input';

const App = () => {
  return (
    <>
      <Input />
      <CountFunction />
      {/* <Clock /> */}
    </>

  )
}

export default App


