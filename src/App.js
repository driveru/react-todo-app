import { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";
import axios from 'axios'

export class App extends Component {
  state = {
    message: "Hello React App with Json Server!",
    newTodo: '',
    todos: [
      {
        id: '',
        title: '',
        done: false
      }
    ]
  }

  fetchTodos = () => {
    axios.get(`http://localhost:3000/todos`)
      .then(res => {
        // console.log(res)
        const todos = res.data;
        // console.log(todos)
        this.setState({
          ...todos,
          todos
        });
      })
  }

  componentDidMount() {
    this.fetchTodos()
  }


  handleOnChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      newTodo: event.target.value,
      // id: event.target.value
    })
  }

  addTodo = (event) => {
    event.preventDefault()
    // Save data on to json db
    axios.post(`http://localhost:3000/todos`, {
      title: this.state.newTodo,
      done: false
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          newTodo: '',
          todos: [
            ...this.state.todos,
            {
              title: res.data.title,
              done: res.data.done,
              id: res.data.id
            }
          ]
        })
      })
  }

  removeTodo = id => {
    // Remove item from UI 
    const todos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos });

    // Delete data from backend 
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(res => {
        console.log(res.data);
      })
  };
  render() {
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <TodoInput handleOnChange={this.handleOnChange} newTodoValue={this.state.newTodo} addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
};

export default App;
