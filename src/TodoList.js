import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map((item) => {
        return <TodoListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default TodoList;
