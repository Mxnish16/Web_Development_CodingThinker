import React from 'react'
import './Routing.css'
import { Link } from 'react-router-dom'

const RoutingNav = () => {
  return (
    <>
        <nav>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
        </nav>
    </>
  )
}

export default RoutingNav