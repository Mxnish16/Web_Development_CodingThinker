import React from 'react'
import { useEffect , useState , useRef } from 'react'

const Refrence = () => {
    let [state,setState] = useState('')
    let use = useRef(0)

    useEffect(() => {
        use.current = use.current + 1
    },[state])
  return (
    <>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <h2>{use.current}</h2>
    </>
  )
}

export default Refrence