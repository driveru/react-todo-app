const TodoList = (props) => {
  return (
    <>
      {props.todos?.length > 0 ? (
        <ul className="todo-list">
          {props.todos.map((todo) => (
            <div className="todo">
              <li key={todo.id}> {todo.title} </li>

              <button
                className="delete-button"
                onClick={() => {
                  props.removeTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
