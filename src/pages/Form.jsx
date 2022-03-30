import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form1 from '../components/Form1';

const Profile = () => {
    let navigate = useNavigate()
    const [form, setForm] = useState(true)
    const [a,setA] = useState('')
    const getInfo=(current)=>{
        setA(current.email)
    }
    const getstat=(bool)=>{
        setForm(bool)
    }
    const exit =()=>{
        setForm(true)
        setA('')
    }
    return (
        <div>
<div style={{width: '400px',borderStyle: 'solid', marginBottom: '20px'}}>
            {
             form ? <Form1 getInfo={getInfo} getstat={getstat} /> : null
            }
            <h3>Your e-mail: {a}</h3>
            
            <button style={{marginBottom: '20px'}} onClick={()=>exit()}>Выйти</button>
        </div>            <button onClick={()=>navigate(-1)}>prev</button>
            <button onClick={()=>navigate(1)}>next</button>
        </div>
    );
};

export default Profile;