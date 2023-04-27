import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";
import Theme from "./Theme.jsx";
import "./App.css";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "DSA Questions", done: true },
  { id: 1, title: "Open Source", done: true },
  { id: 2, title: "React Documentation", done: true },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    document.body.classList.toggle("dark-theme-variables");
    setTheme(theme === "light" ? "dark" : "light");
  }

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
      <Theme toggleTheme={toggleTheme} theme={theme} />
      <h1>Todo List📋</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <h1 className="quote">
        "Don't wait for opportunities, create them." - Roy T. Bennett
      </h1>
    </>
  );
}
