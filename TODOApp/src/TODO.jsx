import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function TODO({random, task, deleteTodo, editTodo }) {

  return (
    <div
      className={`bg-gradient-to-r from-random-color_2-primary to-random-color_2-secondary w-3/4 my-3 p-3 rounded-lg flex items-center justify-between`}
    >
      <p className="text-3xl font-bold">{task.task}</p>
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
