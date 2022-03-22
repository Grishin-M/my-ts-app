import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

export interface CounterState {
  todoList: { name: string, item: string, id: string, done: boolean }[];
}

const initialState: CounterState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if(action.payload === item.id) {
            if(item.done === true) {
              item.done = false
            } else {
              item.done = true
            }
        }
      })
    }
  }
});

export const { saveTodo, setCheck } = todoSlice.actions

export const selectTodoList = (state:RootState) => state.todos.todoList

export default todoSlice.reducer