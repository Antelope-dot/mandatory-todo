import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";

//What todo object should look like
interface todo {
  id: string;
  title: string;
  completed: boolean;
}

// Initialize component in this case app
// Typescript function expression:
// const NameHere = () => { } 
const App = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodo = (title: string) => {
      setTodos((currentTodos) => [
            ...currentTodos,
            {
                id: crypto.randomUUID(),
                title: title,
                completed: false,
            },
      ]);
  }

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed }
        }
        return todo;
      })
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const deleteTodos = () => {
    setTodos(
      todos.filter(todo => !todo.completed)
    )
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 ? "No Todos" : <button onClick={() => deleteTodos()} className="btn">Deleted completed</button>}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox"
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} 
              className="btn btn-danger">Delete</button>
            </li>
          )
        })}
        
      </ul>
    </>
  );
}

export default App;