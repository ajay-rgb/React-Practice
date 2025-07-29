import { useState } from 'react'
import Todo from './components/Todos'
import AddTodo from './components/AddTodo'



function App() {

  return (
    <>
    <div className=' p-4'>
      <h1 className='text-red-500 font-bold text-5xl'>Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </div>
     
    
    </>
  )
}

export default App
