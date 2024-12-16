import React,{useState,useEffect} from 'react'
import axios from 'axios';

const ApiFatch = () => {
    const[data,setData]=useState();
    const[loading,SetLoading]=useState(true);
    
    useEffect(()=>{
        fetch();
    },[])

    const fetch= async()=>{
        const result= await axios.get('https://fakestoreapi.com/products')
        console.log(result.data);
        setData(result.data);
        
    }
    const update=()=>{
      SetLoading(!loading)
    }
  return (
    <div>
      <button onClick={update}>Click me</button>
      {data && data.map((index,item)=>
      <div key={item}>
        <p>Title :- {index.title}</p>
        <p>Category :- {index.category}</p>
        <p>Price :- {index.price}</p>
        <img src={index.image} alt="" />
      </div>
    )}
    </div>
  )
}

export default ApiFatch
