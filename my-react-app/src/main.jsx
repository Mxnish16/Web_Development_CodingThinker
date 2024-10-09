import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './useContext/Context.jsx'

// import './TodoList.css'

createRoot(document.getElementById('root')).render(
   
     <Context.Provider value='Hey Manish!'>
        <App/>
     </Context.Provider>
)
