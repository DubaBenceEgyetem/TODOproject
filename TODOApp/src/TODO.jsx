import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";






function TODO({ task, deleteTodo, editTodo }) {
  
  const [padding, setPadding] = useState(false)

  function  handleClick(){
    setPadding(!padding)
  }



  return (
    <div
      className={`bg-gradient-to-r from-random-color_2-primary gap-5 to-random-color_2-secondary w-3/4 my-3 p-3 rounded-lg flex  items-center`}
    >

      <input type="checkbox" className="size-4" onClick={handleClick}></input>
      <p className={`text-3xl font-bold ${padding ? ' text-gray-300 ease-in-out duration-300 px-2 line-through' : 'ease-in-out duration-300 '}`}>{task.task}</p>
      <div className="flex-grow"></div> 
      <div className="space-x-5  ml-auto">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default TODO;
