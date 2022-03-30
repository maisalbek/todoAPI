import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate()
    const [curr, setCurr] = useState(0)
    return (
        <div>
            <h1>Counter</h1>  
            <button onClick={()=>setCurr(curr+1)}>+</button>
            <button onClick={()=>setCurr(curr-1)}>-</button>
            <h1>{curr}</h1>
            <div>
            <button onClick={()=>navigate(1)}>next</button>
            </div>
        </div>
    );
};

export default Home;    <h1>This is Home page</h1>