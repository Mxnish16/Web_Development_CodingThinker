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
    <div style={{fontFamily:'monospace'}}>
      <h1>Final Output is 
        <b style={{color:'orange', fontSize:'30px', fontFamily:'verdana'}}> {Output}</b>
      </h1>
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


