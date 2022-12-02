import React, { useState } from "react";
import Form from "./components/Form";
import { tasks as data } from "./assets/tasks";
import TaskList from "./components/Tasklist";

function App() {
  ////////////////////////////
  const [tasks, setTasks] = useState(() => {
    const item = window.localStorage.getItem("TAREAS");
    return item ? JSON.parse(item) : [];
  });

  function btn() {
    if (titulo !== "" && descripcion !== "") {
      let nuevo = [{ title: titulo, description: descripcion }];

      if (tasks.find((n) => n.title === nuevo[0].title)) {
        alert("ya existe");
      } else {
        setLocal(tasks.concat(nuevo));
      }
    } else {
      alert("Introduce datos ");
    }
    setTitulo("");
    setDescripcion("");
  }
  //////////////////////////////
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function changeTitulo(e) {
    setTitulo(e.target.value);
  }
  function changeDescripcion(e) {
    setDescripcion(e.target.value);
  }
  /////
  // ELIMINAR TAREA
  function del(id) {
    setLocal(tasks.filter((elemento, index) => index != id));
  }

  /////
  // LOCAL STORAGE
  function setLocal(value) {
    setTasks(value);

    let guardar = JSON.stringify(value);
    window.localStorage.setItem("TAREAS", guardar);
  }

  return (
    <main className="bg-zinc-900 h-screen ">
      <div className="container mx-auto p-4">
        <Form
          titulo={titulo}
          descripcion={descripcion}
          changeTitulo={changeTitulo}
          changeDescripcion={changeDescripcion}
          btn={btn}
        />
        <TaskList tasks={tasks} del={del} />
      </div>
    </main>
  );
}

export default App;
