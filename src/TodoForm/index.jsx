import React from 'react'
import { TodoContext } from '../TodoContext'


function TodoForm() {
  const {addTodo,setOpenModal} = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}
      className=' rounded-lg p-10 bg-white flex justify-center items-center flex-col w-11/12 max-w-xs '>
      <label className=' text-lg mb-8 font-bold text-center text-indigo-500' >Escribe tu nuevo tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        required
        className=' bg-gray-50 rounded-md border border-slate-400 focus:outline-indigo-200 text-indigo-400 text-center p-4 h-24 w-11/12' placeholder='Ejemplo: Ir al gimnasio' >
      </textarea>
      <div className=' flex gap-2 p-4'>
        <button
          onClick={onCancel}
          type='button'
          className='p-2 rounded-sm shadow hover:shadow-lg font-normal w-24 cursor-pointer border border-indigo-200 text-indigo-500 bg-transparent'>Cancelar</button>
        <button
          type='submit'
          className='p-2 shadow hover:shadow-lg rounded-sm font-normal w-24 cursor-pointer border-none text-slate-70 bg-indigo-400'>Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }