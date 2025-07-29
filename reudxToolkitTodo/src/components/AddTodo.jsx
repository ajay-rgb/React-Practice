import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice';

export default function Todos() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();//useDispatch hook to dispatch actions

    const addTodoHandler = (e)=>{
        e.preventDefault();
        if(input.trim() === '') return; //prevent adding empty todos
        dispatch(addTodo(input));
        setInput(''); //clear input field after adding todo
    }

    return (
        <div className='mt-4'>
           <form>
            <input type="text" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='border p-2 rounded'
            placeholder='Add a new todo'
            />
            <button
            type='submit'
            onClick={addTodoHandler}
            className='bg-red-500 text-white px-4 py-2 rounded ml-2'
            
            >Add</button>
           </form>
        </div>
    );
}