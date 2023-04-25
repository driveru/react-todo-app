const TodoInput = (props) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={props.newTodoValue}
        placeholder="Create a new todo"
        onChange={(e) => {
          props.handleOnChange(e);
        }}
      />
      <button className="add-button" onClick={props.addTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
