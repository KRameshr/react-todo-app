import React from "react";
import { Star, Trash2, Edit3, CheckCircle, Circle } from "lucide-react";

const Todolist = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <button className="star-icon">
            <Star size={18} strokeWidth={1.5} />
          </button>

          <div className="todo-content">
            <span
              className="check-circle"
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.completed ? (
                <CheckCircle size={22} color="#444" fill="#444" />
              ) : (
                <Circle size={22} color="#444" />
              )}
            </span>
            <span className="todo-text">{todo.text}</span>
          </div>

          <div className="todo-footer">
            <span className="todo-date">{new Date().toLocaleDateString()}</span>
            <div className="todo-actions">
              <button
                onClick={() => removeTodo(todo.id)}
                className="delete-btn"
              >
                <Trash2 size={18} />
              </button>
              <button onClick={() => editTodo(todo)} className="edit-btn">
                <Edit3 size={18} />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
