import React, {useState } from "react";

const Main = () => {
  const [newItem , setNewItem]= useState();
  const [items, setItems]= useState([]);

  const addItem=()=>{
    if(!newItem ){
      alert("add new item");
      return
    }
    const item ={
      id: Math.floor(Math.random()*100) ,
      value:newItem
    };
    setItems(oldlist => [item ,...oldlist]);
    setNewItem("");
    console.log(items);
    
    
  }
  const deletItem =(id)=>{
const newArray =items.filter(item => item.id !==id)
setItems(newArray);
  }
  const editItem =(id)=>{
  console.log(id);
  
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
        {items.map((item)=>{
          return(
            <li key={item.id}>{item.value} <button onClick={()=>deletItem(item.id)}>deletItem</button> 
            <button onClick={()=>editItem(item.id)}>editItem</button>
            </li>
          )
        })}
      </ul>
    </div>
   </div>
  );
};
export default Main;
