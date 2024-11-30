import React, { useState, useContext } from "react";
import Button from "../botton";
import { ThemeContext } from "../../context/theme-provider";

const ToDoForm = ({ addTodo }) => {
  const { isDark } = useContext(ThemeContext);

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div
      className={`flex justify-center  mt-16 w-3/4 min-h-20 p-8   ${
        isDark ? "bg-amber-950" : "bg-orange-400"
      }`}
    >
      <form onSubmit={handleSubmit} className="bg-orange-400 w-11/12">
        <input
          type="text"
          className="w-80 ml-24 mt-4  justify-self-center"
          placeholder="what is the task to day?"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            
          }}
        />
        <div className="flex justify-end">
         
          <Button title={"Add Task"} />
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
