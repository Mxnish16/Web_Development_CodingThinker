// import React, {useState,useEffect} from 'react'
// import axios from 'axios'

// const Axios = () => {
//     const [input,SetInput] = useState('')
//     const [data,SetData] = useState([])
//     const [filter,SetFilter] = useState([])

//     async function Search() {
//         try {
//             let Api = await axios('https://dummyjson.com/recipes')
//             SetData(Api.data.recipes)
//             SetFilter(Api.data.recipes)
//         }
//         catch (error) {
//             console.error("Error fetching data", error);
//         }
//     }

//     useEffect(() => {
//         Search()
//     },[])

//     function fun1(e) {
//         SetInput(e.target.value)
//     }

//     function fun2() {
//         const filter = data.filter((recipe) => {
//             return(
//                 recipe.name.toLowerCase().includes(input.toLowerCase())
//             )
//         })
//         SetFilter(filter)
//     }   


//   return (
//     <>
//         <div className='parent'>
//             <div className="input">
//                 <input onChange={fun1} type="text" placeholder='Search Your Dishes' />
//                 <button onClick={fun2} >Search</button>
//             </div>
//             <div className='child'>
//                 <button>Breakfast</button>
//                 <button>Lunch</button>
//                 <button>Dinner</button>
//                 <button>All</button>
//             </div>
//         </div>

//         {
//             data.map((a) => {
//                 return (
//                     <>
//                         <h2>{a.id}</h2>
//                         <h2>{a.name}</h2>

//                     </>
//                 )

//             })
//         }
//     </>
//   )
// }

// export default Axios


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    let [data, setData] = useState([]);
    let [input, setInput] = useState('');
    let [filtered, setFiltered] = useState([]);

    async function search() {
        try {
            let Api = await axios('https://dummyjson.com/recipes');
            setData(Api.data.recipes);
            setFiltered(Api.data.recipes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        search();
    }, []);


    function fun1(e) {
        setInput(e.target.value);
    }

    function fun2() {
        const filter = data.filter((a) =>
            a.name.toLowerCase().includes(input.toLowerCase())
        );
        setFiltered(filter);

        if (filter.length === 0) {
            alert('No matching recipes found.');
        }
    }

    return (
        <>
            <div className='parent'>
                <div className="input">
                    <input onChange={fun1} type="text" placeholder='Search Your Dishes' />
                    <button onClick={fun2} >Search</button>
                </div>
            </div>
            <div className="cards">
                {
                    filtered.map((a) => {
                        console.log(a);
                        
                        return (
                            <div className='info'>
                                <img width='20%' src={a.image} alt="" />
                                <p>{a.name}</p>
                                <p><strong>Cuisine</strong> - {a.cuisine}</p>
                                <p><strong>Calories</strong> - {a.caloriesPerServing}</p>
                                <p><strong>Ingredients</strong> - {a.ingredients}, {a.ingredients[1]}, {a.ingredients[2]}, {a.ingredients[3]}</p>
                                <p><strong>Meal Type</strong> - {a.mealType}</p>
                                <p><strong>Instructions</strong> - {a.instructions[0]} {a.instructions[1]} {a.instructions[2]} {a.instructions[3]} {a.instructions[4]} {a.instructions[5]} {a.instructions[6]} {a.instructions[7]} {a.instructions[8]} {a.instructions[9]} {a.instructions[10]}</p>
                                <p><strong>Rating</strong> - {a.rating}</p>
                                <p><strong>Tags</strong> - {a.tags[0]} , {a.tags[1]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Axios;




