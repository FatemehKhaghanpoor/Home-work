import React, { useContext, useState } from "react";
import ToDoForm from "../todoForm";
import ToDo from "../todo/idex";
import EditToDoForm from "../editToDoForm";
import { ThemeContext } from "../../context/theme-provider";

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const randomKey = Math.floor(Math.random() * 1000);
  const { isDark } = useContext(ThemeContext);

  const addTodo = (todo) => {
    if (todo === "") {
      alert("enter a task");
      return;
    }
    setTodos([...todos, { id: randomKey, task: todo, editing: false }]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, editing: !todo.editing } : todo
      )
    );
  };
  return (
    <div
      className={`   w-full h-lvh p-8   ${
        isDark ? "bg-amber-950" : "bg-orange-600"
      } `}
    >
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.editing ? (
          <EditToDoForm editToDo={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};
export default ToDoWrapper;
