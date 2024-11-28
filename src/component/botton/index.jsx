import React from 'react'

 const Button = ({type , onClick , title ,...props}) => {
  return (
    <button
    type={type || "submit"}
    className="bg-blue-500 text-white rounded  p2 hover:bg-blue-600 transition w-40 disabled:bg-gray-500"
    onClick={onClick && onClick}
    {...props}
  >
    {title}
  </button>
  )
}
export default Button;