import React, { Component } from "react";

class AddTodoForm extends Component {
  constructor() {
    super();

    this.state = {
      newItem: ""
    };
  }

  onChangeNewItem = event => {
    this.setState({ newItem: event.target.value });
  };

  onClick = () => {
    this.props.addItem(this.state.newItem);
  };

  render() {
    return (
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
    );
  }
}

export default AddTodoForm;
