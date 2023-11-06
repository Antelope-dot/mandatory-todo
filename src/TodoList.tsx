import { Todo } from "./Global";
import { TodoItem } from "./TodoItem";

interface Props {
    todos: Todo[];
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
    deleteTodos: () => void;
    checkTodos: () => void;
}

export const TodoList = ({ todos, toggleTodo, deleteTodo, deleteTodos, checkTodos }: Props) => {

    return (
        <>
            <h1 className="header">Todo List</h1>
            <ul className="list">

                <button onClick={() => checkTodos()} className="btn"> Check todos </button>
                {todos.map(todo => {
                   return (
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                   ) 
                })}
                {todos.length === 0 ? "No Todos" : <button onClick={() => deleteTodos()} className="btn"> Delete done </button>}
            </ul>

        </>
    )
}