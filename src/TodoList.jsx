import React, { useState, useEffect } from "react";
import "./App.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTodos(["Initial Task"]);
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([task]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <div className="todo-input-wrapper">
        <input
          className="todo-input"
          placeholder="Add task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="todo-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item">
            {todo}{" "}
            <button className="todo-delete-button" onClick={() => deleteTodo()}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
