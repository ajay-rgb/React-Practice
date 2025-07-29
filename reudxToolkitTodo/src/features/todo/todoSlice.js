
import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1, text:"hwllow world"}]
}

export const todoSlice = createSlice({
    name: 'todo',//property name
    initialState,
    reducers : {//isme aati h properties aur methods
    //unlike use context we have to define methods here
        addTodo : (state, action)=>{
            const todo = {
                id: nanoid(), //generate unique id
                text: action.payload //get text from action payload
            }
            state.todos.push(todo); //push todo to the todos array
        },
        removeTodo: (state, action)=>{
            const id = action.payload; //get id from action payload
            state.todos = state.todos.filter(todo => todo.id !== id); //filter out the todo with the given id(overwriting pprev state)       
        },
        updateTodo: (state, action)=>{
            const {id,text} =action.payload; //get id and text from action payload
            const todo = state.todos.find(todo=>todo.id === id); //find the todo with the given id
            if(todo){
                todo.text = text; //update the text of the todo
            }
        }
    }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions; //export actions
export default todoSlice.reducer; //export reducer