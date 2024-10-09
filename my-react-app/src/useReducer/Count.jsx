// import React from 'react'
// import { useReducer } from 'react'

// const Count = () => {
//     let [count,dispatch] = useReducer(reduser,0)
//     function reduser(count,action) {
//         if(action.type === 'add') {
//             return count + 1
//         }
//         else if(action.type === 'less') {
//             return count - 1
//         }
//         else{
//             return count
//         }
//     }
//   return (
//     <div>
//         <h3>{count}</h3>
//         <button onClick={()=>dispatch({type:'add'})}>Increment</button>
//         <button onClick={()=>dispatch({type:'less'})}>Decrement</button>
//     </div>
//   )
// }

// export default Count