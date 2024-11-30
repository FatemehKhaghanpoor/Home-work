import React from "react";

const Button = ({ type, onClick, title, ...props }) => {
  return (
    <button
      type={type || "submit"}
      className="bg-amber-400 text-white rounded  p-1 hover:bg-amber-800 transition w-40 disabled:bg-gray-500 "
      onClick={onClick && onClick}
      {...props}
    >
      {title}
    </button>
  );
};
export default Button;
