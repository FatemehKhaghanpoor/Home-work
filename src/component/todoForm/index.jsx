import React, { useState } from 'react'
import Button from '../botton'


const ToDoForm = ({addTodo}) => {
    const [value , setValue]= useState(""); 
    const handleSubmit= (e)=>{
        e.preventDefault();
        addTodo(value);
        setValue("")
        
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='what is the task to day?' value={value} onChange={(e)=>{setValue(e.target.value) }} /> 
    <Button  title={"Add Task"}/>
</form>

  )
}

export default ToDoForm