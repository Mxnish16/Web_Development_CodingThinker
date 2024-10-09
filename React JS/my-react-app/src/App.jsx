// import React,{useState,useEffect} from 'react'
// import axios from 'axios'

// const App = () => {
//   let [data,setData] = useState([])
//   let [input,setInput] = useState([])
//   let [filteredData,setFilteredData] = useState([])

//   async function Search() {
//     let Api = await axios('https://dummyjson.com/recipes')
//     // console.log(Api.data.recipes);
//     setData(Api.data.recipes)
//     setFilteredData(Api.data.recipes)
//   }

//   useEffect(() => {
//     Search()
//   },[])

//   function inputText(e) {
//     setInput(e.target.value)
//     // console.log(e.target.value);
//   }

//   function clicked() {
//     const filter = data.filter(recipe => 
//       recipe.name.toLowerCase().includes(input.toLowerCase())
//     )
//     setFilteredData(filter)
//   }

//   return (
//     <>
//       <input onChange={inputText} type="text" placeholder='Serch Your favourite Dishes' />
//       <button onClick={clicked}>Search</button>

//       {
//         filteredData.map((a) => {
//           console.log(a);
//           return(
//             <>
//               <h2>{a.id}</h2>
//               <img width='300vh' src={a.image}/>
//               <h2>{a.name}</h2>
//               <h3>{a.difficulty}</h3>
//               <i>{a.mealType}</i>
//               <h4>{a.prepTimeMinutes} Minutes</h4>
//             </>
//           )
//         })
//       }
//     </>
//   )
// }

// export default App


import React from 'react'
import ApiAxios from './ApiAxios'

const App = () => {
  return (
    <>
      <ApiAxios/>
    </>
  )
}

export default App





