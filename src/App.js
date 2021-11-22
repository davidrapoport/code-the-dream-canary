import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistantState() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistantState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
