import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Api4 = () => {
    const[data,setData]=useState([]);
    const[search,setSearch]=useState();
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        const apiresult= await axios.get('https://dummyjson.com/users');
        console.log(apiresult.data);
        setData(apiresult.data.users);
    }
  return (
    <div>
        <input type="search" 
        placeholder='Search here'
        />
      {data.map((item,index)=>  
      <div key={index}>
        <p>Id :-{item.id} FirstName :-{item.firstName} LastName :-{item.lastName}</p>
      </div>
    )}
    </div>
  )
}

export default Api4
