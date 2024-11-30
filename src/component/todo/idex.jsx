import React from "react";
import Button from "../botton";

const ToDo = ({ task, deleteTodo, editToDo }) => {
  return (
    <div className="x">
      <ul className=" overflow-y-auto  ">
        <li className="bg-orange-400 w-3/4 mt-6  P-2  text-orange-950 font-mono text-l italic font-extrabold">
          <span className="ml-10 p-2 ">{task.task}</span>
          <div className="flex justify-end">
            <Button title={"Delete"} onClick={() => deleteTodo(task.id)} />
            <Button
              title={"Edit"}
              onClick={() => {
                editToDo(task.id);
              }}
            />
          </div>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default ToDo;
