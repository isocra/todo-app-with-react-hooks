import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      newItem: ""
    };
  }

  onChangeNewItem = event => {
    this.setState({ newItem: event.target.value });
  };

  onClick = () => {
    this.setState({ items: [...this.state.items, this.state.newItem] });
  };

  render() {
    return (
      <div className="todoListMain">
        {this.state.items.map(item => (
          <TodoItem item={item} />
        ))}
        <div className="newTodo">
          <input
            placeholder="Task"
            value={this.state.newItem}
            onChange={this.onChangeNewItem}
          />
          <button type="submit" onClick={this.onClick}>
            Add To Do
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
