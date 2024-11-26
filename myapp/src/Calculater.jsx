import React,{useState} from 'react'

const calculater = () => {
  const initialValue=110;
    const[num1,setNum1]=useState(initialValue);
  return (
    <div>
      <h1>this is calculator value {num1}</h1>
      <button onClick={()=>{setNum1(num1+1)}}  
      style={{color:'red',margin:'10px',padding:'5px'}}>INCREASE</button>
      <button onClick={()=>{if (num1-1<0) {
        alert('Value cannot be less then 0')
      } else {
        setNum1(num1-1);
      }}} 
      style={{color:'green',margin:'10px',padding:'5px'}}>DECREASE</button>
      <button onClick={()=>{setNum1(num1*2)}}  
      style={{color:'red',margin:'10px',padding:'5px'}}>MULTIPLY</button>
      <button onClick={()=>{if (num1/5<0) {
        alert('Value is cannot less then 0')
      } else {
        setNum1(num1/5);
      }}}  
      style={{color:'red',margin:'10px',padding:'5px'}}>DIVIDE</button>
      <button onClick={()=>{setNum1(initialValue)}} 
      style={{color:'black',margin:'20px',padding:'10px'}}>REST</button>
    </div>
  )
}

export default calculater
