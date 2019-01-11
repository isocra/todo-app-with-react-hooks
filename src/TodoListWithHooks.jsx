import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setItem] = useState("");

  const onChangeNewItem = event => {
    setItem(event.target.value);
  };

  const onClick = () => {
    setItems([...items, newItem]);
  };

  return (
    <div className="todoListMain">
      {items.map(item => (
        <TodoItem item={item} />
      ))}
      <div className="header">
        <input
          placeholder="Task"
          value={newItem}
          onChange={onChangeNewItem}
        />
        <button type="submit" onClick={onClick}>
          Add To Do
        </button>
      </div>
    </div>
  );
};

export default TodoList;
