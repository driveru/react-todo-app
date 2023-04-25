import React from 'react'



const TodoItem = (props) => {

    return (
        <div>
            <li key={props.todo.id}>
                <input
                    type="checkbox"
                    onChange={() => props.toggleTodoDone()}
                    checked={props.todo.done}
                    value={props.todo.id}
                />
                <span className={props.todo.done ? "done" : 'not-done'}>
                    {props.todo.title}
                </span>
                <span className="delete-todo">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={(event) => props.removeTodo()}
                    >
                        x
                    </button>
                </span>
            </li>

        </div>
    )
}

export default TodoItem
