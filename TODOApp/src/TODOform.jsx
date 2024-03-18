import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import TODO from './TODO.jsx'
import EditTODO from "./EditTODO.jsx";



function TODOform ({ addTodo, editTodo, editTask, Addtodos, deleteTodo})  {
  
  const [value, setValue] = useState("")


  const handleSubmit = e =>
  {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  
  
  return (
    <>
      <div className="bg-purple-900 text-white flex flex-col rounded-lg w-3/5">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon className="size-7" icon={faClock} spin />
          <h1 className="text-4xl font-bold p-5">Napi feladatok</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input
            className="outline-none border-2 w-2/4 placeholder-white border-purple-600 rounded-l-lg  p-2 bg-transparent"
            placeholder="Feladat"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="bg-purple-600 p-2 font-bold rounded-r-lg" >Feljegyez</button>
        </form>
        <div className="flex flex-col items-center justify-center">
            {Addtodos.map((todo, index) => (
              todo.isEditing ? (
                <EditTODO Addtodos={Addtodos} key={index} editTodo={editTask} task={todo}/>
              )
              :
              (
                <TODO task={todo}  key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>              )
          ))}
        </div>
      </div>
     
    </>
  );
}

export default TODOform;
