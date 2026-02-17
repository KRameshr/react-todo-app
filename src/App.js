import React, { useState } from "react";
import Todolistinput from "./components/Todolistinput";
import Todolist from "./components/Todolist";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false, starred: false };
    setTodos([...todos, newTodo]);
  };

  // Update existing todo
  const updateTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
    setEditingTodo(null);
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Todo List</h1>
        <Todolistinput
          addTodo={addTodo}
          editingTodo={editingTodo}
          updateTodo={updateTodo}
        />
        <Todolist
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={setEditingTodo}
        />
      </div>
    </div>
  );
}

export default App;
