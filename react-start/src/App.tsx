import React, { Component } from 'react';
import AddTodo from './componets/AddTodo';
import TodoList from './components/TodoList';
// import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
