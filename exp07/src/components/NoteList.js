import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, updateNote, deleteNote }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="empty-message">No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
