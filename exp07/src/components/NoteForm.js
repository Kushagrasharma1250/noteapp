import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addNote(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a new note..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="note-input"
      />
      <button type="submit" className="add-button">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
