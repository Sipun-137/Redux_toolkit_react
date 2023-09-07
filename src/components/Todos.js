import React from 'react'
import { useSelector } from 'react-redux'


import Card from './Card';

function Todos() {
  const todos=useSelector(state=>state.todos)
  console.log(todos);
  return (
    <>
    <h1 className='p-2 m-2  bg-slate-300 text-2xl font-semibold font-mono'>Todos</h1>
    <div className='flex flex-wrap flex-row justify-around items-center m-2  bg-slate-200 p-8 '>
    {todos.length!==0?
    todos.map(obj=>(
      <Card  key={obj.id} {...obj} />
    
)):<p className='text-xl uppercase font-semibold'>Empty Todo List. Please Insert some work list to Do.....</p>
    }
</div>
    
    </>
  )
}

export default Todos