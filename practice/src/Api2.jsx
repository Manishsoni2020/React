import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Api2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fatchdata();
  },[]);

  const fatchdata = async () => {
    const result1 = await axios.get("https://dummyjson.com/carts")
    console.log(result1.data);
    setData (result1.data.carts);

  }

  return (
    <div>
      {data.map((item,index)=>
      <div key={index}>
        <p>Carts:- {item.total}</p>
      </div>
      )}
    </div>
  )
}

export default Api2
