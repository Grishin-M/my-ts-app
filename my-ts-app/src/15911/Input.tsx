import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todo/todoSlice";
import './input.css'

const Input = () => {
  const [input, setInput] = useState('')
  
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch(saveTodo({
      name: input,
      done: false,
      id: Date.now(),
    }))
  }

  const updateInput = (event:ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <div className="input">
      <input id="inputAddTodo" type='text' value={input} onChange={updateInput} />
      <button id="btnAddTodo" onClick={addTodo}>Добавить</button>
    </div>
  )
}
export default Input