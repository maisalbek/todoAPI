import React, { useState } from 'react';

const Form1 = ({getInfo, getstat}) => {
    const [current, setCurrent] = useState({email: '', password: '', passwordconf: ''})
    const handleChange=(e)=>{
        let obj = {
            ...current,
            [e.target.name] : e.target.value 
        }
        setCurrent(obj)
    }
    const handleSubmit=()=>{
        if(current.password===current.passwordconf){   
            getInfo(current)
            getstat(false)
        }else{
            alert('Your password did not match!')
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>    
            <label htmlFor="">Your email</label>
            <input onChange={(e)=>handleChange(e)} name='email' type="text" />
            <label htmlFor="">Password</label>
            <input onChange={(e)=>handleChange(e)} name='password' type="text" />
            <label htmlFor="">Confirmation</label>
            <input onChange={(e)=>handleChange(e)} name='passwordconf' type="text" />
            <button onClick={()=>handleSubmit()}>Войти</button>
        </div>
    );
};

export default Form1;