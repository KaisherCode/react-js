import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    loading,
    error,
    item: todos,
    saveItem: saveTodos,
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
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
  // Create TODOs
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }
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
    <TodoContext.Provider value={
      {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }
    }>
      {children}
    </TodoContext.Provider>
  )
}
export { TodoContext, TodoProvider }