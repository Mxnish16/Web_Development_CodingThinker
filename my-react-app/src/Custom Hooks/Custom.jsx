import React, { useState } from 'react'

const Custom = () => {
    let [count,SetCount] = useState(0)
    let [color,SetColor] = useState('Black')

    const increment = () => SetCount(count + 1)
    const decrement = () => SetCount(count - 1)
    const bgcolor = () => {
        color === 'Black'? SetColor('green') :SetColor('red')
    }
   
    return {count,increment,decrement,bgcolor,color}
}

export default Custom