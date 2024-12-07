import axios from 'axios';
import React,{useState,useEffect} from 'react'

const TestApi = () => {

    const[data,setData]=useState([]);
    const[search,setSearch]=useState("");

    useEffect(()=>{
        testfetch();
    },[])
    
    const testfetch= async()=>{
        const testResult= await axios.get('https://dummyjson.com/products');
        console.log(testResult.data.products);
        setData(testResult.data.products)
    }
    // const filterData=data.filter((item)=>{
    //     const resultData = item.title.toLowerCase().includes(search.toLowerCase());
    //     console.log(`>>>>>>>>>>>>resultData`,resultData);
        
    //     return resultData;
    // })

    const filterData=data.filter((item)=>
    item.title.toLowerCase().includes(search.toLowerCase())
    
        
    )
   
    
  return (
    <div>
        <div>
        <input type="text" placeholder='search here' 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        </div>
      {data && filterData.map((item)=>
      <div key={item}>
        <p>Title:- {item.title}</p>
        <p>Category:- {item.category}</p>
        <p>Price:- {item.price}</p>
        <img src={item.thumbnail} alt="" />
      </div>
    )}
    </div>
  )
}

export default TestApi
