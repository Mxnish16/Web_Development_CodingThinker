import React, { useState } from 'react'

const FormControl = () => {
    let [input,SetInput] = useState({
        name:'',
        email:'',
        password:''
    })

    function fun1(e) {
        let {name,value} = e.target
        SetInput({...input,[name]:value})
    }

    function done(e){
        e.preventDefault()
        console.log('heheheh',input);
        
      }

  return (
    <>
        <form onSubmit={done} style={{padding:'50px 100px', border:'2px solid red', width:'400px', marginTop:'50px', marginLeft:'280px'}}>
        <h2>Form</h2>
        <input onChange={fun1} type="text" placeholder='Enter Your Name!' name="name" value={input.name} />
        <br />
        <br />
        <input onChange={fun1} type="email" placeholder='Enter Your Email!' name="email" value={input.email}  />
        <br />
        <br />
        <input onChange={fun1} type="password" placeholder='Enter Your Password!' name="password" value={input.password} />
        <br />
        <br />
        <button  type='submit' style={{fontSize:'12px', padding:'2px 12px', borderRadius:'5px'}}>save your details</button>
        </form>
    </>
  )
}

export default FormControl