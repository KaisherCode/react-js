import React from "react"
import { TodoContext } from '../TodoContext'

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
    } = React.useContext(TodoContext)
  if (totalTodos === 0 && completedTodos === 0) {
    return (
      <h1 className=" border border-indigo-400 text-2xl font-bold text-center p-12 m-0 text-indigo-400 bg-green-100 rounded-lg ">
        No hay tareas que realizar, agrega una.
      </h1>
    )
  }
  if (totalTodos === completedTodos) {
    return (
      <h1 className=" border border-indigo-400 text-2xl font-bold text-center p-12 m-0 text-indigo-400 bg-green-100 rounded-lg ">
        No tienes tareas pendientes.
      </h1>
    )
  } else {
    return (
      <h1 className=" border border-indigo-400 text-2xl font-bold text-center p-12 m-0 bg-green-100 rounded-lg ">
        <span className=" text-indigo-400 ">Has completado</span> {completedTodos} <span className=" text-indigo-500 ">de</span> {totalTodos} <span className=" text-indigo-400 ">tareas</span>
      </h1>
    )
  }
}

export { TodoCounter }