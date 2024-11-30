import React, { useState } from "react";
import Button from "../botton";

const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editToDo(value, task.id);
    setValue("");
  };
  return (
    <div className=" place-items-center mt-16 w-3/4 min-h-5 p-8   bg-orange-400">
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"Update task"}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button title={"Update task"} />
      </form>
    </div>
  );
};

export default EditToDoForm;
