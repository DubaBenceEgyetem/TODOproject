import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'


function TODO({ task, deleteTodo, editTodo }) {


  
  useEffect(() =>{
    Aos.init({duration: 1000})
}, [])

  return (
    <div  data-aos="fade-right"
      className={`bg-gradient-to-r from-random-color_2-primary to-random-color_2-secondary w-3/4 my-3 p-3 rounded-lg flex items-center justify-between`}
    >
      <p className="text-xs sm:text-3xl font-bold">{task.task}</p>
      <div className="space-x-5">
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
