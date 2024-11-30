import React from "react";
import Button from "../botton";

const ToDo = ({ task, deleteTodo, editToDo }) => {
  return (
    <div>
      <ul>
        <li>
          {task.task}
          <Button title={"Delete"} onClick={() => deleteTodo(task.id)} />{" "}
          <Button
            title={"Edit"}
            onClick={() => {
              editToDo(task.id);
            }}
          />
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default ToDo;
