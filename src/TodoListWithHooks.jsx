import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoFormWithHooks";

const TodoList = () => {
  const [items, setItems] = useState([]);

  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="todoListMain">
    {items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
      <AddTodoForm addItem={addNewItem}/>
    </div>
  );
};

export default TodoList;
