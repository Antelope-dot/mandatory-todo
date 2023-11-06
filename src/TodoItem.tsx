interface Props {
    id: string;
    title: string;
    completed: boolean;
    toggleTodo: any;
    deleteTodo: any;
}

export const TodoItem = ({ id, completed, title, toggleTodo, deleteTodo }: Props) => {
    return (
        <li key={id}>
            <label>
                <input type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="btn btn-danger">Delete</button>
        </li>
    )
}