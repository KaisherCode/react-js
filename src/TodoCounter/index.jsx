function TodoCounter({ total, completed }) {
      if(total===0 && completed ===0){
        return(
          <h1 className=" text-2xl font-bold text-center p-12 m-0 text-indigo-400 ">
          No hay tareas que realizar, agrega una.
        </h1>
        )
      } 
      if(total===completed){
        return(
          <h1 className=" text-2xl font-bold text-center p-12 m-0 text-indigo-400 ">
          Felicidades!, no tienes TODOS pendientes.
        </h1>
        )
      } else{
        return(
          <h1 className=" text-2xl font-bold text-center p-12 m-0 ">
          <span className=" text-indigo-400 ">Has completado</span> {completed} <span className=" text-indigo-500 ">de</span> {total} <span className=" text-indigo-400 ">TODOS</span>
        </h1>
        )
      }
}

export { TodoCounter }