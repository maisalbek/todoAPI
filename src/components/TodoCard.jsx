import React, { useContext } from 'react';
import { context } from '../Context';

const TodoCard = ({item}) => {
    const { del, getBool } = useContext(context)

    return (
        <div>
             <h3>{item.name}</h3>
             <h3>{item.phone}</h3>
            <button onClick={()=>getBool(item)}>Edit</button>
            <button onClick={()=>del(item)}>Delete</button>
        </div>
    );
};

export default TodoCard;