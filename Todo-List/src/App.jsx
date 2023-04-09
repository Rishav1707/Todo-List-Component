import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";
import "./App.css";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "DSA Questions", done: true },
  { id: 1, title: "Open Source Contribution", done: true },
  { id: 2, title: "React Documentation", done: true },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
