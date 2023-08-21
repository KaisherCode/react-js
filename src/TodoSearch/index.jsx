import React from 'react'
import {TodoContext} from '../TodoContext'
import './TodoSearch.css'


function TodoSearch() {
    const {
      searchValue,
      setSearchValue,
    }=React.useContext(TodoContext)
  return (
    <input className=" bg-white rounded-3xl border-2 mx-0 my-6 h-16 w-11/12 text-2xl text-center font-sans hover:font-sans font-normal shadow-slate-50 focus:outline-1 focus:outline-indigo-200 " placeholder="Buscar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }} />
  )
}
export { TodoSearch }