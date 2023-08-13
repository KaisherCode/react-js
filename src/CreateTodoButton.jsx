import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton flex justify-center items-center text-white font-bold border-none text-5xl bottom-6 right-6 w-16 h-16 bg-indigo-500 rounded-full cursor-pointer fixed hover:rotate-180">+</button>
  )
}

export { CreateTodoButton } 