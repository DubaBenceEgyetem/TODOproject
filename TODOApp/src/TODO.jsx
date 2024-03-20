import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function TODO({ task, deleteTodo, editTodo }) {
  const [padding, setPadding] = useState(false);

  function handleClick() {
    setPadding(!padding);
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={` gap-2 w-4/5  my-3 p-3 rounded-lg flex items-center 
      ${
        padding
          ? "bg-red-600 animate-shake"
          : "bg-gradient-to-r from-color_2-primary to-color_2-secondary"
      }`}
    >
      <input
        type="checkbox"
        className="size-4 outline-none rounded-full"
        onClick={handleClick}
      />
      <p
        className={`text-[10px] md:text-xl lg:text-3xl font-bold ${
          padding
            ? "text-gray-300 ease-in-out duration-300 px-2 line-through"
            : "ease-in-out duration-300"
        }`}
      >
        {task.task}
      </p>
      <div className="flex-grow"></div>
      <div className="space-x-3 ml-auto items-center flex cursor-pointer">
        <FontAwesomeIcon
          className="size-4"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
        <FontAwesomeIcon
          className="size-4"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default TODO;
