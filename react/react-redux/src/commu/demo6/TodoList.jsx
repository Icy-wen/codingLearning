import { useRef } from 'react';
import './TodoList.css'
import { useSelector,useDispatch } from "react-redux";
import { addTodo ,toggleTodo,toggleAll,deleteTodo} from '../../store/modules/todoList';
function App() {
    const {list} = useSelector(state=>state.todoList)
    const inputRef = useRef()
    const dispatch = useDispatch()
    const addTodoAction = ()=>{
        const value = inputRef.current.value.trim();
        if (!value) return;
        dispatch(addTodo(value))
    }
    
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          ref={inputRef}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              addTodoAction();
              inputRef.current.value = ''; // 清空输入框
            }
          }}
        />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onChange={() => dispatch(toggleAll(true))}/>
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
            {list.map(item=>
        <li key={item.id} className={item.completed?'todo completed':'todo'}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toggleTodo(item.id))}
              />
              <label>{item.name}</label>
              <button className="destroy" onClick={() => dispatch(deleteTodo(item.id))}></button>
            </div>
          </li>)
}
        </ul>
      </section>
    </section>
  )
}

export default App