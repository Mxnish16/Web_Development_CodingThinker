import React, { useState } from 'react'

const Todo = () => {
    let [input,setInput] = useState('')
    let [data,setData] = useState( [] )

    function fun1(e) {
        setInput(e.target.value)
    }

    function fun2() {
        setData([...data,input])
        setInput('')
    }

    function fun3(id) {
        let newData = data.filter((x,y) => {
            return y!=id
        })
        setData(newData)
    }
  return (
    <div>
        <h1>Todo List</h1>
        <input onChange={fun1} value={input} type="text" />
        <button onClick={fun2}>Add</button>
        {
            data.map((a,b) => {
                return(
                    <>
                    <li key={b}>{a}</li>
                    <button onClick={()=>fun3(b)}>Delete</button>
                </>
                )  
            })
        }
    </div>
        
  )
}

export default Todo