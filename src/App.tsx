import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { Todo } from "./Global";



// Initialize component in this case app
// Typescript function expression:
// const NameHere = () => { } 
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} deleteTodos={deleteTodos} />
    </>
  );
}

export default App;