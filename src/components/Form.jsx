import React, { useState } from "react";
import TaskList from "./Tasklist";

const Form = ({
  changeTitulo,
  changeDescripcion,
  titulo,
  descripcion,
  btn,
}) => {
  return (
    <div className="bg-slate-800 p-10 mb-10 max-w-md mx-auto rounded-md">
      <h1 className="text-white mb-5 text-3xl font-bold">Crear tu tarea</h1>
      <input
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
        type="text"
        placeholder="Titulo"
        onChange={changeTitulo}
        value={titulo}
      />
      <textarea
        style={{ resize: "none" }}
        className="bg-slate-300 p-3 w-full mb-2 "
        type="text"
        placeholder="Descripción"
        onChange={changeDescripcion}
        value={descripcion}
      />
      <button
        className="bg-indigo-500 py-3 px-1 text-white rounded-md"
        onClick={btn}
      >
        Agregar
      </button>
    </div>
  );
};

export default Form;
