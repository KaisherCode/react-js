import React, { useState } from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

import './App.css'

const defaultTodos = [
  { text: 'Hacer 30 minutos de yoga', completed: true },
  { text: 'Cita con el dentista', completed: false },
  { text: 'Comprar pan', completed: false },
  { text: 'Actualización del sitio', completed: false },
]

function App() {
  // Contando TODOs
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(parsedTodos)
  const completedTodos = todos.filter(
    (todo) => {
      return todo.completed === true
    }
  ).length
  const totalTodos = todos.length
  // Buscando TODOs
  const [searchValue, setSearchValue] = useState('')
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  const saveTodos =(newTodos)=>{
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos))
    setTodos(newTodos)
  }
  // Completar TODOs
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  // Eliminar TODOs
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
