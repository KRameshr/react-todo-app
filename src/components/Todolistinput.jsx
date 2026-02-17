import React, { useState, useEffect } from "react";

const Todolistinput = ({ addTodo, editingTodo, updateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setInputValue(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, inputValue);
    } else {
      addTodo(inputValue);
    }
    setInputValue("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder={editingTodo ? "Update todo..." : "Add todo here"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={!inputValue.trim() && editingTodo ? "error" : ""}
      />
      <button type="submit">{editingTodo ? "✓" : "+"}</button>
    </form>
  );
};

export default Todolistinput;
