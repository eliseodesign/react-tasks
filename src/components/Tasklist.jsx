import React, { useState } from "react";
import Form from "./Form";
import "../style/Taskslist.css";

function TaskList({ tasks, del }) {
  if (tasks.length === 0) {
    return <h1 className="text-xl text-white">No hay tareas</h1>;
  }

  return (
    <div className="container-tasks gap-2  m-auto">
      {tasks.map((task, i) => {
        return (
          <div key={i} className="bg-gray-800 text-white p-4 rounded-md">
            <h2 className="text-xl font-bold text-sky-300 capitalize">
              {task.title}
            </h2>
            <p className="text-gray-500 text-md">{task.description}</p>

            <button
              className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
              onClick={() => {
                del(i);
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
