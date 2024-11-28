import React from 'react'
import Button from '../botton'

const ToDo = ({task ,deleteTodo}) => {
    
  return (
    <div >
        
        <ul>
        
        <li >{task.task}<Button title={"Delete"} onClick={()=>deleteTodo(task.id)}/>  <Button title={"Edit"} /></li>
        </ul>
        <div></div>
        
    </div>
  )
}

export default ToDo 