import React from 'react'
import { useLocalStorage } from './useLocalStorage'

import './App.css'
import { AppUI } from './AppUI'

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  // Counting TODOs
  const completedTodos = todos.filter(
    (todo) => {
      return todo.completed === true
    }
  ).length
  const totalTodos = todos.length
  // Searching TODOs
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })
  // Complete TODOs
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  // Delete TODOs
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
