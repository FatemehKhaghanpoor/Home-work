import React, { useState } from 'react'
import Button from '../botton'


const ToDoForm = () => {
    const [value , setValue]= useState(""); 
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(value);
        
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='what is the task to day?' onChange={(e)=>{setValue(e.target.value) }} /> 
    <Button  title={"Add Task"}/>
</form>

  )
}

export default ToDoForm