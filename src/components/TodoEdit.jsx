import React, { useContext, useState, useEffect } from 'react';

import { context } from '../Context';

const TodoEdit = () => {
    const { forEdit, setEditModal, saveEdit } = useContext(context)
    const [inpValue, setInpValue] = useState({name: '', phone: ''})

    useEffect(()=>{
        if(forEdit){
            setInpValue(forEdit)
        }
    }, [forEdit])
   const handleChange=(e)=>{
    let obj = {
        ...inpValue,
        [e.target.name] : e.target.value
    }
    setInpValue(obj)
    }
    function handleSubmit(){
        saveEdit(inpValue)
        setInpValue({name: '', phone: ''})
    }
    return (
        <div style={{border: 'solid'}}>
            <h4>Change Todo</h4>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <input onChange={(e)=>handleChange(e)} value={inpValue.name} type="text" name='name' placeholder='Name'/>
            <input onChange={(e)=>handleChange(e)} value={inpValue.phone} type="text" name='phone' placeholder='Todo'/>
            </div>
            <button onClick={()=>handleSubmit()}>Save</button>
            <button onClick={()=>setEditModal(false)}>Cancel</button>
        </div>
    );
};

export default TodoEdit;