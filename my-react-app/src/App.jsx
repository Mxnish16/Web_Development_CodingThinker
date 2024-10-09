import React from 'react'
import CountFunction from './countFunction';
import Clock from './Clock';
import Input from './Input';
import TodoList from './TodoList';
import UseEffect from './UseEffect';
// import Nav from "./Comp/Nav"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Refrence from './useRef/Refrence';
import Cart from './Add To Cart/Cart';
import Axios from './Axios';
import CustomHook from './CustomHook';
// import Website from './BookMyShow/website';
import SignInPopup from './BookMyShow/SignInPopup';
// import Navbar from './Comp/Navbar';
// import Carousel from './Comp/Carousel';
// import RoutingNav from './ROUTING/RoutingNav';
// import Homee from './ROUTING/Homee';
// import About from './ROUTING/About';
// import Contact from './ROUTING/Contact'
// import FormControl from './FormControl';
// import Login from './Form Login Signup/Login';
// import Signup from './Form Login Signup/Signup';

// import HomePage from './Form Login Signup/HomePage';
// import RoutingNav from './ROUTING/RoutingNav';
// import Count from './useReducer/Count';
// import HomeContext from './useContext/HomeContext';


const App = () => {
  return (
    <div>
      {/* <Input /> */}
      {/* <CountFunction /> */}
      {/* <Clock /> */}
      {/* <TodoList /> */}
      {/* <UseEffect /> */}
      {/* <Nav/> */}
      {/* <Navbar/> */}
      {/* <Carousel/> */}
      {/* <Count/> */}
      {/* <HomeContext/> */}
      {/* <Axios/> */}
      {/* <Refrence/> */}
      {/* <Cart/> */}
      {/* <CustomHook/> */}
      {/* <Website/> */}
      <SignInPopup/>

     
      {/* <Router>
      <RoutingNav/>
      <Routes>
      <Route path='/' element={<Homee/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router> */}

    {/* <Router>
      <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </Router> */}
    </div>
  )
}

export default App


