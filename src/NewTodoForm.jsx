import React, { useState } from "react";

const NewTodoForm = ({addItem}) => {
  const [newItem, setItem] = useState("");

  const onChangeNewItem = event => {
    setItem(event.target.value);
  };

  const onClick = () => {
    addItem(newItem);
  };

  return (
    <div className="newTodo">
    <input
        placeholder="Task"
        value={newItem}
        onChange={onChangeNewItem}
    />
    <button type="submit" onClick={onClick}>
        Add To Do
    </button>
    </div>
  );
};

export default NewTodoForm;
