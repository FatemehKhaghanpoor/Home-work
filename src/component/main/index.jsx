import React, {useState } from "react";

const Main = () => {
  const [newItem , setNewItem]= useState();
  const addItem=()=>{
    console.log(newItem);
    
  }
  return (
   <div>
    <div className="justify-self-center " > 
      <input type="text"
      placeholder="add an item"
      value={newItem}
      onChange={e =>setNewItem(e.target.value)}
       />
       <button onClick={()=>{addItem()}}>add</button>
    </div>
    <div className="justify-self-center ">
      <ul>
        <li>take out</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
   </div>
  );
};
export default Main;
