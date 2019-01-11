import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoListWithHooks';

class App extends Component {

  state = {
    todos: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        To Do List
        </header>
        <TodoList/>
      </div>
    );
  }
}

export default App;
