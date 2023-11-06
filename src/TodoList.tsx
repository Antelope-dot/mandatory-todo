import { Todo } from "./Global";
import { TodoItem } from "./TodoItem";

interface Props {
    todos: Todo[];
    toggleTodo: any;
    deleteTodo: any;
    deleteTodos: any;
}

export const TodoList = ({ todos, toggleTodo, deleteTodo, deleteTodos }: Props) => {

    return (
        <>
            <h1 className="header">Todo List</h1>
            <ul className="list">
                {todos.length === 0 ? "No Todos" : <button onClick={() => deleteTodos()} className="btn"> Deleted completed </button>}
                {todos.map(todo => {
                   return (
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                   ) 
                })}

            </ul>

        </>
    )
}