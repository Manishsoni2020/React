import React from 'react'
import UseToggle from './UseToggle'
const Abc = () => {

    const[isVis,setIsVis]=UseToggle();
    console.log(isVis);
    
  return (
    <div>
      <button onClick={setIsVis}>
        {isVis?'Hide':'show'}
        Message
      </button>
      {isVis && <p>hello this is toggle message</p>}
    </div>
  )
}

export default Abc
