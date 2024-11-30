import React, { useState } from 'react'
import Button from '../botton'


const EditToDoForm = ({editToDo ,task}) => {
    const [value , setValue]= useState(task.task); 
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        editToDo(value , task.id );
        setValue("")
        
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder={"Update task"} value={value} onChange={(e)=>{setValue(e.target.value) }} /> 
    <Button  title={"Update task"}/>
</form>

  )
}

export default EditToDoForm;