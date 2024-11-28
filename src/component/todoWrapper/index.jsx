import React, { useState } from 'react'
import ToDoForm from '../todoForm';

const ToDoWrapper= () => {
    const [ todos , setTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos([{id:Math.random(),task:todo ,completed:false ,editing:false},...todos])
    }
  return (
    <div>
        <ToDoForm addTodo={addTodo}/>
    </div>
  )
}
export default ToDoWrapper;