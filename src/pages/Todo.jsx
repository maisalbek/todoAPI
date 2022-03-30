import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Todo.css'
import TodoList from '../components/TodoList';
import { context } from '../Context';
import TodoEdit from '../components/TodoEdit';
import axios from "axios";

const API = 'http://localhost:8001/todos'

const Todo = () => {
    const [infos, setInfos] = useState([])
    const [info, setInfo] = useState({id: null, name: '', phone: ''})
    const [forEdit, setForEdit] = useState([])
    const [editModal, setEditModal] = useState(false)
    const navigate = useNavigate()
    async function show(){
        try{
            let res = await axios(API)
            setInfos(res.data)
        }catch(err){
            console.log(err);
        }
    }
    function handleChange(e){
        let obj = {
            ...info,
            [e.target.name] : e.target.value
        }
        setInfo(obj)
    }
    async function ok(){
        if(!info.name || !info.phone){
            alert("Error Fill the blanks! ")
        }else{
            try{
                await axios.post(API,info)
                show()
            }catch(err){
                console.log(err);
            }
            setInfo({id: null, name: '', phone: ''})
        }
    }
    async function del(obj){
        try{    
            await axios.delete(`${API}/${obj.id}`)
            show()
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        show()
    },[])
    async function getBool(obj){
        try{
            let {data} = await axios.get(`${API}/${obj.id}`)
            setForEdit(data)
        }catch(err){
            console.log(err);
        }
        setEditModal(true)
    }
    async function saveEdit(obj){
        try{
            let res = await axios.patch(`${API}/${obj.id}`, obj)
            show()
        }catch(err){
            console.log(err);
        }
        setEditModal(false)
    }
    return (
        <context.Provider value={{
            infos, del, getBool,forEdit, setEditModal, setForEdit, saveEdit
        }}>
        <div className='cont'>
            <h4>Add New Todo</h4>
            <input  value={info.name} onChange={(e)=>handleChange(e)} type="text" name='name' placeholder='Name'/>
            <input value={info.phone} onChange={(e)=>handleChange(e)} type="text" name='phone' placeholder='Todo'/>
            <button onClick={ok}>Ok</button>
            {
                editModal ? <TodoEdit />: null
            }
            <TodoList infos={infos}/>
            <button onClick={()=>navigate(-1)}>prev</button>
        </div>
        </context.Provider>
    );
};

export default Todo;