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
  const [todos, setTodos] = useState(defaultTodos)
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
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
