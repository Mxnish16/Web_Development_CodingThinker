import React, { useState } from 'react'

const Clock = () => {
    let [Time , SetTime] = useState()
    let date = new Date().toLocaleDateString()
    setInterval(() => {
        let Time = new Date().toLocaleTimeString()
        SetTime(Time)
    })
  return (
    <div>
        <h1> {Time} </h1>
        <h1>{date}</h1>
    </div>
  )
}
 
export default Clock