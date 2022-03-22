import { FC } from 'react'
import './todoItem.css'
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todo/todoSlice';

interface TodoItemProp {
  name: string;
  done: boolean;
  id: string;
}

const TodoItem:FC<TodoItemProp>  = ({name, done, id}) => { 
  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  }
  return (
    
    <div className='todoItem'>
      <input type="checkbox" onChange={handleCheck} className="checkbox"></input>
      <p className={done ? 'todoItem--done' : ''}>{name}</p>
    </div>
  )
}

export default TodoItem