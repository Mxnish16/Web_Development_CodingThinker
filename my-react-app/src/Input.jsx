import React, { useState } from 'react'
import New from './New'

const Input = () => {
    let [Input,setInput] = useState()
    let [Output,setOutput] = useState()
    function fun1(e) {
        setInput(e.target.value)
    }

    function fun2() {
        setOutput(Input)
    }

  return (
    <div>
        <h1>Final Output is <u>{Output}</u></h1>
        <input 
        onChange={fun1} 
        style={{width:'200px', height:'25px', fontSize:'20px', fontFamily:'verdana'}} 
        placeholder='Enter your Name'/>
        <button 
        onClick={fun2} 
        style={{fontSize:'20px', fontFamily:'verdana'}}>Click Here</button>
    </div>
  )
}

export default Input


