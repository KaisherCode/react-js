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
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(
    (todo) => {
      return todo.completed === true
    }
  ).length

  const totalTodos = todos.length

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
        {defaultTodos.map(todo => (
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
