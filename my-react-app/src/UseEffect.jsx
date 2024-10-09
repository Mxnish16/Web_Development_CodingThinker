// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [count,setCount] = useState(0)
//     let [city,setCity] = useState('Bhopal')
//     let [api, setApi] = useState([])

//     useEffect(() => {
//         // console.log('helllo');
//         fetch('https://dummyjson.com/recipes').then((res) => {
//             return res.json()
//         }).then((data) => {
//             console.log(data.recipes);
//             setApi(data.recipes)
//         })
//     },[])

//     function fun1() {
//         setCount(count+1)
//     }

//     function fun2() {
//         setCity('Delhi')
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={fun1}>Click</button>
//         <h2>{city}</h2>
//         <button onClick={fun2}>Change</button>
//         <hr />

//         {
//             api.map((a) => {
//                 return(
//                     <>
//                     <h4>{a.id}</h4>
//                     <h4>{a.name}</h4>
//                     </>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default UseEffect



// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [api,setApi] = useState([])

//     useEffect(() => {
//         fetch('https://dummyjson.com/recipes').then((res) => {
//             return res.json()
//         }).then((data) => {
//             setApi(data.recipes)
//         },[])
//     })
//   return (
//     <div>
//         {
//             api.map((val) => {
//                 return(
//                     <>
//                         <h4>{val.id}</h4>
//                         <h4>{val.name}</h4>
//                         <img src={val.image} alt="" style={{width:'50vh'}}/>
//                     </>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default UseEffect



// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let[count,setCount] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setCount(count + 1)
//         },1200)
//     })
//   return (
//     <div>
//        <h3> {count}  </h3> 
//     </div>
//   )
// }

// export default UseEffect

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let[Api,setApi] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes').then((res) => {
            return res.json()
        }).then((data) => {
            // console.log(data);
            
            setApi(data.recipes)
        })
    })
  return (
    <div>
        {
            Api.map((use) => {
                return(
                    <>
                        <h3>{use.id}</h3>
                        <img src={use.image} style={{width:'50vh'}}/>
                        <h3><i>Name of the Dish :</i> {use.name}</h3>
                        <h4><i>Ingredients :</i> {use.ingredients}</h4>
                        <h3>Ratings : {use.rating}</h3>
                    </>
                )
            })
        }
    </div>
  )
}

export default UseEffect
