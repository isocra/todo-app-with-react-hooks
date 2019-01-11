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
      {items.map(item => (
        <TodoItem item={item} />
      ))}
      <NewTodoForm addItem={addNewItem}/>
    </div>
  );
};

export default TodoList;
