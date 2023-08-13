function TodoCounter({ total, completed }) {
  return (
    <h1 className=" text-2xl font-bold text-center p-12 m-0 ">
      Has completado {completed} de {total} TODOS
    </h1>
  )
}

export { TodoCounter }