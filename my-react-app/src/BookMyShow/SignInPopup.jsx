import React, { useEffect, useState } from 'react'
import './web.css'

const SignInPopup = () => {
    let [display, setDisplay] = useState('none')
    let [otpdisplay, setotpDisplay] = useState('none')
    let [input, setInput] = useState()
    // let [done, setDone] = useState()

    function fun1() {
        
        setDisplay('block')
        setotpDisplay('none')
        setDone('none')
    }

    function fun2(e) {
        e.preventDefault()
        setDone('none')
        setDisplay('none')
      
        setotpDisplay('block')
        let OTP = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem('OTP', OTP)
    }

    function fun3(event) {
    
        let num = event.target.value
        localStorage.setItem('phoneNumber', num)
    }

    function inp(e) {
        setInput(e.target.value)
    }

    function submitOtp(h) {
        let value = localStorage.getItem('OTP') 
        
        if(value  == input) {
            alert('Congratulations!')
        } else {
            alert('Oops Try Again !')
        }
    }

    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <p>BookMyShow</p>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Search Anything...' />
                    </div>
                    <div className="login">
                        <button onClick={fun1}>Login In</button>
                    </div>
                </div>
            </nav>

            <form style={{ display: display }}>
                <div className="form-container" >
                    <div className="cancel">
                        <button>x</button>
                    </div>
                    <div className="title">
                        <p>LOGIN</p>
                    </div>
                    <div className="email">
                        <input type="text" placeholder='Enter your Email ' />
                    </div>
                    <div className="username">
                        <input type="text" placeholder='Enter your Username' />
                    </div>
                    <div className="password">
                        <input type="password" placeholder='Enter your Password' />
                    </div>
                    <span>OR</span>
                    <div className="phoneno">
                        <input onChange={fun3} type="tel" placeholder='Enter Your Phone no' />
                    </div>
                    <div className="Otp">
                        <button onClick={fun2}>Send OTP</button>
                    </div>
                </div>
            </form>

            <form action="submit">
                <div style={{ display: otpdisplay }} className="otp-container">
                    <div className="otp-p">
                        <p>Enter One Time Password</p>
                    </div>
                    <div className="input-container">
                        <input onChange={inp} type="number" maxlength="6" className="digit" />
                    </div>
                    <div className="otp-button">
                        <button onClick={submitOtp}>Submit</button>
                    </div>
                </div>
            </form>

            <div style={{display: done}} className='verify'>
                <p>Congratulations !!!</p>
            </div>
        </div>
    )
}

export default SignInPopup