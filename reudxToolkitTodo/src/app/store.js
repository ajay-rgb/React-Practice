import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


 const store = configureStore({
    reducer: todoReducer
});

export default store; //export the store to use in the app