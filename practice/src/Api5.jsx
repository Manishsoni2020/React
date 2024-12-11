import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Api5 = () => {

    const [data, setData] = useState([]);
    const[search,setSearch]=useEffect("");

    useEffect(() => {
        she_fetch();
    },[])

    const she_fetch = async () => {
        const result = await axios.get('https://dummyjson.com/comments');
        console.log(result.data.comments);
        setData(result.data.comments);
    }


    return (
        
        <div>
            <input type="search" 
            placeholder='search here' 
            value={search}
            onChange={(f)=>setSearch(f.target.value)}
            />
            {data.map((item, index) =>
                <div key={index}>
                    Id :-{item.id}
                    <br />
                   Body :- {item.body}
                </div>
            )}
        </div>
    )
}

export default Api5
