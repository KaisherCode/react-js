import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import './App.css'

function App() {
  return (
    <>
      <div>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>
        {/* <CreateTodoButton /> */}
      </div>
    </>
  )
}

export default App
