import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./styles.css";

function App() {
  const [notes, setNotes] = useState([]);

  // Add note
  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), text: note }]);
  };

  // Update note
  const updateNote = (id, updatedText) => {
    setNotes(notes.map((note) => 
      note.id === id ? { ...note, text: updatedText } : note
    ));
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Notes Manager</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;