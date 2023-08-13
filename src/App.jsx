import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

import './App.css'

const defaultTodos = [
  { text: 'Hacer 30 minutos de yoga', completed: true },
  { text: 'Cita con el dentista', completed: true },
  { text: 'Comprar pan', completed: false },
  { text: 'Actualización del sitio', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter completed={3} total={5} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
