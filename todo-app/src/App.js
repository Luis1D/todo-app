import React, { useState } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/TodoComponents/Header';
import "./styles/app.scss";

const todoData = [];

function App() {
  const [todos, setTodoData] = useState(todoData);
  console.log("DATA: ",todos);
  // Adds a line through completed items when clicked
  const todoCompleted = id => {
    setTodoData(
      todos.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          } 
        } else {
          return item;
        }
      })
    );
  };

  // Clears finished todos
  const clearTodos = () => {
    setTodoData(
      todos.filter(item => !item.completed)
    );
  };

  // Adds a new todo item to props when wanting to submit a new item
  const addItem = itemName => {
    setTodoData([
      ...todos,
      {
        task: itemName,
        id: Date.now(),
        completed: false
      }
    ])
  }

  return (
    <div className="main-wrapper">
    <Header />
    <div className="body-container">
        <TodoForm 
          addItem = { addItem }
        />
        <div className="list-container">
          <TodoList 
            todos = { todos }
            todoCompleted = { todoCompleted }
            clearTodos = { clearTodos }
          />
        </div>
        <button className="clear-btn" onClick = { () => clearTodos(todos) }>Clear Completed</button>
        <div className="todo-stats">
          <h3>{ todos.length === 0 ? 'You have no todos' : `Todos left: ${todos.length}` }</h3>
        </div>
      </div>
    </div>
  );
}

export default App;