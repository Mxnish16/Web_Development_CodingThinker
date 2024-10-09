import React from 'react'
import './Custom Hooks/Custom'
import Custom from './Custom Hooks/Custom'

const CustomHook = () => {
    let {count,increment,decrement,bgcolor,color} = Custom()
  return (
    <div>
        <h2>CustomHook</h2>
        <h3>Count {count}</h3>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Less</button>
        <button onClick={bgcolor}>Green/Red</button>
    </div>
  )
}

export default CustomHook