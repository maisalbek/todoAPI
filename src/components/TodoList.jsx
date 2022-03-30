import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({infos}) => {
    return (
        <div>
            {
              infos?.length && infos.length > 0 ? infos.map(item => <TodoCard key={item.id} item={item}/>):( <h4>No Todos</h4> )
            }
        </div>
    );
};

export default TodoList;