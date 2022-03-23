import './App.css';
import Input from './15911/Input'
import TodoItem from './15911/TodoItem';
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todo/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className='wrapper'>
      <div className='wrapp_container'>
        <div className='wrapp_todoContainer'>
          {
            todoList.map((item) => {
            return (
              <TodoItem
                name={item.name}
                done={item.done}
                id={item.id}
                key={item.id.toString()}
              />
            )})
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
