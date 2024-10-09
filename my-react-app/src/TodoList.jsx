import React, { useState } from 'react'

const TodoList = () => {
    let [input, setInput] = useState('')
    let [data, setData] = useState([])

    function fun1(Input) {
        setInput(Input.target.value)
    }
    function fun2() {
        setData([...data, input])
        setInput('')
    }
    function del(index) {
        let newData = data.filter((key, value) => {
            return value !== index
        })
        setData(newData)
    }

    return (
        <div>
            <div className="container">
            <input onChange={fun1} id="inp" value={input} type="text" placeholder='Enter Your Products' />
            <button onClick={fun2}>Add</button>

            {
                data.map((a, b) => {
                    return (
                        <>
                            <li key={b}>{a}</li>
                            <button onClick={() => del(b)}>Delete</button>
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}

export default TodoList