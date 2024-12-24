import React, { useState } from 'react'

const Inc = () => {

    const [counter,setCounter]=useState(15);
    const addelement=()=>{
        setCounter(counter+1)
    }
    const removeelemt=()=>{
        setCounter(counter-1)
    }

  return (
    <div>
      <h1>Hello thanks for play this game</h1>
      <p>Here is your count {counter}</p>
      <button onClick={addelement}>Increment</button>
      <button onClick={removeelemt}>Decrement</button>
    </div>
  )
}

export default Inc
