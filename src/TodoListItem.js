import React from "react";

function TodoListItem({ item, onRemoveTodo }) {
  return (
    <div>
      <li>{item.title}</li>
      <button onClick={() => onRemoveTodo(item.id)}>Remove</button>
    </div>
  );
}

export default TodoListItem;
