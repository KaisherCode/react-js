function TodoCounter({ total, completed }) {
  return (
    <h1 className=" text-xl">
      Has completado {completed} de {total} TODOS
    </h1>
  )
}

export { TodoCounter }