import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import TODO from './TODO.jsx'



function EditTODO ({editTodo, task})  {
  
  
  const [value, setValue] = useState(task.task)
  
  const handleSubmit = e =>
  {
    e.preventDefault();
    editTodo(value, task.id)
    setValue("")
  }


  
  return (
    <>
      <div className="bg-purple-900 text-white flex flex-col rounded-lg w-3/5">
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input
            className="outline-none border-2 w-2/4 placeholder-white border-purple-600 bg-transparent"
            placeholder="Módosított"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="bg-purple-600 p-2 font-bold">Frissít</button>
        </form>
        <div className="flex flex-col items-center justify-center">
          
        </div>
      </div>
     
    </>
  );
}

export default EditTODO;
