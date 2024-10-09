 import React, { useContext } from 'react'
 import Context from './Context'
 
 const HomeContext = () => {
  
  let data= useContext(Context)
  
    return (
     <div>
        <h2>{data}</h2>
     </div>
   )
 }
 
 export default HomeContext