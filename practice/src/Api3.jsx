import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api3 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getapi();
    }, [])

    const getapi = async () => {
        const res = await axios.get('https://dummyjson.com/quotes');
        console.log(res.data);
        setData(res.data.quotes);
    }

    return (
        <div>
            {data.map((item,index) => (
                <div key={index}>
                    <p>Quotes: {item.quote}</p>
                </div>
            ))}
        </div>
    );
}

export default Api3
