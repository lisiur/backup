import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/VisibilityFilter';
// import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilter />
      </div>
    );
  }
}

export default App;
