import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddToDoForm";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  addItem = (newItem) => {
    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    return (
      <div className="todoListMain">
        {this.state.items.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
        <AddTodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default TodoList;
