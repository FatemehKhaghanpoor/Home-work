import React, { useState } from 'react'
import ToDoForm from '../todoForm';
import ToDo from '../todo/idex';

const ToDoWrapper= () => {
    const [ todos , setTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos([{id:Math.random(),task:todo ,completed:false ,editing:false},...todos])
        console.log(todos);
        
    }
    const deleteTodo=(id)=>{
     setTodos(todos.filter(todo =>todo.id !==id))
    }
  return (
    <div>
        <ToDoForm addTodo={addTodo}/>
        {todos.map((todo , id)=>(<ToDo task={todo} key={id} deleteTodo={deleteTodo}/>)) }
    </div>
  )
}
export default ToDoWrapper;