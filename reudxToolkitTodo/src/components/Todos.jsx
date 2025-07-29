import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';       


export default function Todos(){
    
    const todos = useSelector(state=>state.todos); //useSelector hook to get todos from state
    const dispatch = useDispatch(); //useDispatch hook to dispatch actions
    
    return (
        <div className='bg-gray-200 p-4'>
            <h1 className='bg-red-500 px-4 font-bold text-2xl text-white mt-2 mb-4'>Todos</h1>
            <div>
                {todos.map(todo=>(
                    <li key={todo.id}>{todo.text}
                    <button 
                    className='bg-red-500 text-white px-2 ml-2 rounded'
                    onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))}
            </div>
        </div>
    );
}


//store banana hai 
//reducers banana hai
//actions banana hai
//components mein use karna hai
//useSelector hook to get state
//useDispatch hook to dispatch actions      
//useSelector hook to get todos from state
//useDispatch hook to dispatch actions to add or remove todos