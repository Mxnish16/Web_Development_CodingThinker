// import React from 'react'

// const New = () => {
//     let arr = [10,20,30,40,50]
//     // let arr2 = [1,2,3,4,5]
//   return (
//     <div>
//         {
//             arr.map((a) => {
//                 return(
//                     <><li> {a} </li></>
//                 )
                
//             })
//         }
//         {
//             arr2.map((b) => {
//                 return(
//                     <><h2> {b} </h2></>
//                 )
//             })
//         }
//     </div>
//   )
// }


import React from 'react'
import Home from './Home';

const New = (a) => {
  return (
    <div>
        <Home man = {a.a1}/>
    </div>
  )
}

export default New