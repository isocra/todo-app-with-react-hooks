import React, { useState } from "react";
import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [items, setItems] = useState([]);

  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="todoListMain">
    {this.state.items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
      <NewTodoForm addItem={addNewItem}/>
    </div>
  );
};

export default TodoList;
