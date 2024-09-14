

// import React, { useState } from 'react'

// const CountFunction = () => {
//     let [count,setCount] = useState(0)
//     let [color,setColor] = useState('blue')

//     function fun1() {
//         setCount(count+1)
//     }

//     function fun2() {
//         setColor('pink')
//     }
    
//   return (
//     <div style={{backgroundColor:color ,width:'99vw', height:'42vw'}}>
//         <h1 style={{color:'red'}}></h1>

//         <h1>{count}</h1>
//         <button onClick={fun1}>Click</button>
//         <button onClick={fun2}>theme</button>
//     </div>
//   )
// }

// export default CountFunction


import { useState , React } from 'react'

const countFunction = () => {
  const [count, setCount] = useState(0)
  const [background, setBackground] = useState('white') 

  function counter() {
    setCount(count + 1)
  }
  function bgColor() {
    if(background === 'white') {
      setBackground('gold')
    }else if(background === 'gold') {
      setBackground('green')
    }else if(background === 'green') {
      setBackground('red')
    }else if(background === 'red') {
      setBackground('yellow')
    }else if(background === 'yellow') {
      setBackground('brown')
    }else if(background === 'brown') {
      setBackground('violet')
    }else if(background === 'violet') {
      setBackground('teal')
    }else if(background === 'teal') {
      setBackground('navy')
    }else{
      setBackground('white')
    }
  }

  return (
    <div style={{backgroundColor: background , height:'40vw'}}>
      <h1>Button clicked {count} times.</h1>
      <button onClick={counter} style={{cursor:'pointer'}}>Click Me</button>
      <button onClick={bgColor} style={{cursor:'pointer'}}>Color</button>
    </div>
  )
}

export default countFunction

// import React, { useState } from 'react';

// function countFunction() {
//   const [backgroundColor, setBackgroundColor] = useState('white');

//   const handleChangeBackground = (newColor) => {
//     setBackgroundColor(newColor);
//   };

//   return (
//     <div style={{ backgroundColor: backgroundColor , width: '1920px', height:'1080px'}}>
//       <button onClick={() => handleChangeBackground('red')}>Red</button>
//       <button onClick={() => handleChangeBackground('blue')}>Blue</button>
//       <button onClick={() => handleChangeBackground('green')}>Green</button>
//     </div>
//   );
// }

// export default countFunction