import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import './TodoItem.css';

function TodoItem(props){
  return(
  <li className=' drop-shadow-lg bg-slate-50 relative flex justify-center items-center mt-6 rounded-lg hover:border hover:border-indigo-400'>
    <span className={` cursor-pointer ${props.completed && ' text-green-500 '}`}><CheckIcon className='w-6 h-6'/></span>
    <p className={` my-6 mr-0 ml-6 text-start text-lg font-normal leading-6 w-4/5 ${props.completed && 'line-through'}`}>{props.text}</p>
    <span className='absolute top-0 right-0 cursor-pointer hover:text-red-400'><TrashIcon className='w-6 h-6'/></span></li>);}
export{TodoItem};