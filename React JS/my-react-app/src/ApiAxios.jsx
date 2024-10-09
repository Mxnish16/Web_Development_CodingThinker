// import React from 'react'
// import { useState,useEffect } from 'react'
// import axios from 'axios'

// const ApiAxios = () => {
//     let [data,setData] = useState([])
//     let [input,setInput] = useState([])
//     let [filtered,setFiltered] = useState([])
    
//     async function search() {
//         let Api = await axios('https://dummyjson.com/recipes')
//         // console.log(Api.data.recipes);
//         setData(Api.data.recipes)
//         setFiltered(Api.data.recipes) // initialised by data
//     }

//     useEffect(() => {
//         search()
//     },[])

//     function fun1(e) {
//         setInput(e.target.value)
//     }

//     function fun2() {
//         const filter = data.filter((a) => {
//             a.name.toLowerCase().includes(input.toLowerCase())
//         })
//         setFiltered(filter)
//     }

//   return (
//     <>
//         <input onChange={fun1} type="text" placeholder='Search Your Dishes'/>
//         <button onClick={fun2}>Seach</button>

//         {
//             filtered.map((e) => {
//                 return (
//                     <>
//                         <h3><i>{e.id}</i></h3>
//                         <img width='40%' src={e.image}/>
//                         <h3>{e.name}</h3>
//                     </>
//                 )
                
//             })
//         }
        
//     </>
    
//   )
// }

// export default ApiAxios


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const ApiAxios = () => {
  // State for storing data and filter type
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState("all"); // State for tracking selected meal type

  // Fetch data from API
  async function call() {
    try {
      let apiData = await axios('https://dummyjson.com/recipes');
      setData(apiData.data.recipes);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    call();
  }, []);

  const filteredData = data.filter((recipe) => {
    if (filter === "all") return true;
    return recipe.mealType.includes(filter); 
  });

  return (
    <>
    
      <div className="button-container">
        <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
        <button onClick={() => setFilter("Lunch")}>Lunch</button>
        <button onClick={() => setFilter("Dinner")}>Dinner</button>
        <button onClick={() => setFilter("all")}>All</button> {/* Show all */}
      </div>

  
      <div className="recipe-container">
        {
          filteredData.length > 0 ? (
            filteredData.map((recipe, index) => (
              <div id='card' key={index}>
                <img src={recipe.image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong></p>
                <ol>
                  {recipe.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>
            ))
          ) : (
            <p>No recipes found for the selected category.</p>
          )
        }
      </div>
    </>
  );
}

export default ApiAxios;




