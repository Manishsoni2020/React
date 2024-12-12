import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const TestApi = () => {

    const[data,setData]=useState([]);
    const[search,setSearch]=useState("");
    const[sort,setSort]=useState([])


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

    const detailbtn=(id)=>{
      console.log(id);
      
    }
   const sortedData=[...filterData].sort((a,b)=>{
    if(sort==='asc')
      {
        return a.price-b.price
      }
      if(sort==='dsc')
      {
        return b.price-a.price
      }
   })
  return (
    <div>
        <div>
        <input type="text" placeholder='search here' 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button onClick={()=>setSort('asc')}>Low to High</button>
        <button onClick={()=>setSort('dsc')}>High to Low</button>
        </div>
      {data && sortedData.map((item)=>
      <div key={item}>
        <p>Title:- {item.title}</p>
        <p>Category:- {item.category}</p>
        <p>Price:- {item.price}</p>
        <LazyLoadImage 
        src={item.thumbnail}
        effect="blur"
    wrapperProps={{
        style: {transitionDelay: "2s"},
    }}
        />
        {/* <img src={item.thumbnail} alt="" /> */}
        <button onClick={()=> detailbtn(item.id)}>Detail</button>
      </div>
    )}
    </div>
  )
}

export default TestApi
